// Module ID: 6662
// Function ID: 51308
// Name: createDefinedContext
// Dependencies: []
// Exports: default

// Module 6662 (createDefinedContext)
let closure_0 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[2]).fileFinishedImporting("utils/ContextUtils.tsx");

export default function createDefinedContext() {
  function useContext(context) {
    context = context.useContext(context);
    if (null == context) {
      const _Error = Error;
      const error = new Error("Context was used outside of defined provider.");
      throw error;
    } else {
      return context;
    }
  }
  const jsx = useContext;
  const context = React.createContext(undefined);
  const React = context;
  const items = [
    context,
    useContext,
    () => {
      let closure_0 = useContext();
      return (children) => callback(redux.Provider, { value: redux, children: children.children });
    }
  ];
  return items;
};
