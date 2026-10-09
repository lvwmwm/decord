// Module ID: 13045
// Function ID: 13046
// Name: useShopThisLookMarketing
// Dependencies: [32, 558, 576, 8325, 2049, 7093, 2]

// Module 13045 (useShopThisLookMarketing)
import react from "react" /* 576 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7093 */;
import useMaybeFetchEquippedCollectibleProducts from "useMaybeFetchEquippedCollectibleProducts" /* 8325 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShopThisLookMarketing(arg0, arg1, arg2) {
  let tmp5;
  const obj = react;
  const cResult = obj.c(7);
  const obj2 = useMaybeFetchEquippedCollectibleProducts;
  const tmp4 = obj2.useEquippedCollectibleSkuIds(arg0, arg1).length > 0;
  if (cResult[0] === tmp4) {
    let tmp7;
    if (cResult[1] === arg2) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { bypassAutoDismiss: true };
      cResult[3] = obj3;
      tmp7 = obj3;
    } else {
      tmp7 = cResult[3];
    }
    const tmpResult = useSelectedDismissibleContent;
    const tmp9 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp5, tmp7), 2);
    if (cResult[4] === tmp9[1]) {
      let tmp13;
      if (cResult[5] === null != tmp9[0]) {
        tmp13 = cResult[6];
      }
      return tmp13;
    }
    const obj4 = { isVisible: null != tmp9[0], markAsDismissed: tmp9[1] };
    cResult[4] = tmp9[1];
    cResult[5] = null != tmp9[0];
    cResult[6] = obj4;
    tmp13 = obj4;
  }
  if (arg2) {
    let items1;
    if (tmp4) {
      const items = [dismissible_content.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
      items1 = items;
    }
    cResult[0] = tmp4;
    cResult[1] = arg2;
    cResult[2] = items1;
    tmp5 = items1;
  }
  items1 = [];
}) : (function useShopThisLookMarketing(arg0, arg1, arg2) {
  const obj = useMaybeFetchEquippedCollectibleProducts;
  const tmp3 = obj.useEquippedCollectibleSkuIds(arg0, arg1).length > 0;
  useSelectedDismissibleContent;
  const tmp6 = arg2;
  if (tmp6) {
    if (tmp3) {
      const items = [dismissible_content.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
    }
    const tmp9 = _slicedToArray(tmp5([], { bypassAutoDismiss: true }), 2);
    return { isVisible: null != tmp9[0], markAsDismissed: tmp9[1] };
  }
});
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx");

export const useShopThisLookMarketing = tmp2;
