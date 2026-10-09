// Module ID: 11664
// Function ID: 11665
// Name: AppLauncherKeyboard
// Dependencies: [19, 17, 1085, 2061, 11665, 21, 5091, 587, 558, 576, 10589, 10587, 10341, 5361, 11666, 4811, 11676, 4788, 6305, 11677, 1382, 5106, 1628, 1501, 1629, 5370, 10588, 11709, 11858, 2]
// Exports: setAppLauncherA11yFocusReturnRef

// Module 11664 (AppLauncherKeyboard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1501 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import KeyboardTypes from "KeyboardTypes" /* 1629 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2061 */;
import native from "native" /* 4788 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5106 */;
import react_native2 from "react-native" /* 5370 */;
import BottomSheetModal from "BottomSheetModal" /* 6305 */;
import PortalKeyboardConstants from "PortalKeyboardConstants" /* 11665 */;
import completeAppLauncherOnboardingDefault from "completeAppLauncherOnboarding" /* 11676 */;
import AppLauncherOnboardingLayerDefault from "AppLauncherOnboardingLayer" /* 11677 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let animationConfigs;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let tmp4;
const PlatformUtils = tmp4(1382);
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const KEYBOARD_ANIMATION_CONFIG = PortalKeyboardConstants.KEYBOARD_ANIMATION_CONFIG;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { onboardingRoundingView: obj2, onboardingHeader: obj3, onboardingNavigatorContent: obj4 };
obj2 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { borderWidth: 2, borderBottomWidth: 0, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderBottomColor: "transparent", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj4 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
let closure_11 = createStyles(obj);
let c12 = null;
let ref = { code: "function AppLauncherKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
let closure_14 = { code: "function AppLauncherKeyboardTsx2(i,prev){const{runOnJS,handleOnboardingParamChange,showOnboarding}=this.__closure;if(i===prev){return;}runOnJS(handleOnboardingParamChange)(i,showOnboarding);}" };
const __initData = { code: "function AppLauncherKeyboardTsx3(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
const __initData2 = { code: "function AppLauncherKeyboardTsx4(i,prev){const{runOnJS,handleOnboardingParamChange,showOnboarding}=this.__closure;if(i===prev)return;runOnJS(handleOnboardingParamChange)(i,showOnboarding);}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherKeyboard(context) {
  let first;
  let items1;
  let maximum;
  let minimum;
  let onClose;
  let ref3;
  let tmp13;
  let tmp = context;
  let tmp2 = onClose;
  let obj = context(onClose[9]);
  const cResult = obj.c(52);
  context = context.context;
  const chatInputRef = context.chatInputRef;
  onClose = context.onClose;
  const transitionState = context.transitionState;
  const entrypoint = context.entrypoint;
  let obj2 = context(onClose[10]);
  const defaultAppLauncherWidth = obj2.useDefaultAppLauncherWidth(entrypoint);
  let obj3 = transitionState;
  ref = transitionState.useRef(context(onClose[11]).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = transitionState.useRef(undefined);
  const tmp7 = closure_11();
  let tmp9 = chatInputRef(onClose[12])();
  ({ maximum, minimum } = tmp9);
  const tmp8 = chatInputRef;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let _Date = Date;
    const timestamp = Date.now();
    let num = 0;
    cResult[0] = timestamp;
    first = timestamp;
  } else {
    first = cResult[0];
  }
  ref = obj3.useRef(first);
  let ref2 = obj3.useRef(false);
  const tmpResult = tmp(tmp2[13]);
  const isScreenReaderEnabled = tmpResult.useIsScreenReaderEnabled();
  if (cResult[1] !== context.channel.id) {
    let obj4 = { channelId: context.channel.id };
    cResult[1] = context.channel.id;
    cResult[2] = obj4;
    tmp13 = obj4;
  } else {
    tmp13 = cResult[2];
  }
  const visibleContent = tmp8(tmp2[14])(tmp13).visibleContent;
  let tmp14 = null != visibleContent;
  closure_11 = tmp14;
  const tmpResult4 = tmp(tmp2[15]);
  const sharedValue = tmpResult4.useSharedValue(-1);
  const tmpResult5 = tmp(tmp2[15]);
  const sharedValue1 = tmpResult5.useSharedValue(0);
  ref2 = obj3.useRef(null);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        if (ref2 != null) {
          const current = ref2.current;
          if (current != null) {
            current.expandActionSheet();
          }
        }
      }
    }
    cResult[3] = P;
  } else {
    class P {
      constructor() {
        if (ref2 != null) {
          const current = ref2.current;
          if (current != null) {
            current.expandActionSheet();
          }
        }
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(arg0, arg1) {
        const tmp = arg1 && 1 === arg0;
        if (tmp) {
          chatInputRef(onClose[16])(minimum.TAKE_ACTION);
        }
      }
    }
    cResult[4] = W;
  } else {
    class W {
      constructor(arg0, arg1) {
        const tmp = arg1 && 1 === arg0;
        if (tmp) {
          chatInputRef(onClose[16])(minimum.TAKE_ACTION);
        }
      }
    }
  }
  W = tmp19;
  if (cResult[5] === sharedValue) {
    let tmp26;
    let tmp25;
    class W {
      constructor(arg0, arg1) {
        const tmp = arg1 && 1 === arg0;
        if (tmp) {
          chatInputRef(onClose[16])(minimum.TAKE_ACTION);
        }
      }
    }
    const effect = obj3.useEffect(F, items1);
    const fn = function j() {
      return sharedValue.get();
    };
    let obj5 = { bottomSheetIndex: sharedValue };
    fn.__closure = obj5;
    fn.__workletHash = 15587451723262;
    fn.__initData = ref2;
    const tmpResult6 = tmp(tmp2[15]);
    class Q {
      constructor(arg0, arg1) {
        if (arg0 !== arg1) {
          const obj = ReanimatedRexport;
          obj.runOnJS(W)(arg0, closure_11);
        }
      }
    }
    const useAnimatedReaction = tmpResult6.useAnimatedReaction;
    Q.__closure = { runOnJS: tmp(tmp2[15]).runOnJS, handleOnboardingParamChange: tmp19, showOnboarding: tmp14 };
    Q.__workletHash = 12446570101635;
    Q.__initData = W;
    const obj6 = { runOnJS: tmp(tmp2[15]).runOnJS, handleOnboardingParamChange: tmp19, showOnboarding: tmp14 };
    const animatedReaction = useAnimatedReaction(fn, Q);
    if (cResult[9] !== transitionState) {
      class X {
        constructor() {
          if (transitionState === native.TransitionStates.YEETED) {
            completeAppLauncherOnboardingDefault(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      const items = [transitionState];
      cResult[9] = transitionState;
      cResult[10] = X;
      cResult[11] = items;
      tmp26 = items;
      tmp25 = X;
    } else {
      class X {
        constructor() {
          if (transitionState === native.TransitionStates.YEETED) {
            completeAppLauncherOnboardingDefault(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      tmp26 = cResult[11];
    }
    const layoutEffect = obj3.useLayoutEffect(tmp25, tmp26);
    if (cResult[12] === visibleContent) {
      class X {
        constructor() {
          if (transitionState === native.TransitionStates.YEETED) {
            completeAppLauncherOnboardingDefault(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
    }
    const fn2 = function z(arg0) {
      let num;
      const obj = { pressBehavior: "collapse" };
      const BottomSheetBackdrop = BottomSheetModal.BottomSheetBackdrop;
      const merged = Object.assign(arg0);
      const children = [metroImportAll(BottomSheetBackdrop, obj), ];
      let tmp3Result = closure_11;
      const tmp = authStore;
      const tmp2 = React4;
      const tmp3 = metroImportAll;
      if (tmp3Result) {
        const obj2 = { context, visibleContent, bottomOffset: num };
        num = 0;
        const tmp9 = AppLauncherOnboardingLayerDefault;
        const tmp4Result = PlatformUtils;
        if (!tmp4Result.isAndroid()) {
          num = minimum;
        }
        tmp3Result = tmp3(tmp9, obj2);
      }
      children[1] = tmp3Result;
      return tmp(tmp2, { children });
    };
    cResult[12] = visibleContent;
    cResult[13] = context;
    cResult[14] = minimum;
    cResult[15] = tmp14;
    cResult[16] = fn2;
  }
  class F {
    constructor() {
      W(sharedValue.get(), closure_11);
    }
  }
  items1 = [tmp14, sharedValue, tmp19];
  cResult[5] = sharedValue;
  cResult[6] = tmp14;
  cResult[7] = F;
  cResult[8] = items1;
}) : (function AppLauncherKeyboard(context) {
  let obj10;
  let obj9;
  let ref3;
  let tmp23;
  let tmp24;
  let tmp7Result;
  let tmpResult2;
  context = context.context;
  const chatInputRef = context.chatInputRef;
  const onClose = context.onClose;
  const transitionState = context.transitionState;
  const entrypoint = context.entrypoint;
  let onboardingNavigatorContent;
  let tmp = context;
  let tmp2 = onClose;
  let obj = context(onClose[10]);
  const defaultAppLauncherWidth = obj.useDefaultAppLauncherWidth(entrypoint);
  ref = transitionState.useRef(context(onClose[11]).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = transitionState.useRef(undefined);
  const tmp6 = onboardingNavigatorContent();
  const tmp7 = chatInputRef;
  const tmp8 = chatInputRef(onClose[12])();
  const minimum = tmp8.minimum;
  const maximum = tmp8.maximum;
  animationConfigs = transitionState.useRef(Date.now());
  transitionState.useRef(false);
  let obj2 = context(onClose[13]);
  let isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = { channelId: context.channel.id };
  const visibleContent = chatInputRef(onClose[14])(obj3).visibleContent;
  onboardingNavigatorContent = null != visibleContent;
  let obj4 = context(onClose[15]);
  const sharedValue = obj4.useSharedValue(-1);
  let obj5 = context(onClose[15]);
  const sharedValue1 = obj5.useSharedValue(0);
  const ref2 = transitionState.useRef(null);
  const items = [ref2];
  const callback = transitionState.useCallback(() => {
    if (ref2 != null) {
      const current = ref2.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  }, items);
  const callback1 = transitionState.useCallback((arg0, arg1) => {
    const tmp = arg1 && 1 === arg0;
    if (tmp) {
      chatInputRef(onClose[16])(minimum.TAKE_ACTION);
    }
  }, []);
  const items1 = [onboardingNavigatorContent, sharedValue, callback1];
  const effect = transitionState.useEffect(() => {
    callback1(sharedValue.get(), onboardingNavigatorContent);
  }, items1);
  const fn = function y() {
    return sharedValue.get();
  };
  fn.__closure = { bottomSheetIndex: sharedValue };
  fn.__workletHash = 9724245552188;
  fn.__initData = __initData;
  const obj6 = context(onClose[15]);
  class C {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(callback1)(arg0, onboardingNavigatorContent);
      }
    }
  }
  C.__closure = { runOnJS: context(onClose[15]).runOnJS, handleOnboardingParamChange: callback1, showOnboarding: onboardingNavigatorContent };
  C.__workletHash = 10242116658851;
  C.__initData = __initData2;
  ({ runOnJS: context(onClose[15]).runOnJS, handleOnboardingParamChange: callback1, showOnboarding: onboardingNavigatorContent });
  const animatedReaction = obj6.useAnimatedReaction(fn, C);
  const items2 = [transitionState];
  const layoutEffect = transitionState.useLayoutEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      completeAppLauncherOnboardingDefault(ContentDismissActionType.USER_DISMISS);
    }
  }, items2);
  const items3 = [visibleContent, context, minimum, onboardingNavigatorContent];
  const items4 = [ref1];
  const callback2 = transitionState.useCallback((arg0) => {
    let num;
    const obj = { pressBehavior: "collapse" };
    const BottomSheetBackdrop = BottomSheetModal.BottomSheetBackdrop;
    const merged = Object.assign(arg0);
    const children = [metroImportAll(BottomSheetBackdrop, obj), ];
    let tmp3Result = onboardingNavigatorContent;
    const tmp = authStore;
    const tmp2 = React4;
    const tmp3 = metroImportAll;
    if (tmp3Result) {
      const obj2 = { context, visibleContent, bottomOffset: num };
      num = 0;
      const tmp9 = AppLauncherOnboardingLayerDefault;
      const tmp4Result = PlatformUtils;
      if (!tmp4Result.isAndroid()) {
        num = minimum;
      }
      tmp3Result = tmp3(tmp9, obj2);
    }
    children[1] = tmp3Result;
    return tmp(tmp2, { children });
  }, items3);
  const items5 = [chatInputRef, isScreenReaderEnabled, ref, onClose];
  const callback3 = transitionState.useCallback((arg0, arg1, arg2) => {
    if (1 !== arg0) {
      if (1 === arg1) {
        let current;
        if (arg2 === BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
          current = tmp7(10587).AppLauncherBottomSheetExpandReason.KEYBOARD;
        } else if (arg2 === BottomSheetModal.ANIMATION_SOURCE.GESTURE) {
          current = tmp7(10587).AppLauncherBottomSheetExpandReason.GESTURE;
        } else if (arg2 !== BottomSheetModal.ANIMATION_SOURCE.USER) {
          current = tmp7(10587).AppLauncherBottomSheetExpandReason.OTHER;
        } else {
          current = ref1.current;
        }
        const obj = { reason: current };
        const tmp7Result = AppAnalyticsUtils;
        tmp7Result.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_EXPANDED, obj);
        ref1.current = undefined;
      }
    }
  }, items4);
  const callback4 = transitionState.useCallback(() => {
    const tmp = ref2;
    if (!ref2.current) {
      const _Date = Date;
      const obj = { time_spent: Date.now() - ref.current, reason: ref.current };
      const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
      const APP_LAUNCHER_CLOSED = AnalyticEvents.APP_LAUNCHER_CLOSED;
      AppAnalyticsUtils;
      trackWithMetadata(APP_LAUNCHER_CLOSED, obj);
    }
    tmp.current = true;
    completeAppLauncherOnboardingDefault(ContentDismissActionType.USER_DISMISS);
    if (onClose != null) {
      onClose();
    }
    const obj2 = MetaQuestUtils;
    if (obj2.isMetaQuest()) {
      const current = chatInputRef.current;
      if (current != null) {
        current.closeCustomKeyboard();
      }
    }
    const tmp14 = isScreenReaderEnabled;
    if (tmp14) {
      const obj3 = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
      const setKeyboardType = KeyboardUIStore.setKeyboardType;
      KeyboardUIStore;
      setKeyboardType(obj3);
      let current1;
      if (ref3 != null) {
        current1 = ref3.current;
      }
      if (null != current1) {
        const obj5 = { ref: ref3 };
        const obj4 = react_native2;
        const result = obj4.setAccessibilityFocus(obj5);
      }
    }
  }, items5);
  const obj8 = { ref: ref2, animationConfigs, animatedIndex: sharedValue, animatedPosition: sharedValue1, chatInputRef, forceMaxHeight: isScreenReaderEnabled, enablePanDownToClose: tmpResult2.isMetaQuest(), onAnimate: callback3, onClose: callback4, transitionState, backdropComponent: callback2, disableHeaderRoundingAnimation: tmp23, roundingViewStyle: onboardingNavigatorContent && tmp6.onboardingRoundingView, headerStyle: onboardingNavigatorContent && tmp6.onboardingHeader, isAppsKeyboard: true, rendersHandle: entrypoint !== tmp(tmp2[26]).AppLauncherEntrypoint.VOICE, width: defaultAppLauncherWidth, children: ref2(tmp24, obj9) };
  const tmp22 = chatInputRef(onClose[28]);
  if (!isScreenReaderEnabled) {
    const tmpResult = tmp(tmp2[22]);
    isScreenReaderEnabled = tmpResult.isMetaQuest();
  }
  tmpResult2 = tmp(tmp2[22]);
  tmp23 = onboardingNavigatorContent || entrypoint === tmp(tmp2[26]).AppLauncherEntrypoint.VOICE;
  obj9 = { style: { position: "relative", height: maximum }, children: ref2(tmp7Result, obj10) };
  obj10 = { bottomSheetExpandReasonRef: ref1, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, context, chatInputRef, contentStyle: onboardingNavigatorContent, entrypoint, expandBottomSheet: callback, keyboardCloseReasonRef: ref, width: defaultAppLauncherWidth };
  tmp7Result = tmp7(tmp2[27]);
  tmp24 = ref;
  if (onboardingNavigatorContent) {
    onboardingNavigatorContent = tmp6.onboardingNavigatorContent;
  }
  return ref2(tmp22, obj8);
}));
let result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherKeyboard.tsx");

export default memoResult;
export function setAppLauncherA11yFocusReturnRef(current2) {
  let c12 = current2;
}
