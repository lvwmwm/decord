// Module ID: 18388
// Function ID: 18389
// Name: useAppFrame
// Dependencies: [17, 5140, 575, 1627, 5317, 5097, 2]
// Exports: default

// Module 18388 (useAppFrame)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import DeviceUtils from "DeviceUtils" /* 5097 */;
import useChatLayoutDefault from "useChatLayout" /* 5317 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
let closure_4 = createStyles.createStyles((marginTop) => {
  let num;
  let obj4;
  const obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingTop: num };
  num = 0;
  if (marginTop <= 0) {
    num = tmp(575).space.PX_16;
  }
  const obj2 = { container: obj, content: { marginTop, borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" }, body: { marginTop: -marginTop }, border: obj4, topBorder: { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER } };
  obj4 = { borderTopRightRadius: nativeDefault.radii.md, borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderRightWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderColor: nativeDefault.colors.APP_FRAME_BORDER };
  ({ marginTop, borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" });
  const merged = Object.assign(StyleSheet.absoluteFillObject);
  ({ borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER });
  return obj2;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/useAppFrame.tsx");

export default function useAppFrame() {
  let body;
  let border;
  let container;
  let content;
  let obj5;
  let topBorder;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const rect = useSafeAreaInsetsDefault();
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  ({ container, content, body, border, topBorder } = closure_4(rect.top));
  closure_4(rect.top);
  if (flag) {
    if (!isChatLockedOpen) {
      const obj2 = DeviceUtils;
      isChatLockedOpen = obj2.isDuo();
    }
    flag = isChatLockedOpen;
  }
  if (flag) {
    flag = rect.right > 0;
  }
  const obj3 = { insets: rect, hasFrame: flag, styles: obj5 };
  if (flag) {
    obj5 = { container, content, body, border, topBorder };
    const obj4 = { container, content, body, border, topBorder };
  } else {
    obj5 = {};
  }
  return obj3;
};
