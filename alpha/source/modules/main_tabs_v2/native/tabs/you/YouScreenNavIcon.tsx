// Module ID: 14664
// Function ID: 14665
// Name: YouScreenNavIcon
// Dependencies: [19, 17, 21, 14665, 575, 9487, 5009, 14666, 1114, 8983, 5184, 5619, 2]

// Module 14664 (YouScreenNavIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import mergeProps from "mergeProps" /* 5184 */;
import ClipView from "ClipView" /* 9487 */;
import getIconSize from "getIconSize" /* 14665 */;
import YouScreenNavIconMeasurer from "YouScreenNavIconMeasurer" /* 14666 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const ClipViewDefault = ClipView;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const md = getIconSize.ICON_SIZE.md;
const padding = (nativeDefault.space.PX_32 - md) / 2;
const TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
const point = { shape: ClipView.CutoutShape.Circle, x: md - 8 - 4, y: -4, size: 16 };
let items = [point];
let closure_9 = createStyles.createStyles((width) => {
  let num;
  const obj = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, width, minWidth: nativeDefault.space.PX_48, maxWidth: nativeDefault.space.PX_80, flexShrink: num, flexDirection: "column", alignItems: "center", padding };
  num = 1;
  if (null == width) {
    num = 0;
  }
  const obj2 = { container: obj, label: { marginTop: nativeDefault.space.PX_4, textAlign: "center" }, dot: size };
  ({ marginTop: nativeDefault.space.PX_4, textAlign: "center" });
  size = { backgroundColor: tmp(575).colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: tmp(575).radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
  return obj2;
});
const memoResult = react.memo(function YouScreenNavIcon(arg0) {
  let IconComponent;
  let accessibilityLabel;
  let dotStyle;
  let icon;
  let intl;
  let items1;
  let items2;
  let label;
  let onPress;
  let ref;
  let showRedDot;
  let testID;
  let tmpResult;
  ({ icon, accessibilityLabel, label, showRedDot } = arg0);
  ({ onPress, IconComponent } = arg0);
  if (showRedDot === undefined) {
    showRedDot = false;
  }
  ({ dotStyle, ref, testID } = arg0);
  const obj = YouScreenNavIconMeasurer;
  const youScreenNavIconMeasurement = obj.useYouScreenNavIconMeasurement();
  const containerRef = youScreenNavIconMeasurement.containerRef;
  const tmp4 = closure_9(youScreenNavIconMeasurement.width);
  if (icon == null) {
    const obj2 = { size: "md", color: TEXT_DEFAULT };
    icon = React3(IconComponent, obj2);
  }
  let tmp7 = icon;
  if (showRedDot) {
    const obj3 = { children: items };
    const obj4 = { cutouts: items, children: icon };
    items = [React3(ClipViewDefault, obj4), ];
    const obj5 = { style: items1 };
    items1 = [tmp4.dot, dotStyle];
    items[1] = React3(View, obj5);
    tmp7 = hasOwnProperty(View, obj3);
  }
  let tmp13;
  if (showRedDot) {
    const obj6 = { text: intl.string(intl2.t.y2b7CA) };
    intl = tmp(1114).intl;
    tmp13 = obj6;
  }
  const obj7 = { ref: tmpResult.mergeRefs(ref, containerRef), style: tmp4.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp13, onPress, hitSlop: nativeDefault.space.PX_8, testID, children: items2 };
  const PressableScale = tmp(8983).PressableScale;
  items2 = [tmp7, ];
  const obj8 = { style: tmp4.label, variant: "text-xs/semibold", color: "text-default", maxFontSizeMultiplier: 2, lineClamp: 1, children: label };
  tmpResult = mergeProps;
  const Text = tmp(5619).Text;
  const tmp14 = hasOwnProperty;
  const tmp15 = React3;
  if (label == null) {
    label = accessibilityLabel;
  }
  items2[1] = tmp15(Text, obj8);
  return tmp14(PressableScale, obj7);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default memoResult;
