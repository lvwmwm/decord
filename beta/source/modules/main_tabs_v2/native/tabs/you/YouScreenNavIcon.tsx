// Module ID: 16608
// Function ID: 16609
// Name: YouScreenNavIcon
// Dependencies: [19, 17, 21, 16042, 576, 8276, 4836, 1115, 8370, 4832, 2]

// Module 16608 (YouScreenNavIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import ClipView from "ClipView" /* 8276 */;
import native from "native" /* 8370 */;
import getIconSize from "getIconSize" /* 16042 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ClipViewDefault = ClipView;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const md = getIconSize.ICON_SIZE.md;
const result = (nativeDefault.space.PX_32 - md) / 2;
const TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
const point = { shape: ClipView.CutoutShape.Circle, x: md - 8 - 4, y: -4, size: 16 };
let items = [point];
let createStyles = createStyles_mod;
let obj = { container: obj2, label: obj3, dot: size };
obj2 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, marginHorizontal: nativeDefault.space.PX_4, flexDirection: "column", alignItems: "center", padding: result };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_4 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
let closure_8 = createStyles(obj);
const memoResult = react.memo(react.forwardRef((arg0, ref) => {
  let IconComponent;
  let accessibilityLabel;
  let intl;
  let items1;
  let label;
  let onPress;
  let showRedDot;
  ({ accessibilityLabel, label, showRedDot } = arg0);
  ({ onPress, IconComponent } = arg0);
  if (showRedDot === undefined) {
    showRedDot = false;
  }
  const tmp = closure_8();
  const obj = { size: "md", color: TEXT_DEFAULT };
  const tmp3 = React3(IconComponent, obj);
  let tmp4 = tmp3;
  if (showRedDot) {
    const obj2 = { children: items };
    const obj3 = { cutouts: items, children: tmp3 };
    items = [React3(ClipViewDefault, obj3), ];
    const obj4 = { style: tmp.dot };
    items[1] = React3(View, obj4);
    tmp4 = hasOwnProperty(View, obj2);
  }
  let tmp10;
  if (showRedDot) {
    const obj5 = { text: intl.string(intl2.t.y2b7CA) };
    intl = intl2.intl;
    tmp10 = obj5;
  }
  const obj6 = { ref, style: tmp.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp10, onPress, hitSlop: nativeDefault.space.PX_8, children: items1 };
  const PressableScale = native.PressableScale;
  items1 = [tmp4, ];
  const obj7 = { style: tmp.label, variant: "text-xs/semibold", color: "text-default", maxFontSizeMultiplier: 2, children: label };
  const Text = Text_Text.Text;
  const tmp13 = hasOwnProperty;
  if (label == null) {
    label = accessibilityLabel;
  }
  items1[1] = React3(Text, obj7);
  return tmp13(PressableScale, obj6);
}));
size = size_mod;
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default memoResult;
