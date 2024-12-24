import { useState } from "react";
import "./App.css";
import ItemForm from "./components/Crud/Form/ItemForm";

function App() {
  const [selectedItem, setSlectedItem] = useState<ICrudItem | null>(null);

  const handleClear = () => {
    setSlectedItem(null);
  };

  return (
    <>
      <ItemForm selectedItem={selectedItem} onClear={handleClear} />
    </>
  );
}

export default App;
