import { Fragment } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data/data";
import InvoiceLink from "../components/InvoiceLink";

export default function Invoices() {
  const [searchParams, setSearchParams] = useSearchParams();

  const inputFilterChangeHandler = (event) => {
    const filter = event.target.value;
    filter ? setSearchParams({ filter }) : setSearchParams({});
  };

  const invoiceList = getInvoices().filter((invoice) => {
        let filter = searchParams.get("filter");
        if(!filter){
            return invoice
        }
        let name = invoice.name.toLowerCase();
        return name.startsWith(filter.toLowerCase());
      });
  console.log("invoiceList", invoiceList);
  return (
    <Fragment>
      <h2>Invoices</h2>
      <nav>
        <input
          type="text"
          value={searchParams.get("filter") || ""}
          onChange={inputFilterChangeHandler}
        />
        {invoiceList.map((invoice) => (
          <InvoiceLink key={invoice.number} to={invoice.number} name={invoice.name} />
        ))}
      </nav>
      <Outlet />
    </Fragment>
  );
}
