import { useParams, useNavigate, useLocation } from "react-router-dom";
import { findInvoice, deleteInvoice } from "../data/data";

export default function Invoice(){
    let navigate = useNavigate();
    let location = useLocation()
    let {invoiceId} = useParams();
    const {name, number, amount, duo} = findInvoice(invoiceId);

    const deleteInvoiceHandler = () => {
        deleteInvoice(number);
        navigate("/invoices" + location.search)

    }
    return <div>
        <h3>Invoice #{number}</h3>
        <p>Name: {name}</p>
        <p>Amount: {amount}</p>
        <p>Duo: {duo}</p>
        <button onClick={deleteInvoiceHandler}>Delete</button>
    </div>
}