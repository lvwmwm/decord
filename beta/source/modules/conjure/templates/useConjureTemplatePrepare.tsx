// Module ID: 11818
// Function ID: 11819
// Name: useConjureTemplatePrepare
// Dependencies: [19, 10730, 558, 576, 2]

// Module 11818 (useConjureTemplatePrepare)
import ConjureConnectionStore from "ConjureConnectionStore" /* 10730 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const prepareTemplate = ConjureConnectionStore.prepareTemplate;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTemplatePrepare(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let closure_2;
  _require = arg0;
  dependencyMap = arg1;
  react = arg2;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === arg2) {
    if (cResult[1] === arg0) {
      let tmp2;
      let tmp3;
      if (cResult[2] === arg1) {
        tmp2 = cResult[3];
        tmp3 = cResult[4];
      }
      const effect = react.useEffect(tmp2, tmp3);
    }
  }
  const fn = function s() {
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = closure_2;
    }
    if (tmp2) {
      prepareTemplate(tmp, closure_1);
    }
  };
  const items = [arg0, arg1, arg2];
  cResult[0] = arg2;
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useConjureTemplatePrepare(arg0, arg1, arg2) {
  let closure_2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  react = arg2;
  const items = [arg0, arg1, arg2];
  const effect = react.useEffect(() => {
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = closure_2;
    }
    if (tmp2) {
      prepareTemplate(tmp, closure_1);
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/conjure/templates/useConjureTemplatePrepare.tsx");

export default tmp2;
