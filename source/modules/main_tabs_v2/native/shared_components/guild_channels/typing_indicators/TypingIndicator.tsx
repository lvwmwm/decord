// Module ID: 14946
// Function ID: 113933
// Name: TypingIndicator
// Dependencies: [31, 27, 33, 4130, 689, 4066, 3976, 1273, 2]
// Exports: TypingIndicator

// Module 14946 (TypingIndicator)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { zIndex: 10, borderRadius: 17, borderWidth: 2, borderColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
  obj.ellipsisWrapper = obj;
  obj = { borderRadius: 13, paddingVertical: 4, paddingStart: 4, paddingEnd: 2, marginRight: 0 };
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  obj.backgroundColor = arg0 ? unsafe_rawColors.BRAND_200 : unsafe_rawColors.BRAND_500;
  obj.ellipsis = obj;
  const obj1 = { width: 4, height: 4 };
  const unsafe_rawColors2 = importDefault(689).unsafe_rawColors;
  obj1.backgroundColor = arg0 ? unsafe_rawColors2.BRAND_500 : unsafe_rawColors2.WHITE;
  obj.ellipsisDot = obj1;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx");

export const TypingIndicator = function TypingIndicator(style) {
  let obj = require(3976) /* AccessibilityAnnouncer */;
  const tmp2 = callback(obj.isThemeLight(importDefault(4066)()));
  obj = { style: items, children: jsx(require(1273) /* Button */.Ellipsis, obj) };
  items = [tmp2.ellipsisWrapper, style.style];
  obj = { style: items1, dotStyle: tmp2.ellipsisDot, disableScale: true };
  items1 = [tmp2.ellipsis];
  return <View style={items1} dotStyle={tmp2.ellipsisDot} disableScale />;
};
