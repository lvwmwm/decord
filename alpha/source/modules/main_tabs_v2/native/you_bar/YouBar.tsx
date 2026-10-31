// Module ID: 18422
// Function ID: 18423
// Name: YouBar
// Dependencies: [5, 19, 17, 5038, 5045, 1383, 17062, 1072, 4860, 21, 5014, 575, 17055, 14206, 11240, 11249, 11556, 17061, 17065, 5095, 5637, 8925, 9674, 18423, 16603, 504, 8789, 18429, 5199, 5260, 1379, 12, 18430, 1994, 5198, 11504, 7522, 4847, 1113, 7563, 11243, 5303, 1187, 18444, 18445, 18446, 18451, 18453, 18455, 5080, 18457, 18458, 2]

// Module 18422 (YouBar)
import _mod12 from "module_12" /* 12 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1379 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import native from "native" /* 5080 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import spring from "spring" /* 5637 */;
import transitionToGuild from "transitionToGuild" /* 7522 */;
import openUserSettings from "openUserSettings" /* 7563 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 11504 */;
import YouBarFloatingShadeDefault from "YouBarFloatingShade" /* 18457 */;
import ConnectionBannerDefault from "ConnectionBanner" /* 18458 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5038 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import UserStore from "UserStore" /* 1383 */;
import YouBarConstants from "YouBarConstants" /* 17062 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_18;
let closure_19;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let rect;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
({ YOU_BAR_HEIGHT: c10, YOU_BAR_PADDING: unpackModuleId, YOU_BAR_SPRING_CONFIG: closure_12, YOU_BAR_AVATAR_LARGE_SIZE: map1, YOU_BAR_AVATAR_SIZE: closure_14, YOU_BAR_BUTTON_HIT_SLOP: closure_15 } = YouBarConstants);
const ME = Constants.ME;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let createStyles = createStyles_mod;
let obj = { youRow: rect, youRowRight: { flexDirection: "row", gap: 8 }, youPressable: obj2 };
rect = { position: "absolute", left: 0, right: 0, bottom: 0, flexDirection: "row", alignItems: "center", backgroundColor: "transparent" };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2 = { flex: 1, marginRight: nativeDefault.space.PX_12, borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS };
let closure_20 = createStyles(obj);
const __initData = { code: "function YouBarTsx1(){const{withSpring,barMarginBottom,connectionBannerHeight,marginSpringConfig,isPressedValue,isCondensed,YOU_BAR_SPRING_CONFIG}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,marginSpringConfig),transform:[{scale:withSpring(isPressedValue.get()&&!isCondensed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_22 = { code: "function YouBarTsx2(_,success){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;if(!success)return;runOnJS(handleNavBetweenGuildsAndDMs)();}" };
let closure_23 = { code: "function YouBarTsx3(_,manager){const{startingTranslateX,translateX}=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}}" };
let closure_24 = { code: "function YouBarTsx4(){const{startingTranslateX,translateX}=this.__closure;startingTranslateX.set(translateX.get());}" };
let closure_25 = react.memo(function YouBar() {
  let DOCK_SPACE_SPRING_CONFIG;
  let callback3;
  let closure_0;
  let intl;
  let items10;
  let items11;
  let items9;
  let obj8;
  let tmp39;
  let tmp42Result2;
  let youBarHorizontalMargin;
  let tmp = closure_20();
  const tmp2 = _require;
  const tmp3 = youBarHorizontalMargin;
  let obj = require("QuestHooks");
  const mobileQuestDock = obj.useMobileQuestDock();
  let obj2 = require("QuestHooks");
  const isMobileQuestDockRenderedBase = obj2.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj3 = require("MobileRTCV2Experiment");
  const isMobileRTCV2Enabled = obj3.useIsMobileRTCV2Enabled("YouBar");
  let str = "quest-bar";
  if (!isMobileQuestDockRenderedBase) {
    let str2 = null;
    if (tmp8) {
      str2 = "voice-panel-dock";
    }
    str = str2;
  }
  const tmp9 = null != str;
  _require = tmp9;
  if (isMobileRTCV2Enabled) {
    DOCK_SPACE_SPRING_CONFIG = tmp2(tmp3[15]).DOCK_SPACE_SPRING_CONFIG;
  } else {
    DOCK_SPACE_SPRING_CONFIG = callback3;
  }
  const tmp2Result = tmp2(tmp3[16]);
  const drawerWidth = tmp2Result.useDrawerWidth({ whileSliding: "wider" });
  const tmp2Result13 = tmp2(tmp3[17]);
  youBarHorizontalMargin = tmp2Result13.useYouBarHorizontalMargin();
  const diff = drawerWidth - 2 * youBarHorizontalMargin;
  _asyncToGenerator = diff;
  const tmp2Result14 = tmp2(tmp3[17]);
  const youBarBottomMargin = tmp2Result14.useYouBarBottomMargin();
  const tmp2Result15 = tmp2(tmp3[18]);
  const connectionBannerHeight = tmp2Result15.useConnectionBannerHeight();
  let items = [diff, youBarHorizontalMargin];
  const memo = youBarBottomMargin.useMemo(() => {
    size = { marginHorizontal: youBarHorizontalMargin, height, padding: unpackModuleId, width: _asyncToGenerator };
    return size;
  }, items);
  const tmp2Result16 = tmp2(tmp3[19]);
  const sharedValue = tmp2Result16.useSharedValue(false);
  let fn = function s() {
    let items;
    let obj2;
    const obj = { marginBottom: obj2.withSpring(youBarBottomMargin + connectionBannerHeight, DOCK_SPACE_SPRING_CONFIG), transform: items };
    obj2 = spring;
    const withSpring = spring.withSpring;
    let num = 1;
    spring;
    if (sharedValue.get()) {
      num = 1;
      if (!closure_0) {
        num = 0.98;
      }
    }
    items = [{ scale: withSpring(num, authStore2) }];
    ({ scale: withSpring(num, authStore2) });
    return obj;
  };
  const tmp2Result17 = tmp2(tmp3[19]);
  let obj4 = { withSpring: tmp2(tmp3[20]).withSpring, barMarginBottom: youBarBottomMargin, connectionBannerHeight, marginSpringConfig: DOCK_SPACE_SPRING_CONFIG, isPressedValue: sharedValue, isCondensed: tmp9, YOU_BAR_SPRING_CONFIG: callback3 };
  fn.__closure = obj4;
  fn.__workletHash = 14940642801997;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result17.useAnimatedStyle(fn);
  const tmp2Result18 = tmp2(tmp3[21]);
  const iCYMIEnabled = tmp2Result18.useICYMIEnabled("TabsNavigator");
  const tmp19 = DOCK_SPACE_SPRING_CONFIG(tmp3[22])("YouBar");
  const tmp2Result19 = tmp2(tmp3[23]);
  const youBarCoachmark = tmp2Result19.useYouBarCoachmark({ isCondensed: tmp9 });
  const visibleContent = youBarCoachmark.visibleContent;
  const markAsDismissed = youBarCoachmark.markAsDismissed;
  const animatedRef = youBarCoachmark.animatedRef;
  const tmp2Result20 = tmp2(tmp3[24]);
  const showTinyBroncoPromoSheet = tmp2Result20.useShowTinyBroncoPromoSheet({ visibleContent, markAsDismissed });
  const ref = youBarBottomMargin.useRef(markAsDismissed);
  const ref2 = youBarBottomMargin.useRef(visibleContent);
  const items1 = [markAsDismissed, visibleContent];
  const effect = youBarBottomMargin.useEffect(() => {
    ref2.current = visibleContent;
    ref.current = markAsDismissed;
  }, items1);
  const items2 = [ref];
  const tmp2Result21 = tmp2(tmp3[25]);
  const stateFromStores = tmp2Result21.useStateFromStores(items2, () => ref.getCurrentUser());
  const tmp2Result22 = tmp2(tmp3[26]);
  const nameplate = tmp2Result22.useNameplate({ user: stateFromStores });
  const tmp2Result23 = tmp2(tmp3[27]);
  const youBarAccessibilityLabel = tmp2Result23.useYouBarAccessibilityLabel(stateFromStores);
  let closure_11 = youBarBottomMargin.useRef(null);
  const effect1 = youBarBottomMargin.useEffect(() => {
    const obj = closure_0(youBarHorizontalMargin[28]);
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
  const items3 = [sharedValue];
  const memo1 = youBarBottomMargin.useMemo(() => {
    let obj = _mod12;
    return obj.debounce(() => {
      const obj = closure_0(youBarHorizontalMargin[28]);
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
          closure_1_11.current = "press";
        }
      }
      if (null != rootNavigationRef) {
        const tmpResult = closure_0(youBarHorizontalMargin[29]);
        const result = tmpResult.triggerHapticFeedback(tmp(tmp2[29]).HapticFeedbackTypes.SOFT);
        rootNavigationRef.navigate("you");
        const result1 = sharedValue.set(false);
      }
    }, 500, { leading: true, trailing: false });
  }, items3);
  const items4 = [sharedValue];
  const items5 = [sharedValue];
  const callback = youBarBottomMargin.useCallback(_asyncToGenerator(async (arg0, value) => {
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === youBarHorizontalMargin) {
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
            youBarHorizontalMargin = 1;
            c3 = 1;
            const obj4 = { value: tmp(youBarHorizontalMargin[33])(youBarHorizontalMargin[32], youBarHorizontalMargin.paths), done: false };
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
          const obj5 = tmp(youBarHorizontalMargin[29]);
          const result = obj5.triggerHapticFeedback(tmp(youBarHorizontalMargin[29]).HapticFeedbackTypes.SOFT);
          const result1 = tmp.showYouAccountActionSheet();
          const result2 = closure_129_6.set(false);
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp9) {
        c3 = 3;
        throw tmp9;
      }
    }
  }), items4);
  const items6 = [sharedValue];
  const callback1 = youBarBottomMargin.useCallback(() => {
    const result = sharedValue.set(true);
  }, items5);
  const callback2 = youBarBottomMargin.useCallback(() => {
    const result = sharedValue.set(false);
  }, items6);
  callback3 = youBarBottomMargin.useCallback(() => {
    const obj = NavigationRouteUtils;
    const coerceGuildsRouteResult = obj.coerceGuildsRoute(getNavigatorCurrentRouteDefault());
    if (null != coerceGuildsRouteResult) {
      const tmpResult = HapticUtils;
      const result = tmpResult.triggerHapticFeedback(tmp(5260).HapticFeedbackTypes.SOFT);
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
  const items7 = [callback3];
  const memo2 = youBarBottomMargin.useMemo(() => {
    let intl;
    let intl2;
    const obj = { name: "open-settings", label: intl.string(closure_0(youBarHorizontalMargin[38]).t["3/IlR0"]) };
    intl = closure_0(youBarHorizontalMargin[38]).intl;
    const items = [obj, ];
    const obj2 = { name: "open-dms", label: intl2.string(closure_0(youBarHorizontalMargin[38]).t.GqXUt1) };
    intl2 = closure_0(youBarHorizontalMargin[38]).intl;
    items[1] = obj2;
    return items;
  }, []);
  const callback4 = youBarBottomMargin.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("open-settings" === actionName) {
      const obj = openUserSettings;
      obj.openUserSettings();
    } else if ("open-dms" === actionName) {
      callback3();
    }
  }, items7);
  const context = youBarBottomMargin.useContext(tmp7(tmp3[40]));
  const gesture = context.gesture;
  const translateX = context.translateX;
  const tmp2Result24 = tmp2(tmp3[19]);
  const sharedValue1 = tmp2Result24.useSharedValue(0);
  const items8 = [callback3, gesture, sharedValue1, translateX];
  const memo3 = youBarBottomMargin.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    let result = PanResult.simultaneousWithExternalGesture(gesture);
    const activeOffsetXResult = result.activeOffsetX(50);
    const fn = function s() {
      const result = sharedValue1.set(translateX.get());
    };
    let obj = { startingTranslateX: sharedValue1, translateX };
    fn.__closure = obj;
    fn.__workletHash = 13002049298724;
    fn.__initData = __initData3;
    const failOffsetXResult = activeOffsetXResult.failOffsetX(-10);
    const fn2 = function n(arg0, fail) {
      const value = sharedValue1.get();
      if (abs(value - translateX.get()) >= 10) {
        fail.fail();
      }
    };
    fn2.__closure = { startingTranslateX: sharedValue1, translateX };
    fn2.__workletHash = 11728992116193;
    fn2.__initData = __initData2;
    const failOffsetYResult = failOffsetXResult.failOffsetY([-40, 40]);
    const fn3 = function t(arg0, arg1) {
      const tmp = arg1;
      if (tmp) {
        const obj = closure_0(youBarHorizontalMargin[19]);
        obj.runOnJS(callback3)();
      }
    };
    const onBeginResult = failOffsetYResult.onBegin(fn);
    const onTouchesMoveResult = onBeginResult.onTouchesMove(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleNavBetweenGuildsAndDMs: callback3 };
    fn3.__workletHash = 2931771790779;
    fn3.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, handleNavBetweenGuildsAndDMs: callback3 });
    return onTouchesMoveResult.onEnd(fn3);
  }, items8);
  const AVATAR_SIZE_MAP = tmp2(tmp3[42]).AVATAR_SIZE_MAP;
  if (tmp9) {
    tmp39 = AVATAR_SIZE_MAP[translateX];
  } else {
    tmp39 = AVATAR_SIZE_MAP[gesture];
  }
  let obj5 = { ref: animatedRef, style: items9, shouldRasterizeIOS: true, children: items10 };
  items9 = [tmp.youRow, memo, animatedStyle];
  const View = tmp7(tmp3[19]).View;
  items10 = [closure_18(tmp7(tmp3[43]), { hasNameplate: null != nameplate, barWidth: diff, condensedReason: str, avatarSize: tmp39 }), , , ];
  let tmp42Result = tmp25;
  if (tmp42Result) {
    const obj6 = { nameplate, barWidth: diff, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp39 };
    tmp42Result = tmp42(tmp7(tmp3[44]), obj6);
  }
  items10[1] = tmp42Result;
  const obj7 = { gesture: memo3, children: closure_18(sharedValue, obj8) };
  obj8 = { style: tmp.youPressable, android_ripple: { color: "transparent" }, accessibilityRole: "button", accessibilityLabel: youBarAccessibilityLabel, accessibilityHint: intl.string(tmp2(tmp3[38]).t.cSgdvE), accessibilityActions: memo2, onAccessibilityAction: callback4, onPressIn: callback1, onPressOut: callback2, onPress: memo1, onLongPress: callback, hitSlop: sharedValue1, testID: "you_bar_profile_button", children: closure_18(DOCK_SPACE_SPRING_CONFIG(tmp3[45]), { isCondensed: tmp9, onAvatarPress: memo1 }) };
  const GestureDetector = tmp2(tmp3[41]).GestureDetector;
  intl = tmp2(tmp3[38]).intl;
  items10[2] = closure_18(GestureDetector, obj7);
  let placement;
  const obj9 = { style: tmp.youRowRight, children: items11 };
  const tmp44 = connectionBannerHeight;
  if (tmp19 != null) {
    placement = tmp19.placement;
  }
  if ("you_bar" === placement) {
    const obj10 = { hasNameplate: null != nameplate, canUnpin: tmp19.canPin };
    tmp42Result2 = tmp42(tmp7(tmp3[46]), obj10);
  } else {
    tmp42Result2 = null;
    if (iCYMIEnabled) {
      const obj11 = { hasNameplate: null != nameplate };
      tmp42Result2 = tmp42(tmp7(tmp3[47]), obj11);
    }
  }
  items11 = [tmp42Result2, closure_18(tmp7(tmp3[48]), { hasNameplate: null != nameplate })];
  items10[3] = closure_19(tmp44, obj9);
  return closure_19(View, obj5);
});
const memoResult = react.memo(function YouBarThemed() {
  let gradientPreset;
  let items1;
  const items = [ClientThemesBackgroundStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj2 = { gradient: stateFromStores, children: items1 };
  const ThemeContextProvider = native.ThemeContextProvider;
  items1 = [authStore5(YouBarFloatingShadeDefault, {}), authStore5(closure_25, {}), authStore5(ConnectionBannerDefault, {})];
  return closure_19(ThemeContextProvider, obj2);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default memoResult;
