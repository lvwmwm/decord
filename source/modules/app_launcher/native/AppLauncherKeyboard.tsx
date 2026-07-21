// Module ID: 11143
// Function ID: 86644
// Name: setAppLauncherA11yFocusReturnRef
// Dependencies: []
// Exports: setAppLauncherA11yFocusReturnRef

// Module 11143 (setAppLauncherA11yFocusReturnRef)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const KEYBOARD_ANIMATION_CONFIG = arg1(dependencyMap[4]).KEYBOARD_ANIMATION_CONFIG;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { borderTopLeftRadius: importDefault(dependencyMap[7]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[7]).radii.sm };
obj.onboardingRoundingView = obj;
obj1 = { <string:4142921446>: "y", <string:1559994470>: "isArray", <string:1370117730>: "warn", <string:862052567>: "it", borderColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND, borderTopLeftRadius: importDefault(dependencyMap[7]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[7]).radii.sm };
obj.onboardingHeader = obj1;
const tmp2 = arg1(dependencyMap[5]);
obj.onboardingNavigatorContent = { borderWidth: 2, borderColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND, borderTopLeftRadius: importDefault(dependencyMap[7]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[7]).radii.sm };
let closure_11 = obj1.createStyles(obj);
let closure_12 = null;
let closure_13 = { code: "function AppLauncherKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
let closure_14 = { code: "function AppLauncherKeyboardTsx2(i,prev){const{runOnJS,handleOnboardingParamChange,showOnboarding}=this.__closure;if(i===prev)return;runOnJS(handleOnboardingParamChange)(i,showOnboarding);}" };
const obj2 = { borderWidth: 2, borderColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND, borderTopLeftRadius: importDefault(dependencyMap[7]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[7]).radii.sm };
const memoResult = importAllResult.memo(function AppLauncherKeyboard(context) {
  context = context.context;
  const arg1 = context;
  const chatInputRef = context.chatInputRef;
  const importDefault = chatInputRef;
  const onClose = context.onClose;
  const dependencyMap = onClose;
  const transitionState = context.transitionState;
  const entrypoint = context.entrypoint;
  let obj = arg1(dependencyMap[8]);
  const defaultAppLauncherWidth = obj.useDefaultAppLauncherWidth(entrypoint);
  const ref = transitionState.useRef(arg1(dependencyMap[9]).AppLauncherKeyboardCloseReason.DISMISSED);
  const View = ref;
  const ref1 = transitionState.useRef(undefined);
  const AnalyticEvents = ref1;
  const tmp4 = callback();
  const tmp5 = importDefault(dependencyMap[10])();
  const minimum = tmp5.minimum;
  const ContentDismissActionType = minimum;
  let closure_7 = importAllResult.useRef(Date.now());
  let closure_8 = importAllResult.useRef(false);
  let obj1 = arg1(dependencyMap[11]);
  let isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  obj = { channelId: context.channel.id };
  const visibleContent = importDefault(dependencyMap[12])(obj).visibleContent;
  let onboardingNavigatorContent = null != visibleContent;
  let callback = onboardingNavigatorContent;
  let obj3 = arg1(dependencyMap[13]);
  const sharedValue = obj3.useSharedValue(-1);
  let closure_12 = sharedValue;
  const sharedValue1 = arg1(dependencyMap[13]).useSharedValue(0);
  const ref2 = transitionState.useRef(null);
  let closure_13 = ref2;
  const items = [ref2];
  callback = importAllResult.useCallback(() => {
    let tmp = null == ref2;
    if (!tmp) {
      const current = ref2.current;
      tmp = null == current;
      const obj = current;
    }
    if (!tmp) {
      obj.expandActionSheet();
    }
  }, items);
  const callback1 = importAllResult.useCallback((arg0, arg1) => {
    let tmp = arg1;
    if (arg1) {
      tmp = 1 === arg0;
    }
    if (tmp) {
      chatInputRef(onClose[14])(minimum.TAKE_ACTION);
    }
  }, []);
  let closure_14 = callback1;
  const items1 = [onboardingNavigatorContent, sharedValue, callback1];
  const effect = importAllResult.useEffect(() => {
    callback1(sharedValue.get(), onboardingNavigatorContent);
  }, items1);
  const obj5 = arg1(dependencyMap[13]);
  class O {
    constructor() {
      return closure_12.get();
    }
  }
  O.__closure = { bottomSheetIndex: sharedValue };
  O.__workletHash = 15587451723262;
  O.__initData = closure_13;
  const fn = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      context(onClose[13]).runOnJS(callback1)(arg0, onboardingNavigatorContent);
      const obj = context(onClose[13]);
    }
  };
  obj = { runOnJS: arg1(dependencyMap[13]).runOnJS, handleOnboardingParamChange: callback1, showOnboarding: onboardingNavigatorContent };
  fn.__closure = obj;
  fn.__workletHash = 14003176039781;
  fn.__initData = closure_14;
  const animatedReaction = arg1(dependencyMap[13]).useAnimatedReaction(O, fn);
  const items2 = [transitionState];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (transitionState === context(onClose[15]).TransitionStates.YEETED) {
      chatInputRef(onClose[14])(minimum.USER_DISMISS);
    }
  }, items2);
  const items3 = [visibleContent, context, minimum, onboardingNavigatorContent];
  const items4 = [ref1];
  const callback2 = importAllResult.useCallback((arg0) => {
    let obj = {};
    obj = {};
    const merged = Object.assign(arg0);
    obj["pressBehavior"] = "collapse";
    const items = [ref2(context(onClose[16]).BottomSheetBackdrop, obj), ];
    let tmp5Result = onboardingNavigatorContent;
    if (onboardingNavigatorContent) {
      obj = { context, visibleContent };
      const tmp5 = ref2;
      const tmp8 = chatInputRef(onClose[17]);
      let num3 = 0;
      if (!obj4.isAndroid()) {
        num3 = minimum;
      }
      obj.bottomOffset = num3;
      tmp5Result = tmp5(tmp8, obj);
      const obj4 = context(onClose[18]);
    }
    items[1] = tmp5Result;
    obj.children = items;
    return visibleContent(isScreenReaderEnabled, obj);
  }, items3);
  const items5 = [chatInputRef, isScreenReaderEnabled, ref, onClose];
  const callback3 = importAllResult.useCallback((arg0, arg1, arg2) => {
    if (1 !== arg0) {
      if (1 === arg1) {
        if (arg2 === context(onClose[16]).ANIMATION_SOURCE.KEYBOARD) {
          let current = context(onClose[9]).AppLauncherBottomSheetExpandReason.KEYBOARD;
        } else if (arg2 === context(onClose[16]).ANIMATION_SOURCE.GESTURE) {
          current = context(onClose[9]).AppLauncherBottomSheetExpandReason.GESTURE;
        } else if (arg2 !== context(onClose[16]).ANIMATION_SOURCE.USER) {
          current = context(onClose[9]).AppLauncherBottomSheetExpandReason.OTHER;
        } else {
          current = ref1.current;
        }
        let obj = context(onClose[19]);
        obj = { reason: current };
        obj.trackWithMetadata(ref1.APP_LAUNCHER_EXPANDED, obj);
        ref1.current = undefined;
      }
    }
  }, items4);
  const callback4 = importAllResult.useCallback(() => {
    if (!ref2.current) {
      let obj = context(onClose[19]);
      obj = {};
      const _Date = Date;
      obj.time_spent = Date.now() - ref.current;
      obj.reason = ref.current;
      obj.trackWithMetadata(ref1.APP_LAUNCHER_CLOSED, obj);
    }
    ref2.current = true;
    chatInputRef(onClose[14])(minimum.USER_DISMISS);
    if (null != onClose) {
      onClose();
    }
    if (obj3.isMetaQuest()) {
      let current = chatInputRef.current;
      if (null != current) {
        current.closeCustomKeyboard();
      }
    }
    if (isScreenReaderEnabled) {
      obj = { type: context(onClose[22]).KeyboardTypes.SYSTEM };
      context(onClose[21]).setKeyboardType(obj);
      current = undefined;
      if (null != ref3) {
        current = ref3.current;
      }
      if (null != current) {
        const obj1 = { ref: ref3 };
        const result = context(onClose[23]).setAccessibilityFocus(obj1);
        const obj6 = context(onClose[23]);
      }
      const obj4 = context(onClose[21]);
    }
  }, items5);
  obj1 = { ref: ref2, animationConfigs: closure_7, animatedIndex: sharedValue, animatedPosition: sharedValue1, chatInputRef };
  const obj6 = arg1(dependencyMap[13]);
  const tmp18 = closure_8;
  if (!isScreenReaderEnabled) {
    isScreenReaderEnabled = arg1(dependencyMap[20]).isMetaQuest();
    const obj9 = arg1(dependencyMap[20]);
  }
  obj1.forceMaxHeight = isScreenReaderEnabled;
  const tmp19 = importDefault(dependencyMap[24]);
  obj1.enablePanDownToClose = arg1(dependencyMap[20]).isMetaQuest();
  obj1.onAnimate = callback3;
  obj1.onClose = callback4;
  obj1.transitionState = transitionState;
  obj1.backdropComponent = callback2;
  let tmp22 = onboardingNavigatorContent;
  if (!onboardingNavigatorContent) {
    tmp22 = entrypoint === arg1(dependencyMap[25]).AppLauncherEntrypoint.VOICE;
  }
  obj1.disableHeaderRoundingAnimation = tmp22;
  let onboardingRoundingView = onboardingNavigatorContent;
  if (onboardingNavigatorContent) {
    onboardingRoundingView = tmp4.onboardingRoundingView;
  }
  obj1.roundingViewStyle = onboardingRoundingView;
  let onboardingHeader = onboardingNavigatorContent;
  if (onboardingNavigatorContent) {
    onboardingHeader = tmp4.onboardingHeader;
  }
  obj1.headerStyle = onboardingHeader;
  obj1.isAppsKeyboard = true;
  obj1.rendersHandle = entrypoint !== arg1(dependencyMap[25]).AppLauncherEntrypoint.VOICE;
  obj1.width = defaultAppLauncherWidth;
  const obj2 = { style: { position: "relative", height: tmp5.maximum } };
  obj3 = { bottomSheetExpandReasonRef: ref1, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, context, chatInputRef };
  const obj10 = arg1(dependencyMap[20]);
  const tmp26 = View;
  if (onboardingNavigatorContent) {
    onboardingNavigatorContent = tmp4.onboardingNavigatorContent;
  }
  obj3.contentStyle = onboardingNavigatorContent;
  obj3.entrypoint = entrypoint;
  obj3.expandBottomSheet = callback;
  obj3.keyboardCloseReasonRef = ref;
  obj3.width = defaultAppLauncherWidth;
  obj2.children = closure_8(importDefault(dependencyMap[26]), obj3);
  obj1.children = closure_8(tmp26, obj2);
  return tmp18(tmp19, obj1);
});
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/app_launcher/native/AppLauncherKeyboard.tsx");

export default memoResult;
export function setAppLauncherA11yFocusReturnRef(current2) {
  let closure_12 = current2;
}
