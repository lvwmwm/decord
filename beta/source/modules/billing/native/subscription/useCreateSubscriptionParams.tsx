// Module ID: 11141
// Function ID: 11142
// Name: useCreateSubscriptionParams
// Dependencies: [19, 558, 568, 11142, 1259, 2]

// Module 11141 (useCreateSubscriptionParams)
import c from "c" /* 568 */;
import v1 from "v1" /* 1259 */;
import useToggleOnIAPSuccessDefault from "useToggleOnIAPSuccess" /* 11142 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/useCreateSubscriptionParams.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  const cResult = c.c(7);
  let tmp5 = null;
  if (null != id) {
    let currency = arg1;
    tmp5 = null;
    if (null != arg1) {
      tmp5 = null;
      if (null != tmp4) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const v4Result = v1.v4();
          cResult[0] = v4Result;
          country = v4Result;
          const tmpResult = v1;
        } else {
          country = cResult[0];
        }
        if (cResult[1] !== id.id) {
          const obj2 = { planId: id.id, quantity: 1 };
          const items = [obj2];
          cResult[1] = id.id;
          cResult[2] = items;
          let tmp8 = items;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] === currency.country) {
          if (cResult[4] === currency.currency) {
          }
        }
        const obj3 = { requestIdentifier: country, items: tmp8, countryCode: null, currency: null };
        ({ country: obj4.countryCode, currency: obj4.currency, country } = currency);
        cResult[3] = country;
        currency = currency.currency;
        cResult[4] = currency;
        cResult[5] = tmp8;
        cResult[6] = obj3;
      }
    }
  }
  return tmp5;
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  importDefault = arg1;
  const tmp = useToggleOnIAPSuccessDefault();
  dependencyMap = tmp;
  let items = [arg0, arg1, tmp];
  return noop.useMemo(() => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      if (null != closure_1) {
        tmp2 = null;
        if (null != closure_2) {
          const obj = { requestIdentifier: v1.v4(), items: null, countryCode: null, currency: null };
          const obj3 = { planId: tmp.id, quantity: 1 };
          const items = [obj3];
          obj.items = items;
          ({ country: obj.countryCode, currency: obj.currency } = tmp3);
          tmp2 = obj;
        }
      }
      tmp3 = closure_1;
    }
    return tmp2;
  }, items);
});
