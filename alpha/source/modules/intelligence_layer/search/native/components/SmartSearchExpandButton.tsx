// Module ID: 18142
// Function ID: 18143
// Name: SmartSearchExpandButton
// Dependencies: [19, 17, 21, 587, 4971, 558, 576, 18141, 11079, 14884, 5212, 1128, 4085, 2]

// Module 18142 (SmartSearchExpandButton)
import nativeDefault from "native" /* 587 */;
import _modDef4085 from "module_4085" /* 4085 */;
import HapticUtils from "HapticUtils" /* 5212 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ Pressable: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles((backgroundColor) => {
  let obj3;
  const obj = { block: { position: "absolute", left: 0, right: 0, bottom: 0, alignItems: "center" }, pill: { height: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, backgroundColor, alignItems: "center", justifyContent: "center" }, surface: obj3 };
  obj3 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
  ({ height: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, backgroundColor, alignItems: "center", justifyContent: "center" });
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  return obj;
});
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SmartSearchExpandButton(arg0) {
  let ChevronSmallUpIcon;
  let block;
  let isCollapsed;
  let items;
  let onPress;
  let pill;
  let tmp10;
  let tmp14;
  let tmp5;
  let tmp6;
  let obj = onPress(576);
  const cResult = obj.c(17);
  ({ isCollapsed, onPress } = arg0);
  const obj2 = onPress(18141);
  const tmp4 = closure_10(obj2.useSearchHostSurfaceColor());
  if (isCollapsed) {
    ChevronSmallUpIcon = tmp(11079).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp(14884).ChevronSmallUpIcon;
  }
  if (cResult[0] !== onPress) {
    const fn = function l() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      onPress();
    };
    cResult[0] = onPress;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  ({ block, pill } = tmp4);
  if (cResult[2] !== isCollapsed) {
    const intl = tmp(1128).intl;
    const string = intl.string;
    const tmp8 = _modDef4085;
    const stringResult = string(isCollapsed ? tmp8.NuTbB9 : tmp8.FKLBbW);
    cResult[2] = isCollapsed;
    cResult[3] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] !== tmp4.surface) {
    const obj3 = { style: tmp4.surface, pointerEvents: "none" };
    const tmp13 = closure_7(closure_6, obj3);
    cResult[4] = tmp4.surface;
    cResult[5] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== ChevronSmallUpIcon) {
    const obj4 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    const tmp17 = closure_7(ChevronSmallUpIcon, obj4);
    cResult[6] = ChevronSmallUpIcon;
    cResult[7] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === tmp5) {
    if (cResult[9] === tmp4.pill) {
      if (cResult[10] === tmp6) {
        if (cResult[11] === tmp10) {
          let tmp18;
          if (cResult[12] === tmp14) {
            tmp18 = cResult[13];
          }
          if (cResult[14] === tmp4.block) {
            let tmp20;
            if (cResult[15] === tmp18) {
              tmp20 = cResult[16];
            }
            return tmp20;
          }
          const obj5 = { style: block, hitSlop: rect, children: tmp18 };
          const tmp24 = closure_7(closure_6, obj5);
          cResult[14] = tmp4.block;
          cResult[15] = tmp18;
          cResult[16] = tmp24;
          tmp20 = tmp24;
        }
      }
    }
  }
  const obj6 = { style: pill, hitSlop: rect, accessibilityRole: "button", accessibilityLabel: tmp6, onPress: tmp5, children: items };
  items = [tmp10, tmp14];
  const tmp19 = closure_8(closure_4, obj6);
  cResult[8] = tmp5;
  cResult[9] = tmp4.pill;
  cResult[10] = tmp6;
  cResult[11] = tmp10;
  cResult[12] = tmp14;
  cResult[13] = tmp19;
  tmp18 = tmp19;
}) : (function SmartSearchExpandButton(arg0) {
  let ChevronSmallUpIcon;
  let FKLBbW;
  let callback;
  let isCollapsed;
  let items1;
  let obj3;
  let onPress;
  let string;
  let tmp11;
  let tmp7;
  let tmp8;
  ({ isCollapsed, onPress } = arg0);
  let obj = onPress(18141);
  const tmp3 = closure_10(obj.useSearchHostSurfaceColor());
  if (isCollapsed) {
    ChevronSmallUpIcon = tmp(11079).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp(14884).ChevronSmallUpIcon;
  }
  const items = [onPress];
  const obj2 = { style: tmp3.block, hitSlop: rect, children: tmp7(tmp8, obj3) };
  obj3 = { style: tmp3.pill, hitSlop: rect, accessibilityRole: "button", accessibilityLabel: string(FKLBbW), onPress: callback, children: items1 };
  callback = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items);
  const intl = tmp(1128).intl;
  string = intl.string;
  const tmp10 = _modDef4085;
  tmp7 = closure_8;
  tmp8 = closure_4;
  if (isCollapsed) {
    FKLBbW = tmp10.NuTbB9;
    tmp11 = tmp9;
  } else {
    FKLBbW = tmp10.FKLBbW;
    tmp11 = tmp9;
  }
  items1 = [, ];
  const obj4 = { style: tmp3.surface, pointerEvents: "none" };
  items1[0] = closure_7(closure_6, obj4);
  const obj5 = { size: "sm", color: tmp11(587).colors.INTERACTIVE_ICON_DEFAULT };
  items1[1] = closure_7(ChevronSmallUpIcon, obj5);
  return closure_7(closure_6, obj2);
}));
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchExpandButton.tsx");

export default memoResult;
