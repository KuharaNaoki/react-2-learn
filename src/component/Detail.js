import { Link, Outlet } from "react-router-dom";

const Detail = () => {
  return (
    <>
      <div>
        <h1>Detail</h1>
        <Link to="page1">page1</Link>
        <br />
        <Link to="page2">page2</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Detail;
