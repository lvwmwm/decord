// Module ID: 12384
// Function ID: 12385
// Name: ConjureHeaderIconButton
// Dependencies: [19, 17, 21, 9468, 5005, 558, 576, 6968, 2]

// Module 12384 (ConjureHeaderIconButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Pressables from "Pressables" /* 6968 */;
import ClipView from "ClipView" /* 9468 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ClipViewDefault = ClipView;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((width) => {
  const obj = { button: { width: 40, height: 40, alignItems: "center", justifyContent: "center" }, icon: { width: 24, height: 24 }, disabledIcon: { opacity: 0.5 }, badge: size };
  size = { position: "absolute", left: 24 - width, top: 24 - width, width, height: width, alignItems: "center", justifyContent: "center" };
  return obj;
});
const androidRippleConfig = { borderless: true, radius: 20 };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHeaderIconButton(arg0) {
  let IconComponent;
  let accessibilityActions;
  let accessibilityLabel;
  let accessibilityState;
  let badge;
  let badgeSize;
  let diff1;
  let disabled;
  let items1;
  let items2;
  let onAccessibilityAction;
  let onPress;
  let ref;
  let tmp5;
  let tmp9Result;
  const obj = react2;
  const cResult = obj.c(20);
  ({ IconComponent, onPress, accessibilityLabel, accessibilityActions, onAccessibilityAction, accessibilityState, disabled, badge, badgeSize, ref } = arg0);
  let num = 8;
  if (undefined !== badgeSize) {
    num = badgeSize;
  }
  const tmp4 = closure_7(num);
  if (cResult[0] !== num) {
    const point = { shape: ClipView.CutoutShape.Circle, x: diff1, y: diff1, size: num + 4 };
    const diff = 24 - num;
    diff1 = diff - 2;
    const items = [point];
    cResult[0] = num;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === IconComponent) {
    if (cResult[3] === badge) {
      if (cResult[4] === tmp5) {
        if (cResult[5] === disabled) {
          if (cResult[6] === tmp4.badge) {
            if (cResult[7] === tmp4.disabledIcon) {
              let tmp8;
              if (cResult[8] === tmp4.icon) {
                tmp8 = cResult[9];
              }
              if (cResult[10] === accessibilityActions) {
                if (cResult[11] === accessibilityLabel) {
                  if (cResult[12] === accessibilityState) {
                    if (cResult[13] === disabled) {
                      if (cResult[14] === onAccessibilityAction) {
                        if (cResult[15] === onPress) {
                          if (cResult[16] === ref) {
                            if (cResult[17] === tmp4.button) {
                              let tmp17;
                              if (cResult[18] === tmp8) {
                                tmp17 = cResult[19];
                              }
                              return tmp17;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj2 = { ref, accessibilityRole: "button", accessibilityLabel, accessibilityActions, onAccessibilityAction, accessibilityState, disabled, onPress, activeOpacity: 0.6, androidRippleConfig, style: tmp4.button, children: tmp8 };
              const tmp20 = hasOwnProperty(Pressables.PressableOpacity, obj2);
              cResult[10] = accessibilityActions;
              cResult[11] = accessibilityLabel;
              cResult[12] = accessibilityState;
              cResult[13] = disabled;
              cResult[14] = onAccessibilityAction;
              cResult[15] = onPress;
              cResult[16] = ref;
              cResult[17] = tmp4.button;
              cResult[18] = tmp8;
              cResult[19] = tmp20;
              tmp17 = tmp20;
            }
          }
        }
      }
    }
  }
  if (null != badge) {
    const obj3 = { style: tmp4.icon, children: items2 };
    const obj4 = { cutouts: tmp5, style: items1, children: hasOwnProperty(IconComponent, {}) };
    items1 = [tmp4.icon, ];
    let disabledIcon2 = true === disabled;
    const tmp12 = metroRequire;
    const tmp16 = ClipViewDefault;
    if (disabledIcon2) {
      disabledIcon2 = tmp4.disabledIcon;
    }
    items1[1] = disabledIcon2;
    items2 = [hasOwnProperty(tmp16, obj4), ];
    const obj5 = { style: tmp4.badge, children: badge };
    items2[1] = hasOwnProperty(View, obj5);
    tmp9Result = tmp12(tmp13, obj3);
  } else {
    const items3 = [tmp4.icon, ];
    let disabledIcon = true === disabled;
    const tmp10 = View;
    if (disabledIcon) {
      disabledIcon = tmp4.disabledIcon;
    }
    items3[1] = disabledIcon;
    const obj6 = { style: items3, children: hasOwnProperty(IconComponent, {}) };
    tmp9Result = tmp9(tmp10, obj6);
  }
  cResult[2] = IconComponent;
  cResult[3] = badge;
  cResult[4] = tmp5;
  cResult[5] = disabled;
  cResult[6] = tmp4.badge;
  ({ disabledIcon: tmp3[7], icon: tmp3[8] } = tmp4);
  cResult[9] = tmp9Result;
  tmp8 = tmp9Result;
}) : (function ConjureHeaderIconButton(ref) {
  let IconComponent;
  let accessibilityActions;
  let accessibilityLabel;
  let accessibilityState;
  let badge;
  let badgeSize;
  let disabled;
  let items1;
  let items2;
  let onAccessibilityAction;
  let onPress;
  let tmp3Result;
  ({ IconComponent, disabled, badge, badgeSize } = ref);
  ({ onPress, accessibilityLabel, accessibilityActions, onAccessibilityAction, accessibilityState } = ref);
  if (badgeSize === undefined) {
    badgeSize = 8;
  }
  ref = ref.ref;
  const tmp = closure_7(badgeSize);
  let items = [badgeSize];
  const memo = react.useMemo(() => {
    let diff1;
    const point = { shape: ClipView.CutoutShape.Circle, x: diff1, y: diff1, size: badgeSize + 4 };
    const diff = 24 - badgeSize;
    diff1 = diff - 2;
    const items = [point];
    return items;
  }, items);
  const obj = { ref, accessibilityRole: "button", accessibilityLabel, accessibilityActions, onAccessibilityAction, accessibilityState, disabled, onPress, activeOpacity: 0.6, androidRippleConfig, style: tmp.button, children: tmp3Result };
  const PressableOpacity = badgeSize(6968).PressableOpacity;
  if (null != badge) {
    const obj2 = { style: tmp.icon, children: items2 };
    const obj3 = { cutouts: memo, style: items1, children: closure_5(IconComponent, {}) };
    items1 = [tmp.icon, ];
    let disabledIcon2 = true === disabled;
    const tmp10 = ClipViewDefault;
    const tmp7 = closure_6;
    if (disabledIcon2) {
      disabledIcon2 = tmp.disabledIcon;
    }
    items1[1] = disabledIcon2;
    items2 = [closure_5(tmp10, obj3), ];
    const obj4 = { style: tmp.badge, children: badge };
    items2[1] = closure_5(View, obj4);
    tmp3Result = tmp7(tmp8, obj2);
  } else {
    const items3 = [tmp.icon, ];
    let disabledIcon = true === disabled;
    const tmp5 = View;
    if (disabledIcon) {
      disabledIcon = tmp.disabledIcon;
    }
    items3[1] = disabledIcon;
    const obj5 = { style: items3, children: closure_5(IconComponent, {}) };
    tmp3Result = tmp3(tmp5, obj5);
  }
  return closure_5(PressableOpacity, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureHeaderIconButton.tsx");

export default tmp3;
export const CONJURE_HEADER_BADGE_SIZE = 8;
