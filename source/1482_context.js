// Module ID: 1482
// Function ID: 17174
// Name: context
// Dependencies: []
// Exports: default

// Module 1482 (context)
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const context = importAllResult.createContext(undefined);

export default function EnsureSingleNavigator(children) {
  const React = React.useRef();
  return <context.Provider value={React.useMemo(() => ({
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
        ref.current = undefined;
      }
    }
  }), [])}>{arg0.children}</context.Provider>;
};
export const SingleNavigatorContext = context;
