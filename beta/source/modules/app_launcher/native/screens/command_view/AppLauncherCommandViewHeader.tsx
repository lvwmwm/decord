// Module ID: 11636
// Function ID: 11637
// Name: AppLauncherCommandViewHeader
// Dependencies: [19, 17, 1484, 21, 11613, 4836, 576, 11533, 4566, 4531, 7589, 5899, 4832, 1177, 2]
// Exports: AppLauncherCommandViewHeader

// Module 11636 (AppLauncherCommandViewHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11533 */;
import AppLauncherBackButton from "AppLauncherBackButton" /* 11613 */;
import react from "react" /* 19 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let items;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let size;
const View = react_native.View;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const SCREEN_BACKGROUND_COLOR = AppLauncherNativeConstants.SCREEN_BACKGROUND_COLOR;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const sum = AppLauncherBackButton.BACK_BUTTON_SIZE + 2 * DEFAULT_CONTENT_PADDING + 36 + 4;
const TOTAL_SCROLL_RANGE = sum - 56;
let createStyles = createStyles_mod;
let obj = { headerContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", position: "absolute", top: -16, left: 0, right: 0, padding: DEFAULT_CONTENT_PADDING, zIndex: 1 }, loadingHeaderContainer: obj2, appIconMask: rect, appIcon: size, loadingIcon: obj3, appSmallName: { textAlign: "center", pointerEvents: "none", flexGrow: 1, marginHorizontal: 8 }, icon: obj4, headerBannerOverlay: { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
rect = { position: "absolute", padding: 4, bottom: -36, left: "50%", backgroundColor: SCREEN_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xl + 4 };
size = { width: 72, height: 72, borderRadius: nativeDefault.radii.xl };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj4 = { transform: items };
items = [{ rotate: "180deg" }];
const styles = createStyles(obj);
const __initData = { code: "function AppLauncherCommandViewHeaderTsx1(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,1],'clamp'),transform:[{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[12,0],'clamp')}]};}" };
const __initData2 = { code: "function AppLauncherCommandViewHeaderTsx2(){const{APP_ICON_SIZE,APP_ICON_BORDER_WIDTH,DEFAULT_CONTENT_PADDING,interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{transform:[{translateX:-APP_ICON_SIZE/2-APP_ICON_BORDER_WIDTH+DEFAULT_CONTENT_PADDING},{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,-APP_ICON_SIZE/2],'clamp')},{scale:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')};}" };
const __initData3 = { code: "function AppLauncherCommandViewHeaderTsx3(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,0.5],'clamp')};}" };
size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx");

export const COLLAPSED_HEADER_HEIGHT = 56;
export const EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT = sum + -16;
export const useStyles = styles;
export const AppLauncherCommandViewHeader = function AppLauncherCommandViewHeader(section) {
  let command;
  let displayName;
  let items1;
  let items3;
  let items4;
  let items5;
  let items6;
  let prop;
  let scrollOffsetY;
  let tmp15;
  let tmp16;
  ({ command, scrollOffsetY } = section);
  section = section.section;
  const onPressBack = section.onPressBack;
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
  let obj = scrollOffsetY(4566);
  class A {
    constructor() {
      let items;
      let items1;
      let items2;
      let obj2;
      let obj4;
      const obj = { opacity: obj2.interpolate(scrollOffsetY.get(), items, [0, 1], "clamp"), transform: items2 };
      items = [0, TOTAL_SCROLL_RANGE];
      obj2 = ReanimatedRexport;
      const obj3 = { translateY: obj4.interpolate(scrollOffsetY.get(), items1, [12, 0], "clamp") };
      items1 = [0, TOTAL_SCROLL_RANGE];
      items2 = [obj3];
      obj4 = ReanimatedRexport;
      return obj;
    }
  }
  let obj2 = { interpolate: scrollOffsetY(4566).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  A.__closure = obj2;
  A.__workletHash = 15596175827193;
  A.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(A);
  let obj3 = scrollOffsetY(4566);
  class E {
    constructor() {
      let items;
      let items1;
      let items2;
      let items3;
      let obj4;
      let obj6;
      let obj7;
      const obj = { transform: items, opacity: obj7.interpolate(scrollOffsetY.get(), items3, [1, 0], "clamp") };
      items = [, , ];
      const obj2 = { translateX: -40 + DEFAULT_CONTENT_PADDING };
      items[0] = obj2;
      const obj3 = { translateY: obj4.interpolate(scrollOffsetY.get(), items1, [0, -36], "clamp") };
      items1 = [0, TOTAL_SCROLL_RANGE];
      items[1] = obj3;
      obj4 = ReanimatedRexport;
      const obj5 = { scale: obj6.interpolate(scrollOffsetY.get(), items2, [1, 0], "clamp") };
      items2 = [0, TOTAL_SCROLL_RANGE];
      items[2] = obj5;
      items3 = [0, TOTAL_SCROLL_RANGE];
      obj6 = ReanimatedRexport;
      obj7 = ReanimatedRexport;
      return obj;
    }
  }
  let obj4 = { APP_ICON_SIZE: 72, APP_ICON_BORDER_WIDTH: 4, DEFAULT_CONTENT_PADDING, interpolate: scrollOffsetY(4566).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  E.__closure = obj4;
  E.__workletHash = 13563524587234;
  E.__initData = __initData2;
  const animatedStyle1 = obj3.useAnimatedStyle(E);
  let obj5 = scrollOffsetY(4566);
  class N {
    constructor() {
      let items;
      let obj2;
      const obj = { opacity: obj2.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp") };
      items = [0, TOTAL_SCROLL_RANGE];
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  let obj6 = { interpolate: scrollOffsetY(4566).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  N.__closure = obj6;
  N.__workletHash = 2637023147700;
  N.__initData = __initData3;
  const animatedStyle2 = obj5.useAnimatedStyle(N);
  let obj7 = scrollOffsetY(4531);
  let str = obj7.useToken(section(576).colors.BACKGROUND_BASE_LOW);
  let tmp10 = memo;
  const tmp9 = section(7589);
  if (typeof memo !== "number") {
    let uri;
    if (memo != null) {
      uri = memo.uri;
    }
    tmp10 = uri;
  }
  if (str == null) {
    str = "";
  }
  const tmp9Result = tmp9(tmp10, str);
  if (null != memo) {
    const obj8 = { style: tmp.appIcon, source: memo };
    tmp15 = closure_6(tmp8(5899), obj8);
    tmp16 = closure_6;
  } else {
    const obj9 = { style: items1 };
    items1 = [, ];
    ({ appIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
    tmp15 = closure_6(View, obj9);
    tmp16 = closure_6;
  }
  let items2 = [tmp.headerContainer, ];
  const tmp18 = closure_7;
  const tmp19 = View;
  if (null == command) {
    prop = tmp.loadingHeaderContainer;
  } else {
    prop = { backgroundColor: tmp9Result };
  }
  const obj10 = { style: items2, children: items4 };
  items2[1] = prop;
  const obj11 = { style: items3 };
  items3 = [tmp.headerBannerOverlay, animatedStyle2];
  items4 = [tmp16(section(4566).View, obj11), tmp16(section(11613), { onPress: onPressBack }), , , ];
  const obj12 = { lineClamp: 1, animated: true, style: items5, variant: "heading-lg/bold", color: "text-overlay-light", children: displayName };
  items5 = [tmp.appSmallName, animatedStyle];
  displayName = undefined;
  const Text = tmp3(4832).Text;
  if (command != null) {
    displayName = command.displayName;
  }
  items4[2] = tmp16(Text, obj12);
  items4[3] = tmp16(scrollOffsetY(1177).Spacer, { size: 32 });
  const obj13 = { style: items6, children: tmp15 };
  items6 = [tmp.appIconMask, animatedStyle1];
  items4[4] = tmp16(section(4566).View, obj13);
  return tmp18(tmp19, obj10);
};
