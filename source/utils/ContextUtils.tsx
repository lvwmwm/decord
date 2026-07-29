// Module ID: 6222
// Function ID: 6223
// Name: createDefinedContext
// Dependencies: [19, 21, 2]
// Exports: default

// Module 6222 (createDefinedContext)
import noop from "noop";
import { jsx } from "jsxProd";

const result = require("set").fileFinishedImporting("utils/ContextUtils.tsx");

export default function createDefinedContext() {
  context = context.createContext(undefined);
  const items = [
    context,
    function useContext(context) {
      context = context.useContext(context);
      if (null == context) {
        const _Error = Error;
        const error = new Error("Context was used outside of defined provider.");
        throw error;
      } else {
        return context;
      }
    },
    () => {
      context = context.useContext(context);
      if (null == context) {
        const _Error = Error;
        const error = new Error("Context was used outside of defined provider.");
        throw error;
      } else {
        return (children) => outer2_1(context.Provider, { value: context, children: children.children });
      }
    }
  ];
  return items;
};
