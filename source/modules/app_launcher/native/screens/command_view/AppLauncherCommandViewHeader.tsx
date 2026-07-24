// Module ID: 11306
// Function ID: 87968
// Name: DEFAULT_CONTENT_PADDING
// Dependencies: [31, 27, 1455, 33, 11280, 4130, 689, 11201, 3991, 3834, 7903, 5085, 4126, 1273, 2]
// Exports: AppLauncherCommandViewHeader

// Module 11306 (DEFAULT_CONTENT_PADDING)
import result from "result";
import { View } from "get ActivityIndicator";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
const DEFAULT_CONTENT_PADDING = APP_LAUNCHER_BUILT_IN_SECTION_ICON.DEFAULT_CONTENT_PADDING;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
const sum = require("AppLauncherBackButton").BACK_BUTTON_SIZE + 2 * DEFAULT_CONTENT_PADDING + 36 + 4;
let closure_8 = sum - 56;
_createForOfIteratorHelperLoose = { headerContainer: _createForOfIteratorHelperLoose };
_createForOfIteratorHelperLoose = { alignItems: "center", flexDirection: "row", justifyContent: "space-between", position: "absolute", top: -16, left: 0, right: 0, padding: DEFAULT_CONTENT_PADDING, loadingHeaderContainer: { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST } };
let obj2 = { position: "absolute", padding: 4, bottom: -36, left: "50%", backgroundColor: APP_LAUNCHER_BUILT_IN_SECTION_ICON.SCREEN_BACKGROUND_COLOR, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl + 4 };
_createForOfIteratorHelperLoose.appIconMask = obj2;
let obj3 = { width: 72, height: 72, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl };
_createForOfIteratorHelperLoose.appIcon = obj3;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.loadingIcon = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.appSmallName = { textAlign: "center", pointerEvents: "none", flexGrow: 1, marginHorizontal: 8 };
let items = [{ rotate: "180deg" }];
_createForOfIteratorHelperLoose.icon = { transform: items };
_createForOfIteratorHelperLoose.headerBannerOverlay = { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function AppLauncherCommandViewHeaderTsx1(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,1],'clamp'),transform:[{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[12,0],'clamp')}]};}" };
let closure_11 = { code: "function AppLauncherCommandViewHeaderTsx2(){const{APP_ICON_SIZE,APP_ICON_BORDER_WIDTH,DEFAULT_CONTENT_PADDING,interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{transform:[{translateX:-APP_ICON_SIZE/2-APP_ICON_BORDER_WIDTH+DEFAULT_CONTENT_PADDING},{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,-APP_ICON_SIZE/2],'clamp')},{scale:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')};}" };
let closure_12 = { code: "function AppLauncherCommandViewHeaderTsx3(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,0.5],'clamp')};}" };
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
const result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx");

