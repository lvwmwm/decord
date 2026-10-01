// Module ID: 11612
// Function ID: 11613
// Name: Header
// Dependencies: [19, 17, 1372, 8711, 1484, 1074, 21, 576, 4836, 4566, 504, 11533, 4531, 7589, 11538, 8590, 8321, 11613, 4832, 1177, 7363, 4776, 1241, 6610, 11614, 4527, 1115, 11615, 2]
// Exports: default

// Module 11612 (Header)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import useAvatarColorDefault from "useAvatarColor" /* 7589 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8590 */;
import getApplicationInstallURL2 from "getApplicationInstallURL" /* 11614 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import AppLauncherStore from "AppLauncherStore" /* 8711 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

let DEFAULT_CONTENT_PADDING;
let SCREEN_BACKGROUND_COLOR;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let rect;
let rect1;
let rect2;
let size;
let tmp5;
const ReanimatedRexportDefault = tmp5(4566);
const AssetRegistryDefault = tmp5(4776);
const EntityBorderAppIconDefault = tmp5(11538);
const AppLauncherBackButtonDefault = tmp5(11613);
const AppDetailsOverflowMenuDefault = tmp5(11615);
let View = react_native.View;
({ DEFAULT_CONTENT_PADDING, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
({ AnalyticEvents: metroRequire, ApplicationFlags: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const xl = nativeDefault.radii.xl;
let c11 = 105;
let createStyles = createStyles_mod;
let obj = { headerContainer: { position: "absolute", top: -16, left: 0, right: 0, minHeight: 161 }, expandedHeaderBanner: { height: 105 }, appIconMask: rect, collapsedHeaderBanner: rect1, collapsedHeaderBannerOverlay: { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, loadingIcon: size, actionsWrapper: rect2 };
rect = { position: "absolute", padding: 4, bottom: -40, left: 16, backgroundColor: SCREEN_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xl + 4 };
createStyles = createStyles.createStyles;
rect1 = { height: 56, justifyContent: "space-between", alignItems: "center", position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: 16, paddingBottom: nativeDefault.space.PX_12 };
size = { height: 72, width: 72, borderRadius: xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
rect2 = { flexDirection: "row", display: "flex", gap: nativeDefault.space.PX_16, position: "absolute", right: nativeDefault.space.PX_12, top: nativeDefault.space.PX_12, alignItems: "center", justifyContent: "center" };
let closure_12 = createStyles(obj);
const __initData = { code: "function HeaderTsx1(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],'clamp')}]};}" };
const __initData2 = { code: "function HeaderTsx2(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],'clamp')}]};}" };
const __initData3 = { code: "function HeaderTsx3(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],'clamp')};}" };
const __initData4 = { code: "function HeaderTsx4(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],'clamp')};}" };
size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/Header.tsx");

export default function Header(application) {
  let c2;
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj10;
  let onAddAppMenuClick;
  let onPressBack;
  let source;
  let tmp12;
  let tmp13;
  application = application.application;
  const scrollOffsetY = application.scrollOffsetY;
  dependencyMap = undefined;
  let id;
  const tmp2 = dependencyMap;
  ({ onPressBack, onAddAppMenuClick } = application);
  let obj = application(504);
  let items = [AppLauncherStore];
  importDefault = obj.useStateFromStores(items, () => AppLauncherStore.entrypoint());
  const tmp3 = closure_12();
  let appLauncherIconSource = null;
  if (null != application) {
    const tmpResult = application(11533);
    appLauncherIconSource = tmpResult.getAppLauncherIconSource(application);
  }
  const tmpResult9 = application(4531);
  let str = tmpResult9.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let tmp7 = appLauncherIconSource;
  let tmp6 = useAvatarColorDefault;
  if (typeof appLauncherIconSource !== "number") {
    let uri;
    if (appLauncherIconSource != null) {
      uri = appLauncherIconSource.uri;
    }
    tmp7 = uri;
  }
  if (str == null) {
    str = "";
  }
  const tmp6Result = tmp6(tmp7, str);
  if (null != appLauncherIconSource) {
    let obj2 = { iconSource: appLauncherIconSource, iconBorderRadius: xl, iconSize: 72 };
    tmp12 = closure_8(EntityBorderAppIconDefault, obj2);
    tmp13 = closure_8;
  } else {
    let obj3 = { style: tmp3.loadingIcon };
    tmp12 = closure_8(id, obj3);
    tmp13 = closure_8;
  }
  const fn = function n() {
    let items;
    let items1;
    let obj3;
    const obj = { transform: items1 };
    const obj2 = { translateY: obj3.interpolate(scrollOffsetY.get(), items, [0, -105], "clamp") };
    items = [0, HEADER_SCROLL_RANGE];
    items1 = [obj2];
    obj3 = application(c2[9]);
    return obj;
  };
  const tmpResult10 = application(4566);
  let obj4 = { interpolate: tmp(4566).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__closure = obj4;
  fn.__workletHash = 2572905048492;
  fn.__initData = __initData;
  const animatedStyle = tmpResult10.useAnimatedStyle(fn);
  const fn2 = function n() {
    let items;
    let items1;
    let items2;
    let obj3;
    const obj = { transform: items2 };
    const obj2 = { translateY: obj3.interpolate(scrollOffsetY.get(), items, items1, "clamp") };
    items = [0, HEADER_SCROLL_RANGE];
    items1 = [0, HEADER_SCROLL_RANGE];
    items2 = [obj2];
    obj3 = application(c2[9]);
    return obj;
  };
  const tmpResult11 = application(4566);
  fn2.__closure = { interpolate: application(4566).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn2.__workletHash = 8190094903650;
  fn2.__initData = __initData2;
  ({ interpolate: application(4566).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE });
  const animatedStyle1 = tmpResult11.useAnimatedStyle(fn2);
  const fn3 = function o() {
    let items;
    let items1;
    let items2;
    let obj3;
    let obj4;
    const obj = { transform: items1, opacity: obj4.interpolate(scrollOffsetY.get(), items2, [0, 1], "clamp") };
    const obj2 = { translateY: obj3.interpolate(scrollOffsetY.get(), items, [16, 0], "clamp") };
    items = [52.5, HEADER_SCROLL_RANGE];
    items1 = [obj2];
    items2 = [52.5, HEADER_SCROLL_RANGE];
    obj3 = application(c2[9]);
    obj4 = application(c2[9]);
    return obj;
  };
  const tmpResult12 = application(4566);
  fn3.__closure = { interpolate: application(4566).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn3.__workletHash = 14190901941859;
  fn3.__initData = __initData3;
  ({ interpolate: application(4566).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE });
  const animatedStyle2 = tmpResult12.useAnimatedStyle(fn3);
  const fn4 = function n() {
    let items;
    let obj2;
    const obj = { opacity: obj2.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp") };
    items = [52.5, HEADER_SCROLL_RANGE];
    obj2 = application(c2[9]);
    return obj;
  };
  const tmpResult13 = application(4566);
  fn4.__closure = { interpolate: application(4566).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn4.__workletHash = 9589752719246;
  fn4.__initData = __initData4;
  let str2 = "";
  ({ interpolate: application(4566).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE });
  const animatedStyle3 = tmpResult13.useAnimatedStyle(fn4);
  if (null != application) {
    const tmpResult14 = application(8590);
    str2 = tmpResult14.getSectionName(application);
  }
  let hasApplicationFlagResult = null != application && "flags" in application;
  if (hasApplicationFlagResult) {
    const tmpResult15 = application(8321);
    hasApplicationFlagResult = tmpResult15.hasApplicationFlag(application, constants2.EMBEDDED);
  }
  dependencyMap = hasApplicationFlagResult;
  id = UserStore.getCurrentUser();
  const obj8 = { style: items1, pointerEvents: "box-none", children: items3 };
  items1 = [tmp3.headerContainer, animatedStyle];
  const obj9 = { style: items2, pointerEvents: "none", children: tmp13(id, obj10) };
  items2 = [tmp3.expandedHeaderBanner, { backgroundColor: tmp6Result }];
  obj10 = { style: tmp3.appIconMask, children: tmp12 };
  View = ReanimatedRexportDefault.View;
  items3 = [tmp13(id, obj9), , ];
  const obj11 = { style: items4, pointerEvents: "box-none", children: items6 };
  items4 = [tmp3.collapsedHeaderBanner, { backgroundColor: tmp6Result }, animatedStyle1];
  const View2 = ReanimatedRexportDefault.View;
  const obj12 = { style: items5, pointerEvents: "none" };
  items5 = [tmp3.collapsedHeaderBannerOverlay, animatedStyle3];
  items6 = [tmp13(ReanimatedRexportDefault.View, obj12), tmp13(AppLauncherBackButtonDefault, { onPress: onPressBack }), , ];
  const obj13 = { style: animatedStyle2, pointerEvents: "none", children: tmp13(application(4832).Heading, { variant: "heading-lg/bold", color: "text-overlay-light", children: str2 }) };
  const View3 = ReanimatedRexportDefault.View;
  items6[2] = tmp13(View3, obj13);
  items6[3] = tmp13(application(1177).Spacer, { size: 32, pointerEvents: "none" });
  items3[1] = closure_9(View2, obj11);
  let tmp22Result = null;
  const tmp23 = id;
  if (null != application) {
    tmp22Result = null;
    const tmpResult16 = application(8590);
    if (tmpResult16.isRealApplication(application)) {
      const obj14 = { style: tmp3.actionsWrapper, children: items7 };
      const obj15 = {
        size: "sm",
        variant: "secondary-overlay",
        icon: AssetRegistryDefault,
        onPress() {
              let activityLaunchURL;
              const obj = AnalyticsUtilsDefault;
              const obj2 = { application_id: application.id, source };
              obj.track(metroRequire.APP_LAUNCHER_APPLICATION_LINK_COPIED, obj2);
              const copy = ClipboardUtils.copy;
              ClipboardUtils;
              const tmp6 = getApplicationInstallURL2;
              if (c2) {
                const obj3 = { applicationId: application.id, referrerId: id };
                id = undefined;
                const getActivityLaunchURL = tmp6.getActivityLaunchURL;
                if (id != null) {
                  id = id.id;
                }
                activityLaunchURL = getActivityLaunchURL(obj3);
              } else {
                const getApplicationInstallURL = tmp6.getApplicationInstallURL;
                const obj4 = { id: application.id };
                const tmp4Result = AppLauncherUtils;
                const merged = Object.assign(tmp4Result.getInstallAppProps(tmp2));
                activityLaunchURL = getApplicationInstallURL(obj4);
              }
              copy(activityLaunchURL);
              const tmp4Result2 = ToastUtils;
              tmp4Result2.presentLinkCopied();
            },
        accessibilityLabel: intl.string(application(1115).t.XWDihq),
        maxFontSizeMultiplier: 1.5
      };
      const IconButton = tmp(7363).IconButton;
      intl = tmp(1115).intl;
      items7 = [tmp13(IconButton, obj15), ];
      const obj16 = { application, onAddAppMenuClick };
      items7[1] = tmp13(AppDetailsOverflowMenuDefault, obj16);
      tmp22Result = tmp22(tmp23, obj14);
    }
  }
  items3[2] = tmp22Result;
  return closure_9(View, obj8);
};
export const SHEET_HANDLE_CONTAINER_HEIGHT = 16;
export const EXPANDED_HEADER_HEIGHT = 161;
