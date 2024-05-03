import { useActionState, useState } from "react";

function getRandomColor(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccessful = Math.random() > 0.5;

      if (isSuccessful) {
        const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

        resolve(color);
      } else {
        reject(new Error("Data fetching failed"));
      }
    }, 1500);
  });
}

function UseTransition() {
  const [error, setError] = useState<string | null>(null);

  /**
   * 첫 번째 인자는 액션 함수
   * 두 번째 인자는 초기 상태
   *
   * 첫 번째 return 값은 상태 값
   * 두 번째 return 값은 인자로 넘긴 액션 함수를 래핑한 함수
   * 세 번째 return 값은 액션 함수가 실행 중인지 여부
   *
   * 첫 번째 generic은 상태의 타입
   * 두 번째 generic은 액션 함수의 인자 타입 : 이 값이 전달되지 않으면 액션 함수를 void 함수로 취급함
   */
  const [color, submitAction, isPending] = useActionState<
    string,
    React.MouseEvent<HTMLButtonElement>
  >(async (previousState, payload) => {
    console.log(payload.currentTarget.innerText);

    try {
      const color = await getRandomColor();

      return color;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }

      return previousState;
    }
  }, "#0064FF");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
      }}
    >
      <button onClick={submitAction} disabled={isPending}>
        Change color
      </button>
      {error && <p style={{ color: "#f00", margin: 0 }}>{error}</p>}
      <div style={{ width: 100, height: 100, backgroundColor: color }} />
    </div>
  );
}

export default UseTransition;
