"use client";
import LinkButton from "./LinkButton";
import { contacts } from "../utils/contacts";

const Footer = (props: { className: string }): JSX.Element => {
  const styles = `flex flex-col text-center ${props.className}`;

  return (
    <footer className={styles}>
      <p>&copy; Copyright {new Date().getFullYear()}</p>
      <ul className="flex flex-row mx-auto">
        {contacts.map((el) => (
          <LinkButton
            key={el.title}
            className="px-2 m-2"
            title={el.title}
            path={el.path}
            href={el.href}
            viewBox={el.viewBox}
            color={el.color}
            width={40}
            height={40}
          />
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
