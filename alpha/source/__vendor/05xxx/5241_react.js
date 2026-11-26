// Module ID: 5241
// Function ID: 5242
// Name: react
// Dependencies: [19, 5238]
// Exports: usePortalState

// Module 5241 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5238 */;

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
