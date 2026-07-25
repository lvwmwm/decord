// Module ID: 12479
// Function ID: 96757
// Name: handlePress
// Dependencies: [27, 3791, 33, 4131, 689, 4099, 12480, 1935, 1212, 2781, 4127, 2]
// Exports: default

// Module 12479 (handlePress)
import get_ActivityIndicator from "get ActivityIndicator";
import { getPremiumGroupProductName as closure_5 } from "TOTAL_PREMIUM_GROUP_MEMBER_SEATS";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
function handlePress() {
  let obj = importDefault(4099);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { premiumGroupProductName: callback() };
  obj.aboutText = intl.formatToPlainString(importDefault(2781)["5xN/C1"], obj);
  obj.openLazy(require(1935) /* maybeLoadBundle */(12480, dependencyMap.paths), "PremiumGroupEducationActionSheet", obj);
}
({ TouchableOpacity: closure_3, View: closure_4 } = get_ActivityIndicator);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginBottom: 12 };
obj.premiumGroupBanner = obj;
obj.pgUnavailable = { flex: 1, justifyContent: "center" };
obj.pgUnavailableText = { textAlign: "center" };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/premium/premium_group/native/BoostingUnavailablePill.tsx");

export default function BoostingUnavailablePill(style) {
  const tmp = callback2();
  let obj = { activeOpacity: 0.7, onPress: handlePress };
  obj = { style: items };
  items = [tmp.premiumGroupBanner, style.style];
  obj = { style: tmp.pgUnavailable };
  const obj1 = { variant: "text-md/normal", color: "interactive-text-active", style: tmp.pgUnavailableText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t["5nrJDO"]);
  obj.children = jsx(require(4127) /* Text */.Text, { variant: "text-md/normal", color: "interactive-text-active", style: tmp.pgUnavailableText });
  obj.children = <closure_4 style={tmp.pgUnavailable} />;
  obj.children = <closure_4 style={tmp.pgUnavailable} />;
  return <closure_3 style={tmp.pgUnavailable} />;
};
