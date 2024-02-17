import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className={selectedIndex ? "clase-man" : "clas"}>
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              onSelectItem(item);
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// Synthetic base event object for cross browser compatability
// when changing the value with the setter function in react, all parts of code with that variable are executed again. Rerendered
// Copies of components have independent state by default

// props immuitable(until passed to function) and state mutable. both when changed code -> rerender
// There are component modifiers and components. Components have state to keep track of changes to their variables. 
// Component modifies use functions passed as callbacks to event listeners to change those vars in components
// useState also for tracking a state like open or closed
// In next js client components can't do redirects, but can populate db