import React, { useState } from "react";

const EditName = (props) => {
  const { display, toggleDisplay } = props;
  const [text, setText] = useState("");

  return (
    <>
      <button onClick={toggleDisplay}>表示非表示</button>
      {display ? (
        <div>
          <p>名前を入力してください</p>
          <div>
            <input value={text} onChange={(e) => setText(e.target.text)} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditName;
