import ListGroup from "./components/ListGroup";

function App() {
  const items = ["banana1", "banana2", "banana3", "banana4"];

  const handleSelectItem = () => "x";

  return (
    <div>
      <ListGroup
        items={items}
        heading={"banana"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
