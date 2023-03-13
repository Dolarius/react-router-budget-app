// rrd imports
import { Form, NavLink } from "react-router-dom";

// library
import { TrashIcon } from "@heroicons/react/24/solid";

// assets
import logomark from "../assets/logomark.svg";

type NavProps = {
  userName: any;
};

const Nav = ({ userName }: NavProps) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} alt="Logo of a house" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20}></TrashIcon>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
