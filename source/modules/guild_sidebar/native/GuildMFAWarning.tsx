// Module ID: 15028
// Function ID: 114495
// Name: handlePress
// Dependencies: [5, 31, 27, 653, 33, 4130, 689, 9889, 1920, 1934, 3827, 4660, 15029, 4126, 1212, 1273, 2]
// Exports: default, getScaledGuildMFAWarningHeight

// Module 15028 (handlePress)
import closure_3 from "_createForOfIteratorHelperLoose";
import "result";
import { Image } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function handlePress() {
  return _handlePress(...arguments);
}
function _handlePress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const HelpdeskArticles = ME.HelpdeskArticles;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: 10, alignItems: "center" };
_createForOfIteratorHelperLoose.MFAWarning = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.MFAWarningIcon = { marginVertical: 10, width: 98, height: 53 };
_createForOfIteratorHelperLoose.MFAWarningLink = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345, fontFamily: ME.Fonts.PRIMARY_SEMIBOLD };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345, fontFamily: ME.Fonts.PRIMARY_SEMIBOLD };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_sidebar/native/GuildMFAWarning.tsx");

export default function GuildMFAWarning() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { accessibilityRole: "button", style: tmp.MFAWarning, onPress: handlePress };
  obj = { style: tmp.MFAWarningIcon, source: importDefault(15029) };
  const items = [callback2(Image, obj), ];
  obj = { variant: "text-xs/medium", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  const items1 = [intl.string(require(1212) /* getSystemLocale */.t.ZIf8Ag), ];
  const obj1 = { style: tmp.MFAWarningLink };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const items2 = [" ", intl2.string(require(1212) /* getSystemLocale */.t.hvVgAZ)];
  obj1.children = items2;
  items1[1] = callback3(require(1273) /* Button */.LegacyText, obj1);
  obj.children = items1;
  items[1] = callback3(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback3(require(4660) /* PressableBase */.PressableOpacity, obj);
};
export const getScaledGuildMFAWarningHeight = function getScaledGuildMFAWarningHeight(fontScale) {
  return 83 + 5 * require(9889) /* scaleLineHeight */.scaleTextLineHeight("text-xs/medium", fontScale) + 10 + 10;
};
