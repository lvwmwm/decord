// Module ID: 6667
// Function ID: 51359
// Name: createDefinedContext
// Dependencies: [31, 33, 2]
// Exports: default

// Module 6667 (createDefinedContext)
import result from "result";
import { jsx } from "jsxProd";

const result = require("set").fileFinishedImporting("utils/ContextUtils.tsx");

export default function createDefinedContext() {
  function useContext(context, arg1) {
    context = context.useContext(context);
    if (null == context) {
      const _Error = Error;
      const error = new Error("Context was used outside of defined provider.");
      throw error;
    } else {
      return context;
    }
  }
  context = context.createContext(undefined);
  const items = [
    context,
    useContext,
    () => {
      let result = useContext();
      return (children) => useContext(redux.Provider, { value: redux, children: children.children });
    }
  ];
  return items;
};
