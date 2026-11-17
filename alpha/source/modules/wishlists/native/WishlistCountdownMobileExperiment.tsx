// Module ID: 15892
// Function ID: 15893
// Name: WishlistCountdownMobileExperiment
// Dependencies: [1246, 502, 504, 15893, 2]
// Exports: WishlistCountdownMobileExposure, useWishlistCountdownMobileConfigPeek

// Module 15892 (WishlistCountdownMobileExperiment)
import WishlistCountdownExperiment from "WishlistCountdownExperiment" /* 15893 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/wishlists/native/WishlistCountdownMobileExperiment.tsx");

export function useWishlistCountdownMobileConfigPeek(UserProfileWishlistGrid) {
  let _location;
  _require = UserProfileWishlistGrid;
  let obj = require("get initialized");
  const items = [AuthenticationStore, ApexExperimentStore];
  const items1 = [UserProfileWishlistGrid];
  return obj.useStateFromStores(items, () => {
    const WishlistCountdownMobileExperiment = WishlistCountdownExperiment.WishlistCountdownMobileExperiment;
    const obj = { location: _location };
    return WishlistCountdownMobileExperiment.getConfig(obj, { autoTrackExposure: false });
  }, items1);
}
export function WishlistCountdownMobileExposure(location) {
  const _location = location.location;
  const WishlistCountdownMobileExperiment = WishlistCountdownExperiment.WishlistCountdownMobileExperiment;
  const config = WishlistCountdownMobileExperiment.useConfig({ location: _location });
  return null;
}
