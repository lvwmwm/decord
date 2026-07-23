// Module ID: 11250
// Function ID: 87563
// Name: xl
// Dependencies: [31, 27, 1849, 8181, 1455, 653, 33, 689, 4130, 3991, 566, 11171, 3834, 7812, 11176, 7919, 7371, 11251, 4126, 1273, 7771, 4075, 675, 5492, 11252, 3830, 1212, 11253, 2]
// Exports: default

// Module 11250 (xl)
import "result";
import { View } from "AppDetailsOverflowMenu";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let DEFAULT_CONTENT_PADDING;
let SCREEN_BACKGROUND_COLOR;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ DEFAULT_CONTENT_PADDING, SCREEN_BACKGROUND_COLOR } = APP_LAUNCHER_BUILT_IN_SECTION_ICON);
({ AnalyticEvents: closure_6, ApplicationFlags: closure_7 } = ME);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const xl = require("_createForOfIteratorHelperLoose").radii.xl;
_createForOfIteratorHelperLoose = { headerContainer: { position: "absolute", top: -16, left: 0, right: 0, minHeight: 161 }, expandedHeaderBanner: { height: 105 } };
_createForOfIteratorHelperLoose = { position: "absolute", padding: 4, bottom: -40, left: 16, backgroundColor: SCREEN_BACKGROUND_COLOR, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl + 4 };
_createForOfIteratorHelperLoose.appIconMask = _createForOfIteratorHelperLoose;
let obj1 = { height: 56, justifyContent: "space-between", alignItems: "center", position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: 16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.collapsedHeaderBanner = obj1;
_createForOfIteratorHelperLoose.collapsedHeaderBannerOverlay = { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
let obj2 = { height: 72, width: 72, borderRadius: xl, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.loadingIcon = obj2;
let obj3 = { flexDirection: "row", display: "flex", gap: require("_createForOfIteratorHelperLoose").space.PX_16, position: "absolute", right: require("_createForOfIteratorHelperLoose").space.PX_12, top: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.actionsWrapper = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_12 = { code: "function HeaderTsx1(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],'clamp')}]};}" };
let closure_13 = { code: "function HeaderTsx2(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],'clamp')}]};}" };
let closure_14 = { code: "function HeaderTsx3(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],'clamp')};}" };
let closure_15 = { code: "function HeaderTsx4(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],'clamp')};}" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/native/screens/application_view/Header.tsx");

export default function Header(application) {
  let onAddAppMenuClick;
  let onPressBack;
  application = application.application;
  let scrollOffsetY = application.scrollOffsetY;
  let dependencyMap;
  let currentUser2;
  ({ onPressBack, onAddAppMenuClick } = application);
  let obj = application(566);
  let items = [closure_5];
  const importDefault = obj.useStateFromStores(items, () => outer1_5.entrypoint());
  const tmp = _createForOfIteratorHelperLoose();
  let appLauncherIconSource = null;
  if (null != application) {
    let obj1 = application(11171);
    appLauncherIconSource = obj1.getAppLauncherIconSource(application);
  }
  let obj2 = application(3834);
  const token = obj2.useToken(importDefault(689).colors.BACKGROUND_BASE_LOW);
  let tmp7 = appLauncherIconSource;
  if ("number" !== typeof appLauncherIconSource) {
    let uri;
    if (null != appLauncherIconSource) {
      uri = appLauncherIconSource.uri;
    }
    tmp7 = uri;
  }
  let str = "";
  let str2 = "";
  if (null != token) {
    str2 = token;
  }
  const tmp6Result = importDefault(7812)(tmp7, str2);
  if (null != appLauncherIconSource) {
    obj = { iconSource: appLauncherIconSource, iconBorderRadius: xl, iconSize: 72 };
    let tmp12 = callback(importDefault(11176), obj);
  } else {
    obj = { style: tmp.loadingIcon };
    tmp12 = callback(currentUser2, obj);
  }
  const tmp6 = importDefault(7812);
  const tmp18 = (function useCollapsedHeaderAnimation(scrollOffsetY) {
    scrollOffsetY = scrollOffsetY.scrollOffsetY;
    let obj = {};
    const fn = function n() {
      let obj = {};
      obj = {};
      const items = [0, 105];
      const items1 = [0, 105];
      obj.translateY = application(3991).interpolate(scrollOffsetY.get(), items, items1, "clamp");
      const items2 = [obj];
      obj.transform = items2;
      return obj;
    };
    obj = { interpolate: application(_undefined[9]).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: 105 };
    fn.__closure = obj;
    fn.__workletHash = 8190094903650;
    fn.__initData = outer1_13;
    obj.headerStyle = application(_undefined[9]).useAnimatedStyle(fn);
    const obj2 = application(_undefined[9]);
    const fn2 = function l() {
      let obj = {};
      obj = {};
      const items = [52.5, 105];
      obj.translateY = application(3991).interpolate(scrollOffsetY.get(), items, [16, 0], "clamp");
      const items1 = [obj];
      obj.transform = items1;
      const obj3 = application(3991);
      const items2 = [52.5, 105];
      obj.opacity = application(3991).interpolate(scrollOffsetY.get(), items2, [0, 1], "clamp");
      return obj;
    };
    obj = { interpolate: application(_undefined[9]).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: 105 };
    fn2.__closure = obj;
    fn2.__workletHash = 14190901941859;
    fn2.__initData = outer1_14;
    obj.nameStyle = application(_undefined[9]).useAnimatedStyle(fn2);
    return obj;
  })({ scrollOffsetY });
  const tmp17 = (function useContainerAnimation(scrollOffsetY) {
    scrollOffsetY = scrollOffsetY.scrollOffsetY;
    let obj = {};
    const fn = function n() {
      let obj = {};
      obj = {};
      const items = [0, 105];
      const items1 = [0, -105];
      obj.translateY = application(table[9]).interpolate(scrollOffsetY.get(), items, items1, "clamp");
      const items2 = [obj];
      obj.transform = items2;
      return obj;
    };
    obj = { interpolate: application(_undefined[9]).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: 105 };
    fn.__closure = obj;
    fn.__workletHash = 2572905048492;
    fn.__initData = outer1_12;
    obj.style = application(_undefined[9]).useAnimatedStyle(fn);
    return obj;
  })({ scrollOffsetY });
  if (null != application) {
    let obj5 = application(7919);
    str = obj5.getSectionName(application);
  }
  let hasApplicationFlagResult = null != application;
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = "flags" in application;
  }
  if (hasApplicationFlagResult) {
    let obj6 = application(7371);
    hasApplicationFlagResult = obj6.hasApplicationFlag(application, constants.EMBEDDED);
  }
  dependencyMap = hasApplicationFlagResult;
  currentUser2 = currentUser.getCurrentUser();
  obj1 = { style: items1, pointerEvents: "box-none" };
  items1 = [tmp.headerContainer, tmp17.style];
  obj2 = { style: items2, pointerEvents: "none" };
  items2 = [tmp.expandedHeaderBanner, { backgroundColor: tmp6Result }];
  let obj3 = { style: tmp.appIconMask, children: tmp12 };
  obj2.children = callback(currentUser2, obj3);
  const items3 = [callback(currentUser2, obj2), , ];
  let obj4 = { style: items4, pointerEvents: "box-none" };
  items4 = [tmp.collapsedHeaderBanner, { backgroundColor: tmp6Result }, tmp18.headerStyle];
  const items5 = [
    tmp.collapsedHeaderBannerOverlay,
    (function useCollapsedHeaderBannerOverlayAnimation(scrollOffsetY) {
      scrollOffsetY = scrollOffsetY.scrollOffsetY;
      let obj = {};
      const fn = function n() {
        const obj = {};
        const items = [52.5, 105];
        obj.opacity = application(table[9]).interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp");
        return obj;
      };
      obj = { interpolate: application(_undefined[9]).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: 105 };
      fn.__closure = obj;
      fn.__workletHash = 9589752719246;
      fn.__initData = outer1_15;
      obj.style = application(_undefined[9]).useAnimatedStyle(fn);
      return obj;
    })({ scrollOffsetY }).style
  ];
  const items6 = [callback(importDefault(3991).View, { style: items5, pointerEvents: "none" }), callback(importDefault(11251), { onPress: onPressBack }), , ];
  obj5 = { style: tmp18.nameStyle, pointerEvents: "none" };
  obj6 = { variant: "heading-lg/bold", color: "text-overlay-light", children: str };
  obj5.children = callback(application(4126).Heading, obj6);
  items6[2] = callback(importDefault(3991).View, obj5);
  items6[3] = callback(application(1273).Spacer, { size: 32, pointerEvents: "none" });
  obj4.children = items6;
  items3[1] = callback2(importDefault(3991).View, obj4);
  let tmp27 = null;
  if (null != application) {
    tmp27 = null;
    if (obj14.isRealApplication(application)) {
      const obj7 = { style: tmp.actionsWrapper };
      const obj8 = {
        size: "sm",
        variant: "secondary-overlay",
        icon: importDefault(4075),
        onPress() {
              let obj = callback(_undefined[22]);
              obj = { application_id: application.id, source: callback };
              obj.track(outer1_6.APP_LAUNCHER_APPLICATION_LINK_COPIED, obj);
              const obj4 = application(_undefined[24]);
              if (_undefined) {
                obj = { applicationId: application.id };
                let id;
                if (null != id) {
                  id = id.id;
                }
                obj.referrerId = id;
                let activityLaunchURL = obj4.getActivityLaunchURL(obj);
              } else {
                const obj1 = { id: application.id };
                const merged = Object.assign(tmp2(tmp3[15]).getInstallAppProps(application));
                activityLaunchURL = obj4.getApplicationInstallURL(obj1);
                const tmp2Result = tmp2(tmp3[15]);
              }
              application(_undefined[23]).copy(activityLaunchURL);
              const obj3 = application(_undefined[23]);
              tmp2 = application;
              tmp3 = _undefined;
              application(_undefined[25]).presentLinkCopied();
            }
      };
      const intl = application(1212).intl;
      obj8.accessibilityLabel = intl.string(application(1212).t.XWDihq);
      obj8.maxFontSizeMultiplier = 1.5;
      const items7 = [callback(application(7771).IconButton, obj8), ];
      const obj9 = { application, onAddAppMenuClick };
      items7[1] = callback(importDefault(11253), obj9);
      obj7.children = items7;
      tmp27 = callback2(currentUser2, obj7);
    }
    obj14 = application(7919);
  }
  items3[2] = tmp27;
  obj1.children = items3;
  return callback2(importDefault(3991).View, obj1);
};
export const SHEET_HANDLE_CONTAINER_HEIGHT = 16;
export const EXPANDED_HEADER_HEIGHT = 161;
