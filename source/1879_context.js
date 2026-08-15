// Module ID: 1879
// Function ID: 1880
// Name: context
// Dependencies: [19]
// Exports: useToolbarContext

// Module 1879 (context)
import noop from "noop";

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
