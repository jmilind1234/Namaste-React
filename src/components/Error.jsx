import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Oops!!!</h1>
      <div>Something went wrong.</div>
      <div>{err?.data}</div>
    </>
  );
};

export default Error;
