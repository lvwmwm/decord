// Module ID: 12959
// Function ID: 12960
// Name: useConjureTemplatePrepare
// Dependencies: [19, 10830, 2]
// Exports: default

// Module 12959 (useConjureTemplatePrepare)
import ConjureConnectionStore from "ConjureConnectionStore" /* 10830 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const prepareTemplate = ConjureConnectionStore.prepareTemplate;
const result = size.fileFinishedImporting("modules/conjure/templates/useConjureTemplatePrepare.tsx");

export default function useConjureTemplatePrepare(arg0, arg1, arg2) {
  let closure_0;
  react = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
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
};
