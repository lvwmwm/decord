// Module ID: 12402
// Function ID: 96415
// Name: PremiumReferralTrialPill
// Dependencies: [27, 33, 4130, 689, 4126, 1212, 2]
// Exports: PremiumReferralTrialPill

// Module 12402 (PremiumReferralTrialPill)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = { pillParent: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }, pillParentExtraMargin: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 36, marginBottom: 20 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center", margin: 8, paddingHorizontal: 8, overflow: "visible" };
obj.pillContainer = obj;
obj.text = { color: "#AC46C3", paddingHorizontal: 1, paddingBottom: 2, textAlign: "center" };
let closure_4 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_settings/premium/native/PremiumReferralTrialPill.tsx");

export const PremiumReferralTrialPill = (hasExtraMargin) => {
  const tmp = callback();
  let obj = { style: hasExtraMargin.hasExtraMargin ? tmp.pillParentExtraMargin : tmp.pillParent };
  obj = { style: tmp.pillContainer };
  obj = { variant: "text-xs/bold", style: tmp.text };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.Y1q7js).toUpperCase();
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-xs/bold", style: tmp.text });
  obj.children = <View variant="text-xs/bold" style={tmp.text} />;
  return <View variant="text-xs/bold" style={tmp.text} />;
};
