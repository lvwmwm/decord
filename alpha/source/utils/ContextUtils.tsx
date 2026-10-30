// Module ID: 7606
// Function ID: 7607
// Name: ContextUtils
// Dependencies: [19, 21, 2]
// Exports: default

// Module 7606 (ContextUtils)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("utils/ContextUtils.tsx");

export default function createDefinedContext() {
  let context;
  context = context.createContext(undefined);
  const items = [
    context,
    function useContext() {
      context = react.useContext(context);
      if (null == context) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Context was used outside of defined provider.");
        throw error;
      } else {
        return context;
      }
    },
    function useForwardedContext() {
      context = context.useContext(context);
      if (null == context) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Context was used outside of defined provider.");
        throw error;
      } else {
        return function ForwardedContext(children) {
          return <context.Provider value={context}>{arg0.children}</context.Provider>;
        };
      }
    }
  ];
  return items;
};
