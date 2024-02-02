function Onhand() {
  return <h1>My Strawhat</h1>;
}

function show() {
  return <h1>My Gum gum fruit</h1>;
}

function Notonhand() {
    return <h1>The Red Vest</h1>;
  }
const isOnhand = false;

function Things(props) {
  const isOnhand = props.isOnhand;
  return isOnhand ? <Onhand/> : <Notonhand />;
}

export default function App() {
  return (
    <div 
    className={`${isOnhand === false ? "onhand" : "notonhand"}`}>
      <Things isOnhand={isOnhand} />
    </div>
  );
}
