// Module ID: 1515
// Function ID: 1516
// Name: context
// Dependencies: [19, 21]
// Exports: EnsureSingleNavigator

// Module 1515 (context)
import importAllResult from "noop";
import { jsx } from "jsxProd";

let c0 = importAllResult;
const context = importAllResult.createContext(undefined);

export const SingleNavigatorContext = context;
export const EnsureSingleNavigator = function EnsureSingleNavigator(children) {
  let importAllResult;
  importAllResult = importAllResult.useRef(undefined);
  return <context.Provider value={importAllResult.useMemo(() => ({
    register(current) {
      current = ref.current;
      if (undefined !== current) {
        if (current !== current) {
          const _Error = Error;
          const error = new Error("Another navigator is already registered for this container. You likely have multiple navigators under a single \"NavigationContainer\" or \"Screen\". Make sure each navigator is under a separate \"Screen\" container. See https://reactnavigation.org/docs/nesting-navigators for a guide on nesting.");
          throw error;
        }
      }
      ref.current = current;
    },
    unregister(arg0) {
      if (arg0 === ref.current) {
        tmp.current = undefined;
      }
    }
  }), [])}>{arg0.children}</context.Provider>;
};
