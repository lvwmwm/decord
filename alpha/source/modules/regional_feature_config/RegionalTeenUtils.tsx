// Module ID: 14114
// Function ID: 14115
// Name: RegionalTeenUtils
// Dependencies: [19, 5814, 5817, 504, 11118, 8492, 2]
// Exports: useIsTeenInCountrySet, useIsTeenInStrictCountry, useUserCountryCode

// Module 14114 (RegionalTeenUtils)
import CountryCodes from "CountryCodes" /* 5817 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 11118 */;
import react from "react" /* 19 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5814 */;
import size from "module_2" /* 2 */;

let userCountryCode;

const f105529 = () => userCountryCode.getUserCountryCode();
let items = ["GB", "AU", ...CountryCodes.CountryCodesSets.EU_COUNTRIES];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalTeenUtils.tsx");

export function useUserCountryCode() {
  let stateFromStores;
  const items = [RegionalFeatureConfigStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, f105529);
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
  stateFromStores = obj.useStateFromStores(items, f105529);
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = MessageRequestActionCreators;
      userCountryCode = obj.fetchUserCountryCode();
    }
  }, items1);
  const obj2 = stateFromStores(8492);
  const userIsTeen = obj2.useUserIsTeen() && null != stateFromStores && set.has(stateFromStores.alpha2);
  return userIsTeen;
}
export function useIsTeenInStrictCountry() {
  let stateFromStores;
  let obj = set;
  const items = [RegionalFeatureConfigStore];
  const obj2 = stateFromStores(504);
  stateFromStores = obj2.useStateFromStores(items, f105529);
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = MessageRequestActionCreators;
      userCountryCode = obj.fetchUserCountryCode();
    }
  }, items1);
  const obj3 = stateFromStores(8492);
  const userIsTeen = obj3.useUserIsTeen() && null != stateFromStores && obj.has(stateFromStores.alpha2);
  return userIsTeen;
}
