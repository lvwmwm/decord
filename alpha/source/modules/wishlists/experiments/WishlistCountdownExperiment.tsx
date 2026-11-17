// Module ID: 15893
// Function ID: 15894
// Name: WishlistCountdownExperiment
// Dependencies: [1246, 502, 1452, 504, 2]
// Exports: WishlistCountdownExposure, useWishlistCountdownConfigPeek

// Module 15893 (WishlistCountdownExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ApexExperiment_mod from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
let obj4;
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-11-wishlist-countdown", kind: "user", defaultConfig: { labelsEnabled: false, reorderEnabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { labelsEnabled: true, reorderEnabled: false } };
obj2[2] = { labelsEnabled: true, reorderEnabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-11-wishlist-countdown-mobile", kind: "user", defaultConfig: { labelsEnabled: false, reorderEnabled: false }, variations: obj4 };
obj4 = { 1: null, 2: { labelsEnabled: true, reorderEnabled: false } };
obj4[2] = { labelsEnabled: true, reorderEnabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/wishlists/experiments/WishlistCountdownExperiment.tsx");

export const WishlistCountdownExperiment = apexExperiment;
export const WishlistCountdownMobileExperiment = apexExperiment1;
export function useWishlistCountdownConfigPeek(_location) {
  _require = _location;
  let obj = require("get initialized");
  const items = [AuthenticationStore, ApexExperimentStore];
  const items1 = [_location];
  return obj.useStateFromStores(items, () => {
    const obj = { location: _location };
    return apexExperiment.getConfig(obj, { autoTrackExposure: false });
  }, items1);
}
export function WishlistCountdownExposure(location) {
  const obj = { location: location.location };
  const config = apexExperiment.useConfig(obj);
  return null;
}
