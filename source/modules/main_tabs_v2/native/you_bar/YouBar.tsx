// Module ID: 15097
// Function ID: 114922
// Dependencies: [5, 57, 31, 27, 3942, 3947, 4810, 1849, 13997, 653, 1345, 33, 4130, 689, 1450, 13990, 10850, 3984, 13996, 14000, 3991, 4542, 8322, 15098, 566, 9090, 3969, 8239, 9067, 1212, 5796, 3982, 4099, 1327, 22, 15100, 1934, 3981, 10887, 5737, 1334, 14795, 5217, 1273, 15111, 15112, 15113, 15117, 15120, 3842, 15122, 15123, 2]

// Module 15097
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import importAllResult from "getRootNavigationRef";
import get_ActivityIndicator from "_activityFromSetting";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import { ME } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "isDiscordFrontendDevelopment";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_20;
let closure_21;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_6, Pressable: closure_7 } = get_ActivityIndicator);
({ YOU_BAR_HEIGHT: closure_12, YOU_BAR_PADDING: closure_13, YOU_BAR_SPRING_CONFIG: closure_14, YOU_BAR_AVATAR_LARGE_SIZE: closure_15, YOU_BAR_AVATAR_SIZE: closure_16, YOU_BAR_BUTTON_HIT_SLOP: closure_17 } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let obj = {};
obj = { position: "absolute", left: 0, right: 0, bottom: 0, flexDirection: "row", alignItems: "center", backgroundColor: "transparent" };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_HIGH);
obj.youRow = obj;
obj.youRowRight = { flexDirection: "row", gap: 8 };
_createForOfIteratorHelperLoose = { flex: 1, marginRight: require("_createForOfIteratorHelperLoose").space.PX_12, borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.YOU_BAR_BORDER_RADIUS };
obj.youPressable = _createForOfIteratorHelperLoose;
let closure_22 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_23 = { code: "function YouBarTsx1(){const{withSpring,barMarginBottom,connectionBannerHeight,YOU_BAR_SPRING_CONFIG,isPressedValue,isQuestRendered}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,YOU_BAR_SPRING_CONFIG),transform:[{scale:withSpring(isPressedValue.get()&&!isQuestRendered?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_24 = { code: "function YouBarTsx2(_,success){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;if(!success)return;runOnJS(handleNavBetweenGuildsAndDMs)();}" };
let closure_25 = { code: "function YouBarTsx3(_,manager){const{startingTranslateX,translateX}=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}}" };
let closure_26 = { code: "function YouBarTsx4(){const{startingTranslateX,translateX}=this.__closure;startingTranslateX.set(translateX.get());}" };
let closure_27 = importAllResult.memo(() => {
  const tmp = callback3();
  let obj = isMobileQuestDockRenderedBase(13990);
  let obj1 = isMobileQuestDockRenderedBase(13990);
  isMobileQuestDockRenderedBase = obj.useIsMobileQuestDockRenderedBase(obj1.useMobileQuestDock());
  let obj2 = isMobileQuestDockRenderedBase(10850);
  const drawerWidth = obj2.useDrawerWidth();
  let obj3 = isMobileQuestDockRenderedBase(13996);
  const youBarHorizontalMargin = obj3.useYouBarHorizontalMargin();
  let result = 2 * youBarHorizontalMargin;
  const tmp6 = youBarHorizontalMargin(3984)().isChatBesideChannelList ? drawerWidth - result : youBarHorizontalMargin(1450)().width - result;
  const dependencyMap = tmp6;
  let obj4 = isMobileQuestDockRenderedBase(13996);
  const youBarBottomMargin = obj4.useYouBarBottomMargin();
  let obj5 = isMobileQuestDockRenderedBase(14000);
  const connectionBannerHeight = obj5.useConnectionBannerHeight();
  let items = [tmp6, youBarHorizontalMargin];
  const memo = sharedValue.useMemo(() => ({ marginHorizontal: youBarHorizontalMargin, height: closure_12, padding: closure_13, width: closure_2 }), items);
  let obj6 = isMobileQuestDockRenderedBase(3991);
  sharedValue = obj6.useSharedValue(false);
  let fn = function r() {
    let obj = { marginBottom: isMobileQuestDockRenderedBase(tmp6[21]).withSpring(youBarBottomMargin + connectionBannerHeight, closure_14) };
    obj = {};
    const obj2 = isMobileQuestDockRenderedBase(tmp6[21]);
    let num = 1;
    if (sharedValue.get()) {
      num = 1;
      if (!isMobileQuestDockRenderedBase) {
        num = 0.98;
      }
    }
    obj.scale = isMobileQuestDockRenderedBase(tmp6[21]).withSpring(num, closure_14);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withSpring: isMobileQuestDockRenderedBase(4542).withSpring, barMarginBottom: youBarBottomMargin, connectionBannerHeight, YOU_BAR_SPRING_CONFIG: closure_14, isPressedValue: sharedValue, isQuestRendered: isMobileQuestDockRenderedBase };
  fn.__closure = obj;
  fn.__workletHash = 7314807713815;
  fn.__initData = closure_23;
  const animatedStyle = isMobileQuestDockRenderedBase(3991).useAnimatedStyle(fn);
  const obj8 = isMobileQuestDockRenderedBase(3991);
  const iCYMIEnabled = isMobileQuestDockRenderedBase(8322).useICYMIEnabled("TabsNavigator");
  const obj10 = isMobileQuestDockRenderedBase(8322);
  const youBarCoachmark = isMobileQuestDockRenderedBase(15098).useYouBarCoachmark({ isQuestRendered: isMobileQuestDockRenderedBase });
  const visibleContent = youBarCoachmark.visibleContent;
  const markAsDismissed = youBarCoachmark.markAsDismissed;
  let closure_8 = sharedValue.useRef(markAsDismissed);
  let closure_9 = sharedValue.useRef(visibleContent);
  const items1 = [markAsDismissed, visibleContent];
  const effect = sharedValue.useEffect(() => {
    closure_9.current = visibleContent;
    closure_8.current = markAsDismissed;
  }, items1);
  const obj11 = isMobileQuestDockRenderedBase(15098);
  const items2 = [closure_11];
  const stateFromStores = isMobileQuestDockRenderedBase(566).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const obj12 = isMobileQuestDockRenderedBase(566);
  const nameplate = isMobileQuestDockRenderedBase(9090).useNameplate({ user: stateFromStores });
  const obj13 = isMobileQuestDockRenderedBase(9090);
  let closure_10 = youBarHorizontalMargin(3969).useName(stateFromStores);
  const obj14 = youBarHorizontalMargin(3969);
  const customStatusActivity = isMobileQuestDockRenderedBase(8239).useCustomStatusActivity();
  const obj15 = isMobileQuestDockRenderedBase(8239);
  let state;
  if (null != customStatusActivity) {
    state = customStatusActivity.state;
  }
  closure_11 = isMobileQuestDockRenderedBase(9067).useGameMentionsAsPlainText(state);
  const obj16 = isMobileQuestDockRenderedBase(9067);
  const items3 = [closure_10];
  const stateFromStores1 = isMobileQuestDockRenderedBase(566).useStateFromStores(items3, () => {
    if (null != closure_10) {
      if (null != closure_11) {
        let humanizeStatusResult = closure_11;
      } else {
        humanizeStatusResult = isMobileQuestDockRenderedBase(tmp6[26]).humanizeStatus(tmp3);
        const obj = isMobileQuestDockRenderedBase(tmp6[26]);
      }
      let combined = tmp;
      if (null != humanizeStatusResult) {
        const _HermesInternal = HermesInternal;
        combined = "" + tmp + ", " + humanizeStatusResult;
      }
      return combined;
    }
  });
  const memo1 = sharedValue.useMemo(() => {
    const obj = { name: "open-settings" };
    const intl = isMobileQuestDockRenderedBase(tmp6[29]).intl;
    obj.label = intl.string(isMobileQuestDockRenderedBase(tmp6[29]).t["3/IlR0"]);
    const items = [obj];
    return items;
  }, []);
  const callback = sharedValue.useCallback((nativeEvent) => {
    if ("open-settings" === nativeEvent.nativeEvent.actionName) {
      isMobileQuestDockRenderedBase(tmp6[30]).openUserSettings();
      const obj = isMobileQuestDockRenderedBase(tmp6[30]);
    }
  }, []);
  let closure_12 = sharedValue.useRef(null);
  const tmp23 = connectionBannerHeight(sharedValue.useState(0), 2);
  let closure_13 = tmp23[1];
  closure_14 = sharedValue.useRef(true);
  const effect1 = sharedValue.useEffect(() => {
    function checkYouScreenPresence() {
      if (null != rootNavigationRef) {
        const state = rootNavigationRef.getState();
        let tmp3 = null != state;
        if (tmp3) {
          let name;
          if (null != state.routes[state.index]) {
            name = tmp.name;
          }
          tmp3 = "main" === name;
        }
        if (tmp5) {
          outer1_13((arg0) => arg0 + 1);
        }
        outer1_14.current = tmp3;
        let someResult;
        if (null != state) {
          const routes = state.routes;
          if (null != routes) {
            someResult = routes.some((name) => "you" === name.name);
          }
        }
        if (!someResult) {
          if (null != outer1_12.current) {
            if ("press" === outer1_12.current) {
              const result = isMobileQuestDockRenderedBase(4099).triggerHapticFeedback(isMobileQuestDockRenderedBase(4099).HapticFeedbackTypes.SOFT);
              rootNavigationRef.navigate("you");
              const obj2 = isMobileQuestDockRenderedBase(4099);
            } else {
              isMobileQuestDockRenderedBase(1327).assertNever(outer1_12.current);
              const obj = isMobileQuestDockRenderedBase(1327);
            }
            outer1_12.current = null;
          }
        }
        tmp5 = !outer1_14.current && tmp3;
      }
    }
    const rootNavigationRef = isMobileQuestDockRenderedBase(tmp6[31]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      let result = checkYouScreenPresence();
      let closure_1 = rootNavigationRef.addListener("state", checkYouScreenPresence);
      return () => {
        callback();
      };
    }
    let obj = isMobileQuestDockRenderedBase(tmp6[31]);
  }, []);
  const items4 = [sharedValue];
  let fn2 = () => isMobileQuestDockRenderedBase(tmp6[34]).debounce(() => {
    const rootNavigationRef = isMobileQuestDockRenderedBase(3982).getRootNavigationRef();
    if (null != rootNavigationRef) {
      const state = rootNavigationRef.getState();
      let someResult;
      if (null != state) {
        const routes = state.routes;
        if (null != routes) {
          someResult = routes.some((name) => "you" === name.name);
        }
      }
      if (someResult) {
        outer1_12.current = "press";
      }
    }
    if (null != rootNavigationRef) {
      const result = isMobileQuestDockRenderedBase(4099).triggerHapticFeedback(isMobileQuestDockRenderedBase(4099).HapticFeedbackTypes.SOFT);
      rootNavigationRef.navigate("you");
      const result1 = outer1_5.set(false);
      const obj3 = isMobileQuestDockRenderedBase(4099);
    }
  }, 500, { leading: true, trailing: false });
  const memo2 = sharedValue.useMemo(fn2, items4);
  // CreateGeneratorClosureLongIndex (0x67)
  const items5 = [sharedValue];
  const items6 = [sharedValue];
  const callback1 = sharedValue.useCallback(youBarBottomMargin(fn2), items5);
  const items7 = [sharedValue];
  const callback2 = sharedValue.useCallback(() => {
    const result = sharedValue.set(true);
  }, items6);
  callback3 = sharedValue.useCallback(() => {
    const result = sharedValue.set(false);
  }, items7);
  const callback4 = sharedValue.useCallback(() => {
    const coerceGuildsRouteResult = isMobileQuestDockRenderedBase(tmp6[37]).coerceGuildsRoute(youBarHorizontalMargin(tmp6[38])());
    if (null != coerceGuildsRouteResult) {
      const result = isMobileQuestDockRenderedBase(tmp6[32]).triggerHapticFeedback(isMobileQuestDockRenderedBase(tmp6[32]).HapticFeedbackTypes.SOFT);
      const params = coerceGuildsRouteResult.params;
      let guildId;
      if (null != params) {
        guildId = params.guildId;
      }
      if (guildId === closure_18) {
        const lastSelectedGuildId = ref2.getLastSelectedGuildId();
        if (null != lastSelectedGuildId) {
          isMobileQuestDockRenderedBase(tmp6[39]).transitionToGuild(lastSelectedGuildId);
          const obj3 = isMobileQuestDockRenderedBase(tmp6[39]);
        }
      } else {
        if (ref2.current === isMobileQuestDockRenderedBase(tmp6[40]).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK) {
          ref.current(outer1_19.TAKE_ACTION);
        }
        isMobileQuestDockRenderedBase(tmp6[39]).transitionToGuild(closure_18);
        const obj2 = isMobileQuestDockRenderedBase(tmp6[39]);
      }
      const obj4 = isMobileQuestDockRenderedBase(tmp6[32]);
    }
  }, []);
  const context = sharedValue.useContext(youBarHorizontalMargin(14795));
  const gesture = context.gesture;
  const translateX = context.translateX;
  const obj17 = isMobileQuestDockRenderedBase(566);
  let closure_18 = isMobileQuestDockRenderedBase(3991).useSharedValue(0);
  const items8 = [callback4, gesture, tmp23[0]];
  const memo3 = sharedValue.useMemo(() => {
    const Gesture = isMobileQuestDockRenderedBase(tmp6[42]).Gesture;
    let result = Gesture.Pan().simultaneousWithExternalGesture(gesture);
    const PanResult = Gesture.Pan();
    const activeOffsetXResult = result.activeOffsetX(50);
    const items = [-40, 40];
    const failOffsetXResult = result.activeOffsetX(50).failOffsetX(-10);
    const fn = function s() {
      const result = outer1_18.set(outer1_17.get());
    };
    let obj = { startingTranslateX: closure_18, translateX };
    fn.__closure = obj;
    fn.__workletHash = 13002049298724;
    fn.__initData = outer1_26;
    const failOffsetYResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY(items);
    const fn2 = function n(arg0, fail) {
      const value = outer1_18.get();
      if (Math.abs(value - outer1_17.get()) >= 10) {
        fail.fail();
      }
    };
    obj = { startingTranslateX: closure_18, translateX };
    fn2.__closure = obj;
    fn2.__workletHash = 11728992116193;
    fn2.__initData = outer1_25;
    const onBeginResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY(items).onBegin(fn);
    const fn3 = function t(arg0, arg1) {
      if (arg1) {
        isMobileQuestDockRenderedBase(table[20]).runOnJS(outer1_15)();
        const obj = isMobileQuestDockRenderedBase(table[20]);
      }
    };
    const onTouchesMoveResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY(items).onBegin(fn).onTouchesMove(fn2);
    fn3.__closure = { runOnJS: isMobileQuestDockRenderedBase(tmp6[20]).runOnJS, handleNavBetweenGuildsAndDMs: callback4 };
    fn3.__workletHash = 2931771790779;
    fn3.__initData = outer1_24;
    return onTouchesMoveResult.onEnd(fn3);
  }, items8);
  const AVATAR_SIZE_MAP = isMobileQuestDockRenderedBase(1273).AVATAR_SIZE_MAP;
  if (!isMobileQuestDockRenderedBase) {
    let tmp34 = AVATAR_SIZE_MAP[callback4];
  } else {
    tmp34 = AVATAR_SIZE_MAP[gesture];
  }
  obj = { ref: youBarCoachmark.animatedRef, style: items9, shouldRasterizeIOS: true };
  items9 = [tmp.youRow, memo, animatedStyle];
  obj1 = { hasNameplate: tmp17, isLargeAvatar: tmp32, barWidth: tmp6, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp34 };
  const items10 = [callback(youBarHorizontalMargin(15111), obj1), , , ];
  let tmp37 = null != nameplate;
  if (tmp37) {
    obj2 = { nameplate, barWidth: tmp6, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp34 };
    tmp37 = callback(youBarHorizontalMargin(15112), obj2);
  }
  items10[1] = tmp37;
  obj3 = { gesture: memo3 };
  obj4 = { style: tmp.youPressable, android_ripple: { color: "transparent" }, accessibilityRole: "button", accessibilityLabel: stateFromStores1 };
  let intl = isMobileQuestDockRenderedBase(1212).intl;
  obj4.accessibilityHint = intl.string(isMobileQuestDockRenderedBase(1212).t.cSgdvE);
  obj4.accessibilityActions = memo1;
  obj4.onAccessibilityAction = callback;
  obj4.onPressIn = callback2;
  obj4.onPressOut = callback3;
  obj4.onPress = memo2;
  obj4.onLongPress = callback1;
  obj4.hitSlop = translateX;
  obj4.children = callback(youBarHorizontalMargin(15113), { isQuestRendered: isMobileQuestDockRenderedBase, onAvatarPress: memo2 });
  obj3.children = callback(markAsDismissed, obj4);
  items10[2] = callback(isMobileQuestDockRenderedBase(5217).GestureDetector, obj3);
  obj5 = { style: tmp.youRowRight };
  let tmp43 = null;
  if (iCYMIEnabled) {
    obj6 = { hasNameplate: tmp17 };
    tmp43 = callback(youBarHorizontalMargin(15117), obj6);
  }
  const items11 = [tmp43, callback(youBarHorizontalMargin(15120), { hasNameplate: null != nameplate })];
  obj5.children = items11;
  items10[3] = closure_21(visibleContent, obj5);
  obj.children = items10;
  return closure_21(youBarHorizontalMargin(3991).View, obj);
});
const memoResult = importAllResult.memo(function YouBarThemed() {
  let obj = require(566) /* initialize */;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.gradientPreset);
  obj = { gradient: stateFromStores };
  const items1 = [callback(importDefault(15122), {}), callback(closure_27, {}), callback(importDefault(15123), {})];
  obj.children = items1;
  return callback2(require(3842) /* ManaContext */.ThemeContextProvider, obj);
});
let result = require("result").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default memoResult;
