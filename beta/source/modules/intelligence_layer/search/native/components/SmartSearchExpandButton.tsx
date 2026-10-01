// Module ID: 16514
// Function ID: 16515
// Name: SmartSearchExpandButton
// Dependencies: [19, 17, 21, 576, 4836, 16513, 13113, 10615, 1115, 3877, 2]

// Module 16514 (SmartSearchExpandButton)
import nativeDefault from "native" /* 576 */;
import _modDef3877 from "module_3877" /* 3877 */;
import useSearchHostSurface from "useSearchHostSurface" /* 16513 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let isExpanded;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Pressable: c3, StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles((backgroundColor) => {
  let obj3;
  const obj = { block: { position: "absolute", left: 0, right: 0, bottom: 0, alignItems: "center" }, pill: { height: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, backgroundColor, alignItems: "center", justifyContent: "center" }, surface: obj3 };
  obj3 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
  ({ height: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, backgroundColor, alignItems: "center", justifyContent: "center" });
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
const memoResult = react.memo((isExpanded) => {
  let ChevronSmallDownIcon;
  let OLD0mz;
  let items;
  let obj3;
  let string;
  let tmp10;
  let tmp6;
  let tmp7;
  isExpanded = isExpanded.isExpanded;
  const onPress = isExpanded.onPress;
  const obj = useSearchHostSurface;
  const tmp3 = closure_9(obj.useSearchHostSurfaceColor());
  if (isExpanded) {
    ChevronSmallDownIcon = tmp(13113).ChevronSmallUpIcon;
  } else {
    ChevronSmallDownIcon = tmp(10615).ChevronSmallDownIcon;
  }
  const obj2 = { style: tmp3.block, hitSlop: rect, children: tmp6(tmp7, obj3) };
  obj3 = { style: tmp3.pill, hitSlop: rect, accessibilityRole: "button", accessibilityLabel: string(OLD0mz), onPress, children: items };
  const intl = tmp(1115).intl;
  string = intl.string;
  const tmp9 = _modDef3877;
  tmp6 = metroImportDefault;
  tmp7 = _false;
  if (isExpanded) {
    OLD0mz = tmp9.ih0v1g;
    tmp10 = tmp8;
  } else {
    OLD0mz = tmp9.OLD0mz;
    tmp10 = tmp8;
  }
  items = [, ];
  const obj4 = { style: tmp3.surface, pointerEvents: "none" };
  items[0] = metroRequire(hasOwnProperty, obj4);
  const obj5 = { size: "sm", color: tmp10(576).colors.INTERACTIVE_ICON_DEFAULT };
  items[1] = metroRequire(ChevronSmallDownIcon, obj5);
  return metroRequire(hasOwnProperty, obj2);
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchExpandButton.tsx");

export default memoResult;
