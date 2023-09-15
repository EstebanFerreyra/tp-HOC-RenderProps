import Toggle from "./components/toggle/Toggle";
import Tooltip from "./components/toolTip/ToolTip";

const App = () => {
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header text-center">
          <h1>Beer Info</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <Toggle>
                <Tooltip text="Aca mostramos la informacion de la IPA">
                  <h2 className="mt-3">IPA</h2>
                </Tooltip>
              </Toggle>
            </div>
            <div className="col-md-3">
              <Toggle>
                <Tooltip text="Aca mostramos la informacion de la Honey">
                  <h2 className="mt-3">Honey</h2>
                </Tooltip>
              </Toggle>
            </div>
            <div className="col-md-3">
              <Toggle>
                <Tooltip text="Aca mostramos la informacion de la Red">
                  <h2 className="mt-3">Red</h2>
                </Tooltip>
              </Toggle>
            </div>
            <div className="col-md-3">
              <Toggle>
                <Tooltip text="Aca mostramos la informacion de la Irish">
                  <h2 className="mt-3">Irish</h2>
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


