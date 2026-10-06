// Module ID: 16610
// Function ID: 16611
// Name: YouScreenNavIcon
// Dependencies: [19, 17, 21, 16044, 588, 8273, 4837, 558, 576, 1127, 4833, 8367, 2]

// Module 16610 (YouScreenNavIcon)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl2 from "intl" /* 1127 */;
import Text_Text from "Text/Text" /* 4833 */;
import ClipView from "ClipView" /* 8273 */;
import native from "native" /* 8367 */;
import getIconSize from "getIconSize" /* 16044 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let c7 = "text-default";
const point = { shape: ClipView.CutoutShape.Circle, x: md - 8 - 4, y: -4, size: 16 };
let items = [point];
let createStyles = createStyles_mod;
let obj = { container: obj2, label: obj3, dot: size };
obj2 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, marginHorizontal: nativeDefault.space.PX_4, flexDirection: "column", alignItems: "center", padding: result };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_4 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
let closure_9 = createStyles(obj);
const forwardRef = react.forwardRef;
const memoResult = react.memo(forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let IconComponent;
  let accessibilityLabel;
  let intl;
  let items1;
  let label;
  let onPress;
  let showRedDot;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(19);
  ({ onPress, IconComponent, accessibilityLabel, label, showRedDot } = arg0);
  const tmp5 = closure_9();
  if (cResult[0] !== IconComponent) {
    const obj2 = { size: "md", color: TEXT_DEFAULT };
    const tmp9 = React3(IconComponent, obj2);
    cResult[0] = IconComponent;
    cResult[1] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp6) {
    if (cResult[3] === (undefined !== showRedDot && showRedDot)) {
      let tmp10;
      let tmp17;
      if (cResult[4] === tmp5.dot) {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== (undefined !== showRedDot && showRedDot)) {
        let tmp18;
        if (undefined !== showRedDot && showRedDot) {
          const obj3 = { text: intl.string(intl2.t.y2b7CA) };
          intl = tmp(1127).intl;
          tmp18 = obj3;
        }
        cResult[6] = undefined !== showRedDot && showRedDot;
        cResult[7] = tmp18;
        tmp17 = tmp18;
      } else {
        tmp17 = cResult[7];
      }
      if (label == null) {
        label = accessibilityLabel;
      }
      if (cResult[8] === tmp5.label) {
        let tmp20;
        if (cResult[9] === label) {
          tmp20 = cResult[10];
        }
        if (cResult[11] === accessibilityLabel) {
          if (cResult[12] === tmp17) {
            if (cResult[13] === tmp10) {
              if (cResult[14] === onPress) {
                if (cResult[15] === ref) {
                  if (cResult[16] === tmp5.container) {
                    let tmp25;
                    if (cResult[17] === tmp20) {
                      tmp25 = cResult[18];
                    }
                    return tmp25;
                  }
                }
              }
            }
          }
        }
        const obj4 = { ref, style: tmp5.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp17, onPress, hitSlop: nativeDefault.space.PX_8, children: items };
        const PressableScale = tmp(8367).PressableScale;
        items = [tmp10, tmp20];
        const tmp28 = hasOwnProperty(PressableScale, obj4);
        cResult[11] = accessibilityLabel;
        cResult[12] = tmp17;
        cResult[13] = tmp10;
        cResult[14] = onPress;
        cResult[15] = ref;
        cResult[16] = tmp5.container;
        cResult[17] = tmp20;
        cResult[18] = tmp28;
        tmp25 = tmp28;
      }
      const obj5 = { style: tmp5.label, variant: "text-xs/semibold", color, maxFontSizeMultiplier: 2, children: label };
      const tmp23 = React3(Text_Text.Text, obj5);
      cResult[8] = tmp5.label;
      cResult[9] = label;
      cResult[10] = tmp23;
      tmp20 = tmp23;
    }
  }
  let tmp11 = tmp6;
  if (undefined !== showRedDot && showRedDot) {
    const obj6 = { children: items1 };
    const obj7 = { cutouts: items, children: tmp6 };
    items1 = [React3(ClipViewDefault, obj7), ];
    const obj8 = { style: tmp5.dot };
    items1[1] = React3(View, obj8);
    tmp11 = hasOwnProperty(View, obj6);
  }
  cResult[2] = tmp6;
  cResult[3] = undefined !== showRedDot && showRedDot;
  cResult[4] = tmp5.dot;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((arg0, ref) => {
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
  const tmp = closure_9();
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
  const obj7 = { style: tmp.label, variant: "text-xs/semibold", color, maxFontSizeMultiplier: 2, children: label };
  const Text = Text_Text.Text;
  const tmp13 = hasOwnProperty;
  if (label == null) {
    label = accessibilityLabel;
  }
  items1[1] = React3(Text, obj7);
  return tmp13(PressableScale, obj6);
})));
size = size_mod;
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default memoResult;
