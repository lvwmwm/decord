// Module ID: 19137
// Function ID: 19138
// Name: YouBar
// Dependencies: [5, 19, 17, 5330, 5349, 1388, 17701, 1072, 5152, 21, 5306, 575, 17693, 14573, 12008, 12017, 12423, 17700, 17704, 1655, 5939, 10215, 10220, 10514, 19138, 17241, 504, 8576, 19144, 5493, 5554, 1255, 12, 19145, 2121, 5492, 12582, 7231, 5139, 1113, 8604, 12011, 5598, 1708, 1187, 19159, 19160, 19161, 19166, 19168, 19170, 14852, 5377, 19171, 19172, 2]

// Module 19137 (YouBar)
import _mod12 from "module_12" /* 12 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import dismissible_content from "dismissible_content" /* 5139 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5152 */;
import native from "native" /* 5377 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5492 */;
import HapticUtils from "HapticUtils" /* 5554 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5598 */;
import transitionToGuild from "transitionToGuild" /* 7231 */;
import openUserSettings from "openUserSettings" /* 8604 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 12582 */;
import YouBarFloatingShadeDefault from "YouBarFloatingShade" /* 19171 */;
import ConnectionBannerDefault from "ConnectionBanner" /* 19172 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5330 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5349 */;
import UserStore from "UserStore" /* 1388 */;
import YouBarConstants from "YouBarConstants" /* 17701 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let abs, failResult, gesture, importDefault, tmp4;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_18;
let closure_19;
let closure_20;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let rect;
let rect1;
let tmp;
let unpackModuleId;
const _mod1708 = tmp(1708);
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
({ YOU_BAR_HEIGHT: c10, YOU_BAR_PADDING: unpackModuleId, YOU_BAR_SPRING_CONFIG: closure_12, YOU_BAR_AVATAR_LARGE_SIZE: map1, YOU_BAR_AVATAR_SIZE: closure_14, YOU_BAR_BUTTON_HIT_SLOP: closure_15 } = YouBarConstants);
const ME = Constants.ME;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = Fragment);
let createStyles = createStyles_mod;
let obj = { dockRimRow: rect, dockRim: { bottom: 0 }, youRow: rect1, youRowRight: obj2, youPressable: obj3 };
rect = { position: "absolute", left: 0, right: 0, bottom: 0, elevation: nativeDefault.shadows.SHADOW_HIGH.elevation };
createStyles = createStyles.createStyles;
rect1 = { position: "absolute", left: 0, right: 0, bottom: 0, flexDirection: "row", alignItems: "center", backgroundColor: "transparent" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj3 = { flex: 1, marginRight: nativeDefault.space.PX_12, borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS };
let closure_21 = createStyles(obj);
let closure_22 = { code: "(function YouBarTsx1(){let[withSpring,barMarginBottom,connectionBannerHeight,marginSpringConfig,isPressedValue,isCondensed,YOU_BAR_SPRING_CONFIG]=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,marginSpringConfig),transform:[{scale:withSpring(isPressedValue.get()&&!isCondensed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};})" };
let closure_23 = { code: "(function YouBarTsx2(){let[startingTranslateX,translateX]=this.__closure;startingTranslateX.set(translateX.get());})" };
let closure_24 = { code: "(function YouBarTsx3(_,manager){let[startingTranslateX,translateX]=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}})" };
let closure_25 = { code: "(function YouBarTsx4(_,success){let[scheduleOnRN,handleNavBetweenGuildsAndDMs]=this.__closure;if(!success)return;scheduleOnRN(handleNavBetweenGuildsAndDMs);})" };
let closure_26 = react.memo(function YouBar() {
  let DOCK_SPACE_SPRING_CONFIG;
  let intl;
  let items11;
  let items12;
  let items13;
  let items15;
  let markAsDismissed;
  let obj14;
  let obj8;
  let sharedValue;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp49;
  let tmp53Result3;
  let youBarHorizontalMargin;
  let tmp = closure_21();
  const tmp2 = youBarHorizontalMargin;
  let tmp3 = sharedValue;
  let obj = youBarHorizontalMargin(sharedValue[12]);
  const mobileQuestDock = obj.useMobileQuestDock();
  let obj2 = youBarHorizontalMargin(sharedValue[12]);
  const isMobileQuestDockRenderedBase = obj2.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj3 = youBarHorizontalMargin(sharedValue[13]);
  const isMobileRTCV2Enabled = obj3.useIsMobileRTCV2Enabled("YouBar");
  let obj4 = youBarHorizontalMargin(sharedValue[14]);
  let tmp53Result4 = obj4.useVoicePanelDockHeight() > 0;
  let str = "quest-bar";
  if (!isMobileQuestDockRenderedBase) {
    let str2 = null;
    if (tmp53Result4) {
      str2 = "voice-panel-dock";
    }
    str = str2;
  }
  if (isMobileRTCV2Enabled) {
    DOCK_SPACE_SPRING_CONFIG = tmp2(tmp3[15]).DOCK_SPACE_SPRING_CONFIG;
  } else {
    DOCK_SPACE_SPRING_CONFIG = closure_12;
  }
  const tmp8 = null != str;
  const tmp2Result = tmp2(tmp3[16]);
  const drawerWidth = tmp2Result.useDrawerWidth({ whileSliding: "wider" });
  const tmp2Result14 = tmp2(tmp3[17]);
  youBarHorizontalMargin = tmp2Result14.useYouBarHorizontalMargin();
  const diff = drawerWidth - 2 * youBarHorizontalMargin;
  importDefault = diff;
  const tmp2Result15 = tmp2(tmp3[17]);
  const youBarBottomMargin = tmp2Result15.useYouBarBottomMargin();
  let items = [diff, youBarHorizontalMargin];
  const tmp2Result16 = tmp2(tmp3[18]);
  const connectionBannerHeight = tmp2Result16.useConnectionBannerHeight();
  const memo = markAsDismissed.useMemo(() => {
    size = { marginHorizontal: youBarHorizontalMargin, height, padding: unpackModuleId, width: importDefault };
    return size;
  }, items);
  const tmp2Result17 = tmp2(tmp3[19]);
  sharedValue = tmp2Result17.useSharedValue(false);
  let items1 = [closure_22, , , , , , , ];
  const useAnimatedStyle = tmp2(tmp3[19]).useAnimatedStyle;
  tmp2(tmp3[19]);
  items1[1] = tmp2(tmp3[20]).withSpring;
  items1[2] = youBarBottomMargin;
  items1[3] = connectionBannerHeight;
  items1[4] = DOCK_SPACE_SPRING_CONFIG;
  items1[5] = sharedValue;
  items1[6] = tmp8;
  items1[7] = closure_12;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items1;
  class YouBarTsx1 {
    constructor() {
      let items;
      let num = 1;
      const obj = { marginBottom: _undefined(c1 + c2, c3), transform: items };
      if (_undefined2.get()) {
        num = 1;
        if (!c5) {
          num = 0.98;
        }
      }
      items = [{ scale: tmp(num, c6) }];
      ({ scale: _undefined(num, c6) });
      return obj;
    }
  }
  let items2 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
  YouBarTsx1.__closure = items2;
  YouBarTsx1.__workletHash = 9061810726804;
  YouBarTsx1.__initData = tmp17;
  const animatedStyle = useAnimatedStyle(YouBarTsx1);
  const tmp2Result19 = tmp2(tmp3[21]);
  const waterwheelsDiscoverEnabled = tmp2Result19.useWaterwheelsDiscoverEnabled("YouBar");
  const tmp2Result20 = tmp2(tmp3[22]);
  const tmp27 = tmp2Result20.useICYMIEnabled("TabsNavigator") && !waterwheelsDiscoverEnabled;
  const tmp29 = require("useConjureEntryPointPlacement")("YouBar");
  const tmp2Result21 = tmp2(tmp3[24]);
  const youBarCoachmark = tmp2Result21.useYouBarCoachmark({ isCondensed: tmp8 });
  const visibleContent = youBarCoachmark.visibleContent;
  markAsDismissed = youBarCoachmark.markAsDismissed;
  const animatedRef = youBarCoachmark.animatedRef;
  const tmp2Result22 = tmp2(tmp3[25]);
  const showAgeNoticePromoSheet = tmp2Result22.useShowAgeNoticePromoSheet({ visibleContent, markAsDismissed });
  const ref = obj9.useRef(markAsDismissed);
  const ref2 = obj9.useRef(visibleContent);
  let items3 = [markAsDismissed, visibleContent];
  const effect = obj9.useEffect(() => {
    ref2.current = visibleContent;
    ref.current = markAsDismissed;
  }, items3);
  let items4 = [gesture];
  const tmp2Result23 = tmp2(tmp3[26]);
  const stateFromStores = tmp2Result23.useStateFromStores(items4, () => gesture.getCurrentUser());
  const tmp2Result24 = tmp2(tmp3[27]);
  const nameplate = tmp2Result24.useNameplate({ user: stateFromStores });
  const tmp2Result25 = tmp2(tmp3[28]);
  const youBarAccessibilityLabel = tmp2Result25.useYouBarAccessibilityLabel(stateFromStores);
  let closure_7 = obj9.useRef(null);
  const effect1 = obj9.useEffect(() => {
    const obj = youBarHorizontalMargin(sharedValue[29]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      function checkYouScreenPresence() {
        if (null != rootNavigationRef) {
          const state = obj.getState();
          let someResult;
          if (state != null) {
            const routes = state.routes;
            if (routes != null) {
              someResult = routes.some((name) => "you" === name.name);
            }
          }
          if (!someResult) {
            if (null != ref.current) {
              if ("press" === ref.current) {
                const obj3 = HapticUtils;
                const result = obj3.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.SOFT);
                rootNavigationRef.navigate("you");
              } else {
                const obj2 = GlobalUtils;
                obj2.assertNever(ref.current);
              }
              ref.current = null;
            }
          }
        }
      }
      let result = checkYouScreenPresence();
      let closure_1 = rootNavigationRef.addListener("state", checkYouScreenPresence);
      return () => {
        closure_1();
      };
    }
  }, []);
  let items5 = [sharedValue];
  const memo1 = obj9.useMemo(() => {
    let obj = _mod12;
    return obj.debounce(() => {
      const obj = youBarHorizontalMargin(sharedValue[29]);
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        const state = rootNavigationRef.getState();
        let someResult;
        if (state != null) {
          const routes = state.routes;
          if (routes != null) {
            someResult = routes.some((name) => "you" === name.name);
          }
        }
        if (someResult) {
          closure_1_7.current = "press";
        }
      }
      if (null != rootNavigationRef) {
        const tmpResult = youBarHorizontalMargin(sharedValue[30]);
        const result = tmpResult.triggerHapticFeedback(tmp(tmp2[30]).HapticFeedbackTypes.SOFT);
        rootNavigationRef.navigate("you");
        const result1 = closure_1_2.set(false);
      }
    }, 500, { leading: true, trailing: false });
  }, items5);
  const items6 = [sharedValue];
  const items7 = [sharedValue];
  const callback = obj9.useCallback(visibleContent(function*(arg0, value) {
    let closure_0;
    let paths;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === sharedValue) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp4;
            tmp = undefined;
            sharedValue = 1;
            c3 = 1;
            const obj4 = { value: tmp(sharedValue[34])(sharedValue[33], sharedValue.paths), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          tmp = value;
          const obj5 = tmp(sharedValue[30]);
          const result = obj5.triggerHapticFeedback(tmp(sharedValue[30]).HapticFeedbackTypes.SOFT);
          const result1 = tmp.showYouAccountActionSheet();
          const result2 = closure_129_2.set(false);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        c3 = 3;
        throw tmp9;
      }
    }
  }), items6);
  const items8 = [sharedValue];
  const callback1 = obj9.useCallback(() => {
    const result = sharedValue.set(true);
  }, items7);
  const callback2 = obj9.useCallback(() => {
    const result = sharedValue.set(false);
  }, items8);
  const callback3 = obj9.useCallback(() => {
    const obj = NavigationRouteUtils;
    const coerceGuildsRouteResult = obj.coerceGuildsRoute(getNavigatorCurrentRouteDefault());
    if (null != coerceGuildsRouteResult) {
      const tmpResult = HapticUtils;
      const result = tmpResult.triggerHapticFeedback(tmp(5554).HapticFeedbackTypes.SOFT);
      const params = coerceGuildsRouteResult.params;
      let guildId;
      if (params != null) {
        guildId = params.guildId;
      }
      if (guildId === ME) {
        const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
        if (null != lastSelectedGuildId) {
          const tmpResult3 = transitionToGuild;
          tmpResult3.transitionToGuild(lastSelectedGuildId);
        }
      } else {
        if (ref2.current === dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK) {
          ref.current(ContentDismissActionType.TAKE_ACTION);
        }
        const tmpResult4 = transitionToGuild;
        tmpResult4.transitionToGuild(tmp5);
      }
    }
  }, []);
  const items9 = [callback3];
  const memo2 = obj9.useMemo(() => {
    let intl;
    let intl2;
    const obj = { name: "open-settings", label: intl.string(youBarHorizontalMargin(sharedValue[39]).t["3/IlR0"]) };
    intl = youBarHorizontalMargin(sharedValue[39]).intl;
    const items = [obj, ];
    const obj2 = { name: "open-dms", label: intl2.string(youBarHorizontalMargin(sharedValue[39]).t.GqXUt1) };
    intl2 = youBarHorizontalMargin(sharedValue[39]).intl;
    items[1] = obj2;
    return items;
  }, []);
  const callback4 = obj9.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("open-settings" === actionName) {
      const obj = openUserSettings;
      obj.openUserSettings();
    } else if ("open-dms" === actionName) {
      callback3();
    }
  }, items9);
  const context = obj9.useContext(require("MainTabsNavigatorPanelContext"));
  gesture = context.gesture;
  const translateX = context.translateX;
  const tmp2Result26 = tmp2(tmp3[19]);
  const sharedValue1 = tmp2Result26.useSharedValue(0);
  const items10 = [callback3, gesture, sharedValue1, translateX];
  const memo3 = obj9.useMemo(() => {
    let tmp10;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    let tmp = require;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    let result = PanResult.simultaneousWithExternalGesture(gesture);
    const activeOffsetXResult = result.activeOffsetX(50);
    const items = [closure_23, sharedValue1, translateX];
    let c0;
    let c1;
    [tmp5, tmp6, tmp7] = items;
    const failOffsetXResult = activeOffsetXResult.failOffsetX(-10);
    const failOffsetYResult = failOffsetXResult.failOffsetY([-40, 40]);
    class YouBarTsx2 {
      constructor() {
        result = closure_0.set(closure_1.get());
        return;
      }
    }
    const items1 = [tmp6, tmp7];
    YouBarTsx2.__closure = items1;
    YouBarTsx2.__workletHash = 16283529753051;
    YouBarTsx2.__initData = tmp5;
    const items2 = [closure_24, sharedValue1, translateX];
    c0 = undefined;
    c1 = undefined;
    [tmp8, tmp9, tmp10] = items2;
    const onBeginResult = failOffsetYResult.onBegin(YouBarTsx2);
    class YouBarTsx3 {
      constructor(arg0, arg1) {
        abs = Math.abs;
        value = closure_0.get();
        if (abs(value - closure_1.get()) >= 10) {
          tmp2 = arg1;
          failResult = arg1.fail();
        }
        return;
      }
    }
    const items3 = [tmp9, tmp10];
    YouBarTsx3.__closure = items3;
    YouBarTsx3.__workletHash = 12226847969400;
    YouBarTsx3.__initData = tmp8;
    const items4 = [closure_25, , ];
    const onEnd = onBeginResult.onTouchesMove(YouBarTsx3).onEnd;
    onBeginResult.onTouchesMove(YouBarTsx3);
    items4[1] = _mod1708.scheduleOnRN;
    items4[2] = callback3;
    c0 = undefined;
    c1 = undefined;
    [tmp12, tmp13, tmp14] = items4;
    class YouBarTsx4 {
      constructor(arg0, arg1) {
        tmp = arg1;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_1;
          tmp4 = closure_0(closure_1);
        }
        return;
      }
    }
    const items5 = [tmp13, tmp14];
    YouBarTsx4.__closure = items5;
    YouBarTsx4.__workletHash = 14643495293573;
    YouBarTsx4.__initData = tmp12;
    return onEnd(YouBarTsx4);
  }, items10);
  const AVATAR_SIZE_MAP = tmp2(tmp3[44]).AVATAR_SIZE_MAP;
  if (tmp8) {
    tmp49 = AVATAR_SIZE_MAP[closure_14];
  } else {
    tmp49 = AVATAR_SIZE_MAP[closure_13];
  }
  let obj5 = { ref: animatedRef, style: items11, shouldRasterizeIOS: true, children: items12 };
  items11 = [tmp.youRow, memo, animatedStyle];
  const View = tmp28(tmp3[19]).View;
  items12 = [closure_18(require("YouBarBackground"), { hasNameplate: null != nameplate, barWidth: diff, condensedReason: str, avatarSize: tmp49 }), , , ];
  let tmp53Result = tmp35;
  const tmp52 = closure_20;
  if (tmp53Result) {
    const obj6 = { nameplate, barWidth: diff, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp49 };
    tmp53Result = tmp53(tmp28(tmp3[46]), obj6);
  }
  items12[1] = tmp53Result;
  const obj7 = { gesture: memo3, children: closure_18(ref2, obj8) };
  obj8 = { style: tmp.youPressable, android_ripple: { color: "transparent" }, accessibilityRole: "button", accessibilityLabel: youBarAccessibilityLabel, accessibilityHint: intl.string(tmp2(tmp3[39]).t.cSgdvE), accessibilityActions: memo2, onAccessibilityAction: callback4, onPressIn: callback1, onPressOut: callback2, onPress: memo1, onLongPress: callback, hitSlop, testID: "you_bar_profile_button", children: closure_18(require("YouBarUser"), { isCondensed: tmp8, onAvatarPress: memo1 }) };
  const GestureDetector = tmp2(tmp3[42]).GestureDetector;
  intl = tmp2(tmp3[39]).intl;
  items12[2] = closure_18(GestureDetector, obj7);
  let placement;
  const obj10 = { style: tmp.youRowRight, children: items13 };
  const tmp55 = ref;
  if (tmp29 != null) {
    placement = tmp29.placement;
  }
  if ("you_bar" === placement) {
    const obj11 = { hasNameplate: null != nameplate, canUnpin: tmp29.canPin };
    tmp53Result3 = tmp53(tmp28(tmp3[48]), obj11);
  } else {
    tmp53Result3 = null;
    if (tmp27) {
      const obj12 = { hasNameplate: null != nameplate };
      tmp53Result3 = tmp53(tmp28(tmp3[49]), obj12);
    }
  }
  items13 = [tmp53Result3, closure_18(require("YouBarNotificationsButton"), { hasNameplate: null != nameplate })];
  items12[3] = closure_19(tmp55, obj10);
  const children = [closure_19(View, obj5), ];
  if (tmp53Result4) {
    const obj13 = { style: items15, pointerEvents: "none", children: closure_18(require("VoicePanelDockRim"), obj14) };
    items15 = [tmp.dockRimRow, memo, animatedStyle];
    const View2 = tmp28(tmp3[19]).View;
    obj14 = { style: tmp.dockRim };
    tmp53Result4 = tmp53(View2, obj13);
  }
  children[1] = tmp53Result4;
  return closure_19(tmp52, { children });
});
const memoResult = react.memo(function YouBarThemed() {
  let gradientPreset;
  let items1;
  const items = [ClientThemesBackgroundStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj2 = { gradient: stateFromStores, children: items1 };
  const ThemeContextProvider = native.ThemeContextProvider;
  items1 = [authStore4(YouBarFloatingShadeDefault, {}), authStore4(closure_26, {}), authStore4(ConnectionBannerDefault, {})];
  return closure_19(ThemeContextProvider, obj2);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default memoResult;
