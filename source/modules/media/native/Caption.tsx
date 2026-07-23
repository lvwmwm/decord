// Module ID: 8262
// Function ID: 65167
// Name: Caption
// Dependencies: [27, 653, 33, 4130, 689, 3974, 1273, 2]
// Exports: Caption

// Module 8262 (Caption)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

let obj = {};
obj = { fontFamily: require("ME").Fonts.PRIMARY_BOLD, color: require("_createForOfIteratorHelperLoose").colors.WHITE, fontSize: 12 };
obj.captionText = obj;
const obj1 = { backgroundColor: null, borderRadius: null, paddingHorizontal: 8, paddingVertical: 2, position: "absolute", right: 6, bottom: 6 };
obj1.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_700, 0.5);
obj1.borderRadius = require("_createForOfIteratorHelperLoose").radii.xs;
obj.labelContainer = obj1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/media/native/Caption.tsx");

export const Caption = function Caption(arg0) {
  let label;
  let style;
  let textStyle;
  ({ label, style, textStyle } = arg0);
  const tmp = callback();
  const items = [tmp.labelContainer, style];
  const items1 = [tmp.captionText, textStyle];
  return <View style={items}>{jsx(require(1273) /* Button */.LegacyText, { style: items1, children: label })}</View>;
};
