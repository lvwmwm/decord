// Module ID: 11458
// Function ID: 89205
// Name: useUserCountryCode
// Dependencies: [31, 3810, 3813, 566, 10138, 7616, 2]
// Exports: useIsTeenInStrictCountry

// Module 11458 (useUserCountryCode)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";

const require = arg1;
function useUserCountryCode() {
  const items = [_isNativeReflectConstruct];
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => outer1_3.getUserCountryCode());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(outer1_1[4]).fetchUserCountryCode();
      const obj = stateFromStores(outer1_1[4]);
    }
  }, items1);
  return stateFromStores;
}
function useIsTeenInCountrySet(set) {
  const tmp = useUserCountryCode();
  let userIsTeen = require(7616) /* useUserIsTeen */.useUserIsTeen();
  if (userIsTeen) {
    userIsTeen = null != tmp;
  }
  if (userIsTeen) {
    userIsTeen = set.has(tmp.alpha2);
  }
  return userIsTeen;
}
let items = ["GB", "AU"];
HermesBuiltin.arraySpread(require("set").CountryCodesSets.EU_COUNTRIES, 2);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/regional_feature_config/RegionalTeenUtils.tsx");

export { useUserCountryCode };
export { useIsTeenInCountrySet };
export const useIsTeenInStrictCountry = function useIsTeenInStrictCountry() {
  return useIsTeenInCountrySet(set);
};
