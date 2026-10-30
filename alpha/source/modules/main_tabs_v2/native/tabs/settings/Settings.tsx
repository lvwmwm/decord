// Module ID: 18935
// Function ID: 18936
// Name: Settings
// Dependencies: [19, 17, 21, 5009, 575, 18812, 1626, 7106, 4966, 18936, 2]
// Exports: default

// Module 18935 (Settings)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import DeviceUtils from "DeviceUtils" /* 4966 */;
import react_mod from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let react = react_mod;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { containerOuter: obj2, containerOuterTablet: obj3, container: { flex: 1 }, containerTablet: { borderRadius: nativeDefault.radii.md, overflow: "hidden", flex: 1 } };
obj2 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, flex: 1 };
({ borderRadius: nativeDefault.radii.md, overflow: "hidden", flex: 1 });
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/settings/Settings.tsx");

export default function Settings() {
  let closure_3;
  let left;
  let obj3;
  let right;
  let top;
  let tmp = top;
  let obj = top(right[5]);
  const reportProfileModalTransition = obj.useReportProfileModalTransition();
  const rect = left(right[6])();
  top = rect.top;
  const tmp4 = left;
  left = rect.left;
  right = rect.right;
  const tmp5 = left(right[7])();
  react = tmp5;
  let tmp6 = tmp5;
  if (tmp6) {
    const tmpResult = tmp(right[8]);
    tmp6 = !tmpResult.isIpadOS();
  }
  let closure_4 = tmp6;
  const tmp7 = closure_6();
  let containerOuter = tmp7;
  let items = [tmp7, tmp5, tmp6, top, left, right];
  let obj2 = {
    style: react.useMemo(() => {
      const tmp = closure_3;
      if (tmp) {
        const obj = DeviceUtils;
        if (obj.isIpadOS()) {
          containerOuter = containerOuter.containerOuter;
        }
        return containerOuter;
      }
      if (closure_4) {
        const items = [containerOuter.containerOuterTablet, ];
        const obj2 = { paddingTop: top, paddingLeft: left, paddingRight: right };
        items[1] = obj2;
        containerOuter = items;
      } else {
        containerOuter = [, ];
        containerOuter[0] = containerOuter.containerOuter;
        const obj3 = { paddingLeft: left, paddingRight: right };
        containerOuter[1] = obj3;
      }
    }, items),
    children: tmp8(tmp9, obj3)
  };
  obj3 = { style: tmp6 ? tmp7.containerTablet : tmp7.container, children: tmp8(tmp4(tmp2[9]), {}) };
  return containerOuter(closure_4, obj2);
};
