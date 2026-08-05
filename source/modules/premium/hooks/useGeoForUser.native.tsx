// Module ID: 6776
// Function ID: 6777
// Name: useGeoForUser
// Dependencies: [19, 1218, 3903, 5752, 589, 6773, 4574, 2]
// Exports: default

// Module 6776 (useGeoForUser)
import noop from "noop";
import fetchFingerprint from "fetchFingerprint";
import handlePaymentSourceCreateEnd from "handlePaymentSourceCreateEnd";
import updateProduct from "updateProduct";

const require = arg1;
const result = require("handlePaymentSourceCreateEnd").fileFinishedImporting("modules/premium/hooks/useGeoForUser.native.tsx");

export default function useGeoForUser() {
  let obj = stateFromStores2(589);
  const items = [updateProduct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    product = product.getProduct(stateFromStores2(table[5]).ProductIds.PREMIUM_TIER_2_MONTHLY);
    let countryCode;
    if (product != null) {
      countryCode = product.countryCode;
    }
    return countryCode;
  });
  const items1 = [handlePaymentSourceCreateEnd];
  const stateFromStores1 = stateFromStores2(589).useStateFromStores(items1, () => ipLocation.ipLocation);
  const obj2 = stateFromStores2(589);
  const items2 = [fetchFingerprint];
  stateFromStores2 = stateFromStores2(589).useStateFromStores(items2, () => authenticated.isAuthenticated());
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
  obj = { defaultBillingCountryCode: stateFromStores, ipCountryCode: null, ipSubdivisionCode: null };
  let countryCode;
  if (stateFromStores1 != null) {
    countryCode = stateFromStores1.countryCode;
  }
  obj[1] = countryCode;
  let subdivisionCode;
  if (stateFromStores1 != null) {
    subdivisionCode = stateFromStores1.subdivisionCode;
  }
  obj[2] = subdivisionCode;
  return obj;
};
