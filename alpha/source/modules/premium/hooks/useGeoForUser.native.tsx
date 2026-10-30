// Module ID: 7596
// Function ID: 7597
// Name: useGeoForUser
// Dependencies: [19, 502, 2049, 7590, 504, 7593, 6529, 2]
// Exports: default

// Module 7596 (useGeoForUser)
import actions_BillingActionCreatorsAll from "actions/BillingActionCreators" /* 6529 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import BillingInfoStore from "BillingInfoStore" /* 2049 */;
import IAPStore from "IAPStore" /* 7590 */;
import size from "module_2" /* 2 */;

let ipLocation, product;

const result = size.fileFinishedImporting("modules/premium/hooks/useGeoForUser.native.tsx");

export default function useGeoForUser() {
  let authenticated;
  let countryCode;
  let stateFromStores2;
  let subdivisionCode;
  let obj = stateFromStores2(504);
  const items = [IAPStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    product = product.getProduct(stateFromStores2(dependencyMap[5]).ProductIds.PREMIUM_TIER_2_MONTHLY);
    let countryCode;
    if (product != null) {
      countryCode = product.countryCode;
    }
    return countryCode;
  });
  const items1 = [BillingInfoStore];
  const obj2 = stateFromStores2(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ipLocation.ipLocation);
  const items2 = [AuthenticationStore];
  const obj3 = stateFromStores2(504);
  stateFromStores2 = obj3.useStateFromStores(items2, () => authenticated.isAuthenticated());
  const items3 = [stateFromStores1, stateFromStores2];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores2 && !BillingInfoStore.ipLocationLoaded;
    if (tmp) {
      const obj = actions_BillingActionCreatorsAll;
      ipLocation = obj.fetchIpLocation();
    }
  }, items3);
  const obj4 = { defaultBillingCountryCode: stateFromStores, ipCountryCode: countryCode, ipSubdivisionCode: subdivisionCode };
  countryCode = undefined;
  if (stateFromStores1 != null) {
    countryCode = stateFromStores1.countryCode;
  }
  subdivisionCode = undefined;
  if (stateFromStores1 != null) {
    subdivisionCode = stateFromStores1.subdivisionCode;
  }
  return obj4;
};
