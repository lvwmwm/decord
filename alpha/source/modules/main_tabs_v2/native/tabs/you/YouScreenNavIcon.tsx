// Module ID: 14634
// Function ID: 14635
// Name: YouScreenNavIcon
// Dependencies: [19, 17, 21, 14633, 587, 9468, 5005, 558, 576, 14635, 1125, 5178, 5271, 8950, 2]

// Module 14634 (YouScreenNavIcon)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1125 */;
import mergeProps from "mergeProps" /* 5178 */;
import Text_Text from "Text/Text" /* 5271 */;
import ClipView from "ClipView" /* 9468 */;
import getIconSize from "getIconSize" /* 14633 */;
import YouScreenNavIconMeasurer from "YouScreenNavIconMeasurer" /* 14635 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ClipViewDefault = ClipView;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const md = getIconSize.ICON_SIZE.md;
const padding = (nativeDefault.space.PX_32 - md) / 2;
const TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
let c8 = "text-default";
const point = { shape: ClipView.CutoutShape.Circle, x: md - 8 - 4, y: -4, size: 16 };
let items = [point];
let closure_10 = createStyles.createStyles((width) => {
  let num;
  const obj = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, width, minWidth: nativeDefault.space.PX_48, maxWidth: nativeDefault.space.PX_80, flexShrink: num, flexDirection: "column", alignItems: "center", padding };
  num = 1;
  if (null == width) {
    num = 0;
  }
  const obj2 = { container: obj, label: { marginTop: nativeDefault.space.PX_4, textAlign: "center" }, dot: size };
  ({ marginTop: nativeDefault.space.PX_4, textAlign: "center" });
  size = { backgroundColor: tmp(587).colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: tmp(587).radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
  return obj2;
});
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenNavIcon(arg0) {
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
  const obj = react2;
  const cResult = obj.c(25);
  ({ onPress, IconComponent, icon, accessibilityLabel, label, showRedDot, dotStyle, ref, testID } = arg0);
  const tmpResult = YouScreenNavIconMeasurer;
  const youScreenNavIconMeasurement = tmpResult.useYouScreenNavIconMeasurement();
  const containerRef = youScreenNavIconMeasurement.containerRef;
  const tmp6 = closure_10(youScreenNavIconMeasurement.width);
  if (cResult[0] === IconComponent) {
    let tmp7;
    if (cResult[1] === icon) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === dotStyle) {
      if (cResult[4] === tmp7) {
        if (cResult[5] === (undefined !== showRedDot && showRedDot)) {
          let tmp11;
          let tmp18;
          if (cResult[6] === tmp6.dot) {
            tmp11 = cResult[7];
          }
          if (cResult[8] !== (undefined !== showRedDot && showRedDot)) {
            let tmp19;
            if (undefined !== showRedDot && showRedDot) {
              const obj2 = { text: intl.string(intl2.t.y2b7CA) };
              intl = tmp(1125).intl;
              tmp19 = obj2;
            }
            cResult[8] = undefined !== showRedDot && showRedDot;
            cResult[9] = tmp19;
            tmp18 = tmp19;
          } else {
            tmp18 = cResult[9];
          }
          if (cResult[10] === containerRef) {
            let tmp20;
            if (cResult[11] === ref) {
              tmp20 = cResult[12];
            }
            if (label == null) {
              label = accessibilityLabel;
            }
            if (cResult[13] === tmp6.label) {
              let tmp23;
              if (cResult[14] === label) {
                tmp23 = cResult[15];
              }
              if (cResult[16] === accessibilityLabel) {
                if (cResult[17] === tmp18) {
                  if (cResult[18] === tmp11) {
                    if (cResult[19] === onPress) {
                      if (cResult[20] === tmp6.container) {
                        if (cResult[21] === tmp20) {
                          if (cResult[22] === tmp23) {
                            let tmp27;
                            if (cResult[23] === testID) {
                              tmp27 = cResult[24];
                            }
                            return tmp27;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj3 = { ref: tmp20, style: tmp6.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp18, onPress, hitSlop: nativeDefault.space.PX_8, testID, children: items };
              const PressableScale = tmp(8950).PressableScale;
              items = [tmp11, tmp23];
              const tmp30 = hasOwnProperty(PressableScale, obj3);
              cResult[16] = accessibilityLabel;
              cResult[17] = tmp18;
              cResult[18] = tmp11;
              cResult[19] = onPress;
              cResult[20] = tmp6.container;
              cResult[21] = tmp20;
              cResult[22] = tmp23;
              cResult[23] = testID;
              cResult[24] = tmp30;
              tmp27 = tmp30;
            }
            const obj4 = { style: tmp6.label, variant: "text-xs/semibold", color, maxFontSizeMultiplier: 2, lineClamp: 1, children: label };
            const tmp26 = React3(Text_Text.Text, obj4);
            cResult[13] = tmp6.label;
            cResult[14] = label;
            cResult[15] = tmp26;
            tmp23 = tmp26;
          }
          const tmpResult2 = mergeProps;
          const mergeRefsResult = tmpResult2.mergeRefs(ref, containerRef);
          cResult[10] = containerRef;
          cResult[11] = ref;
          cResult[12] = mergeRefsResult;
          tmp20 = mergeRefsResult;
        }
      }
    }
    let tmp12 = tmp7;
    if (undefined !== showRedDot && showRedDot) {
      const obj5 = { children: items1 };
      const obj6 = { cutouts: items, children: tmp7 };
      items1 = [React3(ClipViewDefault, obj6), ];
      const obj7 = { style: items2 };
      items2 = [tmp6.dot, dotStyle];
      items1[1] = React3(View, obj7);
      tmp12 = hasOwnProperty(View, obj5);
    }
    cResult[3] = dotStyle;
    cResult[4] = tmp7;
    cResult[5] = undefined !== showRedDot && showRedDot;
    cResult[6] = tmp6.dot;
    cResult[7] = tmp12;
    tmp11 = tmp12;
  }
  let tmp8 = icon;
  if (icon == null) {
    const obj8 = { size: "md", color: TEXT_DEFAULT };
    tmp8 = React3(IconComponent, obj8);
  }
  cResult[0] = IconComponent;
  cResult[1] = icon;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : (function YouScreenNavIcon(arg0) {
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
  const tmp4 = closure_10(youScreenNavIconMeasurement.width);
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
    intl = tmp(1125).intl;
    tmp13 = obj6;
  }
  const obj7 = { ref: tmpResult.mergeRefs(ref, containerRef), style: tmp4.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp13, onPress, hitSlop: nativeDefault.space.PX_8, testID, children: items2 };
  const PressableScale = tmp(8950).PressableScale;
  items2 = [tmp7, ];
  const obj8 = { style: tmp4.label, variant: "text-xs/semibold", color, maxFontSizeMultiplier: 2, lineClamp: 1, children: label };
  tmpResult = mergeProps;
  const Text = tmp(5271).Text;
  const tmp14 = hasOwnProperty;
  const tmp15 = React3;
  if (label == null) {
    label = accessibilityLabel;
  }
  items2[1] = tmp15(Text, obj8);
  return tmp14(PressableScale, obj7);
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default memoResult;
