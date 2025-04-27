export const Button = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

export const ContainerButtons = () => {
  return (
    <div>
      <Button text={"me gusta"}></Button>
      <Button text={"comentar"}></Button>
      <Button text={"compartir"}></Button>
    </div>
  );
};
