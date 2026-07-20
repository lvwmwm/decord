// Module ID: 11440
// Function ID: 89106
// Name: useUserCountryCode
// Dependencies: []
// Exports: useIsTeenInStrictCountry

// Module 11440 (useUserCountryCode)
function useUserCountryCode() {
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const arg1 = stateFromStores;
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(closure_1[4]).fetchUserCountryCode();
      const obj = stateFromStores(closure_1[4]);
    }
  }, items1);
  return stateFromStores;
}
function useIsTeenInCountrySet(set) {
  const tmp = useUserCountryCode();
  let userIsTeen = arg1(dependencyMap[5]).useUserIsTeen();
  if (userIsTeen) {
    userIsTeen = null != tmp;
  }
  if (userIsTeen) {
    userIsTeen = set.has(tmp.alpha2);
  }
  return userIsTeen;
}
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const items = [...arg1(dependencyMap[2]).CountryCodesSets.EU_COUNTRIES];
const set = new Set(items);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/regional_feature_config/RegionalTeenUtils.tsx");

export { useUserCountryCode };
export { useIsTeenInCountrySet };
export const useIsTeenInStrictCountry = function useIsTeenInStrictCountry() {
  return useIsTeenInCountrySet(set);
};
