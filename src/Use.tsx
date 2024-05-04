import { Suspense, use } from "react";

function getRandomColor(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

      resolve(color);
    }, 1500);
  });
}

export default function UseWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Use />
    </Suspense>
  );
}

function Use() {
  const color = use(getRandomColor());

  return <div style={{ width: 100, height: 100, backgroundColor: color }} />;
}
