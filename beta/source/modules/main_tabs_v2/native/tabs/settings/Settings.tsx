// Module ID: 16725
// Function ID: 16726
// Name: Settings
// Dependencies: [19, 17, 21, 4836, 576, 16603, 1613, 6364, 4812, 4566, 16726, 2]
// Exports: default

// Module 16725 (Settings)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6364 */;
import profileModalTransition from "profileModalTransition" /* 16603 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let tmp;
let tmp4;
const ReanimatedRexportDefault = tmp4(4566);
const DeviceUtils = tmp(4812);
let View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { containerOuter: { flex: 1, overflow: "hidden" }, containerOuterTablet: obj2, container: { flex: 1 }, containerTablet: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", flex: 1 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/settings/Settings.tsx");

export default function Settings() {
  let obj = profileModalTransition;
  const reportProfileModalTransition = obj.useReportProfileModalTransition();
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  const left = rect.left;
  const right = rect.right;
  let tmp5 = useIsWindowLargeDefault();
  if (tmp5) {
    const tmpResult = DeviceUtils;
    tmp5 = !tmpResult.isIpadOS();
  }
  let closure_3 = tmp5;
  const tmp6 = closure_6();
  let closure_4 = tmp6;
  let items = [tmp6, tmp5, top, left, right];
  View = ReanimatedRexportDefault.View;
  return <tmp8 style={react.useMemo(() => {
    let items1;
    if (closure_3) {
      const items = [closure_4.containerOuterTablet, ];
      const obj2 = { paddingTop: top, paddingLeft: left, paddingRight: right };
      items[1] = obj2;
      items1 = items;
    } else {
      items1 = [closure_4.containerOuter, ];
      const obj = { paddingLeft: left, paddingRight: right };
      items1[1] = obj;
    }
    return items1;
  }, items)}>{null}</tmp8>;
};
