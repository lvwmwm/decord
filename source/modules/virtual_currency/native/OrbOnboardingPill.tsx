// Module ID: 14668
// Function ID: 111816
// Name: OrbOnboardingPill
// Dependencies: [31, 33, 4660, 8708, 4126, 1212, 4130, 689, 2]

// Module 14668 (OrbOnboardingPill)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
const require = arg1;
class OrbOnboardingPill {
  constructor(arg0) {
    flag = global.accessible;
    if (flag === undefined) {
      flag = true;
    }
    tmp = c4();
    tmp2 = jsxs;
    obj = { onPress: global.onPress, style: tmp.container, accessibilityRole: "button", activeOpacity: 0.8 };
    obj.accessible = flag;
    obj.accessibilityElementsHidden = !flag;
    str = "no";
    if (flag) {
      str = "auto";
    }
    obj.importantForAccessibility = str;
    items = [, ];
    items[0] = jsx(require("OrbsIcon").OrbsIcon, { size: "sm" });
    obj = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text" };
    intl = require("getSystemLocale").intl;
    obj.children = intl.string(require("getSystemLocale").t["9JpRfC"]);
    items[1] = jsx(require("Text").Text, obj);
    obj.children = items;
    return tmp2(require("PressableBase").PressableOpacity, obj);
  }
}
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
OrbOnboardingPill.displayName = "OrbOnboardingPill";
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 36, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, flexShrink: 0, gap: 4 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("PressableBase").fileFinishedImporting("modules/virtual_currency/native/OrbOnboardingPill.tsx");

export default OrbOnboardingPill;
export { OrbOnboardingPill };
