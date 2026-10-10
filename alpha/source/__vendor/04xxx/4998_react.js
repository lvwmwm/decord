// Module ID: 4998
// Function ID: 4999
// Name: react
// Dependencies: [19, 4995]
// Exports: usePortalState

// Module 4998 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 4995 */;

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
