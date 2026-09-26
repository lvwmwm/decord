// Module ID: 7702
// Function ID: 7703
// Name: ContextUtils
// Dependencies: [19, 21, 2]
// Exports: default

// Module 7702 (ContextUtils)
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("utils/ContextUtils.tsx");

export default function createDefinedContext() {
  context = context.createContext(undefined);
  const items = [
    context,
    function useContext() {
      context = noop.useContext(context);
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
        return (children) => <context.Provider value={context}>{arg0.children}</context.Provider>;
      }
    }
  ];
  return items;
};
