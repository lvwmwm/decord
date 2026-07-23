// Module ID: 1482
// Function ID: 17180
// Name: context
// Dependencies: [31, 33]
// Exports: default

// Module 1482 (context)
import importAllResult from "result";
import { jsx } from "jsxProd";

const context = importAllResult.createContext(undefined);

export default function EnsureSingleNavigator(children) {
  importAllResult = importAllResult.useRef();
  return <context.Provider value={importAllResult.useMemo(() => ({
    register(current) {
      current = outer1_0.current;
      if (undefined !== current) {
        if (current !== current) {
          const _Error = Error;
          const error = new Error("Another navigator is already registered for this container. You likely have multiple navigators under a single \"NavigationContainer\" or \"Screen\". Make sure each navigator is under a separate \"Screen\" container. See https://reactnavigation.org/docs/nesting-navigators for a guide on nesting.");
          throw error;
        }
      }
      outer1_0.current = current;
    },
    unregister(arg0) {
      if (arg0 === outer1_0.current) {
        outer1_0.current = undefined;
      }
    }
  }), [])}>{arg0.children}</context.Provider>;
};
export const SingleNavigatorContext = context;
