// Module ID: 8734
// Function ID: 8735
// Name: useTrackCollectiblesItemTryOut
// Dependencies: [19, 7720, 1072, 1385, 1987, 563, 1252, 7732, 2]
// Exports: default

// Module 8734 (useTrackCollectiblesItemTryOut)
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1987 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7732 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7720 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, type;

let AnalyticsPremiumFeatureNames;
let metroRequire;
const useCallback = react.useCallback;
const AnalyticEvents = Constants.AnalyticEvents;
({ AnalyticsPremiumFeatureNames, AnalyticsPremiumFeatureTiers: metroRequire } = PremiumConstants);
let obj = { [CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION]: AnalyticsPremiumFeatureNames.AVATAR_DECORATION, [CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT]: AnalyticsPremiumFeatureNames.PROFILE_EFFECT, [CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME]: undefined, [CollectiblesItemType.CollectiblesItemType.NAMEPLATE]: undefined, [CollectiblesItemType.CollectiblesItemType.NONE]: undefined, [CollectiblesItemType.CollectiblesItemType.BUNDLE]: undefined, [CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP]: undefined, [CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU]: undefined };
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx");

export default function useTrackCollectiblesItemTryOut(location_stack) {
  let products;
  _require = location_stack;
  obj = require("useStateFromStores");
  const items = [CollectiblesCategoryStore];
  const stateFromStores = obj.useStateFromStores(items, () => products.products);
  const items1 = [stateFromStores, location_stack];
  return useCallback((type) => {
    let name;
    let obj2;
    type = type.type;
    const value = stateFromStores.get(type.skuId);
    obj = { feature_name: obj[type], feature_tier: obj2.isPremiumCollectiblesProduct(value) ? metroRequire.FREE : metroRequire.PREMIUM_STANDARD, feature_selection: name, location_stack };
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_FEATURE_TRY_OUT = AnalyticEvents.PREMIUM_FEATURE_TRY_OUT;
    AnalyticsUtilsDefault;
    name = undefined;
    obj2 = CollectiblesUtils;
    if (value != null) {
      name = value.name;
    }
    track(PREMIUM_FEATURE_TRY_OUT, obj);
  }, items1);
};
