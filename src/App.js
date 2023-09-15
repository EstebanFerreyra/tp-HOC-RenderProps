import Toggle from "./components/toggle/Toggle";
import Tooltip from "./components/toolTip/ToolTip";

// const App = () => {
//   return (
//     <div className="container">
//       <h1 className="mt-5">Beer Info</h1>
//       <div className="row">
//         <div className="col-md-6">
//           <Toggle>
//             <Tooltip text="Aca mostramos la informacion de la IPA">
//               <h2 className="mt-3">IPA</h2>
//             </Tooltip>
//           </Toggle>
//         </div>
//         <div className="col-md-6">
//           <Toggle>
//             <Tooltip text="Aca mostramos la informacion de la Honey">
//               <h2 className="mt-3">Honey</h2>
//             </Tooltip>
//           </Toggle>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from 'react';

const App = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Beer Info</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <Toggle>
                <Tooltip text="Aca mostramos la informacion de la IPA">
                  <h2 className="mt-3">IPA</h2>
                </Tooltip>
              </Toggle>
            </div>
            <div className="col-md-6">
              <Toggle>
                <Tooltip text="Aca mostramos la informacion de la Honey">
                  <h2 className="mt-3">Honey</h2>
                </Tooltip>
              </Toggle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
