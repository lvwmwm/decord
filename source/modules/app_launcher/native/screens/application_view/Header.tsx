// Module ID: 11240
// Function ID: 87513
// Name: xl
// Dependencies: []
// Exports: default

// Module 11240 (xl)
let DEFAULT_CONTENT_PADDING;
let SCREEN_BACKGROUND_COLOR;
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
({ DEFAULT_CONTENT_PADDING, SCREEN_BACKGROUND_COLOR } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ AnalyticEvents: closure_6, ApplicationFlags: closure_7 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[6]));
const xl = importDefault(dependencyMap[7]).radii.xl;
let obj = arg1(dependencyMap[8]);
obj = { headerContainer: { 0: "link", 9223372036854775807: true, 0: "sm", -9223372036854775808: "secondary", 0: 4 }, expandedHeaderBanner: { height: 105 } };
obj = { is_pip_mode: "<string:1312883141>", lastIntervalMs: "<string:1358954758>", rfc5321AddressLiteral: "<string:4034108748>", showCreateBenefitModal: "<string:16777215>", backgroundColor: SCREEN_BACKGROUND_COLOR, borderRadius: importDefault(dependencyMap[7]).radii.xl + 4 };
obj.appIconMask = obj;
const obj1 = { minWidth: "onPress", paddingHorizontal: DEFAULT_CONTENT_PADDING, marginHorizontal: "Text", paddingHorizontal: "channel_id", paddingVertical: "w", marginBottom: "Array", borderRadius: "isArray", flexDirection: "construct", justifyContent: "concat", marginVertical: "isArray", paddingBottom: importDefault(dependencyMap[7]).space.PX_12 };
obj.collapsedHeaderBanner = obj1;
obj.collapsedHeaderBannerOverlay = { marginBottom: true, borderRadius: true, flexDirection: true, justifyContent: true, marginVertical: true, rowGap: true };
const obj2 = { hideWhenScrolling: "nativeStyles", autoCapitalize: "__handleCache", borderRadius: xl, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_MUTED };
obj.loadingIcon = obj2;
const obj3 = { paddingVertical: false, paddingLeft: false, marginRight: false, display: false, flexDirection: false, gap: importDefault(dependencyMap[7]).space.PX_16, alignItems: false, justifyContent: false, right: importDefault(dependencyMap[7]).space.PX_12, top: importDefault(dependencyMap[7]).space.PX_12 };
obj.actionsWrapper = obj3;
let closure_11 = obj.createStyles(obj);
let closure_12 = { code: "function HeaderTsx1(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],'clamp')}]};}" };
let closure_13 = { code: "function HeaderTsx2(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],'clamp')}]};}" };
let closure_14 = { code: "function HeaderTsx3(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],'clamp')};}" };
let closure_15 = { code: "function HeaderTsx4(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],'clamp')};}" };
const tmp5 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/app_launcher/native/screens/application_view/Header.tsx");

