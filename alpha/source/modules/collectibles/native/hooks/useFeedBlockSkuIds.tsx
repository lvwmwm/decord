// Module ID: 17821
// Function ID: 17822
// Name: useFeedBlockSkuIds
// Dependencies: [19, 6742, 1072, 504, 17822, 2]
// Exports: default

// Module 17821 (useFeedBlockSkuIds)
import Constants from "Constants" /* 1072 */;
import ShopHomeSortType from "ShopHomeSortType" /* 17822 */;
import react from "react" /* 19 */;
import ConsentStore from "ConsentStore" /* 6742 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Consents = Constants.Consents;
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useFeedBlockSkuIds.tsx");

export default function useFeedBlockSkuIds(sortedSkuIds) {
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
};
export const MAX_FEED_PRODUCTS = 36;
