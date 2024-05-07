import { useOptimistic, useState } from "react";

function updateName(name: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        resolve(name);
      } else {
        reject(new Error("name update failed"));
      }
    }, 1500);
  });
}

function UseOptimistic() {
  const [name, setName] = useState<string>("김솔");

  const [optimisticName, setOptimisticName] = useOptimistic(name);

  const submitAction = async (formData: FormData) => {
    const newName = formData.get("name") as string;
    setOptimisticName(newName);
    const updatedName = await updateName(newName);
    setName(updatedName);
  };

  return (
    <form action={submitAction}>
      <p>Your name is: {optimisticName}</p>
      <p>
        <label>Change Name:</label>
        <input type="text" name="name" disabled={name !== optimisticName} />
      </p>
    </form>
  );
}

export default UseOptimistic;
