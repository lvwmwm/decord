// Module ID: 18379
// Function ID: 18380
// Name: YouBar
// Dependencies: [5, 19, 17, 5033, 5040, 1384, 17004, 1072, 4855, 21, 5009, 575, 16997, 11522, 17003, 17007, 5090, 5632, 8916, 9654, 18380, 16561, 504, 8781, 18386, 5194, 5255, 1380, 12, 18387, 1995, 5193, 11470, 7516, 4842, 1114, 7557, 12056, 5298, 1188, 18401, 18402, 18403, 18408, 18410, 18412, 5075, 18414, 18415, 2]

// Module 18379 (YouBar)
import _mod12 from "module_12" /* 12 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import native from "native" /* 5075 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5193 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5298 */;
import spring from "spring" /* 5632 */;
import transitionToGuild from "transitionToGuild" /* 7516 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 11470 */;
import YouBarFloatingShadeDefault from "YouBarFloatingShade" /* 18414 */;
import ConnectionBannerDefault from "ConnectionBanner" /* 18415 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5033 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import UserStore from "UserStore" /* 1384 */;
import YouBarConstants from "YouBarConstants" /* 17004 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let c3, dependencyMap, height;

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
const __initData = { code: "function YouBarTsx1(){const{withSpring,barMarginBottom,connectionBannerHeight,YOU_BAR_SPRING_CONFIG,isPressedValue,isQuestRendered}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,YOU_BAR_SPRING_CONFIG),transform:[{scale:withSpring(isPressedValue.get()&&!isQuestRendered?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_22 = { code: "function YouBarTsx2(_,success){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;if(!success)return;runOnJS(handleNavBetweenGuildsAndDMs)();}" };
let closure_23 = { code: "function YouBarTsx3(_,manager){const{startingTranslateX,translateX}=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}}" };
let closure_24 = { code: "function YouBarTsx4(){const{startingTranslateX,translateX}=this.__closure;startingTranslateX.set(translateX.get());}" };
let closure_25 = react.memo(function YouBar() {
  let gesture;
  let intl;
  let isMobileQuestDockRenderedBase;
  let items10;
  let items11;
  let items9;
  let obj20;
  let tmp37;
  let tmp40Result2;
  let tmp = closure_20();
  const tmp2 = isMobileQuestDockRenderedBase;
  const tmp3 = dependencyMap;
  let obj = isMobileQuestDockRenderedBase(16997);
  const mobileQuestDock = obj.useMobileQuestDock();
  let obj2 = isMobileQuestDockRenderedBase(16997);
  isMobileQuestDockRenderedBase = obj2.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj3 = isMobileQuestDockRenderedBase(11522);
  const drawerWidth = obj3.useDrawerWidth({ whileSliding: "wider" });
  let obj4 = isMobileQuestDockRenderedBase(17003);
  const youBarHorizontalMargin = obj4.useYouBarHorizontalMargin();
  let diff = drawerWidth - 2 * youBarHorizontalMargin;
  dependencyMap = diff;
  let obj5 = isMobileQuestDockRenderedBase(17003);
  const youBarBottomMargin = obj5.useYouBarBottomMargin();
  const obj6 = isMobileQuestDockRenderedBase(17007);
  const connectionBannerHeight = obj6.useConnectionBannerHeight();
  let items = [diff, youBarHorizontalMargin];
  const memo = connectionBannerHeight.useMemo(() => {
    size = { marginHorizontal: youBarHorizontalMargin, height, padding: unpackModuleId, width: dependencyMap };
    return size;
  }, items);
  const obj7 = isMobileQuestDockRenderedBase(5090);
  const sharedValue = obj7.useSharedValue(false);
  let fn = function n() {
    let items;
    let obj2;
    const obj = { marginBottom: obj2.withSpring(youBarBottomMargin + connectionBannerHeight, authStore2), transform: items };
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
    ({ scale: withSpring(num, authStore2) });
    return obj;
  };
  const obj8 = isMobileQuestDockRenderedBase(5090);
  fn.__closure = { withSpring: isMobileQuestDockRenderedBase(5632).withSpring, barMarginBottom: youBarBottomMargin, connectionBannerHeight, YOU_BAR_SPRING_CONFIG: gesture, isPressedValue: sharedValue, isQuestRendered: isMobileQuestDockRenderedBase };
  fn.__workletHash = 7314807713815;
  fn.__initData = __initData;
  ({ withSpring: isMobileQuestDockRenderedBase(5632).withSpring, barMarginBottom: youBarBottomMargin, connectionBannerHeight, YOU_BAR_SPRING_CONFIG: gesture, isPressedValue: sharedValue, isQuestRendered: isMobileQuestDockRenderedBase });
  const animatedStyle = obj8.useAnimatedStyle(fn);
  const obj10 = isMobileQuestDockRenderedBase(8916);
  const iCYMIEnabled = obj10.useICYMIEnabled("TabsNavigator");
  const tmp16 = youBarHorizontalMargin(9654)("YouBar");
  const obj11 = isMobileQuestDockRenderedBase(18380);
  const youBarCoachmark = obj11.useYouBarCoachmark({ isQuestRendered: isMobileQuestDockRenderedBase });
  const visibleContent = youBarCoachmark.visibleContent;
  const markAsDismissed = youBarCoachmark.markAsDismissed;
  const animatedRef = youBarCoachmark.animatedRef;
  const obj12 = isMobileQuestDockRenderedBase(16561);
  const showTinyBroncoPromoSheet = obj12.useShowTinyBroncoPromoSheet({ visibleContent, markAsDismissed });
  const ref = connectionBannerHeight.useRef(markAsDismissed);
  const ref2 = connectionBannerHeight.useRef(visibleContent);
  const items1 = [markAsDismissed, visibleContent];
  const effect = connectionBannerHeight.useEffect(() => {
    ref2.current = visibleContent;
    ref.current = markAsDismissed;
  }, items1);
  const items2 = [ref2];
  const obj13 = isMobileQuestDockRenderedBase(504);
  const stateFromStores = obj13.useStateFromStores(items2, () => ref2.getCurrentUser());
  const obj14 = isMobileQuestDockRenderedBase(8781);
  const nameplate = obj14.useNameplate({ user: stateFromStores });
  const obj15 = isMobileQuestDockRenderedBase(18386);
  const youBarAccessibilityLabel = obj15.useYouBarAccessibilityLabel(stateFromStores);
  height = connectionBannerHeight.useRef(null);
  const effect1 = connectionBannerHeight.useEffect(() => {
    const obj = isMobileQuestDockRenderedBase(dependencyMap[25]);
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
  const memo1 = connectionBannerHeight.useMemo(() => {
    let obj = _mod12;
    return obj.debounce(() => {
      const obj = isMobileQuestDockRenderedBase(dependencyMap[25]);
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
          height.current = "press";
        }
      }
      if (null != rootNavigationRef) {
        const tmpResult = isMobileQuestDockRenderedBase(dependencyMap[26]);
        const result = tmpResult.triggerHapticFeedback(tmp(tmp2[26]).HapticFeedbackTypes.SOFT);
        rootNavigationRef.navigate("you");
        const result1 = sharedValue.set(false);
      }
    }, 500, { leading: true, trailing: false });
  }, items3);
  const items4 = [sharedValue];
  const items5 = [sharedValue];
  const callback = connectionBannerHeight.useCallback(youBarBottomMargin(function*(arg0, value) {
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
            const obj4 = { value: tmp(diff[30])(diff[29], diff.paths), done: false };
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
          const obj5 = tmp(diff[26]);
          const result = obj5.triggerHapticFeedback(tmp(diff[26]).HapticFeedbackTypes.SOFT);
          const result1 = tmp.showYouAccountActionSheet();
          const result2 = closure_129_5.set(false);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        c3 = 3;
        throw tmp9;
      }
    }
  }), items4);
  const items6 = [sharedValue];
  const callback1 = connectionBannerHeight.useCallback(() => {
    const result = sharedValue.set(true);
  }, items5);
  const callback2 = connectionBannerHeight.useCallback(() => {
    const result = sharedValue.set(false);
  }, items6);
  const callback3 = connectionBannerHeight.useCallback(() => {
    const obj = NavigationRouteUtils;
    const coerceGuildsRouteResult = obj.coerceGuildsRoute(getNavigatorCurrentRouteDefault());
    if (null != coerceGuildsRouteResult) {
      const tmpResult = HapticUtils;
      const result = tmpResult.triggerHapticFeedback(tmp(5255).HapticFeedbackTypes.SOFT);
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
  const memo2 = connectionBannerHeight.useMemo(() => {
    let intl;
    let intl2;
    const obj = { name: "open-settings", label: intl.string(isMobileQuestDockRenderedBase(dependencyMap[35]).t["3/IlR0"]) };
    intl = isMobileQuestDockRenderedBase(dependencyMap[35]).intl;
    const items = [obj, ];
    const obj2 = { name: "open-dms", label: intl2.string(isMobileQuestDockRenderedBase(dependencyMap[35]).t.GqXUt1) };
    intl2 = isMobileQuestDockRenderedBase(dependencyMap[35]).intl;
    items[1] = obj2;
    return items;
  }, []);
  const callback4 = connectionBannerHeight.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("open-settings" === actionName) {
      const obj = openUserSettings;
      obj.openUserSettings();
    } else if ("open-dms" === actionName) {
      callback3();
    }
  }, items7);
  const context = connectionBannerHeight.useContext(youBarHorizontalMargin(12056));
  gesture = context.gesture;
  const translateX = context.translateX;
  const obj16 = isMobileQuestDockRenderedBase(5090);
  const sharedValue1 = obj16.useSharedValue(0);
  const items8 = [callback3, gesture, sharedValue1, translateX];
  const memo3 = connectionBannerHeight.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    let result = PanResult.simultaneousWithExternalGesture(gesture);
    const activeOffsetXResult = result.activeOffsetX(50);
    const fn = function n() {
      const result = sharedValue1.set(translateX.get());
    };
    let obj = { startingTranslateX: sharedValue1, translateX };
    fn.__closure = obj;
    fn.__workletHash = 13002049298724;
    fn.__initData = __initData3;
    const failOffsetXResult = activeOffsetXResult.failOffsetX(-10);
    const fn2 = function s(arg0, fail) {
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
        const obj = isMobileQuestDockRenderedBase(dependencyMap[16]);
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
  const tmp35 = !isMobileQuestDockRenderedBase;
  const AVATAR_SIZE_MAP = isMobileQuestDockRenderedBase(1188).AVATAR_SIZE_MAP;
  if (isMobileQuestDockRenderedBase) {
    tmp37 = AVATAR_SIZE_MAP[sharedValue1];
  } else {
    tmp37 = AVATAR_SIZE_MAP[translateX];
  }
  const obj17 = { ref: animatedRef, style: items9, shouldRasterizeIOS: true, children: items10 };
  items9 = [tmp.youRow, memo, animatedStyle];
  const View = tmp15(5090).View;
  items10 = [closure_18(tmp15(18401), { hasNameplate: tmp22, isLargeAvatar: tmp35, barWidth: diff, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp37 }), , , ];
  let tmp40Result = tmp22;
  if (tmp40Result) {
    const obj18 = { nameplate, barWidth: diff, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp37 };
    tmp40Result = tmp40(tmp15(18402), obj18);
  }
  items10[1] = tmp40Result;
  const obj19 = { gesture: memo3, children: closure_18(visibleContent, obj20) };
  obj20 = { style: tmp.youPressable, android_ripple: { color: "transparent" }, accessibilityRole: "button", accessibilityLabel: youBarAccessibilityLabel, accessibilityHint: intl.string(tmp2(1114).t.cSgdvE), accessibilityActions: memo2, onAccessibilityAction: callback4, onPressIn: callback1, onPressOut: callback2, onPress: memo1, onLongPress: callback, hitSlop, testID: "you_bar_profile_button", children: closure_18(youBarHorizontalMargin(18403), { isQuestRendered: isMobileQuestDockRenderedBase, onAvatarPress: memo1 }) };
  const GestureDetector = tmp2(5298).GestureDetector;
  intl = tmp2(1114).intl;
  items10[2] = closure_18(GestureDetector, obj19);
  let placement;
  const obj21 = { style: tmp.youRowRight, children: items11 };
  const tmp42 = sharedValue;
  if (tmp16 != null) {
    placement = tmp16.placement;
  }
  if ("you_bar" === placement) {
    const obj22 = { hasNameplate: null != nameplate, canUnpin: tmp16.canPin };
    tmp40Result2 = tmp40(tmp15(18408), obj22);
  } else {
    tmp40Result2 = null;
    if (iCYMIEnabled) {
      const obj23 = { hasNameplate: null != nameplate };
      tmp40Result2 = tmp40(tmp15(18410), obj23);
    }
  }
  items11 = [tmp40Result2, closure_18(tmp15(18412), { hasNameplate: tmp22 })];
  items10[3] = closure_19(tmp42, obj21);
  return closure_19(View, obj17);
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
