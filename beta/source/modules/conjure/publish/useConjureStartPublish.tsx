// Module ID: 18266
// Function ID: 18267
// Name: useConjureStartPublish
// Dependencies: [5, 19, 6621, 6980, 12301, 18267, 18268, 2]
// Exports: default

// Module 18266 (useConjureStartPublish)
import useConjurePublishAction from "useConjurePublishAction" /* 12301 */;
import conjurePublishReview from "conjurePublishReview" /* 18267 */;
import openConjurePublishReview from "openConjurePublishReview" /* 18268 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6980 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, dependencyMap, disabled;

let obj = function _publishNow() {
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let obj2;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c6;
      try {
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c6 = 1;
            c4 = 2;
            c3 = 1;
            const obj5 = { value: obj2.runConjurePublishAction(closure_0, closure_1, closure_2), done: false };
            obj2 = require("useConjurePublishAction");
            return obj5;
          }
        } else {
          if (1 === tmp3) {
            c6 = 0;
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c6 = 0;
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        let closure_5 = tmp10;
        if (0 === c6) {
          c3 = 3;
          throw tmp10;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function startConjurePublish(projectId, entryPoint, context) {
  function publishNow() {
    return obj(...arguments);
  }
  const project = ConjureProjectStore.getProject(projectId);
  let tmp2 = null != project && true !== context.busy;
  if (tmp2) {
    obj = useConjurePublishAction;
    tmp2 = !obj.approvalPending(projectId);
  }
  if (tmp2) {
    tmp2 = !ConjurePublishStatusStore.isProjectPublishing(projectId);
  }
  if (tmp2) {
    const obj2 = conjurePublishReview;
    tmp2 = null != obj2.conjurePublishReviewReason(project, ConjurePublishStatusStore.getPublishStatus(projectId));
  }
  if (tmp2) {
    const obj4 = { projectId, publishOptions: context, entryPoint };
    const obj3 = openConjurePublishReview;
    const result = obj3.openConjurePublishReview(obj4);
  } else {
    publishNow(projectId, entryPoint, context);
  }
}
let result = size.fileFinishedImporting("modules/conjure/publish/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  let closure_0;
  _require = arg0;
  dependencyMap = arg1;
  let context = arg2;
  const useContext = react.useContext;
  obj = react;
  if (arg2 == null) {
    context = useContext(require("useConjurePublishAction").ConjurePublishActionContext);
  }
  const items = [arg0, arg1, context];
  return obj.useCallback((entryPoint) => {
    disabled = null == closure_0;
    const tmp = closure_0;
    if (!disabled) {
      disabled = null == disabled;
    }
    if (!disabled) {
      disabled = null == context;
    }
    if (!disabled) {
      disabled = disabled.disabled;
    }
    if (!disabled) {
      startConjurePublish(tmp, entryPoint, context);
    }
  }, items);
};
export { startConjurePublish };
