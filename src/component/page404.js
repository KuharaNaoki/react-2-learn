import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <h1>ページが見つかりません</h1>
      <Link to="/">ホームへ戻る</Link>
    </>
  );
};

export default Page404;
