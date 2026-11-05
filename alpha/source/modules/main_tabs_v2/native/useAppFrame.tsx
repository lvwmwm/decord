// Module ID: 18336
// Function ID: 18337
// Name: useAppFrame
// Dependencies: [17, 5143, 575, 1627, 5327, 2]
// Exports: default

// Module 18336 (useAppFrame)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useChatLayoutDefault from "useChatLayout" /* 5327 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
let closure_3 = createStyles.createStyles((marginTop) => {
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
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const rect = useSafeAreaInsetsDefault();
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  closure_3(rect.top);
  const obj2 = { insets: rect, styles: null };
  if (flag) {
    if (isChatLockedOpen) {
      obj2.styles = {};
      return obj2;
    }
  }
};
