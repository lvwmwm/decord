// Module ID: 11517
// Function ID: 11518
// Name: AppLauncherKeyboard
// Dependencies: [19, 17, 1074, 2042, 11518, 21, 4836, 576, 10786, 10785, 10898, 5266, 11519, 4566, 11528, 4540, 6045, 11529, 1364, 5016, 1610, 1483, 1611, 5275, 11561, 8712, 11564, 2]
// Exports: setAppLauncherA11yFocusReturnRef

// Module 11517 (AppLauncherKeyboard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1483 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import KeyboardTypes from "KeyboardTypes" /* 1611 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import react_native2 from "react-native" /* 5275 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import PortalKeyboardConstants from "PortalKeyboardConstants" /* 11518 */;
import completeAppLauncherOnboardingDefault from "completeAppLauncherOnboarding" /* 11528 */;
import AppLauncherOnboardingLayerDefault from "AppLauncherOnboardingLayer" /* 11529 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let animationConfigs;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let tmp4;
const PlatformUtils = tmp4(1364);
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
let closure_13 = { code: "function AppLauncherKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
let closure_14 = { code: "function AppLauncherKeyboardTsx2(i,prev){const{runOnJS,handleOnboardingParamChange,showOnboarding}=this.__closure;if(i===prev)return;runOnJS(handleOnboardingParamChange)(i,showOnboarding);}" };
const memoResult = react.memo(function AppLauncherKeyboard(context) {
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
  let obj = context(onClose[8]);
  const defaultAppLauncherWidth = obj.useDefaultAppLauncherWidth(entrypoint);
  const ref = transitionState.useRef(context(onClose[9]).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = transitionState.useRef(undefined);
  const tmp6 = onboardingNavigatorContent();
  const tmp7 = chatInputRef;
  const tmp8 = chatInputRef(onClose[10])();
  const minimum = tmp8.minimum;
  const maximum = tmp8.maximum;
  animationConfigs = transitionState.useRef(Date.now());
  transitionState.useRef(false);
  let obj2 = context(onClose[11]);
  let isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = { channelId: context.channel.id };
  const visibleContent = chatInputRef(onClose[12])(obj3).visibleContent;
  onboardingNavigatorContent = null != visibleContent;
  let obj4 = context(onClose[13]);
  const sharedValue = obj4.useSharedValue(-1);
  let obj5 = context(onClose[13]);
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
      chatInputRef(onClose[14])(minimum.TAKE_ACTION);
    }
  }, []);
  const items1 = [onboardingNavigatorContent, sharedValue, callback1];
  const effect = transitionState.useEffect(() => {
    callback1(sharedValue.get(), onboardingNavigatorContent);
  }, items1);
  const obj6 = context(onClose[13]);
  class O {
    constructor() {
      return sharedValue.get();
    }
  }
  O.__closure = { bottomSheetIndex: sharedValue };
  O.__workletHash = 15587451723262;
  O.__initData = ref2;
  const fn = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback1)(arg0, onboardingNavigatorContent);
    }
  };
  fn.__closure = { runOnJS: context(onClose[13]).runOnJS, handleOnboardingParamChange: callback1, showOnboarding: onboardingNavigatorContent };
  fn.__workletHash = 14003176039781;
  fn.__initData = callback1;
  ({ runOnJS: context(onClose[13]).runOnJS, handleOnboardingParamChange: callback1, showOnboarding: onboardingNavigatorContent });
  const animatedReaction = obj6.useAnimatedReaction(O, fn);
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
          current = tmp7(10785).AppLauncherBottomSheetExpandReason.KEYBOARD;
        } else if (arg2 === BottomSheetModal.ANIMATION_SOURCE.GESTURE) {
          current = tmp7(10785).AppLauncherBottomSheetExpandReason.GESTURE;
        } else if (arg2 !== BottomSheetModal.ANIMATION_SOURCE.USER) {
          current = tmp7(10785).AppLauncherBottomSheetExpandReason.OTHER;
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
  const obj8 = { ref: ref2, animationConfigs, animatedIndex: sharedValue, animatedPosition: sharedValue1, chatInputRef, forceMaxHeight: isScreenReaderEnabled, enablePanDownToClose: tmpResult2.isMetaQuest(), onAnimate: callback3, onClose: callback4, transitionState, backdropComponent: callback2, disableHeaderRoundingAnimation: tmp23, roundingViewStyle: onboardingNavigatorContent && tmp6.onboardingRoundingView, headerStyle: onboardingNavigatorContent && tmp6.onboardingHeader, isAppsKeyboard: true, rendersHandle: entrypoint !== tmp(tmp2[25]).AppLauncherEntrypoint.VOICE, width: defaultAppLauncherWidth, children: ref2(tmp24, obj9) };
  const tmp22 = chatInputRef(onClose[24]);
  if (!isScreenReaderEnabled) {
    const tmpResult = tmp(tmp2[20]);
    isScreenReaderEnabled = tmpResult.isMetaQuest();
  }
  tmpResult2 = tmp(tmp2[20]);
  tmp23 = onboardingNavigatorContent || entrypoint === tmp(tmp2[25]).AppLauncherEntrypoint.VOICE;
  obj9 = { style: { position: "relative", height: maximum }, children: ref2(tmp7Result, obj10) };
  obj10 = { bottomSheetExpandReasonRef: ref1, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, context, chatInputRef, contentStyle: onboardingNavigatorContent, entrypoint, expandBottomSheet: callback, keyboardCloseReasonRef: ref, width: defaultAppLauncherWidth };
  tmp7Result = tmp7(tmp2[26]);
  tmp24 = ref;
  if (onboardingNavigatorContent) {
    onboardingNavigatorContent = tmp6.onboardingNavigatorContent;
  }
  return ref2(tmp22, obj8);
});
let result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherKeyboard.tsx");

export default memoResult;
export function setAppLauncherA11yFocusReturnRef(current2) {
  let c12 = current2;
}
