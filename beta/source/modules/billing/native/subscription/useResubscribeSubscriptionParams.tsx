// Module ID: 11146
// Function ID: 11147
// Name: useResubscribeSubscriptionParams
// Dependencies: [19, 558, 568, 11142, 1259, 2]

// Module 11146 (useResubscribeSubscriptionParams)
import c from "c" /* 568 */;
import v1 from "v1" /* 1259 */;
import useToggleOnIAPSuccessDefault from "useToggleOnIAPSuccess" /* 11142 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/useResubscribeSubscriptionParams.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((subscriptionId) => {
  const cResult = c.c(3);
  let tmp4 = null;
  if (null != subscriptionId) {
    tmp4 = null;
    if (null != useToggleOnIAPSuccessDefault()) {
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const v4Result = v1.v4();
        cResult[0] = v4Result;
        let first = v4Result;
        const tmpResult = v1;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== subscriptionId) {
        const obj2 = { requestIdentifier: first, subscriptionId };
        cResult[1] = subscriptionId;
        cResult[2] = obj2;
      }
    }
  }
  return tmp4;
}) : ((arg0) => {
  closure_0 = arg0;
  const tmp = useToggleOnIAPSuccessDefault();
  importDefault = tmp;
  const items = [arg0, tmp];
  return noop.useMemo(() => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      if (null != closure_1) {
        const obj = { requestIdentifier: v1.v4(), subscriptionId: tmp };
        tmp2 = obj;
      }
    }
    return tmp2;
  }, items);
});
