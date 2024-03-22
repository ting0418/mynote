import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="container mt-3 ">
        <Link className="mx-3" href="../dashboard/customers/">
          <button className="btn btn-primary">customers</button>
        </Link>
        <Link className="mx-3" href="../dashboard/invoices/">
          <button className="btn btn-primary">invoice</button>
        </Link>
      </div>
    </>
  );
}
