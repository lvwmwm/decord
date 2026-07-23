// Module ID: 13013
// Function ID: 100618
// Name: Tooltip
// Dependencies: [31, 27, 653, 33, 4130, 689, 1327, 4126, 1273, 2]
// Exports: default

// Module 13013 (Tooltip)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = { UP: "UP", DOWN: "DOWN" };
obj = { CENTER: "CENTER", RIGHT: "RIGHT", LEFT: "LEFT" };
obj = {};
let obj1 = { padding: 10, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, alignSelf: "flex-start", minWidth: 60, alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
obj.container = obj1;
_createForOfIteratorHelperLoose = { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, fontSize: 12, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.label = _createForOfIteratorHelperLoose;
obj.title = { marginBottom: 4 };
let obj3 = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
obj.arrow = obj3;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("ME").fileFinishedImporting("design/void/Tooltip/native/Tooltip.tsx");

export default function Tooltip(arrowHeight) {
  let arrowStyle;
  let arrowWidth;
  let children;
  let containerStyle;
  let label;
  let labelStyle;
  let style;
  let title;
  ({ arrowStyle, label, title, arrowWidth } = arrowHeight);
  ({ style, containerStyle, labelStyle, children } = arrowHeight);
  if (arrowWidth === undefined) {
    arrowWidth = 16;
  }
  let num = arrowHeight.arrowHeight;
  if (num === undefined) {
    num = 8;
  }
  let num2 = arrowHeight.arrowOffset;
  if (num2 === undefined) {
    num2 = 0;
  }
  let LEFT = arrowHeight.arrowPosition;
  if (LEFT === undefined) {
    LEFT = obj.LEFT;
  }
  let UP = arrowHeight.arrowDirection;
  if (UP === undefined) {
    UP = obj.UP;
  }
  const tmp3 = callback2();
  const items = [LEFT, num2];
  const memo = React.useMemo(() => {
    if (outer1_7.LEFT === LEFT) {
      let obj = { alignSelf: "flex-start", left: num2 };
      return obj;
    } else if (outer1_7.CENTER === tmp) {
      obj = { alignSelf: "center" };
      return obj;
    } else if (outer1_7.RIGHT === tmp) {
      const obj1 = { alignSelf: "flex-end", right: num2 };
      return obj1;
    } else {
      obj = num2(LEFT[6]);
      obj.assertNever(LEFT);
    }
  }, items);
  obj = { style };
  let tmp7 = UP === obj.UP;
  if (tmp7) {
    obj = {};
    const items1 = [tmp3.arrow, , , ];
    obj = { borderLeftWidth: arrowWidth / 2, borderRightWidth: arrowWidth / 2, borderBottomWidth: num };
    items1[1] = obj;
    items1[2] = memo;
    items1[3] = arrowStyle;
    obj.style = items1;
    tmp7 = callback(View, obj);
  }
  const items2 = [tmp7, , ];
  let obj1 = { onLayout: arrowHeight.onLayout, style: items3 };
  items3 = [tmp3.container, containerStyle];
  let tmp12 = null;
  if (null != title) {
    const obj2 = { style: tmp3.title, variant: "text-md/semibold", color: "text-overlay-light", children: title };
    tmp12 = callback(num2(LEFT[7]).Heading, obj2);
  }
  const items4 = [tmp12, , ];
  let tmp16 = null;
  if (null != label) {
    const obj3 = {};
    const items5 = [tmp3.label, labelStyle];
    obj3.style = items5;
    obj3.children = label;
    tmp16 = callback(num2(LEFT[8]).LegacyText, obj3);
  }
  items4[1] = tmp16;
  items4[2] = children;
  obj1.children = items4;
  items2[1] = closure_5(View, obj1);
  let tmp20 = UP === obj.DOWN;
  if (tmp20) {
    const obj4 = {};
    const items6 = [tmp3.arrow, , , ];
    const obj5 = { borderLeftWidth: arrowWidth / 2, borderRightWidth: arrowWidth / 2, borderTopWidth: num };
    items6[1] = obj5;
    items6[2] = memo;
    items6[3] = arrowStyle;
    obj4.style = items6;
    tmp20 = callback(View, obj4);
  }
  items2[2] = tmp20;
  obj.children = items2;
  return closure_5(View, obj);
};
export const TooltipArrowDirections = obj;
export const TooltipArrowPositions = obj;
