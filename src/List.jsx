import React from "react";
import data from "./Data";

export default function List() {
  return (
    <div>
      <p>osman</p>
      <ul>
        {data.map((item) => {
          return (
            <>
              <p>jahid</p>
              <li key={item.id}>
                id: {item.id}, name: {item.name}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
