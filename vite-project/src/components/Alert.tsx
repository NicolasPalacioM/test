import { ReactNode } from "react";

interface Props {
  children: ReactNode | "";
  onClick?: () => void;
}

const Alert = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Alert;

// children for passing children html to components, enclose in html
// Inspect matching dom element for see the .. <=
// When clicking buttons, button submit logic should be handled elsewhere for reusability of component
// For this pass onclick as props and give callback from main.js or where it's used
// Default value in prms
// return different values for type of values in interface, super specific
// A variable in braces, that is a voolean, won't output to the fe, so this is possible vas = 19