export default function Header(application) {
  let onAddAppMenuClick;
  let onPressBack;
  application = application.application;
  const arg1 = application;
  const scrollOffsetY = application.scrollOffsetY;
  let dependencyMap;
  let currentUser2;
  ({ onPressBack, onAddAppMenuClick } = application);
  let obj = arg1(dependencyMap[10]);
  const items = [closure_5];
  const importDefault = obj.useStateFromStores(items, () => closure_5.entrypoint());
  const tmp = callback3();
  let appLauncherIconSource = null;
  if (null != application) {
    let obj1 = arg1(dependencyMap[11]);
    appLauncherIconSource = obj1.getAppLauncherIconSource(application);
  }
  let obj2 = arg1(dependencyMap[12]);
  const token = obj2.useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW);
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
  const tmp6Result = importDefault(dependencyMap[13])(tmp7, str2);
  if (null != appLauncherIconSource) {
    obj = { iconSource: appLauncherIconSource, iconBorderRadius: xl, iconSize: 72 };
    let tmp12 = callback(importDefault(dependencyMap[14]), obj);
  } else {
    obj = { style: tmp.loadingIcon };
    tmp12 = callback(currentUser2, obj);
  }
  const tmp6 = importDefault(dependencyMap[13]);
  const tmp18 = function useCollapsedHeaderAnimation(scrollOffsetY) {
    scrollOffsetY = scrollOffsetY.scrollOffsetY;
    const application = scrollOffsetY;
    let obj = {};
    const fn = function n() {
      let obj = {};
      obj = {};
      const items = [0.229, 105];
      const items1 = [0.229, 105];
      obj.translateY = scrollOffsetY(closure_2[9]).interpolate(scrollOffsetY.get(), items, items1, "clamp");
      const items2 = [obj];
      obj.transform = items2;
      return obj;
    };
    obj = { interpolate: application(hasApplicationFlagResult[9]).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: 105 };
    fn.__closure = obj;
    fn.__workletHash = 8190094903650;
    fn.__initData = closure_13;
    obj.headerStyle = application(hasApplicationFlagResult[9]).useAnimatedStyle(fn);
    const obj2 = application(hasApplicationFlagResult[9]);
    const fn2 = function l() {
      let obj = {};
      obj = {};
      const items = ["keys", 105];
      obj.translateY = scrollOffsetY(closure_2[9]).interpolate(scrollOffsetY.get(), items, [0.532, 0.22], "clamp");
      const items1 = [obj];
      obj.transform = items1;
      const obj3 = scrollOffsetY(closure_2[9]);
      const items2 = ["keys", 105];
      obj.opacity = scrollOffsetY(closure_2[9]).interpolate(scrollOffsetY.get(), items2, [77601039, 1612144654], "clamp");
      return obj;
    };
    obj = { interpolate: application(hasApplicationFlagResult[9]).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: 105 };
    fn2.__closure = obj;
    fn2.__workletHash = 14190901941859;
    fn2.__initData = closure_14;
    obj.nameStyle = application(hasApplicationFlagResult[9]).useAnimatedStyle(fn2);
    return obj;
  }({ scrollOffsetY });
  const tmp17 = function useContainerAnimation(scrollOffsetY) {
    scrollOffsetY = scrollOffsetY.scrollOffsetY;
    const application = scrollOffsetY;
    let obj = {};
    const fn = function n() {
      let obj = {};
      obj = {};
      const items = [0.229, 105];
      const items1 = [0.229, -105];
      obj.translateY = scrollOffsetY(closure_2[9]).interpolate(scrollOffsetY.get(), items, items1, "clamp");
      const items2 = [obj];
      obj.transform = items2;
      return obj;
    };
    obj = { interpolate: application(hasApplicationFlagResult[9]).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: 105 };
    fn.__closure = obj;
    fn.__workletHash = 2572905048492;
    fn.__initData = closure_12;
    obj.style = application(hasApplicationFlagResult[9]).useAnimatedStyle(fn);
    return obj;
  }({ scrollOffsetY });
  if (null != application) {
    let obj5 = arg1(dependencyMap[15]);
    str = obj5.getSectionName(application);
  }
  let hasApplicationFlagResult = null != application;
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = "flags" in application;
  }
  if (hasApplicationFlagResult) {
    let obj6 = arg1(dependencyMap[16]);
    hasApplicationFlagResult = obj6.hasApplicationFlag(application, constants.EMBEDDED);
  }
  dependencyMap = hasApplicationFlagResult;
  currentUser2 = currentUser.getCurrentUser();
  obj1 = { style: items1, pointerEvents: "box-none" };
  const items1 = [tmp.headerContainer, tmp17.style];
  obj2 = { style: items2, pointerEvents: "none" };
  const items2 = [tmp.expandedHeaderBanner, { backgroundColor: tmp6Result }];
  const obj3 = { style: tmp.appIconMask, children: tmp12 };
  obj2.children = callback(currentUser2, obj3);
  const items3 = [callback(currentUser2, obj2), , ];
  const obj4 = { style: items4, pointerEvents: "box-none" };
  const items4 = [tmp.collapsedHeaderBanner, { backgroundColor: tmp6Result }, tmp18.headerStyle];
  const items5 = [
    tmp.collapsedHeaderBannerOverlay,
    function useCollapsedHeaderBannerOverlayAnimation(scrollOffsetY) {
      scrollOffsetY = scrollOffsetY.scrollOffsetY;
      const application = scrollOffsetY;
      let obj = {};
      const fn = function n() {
        const obj = {};
        const items = ["keys", 105];
        obj.opacity = scrollOffsetY(closure_2[9]).interpolate(scrollOffsetY.get(), items, [-447601326, 1659789871], "clamp");
        return obj;
      };
      obj = { interpolate: application(hasApplicationFlagResult[9]).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: 105 };
      fn.__closure = obj;
      fn.__workletHash = 9589752719246;
      fn.__initData = closure_15;
      obj.style = application(hasApplicationFlagResult[9]).useAnimatedStyle(fn);
      return obj;
    }({ scrollOffsetY }).style
  ];
  const items6 = [callback(importDefault(dependencyMap[9]).View, { style: items5, pointerEvents: "none" }), callback(importDefault(dependencyMap[17]), { onPress: onPressBack }), , ];
  obj5 = { style: tmp18.nameStyle, pointerEvents: "none" };
  obj6 = { children: str };
  obj5.children = callback(arg1(dependencyMap[18]).Heading, obj6);
  items6[2] = callback(importDefault(dependencyMap[9]).View, obj5);
  items6[3] = callback(arg1(dependencyMap[19]).Spacer, {});
  obj4.children = items6;
  items3[1] = callback2(importDefault(dependencyMap[9]).View, obj4);
  let tmp27 = null;
  if (null != application) {
    tmp27 = null;
    if (obj14.isRealApplication(application)) {
      const obj7 = { style: tmp.actionsWrapper };
      const obj8 = {
        icon: importDefault(dependencyMap[21]),
        onPress() {
              let obj = callback(hasApplicationFlagResult[22]);
              obj = { application_id: application.id, source: callback };
              obj.track(constants.APP_LAUNCHER_APPLICATION_LINK_COPIED, obj);
              const obj4 = application(hasApplicationFlagResult[24]);
              if (hasApplicationFlagResult) {
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
              application(hasApplicationFlagResult[23]).copy(activityLaunchURL);
              const obj3 = application(hasApplicationFlagResult[23]);
              const tmp2 = application;
              const tmp3 = hasApplicationFlagResult;
              application(hasApplicationFlagResult[25]).presentLinkCopied();
            }
      };
      const intl = arg1(dependencyMap[26]).intl;
      obj8.accessibilityLabel = intl.string(arg1(dependencyMap[26]).t.XWDihq);
      obj8.maxFontSizeMultiplier = 1.5;
      const items7 = [callback(arg1(dependencyMap[20]).IconButton, obj8), ];
      const obj9 = { application, onAddAppMenuClick };
      items7[1] = callback(importDefault(dependencyMap[27]), obj9);
      obj7.children = items7;
      tmp27 = callback2(currentUser2, obj7);
    }
    const obj14 = arg1(dependencyMap[15]);
  }
  items3[2] = tmp27;
  obj1.children = items3;
  return callback2(importDefault(dependencyMap[9]).View, obj1);
};
export const SHEET_HANDLE_CONTAINER_HEIGHT = 16;
export const EXPANDED_HEADER_HEIGHT = 161;
