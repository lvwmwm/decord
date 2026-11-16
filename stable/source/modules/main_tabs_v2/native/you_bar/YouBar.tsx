// Module ID: 18822
// Function ID: 18823
// Name: YouBar
// Dependencies: [5, 19, 17, 5194, 5203, 1385, 17430, 1072, 5016, 21, 5170, 575, 17422, 13992, 11412, 11421, 11734, 17429, 17433, 1652, 5793, 9035, 9798, 18823, 16964, 504, 8893, 18829, 5347, 5408, 1380, 12, 18830, 2118, 5346, 11682, 7627, 5003, 1113, 7668, 11415, 5452, 1705, 1187, 18844, 18845, 18846, 18851, 18853, 18855, 14266, 5231, 18856, 18857, 2]

// Module 18822 (YouBar)
import _mod12 from "module_12" /* 12 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import native from "native" /* 5231 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5346 */;
import HapticUtils from "HapticUtils" /* 5408 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5452 */;
import transitionToGuild from "transitionToGuild" /* 7627 */;
import openUserSettings from "openUserSettings" /* 7668 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 11682 */;
import YouBarFloatingShadeDefault from "YouBarFloatingShade" /* 18856 */;
import ConnectionBannerDefault from "ConnectionBanner" /* 18857 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5194 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5203 */;
import UserStore from "UserStore" /* 1385 */;
import YouBarConstants from "YouBarConstants" /* 17430 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let abs, failResult, importDefault, tmp4;

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
const _mod1705 = tmp(1705);
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
  let gesture;
  let intl;
  let items11;
  let items12;
  let items13;
  let items15;
  let markAsDismissed;
  let obj13;
  let obj7;
  let sharedValue;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp48;
  let tmp52Result3;
  let youBarHorizontalMargin;
  let tmp = closure_21();
  const tmp2 = youBarHorizontalMargin;
  let tmp3 = sharedValue;
  let obj = youBarHorizontalMargin(sharedValue[12]);
  const mobileQuestDock = obj.useMobileQuestDock();
  let obj2 = youBarHorizontalMargin(sharedValue[12]);
  const isMobileQuestDockRenderedBase = obj2.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj3 = youBarHorizontalMargin(sharedValue[13]);
  const tmp7 = importDefault;
  const isMobileRTCV2Enabled = obj3.useIsMobileRTCV2Enabled("YouBar");
  let tmp52Result4 = require("useVoicePanelDockHeight")() > 0;
  let str = "quest-bar";
  if (!isMobileQuestDockRenderedBase) {
    let str2 = null;
    if (tmp52Result4) {
      str2 = "voice-panel-dock";
    }
    str = str2;
  }
  if (isMobileRTCV2Enabled) {
    DOCK_SPACE_SPRING_CONFIG = tmp2(tmp3[15]).DOCK_SPACE_SPRING_CONFIG;
  } else {
    DOCK_SPACE_SPRING_CONFIG = closure_12;
  }
  const tmp9 = null != str;
  const tmp2Result = tmp2(tmp3[16]);
  const drawerWidth = tmp2Result.useDrawerWidth({ whileSliding: "wider" });
  const tmp2Result13 = tmp2(tmp3[17]);
  youBarHorizontalMargin = tmp2Result13.useYouBarHorizontalMargin();
  const diff = drawerWidth - 2 * youBarHorizontalMargin;
  importDefault = diff;
  const tmp2Result14 = tmp2(tmp3[17]);
  const youBarBottomMargin = tmp2Result14.useYouBarBottomMargin();
  let items = [diff, youBarHorizontalMargin];
  const tmp2Result15 = tmp2(tmp3[18]);
  const connectionBannerHeight = tmp2Result15.useConnectionBannerHeight();
  const memo = markAsDismissed.useMemo(() => {
    size = { marginHorizontal: youBarHorizontalMargin, height, padding: unpackModuleId, width: importDefault };
    return size;
  }, items);
  const tmp2Result16 = tmp2(tmp3[19]);
  sharedValue = tmp2Result16.useSharedValue(false);
  let items1 = [closure_22, , , , , , , ];
  const useAnimatedStyle = tmp2(tmp3[19]).useAnimatedStyle;
  tmp2(tmp3[19]);
  items1[1] = tmp2(tmp3[20]).withSpring;
  items1[2] = youBarBottomMargin;
  items1[3] = connectionBannerHeight;
  items1[4] = DOCK_SPACE_SPRING_CONFIG;
  items1[5] = sharedValue;
  items1[6] = tmp9;
  items1[7] = closure_12;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items1;
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
  let items2 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  YouBarTsx1.__closure = items2;
  YouBarTsx1.__workletHash = 9061810726804;
  YouBarTsx1.__initData = tmp18;
  const animatedStyle = useAnimatedStyle(YouBarTsx1);
  const tmp2Result18 = tmp2(tmp3[21]);
  const iCYMIEnabled = tmp2Result18.useICYMIEnabled("TabsNavigator");
  const tmp28 = tmp7(tmp3[22])("YouBar");
  const tmp2Result19 = tmp2(tmp3[23]);
  const youBarCoachmark = tmp2Result19.useYouBarCoachmark({ isCondensed: tmp9 });
  const visibleContent = youBarCoachmark.visibleContent;
  markAsDismissed = youBarCoachmark.markAsDismissed;
  const animatedRef = youBarCoachmark.animatedRef;
  const tmp2Result20 = tmp2(tmp3[24]);
  const showAgeNoticePromoSheet = tmp2Result20.useShowAgeNoticePromoSheet({ visibleContent, markAsDismissed });
  const ref = obj8.useRef(markAsDismissed);
  const ref2 = obj8.useRef(visibleContent);
  let items3 = [markAsDismissed, visibleContent];
  const effect = obj8.useEffect(() => {
    ref2.current = visibleContent;
    ref.current = markAsDismissed;
  }, items3);
  let items4 = [gesture];
  const tmp2Result21 = tmp2(tmp3[25]);
  const stateFromStores = tmp2Result21.useStateFromStores(items4, () => gesture.getCurrentUser());
  const tmp2Result22 = tmp2(tmp3[26]);
  const nameplate = tmp2Result22.useNameplate({ user: stateFromStores });
  const tmp2Result23 = tmp2(tmp3[27]);
  const youBarAccessibilityLabel = tmp2Result23.useYouBarAccessibilityLabel(stateFromStores);
  let closure_7 = obj8.useRef(null);
  const effect1 = obj8.useEffect(() => {
    const obj = youBarHorizontalMargin(sharedValue[28]);
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
  const memo1 = obj8.useMemo(() => {
    let obj = _mod12;
    return obj.debounce(() => {
      const obj = youBarHorizontalMargin(sharedValue[28]);
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
        const tmpResult = youBarHorizontalMargin(sharedValue[29]);
        const result = tmpResult.triggerHapticFeedback(tmp(tmp2[29]).HapticFeedbackTypes.SOFT);
        rootNavigationRef.navigate("you");
        const result1 = closure_1_2.set(false);
      }
    }, 500, { leading: true, trailing: false });
  }, items5);
  const items6 = [sharedValue];
  const items7 = [sharedValue];
  const callback = obj8.useCallback(visibleContent(function*(arg0, value) {
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
            const obj4 = { value: tmp(sharedValue[33])(sharedValue[32], sharedValue.paths), done: false };
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
          const obj5 = tmp(sharedValue[29]);
          const result = obj5.triggerHapticFeedback(tmp(sharedValue[29]).HapticFeedbackTypes.SOFT);
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
  const callback1 = obj8.useCallback(() => {
    const result = sharedValue.set(true);
  }, items7);
  const callback2 = obj8.useCallback(() => {
    const result = sharedValue.set(false);
  }, items8);
  const callback3 = obj8.useCallback(() => {
    const obj = NavigationRouteUtils;
    const coerceGuildsRouteResult = obj.coerceGuildsRoute(getNavigatorCurrentRouteDefault());
    if (null != coerceGuildsRouteResult) {
      const tmpResult = HapticUtils;
      const result = tmpResult.triggerHapticFeedback(tmp(5408).HapticFeedbackTypes.SOFT);
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
  const memo2 = obj8.useMemo(() => {
    let intl;
    let intl2;
    const obj = { name: "open-settings", label: intl.string(youBarHorizontalMargin(sharedValue[38]).t["3/IlR0"]) };
    intl = youBarHorizontalMargin(sharedValue[38]).intl;
    const items = [obj, ];
    const obj2 = { name: "open-dms", label: intl2.string(youBarHorizontalMargin(sharedValue[38]).t.GqXUt1) };
    intl2 = youBarHorizontalMargin(sharedValue[38]).intl;
    items[1] = obj2;
    return items;
  }, []);
  const callback4 = obj8.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("open-settings" === actionName) {
      const obj = openUserSettings;
      obj.openUserSettings();
    } else if ("open-dms" === actionName) {
      callback3();
    }
  }, items9);
  const context = obj8.useContext(tmp7(tmp3[40]));
  gesture = context.gesture;
  const translateX = context.translateX;
  const tmp2Result24 = tmp2(tmp3[19]);
  const sharedValue1 = tmp2Result24.useSharedValue(0);
  const items10 = [callback3, gesture, sharedValue1, translateX];
  const memo3 = obj8.useMemo(() => {
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
    items4[1] = _mod1705.scheduleOnRN;
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
  const AVATAR_SIZE_MAP = tmp2(tmp3[43]).AVATAR_SIZE_MAP;
  if (tmp9) {
    tmp48 = AVATAR_SIZE_MAP[closure_14];
  } else {
    tmp48 = AVATAR_SIZE_MAP[closure_13];
  }
  let obj4 = { ref: animatedRef, style: items11, shouldRasterizeIOS: true, children: items12 };
  items11 = [tmp.youRow, memo, animatedStyle];
  const View = tmp7(tmp3[19]).View;
  items12 = [closure_18(tmp7(tmp3[44]), { hasNameplate: null != nameplate, barWidth: diff, condensedReason: str, avatarSize: tmp48 }), , , ];
  let tmp52Result = tmp34;
  const tmp51 = closure_20;
  if (tmp52Result) {
    let obj5 = { nameplate, barWidth: diff, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp48 };
    tmp52Result = tmp52(tmp7(tmp3[45]), obj5);
  }
  items12[1] = tmp52Result;
  const obj6 = { gesture: memo3, children: closure_18(ref2, obj7) };
  obj7 = { style: tmp.youPressable, android_ripple: { color: "transparent" }, accessibilityRole: "button", accessibilityLabel: youBarAccessibilityLabel, accessibilityHint: intl.string(tmp2(tmp3[38]).t.cSgdvE), accessibilityActions: memo2, onAccessibilityAction: callback4, onPressIn: callback1, onPressOut: callback2, onPress: memo1, onLongPress: callback, hitSlop, testID: "you_bar_profile_button", children: closure_18(tmp7(tmp3[46]), { isCondensed: tmp9, onAvatarPress: memo1 }) };
  const GestureDetector = tmp2(tmp3[41]).GestureDetector;
  intl = tmp2(tmp3[38]).intl;
  items12[2] = closure_18(GestureDetector, obj6);
  let placement;
  const obj9 = { style: tmp.youRowRight, children: items13 };
  const tmp54 = ref;
  if (tmp28 != null) {
    placement = tmp28.placement;
  }
  if ("you_bar" === placement) {
    const obj10 = { hasNameplate: null != nameplate, canUnpin: tmp28.canPin };
    tmp52Result3 = tmp52(tmp7(tmp3[47]), obj10);
  } else {
    tmp52Result3 = null;
    if (iCYMIEnabled) {
      const obj11 = { hasNameplate: null != nameplate };
      tmp52Result3 = tmp52(tmp7(tmp3[48]), obj11);
    }
  }
  items13 = [tmp52Result3, closure_18(tmp7(tmp3[49]), { hasNameplate: null != nameplate })];
  items12[3] = closure_19(tmp54, obj9);
  const children = [closure_19(View, obj4), ];
  if (tmp52Result4) {
    const obj12 = { style: items15, pointerEvents: "none", children: closure_18(tmp7(tmp3[50]), obj13) };
    items15 = [tmp.dockRimRow, memo, animatedStyle];
    const View2 = tmp7(tmp3[19]).View;
    obj13 = { style: tmp.dockRim };
    tmp52Result4 = tmp52(View2, obj12);
  }
  children[1] = tmp52Result4;
  return closure_19(tmp51, { children });
});
const memoResult = react.memo(function YouBarThemed() {
  let gradientPreset;
  let items1;
  const items = [ClientThemesBackgroundStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj2 = { gradient: stateFromStores, children: items1 };
  const ThemeContextProvider = native.ThemeContextProvider;
  items1 = [authStore5(YouBarFloatingShadeDefault, {}), authStore5(closure_26, {}), authStore5(ConnectionBannerDefault, {})];
  return closure_19(ThemeContextProvider, obj2);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default memoResult;
