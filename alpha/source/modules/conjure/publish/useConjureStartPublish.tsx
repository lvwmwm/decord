// Module ID: 12191
// Function ID: 12192
// Name: useConjureStartPublish
// Dependencies: [19, 558, 576, 11803, 10842, 2]

// Module 12191 (useConjureStartPublish)
import ConjurePublishTypes from "ConjurePublishTypes" /* 10842 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureStartPublish(arg0, arg1, arg2, arg3) {
  let closure_0;
  let closure_1;
  let closure_2;
  _require = arg0;
  dependencyMap = arg1;
  let context = arg2;
  react = arg3;
  const obj = require("react");
  const cResult = obj.c(5);
  const useContext = react.useContext;
  if (arg2 == null) {
    context = useContext(require("useConjurePublishAction").ConjurePublishActionContext);
  }
  if (cResult[0] === arg3) {
    if (cResult[1] === arg0) {
      if (cResult[2] === arg1) {
        let tmp3;
        if (cResult[3] === context) {
          tmp3 = cResult[4];
        }
        return tmp3;
      }
    }
  }
  const fn = function o(entryPoint) {
    if (null != closure_0) {
      if (null != closure_1) {
        if (null != context) {
          if (!closure_1.disabled) {
            let publishState;
            const status = obj3.status;
            if (status != null) {
              publishState = status.publishState;
            }
            if (closure_1.awaitingApproval) {
              closure_1.run(entryPoint);
            } else {
              if (null != publishState) {
                ConjurePublishTypes;
              }
              const obj2 = { projectId: tmp, publishOptions: tmp8, entryPoint };
              closure_2(obj2);
            }
          }
        }
      }
    }
  };
  cResult[0] = arg3;
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = context;
  cResult[4] = fn;
  tmp3 = fn;
}) : (function useConjureStartPublish(arg0, arg1, arg2, arg3) {
  let closure_0;
  let closure_1;
  let closure_2;
  _require = arg0;
  dependencyMap = arg1;
  let context = arg2;
  react = arg3;
  const obj = react;
  const useContext = react.useContext;
  if (arg2 == null) {
    context = useContext(require("useConjurePublishAction").ConjurePublishActionContext);
  }
  const items = [arg0, arg1, context, arg3];
  return obj.useCallback((entryPoint) => {
    if (null != closure_0) {
      if (null != closure_1) {
        if (null != context) {
          if (!closure_1.disabled) {
            let publishState;
            const status = obj3.status;
            if (status != null) {
              publishState = status.publishState;
            }
            if (closure_1.awaitingApproval) {
              closure_1.run(entryPoint);
            } else {
              if (null != publishState) {
                ConjurePublishTypes;
              }
              const obj2 = { projectId: tmp, publishOptions: tmp8, entryPoint };
              closure_2(obj2);
            }
          }
        }
      }
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureStartPublish.tsx");

export default tmp2;
