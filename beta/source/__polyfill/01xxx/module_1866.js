// Module ID: 1866
// Function ID: 1867
// Dependencies: [19]
// Exports: useToolbarContext

// Module 1866
import noop from "module_19" /* 19 */;

const useContext = noop.useContext;
const context = noop.createContext(undefined);

export const ToolbarContext = context;
export const useToolbarContext = () => {
  const tmp = useContext(context);
  if (tmp) {
    return tmp;
  } else {
    const _Error = Error;
    const error = new Error("KeyboardToolbar.* component must be used inside <KeyboardToolbar>");
    throw error;
  }
};
