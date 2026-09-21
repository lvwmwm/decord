// Module ID: 12270
// Function ID: 12271
// Name: application_view/Header
// Dependencies: [19, 17, 1376, 9518, 1487, 1078, 21, 580, 4758, 558, 568, 4497, 504, 12181, 4462, 8406, 12186, 9401, 9133, 12271, 4754, 1181, 8178, 4701, 1245, 7436, 12272, 4457, 1119, 12273, 2]

// Module 12270 (application_view/Header)
import nativeDefault from "native" /* 580 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ToastUtils from "ToastUtils" /* 4457 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4497 */;
import ClipboardUtils from "ClipboardUtils" /* 7436 */;
import useAvatarColorDefault from "useAvatarColor" /* 8406 */;
import AppLauncherBackButtonDefault from "AppLauncherBackButton" /* 12271 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 12272 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;
import AppLauncherStore from "AppLauncherStore" /* 9518 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const AppLauncherNativeConstants = fn(1487);
({ DEFAULT_CONTENT_PADDING, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
const Constants = fn(1078);
({ AnalyticEvents: metroRequire, ApplicationFlags: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const xl = nativeDefault.radii.xl;
let c11 = 105;
const createStyles = fn(4758);
let obj2 = { headerContainer: { position: "absolute", top: -16, left: 0, right: 0, minHeight: 161 }, expandedHeaderBanner: { height: 105 }, appIconMask: null, collapsedHeaderBanner: null, collapsedHeaderBannerOverlay: null, loadingIcon: null, actionsWrapper: null };
const rect = { position: "absolute", padding: 4, bottom: -40, left: 16, backgroundColor: SCREEN_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xl + 4 };
obj2.appIconMask = rect;
const rect1 = { height: 56, justifyContent: "space-between", alignItems: "center", position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: 16, paddingBottom: nativeDefault.space.PX_12 };
obj2.collapsedHeaderBanner = rect1;
obj2.collapsedHeaderBannerOverlay = { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
let size = { height: 72, width: 72, borderRadius: xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.loadingIcon = size;
const rect2 = { flexDirection: "row", display: "flex", gap: nativeDefault.space.PX_16, position: "absolute", right: nativeDefault.space.PX_12, top: nativeDefault.space.PX_12, alignItems: "center", justifyContent: "center" };
obj2.actionsWrapper = rect2;
let closure_12 = createStyles.createStyles(obj2);
const __initData = { code: "function HeaderTsx1(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],\"clamp\")}]};}" };
const __initData2 = { code: "function HeaderTsx2(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],'clamp')}]};}" };
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((scrollOffsetY) => {
  const cResult = scrollOffsetY(568).c(2);
  scrollOffsetY = scrollOffsetY.scrollOffsetY;
  let obj = scrollOffsetY(568);
  const fn = function n() {
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const items = [0, c11];
    obj2.translateY = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, [0, -105], "clamp");
    const items1 = [obj2];
    obj.transform = items1;
    return obj;
  };
  let obj2 = scrollOffsetY(4497);
  fn.__closure = { interpolate: scrollOffsetY(4497).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 1624319834028;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] !== animatedStyle) {
    const obj4 = { style: animatedStyle };
    cResult[0] = animatedStyle;
    cResult[1] = obj4;
    let tmp3 = obj4;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : ((scrollOffsetY) => {
  scrollOffsetY = scrollOffsetY.scrollOffsetY;
  let obj = { style: null };
  const fn = function n() {
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const items = [0, c11];
    obj2.translateY = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, [0, -105], "clamp");
    const items1 = [obj2];
    obj.transform = items1;
    return obj;
  };
  let obj2 = scrollOffsetY(4497);
  fn.__closure = { interpolate: scrollOffsetY(4497).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 2569159867119;
  fn.__initData = __initData2;
  obj.style = obj2.useAnimatedStyle(fn);
  return obj;
});
const __initData3 = { code: "function HeaderTsx3(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],\"clamp\")}]};}" };
const __initData4 = { code: "function HeaderTsx4(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],\"clamp\")}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],\"clamp\")};}" };
const __initData5 = { code: "function HeaderTsx5(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],'clamp')}]};}" };
const __initData6 = { code: "function HeaderTsx6(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],'clamp')};}" };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((scrollOffsetY) => {
  const cResult = scrollOffsetY(568).c(3);
  scrollOffsetY = scrollOffsetY.scrollOffsetY;
  let obj = scrollOffsetY(568);
  const fn = function n() {
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const items = [0, c11];
    const items1 = [0, c11];
    obj2.translateY = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, items1, "clamp");
    const items2 = [obj2];
    obj.transform = items2;
    return obj;
  };
  let obj2 = scrollOffsetY(4497);
  fn.__closure = { interpolate: scrollOffsetY(4497).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 2970610906275;
  fn.__initData = __initData3;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj3 = { interpolate: scrollOffsetY(4497).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  const fn2 = function l() {
    const obj = { transform: null, opacity: null };
    const obj2 = { translateY: null };
    const items = [52.5, c11];
    obj2.translateY = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, [16, 0], "clamp");
    const items1 = [obj2];
    obj.transform = items1;
    const items2 = [52.5, c11];
    obj.opacity = ReanimatedRexport.interpolate(scrollOffsetY.get(), items2, [0, 1], "clamp");
    return obj;
  };
  const obj4 = scrollOffsetY(4497);
  fn2.__closure = { interpolate: scrollOffsetY(4497).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn2.__workletHash = 15470059704100;
  fn2.__initData = __initData4;
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === animatedStyle1) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj6 = { headerStyle: animatedStyle, nameStyle: animatedStyle1 };
  cResult[0] = animatedStyle;
  cResult[1] = animatedStyle1;
  cResult[2] = obj6;
  tmp4 = obj6;
}) : ((scrollOffsetY) => {
  scrollOffsetY = scrollOffsetY.scrollOffsetY;
  let obj = { headerStyle: null, nameStyle: null };
  const fn = function n() {
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const items = [0, c11];
    const items1 = [0, c11];
    obj2.translateY = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, items1, "clamp");
    const items2 = [obj2];
    obj.transform = items2;
    return obj;
  };
  let obj2 = scrollOffsetY(4497);
  fn.__closure = { interpolate: scrollOffsetY(4497).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 11916253250213;
  fn.__initData = __initData5;
  obj.headerStyle = obj2.useAnimatedStyle(fn);
  let obj3 = { interpolate: scrollOffsetY(4497).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  const fn2 = function l() {
    const obj = { transform: null, opacity: null };
    const obj2 = { translateY: null };
    const items = [52.5, c11];
    obj2.translateY = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, [16, 0], "clamp");
    const items1 = [obj2];
    obj.transform = items1;
    const items2 = [52.5, c11];
    obj.opacity = ReanimatedRexport.interpolate(scrollOffsetY.get(), items2, [0, 1], "clamp");
    return obj;
  };
  const obj4 = scrollOffsetY(4497);
  fn2.__closure = { interpolate: scrollOffsetY(4497).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn2.__workletHash = 10128442993702;
  fn2.__initData = __initData6;
  obj.nameStyle = obj4.useAnimatedStyle(fn2);
  return obj;
});
const __initData7 = { code: "function HeaderTsx7(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],\"clamp\")};}" };
const __initData8 = { code: "function HeaderTsx8(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],'clamp')};}" };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((scrollOffsetY) => {
  const cResult = scrollOffsetY(568).c(2);
  scrollOffsetY = scrollOffsetY.scrollOffsetY;
  let obj = scrollOffsetY(568);
  const fn = function n() {
    const obj = { opacity: null };
    const items = [52.5, c11];
    obj.opacity = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp");
    return obj;
  };
  const obj2 = scrollOffsetY(4497);
  fn.__closure = { interpolate: scrollOffsetY(4497).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 17064912182733;
  fn.__initData = __initData7;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] !== animatedStyle) {
    const obj4 = { style: animatedStyle };
    cResult[0] = animatedStyle;
    cResult[1] = obj4;
    let tmp3 = obj4;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : ((scrollOffsetY) => {
  scrollOffsetY = scrollOffsetY.scrollOffsetY;
  let obj = { style: null };
  const fn = function n() {
    const obj = { opacity: null };
    const items = [52.5, c11];
    obj.opacity = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp");
    return obj;
  };
  const obj2 = scrollOffsetY(4497);
  fn.__closure = { interpolate: scrollOffsetY(4497).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 14182047849602;
  fn.__initData = __initData8;
  obj.style = obj2.useAnimatedStyle(fn);
  return obj;
});
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/Header.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((application) => {
  const cResult = application(568).c(65);
  application = application.application;
  ({ onPressBack, scrollOffsetY, onAddAppMenuClick } = application);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AppLauncherStore];
    const fn = function c() {
      return AppLauncherStore.entrypoint();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = application(568);
  const stateFromStores = application(504).useStateFromStores(tmp4, tmp5);
  const tmp8 = closure_12();
  if (cResult[2] !== application) {
    let appLauncherIconSource = null;
    if (null != application) {
      appLauncherIconSource = tmp(12181).getAppLauncherIconSource(application);
      const tmpResult6 = tmp(12181);
    }
    cResult[2] = application;
    cResult[3] = appLauncherIconSource;
    let loadingIcon = appLauncherIconSource;
  } else {
    loadingIcon = cResult[3];
  }
  const tmpResult = application(504);
  let str = application(4462).useToken(stateFromStores(580).colors.BACKGROUND_BASE_LOW);
  let tmp12 = loadingIcon;
  const tmpResult7 = application(4462);
  if (typeof loadingIcon !== "number") {
    let uri;
    if (loadingIcon != null) {
      uri = loadingIcon.uri;
    }
    tmp12 = uri;
  }
  if (str == null) {
    str = "";
  }
  const tmp11Result = stateFromStores(8406)(tmp12, str);
  if (cResult[4] === loadingIcon) {
    if (cResult[5] === tmp8.loadingIcon) {
      if (cResult[7] !== scrollOffsetY) {
        let obj2 = { scrollOffsetY };
        cResult[7] = scrollOffsetY;
        cResult[8] = obj2;
        let tmp21 = obj2;
      } else {
        tmp21 = cResult[8];
      }
      const tmp23 = closure_15(tmp21);
      if (cResult[9] !== scrollOffsetY) {
        let obj3 = { scrollOffsetY };
        cResult[9] = scrollOffsetY;
        cResult[10] = obj3;
        let tmp24 = obj3;
      } else {
        tmp24 = cResult[10];
      }
      const tmp26 = closure_20(tmp24);
      if (cResult[11] !== scrollOffsetY) {
        let obj4 = { scrollOffsetY };
        cResult[11] = scrollOffsetY;
        cResult[12] = obj4;
        let tmp27 = obj4;
      } else {
        tmp27 = cResult[12];
      }
      const tmp29 = closure_23(tmp27);
      if (cResult[13] !== application) {
        let str2 = "";
        if (null != application) {
          str2 = tmp(9401).getSectionName(application);
          const tmpResult8 = tmp(9401);
        }
        cResult[13] = application;
        cResult[14] = str2;
        let tmp30 = str2;
      } else {
        tmp30 = cResult[14];
      }
      if (cResult[15] !== application) {
        let hasApplicationFlagResult = null != application;
        if (hasApplicationFlagResult) {
          hasApplicationFlagResult = "flags" in application;
        }
        if (hasApplicationFlagResult) {
          hasApplicationFlagResult = tmp(9133).hasApplicationFlag(application, constants2.EMBEDDED);
          const tmpResult9 = tmp(9133);
        }
        cResult[15] = application;
        cResult[16] = hasApplicationFlagResult;
        let tmp31 = hasApplicationFlagResult;
      } else {
        tmp31 = cResult[16];
      }
      dependencyMap = tmp31;
      const _Symbol = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const currentUser = UserStore.getCurrentUser();
        cResult[17] = currentUser;
        let tmp34 = currentUser;
      } else {
        tmp34 = cResult[17];
      }
      let id = tmp34;
      if (cResult[18] === tmp23.style) {
        if (cResult[19] === tmp8.headerContainer) {
          let tmp37 = cResult[20];
        }
        if (cResult[21] !== tmp11Result) {
          let obj5 = { backgroundColor: tmp11Result };
          cResult[21] = tmp11Result;
          cResult[22] = obj5;
          let tmp38 = obj5;
        } else {
          tmp38 = cResult[22];
        }
        if (cResult[23] === tmp8.expandedHeaderBanner) {
          if (cResult[24] === tmp38) {
            let tmp39 = cResult[25];
          }
          if (cResult[26] === tmp15) {
            if (cResult[27] === tmp8.appIconMask) {
              let tmp40 = cResult[28];
            }
            if (cResult[29] === tmp39) {
              if (cResult[30] === tmp40) {
                let tmp44 = cResult[31];
              }
              if (cResult[32] !== tmp11Result) {
                let obj6 = { backgroundColor: tmp11Result };
                cResult[32] = tmp11Result;
                cResult[33] = obj6;
                let tmp48 = obj6;
              } else {
                tmp48 = cResult[33];
              }
              if (cResult[34] === tmp26.headerStyle) {
                if (cResult[35] === tmp8.collapsedHeaderBanner) {
                  if (cResult[36] === tmp48) {
                    let tmp49 = cResult[37];
                  }
                  if (cResult[38] === tmp29.style) {
                    if (cResult[39] === tmp8.collapsedHeaderBannerOverlay) {
                      let tmp50 = cResult[40];
                    }
                    if (cResult[41] !== onPressBack) {
                      const obj7 = { onPress: onPressBack };
                      const tmp55 = closure_8(tmp10(12271), obj7);
                      cResult[41] = onPressBack;
                      cResult[42] = tmp55;
                      let tmp53 = tmp55;
                    } else {
                      tmp53 = cResult[42];
                    }
                    if (cResult[43] !== tmp30) {
                      const obj8 = { variant: "heading-lg/bold", color: "text-overlay-light", children: tmp30 };
                      const tmp58 = closure_8(tmp(4754).Heading, obj8);
                      cResult[43] = tmp30;
                      cResult[44] = tmp58;
                      let tmp56 = tmp58;
                    } else {
                      tmp56 = cResult[44];
                    }
                    if (cResult[45] === tmp26.nameStyle) {
                      if (cResult[46] === tmp56) {
                        let tmp59 = cResult[47];
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp64 = closure_8(tmp(1181).Spacer, { size: 32, pointerEvents: "none" });
                        cResult[48] = tmp64;
                        let tmp62 = tmp64;
                      } else {
                        tmp62 = cResult[48];
                      }
                      if (cResult[49] === tmp49) {
                        if (cResult[50] === tmp50) {
                          if (cResult[51] === tmp53) {
                            if (cResult[52] === tmp59) {
                              let tmp65 = cResult[53];
                            }
                            if (cResult[54] === application) {
                              if (cResult[55] === stateFromStores) {
                                if (cResult[56] === tmp31) {
                                  if (cResult[57] === onAddAppMenuClick) {
                                    if (cResult[58] === tmp8.actionsWrapper) {
                                      let tmp68 = cResult[59];
                                    }
                                    if (cResult[60] === tmp37) {
                                      if (cResult[61] === tmp44) {
                                        if (cResult[62] === tmp65) {
                                          if (cResult[63] === tmp68) {
                                            let tmp73 = cResult[64];
                                          }
                                          return tmp73;
                                        }
                                      }
                                    }
                                    const obj9 = { style: tmp37, pointerEvents: "box-none", children: null };
                                    const items1 = [tmp44, tmp65, tmp68];
                                    obj9.children = items1;
                                    const tmp75 = closure_9(tmp10(4497).View, obj9);
                                    cResult[60] = tmp37;
                                    cResult[61] = tmp44;
                                    cResult[62] = tmp65;
                                    cResult[63] = tmp68;
                                    cResult[64] = tmp75;
                                    tmp73 = tmp75;
                                  }
                                }
                              }
                            }
                            let tmp69 = null;
                            if (null != application) {
                              tmp69 = null;
                              if (tmpResult10.isRealApplication(application)) {
                                const obj10 = { style: tmp8.actionsWrapper, children: null };
                                const obj11 = {
                                  size: "sm",
                                  variant: "secondary-overlay",
                                  icon: tmp10(4701),
                                  onPress() {
                                                                  AnalyticsUtilsDefault.track(constants.APP_LAUNCHER_APPLICATION_LINK_COPIED, { application_id: application.id, source: stateFromStores });
                                                                  const obj2 = { application_id: application.id, source: stateFromStores };
                                                                  const obj4 = getApplicationInstallURL;
                                                                  if (closure_2) {
                                                                    const obj5 = { applicationId: tmp2.id, referrerId: null };
                                                                    id = undefined;
                                                                    if (id != null) {
                                                                      id = id.id;
                                                                    }
                                                                    obj5.referrerId = id;
                                                                    let activityLaunchURL = obj4.getActivityLaunchURL(obj5);
                                                                  } else {
                                                                    const obj6 = { id: tmp2.id };
                                                                    const merged = Object.assign(tmp4(9401).getInstallAppProps(tmp2));
                                                                    activityLaunchURL = obj4.getApplicationInstallURL(obj6);
                                                                    const tmp4Result = tmp4(9401);
                                                                  }
                                                                  ClipboardUtils.copy(activityLaunchURL);
                                                                  ToastUtils.presentLinkCopied();
                                                                },
                                  accessibilityLabel: null,
                                  maxFontSizeMultiplier: 1.5
                                };
                                const intl = tmp(1119).intl;
                                obj11.accessibilityLabel = intl.string(tmp(1119).t.XWDihq);
                                const items2 = [closure_8(tmp(8178).IconButton, obj11), ];
                                const obj12 = { application, onAddAppMenuClick };
                                items2[1] = closure_8(tmp10(12273), obj12);
                                obj10.children = items2;
                                tmp69 = closure_9(id, obj10);
                              }
                              tmpResult10 = tmp(9401);
                            }
                            cResult[54] = application;
                            cResult[55] = stateFromStores;
                            cResult[56] = tmp31;
                            cResult[57] = onAddAppMenuClick;
                            cResult[58] = tmp8.actionsWrapper;
                            cResult[59] = tmp69;
                            tmp68 = tmp69;
                          }
                        }
                      }
                      const obj13 = { style: tmp49, pointerEvents: "box-none", children: null };
                      const items3 = [tmp50, tmp53, tmp59, tmp62];
                      obj13.children = items3;
                      const tmp67 = closure_9(tmp10(4497).View, obj13);
                      cResult[49] = tmp49;
                      cResult[50] = tmp50;
                      cResult[51] = tmp53;
                      cResult[52] = tmp59;
                      cResult[53] = tmp67;
                      tmp65 = tmp67;
                    }
                    const obj14 = { style: tmp26.nameStyle, pointerEvents: "none", children: tmp56 };
                    const tmp61 = closure_8(tmp10(4497).View, obj14);
                    cResult[45] = tmp26.nameStyle;
                    cResult[46] = tmp56;
                    cResult[47] = tmp61;
                    tmp59 = tmp61;
                  }
                  const obj15 = { style: null, pointerEvents: "none" };
                  const items4 = [tmp8.collapsedHeaderBannerOverlay, tmp29.style];
                  obj15.style = items4;
                  const tmp52 = closure_8(tmp10(4497).View, obj15);
                  cResult[38] = tmp29.style;
                  cResult[39] = tmp8.collapsedHeaderBannerOverlay;
                  cResult[40] = tmp52;
                  tmp50 = tmp52;
                }
              }
              const items5 = [tmp8.collapsedHeaderBanner, tmp48, tmp26.headerStyle];
              cResult[34] = tmp26.headerStyle;
              cResult[35] = tmp8.collapsedHeaderBanner;
              cResult[36] = tmp48;
              cResult[37] = items5;
              tmp49 = items5;
            }
            const obj16 = { style: tmp39, pointerEvents: "none", children: tmp40 };
            const tmp47 = closure_8(id, obj16);
            cResult[29] = tmp39;
            cResult[30] = tmp40;
            cResult[31] = tmp47;
            tmp44 = tmp47;
          }
          const obj17 = { style: tmp8.appIconMask, children: tmp15 };
          const tmp43 = closure_8(id, obj17);
          cResult[26] = tmp15;
          cResult[27] = tmp8.appIconMask;
          cResult[28] = tmp43;
          tmp40 = tmp43;
        }
        const items6 = [tmp8.expandedHeaderBanner, tmp38];
        cResult[23] = tmp8.expandedHeaderBanner;
        cResult[24] = tmp38;
        cResult[25] = items6;
        tmp39 = items6;
      }
      const items7 = [tmp8.headerContainer, tmp23.style];
      cResult[18] = tmp23.style;
      cResult[19] = tmp8.headerContainer;
      cResult[20] = items7;
      tmp37 = items7;
    }
  }
  if (null != loadingIcon) {
    const obj18 = { iconSource: loadingIcon, iconBorderRadius: xl, iconSize: 72 };
    let tmp18 = closure_8(tmp10(12186), obj18);
  } else {
    const obj19 = { style: tmp8.loadingIcon };
    tmp18 = closure_8(id, obj19);
  }
  cResult[4] = loadingIcon;
  loadingIcon = tmp8.loadingIcon;
  cResult[5] = loadingIcon;
  cResult[6] = tmp18;
}) : ((application) => {
  application = application.application;
  const scrollOffsetY = application.scrollOffsetY;
  dependencyMap = undefined;
  let id;
  ({ onPressBack, onAddAppMenuClick } = application);
  const items = [AppLauncherStore];
  importDefault = application(504).useStateFromStores(items, () => AppLauncherStore.entrypoint());
  const tmp3 = closure_12();
  let appLauncherIconSource = null;
  if (null != application) {
    appLauncherIconSource = tmp(12181).getAppLauncherIconSource(application);
    const tmpResult = tmp(12181);
  }
  let obj = application(504);
  let str = application(4462).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let tmp7 = appLauncherIconSource;
  const tmpResult5 = application(4462);
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
  const tmp6Result = useAvatarColorDefault(tmp7, str);
  if (null != appLauncherIconSource) {
    let obj2 = { iconSource: appLauncherIconSource, iconBorderRadius: xl, iconSize: 72 };
    let tmp12 = closure_8(tmp5(12186), obj2);
    let tmp13 = closure_8;
  } else {
    let obj3 = { style: tmp3.loadingIcon };
    tmp12 = closure_8(id, obj3);
    tmp13 = closure_8;
  }
  const tmp17 = closure_20({ scrollOffsetY });
  let str2 = "";
  const tmp16 = closure_15({ scrollOffsetY });
  if (null != application) {
    str2 = tmp(9401).getSectionName(application);
    const tmpResult6 = tmp(9401);
  }
  let hasApplicationFlagResult = null != application;
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = "flags" in application;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = tmp(9133).hasApplicationFlag(application, constants2.EMBEDDED);
    const tmpResult7 = tmp(9133);
  }
  dependencyMap = hasApplicationFlagResult;
  id = UserStore.getCurrentUser();
  let obj4 = { style: null, pointerEvents: "box-none", children: null };
  const items1 = [tmp3.headerContainer, tmp16.style];
  obj4.style = items1;
  let obj5 = { style: null, pointerEvents: "none", children: tmp13(id, { style: tmp3.appIconMask, children: tmp12 }) };
  const items2 = [tmp3.expandedHeaderBanner, { backgroundColor: tmp6Result }];
  obj5.style = items2;
  const items3 = [tmp13(id, obj5), , ];
  const obj7 = { style: null, pointerEvents: "box-none", children: null };
  const items4 = [tmp3.collapsedHeaderBanner, { backgroundColor: tmp6Result }, tmp17.headerStyle];
  obj7.style = items4;
  const obj8 = { style: null, pointerEvents: "none" };
  const items5 = [tmp3.collapsedHeaderBannerOverlay, closure_23({ scrollOffsetY }).style];
  obj8.style = items5;
  const items6 = [tmp13(ReanimatedRexportDefault.View, obj8), tmp13(AppLauncherBackButtonDefault, { onPress: onPressBack }), , ];
  let obj6 = { style: tmp3.appIconMask, children: tmp12 };
  const tmp18 = closure_23({ scrollOffsetY });
  const tmp22 = id;
  items6[2] = tmp13(ReanimatedRexportDefault.View, { style: tmp17.nameStyle, pointerEvents: "none", children: tmp13(application(4754).Heading, { variant: "heading-lg/bold", color: "text-overlay-light", children: str2 }) });
  items6[3] = tmp13(application(1181).Spacer, { size: 32, pointerEvents: "none" });
  obj7.children = items6;
  items3[1] = closure_9(ReanimatedRexportDefault.View, obj7);
  let tmp21Result = null;
  if (null != application) {
    tmp21Result = null;
    if (tmpResult8.isRealApplication(application)) {
      const obj10 = { style: tmp3.actionsWrapper, children: null };
      const obj11 = {
        size: "sm",
        variant: "secondary-overlay",
        icon: tmp5(4701),
        onPress() {
              AnalyticsUtilsDefault.track(constants.APP_LAUNCHER_APPLICATION_LINK_COPIED, { application_id: application.id, source });
              const obj2 = { application_id: application.id, source };
              const obj4 = getApplicationInstallURL;
              if (c2) {
                const obj5 = { applicationId: tmp2.id, referrerId: null };
                id = undefined;
                if (id != null) {
                  id = id.id;
                }
                obj5.referrerId = id;
                let activityLaunchURL = obj4.getActivityLaunchURL(obj5);
              } else {
                const obj6 = { id: tmp2.id };
                const merged = Object.assign(tmp4(9401).getInstallAppProps(tmp2));
                activityLaunchURL = obj4.getApplicationInstallURL(obj6);
                const tmp4Result = tmp4(9401);
              }
              ClipboardUtils.copy(activityLaunchURL);
              ToastUtils.presentLinkCopied();
            },
        accessibilityLabel: null,
        maxFontSizeMultiplier: 1.5
      };
      const intl = tmp(1119).intl;
      obj11.accessibilityLabel = intl.string(tmp(1119).t.XWDihq);
      const items7 = [tmp13(tmp(8178).IconButton, obj11), ];
      const obj12 = { application, onAddAppMenuClick };
      items7[1] = tmp13(tmp5(12273), obj12);
      obj10.children = items7;
      tmp21Result = tmp21(tmp22, obj10);
    }
    tmpResult8 = tmp(9401);
  }
  items3[2] = tmp21Result;
  obj4.children = items3;
  return closure_9(ReanimatedRexportDefault.View, obj4);
});
export const SHEET_HANDLE_CONTAINER_HEIGHT = 16;
export const EXPANDED_HEADER_HEIGHT = 161;
