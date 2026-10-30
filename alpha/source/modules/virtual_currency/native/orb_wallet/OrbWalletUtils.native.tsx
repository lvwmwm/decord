// Module ID: 17639
// Function ID: 17640
// Name: OrbWalletUtils
// Dependencies: [19, 1386, 7345, 7320, 7600, 2]
// Exports: useOpenNitroCheckoutFromOrbWallet, useOrbWalletAnalyticsPage

// Module 17639 (OrbWalletUtils)
import PremiumConstants from "PremiumConstants" /* 1386 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7600 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

const PremiumTypes = PremiumConstants.PremiumTypes;
let obj = { analyticsPage: AnalyticsLocationDefault.ORB_WALLET };
const context = react.createContext(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletUtils.native.tsx");

export const OrbWalletAnalyticsContext = context;
export function useOrbWalletAnalyticsPage() {
  return react.useContext(context).analyticsPage;
}
export function useOpenNitroCheckoutFromOrbWallet(ORB_WALLET_HEADER_NITRO_UPSELL_CTA) {
  let analyticsLocations;
  let objectType;
  importDefault = ORB_WALLET_HEADER_NITRO_UPSELL_CTA;
  const analyticsPage = analyticsLocations.useContext(context).analyticsPage;
  analyticsLocations = require("useAnalyticsLocations")(ORB_WALLET_HEADER_NITRO_UPSELL_CTA).analyticsLocations;
  const items = [analyticsPage, analyticsLocations, ORB_WALLET_HEADER_NITRO_UPSELL_CTA];
  return analyticsLocations.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations, premiumType: PremiumTypes.TIER_2 };
    obj2 = { page: analyticsPage, section: AnalyticsLocationDefault.ORB_WALLET, objectType };
    const tmp = openPremiumPlanSelectionActionSheetDefault;
    tmp(obj, "stack");
  }, items);
}
