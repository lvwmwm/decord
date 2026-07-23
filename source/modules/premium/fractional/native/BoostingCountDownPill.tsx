// Module ID: 12447
// Function ID: 96588
// Name: handlePress
// Dependencies: [27, 33, 4130, 689, 4098, 12448, 1934, 1212, 4126, 2]
// Exports: default

// Module 12447 (handlePress)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
function handlePress() {
  let obj = importDefault(4098);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.aboutText = intl.string(require(1212) /* getSystemLocale */.t["07lzz7"]);
  obj.openLazy(require(1934) /* maybeLoadBundle */(12448, dependencyMap.paths), "NitroCreditEducationActionSheet", obj);
}
({ TouchableOpacity: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginBottom: 12 };
obj.fractionalPremiumBanner = obj;
let obj1 = { flex: 1, paddingVertical: 12, paddingHorizontal: 27, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, borderRadius: require("_createForOfIteratorHelperLoose").radii.xxl, justifyContent: "center" };
obj.fpDurationPill = obj1;
obj.fpDurationText = { textAlign: "center", color: "#FFEAA0" };
obj.fpUnavailable = { flex: 1, justifyContent: "center" };
obj.fpUnavailableTextNoCountdown = { textAlign: "center" };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/fractional/native/BoostingCountDownPill.tsx");

export default function BoostingCountDownPill(style) {
  let fpDurationText;
  let isInReverseTrial;
  ({ fpDurationText, isInReverseTrial } = style);
  const tmp = callback2();
  let obj = { activeOpacity: 0.7 };
  let tmp4;
  if (!isInReverseTrial) {
    tmp4 = handlePress;
  }
  obj.onPress = tmp4;
  obj = { style: items };
  items = [tmp.fractionalPremiumBanner, style.style];
  let tmp7 = !isInReverseTrial;
  if (tmp7) {
    obj = { style: tmp.fpDurationPill };
    const obj1 = { variant: "text-sm/bold", style: tmp.fpDurationText, children: fpDurationText.toUpperCase() };
    obj.children = callback(require(4126) /* Text */.Text, obj1);
    tmp7 = callback(closure_4, obj);
  }
  const items1 = [tmp7, ];
  const obj2 = { style: tmp.fpUnavailable };
  const obj3 = { variant: "text-md/normal", color: "interactive-text-active" };
  let prop;
  if (isInReverseTrial) {
    prop = tmp.fpUnavailableTextNoCountdown;
  }
  obj3.style = prop;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl.string(require(1212) /* getSystemLocale */.t["5nrJDO"]);
  obj2.children = callback(require(4126) /* Text */.Text, obj3);
  items1[1] = callback(closure_4, obj2);
  obj.children = items1;
  obj.children = closure_6(closure_4, obj);
  return callback(closure_3, obj);
};