export const COLLAPSED_HEADER_HEIGHT = 56;
export const EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT = sum + -16;
export const useStyles = _createForOfIteratorHelperLoose;
export const AppLauncherCommandViewHeader = function AppLauncherCommandViewHeader(onPress) {
  let command;
  let scrollOffsetY;
  ({ command, scrollOffsetY } = onPress);
  const section = onPress.section;
  const tmp = _createForOfIteratorHelperLoose();
  let items = [section];
  const memo = React.useMemo(() => {
    let application;
    if (null != section) {
      application = section.application;
    }
    return scrollOffsetY(outer1_2[7]).getAppLauncherIconSource(application);
  }, items);
  let obj = scrollOffsetY(3991);
  class A {
    constructor() {
      obj = {};
      obj2 = scrollOffsetY(outer1_2[8]);
      items = [0];
      items[1] = outer1_8;
      obj.opacity = obj2.interpolate(scrollOffsetY.get(), items, [0, 1], "clamp");
      obj = {};
      obj4 = scrollOffsetY(outer1_2[8]);
      items1 = [0];
      items1[1] = outer1_8;
      obj.translateY = obj4.interpolate(scrollOffsetY.get(), items1, [12, 0], "clamp");
      items2 = [];
      items2[0] = obj;
      obj.transform = items2;
      return obj;
    }
  }
  obj = { interpolate: scrollOffsetY(3991).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE: closure_8 };
  A.__closure = obj;
  A.__workletHash = 15596175827193;
  A.__initData = closure_10;
  const animatedStyle = obj.useAnimatedStyle(A);
  let obj2 = scrollOffsetY(3991);
  class E {
    constructor() {
      obj = {};
      obj = { translateX: -40 + outer1_5 };
      items = [, , ];
      items[0] = obj;
      obj1 = {};
      obj4 = scrollOffsetY(outer1_2[8]);
      items1 = [0];
      items1[1] = outer1_8;
      items2 = [0];
      items2[1] = -36;
      obj1.translateY = obj4.interpolate(scrollOffsetY.get(), items1, items2, "clamp");
      items[1] = obj1;
      obj2 = {};
      obj6 = scrollOffsetY(outer1_2[8]);
      items3 = [0];
      items3[1] = outer1_8;
      obj2.scale = obj6.interpolate(scrollOffsetY.get(), items3, [1, 0], "clamp");
      items[2] = obj2;
      obj.transform = items;
      obj7 = scrollOffsetY(outer1_2[8]);
      items4 = [0];
      items4[1] = outer1_8;
      obj.opacity = obj7.interpolate(scrollOffsetY.get(), items4, [1, 0], "clamp");
      return obj;
    }
  }
  obj = { APP_ICON_SIZE: 72, APP_ICON_BORDER_WIDTH: 4, DEFAULT_CONTENT_PADDING, interpolate: scrollOffsetY(3991).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE: closure_8 };
  E.__closure = obj;
  E.__workletHash = 13563524587234;
  E.__initData = closure_11;
  const animatedStyle1 = obj2.useAnimatedStyle(E);
  let obj4 = scrollOffsetY(3991);
  class N {
    constructor() {
      obj = {};
      obj2 = scrollOffsetY(outer1_2[8]);
      items = [0];
      items[1] = outer1_8;
      obj.opacity = obj2.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp");
      return obj;
    }
  }
  N.__closure = { interpolate: scrollOffsetY(3991).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE: closure_8 };
  N.__workletHash = 2637023147700;
  N.__initData = closure_12;
  const animatedStyle2 = obj4.useAnimatedStyle(N);
  let obj6 = scrollOffsetY(3834);
  const token = obj6.useToken(section(689).colors.BACKGROUND_BASE_LOW);
  let tmp8 = memo;
  let obj1 = { interpolate: scrollOffsetY(3991).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE: closure_8 };
  if ("number" !== typeof memo) {
    let uri;
    if (null != memo) {
      uri = memo.uri;
    }
    tmp8 = uri;
  }
  let str = "";
  if (null != token) {
    str = token;
  }
  const tmp7 = section(7903);
  if (null != memo) {
    obj2 = { style: tmp.appIcon, source: memo };
    let tmp14 = callback(section(5085), obj2);
  } else {
    const obj3 = {};
    let items1 = [, ];
    ({ appIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
    obj3.style = items1;
    tmp14 = callback(View, obj3);
  }
  obj4 = {};
  let items2 = [tmp.headerContainer, ];
  if (null == command) {
    let prop = tmp.loadingHeaderContainer;
  } else {
    prop = { backgroundColor: tmp7Result };
  }
  items2[1] = prop;
  obj4.style = items2;
  let items3 = [tmp.headerBannerOverlay, animatedStyle2];
  let items4 = [callback(section(3991).View, { style: items3 }), callback(section(11280), { onPress: onPress.onPressBack }), , , ];
  const obj5 = { lineClamp: 1, animated: true, style: null, variant: "heading-lg/bold", color: "text-overlay-light" };
  const items5 = [tmp.appSmallName, animatedStyle];
  obj5.style = items5;
  let displayName;
  if (null != command) {
    displayName = command.displayName;
  }
  obj5.children = displayName;
  items4[2] = callback(scrollOffsetY(4126).Text, obj5);
  items4[3] = callback(scrollOffsetY(1273).Spacer, { size: 32 });
  obj6 = { style: items6 };
  items6 = [tmp.appIconMask, animatedStyle1];
  obj6.children = tmp14;
  items4[4] = callback(section(3991).View, obj6);
  obj4.children = items4;
  return closure_7(View, obj4);
};
