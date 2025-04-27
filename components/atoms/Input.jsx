import { useRef, useEffect, useState } from "react";

export const Input = ({ onSubmit, index, onDelete }) => {
  const [content, setContent] = useState("");
  const refInput = useRef();

  const handleChange = (e) => {
    console.log(e.key);
    setContent(e.target.value);
  };

  const handleKeyDown = (e) => {
    console.log(e.key, index);
    console.log(e.key == "Backspace");
    if (e.key == "Backspace") {
      onDelete(index);
    }
  };

  useEffect(() => {
    refInput.current?.focus();
  }, []);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          ref={refInput}
          onChange={handleChange}
          value={content}
          onKeyDown={handleKeyDown}
        />
      </form>
    </>
  );
};
