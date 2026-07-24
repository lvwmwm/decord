// Module ID: 13057
// Function ID: 100905
// Name: IconPill
// Dependencies: [31, 27, 482, 33, 4130, 689, 4545, 7668, 2]
// Exports: default

// Module 13057 (IconPill)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, height: 20, paddingHorizontal: 8 };
_createForOfIteratorHelperLoose.pillContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.pillIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, marginRight: 4 };
const obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, marginRight: 4 };
_createForOfIteratorHelperLoose.pillText = { fontFamily: require("sum").Fonts.PRIMARY_NORMAL, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj2 = { fontFamily: require("sum").Fonts.PRIMARY_NORMAL, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18 };
const result = require("sum").fileFinishedImporting("design/void/IconPill/native/IconPill.tsx");

export default function IconPill(IconComponent) {
  let accessibilityLabel;
  let source;
  let style;
  let text;
  let textStyle;
  IconComponent = IconComponent.IconComponent;
  ({ text, source, style, textStyle, accessibilityLabel } = IconComponent);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.pillContainer, style];
  if (null != IconComponent) {
    obj = { size: "xxs", style: tmp.pillIcon };
    let tmp8 = callback(IconComponent, obj);
  } else {
    obj = { source, size: importDefault(4545).Sizes.EXTRA_SMALL, style: tmp.pillIcon };
    tmp8 = callback(importDefault(4545), obj);
    const tmp7 = importDefault(4545);
  }
  const items1 = [tmp8, ];
  const items2 = [tmp.pillText, textStyle];
  items1[1] = callback(importDefault(7668), { style: items2, numberOfLines: 1, accessibilityLabel, children: text });
  obj.children = items1;
  return closure_4(View, obj);
};
