// Module ID: 12883
// Function ID: 98384
// Name: Tooltip
// Dependencies: []
// Exports: default

// Module 12883 (Tooltip)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = { UP: "UP", DOWN: "DOWN" };
obj = { CENTER: "CENTER", RIGHT: "RIGHT", LEFT: "LEFT" };
let obj2 = arg1(dependencyMap[4]);
obj = {};
const tmp2 = arg1(dependencyMap[3]);
obj.container = { borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
obj2 = { fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_MEDIUM, fontSize: 12, color: importDefault(dependencyMap[5]).colors.WHITE };
obj.label = obj2;
obj.title = { marginBottom: 4 };
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
obj.arrow = { borderTopColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderBottomColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
let closure_8 = obj2.createStyles(obj);
const obj3 = { borderTopColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderBottomColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/void/Tooltip/native/Tooltip.tsx");

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
  const arg1 = num2;
  let LEFT = arrowHeight.arrowPosition;
  if (LEFT === undefined) {
    LEFT = obj.LEFT;
  }
  const dependencyMap = LEFT;
  let UP = arrowHeight.arrowDirection;
  if (UP === undefined) {
    UP = obj.UP;
  }
  const tmp3 = callback2();
  const items = [LEFT, num2];
  const memo = React.useMemo(() => {
    if (constants.LEFT === LEFT) {
      let obj = { alignSelf: "flex-start", left: num2 };
      return obj;
    } else if (constants.CENTER === tmp) {
      obj = { alignSelf: "center" };
      return obj;
    } else if (constants.RIGHT === tmp) {
      const obj1 = { alignSelf: "flex-end", right: num2 };
      return obj1;
    } else {
      obj = num2(LEFT[6]);
      obj.assertNever(LEFT);
    }
  }, items);
  let obj = { style };
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
  const obj1 = { onLayout: arrowHeight.onLayout, style: items3 };
  const items3 = [tmp3.container, containerStyle];
  let tmp12 = null;
  if (null != title) {
    const obj2 = { Promise: 24, marginTop: 24, flags: null, style: tmp3.title, children: title };
    tmp12 = callback(arg1(dependencyMap[7]).Heading, obj2);
  }
  const items4 = [tmp12, , ];
  let tmp16 = null;
  if (null != label) {
    const obj3 = {};
    const items5 = [tmp3.label, labelStyle];
    obj3.style = items5;
    obj3.children = label;
    tmp16 = callback(arg1(dependencyMap[8]).LegacyText, obj3);
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
