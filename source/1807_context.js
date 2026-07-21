// Module ID: 1807
// Function ID: 19932
// Name: context
// Dependencies: []
// Exports: useToolbarContext

// Module 1807 (context)
const _module = require(dependencyMap[0]);
const useContext = _module.useContext;
const context = _module.createContext(undefined);

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
