import { useState } from "react";
import { certificates } from "../../data/mockData";
import { getStatus } from "../../utils/dateUtils";
import StatusBadge from "../../components/StatusBadge";
import Modal from "../../components/Modal";

interface Certificate {
  id: number;
  name: string;
  domain: string;
  issuer: string;
  expiry: string;
}

export default function Certificates() {
  const [selected, setSelected] =
    useState<Certificate | null>(null);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Certificates
      </h2>

      <table className="w-full bg-white dark:bg-gray-800 rounded shadow">
        <thead>
          <tr className="text-left text-sm border-b">
            <th className="p-3">Name</th>
            <th>Domain</th>
            <th>Issuer</th>
            <th>Status</th>
            <th>Expiry</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {certificates.map((c: Certificate) => {
            const status = getStatus(c.expiry);
            return (
              <tr key={c.id} className="border-b text-sm">
                <td className="p-3">{c.name}</td>
                <td>{c.domain}</td>
                <td>{c.issuer}</td>
                <td>
                  <StatusBadge status={status} />
                </td>
                <td>{c.expiry}</td>
                <td>
                  <button
                    onClick={() => setSelected(c)}
                    className="text-blue-600 text-xs"
                  >
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <pre className="text-xs">
            {JSON.stringify(selected, null, 2)}
          </pre>
        </Modal>
      )}
    </div>
  );
}
