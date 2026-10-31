// Module ID: 12568
// Function ID: 12569
// Name: ConjureHeaderIconButton
// Dependencies: [19, 17, 21, 9509, 5014, 6980, 2]
// Exports: default

// Module 12568 (ConjureHeaderIconButton)
import react_native from "react-native" /* 17 */;
import ClipView from "ClipView" /* 9509 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureHeaderIconButton.tsx");

export default function ConjureHeaderIconButton(ref) {
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
  const PressableOpacity = badgeSize(6980).PressableOpacity;
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
};
export const CONJURE_HEADER_BADGE_SIZE = 8;
