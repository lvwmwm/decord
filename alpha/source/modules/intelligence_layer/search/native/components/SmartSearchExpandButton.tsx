// Module ID: 18760
// Function ID: 18761
// Name: SmartSearchExpandButton
// Dependencies: [19, 17, 21, 575, 5014, 18759, 11413, 15458, 5260, 1113, 4123, 2]

// Module 18760 (SmartSearchExpandButton)
import nativeDefault from "native" /* 575 */;
import _modDef4123 from "module_4123" /* 4123 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
const memoResult = react.memo(function SmartSearchExpandButton(arg0) {
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
  let obj = onPress(18759);
  const tmp3 = closure_10(obj.useSearchHostSurfaceColor());
  if (isCollapsed) {
    ChevronSmallUpIcon = tmp(11413).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp(15458).ChevronSmallUpIcon;
  }
  const items = [onPress];
  const obj2 = { style: tmp3.block, hitSlop: rect, children: tmp7(tmp8, obj3) };
  obj3 = { style: tmp3.pill, hitSlop: rect, accessibilityRole: "button", accessibilityLabel: string(FKLBbW), onPress: callback, children: items1 };
  callback = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items);
  const intl = tmp(1113).intl;
  string = intl.string;
  const tmp10 = _modDef4123;
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
  const obj5 = { size: "sm", color: tmp11(575).colors.INTERACTIVE_ICON_DEFAULT };
  items1[1] = closure_7(ChevronSmallUpIcon, obj5);
  return closure_7(closure_6, obj2);
});
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchExpandButton.tsx");

export default memoResult;
