// Module ID: 12413
// Function ID: 12414
// Name: useIsComponentTreeLoading
// Dependencies: [19, 6395, 8824, 6405, 6831, 2]
// Exports: useIsComponentTreeLoading

// Module 12413 (useIsComponentTreeLoading)
import InteractionComponentUtils from "InteractionComponentUtils" /* 6395 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6405 */;
import usePreviousDefault from "usePrevious" /* 6831 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

const result = size.fileFinishedImporting("modules/interaction_components/useIsComponentTreeLoading.tsx");

export function useIsComponentTreeLoading(memo, callback) {
  let closure_2;
  let found;
  _require = memo;
  importDefault = callback;
  const items = [memo];
  memo = found.useMemo(() => {
    const obj = InteractionComponentUtils;
    const flattenComponentsResult = obj.flattenComponents(memo);
    const fromResult = from(flattenComponentsResult.values());
    return fromResult.filter(InteractionComponentUtils.isActionComponent);
  }, items);
  let obj = require("ComponentStateContext");
  dependencyMap = obj.useGetActionComponentState();
  found = memo.find((item) => {
    const tmp = closure_2(item);
    return tmp === InteractionComponentTypes.ActionComponentState.LOADING;
  });
  const items1 = [found];
  const memo1 = found.useMemo(() => {
    let obj;
    if (null != found) {
      obj = { loading: true, component: tmp };
      const obj2 = { loading: true, component: tmp };
    } else {
      obj = { loading: false, component: "r" };
    }
    return obj;
  }, items1);
  const tmp3 = usePreviousDefault(memo1.loading);
  let closure_5 = tmp3;
  const items2 = [tmp3, memo1, callback];
  const effect = found.useEffect(() => {
    const tmp2 = null != closure_5 && tmp !== memo1.loading;
    if (tmp2) {
      if (callback != null) {
        tmp4(memo1);
      }
    }
  }, items2);
  return memo1;
}
