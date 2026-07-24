// Module ID: 1807
// Function ID: 19934
// Name: context
// Dependencies: [31]
// Exports: useToolbarContext

// Module 1807 (context)
import result from "result";

const useContext = result.useContext;
const context = result.createContext(undefined);

export const ToolbarContext = context;
export const useToolbarContext = function useToolbarContext() {
  const tmp = useContext(context);
  if (tmp) {
    return tmp;
  } else {
    const _Error = Error;
    const error = new Error("KeyboardToolbar.* component must be used inside <KeyboardToolbar>");
    throw error;
  }
};
