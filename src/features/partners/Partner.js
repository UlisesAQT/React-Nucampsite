// // src/components/Partner.js
// const Partner = ({ partner }) => {
//   return (
//     <div>
//       <h5>{partner.name}</h5>
//       <p>{partner.description}</p>
//     </div>
//   );
// };

// export default Partner;
// src/components/Partner.js
import React from "react";

const Partner = ({ partner }) => {
  return (
    <div className="partner-card" style={{ maxWidth: "300px", margin: "0 auto" }}>
      <img
        src={partner.image}
        alt={partner.name}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      <h5 style={{ marginTop: "10px" }}>{partner.name}</h5>
      <p>{partner.description}</p>
    </div>
  );
};

export default Partner;
