// Module ID: 17808
// Function ID: 17809
// Name: YouBar
// Dependencies: [5, 32, 19, 17, 4995, 5002, 1392, 16444, 1087, 4820, 21, 4971, 587, 16437, 11225, 16443, 16447, 5052, 5247, 8842, 6808, 17809, 16006, 504, 8707, 17815, 5151, 5212, 1388, 12, 17816, 2002, 5150, 11173, 7449, 4807, 1128, 7490, 11775, 5297, 1202, 17830, 17831, 17832, 17837, 17846, 17848, 558, 576, 17850, 17851, 5037, 2]

// Module 17808 (YouBar)
import _mod12 from "module_12" /* 12 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import dismissible_content from "dismissible_content" /* 4807 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4820 */;
import native from "native" /* 5037 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5150 */;
import HapticUtils from "HapticUtils" /* 5212 */;
import spring from "spring" /* 5247 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5297 */;
import transitionToGuild from "transitionToGuild" /* 7449 */;
import openUserSettings from "openUserSettings" /* 7490 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 11173 */;
import YouBarFloatingShadeDefault from "YouBarFloatingShade" /* 17850 */;
import ConnectionBannerDefault from "ConnectionBanner" /* 17851 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4995 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5002 */;
import UserStore from "UserStore" /* 1392 */;
import YouBarConstants from "YouBarConstants" /* 16444 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3, dependencyMap, hitSlop, padding;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
let unpackModuleId;
({ View: metroRequire, Pressable: metroImportDefault } = react_native);
({ YOU_BAR_HEIGHT: unpackModuleId, YOU_BAR_PADDING: closure_12, YOU_BAR_SPRING_CONFIG: map1, YOU_BAR_AVATAR_LARGE_SIZE: closure_14, YOU_BAR_AVATAR_SIZE: closure_15, YOU_BAR_BUTTON_HIT_SLOP: closure_16 } = YouBarConstants);
const ME = Constants.ME;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_19, jsxs: closure_20 } = Fragment);
let createStyles = createStyles_mod;
let obj = { youRow: rect, youRowRight: { flexDirection: "row", gap: 8 }, youPressable: obj2 };
rect = { position: "absolute", left: 0, right: 0, bottom: 0, flexDirection: "row", alignItems: "center", backgroundColor: "transparent" };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2 = { flex: 1, marginRight: nativeDefault.space.PX_12, borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS };
let closure_21 = createStyles(obj);
const __initData = { code: "function YouBarTsx1(){const{withSpring,barMarginBottom,connectionBannerHeight,YOU_BAR_SPRING_CONFIG,isPressedValue,isQuestRendered}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,YOU_BAR_SPRING_CONFIG),transform:[{scale:withSpring(isPressedValue.get()&&!isQuestRendered?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_23 = { code: "function YouBarTsx2(_,success){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;if(!success)return;runOnJS(handleNavBetweenGuildsAndDMs)();}" };
let closure_24 = { code: "function YouBarTsx3(_,manager){const{startingTranslateX,translateX}=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}}" };
let closure_25 = { code: "function YouBarTsx4(){const{startingTranslateX,translateX}=this.__closure;startingTranslateX.set(translateX.get());}" };
let closure_26 = react.memo(function YouBar() {
  let callback3;
  let currentUser;
  let intl;
  let isMobileQuestDockRenderedBase;
  let items10;
  let items11;
  let items9;
  let obj21;
  let sharedValue;
  let startingTranslateX;
  let tmp38;
  let tmp41Result2;
  let tmp = closure_21();
  const tmp2 = isMobileQuestDockRenderedBase;
  let tmp3 = dependencyMap;
  let obj = isMobileQuestDockRenderedBase(16437);
  const mobileQuestDock = obj.useMobileQuestDock();
  let obj2 = isMobileQuestDockRenderedBase(16437);
  isMobileQuestDockRenderedBase = obj2.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj3 = isMobileQuestDockRenderedBase(11225);
  const drawerWidth = obj3.useDrawerWidth();
  let obj4 = isMobileQuestDockRenderedBase(16443);
  const youBarHorizontalMargin = obj4.useYouBarHorizontalMargin();
  let diff = drawerWidth - 2 * youBarHorizontalMargin;
  dependencyMap = diff;
  let obj5 = isMobileQuestDockRenderedBase(16443);
  const youBarBottomMargin = obj5.useYouBarBottomMargin();
  const obj6 = isMobileQuestDockRenderedBase(16447);
  const connectionBannerHeight = obj6.useConnectionBannerHeight();
  let items = [diff, youBarHorizontalMargin];
  const memo = sharedValue.useMemo(() => {
    size = { marginHorizontal: youBarHorizontalMargin, height: unpackModuleId, padding, width: dependencyMap };
    return size;
  }, items);
  const obj7 = isMobileQuestDockRenderedBase(5052);
  sharedValue = obj7.useSharedValue(false);
  let fn = function r() {
    let items;
    let obj2;
    const obj = { marginBottom: obj2.withSpring(youBarBottomMargin + connectionBannerHeight, map1), transform: items };
    obj2 = spring;
    const withSpring = spring.withSpring;
    let num = 1;
    spring;
    if (sharedValue.get()) {
      num = 1;
      if (!isMobileQuestDockRenderedBase) {
        num = 0.98;
      }
    }
    items = [{ scale: withSpring(num, tmp) }];
    ({ scale: withSpring(num, map1) });
    return obj;
  };
  const obj8 = isMobileQuestDockRenderedBase(5052);
  fn.__closure = { withSpring: isMobileQuestDockRenderedBase(5247).withSpring, barMarginBottom: youBarBottomMargin, connectionBannerHeight, YOU_BAR_SPRING_CONFIG: callback3, isPressedValue: sharedValue, isQuestRendered: isMobileQuestDockRenderedBase };
  fn.__workletHash = 7314807713815;
  fn.__initData = __initData;
  ({ withSpring: isMobileQuestDockRenderedBase(5247).withSpring, barMarginBottom: youBarBottomMargin, connectionBannerHeight, YOU_BAR_SPRING_CONFIG: callback3, isPressedValue: sharedValue, isQuestRendered: isMobileQuestDockRenderedBase });
  const animatedStyle = obj8.useAnimatedStyle(fn);
  const obj10 = isMobileQuestDockRenderedBase(8842);
  const iCYMIEnabled = obj10.useICYMIEnabled("TabsNavigator");
  const obj11 = isMobileQuestDockRenderedBase(6808);
  const hasConjureGuild = obj11.useHasConjureGuild("YouBar");
  const obj12 = isMobileQuestDockRenderedBase(17809);
  const youBarCoachmark = obj12.useYouBarCoachmark({ isQuestRendered: isMobileQuestDockRenderedBase });
  const visibleContent = youBarCoachmark.visibleContent;
  const markAsDismissed = youBarCoachmark.markAsDismissed;
  const animatedRef = youBarCoachmark.animatedRef;
  const obj13 = isMobileQuestDockRenderedBase(16006);
  const showTinyBroncoPromoSheet = obj13.useShowTinyBroncoPromoSheet({ visibleContent, markAsDismissed });
  const ref = sharedValue.useRef(markAsDismissed);
  const ref2 = sharedValue.useRef(visibleContent);
  const items1 = [markAsDismissed, visibleContent];
  const effect = sharedValue.useEffect(() => {
    ref2.current = visibleContent;
    ref.current = markAsDismissed;
  }, items1);
  const items2 = [currentUser];
  const obj14 = isMobileQuestDockRenderedBase(504);
  const stateFromStores = obj14.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const obj15 = isMobileQuestDockRenderedBase(8707);
  const nameplate = obj15.useNameplate({ user: stateFromStores });
  const obj16 = isMobileQuestDockRenderedBase(17815);
  const youBarAccessibilityLabel = obj16.useYouBarAccessibilityLabel(stateFromStores);
  currentUser = sharedValue.useRef(null);
  const tmp23 = connectionBannerHeight(sharedValue.useState(0), 2);
  let closure_11 = tmp23[1];
  const first = tmp23[0];
  padding = sharedValue.useRef(true);
  const effect1 = sharedValue.useEffect(() => {
    const obj = isMobileQuestDockRenderedBase(dependencyMap[26]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      function checkYouScreenPresence() {
        if (null != rootNavigationRef) {
          const state = obj.getState();
          let tmp3 = null != state;
          if (tmp3) {
            let name;
            if (state.routes[state.index] != null) {
              name = tmp.name;
            }
            tmp3 = "main" === name;
          }
          const current = ref2.current;
          let tmp5 = !current;
          const tmp4 = ref2;
          if (!current) {
            tmp5 = tmp3;
          }
          if (tmp5) {
            closure_11((arg0) => arg0 + 1);
          }
          tmp4.current = tmp3;
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
  const memo1 = sharedValue.useMemo(() => {
    let obj = _mod12;
    return obj.debounce(() => {
      const obj = isMobileQuestDockRenderedBase(dependencyMap[26]);
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
          currentUser.current = "press";
        }
      }
      if (null != rootNavigationRef) {
        const tmpResult = isMobileQuestDockRenderedBase(dependencyMap[27]);
        const result = tmpResult.triggerHapticFeedback(tmp(tmp2[27]).HapticFeedbackTypes.SOFT);
        rootNavigationRef.navigate("you");
        const result1 = sharedValue.set(false);
      }
    }, 500, { leading: true, trailing: false });
  }, items3);
  const items4 = [sharedValue];
  const items5 = [sharedValue];
  const callback = sharedValue.useCallback(youBarBottomMargin(function*(arg0, value) {
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
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === diff) {
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
            diff = 1;
            c3 = 1;
            const obj4 = { value: tmp(diff[31])(diff[30], diff.paths), done: false };
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
          const obj5 = tmp(diff[27]);
          const result = obj5.triggerHapticFeedback(tmp(diff[27]).HapticFeedbackTypes.SOFT);
          const result1 = tmp.showYouAccountActionSheet();
          const result2 = closure_129_5.set(false);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        c3 = 3;
        throw tmp9;
      }
    }
  }), items4);
  const items6 = [sharedValue];
  const callback1 = sharedValue.useCallback(() => {
    const result = sharedValue.set(true);
  }, items5);
  const callback2 = sharedValue.useCallback(() => {
    const result = sharedValue.set(false);
  }, items6);
  callback3 = sharedValue.useCallback(() => {
    const obj = NavigationRouteUtils;
    const coerceGuildsRouteResult = obj.coerceGuildsRoute(getNavigatorCurrentRouteDefault());
    if (null != coerceGuildsRouteResult) {
      const tmpResult = HapticUtils;
      const result = tmpResult.triggerHapticFeedback(tmp(5212).HapticFeedbackTypes.SOFT);
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
  const memo2 = sharedValue.useMemo(() => {
    let intl;
    let intl2;
    const obj = { name: "open-settings", label: intl.string(isMobileQuestDockRenderedBase(dependencyMap[36]).t["3/IlR0"]) };
    intl = isMobileQuestDockRenderedBase(dependencyMap[36]).intl;
    const items = [obj, ];
    const obj2 = { name: "open-dms", label: intl2.string(isMobileQuestDockRenderedBase(dependencyMap[36]).t.GqXUt1) };
    intl2 = isMobileQuestDockRenderedBase(dependencyMap[36]).intl;
    items[1] = obj2;
    return items;
  }, []);
  const callback4 = sharedValue.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("open-settings" === actionName) {
      const obj = openUserSettings;
      obj.openUserSettings();
    } else if ("open-dms" === actionName) {
      callback3();
    }
  }, items7);
  const context = sharedValue.useContext(youBarHorizontalMargin(11775));
  const gesture = context.gesture;
  const translateX = context.translateX;
  const obj17 = isMobileQuestDockRenderedBase(5052);
  hitSlop = obj17.useSharedValue(0);
  const items8 = [callback3, gesture, first];
  const memo3 = sharedValue.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    let result = PanResult.simultaneousWithExternalGesture(gesture);
    const activeOffsetXResult = result.activeOffsetX(50);
    const fn = function n() {
      const result = startingTranslateX.set(translateX.get());
    };
    let obj = { startingTranslateX, translateX };
    fn.__closure = obj;
    fn.__workletHash = 13002049298724;
    fn.__initData = __initData3;
    const failOffsetXResult = activeOffsetXResult.failOffsetX(-10);
    const fn2 = function s(arg0, fail) {
      const value = startingTranslateX.get();
      if (abs(value - translateX.get()) >= 10) {
        fail.fail();
      }
    };
    fn2.__closure = { startingTranslateX, translateX };
    fn2.__workletHash = 11728992116193;
    fn2.__initData = __initData2;
    const failOffsetYResult = failOffsetXResult.failOffsetY([-40, 40]);
    const fn3 = function t(arg0, arg1) {
      const tmp = arg1;
      if (tmp) {
        const obj = isMobileQuestDockRenderedBase(dependencyMap[17]);
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
  const tmp36 = !isMobileQuestDockRenderedBase;
  const AVATAR_SIZE_MAP = isMobileQuestDockRenderedBase(1202).AVATAR_SIZE_MAP;
  if (isMobileQuestDockRenderedBase) {
    tmp38 = AVATAR_SIZE_MAP[translateX];
  } else {
    tmp38 = AVATAR_SIZE_MAP[gesture];
  }
  const obj18 = { ref: animatedRef, style: items9, shouldRasterizeIOS: true, children: items10 };
  items9 = [tmp.youRow, memo, animatedStyle];
  const View = tmp33(5052).View;
  items10 = [closure_19(youBarHorizontalMargin(17830), { hasNameplate: null != nameplate, isLargeAvatar: tmp36, barWidth: diff, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp38 }), , , ];
  let tmp41Result = tmp21;
  if (tmp41Result) {
    const obj19 = { nameplate, barWidth: diff, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp38 };
    tmp41Result = tmp41(tmp33(17831), obj19);
  }
  items10[1] = tmp41Result;
  const obj20 = { gesture: memo3, children: closure_19(markAsDismissed, obj21) };
  obj21 = { style: tmp.youPressable, android_ripple: { color: "transparent" }, accessibilityRole: "button", accessibilityLabel: youBarAccessibilityLabel, accessibilityHint: intl.string(tmp2(1128).t.cSgdvE), accessibilityActions: memo2, onAccessibilityAction: callback4, onPressIn: callback1, onPressOut: callback2, onPress: memo1, onLongPress: callback, hitSlop, testID: "you_bar_profile_button", children: closure_19(youBarHorizontalMargin(17832), { isQuestRendered: isMobileQuestDockRenderedBase, onAvatarPress: memo1 }) };
  const GestureDetector = tmp2(5297).GestureDetector;
  intl = tmp2(1128).intl;
  items10[2] = closure_19(GestureDetector, obj20);
  const obj22 = { style: tmp.youRowRight, children: items11 };
  const tmp43 = visibleContent;
  if (hasConjureGuild) {
    const obj23 = { hasNameplate: null != nameplate };
    tmp41Result2 = tmp41(tmp33(17837), obj23);
  } else {
    tmp41Result2 = null;
    if (iCYMIEnabled) {
      const obj24 = { hasNameplate: null != nameplate };
      tmp41Result2 = tmp41(tmp33(17846), obj24);
    }
  }
  items11 = [tmp41Result2, closure_19(youBarHorizontalMargin(17848), { hasNameplate: null != nameplate })];
  items10[3] = closure_20(tmp43, obj22);
  return closure_20(View, obj18);
});
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function YouBarThemed() {
  let gradientPreset;
  let items1;
  let tmp10;
  let tmp17;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ClientThemesBackgroundStore];
    const fn = function s() {
      return gradientPreset.gradientPreset;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = closure_19(YouBarFloatingShadeDefault, {});
    const tmp15 = closure_19(closure_26, {});
    const tmp16 = closure_19(ConnectionBannerDefault, {});
    cResult[2] = tmp13;
    cResult[3] = tmp15;
    cResult[4] = tmp16;
    tmp10 = tmp16;
    tmp9 = tmp15;
    tmp8 = tmp13;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    const obj2 = { gradient: stateFromStores, children: items1 };
    items1 = [tmp8, tmp9, tmp10];
    const tmp19 = closure_20(native.ThemeContextProvider, obj2);
    cResult[5] = stateFromStores;
    cResult[6] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  return tmp17;
}) : (function YouBarThemed() {
  let gradientPreset;
  let items1;
  const items = [ClientThemesBackgroundStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj2 = { gradient: stateFromStores, children: items1 };
  const ThemeContextProvider = native.ThemeContextProvider;
  items1 = [closure_19(YouBarFloatingShadeDefault, {}), closure_19(closure_26, {}), closure_19(ConnectionBannerDefault, {})];
  return closure_20(ThemeContextProvider, obj2);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default memoResult;
