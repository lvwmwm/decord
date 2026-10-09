// Module ID: 7141
// Function ID: 7142
// Name: ContextUtils
// Dependencies: [19, 21, 558, 576, 2]
// Exports: default

// Module 7141 (ContextUtils)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, value;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("utils/ContextUtils.tsx");

export default function createDefinedContext() {
  let closure_1;
  let context = react.createContext(undefined);
  let tmp2 = context;
  let tmp3 = dependencyMap;
  let obj = context(558);
  const tmp4 = obj.isReactCompilerEnabled() ? (function useContext() {
    let context;
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
  }) : (function useContext() {
    let context;
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
  });
  dependencyMap = tmp4;
  const items = [context, tmp4, ];
  const tmp2Result = tmp2(558);
  items[2] = tmp2Result.isReactCompilerEnabled() ? (function useForwardedContext() {
    let tmp3;
    const obj = context(closure_1[3]);
    const cResult = obj.c(2);
    const tmp2 = closure_1();
    value = tmp2;
    if (cResult[0] !== tmp2) {
      class ForwardedContext {
        constructor(arg0) {
          obj = { value: closure_0, children: arg0.children };
          return jsx(closure_0.Provider, obj);
        }
      }
      cResult[0] = tmp2;
      cResult[1] = ForwardedContext;
      tmp3 = ForwardedContext;
    } else {
      class ForwardedContext {
        constructor(arg0) {
          obj = { value: closure_0, children: arg0.children };
          return jsx(closure_0.Provider, obj);
        }
      }
    }
    return tmp3;
  }) : (function useForwardedContext() {
    value = closure_1();
    return function ForwardedContext(children) {
      return <context.Provider value={value}>{arg0.children}</context.Provider>;
    };
  });
  return items;
};
