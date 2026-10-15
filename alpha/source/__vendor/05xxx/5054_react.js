// Module ID: 5054
// Function ID: 5055
// Name: react
// Dependencies: [19, 5051]
// Exports: usePortalState

// Module 5054 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5051 */;

const useContext = react.useContext;

export const usePortalState = function(arg0) {
  const tmp = useContext(react2.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
