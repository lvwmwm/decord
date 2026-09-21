// Module ID: 12673
// Function ID: 12674
// Name: RegionalTeenUtils
// Dependencies: [19, 4970, 4973, 504, 11225, 8922, 2]
// Exports: useIsTeenInCountrySet, useIsTeenInStrictCountry, useUserCountryCode

// Module 12673 (RegionalTeenUtils)
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 11225 */;
import noop from "module_19" /* 19 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 4970 */;

require = fn;
let items = ["GB", "AU"];
HermesBuiltin.arraySpread(fn(4973).CountryCodesSets.EU_COUNTRIES, 2);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalTeenUtils.tsx");

export const useUserCountryCode = function useUserCountryCode() {
  const items = [RegionalFeatureConfigStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      userCountryCode = MessageRequestActionCreators.fetchUserCountryCode();
    }
  }, items1);
  return stateFromStores;
};
export const useIsTeenInCountrySet = function useIsTeenInCountrySet(set) {
  const items = [RegionalFeatureConfigStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      userCountryCode = MessageRequestActionCreators.fetchUserCountryCode();
    }
  }, items1);
  const obj = stateFromStores(504);
  let userIsTeen = stateFromStores(8922).useUserIsTeen();
  if (userIsTeen) {
    userIsTeen = null != stateFromStores;
  }
  if (userIsTeen) {
    userIsTeen = set.has(stateFromStores.alpha2);
  }
  return userIsTeen;
};
export const useIsTeenInStrictCountry = function useIsTeenInStrictCountry() {
  const items = [RegionalFeatureConfigStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      userCountryCode = MessageRequestActionCreators.fetchUserCountryCode();
    }
  }, items1);
  let obj = set;
  const obj2 = stateFromStores(504);
  let userIsTeen = stateFromStores(8922).useUserIsTeen();
  if (userIsTeen) {
    userIsTeen = null != stateFromStores;
  }
  if (userIsTeen) {
    userIsTeen = obj.has(stateFromStores.alpha2);
  }
  return userIsTeen;
};
