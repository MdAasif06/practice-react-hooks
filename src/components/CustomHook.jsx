import LocalStorage from "./LocalStorage";

const CustomHook = () => {
  const [name, setName] = LocalStorage("username", "");
  const [id, setId] = LocalStorage("userId", "");

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter your id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <h2>Hello, {name} && {id}</h2>
    </>
  );
};

export default CustomHook;
