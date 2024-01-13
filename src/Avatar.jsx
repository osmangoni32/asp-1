import React from "react";

export default function Avatar({ children, value, ...rest }) {
    const restAsString = JSON.stringify(rest);
  return (
    <div>
      {children}
          <h1>{value}</h1>
          <p>{restAsString}</p>
    </div>
  );
}
