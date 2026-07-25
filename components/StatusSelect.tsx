"use client";

import { useState } from "react";

type Props = {
  id: string;
  currentStatus: "NEW" | "CONTACTED" | "CLOSED";
};

export default function StatusSelect({
  id,
  currentStatus,
}: Props) {
  const [status, setStatus] = useState(currentStatus);

  async function handleChange(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const newStatus = e.target.value;

    setStatus(newStatus as Props["currentStatus"]);

    await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: newStatus,
      }),
    });
  }

  return (
    <select
      value={status}
      onChange={handleChange}
      className="border rounded p-2"
    >
      <option value="NEW">NEW</option>
      <option value="CONTACTED">CONTACTED</option>
      <option value="CLOSED">CLOSED</option>
    </select>
  );
}