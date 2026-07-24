// Module ID: 13086
// Function ID: 100999
// Name: LiveTag
// Dependencies: [31, 27, 33, 4130, 689, 477, 4126, 1212, 2]
// Exports: default

// Module 13086 (LiveTag)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "jsxProd";

const require = arg1;
let num = 0;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: 6, paddingVertical: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
_createForOfIteratorHelperLoose.tag = _createForOfIteratorHelperLoose;
const obj1 = { textAlign: "center", color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE };
if (set.isAndroid()) {
  num = -2;
}
obj1.marginTop = num;
_createForOfIteratorHelperLoose.tagText = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("design/void/LiveTag/native/LiveTag.tsx");

export default function LiveTag(arg0) {
  let allowFontScaling;
  let style;
  let textStyle;
  ({ style, textStyle, allowFontScaling } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.tag, style];
  obj = { variant: "text-xs/bold", style: null, lineClamp: 1 };
  const items1 = [tmp.tagText, textStyle];
  obj.style = items1;
  obj.allowFontScaling = allowFontScaling;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.dI3q4h).toUpperCase();
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-xs/bold", style: null, lineClamp: 1 });
  return <View variant="text-xs/bold" style={null} lineClamp={1} />;
};
