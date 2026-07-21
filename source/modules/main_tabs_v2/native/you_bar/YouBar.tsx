// Module ID: 14973
// Function ID: 112711
// Dependencies: []

// Module 14973
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ View: closure_6, Pressable: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
const tmp2 = arg1(dependencyMap[3]);
({ YOU_BAR_HEIGHT: closure_12, YOU_BAR_PADDING: closure_13, YOU_BAR_SPRING_CONFIG: closure_14, YOU_BAR_AVATAR_LARGE_SIZE: closure_15, YOU_BAR_AVATAR_SIZE: closure_16, YOU_BAR_BUTTON_HIT_SLOP: closure_17 } = arg1(dependencyMap[8]));
const ME = arg1(dependencyMap[9]).ME;
const ContentDismissActionType = arg1(dependencyMap[10]).ContentDismissActionType;
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_20, jsxs: closure_21 } = arg1(dependencyMap[11]));
let obj1 = arg1(dependencyMap[12]);
let obj = {};
obj = { getAmplitudinalSoundboardVolume: 6.5, UMWBZr: 6.5, paddingRight: null, flexDirection: null, flexWrap: 1, alignItems: 0.7, overflow: true };
const merged = Object.assign(importDefault(dependencyMap[13]).shadows.SHADOW_HIGH);
obj.youRow = obj;
obj.youRowRight = { stiffness: false, damping: false };
obj1 = { flex: 1, marginRight: importDefault(dependencyMap[13]).space.PX_12, borderRadius: importDefault(dependencyMap[13]).modules.mobile.YOU_BAR_BORDER_RADIUS };
obj.youPressable = obj1;
let closure_22 = obj1.createStyles(obj);
let closure_23 = { code: "function YouBarTsx1(){const{withSpring,barMarginBottom,connectionBannerHeight,YOU_BAR_SPRING_CONFIG,isPressedValue,isQuestRendered}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,YOU_BAR_SPRING_CONFIG),transform:[{scale:withSpring(isPressedValue.get()&&!isQuestRendered?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_24 = { code: "function YouBarTsx2(_,success){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;if(!success)return;runOnJS(handleNavBetweenGuildsAndDMs)();}" };
let closure_25 = { code: "function YouBarTsx3(_,manager){const{startingTranslateX,translateX}=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}}" };
let closure_26 = { code: "function YouBarTsx4(){const{startingTranslateX,translateX}=this.__closure;startingTranslateX.set(translateX.get());}" };
let closure_27 = importAllResult.memo(() => {
  const tmp = callback5();
  let obj = arg1(dependencyMap[15]);
  let obj1 = arg1(dependencyMap[15]);
  const isMobileQuestDockRenderedBase = obj.useIsMobileQuestDockRenderedBase(obj1.useMobileQuestDock());
  const arg1 = isMobileQuestDockRenderedBase;
  let obj2 = arg1(dependencyMap[16]);
  const drawerWidth = obj2.useDrawerWidth();
  let obj3 = arg1(dependencyMap[18]);
  const youBarHorizontalMargin = obj3.useYouBarHorizontalMargin();
  const importDefault = youBarHorizontalMargin;
  const result = 2 * youBarHorizontalMargin;
  const tmp6 = importDefault(dependencyMap[17])().isChatBesideChannelList ? drawerWidth - result : importDefault(dependencyMap[14])().width - result;
  const dependencyMap = tmp6;
  let obj4 = arg1(dependencyMap[18]);
  const youBarBottomMargin = obj4.useYouBarBottomMargin();
  let callback = youBarBottomMargin;
  let obj5 = arg1(dependencyMap[19]);
  const connectionBannerHeight = obj5.useConnectionBannerHeight();
  let callback2 = connectionBannerHeight;
  const items = [tmp6, youBarHorizontalMargin];
  const memo = importAllResult.useMemo(() => ({ marginHorizontal: youBarHorizontalMargin, height: closure_12, padding: closure_13, width: tmp6 }), items);
  let obj6 = arg1(dependencyMap[20]);
  const sharedValue = obj6.useSharedValue(false);
  const fn = function r() {
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
  obj = { withSpring: arg1(dependencyMap[21]).withSpring, barMarginBottom: youBarBottomMargin, connectionBannerHeight, YOU_BAR_SPRING_CONFIG: closure_14, isPressedValue: sharedValue, isQuestRendered: isMobileQuestDockRenderedBase };
  fn.__closure = obj;
  fn.__workletHash = 7314807713815;
  fn.__initData = closure_23;
  const animatedStyle = arg1(dependencyMap[20]).useAnimatedStyle(fn);
  const obj8 = arg1(dependencyMap[20]);
  const iCYMIEnabled = arg1(dependencyMap[22]).useICYMIEnabled("TabsNavigator");
  const obj10 = arg1(dependencyMap[22]);
  const youBarCoachmark = arg1(dependencyMap[23]).useYouBarCoachmark({ isQuestRendered: isMobileQuestDockRenderedBase });
  const visibleContent = youBarCoachmark.visibleContent;
  const markAsDismissed = youBarCoachmark.markAsDismissed;
  let closure_8 = importAllResult.useRef(markAsDismissed);
  let closure_9 = importAllResult.useRef(visibleContent);
  const items1 = [markAsDismissed, visibleContent];
  const effect = importAllResult.useEffect(() => {
    closure_9.current = visibleContent;
    closure_8.current = markAsDismissed;
  }, items1);
  const obj11 = arg1(dependencyMap[23]);
  const items2 = [closure_11];
  const stateFromStores = arg1(dependencyMap[24]).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const obj12 = arg1(dependencyMap[24]);
  const nameplate = arg1(dependencyMap[25]).useNameplate({ user: stateFromStores });
  const obj13 = arg1(dependencyMap[25]);
  let closure_10 = importDefault(dependencyMap[26]).useName(stateFromStores);
  const obj14 = importDefault(dependencyMap[26]);
  const customStatusActivity = arg1(dependencyMap[27]).useCustomStatusActivity();
  const obj15 = arg1(dependencyMap[27]);
  let state;
  if (null != customStatusActivity) {
    state = customStatusActivity.state;
  }
  closure_11 = arg1(dependencyMap[28]).useGameMentionsAsPlainText(state);
  const obj16 = arg1(dependencyMap[28]);
  const items3 = [closure_10];
  const stateFromStores1 = arg1(dependencyMap[24]).useStateFromStores(items3, () => {
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
  const memo1 = importAllResult.useMemo(() => {
    const obj = { name: "open-settings" };
    const intl = isMobileQuestDockRenderedBase(tmp6[29]).intl;
    obj.label = intl.string(isMobileQuestDockRenderedBase(tmp6[29]).t.3/IlR0);
    const items = [obj];
    return items;
  }, []);
  callback = importAllResult.useCallback((nativeEvent) => {
    if ("open-settings" === nativeEvent.nativeEvent.actionName) {
      isMobileQuestDockRenderedBase(tmp6[30]).openUserSettings();
      const obj = isMobileQuestDockRenderedBase(tmp6[30]);
    }
  }, []);
  let closure_12 = importAllResult.useRef(null);
  const tmp23 = callback2(sharedValue.useState(0), 2);
  let closure_13 = tmp23[1];
  closure_14 = importAllResult.useRef(true);
  const effect1 = importAllResult.useEffect(() => {
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
          callback2((arg0) => arg0 + 1);
        }
        ref2.current = tmp3;
        let someResult;
        if (null != state) {
          const routes = state.routes;
          if (null != routes) {
            someResult = routes.some((name) => "you" === name.name);
          }
        }
        if (!someResult) {
          if (null != ref.current) {
            if ("press" === ref.current) {
              const result = rootNavigationRef(closure_2[32]).triggerHapticFeedback(rootNavigationRef(closure_2[32]).HapticFeedbackTypes.SOFT);
              rootNavigationRef.navigate("you");
              const obj2 = rootNavigationRef(closure_2[32]);
            } else {
              rootNavigationRef(closure_2[33]).assertNever(ref.current);
              const obj = rootNavigationRef(closure_2[33]);
            }
            ref.current = null;
          }
        }
        const tmp5 = !ref2.current && tmp3;
      }
    }
    const rootNavigationRef = isMobileQuestDockRenderedBase(tmp6[31]).getRootNavigationRef();
    const isMobileQuestDockRenderedBase = rootNavigationRef;
    if (null != rootNavigationRef) {
      const result = checkYouScreenPresence();
      let closure_1 = rootNavigationRef.addListener("state", checkYouScreenPresence);
      return () => {
        callback();
      };
    }
    const obj = isMobileQuestDockRenderedBase(tmp6[31]);
  }, []);
  const items4 = [sharedValue];
  const fn2 = () => isMobileQuestDockRenderedBase(tmp6[34]).debounce(() => {
    const rootNavigationRef = callback(closure_2[31]).getRootNavigationRef();
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
        closure_12.current = "press";
      }
    }
    if (null != rootNavigationRef) {
      const result = callback(closure_2[32]).triggerHapticFeedback(callback(closure_2[32]).HapticFeedbackTypes.SOFT);
      rootNavigationRef.navigate("you");
      const result1 = closure_5.set(false);
      const obj3 = callback(closure_2[32]);
    }
  }, 500, { -809188780: null, 163101889: null });
  const memo2 = importAllResult.useMemo(fn2, items4);
  // CreateGeneratorClosureLongIndex (0x67)
  const items5 = [sharedValue];
  const items6 = [sharedValue];
  const callback1 = importAllResult.useCallback(callback(fn2), items5);
  const items7 = [sharedValue];
  callback2 = importAllResult.useCallback(() => {
    const result = sharedValue.set(true);
  }, items6);
  const callback3 = importAllResult.useCallback(() => {
    const result = sharedValue.set(false);
  }, items7);
  const callback4 = importAllResult.useCallback(() => {
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
          ref.current(constants.TAKE_ACTION);
        }
        isMobileQuestDockRenderedBase(tmp6[39]).transitionToGuild(closure_18);
        const obj2 = isMobileQuestDockRenderedBase(tmp6[39]);
      }
      const obj4 = isMobileQuestDockRenderedBase(tmp6[32]);
    }
  }, []);
  const context = importAllResult.useContext(importDefault(dependencyMap[41]));
  const gesture = context.gesture;
  const translateX = context.translateX;
  const obj17 = arg1(dependencyMap[24]);
  let closure_18 = arg1(dependencyMap[20]).useSharedValue(0);
  const items8 = [callback4, gesture, tmp23[0]];
  const memo3 = importAllResult.useMemo(() => {
    const Gesture = isMobileQuestDockRenderedBase(tmp6[42]).Gesture;
    const result = Gesture.Pan().simultaneousWithExternalGesture(gesture);
    const PanResult = Gesture.Pan();
    const activeOffsetXResult = result.activeOffsetX(50);
    const items = [-40, 40];
    const failOffsetXResult = result.activeOffsetX(50).failOffsetX(-10);
    const fn = function s() {
      const result = store2.set(store.get());
    };
    let obj = { startingTranslateX: closure_18, translateX };
    fn.__closure = obj;
    fn.__workletHash = 13002049298724;
    fn.__initData = closure_26;
    const failOffsetYResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY(items);
    const fn2 = function n(arg0, fail) {
      const value = store2.get();
      if (Math.abs(value - store.get()) >= 10) {
        fail.fail();
      }
    };
    obj = { startingTranslateX: closure_18, translateX };
    fn2.__closure = obj;
    fn2.__workletHash = 11728992116193;
    fn2.__initData = closure_25;
    const onBeginResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY(items).onBegin(fn);
    const fn3 = function t(arg0, arg1) {
      if (arg1) {
        callback(closure_2[20]).runOnJS(closure_15)();
        const obj = callback(closure_2[20]);
      }
    };
    const onTouchesMoveResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY(items).onBegin(fn).onTouchesMove(fn2);
    fn3.__closure = { runOnJS: isMobileQuestDockRenderedBase(tmp6[20]).runOnJS, handleNavBetweenGuildsAndDMs: callback4 };
    fn3.__workletHash = 2931771790779;
    fn3.__initData = closure_24;
    return onTouchesMoveResult.onEnd(fn3);
  }, items8);
  const AVATAR_SIZE_MAP = arg1(dependencyMap[43]).AVATAR_SIZE_MAP;
  if (!isMobileQuestDockRenderedBase) {
    let tmp34 = AVATAR_SIZE_MAP[closure_15];
  } else {
    tmp34 = AVATAR_SIZE_MAP[closure_16];
  }
  obj = { ref: youBarCoachmark.animatedRef, style: items9, shouldRasterizeIOS: true };
  const items9 = [tmp.youRow, memo, animatedStyle];
  obj1 = { hasNameplate: tmp17, isLargeAvatar: tmp32, barWidth: tmp6, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp34 };
  const items10 = [callback3(importDefault(dependencyMap[44]), obj1), , , ];
  let tmp37 = null != nameplate;
  if (tmp37) {
    obj2 = { nameplate, barWidth: tmp6, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp34 };
    tmp37 = callback3(importDefault(dependencyMap[45]), obj2);
  }
  items10[1] = tmp37;
  obj3 = { gesture: memo3 };
  obj4 = { style: tmp.youPressable, android_ripple: { color: "transparent" }, accessibilityRole: "button", accessibilityLabel: stateFromStores1 };
  const intl = arg1(dependencyMap[29]).intl;
  obj4.accessibilityHint = intl.string(arg1(dependencyMap[29]).t.cSgdvE);
  obj4.accessibilityActions = memo1;
  obj4.onAccessibilityAction = callback;
  obj4.onPressIn = callback2;
  obj4.onPressOut = callback3;
  obj4.onPress = memo2;
  obj4.onLongPress = callback1;
  obj4.hitSlop = translateX;
  obj4.children = callback3(importDefault(dependencyMap[46]), { isQuestRendered: isMobileQuestDockRenderedBase, onAvatarPress: memo2 });
  obj3.children = callback3(markAsDismissed, obj4);
  items10[2] = callback3(arg1(dependencyMap[42]).GestureDetector, obj3);
  obj5 = { style: tmp.youRowRight };
  let tmp43 = null;
  if (iCYMIEnabled) {
    obj6 = { hasNameplate: tmp17 };
    tmp43 = callback3(importDefault(dependencyMap[47]), obj6);
  }
  const items11 = [tmp43, callback3(importDefault(dependencyMap[48]), { hasNameplate: null != nameplate })];
  obj5.children = items11;
  items10[3] = closure_21(visibleContent, obj5);
  obj.children = items10;
  return closure_21(importDefault(dependencyMap[20]).View, obj);
});
const tmp4 = arg1(dependencyMap[11]);
const memoResult = importAllResult.memo(function YouBarThemed() {
  let obj = arg1(dependencyMap[24]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => gradientPreset.gradientPreset);
  obj = { gradient: stateFromStores };
  const items1 = [callback3(importDefault(dependencyMap[50]), {}), callback3(closure_27, {}), callback3(importDefault(dependencyMap[51]), {})];
  obj.children = items1;
  return callback4(arg1(dependencyMap[49]).ThemeContextProvider, obj);
});
const result = arg1(dependencyMap[52]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default memoResult;
