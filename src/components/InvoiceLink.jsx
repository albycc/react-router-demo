import { NavLink, useLocation } from "react-router-dom";

function InvoiceLink({ to, name }) {
  let location = useLocation();
  return (
    <div>
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? "red" : "blue" };
        }}
        to={to + location.search}
      >
        {name}
      </NavLink>
    </div>
  );
}

export default InvoiceLink;
