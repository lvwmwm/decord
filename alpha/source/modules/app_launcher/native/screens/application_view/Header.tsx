// Module ID: 13362
// Function ID: 13363
// Name: Header
// Dependencies: [19, 17, 1385, 12609, 1498, 1072, 21, 575, 5243, 1652, 504, 13284, 5839, 8472, 13289, 12608, 2148, 5914, 13363, 5866, 1187, 7922, 5967, 1252, 7877, 13364, 5951, 1113, 13365, 2]
// Exports: default

// Module 13362 (Header)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ToastUtils from "ToastUtils" /* 5951 */;
import ClipboardUtils from "ClipboardUtils" /* 7877 */;
import useAvatarColorDefault from "useAvatarColor" /* 8472 */;
import AppLauncherUtils from "AppLauncherUtils" /* 12608 */;
import getApplicationInstallURL2 from "getApplicationInstallURL" /* 13364 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import AppLauncherStore from "AppLauncherStore" /* 12609 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1498 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

let DEFAULT_CONTENT_PADDING;
let SCREEN_BACKGROUND_COLOR;
let metroImportAll;
let metroImportDefault;
let rect;
let rect1;
let rect2;
let size;
let tmp5;
const _modDef1652 = tmp5(1652);
const AssetRegistryDefault = tmp5(5967);
const EntityBorderAppIconDefault = tmp5(13289);
const AppLauncherBackButtonDefault = tmp5(13363);
const AppDetailsOverflowMenuDefault = tmp5(13365);
let View = react_native.View;
({ DEFAULT_CONTENT_PADDING, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const xl = nativeDefault.radii.xl;
let c10 = 105;
let createStyles = createStyles_mod;
let obj = { headerContainer: { position: "absolute", top: -16, left: 0, right: 0, minHeight: 161 }, expandedHeaderBanner: { height: 105 }, appIconMask: rect, collapsedHeaderBanner: rect1, collapsedHeaderBannerOverlay: { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, loadingIcon: size, actionsWrapper: rect2 };
rect = { position: "absolute", padding: 4, bottom: -40, left: 16, backgroundColor: SCREEN_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xl + 4 };
createStyles = createStyles.createStyles;
rect1 = { height: 56, justifyContent: "space-between", alignItems: "center", position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: 16, paddingBottom: nativeDefault.space.PX_12 };
size = { height: 72, width: 72, borderRadius: xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
rect2 = { flexDirection: "row", display: "flex", gap: nativeDefault.space.PX_16, position: "absolute", right: nativeDefault.space.PX_12, top: nativeDefault.space.PX_12, alignItems: "center", justifyContent: "center" };
let closure_11 = createStyles(obj);
let closure_12 = { code: "(function HeaderTsx1(){let[interpolate,scrollOffsetY,HEADER_SCROLL_RANGE]=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],'clamp')}]};})" };
let closure_13 = { code: "(function HeaderTsx2(){let[interpolate,scrollOffsetY,HEADER_SCROLL_RANGE]=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],'clamp')}]};})" };
let closure_14 = { code: "(function HeaderTsx3(){let[interpolate,scrollOffsetY,HEADER_SCROLL_RANGE]=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],'clamp')};})" };
let closure_15 = { code: "(function HeaderTsx4(){let[interpolate,scrollOffsetY,HEADER_SCROLL_RANGE]=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],'clamp')};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/Header.tsx");

export default function Header(application) {
  let c2;
  let intl;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items9;
  let obj6;
  let onAddAppMenuClick;
  let onPressBack;
  let source;
  let tmp12;
  let tmp13;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  application = application.application;
  const scrollOffsetY = application.scrollOffsetY;
  dependencyMap = undefined;
  let id;
  const tmp2 = dependencyMap;
  ({ onPressBack, onAddAppMenuClick } = application);
  let obj = application(504);
  let items = [AppLauncherStore];
  importDefault = obj.useStateFromStores(items, () => AppLauncherStore.entrypoint());
  const tmp3 = closure_11();
  let appLauncherIconSource = null;
  if (null != application) {
    const tmpResult = application(13284);
    appLauncherIconSource = tmpResult.getAppLauncherIconSource(application);
  }
  const tmpResult9 = application(5839);
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
    tmp12 = closure_7(EntityBorderAppIconDefault, obj2);
    tmp13 = closure_7;
  } else {
    let obj3 = { style: tmp3.loadingIcon };
    tmp12 = closure_7(id, obj3);
    tmp13 = closure_7;
  }
  let items1 = [closure_12, , , ];
  const useAnimatedStyle = tmp(1652).useAnimatedStyle;
  application(1652);
  items1[1] = application(1652).interpolate;
  items1[2] = scrollOffsetY;
  items1[3] = c10;
  let c0;
  let c1;
  dependencyMap = undefined;
  [tmp18, tmp19, tmp20, tmp21] = items1;
  class HeaderTsx1 {
    constructor() {
      let items;
      let items1;
      let items2;
      const obj = { transform: items2 };
      const obj2 = { translateY: _undefined(_undefined2.get(), items, items1, "clamp") };
      items = [0, c2];
      items1 = [0, -c2];
      items2 = [obj2];
      return obj;
    }
  }
  let items2 = [tmp19, tmp20, tmp21];
  HeaderTsx1.__closure = items2;
  HeaderTsx1.__workletHash = 2041267875989;
  HeaderTsx1.__initData = tmp18;
  const animatedStyle = useAnimatedStyle(HeaderTsx1);
  const items3 = [closure_13, , , ];
  const useAnimatedStyle2 = tmp(1652).useAnimatedStyle;
  application(1652);
  items3[1] = application(1652).interpolate;
  items3[2] = scrollOffsetY;
  items3[3] = c10;
  c0 = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  [tmp24, tmp25, tmp26, tmp27] = items3;
  class HeaderTsx2 {
    constructor() {
      let items;
      let items1;
      let items2;
      const obj = { transform: items2 };
      const obj2 = { translateY: _undefined(_undefined2.get(), items, items1, "clamp") };
      items = [0, c2];
      items1 = [0, c2];
      items2 = [obj2];
      return obj;
    }
  }
  const items4 = [tmp25, tmp26, tmp27];
  HeaderTsx2.__closure = items4;
  HeaderTsx2.__workletHash = 12593717419899;
  HeaderTsx2.__initData = tmp24;
  const animatedStyle2 = useAnimatedStyle2(HeaderTsx2);
  const items5 = [closure_14, , , ];
  const useAnimatedStyle3 = tmp(1652).useAnimatedStyle;
  application(1652);
  items5[1] = application(1652).interpolate;
  items5[2] = scrollOffsetY;
  items5[3] = c10;
  c0 = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  [tmp30, tmp31, tmp32, tmp33] = items5;
  class HeaderTsx3 {
    constructor() {
      let items;
      let items1;
      let items2;
      const obj = { transform: items1, opacity: _undefined(_undefined2.get(), items2, [0, 1], "clamp") };
      const obj2 = { translateY: _undefined(_undefined2.get(), items, [16, 0], "clamp") };
      items = [0.5 * c2, c2];
      items1 = [obj2];
      items2 = [0.5 * c2, c2];
      return obj;
    }
  }
  const items6 = [tmp31, tmp32, tmp33];
  HeaderTsx3.__closure = items6;
  HeaderTsx3.__workletHash = 17390115934490;
  HeaderTsx3.__initData = tmp30;
  const animatedStyle3 = useAnimatedStyle3(HeaderTsx3);
  const items7 = [closure_15, , , ];
  const useAnimatedStyle4 = tmp(1652).useAnimatedStyle;
  application(1652);
  items7[1] = application(1652).interpolate;
  items7[2] = scrollOffsetY;
  items7[3] = c10;
  c0 = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  [tmp36, tmp37, tmp38, tmp39] = items7;
  class HeaderTsx4 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), items, [0, 0.5], "clamp") };
      items = [0.5 * c2, c2];
      return obj;
    }
  }
  const items8 = [tmp37, tmp38, tmp39];
  HeaderTsx4.__closure = items8;
  HeaderTsx4.__workletHash = 5671647822967;
  HeaderTsx4.__initData = tmp36;
  let str2 = "";
  const animatedStyle4 = useAnimatedStyle4(HeaderTsx4);
  if (null != application) {
    const tmpResult14 = application(12608);
    str2 = tmpResult14.getSectionName(application);
  }
  let result = null != application && "flags" in application;
  if (result) {
    const tmpResult15 = application(2148);
    result = tmpResult15.supportsEmbeddedSurface(application, tmp(5914).EmbeddedSurfaceType.MAIN);
  }
  dependencyMap = result;
  id = UserStore.getCurrentUser();
  let obj4 = { style: items9, pointerEvents: "box-none", children: items11 };
  items9 = [tmp3.headerContainer, animatedStyle];
  const obj5 = { style: items10, pointerEvents: "none", children: tmp13(id, obj6) };
  items10 = [tmp3.expandedHeaderBanner, { backgroundColor: tmp6Result }];
  obj6 = { style: tmp3.appIconMask, children: tmp12 };
  View = _modDef1652.View;
  items11 = [tmp13(id, obj5), , ];
  const obj7 = { style: items12, pointerEvents: "box-none", children: items14 };
  items12 = [tmp3.collapsedHeaderBanner, { backgroundColor: tmp6Result }, animatedStyle2];
  const View2 = _modDef1652.View;
  const obj8 = { style: items13, pointerEvents: "none" };
  items13 = [tmp3.collapsedHeaderBannerOverlay, animatedStyle4];
  items14 = [tmp13(_modDef1652.View, obj8), tmp13(AppLauncherBackButtonDefault, { onPress: onPressBack }), , ];
  const obj9 = { style: animatedStyle3, pointerEvents: "none", children: tmp13(application(5866).Heading, { variant: "heading-lg/semibold", color: "text-overlay-light", children: str2 }) };
  const View3 = _modDef1652.View;
  items14[2] = tmp13(View3, obj9);
  items14[3] = tmp13(application(1187).Spacer, { size: 32, pointerEvents: "none" });
  items11[1] = closure_8(View2, obj7);
  let tmp42Result = null;
  const tmp43 = id;
  if (null != application) {
    tmp42Result = null;
    const tmpResult16 = application(12608);
    if (tmpResult16.isRealApplication(application)) {
      const obj10 = { style: tmp3.actionsWrapper, children: items15 };
      const obj11 = {
        size: "sm",
        variant: "secondary-overlay",
        icon: AssetRegistryDefault,
        onPress() {
              let activityLaunchURL;
              const obj = AnalyticsUtilsDefault;
              const obj2 = { application_id: application.id, source };
              obj.track(AnalyticEvents.APP_LAUNCHER_APPLICATION_LINK_COPIED, obj2);
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
        accessibilityLabel: intl.string(application(1113).t.XWDihq),
        maxFontSizeMultiplier: 1.5
      };
      const IconButton = tmp(7922).IconButton;
      intl = tmp(1113).intl;
      items15 = [tmp13(IconButton, obj11), ];
      const obj12 = { application, onAddAppMenuClick };
      items15[1] = tmp13(AppDetailsOverflowMenuDefault, obj12);
      tmp42Result = tmp42(tmp43, obj10);
    }
  }
  items11[2] = tmp42Result;
  return closure_8(View, obj4);
};
export const SHEET_HANDLE_CONTAINER_HEIGHT = 16;
export const EXPANDED_HEADER_HEIGHT = 161;
