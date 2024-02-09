import { useState } from "react";

export function AddRemark() {
  const [newRemark, setNewRemark] = useState("");
  const [remarks, setRemarks] = useState([
    { id: crypto.randomUUID(), name: "Remark 1" },
    { id: crypto.randomUUID(), name: "Remark 2" },
  ]);

  function addNewRemark() {
    setRemarks((currentRemarks) => {
      return [...currentRemarks, { id: crypto.randomUUID(), name: newRemark }];
    });
  }

  function deleteRemark(remarkId) {
    setRemarks((currentRemarks) => {
      return currentRemarks.filter((remark) => remark.id !== remarkId);
    });
  }

  return (
    <>
      <div>
        {remarks.map((remark) => {
          return (
            <div key={remark.id}>
              {remark.name}
              <input type="text" className="remarkText" />
              <button onClick={() => deleteRemark(remark.id)}>Delete</button>
            </div>
          );
        })}
      </div>
      <input
        type="text"
        value={newRemark}
        onChange={(e) => setNewRemark(e.target.value)}
      />
      <button onClick={addNewRemark}>Add your new remarks!</button>
    </>
  );
}
