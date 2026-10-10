// Module ID: 16181
// Function ID: 16182
// Name: useFeedBlockSkuIds
// Dependencies: [19, 5932, 1085, 558, 576, 504, 16182, 2]

// Module 16181 (useFeedBlockSkuIds)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import ShopHomeSortType from "ShopHomeSortType" /* 16182 */;
import react from "react" /* 19 */;
import ConsentStore from "ConsentStore" /* 5932 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Consents = Constants.Consents;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFeedBlockSkuIds(sortedSkuIds) {
  let arr2;
  let arr4;
  let tmp13;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConsentStore];
    class S {
      constructor() {
        return closure_1_3.hasConsented(closure_1_4.PERSONALIZATION);
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp4 = items;
    tmp5 = S;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let sortedSkuIds1;
  const tmp8 = cResult[2];
  if (sortedSkuIds != null) {
    sortedSkuIds1 = sortedSkuIds.sortedSkuIds;
  }
  if (tmp8 !== sortedSkuIds1) {
    let sortedSkuIds2;
    let items1;
    if (sortedSkuIds != null) {
      sortedSkuIds = sortedSkuIds.sortedSkuIds;
      if (sortedSkuIds != null) {
        items1 = sortedSkuIds[tmp(undefined, 16182).ShopHomeSortType.RECOMMENDED];
      }
    }
    if (items1 == null) {
      items1 = [];
    }
    class S {
      constructor() {
        return closure_1_3.hasConsented(closure_1_4.PERSONALIZATION);
      }
    }
    if (sortedSkuIds != null) {
      sortedSkuIds2 = sortedSkuIds.sortedSkuIds;
    }
    cResult[2] = sortedSkuIds2;
    cResult[3] = items1;
    arr2 = items1;
  } else {
    arr2 = cResult[3];
  }
  let sortedSkuIds5;
  const tmp10 = cResult[4];
  if (sortedSkuIds != null) {
    sortedSkuIds5 = sortedSkuIds.sortedSkuIds;
  }
  if (tmp10 !== sortedSkuIds5) {
    let sortedSkuIds4;
    let items2;
    if (sortedSkuIds != null) {
      const sortedSkuIds3 = sortedSkuIds.sortedSkuIds;
      if (sortedSkuIds3 != null) {
        items2 = sortedSkuIds3[tmp(undefined, 16182).ShopHomeSortType.POPULAR];
      }
    }
    if (items2 == null) {
      items2 = [];
    }
    class S {
      constructor() {
        return closure_1_3.hasConsented(closure_1_4.PERSONALIZATION);
      }
    }
    if (sortedSkuIds != null) {
      sortedSkuIds4 = sortedSkuIds.sortedSkuIds;
    }
    cResult[4] = sortedSkuIds4;
    cResult[5] = items2;
    arr4 = items2;
  } else {
    arr4 = cResult[5];
  }
  if (stateFromStores && arr2.length > 0) {
    arr4 = arr2;
  }
  if (cResult[6] !== arr4) {
    const substr = arr4.slice(0, 44);
    class S {
      constructor() {
        return closure_1_3.hasConsented(closure_1_4.PERSONALIZATION);
      }
    }
    cResult[6] = arr4;
    cResult[7] = substr;
    tmp13 = substr;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === (stateFromStores && arr2.length > 0)) {
    if (cResult[9] === arr4) {
      let tmp15;
      if (cResult[10] === tmp13) {
        tmp15 = cResult[11];
      }
      return tmp15;
    }
  }
  const obj2 = { shownSkuIds: arr4, resolvedSkuIds: tmp13, isPersonalized: stateFromStores && arr2.length > 0 };
  cResult[8] = stateFromStores && arr2.length > 0;
  cResult[9] = arr4;
  cResult[10] = tmp13;
  cResult[11] = obj2;
  tmp15 = obj2;
}) : (function useFeedBlockSkuIds(sortedSkuIds) {
  let stateFromStores;
  _require = sortedSkuIds;
  let obj = require("get initialized");
  let items = [ConsentStore];
  stateFromStores = obj.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  sortedSkuIds = undefined;
  const useMemo = react.useMemo;
  if (sortedSkuIds != null) {
    sortedSkuIds = sortedSkuIds.sortedSkuIds;
  }
  let items1 = [sortedSkuIds, stateFromStores];
  return useMemo(() => {
    let items;
    if (closure_0 != null) {
      sortedSkuIds = tmp.sortedSkuIds;
      if (sortedSkuIds != null) {
        items = sortedSkuIds[ShopHomeSortType.ShopHomeSortType.RECOMMENDED];
      }
    }
    if (items == null) {
      items = [];
    }
    let items1;
    if (closure_0 != null) {
      const sortedSkuIds2 = tmp.sortedSkuIds;
      if (sortedSkuIds2 != null) {
        items1 = sortedSkuIds2[ShopHomeSortType.ShopHomeSortType.POPULAR];
      }
    }
    if (items1 == null) {
      items1 = [];
    }
    if (stateFromStores && items.length > 0) {
      items1 = items;
    }
    const obj = { shownSkuIds: items1, resolvedSkuIds: items1.slice(0, 44), isPersonalized: stateFromStores && items.length > 0 };
    return obj;
  }, items1);
});
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useFeedBlockSkuIds.tsx");

export default tmp2;
export const MAX_FEED_PRODUCTS = 36;
