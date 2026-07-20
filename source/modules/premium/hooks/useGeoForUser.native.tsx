// Module ID: 6646
// Function ID: 51017
// Name: useGeoForUser
// Dependencies: []
// Exports: default

// Module 6646 (useGeoForUser)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/premium/hooks/useGeoForUser.native.tsx");

export default function useGeoForUser() {
  let obj = arg1(dependencyMap[4]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let countryCode;
    const product = product.getProduct(stateFromStores2(closure_2[5]).ProductIds.PREMIUM_TIER_2_MONTHLY);
    if (null != product) {
      countryCode = product.countryCode;
    }
    return countryCode;
  });
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => closure_5.ipLocation);
  const obj2 = arg1(dependencyMap[4]);
  const items2 = [closure_4];
  const stateFromStores2 = arg1(dependencyMap[4]).useStateFromStores(items2, () => authenticated.isAuthenticated());
  const arg1 = stateFromStores2;
  const items3 = [stateFromStores1, stateFromStores2];
  const effect = React.useEffect(() => {
    let tmp = stateFromStores2;
    if (stateFromStores2) {
      tmp = !closure_5.ipLocationLoaded;
    }
    if (tmp) {
      const ipLocation = callback(closure_2[6]).fetchIpLocation();
      const obj = callback(closure_2[6]);
    }
  }, items3);
  obj = { defaultBillingCountryCode: stateFromStores };
  let countryCode;
  if (null != stateFromStores1) {
    countryCode = stateFromStores1.countryCode;
  }
  obj.ipCountryCode = countryCode;
  let subdivisionCode;
  if (null != stateFromStores1) {
    subdivisionCode = stateFromStores1.subdivisionCode;
  }
  obj.ipSubdivisionCode = subdivisionCode;
  return obj;
};
