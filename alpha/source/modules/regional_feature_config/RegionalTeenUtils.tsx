// Module ID: 13199
// Function ID: 13200
// Name: RegionalTeenUtils
// Dependencies: [19, 5455, 5458, 504, 11763, 10069, 2]
// Exports: useIsTeenInCountrySet, useIsTeenInStrictCountry, useUserCountryCode

// Module 13199 (RegionalTeenUtils)
import CountryCodes from "CountryCodes" /* 5458 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 11763 */;
import react from "react" /* 19 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5455 */;
import size from "module_2" /* 2 */;

let userCountryCode;

const f105120 = () => userCountryCode.getUserCountryCode();
let items = ["GB", "AU", ...CountryCodes.CountryCodesSets.EU_COUNTRIES];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalTeenUtils.tsx");

export function useUserCountryCode() {
  let stateFromStores;
  const items = [RegionalFeatureConfigStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, f105120);
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = MessageRequestActionCreators;
      userCountryCode = obj.fetchUserCountryCode();
    }
  }, items1);
  return stateFromStores;
}
export function useIsTeenInCountrySet(set) {
  let stateFromStores;
  const items = [RegionalFeatureConfigStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, f105120);
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = MessageRequestActionCreators;
      userCountryCode = obj.fetchUserCountryCode();
    }
  }, items1);
  const obj2 = stateFromStores(10069);
  const userIsTeen = obj2.useUserIsTeen() && null != stateFromStores && set.has(stateFromStores.alpha2);
  return userIsTeen;
}
export function useIsTeenInStrictCountry() {
  let stateFromStores;
  let obj = set;
  const items = [RegionalFeatureConfigStore];
  const obj2 = stateFromStores(504);
  stateFromStores = obj2.useStateFromStores(items, f105120);
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = MessageRequestActionCreators;
      userCountryCode = obj.fetchUserCountryCode();
    }
  }, items1);
  const obj3 = stateFromStores(10069);
  const userIsTeen = obj3.useUserIsTeen() && null != stateFromStores && obj.has(stateFromStores.alpha2);
  return userIsTeen;
}
