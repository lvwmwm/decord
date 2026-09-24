// Module ID: 11142
// Function ID: 11143
// Name: useToggleOnIAPSuccess
// Dependencies: [32, 19, 558, 568, 577, 2]

// Module 11142 (useToggleOnIAPSuccess)
import DispatcherDefault from "Dispatcher" /* 577 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/useToggleOnIAPSuccess.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(3);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  _require = tmp2[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      closure_0((arg0) => !arg0);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _() {
      const subscription = DispatcherDefault.subscribe("IAP_PURCHASE_PRODUCT_SUCCESS", first);
      return () => {
        first(dependencyMap[4]).unsubscribe("IAP_PURCHASE_PRODUCT_SUCCESS", closure_1_1);
      };
    };
    const items = [];
    cResult[1] = fn2;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn2;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  return tmp2[0];
}) : (() => {
  function toggleFlip() {
    _require((arg0) => !arg0);
  }
  [tmp2, require] = noop.useState(false);
  const effect = noop.useEffect(() => {
    const subscription = DispatcherDefault.subscribe("IAP_PURCHASE_PRODUCT_SUCCESS", toggleFlip);
    return () => {
      toggleFlip(dependencyMap[4]).unsubscribe("IAP_PURCHASE_PRODUCT_SUCCESS", closure_1_1);
    };
  }, []);
  return tmp2;
});
