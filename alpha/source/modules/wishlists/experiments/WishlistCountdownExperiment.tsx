// Module ID: 15060
// Function ID: 15061
// Name: WishlistCountdownExperiment
// Dependencies: [1246, 502, 1451, 504, 2]
// Exports: WishlistCountdownExposure, useWishlistCountdownConfigPeek

// Module 15060 (WishlistCountdownExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
let obj = { name: "2026-11-wishlist-countdown", kind: "user", defaultConfig: { labelsEnabled: false, reorderEnabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { labelsEnabled: true, reorderEnabled: false } };
obj2[2] = { labelsEnabled: true, reorderEnabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/wishlists/experiments/WishlistCountdownExperiment.tsx");

export const WishlistCountdownExperiment = apexExperiment;
export function useWishlistCountdownConfigPeek(UserProfileWishlistGrid) {
  let _location;
  _require = UserProfileWishlistGrid;
  let obj = require("get initialized");
  const items = [AuthenticationStore, ApexExperimentStore];
  const items1 = [UserProfileWishlistGrid];
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
