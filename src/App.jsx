import "./App.css";
import { Input } from "../components/atoms/Input";
import { useState } from "react";

const estadoInicial = [
  {
    component: "input",
  },
];

function App() {
  const [content, setContent] = useState(estadoInicial);

  const handleSubmit = () => {
    setContent([
      ...content,
      {
        component: "input",
      },
    ]);
  };

  const handleDelete = (index) => {
    const updateArray = [...content];
    updateArray.splice(index, 1);

    setContent(updateArray);
  };

  return (
    <>
      {content.map((item, indice) => {
        if (item.component == "input") {
          return (
            <Input
              key={indice}
              index={indice}
              onSubmit={handleSubmit}
              onDelete={handleDelete}
            ></Input>
          );
        }
      })}
    </>
  );
}

export default App;
