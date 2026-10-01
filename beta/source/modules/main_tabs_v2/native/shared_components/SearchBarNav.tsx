// Module ID: 6794
// Function ID: 6795
// Name: SearchBarNav
// Dependencies: [19, 17, 21, 4836, 5994, 576, 5435, 1115, 1364, 5940, 4832, 6471, 2]

// Module 6794 (SearchBarNav)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import Pressables from "Pressables" /* 5435 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let onClose;

let StyleSheet;
let c2;
let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
({ View: c2, StyleSheet } = react_native);
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, cancelText: obj3, cancelIcon: obj4, flex: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", height: NavigatorConstants.NAV_BAR_HEIGHT, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BORDER_STRONG };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj4 = { marginRight: nativeDefault.space.PX_16 };
let closure_5 = createStyles(obj);
const forwardRefResult = react.forwardRef((onClose, ref) => {
  let SearchField;
  let intl;
  let intl2;
  let items;
  let obj7;
  let obj8;
  let tmp3Result;
  onClose = onClose.onClose;
  const merged = Object.assign(onClose, Object.assign({ onClose: 0 }));
  const tmp2 = closure_5();
  const obj = { accessibilityRole: "button", accessibilityLabel: intl.string(intl3.t["ETE/oC"]), onPress: onClose, hitSlop: { top: 8, right: 8, bottom: 8, left: 8 }, children: tmp3Result };
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl3.intl;
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    const obj3 = { style: tmp2.cancelIcon };
    tmp3Result = tmp3(tmp4(5940).ArrowLargeLeftIcon, obj3);
  } else {
    const obj4 = { style: tmp2.cancelText, maxFontSizeMultiplier: 2, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl3.t["ETE/oC"]) };
    const Text = tmp4(4832).Text;
    intl2 = tmp4(1115).intl;
    tmp3Result = tmp3(Text, obj4);
  }
  const tmp3Result2 = _false(PressableOpacity, obj);
  let tmp10 = null;
  const obj5 = { style: tmp2.container, children: items };
  const tmp4Result = PlatformUtils;
  const tmp8 = React3;
  if (tmp4Result.isAndroid()) {
    tmp10 = tmp3Result2;
  }
  items = [tmp10, , ];
  const obj6 = { style: tmp2.flex, children: _false(React2, obj7) };
  obj7 = { children: _false(SearchField, obj8) };
  obj8 = { size: "md", round: true, ref };
  SearchField = tmp4(6471).SearchField;
  const merged1 = Object.assign(merged);
  items[1] = _false(React2, obj6);
  let tmp12 = null;
  const tmp4Result2 = PlatformUtils;
  if (!tmp4Result2.isAndroid()) {
    tmp12 = tmp3Result2;
  }
  items[2] = tmp12;
  return tmp8(React2, obj5);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx");

export default forwardRefResult;
