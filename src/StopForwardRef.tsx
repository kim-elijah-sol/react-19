import { useRef } from "react";

function SteopForwardRef() {
  const $input = useRef<HTMLInputElement>(null);

  function focus() {
    $input.current?.focus();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
      }}
    >
      <h1>stop forwardRef</h1>
      <MyInput ref={$input} />
      <button onClick={focus}>Focus</button>
    </div>
  );
}

/**
 * 이제 forwardRef 를 사용하지 않아도 ref 에 접근할 수 있음
 */
function MyInput({
  ref,
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return <input ref={ref} type="text" />;
}

export default SteopForwardRef;
