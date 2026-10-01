// Module ID: 16522
// Function ID: 16523
// Name: GroupDMNitroCapBanner
// Dependencies: [19, 17, 21, 4836, 576, 4531, 12958, 5293, 8122, 2]
// Exports: default

// Module 16522 (GroupDMNitroCapBanner)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import usePremiumPrimaryGradientColorsDefault from "usePremiumPrimaryGradientColors" /* 12958 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp2;
const NitroWheelIcon2 = tmp2(8122);
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const locations = [0.0065, 0.5046, 0.9196];
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, pill: obj3, iconContainer: obj4, trailing: obj5, gradientClip: { overflow: "hidden" }, border: obj6, text: { flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, alignItems: "center", justifyContent: "center", marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj5 = { flexDirection: "row", alignItems: "center", marginStart: nativeDefault.space.PX_8 };
obj6 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapBanner.tsx");

export default function GroupDMNitroCapBanner(showLeadingIcon) {
  let NitroWheelIcon;
  let children;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj3;
  let obj5;
  let obj7;
  let tmp9;
  let trailing;
  let flag = showLeadingIcon.showLeadingIcon;
  ({ children, trailing } = showLeadingIcon);
  if (flag === undefined) {
    flag = true;
  }
  const wrapperStyle = showLeadingIcon.wrapperStyle;
  const tmp = closure_8();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
  const obj2 = { style: items, children: tmp9(React3, obj3) };
  items = [tmp.wrapper, wrapperStyle];
  obj3 = { style: items1, children: items4 };
  items1 = [tmp.pill, { borderRadius: token }];
  const obj4 = { style: items2, children: hasOwnProperty(LinearGradientDefault, obj5) };
  items2 = [_false.absoluteFill, tmp.gradientClip, { borderRadius: token }];
  obj5 = { style: items3, useAngle: true, angle: 110.47, colors: usePremiumPrimaryGradientColorsDefault(), locations };
  items3 = [_false.absoluteFill, { opacity: 0.2 }];
  items4 = [hasOwnProperty(React3, obj4), , , , ];
  const tmp10 = _false;
  tmp9 = metroRequire;
  if (flag) {
    const obj6 = { style: tmp.iconContainer, children: hasOwnProperty(NitroWheelIcon, obj7) };
    obj7 = { size: "md", color: nativeDefault.colors.WHITE };
    NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
    flag = tmp7(tmp8, obj6);
  }
  items4[1] = flag;
  const obj8 = { style: tmp.text, children };
  items4[2] = hasOwnProperty(React3, obj8);
  const obj9 = { style: tmp.trailing, children: trailing };
  items4[3] = hasOwnProperty(React3, obj9);
  const obj10 = { style: items5, pointerEvents: "none" };
  items5 = [tmp10.absoluteFill, tmp.border, { borderRadius: token }];
  items4[4] = hasOwnProperty(React3, obj10);
  return hasOwnProperty(React3, obj2);
};
