// Module ID: 13385
// Function ID: 13386
// Name: AppLauncherCommandViewHeader
// Dependencies: [19, 17, 1498, 21, 13357, 5243, 575, 13278, 1652, 5839, 8472, 5957, 5866, 13386, 2]
// Exports: AppLauncherCommandViewHeader

// Module 13385 (AppLauncherCommandViewHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import useAvatarColorDefault from "useAvatarColor" /* 8472 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 13278 */;
import AppLauncherBackButton from "AppLauncherBackButton" /* 13357 */;
import CommandDetailsOverflowMenuDefault from "CommandDetailsOverflowMenu" /* 13386 */;
import react from "react" /* 19 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1498 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const AppLauncherBackButtonDefault = AppLauncherBackButton;

let items;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let size;
let size1;
const View = react_native.View;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const SCREEN_BACKGROUND_COLOR = AppLauncherNativeConstants.SCREEN_BACKGROUND_COLOR;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const sum = AppLauncherBackButton.BACK_BUTTON_SIZE + 2 * DEFAULT_CONTENT_PADDING + 36 + 4;
let closure_8 = sum - 56;
let createStyles = createStyles_mod;
let obj = { headerContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", position: "absolute", top: -16, left: 0, right: 0, padding: DEFAULT_CONTENT_PADDING, zIndex: 1 }, loadingHeaderContainer: obj2, overflowMenuContainer: size, appIconMask: rect, appIcon: size1, loadingIcon: obj3, appSmallName: { textAlign: "center", pointerEvents: "none", flexGrow: 1, marginHorizontal: 8 }, icon: obj4, headerBannerOverlay: { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
size = { width: AppLauncherBackButton.BACK_BUTTON_SIZE, height: AppLauncherBackButton.BACK_BUTTON_SIZE };
rect = { position: "absolute", padding: 4, bottom: -36, left: "50%", backgroundColor: SCREEN_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xl + 4 };
size1 = { width: 72, height: 72, borderRadius: nativeDefault.radii.xl };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj4 = { transform: items };
items = [{ rotate: "180deg" }];
const styles = createStyles(obj);
let closure_10 = { code: "(function AppLauncherCommandViewHeaderTsx1(){let[interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE]=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,1],'clamp'),transform:[{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[12,0],'clamp')}]};})" };
let closure_11 = { code: "(function AppLauncherCommandViewHeaderTsx2(){let[APP_ICON_SIZE,APP_ICON_BORDER_WIDTH,DEFAULT_CONTENT_PADDING,interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE]=this.__closure;return{transform:[{translateX:-APP_ICON_SIZE/2-APP_ICON_BORDER_WIDTH+DEFAULT_CONTENT_PADDING},{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,-APP_ICON_SIZE/2],'clamp')},{scale:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')};})" };
let closure_12 = { code: "(function AppLauncherCommandViewHeaderTsx3(){let[interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE]=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,0.5],'clamp')};})" };
size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx");

export const COLLAPSED_HEADER_HEIGHT = 56;
export const EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT = sum + -16;
export const useStyles = styles;
export function AppLauncherCommandViewHeader(onPressBack) {
  let command;
  let displayName;
  let id;
  let items10;
  let items11;
  let items12;
  let items7;
  let items9;
  let prop;
  let scrollOffsetY;
  let section;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp27Result;
  let tmp34;
  let tmp35;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ command, scrollOffsetY, section } = onPressBack);
  onPressBack = onPressBack.onPressBack;
  const tmp = styles();
  let items = [section];
  const memo = react.useMemo(() => {
    let application;
    const getAppLauncherIconSource = AppLauncherNativeUtils.getAppLauncherIconSource;
    AppLauncherNativeUtils;
    if (section != null) {
      application = section.application;
    }
    return getAppLauncherIconSource(application);
  }, items);
  let items1 = [closure_10, , , ];
  const useAnimatedStyle = section(1652).useAnimatedStyle;
  section(1652);
  items1[1] = section(1652).interpolate;
  items1[2] = scrollOffsetY;
  items1[3] = closure_8;
  let c0;
  let c1;
  let c2;
  [tmp7, tmp8, tmp9, tmp10] = items1;
  class AppLauncherCommandViewHeaderTsx1 {
    constructor() {
      let items;
      let items1;
      let items2;
      const obj = { opacity: _undefined(_undefined2.get(), items, [0, 1], "clamp"), transform: items2 };
      items = [0, c2];
      const obj2 = { translateY: _undefined(_undefined2.get(), items1, [12, 0], "clamp") };
      items1 = [0, c2];
      items2 = [obj2];
      return obj;
    }
  }
  let items2 = [tmp8, tmp9, tmp10];
  AppLauncherCommandViewHeaderTsx1.__closure = items2;
  AppLauncherCommandViewHeaderTsx1.__workletHash = 372054850912;
  AppLauncherCommandViewHeaderTsx1.__initData = tmp7;
  const animatedStyle = useAnimatedStyle(AppLauncherCommandViewHeaderTsx1);
  let items3 = [closure_11, 72, 4, DEFAULT_CONTENT_PADDING, , , ];
  const useAnimatedStyle2 = section(1652).useAnimatedStyle;
  section(1652);
  items3[4] = section(1652).interpolate;
  items3[5] = scrollOffsetY;
  items3[6] = closure_8;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  let c5;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items3;
  class AppLauncherCommandViewHeaderTsx2 {
    constructor() {
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      const obj = { transform: items, opacity: _undefined(_undefined2.get(), items4, [1, 0], "clamp") };
      items = [, , ];
      const obj2 = { translateX: -c0 / 2 - c1 + c2 };
      items[0] = obj2;
      const obj3 = { translateY: _undefined(_undefined2.get(), items1, items2, "clamp") };
      items1 = [0, c5];
      items2 = [0, -c0 / 2];
      items[1] = obj3;
      const obj4 = { scale: _undefined(_undefined2.get(), items3, [1, 0], "clamp") };
      items3 = [0, c5];
      items[2] = obj4;
      items4 = [0, c5];
      return obj;
    }
  }
  let items4 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
  AppLauncherCommandViewHeaderTsx2.__closure = items4;
  AppLauncherCommandViewHeaderTsx2.__workletHash = 16894585624155;
  AppLauncherCommandViewHeaderTsx2.__initData = tmp13;
  const animatedStyle2 = useAnimatedStyle2(AppLauncherCommandViewHeaderTsx2);
  const items5 = [closure_12, , , ];
  const useAnimatedStyle3 = section(1652).useAnimatedStyle;
  section(1652);
  items5[1] = section(1652).interpolate;
  items5[2] = scrollOffsetY;
  items5[3] = closure_8;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp22, tmp23, tmp24, tmp25] = items5;
  class AppLauncherCommandViewHeaderTsx3 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), items, [0, 0.5], "clamp") };
      items = [0, c2];
      return obj;
    }
  }
  const items6 = [tmp23, tmp24, tmp25];
  AppLauncherCommandViewHeaderTsx3.__closure = items6;
  AppLauncherCommandViewHeaderTsx3.__workletHash = 3726184428877;
  AppLauncherCommandViewHeaderTsx3.__initData = tmp22;
  const animatedStyle3 = useAnimatedStyle3(AppLauncherCommandViewHeaderTsx3);
  const tmp3Result4 = section(5839);
  let str = tmp3Result4.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let tmp29 = memo;
  const tmp28 = useAvatarColorDefault;
  if (typeof memo !== "number") {
    let uri;
    if (memo != null) {
      uri = memo.uri;
    }
    tmp29 = uri;
  }
  if (str == null) {
    str = "";
  }
  const tmp28Result = tmp28(tmp29, str);
  if (null != memo) {
    let obj = { style: tmp.appIcon, source: memo };
    tmp34 = closure_6(tmp27(5957), obj);
    tmp35 = closure_6;
  } else {
    let obj2 = { style: items7 };
    items7 = [, ];
    ({ appIcon: arr8[0], loadingIcon: arr8[1] } = tmp);
    tmp34 = closure_6(View, obj2);
    tmp35 = closure_6;
  }
  const items8 = [tmp.headerContainer, ];
  const tmp37 = closure_7;
  if (null == command) {
    prop = tmp.loadingHeaderContainer;
  } else {
    prop = { backgroundColor: tmp28Result };
  }
  let obj3 = { style: items8, children: items10 };
  items8[1] = prop;
  let obj4 = { style: items9 };
  items9 = [tmp.headerBannerOverlay, animatedStyle3];
  items10 = [tmp35(_modDef1652.View, obj4), tmp35(AppLauncherBackButtonDefault, { onPress: onPressBack }), , , ];
  const obj5 = { lineClamp: 1, animated: true, style: items11, variant: "heading-lg/semibold", color: "text-overlay-light", children: displayName };
  items11 = [tmp.appSmallName, animatedStyle];
  displayName = undefined;
  const Text = tmp3(5866).Text;
  if (command != null) {
    displayName = command.displayName;
  }
  items10[2] = tmp35(Text, obj5);
  const obj6 = { style: tmp.overflowMenuContainer, children: tmp35(tmp27Result, { commandId: id }) };
  id = undefined;
  tmp27Result = CommandDetailsOverflowMenuDefault;
  if (command != null) {
    const rootCommand = command.rootCommand;
    if (rootCommand != null) {
      id = rootCommand.id;
    }
  }
  items10[3] = tmp35(View, obj6);
  const obj7 = { style: items12, children: tmp34 };
  items12 = [tmp.appIconMask, animatedStyle2];
  items10[4] = tmp35(_modDef1652.View, obj7);
  return tmp37(View, obj3);
}
