// Module ID: 13643
// Function ID: 13644
// Name: Tooltip
// Dependencies: [19, 17, 1074, 21, 4836, 576, 1370, 4832, 1177, 2]
// Exports: default

// Module 13643 (Tooltip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj4;
let obj5;
let size;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const TooltipArrowDirections = { UP: "UP", DOWN: "DOWN" };
let obj2 = { CENTER: "CENTER", RIGHT: "RIGHT", LEFT: "LEFT" };
let createStyles = createStyles_mod;
let obj3 = { container: obj4, label: obj5, title: { marginBottom: 4 }, arrow: size };
obj4 = { padding: 10, borderRadius: nativeDefault.radii.xs, alignSelf: "flex-start", minWidth: 60, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
obj5 = { fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12, color: nativeDefault.colors.WHITE };
size = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: nativeDefault.colors.BACKGROUND_BRAND, borderBottomColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_8 = createStyles(obj3);
size = size_mod;
const result = size.fileFinishedImporting("design/void/Tooltip/native/Tooltip.tsx");

export default function Tooltip(arrowHeight) {
  let arrowStyle;
  let arrowWidth;
  let children;
  let containerStyle;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let label;
  let labelStyle;
  let obj;
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
    LEFT = obj2.LEFT;
  }
  let UP = arrowHeight.arrowDirection;
  if (UP === undefined) {
    UP = obj.UP;
  }
  const onLayout = arrowHeight.onLayout;
  const tmp3 = closure_8();
  const items = [LEFT, num2];
  const memo = react.useMemo(() => {
    if (obj2.LEFT === LEFT) {
      obj2 = { alignSelf: "flex-start", left: num2 };
      return obj2;
    } else if (obj2.CENTER === LEFT) {
      return { alignSelf: "center" };
    } else if (obj2.RIGHT === LEFT) {
      return { alignSelf: "flex-end", right: num2 };
    } else {
      const obj = GlobalUtils;
      obj.assertNever(LEFT);
    }
  }, items);
  obj = { style, children: items2 };
  let tmp8 = UP === obj.UP;
  const tmp7 = obj;
  if (tmp8) {
    obj2 = { style: items1 };
    items1 = [tmp3.arrow, , , ];
    const obj3 = { borderLeftWidth: arrowWidth / 2, borderRightWidth: arrowWidth / 2, borderBottomWidth: num };
    items1[1] = obj3;
    items1[2] = memo;
    items1[3] = arrowStyle;
    tmp8 = closure_4(tmp6, obj2);
  }
  items2 = [tmp8, , ];
  const obj4 = { onLayout, style: items3, children: items4 };
  items3 = [tmp3.container, containerStyle];
  let tmp10 = null;
  if (null != title) {
    const obj5 = { style: tmp3.title, variant: "text-md/semibold", color: "text-overlay-light", children: title };
    tmp10 = closure_4(num2(LEFT[7]).Heading, obj5);
  }
  items4 = [tmp10, , ];
  let tmp14 = null;
  if (null != label) {
    const obj6 = { style: items5, children: label };
    items5 = [tmp3.label, labelStyle];
    tmp14 = closure_4(num2(LEFT[8]).LegacyText, obj6);
  }
  items4[1] = tmp14;
  items4[2] = children;
  items2[1] = closure_5(View, obj4);
  let tmp18 = UP === tmp7.DOWN;
  if (tmp18) {
    const obj7 = { style: items6 };
    items6 = [tmp3.arrow, , , ];
    const obj8 = { borderLeftWidth: arrowWidth / 2, borderRightWidth: arrowWidth / 2, borderTopWidth: num };
    items6[1] = obj8;
    items6[2] = memo;
    items6[3] = arrowStyle;
    tmp18 = closure_4(tmp6, obj7);
  }
  items2[2] = tmp18;
  return closure_5(View, obj);
};
export { TooltipArrowDirections };
export const TooltipArrowPositions = obj2;
