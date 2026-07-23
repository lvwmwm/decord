// Module ID: 7532
// Function ID: 60273
// Name: CardSection
// Dependencies: [31, 27, 653, 33, 4130, 5052, 689, 7533, 2]
// Exports: default

// Module 7532 (CardSection)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_3;
let closure_4;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingTop: 16, paddingHorizontal: 16 }, title: require("createTextStyle")(require("ME").Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, 12, { uppercase: true, marginBottom: 6 }) };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("design/void/CardSection/native/CardSection.tsx");

export default function CardSection(arg0) {
  let accessibilityLabel;
  let accessibilityRole;
  let cardStyle;
  let children;
  let headerComponent;
  let style;
  let title;
  let titleStyle;
  ({ title, children, headerComponent } = arg0);
  ({ titleStyle, cardStyle, style, accessibilityRole, accessibilityLabel } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items, accessibilityRole, accessibilityLabel };
  items = [tmp.container, style];
  let tmp4 = null;
  if (null != title) {
    obj = {};
    const items1 = [tmp.title, titleStyle];
    obj.style = items1;
    obj.accessibilityRole = "header";
    obj.children = title;
    tmp4 = callback(importDefault(7533), obj);
  }
  const items2 = [tmp4, , ];
  let tmp8 = null;
  if (null != headerComponent) {
    tmp8 = headerComponent;
  }
  items2[1] = tmp8;
  let tmp9 = null;
  if (null != children) {
    obj = {};
    const items3 = [tmp.card, cardStyle];
    obj.style = items3;
    obj.children = children;
    tmp9 = callback(View, obj);
  }
  items2[2] = tmp9;
  obj.children = items2;
  return closure_4(View, obj);
};
