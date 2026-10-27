// Module ID: 1880
// Function ID: 1881
// Name: react
// Dependencies: [19]
// Exports: useToolbarContext

// Module 1880 (react)
import react from "react" /* 19 */;

const useContext = react.useContext;
const context = react.createContext(undefined);

export const ToolbarContext = context;
export const useToolbarContext = function() {
  const tmp = useContext(context);
  if (tmp) {
    return tmp;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("KeyboardToolbar.* component must be used inside <KeyboardToolbar>");
    throw error;
  }
};
