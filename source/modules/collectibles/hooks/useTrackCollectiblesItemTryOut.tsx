// Module ID: 7837
// Function ID: 62497
// Name: useTrackCollectiblesItemTryOut
// Dependencies: []
// Exports: default

// Module 7837 (useTrackCollectiblesItemTryOut)
let AnalyticsPremiumFeatureNames;
require(dependencyMap[0]).useCallback;
let closure_4 = importDefault(dependencyMap[1]);
const AnalyticEvents = require(dependencyMap[2]).AnalyticEvents;
const _module = require(dependencyMap[3]);
({ AnalyticsPremiumFeatureNames, AnalyticsPremiumFeatureTiers: closure_6 } = _module);
const obj = { [require(dependencyMap[4]).CollectiblesItemType.AVATAR_DECORATION]: AnalyticsPremiumFeatureNames.AVATAR_DECORATION, [require(dependencyMap[4]).CollectiblesItemType.PROFILE_EFFECT]: AnalyticsPremiumFeatureNames.PROFILE_EFFECT, [require(dependencyMap[4]).CollectiblesItemType.PROFILE_FRAME]: undefined, [require(dependencyMap[4]).CollectiblesItemType.NAMEPLATE]: undefined, [require(dependencyMap[4]).CollectiblesItemType.NONE]: undefined, [require(dependencyMap[4]).CollectiblesItemType.BUNDLE]: undefined, [require(dependencyMap[4]).CollectiblesItemType.VARIANTS_GROUP]: undefined, [require(dependencyMap[4]).CollectiblesItemType.EXTERNAL_SKU]: undefined };
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx");

export default function useTrackCollectiblesItemTryOut(arg0) {
  const require = arg0;
  const items = [closure_4];
  const stateFromStores = require(dependencyMap[5]).useStateFromStores(items, () => products.products);
  const importDefault = stateFromStores;
  const items1 = [stateFromStores, arg0];
  return useCallback((skuId) => {
    const value = stateFromStores.get(skuId.skuId);
    let obj = stateFromStores(closure_2[6]);
    obj = { feature_name: closure_7[skuId.type], feature_tier: skuId(closure_2[7]).isPremiumCollectiblesProduct(value) ? closure_6.FREE : closure_6.PREMIUM_STANDARD };
    let name;
    if (null != value) {
      name = value.name;
    }
    obj.feature_selection = name;
    obj.location_stack = skuId;
    obj.track(constants.PREMIUM_FEATURE_TRY_OUT, obj);
  }, items1);
};
