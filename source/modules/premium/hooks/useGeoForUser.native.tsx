// Module ID: 6657
// Function ID: 51114
// Name: useGeoForUser
// Dependencies: [31, 1194, 3778, 5621, 566, 6654, 4451, 2]
// Exports: default

// Module 6657 (useGeoForUser)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/hooks/useGeoForUser.native.tsx");

export default function useGeoForUser() {
  let obj = stateFromStores2(566);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let countryCode;
    const product = outer1_6.getProduct(stateFromStores2(outer1_2[5]).ProductIds.PREMIUM_TIER_2_MONTHLY);
    if (null != product) {
      countryCode = product.countryCode;
    }
    return countryCode;
  });
  const items1 = [closure_5];
  const stateFromStores1 = stateFromStores2(566).useStateFromStores(items1, () => outer1_5.ipLocation);
  const obj2 = stateFromStores2(566);
  const items2 = [_isNativeReflectConstruct];
  stateFromStores2 = stateFromStores2(566).useStateFromStores(items2, () => outer1_4.isAuthenticated());
  const items3 = [stateFromStores1, stateFromStores2];
  const effect = React.useEffect(() => {
    let tmp = stateFromStores2;
    if (stateFromStores2) {
      tmp = !outer1_5.ipLocationLoaded;
    }
    if (tmp) {
      const ipLocation = outer1_1(outer1_2[6]).fetchIpLocation();
      const obj = outer1_1(outer1_2[6]);
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
