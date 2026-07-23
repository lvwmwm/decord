// Module ID: 7843
// Function ID: 62534
// Name: useTrackCollectiblesItemTryOut
// Dependencies: [31, 6774, 653, 1851, 1876, 624, 675, 6786, 2]
// Exports: default

// Module 7843 (useTrackCollectiblesItemTryOut)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import GuildFeatures from "GuildFeatures";

let AnalyticsPremiumFeatureNames;
let closure_6;
require("result").useCallback;
({ AnalyticsPremiumFeatureNames, AnalyticsPremiumFeatureTiers: closure_6 } = GuildFeatures);
let obj = { [require(1876).CollectiblesItemType.AVATAR_DECORATION]: AnalyticsPremiumFeatureNames.AVATAR_DECORATION, [require(1876).CollectiblesItemType.PROFILE_EFFECT]: AnalyticsPremiumFeatureNames.PROFILE_EFFECT, [require(1876).CollectiblesItemType.PROFILE_FRAME]: undefined, [require(1876).CollectiblesItemType.NAMEPLATE]: undefined, [require(1876).CollectiblesItemType.NONE]: undefined, [require(1876).CollectiblesItemType.BUNDLE]: undefined, [require(1876).CollectiblesItemType.VARIANTS_GROUP]: undefined, [require(1876).CollectiblesItemType.EXTERNAL_SKU]: undefined };
const result = require("ME").fileFinishedImporting("modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx");

export default function useTrackCollectiblesItemTryOut(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_4.products);
  const items1 = [stateFromStores, arg0];
  return useCallback((skuId) => {
    const value = stateFromStores.get(skuId.skuId);
    let obj = stateFromStores(outer1_2[6]);
    obj = { feature_name: outer1_7[skuId.type], feature_tier: callback(outer1_2[7]).isPremiumCollectiblesProduct(value) ? outer1_6.FREE : outer1_6.PREMIUM_STANDARD };
    let name;
    if (null != value) {
      name = value.name;
    }
    obj.feature_selection = name;
    obj.location_stack = callback;
    obj.track(outer1_5.PREMIUM_FEATURE_TRY_OUT, obj);
  }, items1);
};
