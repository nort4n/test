type Props = {
  message: string;
};
export default function Button({ message }: Props) {
  function myClick() {
    alert(message);
  }
  return (
    <div>
      <button onClick={myClick}>Click me!</button>
    </div>
  );
}
