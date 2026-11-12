// Module ID: 13262
// Function ID: 13263
// Name: AppLauncherKeyboard
// Dependencies: [19, 17, 1072, 5089, 13263, 21, 5243, 575, 12484, 12482, 11948, 5505, 13264, 1652, 13273, 1705, 5314, 5507, 13274, 1377, 6004, 1624, 1497, 1625, 6268, 13305, 12483, 13308, 2]
// Exports: setAppLauncherA11yFocusReturnRef

// Module 13262 (AppLauncherKeyboard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1497 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5089 */;
import native from "native" /* 5314 */;
import BottomSheetModal from "BottomSheetModal" /* 5507 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 6004 */;
import react_native2 from "react-native" /* 6268 */;
import PortalKeyboardConstants from "PortalKeyboardConstants" /* 13263 */;
import completeAppLauncherOnboardingDefault from "completeAppLauncherOnboarding" /* 13273 */;
import AppLauncherOnboardingLayerDefault from "AppLauncherOnboardingLayer" /* 13274 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let animationConfigs;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let tmp4;
const PlatformUtils = tmp4(1377);
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
let closure_13 = { code: "(function AppLauncherKeyboardTsx1(){let[bottomSheetIndex]=this.__closure;return bottomSheetIndex.get();})" };
let closure_14 = { code: "(function AppLauncherKeyboardTsx2(i,prev){let[scheduleOnRN,handleOnboardingParamChange,showOnboarding]=this.__closure;if(i===prev)return;scheduleOnRN(handleOnboardingParamChange,i,showOnboarding);})" };
const memoResult = react.memo(function AppLauncherKeyboard(context) {
  let obj8;
  let obj9;
  let ref3;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp31;
  let tmp7Result2;
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
  let obj2 = transitionState;
  const ref = transitionState.useRef(context(onClose[9]).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = transitionState.useRef(undefined);
  const tmp6 = onboardingNavigatorContent();
  const tmp7 = chatInputRef;
  const tmp8 = chatInputRef(onClose[10])();
  const minimum = tmp8.minimum;
  const maximum = tmp8.maximum;
  animationConfigs = transitionState.useRef(Date.now());
  transitionState.useRef(false);
  let obj3 = context(onClose[11]);
  let isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  let obj4 = { channelId: context.channel.id };
  const visibleContent = chatInputRef(onClose[12])(obj4).visibleContent;
  onboardingNavigatorContent = null != visibleContent;
  let obj5 = context(onClose[13]);
  const sharedValue = obj5.useSharedValue(-1);
  const obj6 = context(onClose[13]);
  const sharedValue1 = obj6.useSharedValue(0);
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
  const items2 = [ref2, sharedValue];
  let c0;
  [tmp17, tmp18] = items2;
  const tmp16 = context(onClose[13]);
  class AppLauncherKeyboardTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items3 = [tmp18];
  AppLauncherKeyboardTsx1.__closure = items3;
  AppLauncherKeyboardTsx1.__workletHash = 14642690748519;
  AppLauncherKeyboardTsx1.__initData = tmp17;
  const items4 = [callback1, , , ];
  const useAnimatedReaction = tmp16.useAnimatedReaction;
  items4[1] = tmp(tmp2[15]).scheduleOnRN;
  items4[2] = callback1;
  items4[3] = onboardingNavigatorContent;
  c0 = undefined;
  let c1;
  let c2;
  [tmp19, tmp20, tmp21, tmp22] = items4;
  class AppLauncherKeyboardTsx2 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0, c2);
      }
    }
  }
  const items5 = [tmp20, tmp21, tmp22];
  AppLauncherKeyboardTsx2.__closure = items5;
  AppLauncherKeyboardTsx2.__workletHash = 335137472657;
  AppLauncherKeyboardTsx2.__initData = tmp19;
  const animatedReaction = useAnimatedReaction(AppLauncherKeyboardTsx1, AppLauncherKeyboardTsx2);
  const items6 = [transitionState];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      completeAppLauncherOnboardingDefault(ContentDismissActionType.USER_DISMISS);
    }
  }, items6);
  const items7 = [visibleContent, context, minimum, onboardingNavigatorContent];
  const items8 = [ref1];
  const callback2 = obj2.useCallback((arg0) => {
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
  }, items7);
  const items9 = [chatInputRef, isScreenReaderEnabled, ref, onClose];
  const callback3 = obj2.useCallback((arg0, arg1, arg2) => {
    if (1 !== arg0) {
      if (1 === arg1) {
        let current;
        if (arg2 === BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
          current = tmp7(12482).AppLauncherBottomSheetExpandReason.KEYBOARD;
        } else if (arg2 === BottomSheetModal.ANIMATION_SOURCE.GESTURE) {
          current = tmp7(12482).AppLauncherBottomSheetExpandReason.GESTURE;
        } else if (arg2 !== BottomSheetModal.ANIMATION_SOURCE.USER) {
          current = tmp7(12482).AppLauncherBottomSheetExpandReason.OTHER;
        } else {
          current = ref1.current;
        }
        const obj = { reason: current };
        const tmp7Result = AppAnalyticsUtils;
        tmp7Result.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_EXPANDED, obj);
        ref1.current = undefined;
      }
    }
  }, items8);
  const callback4 = obj2.useCallback(() => {
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
  }, items9);
  const obj7 = { ref: ref2, animationConfigs, animatedIndex: sharedValue, animatedPosition: sharedValue1, chatInputRef, forceMaxHeight: isScreenReaderEnabled, enablePanDownToClose: tmpResult2.isMetaQuest(), onAnimate: callback3, onClose: callback4, transitionState, backdropComponent: callback2, disableHeaderRoundingAnimation: onboardingNavigatorContent || entrypoint === tmp(tmp2[26]).AppLauncherEntrypoint.VOICE, roundingViewStyle: onboardingNavigatorContent && tmp6.onboardingRoundingView, headerStyle: onboardingNavigatorContent && tmp6.onboardingHeader, isAppsKeyboard: true, rendersHandle: entrypoint !== tmp(tmp2[26]).AppLauncherEntrypoint.VOICE, width: defaultAppLauncherWidth, children: ref2(tmp31, obj8) };
  let tmp7Result = tmp7(tmp2[25]);
  if (!isScreenReaderEnabled) {
    const tmpResult = tmp(tmp2[21]);
    isScreenReaderEnabled = tmpResult.isMetaQuest();
  }
  tmpResult2 = tmp(tmp2[21]);
  onboardingNavigatorContent || entrypoint === tmp(tmp2[26]).AppLauncherEntrypoint.VOICE;
  obj8 = { style: { position: "relative", height: maximum }, children: ref2(tmp7Result2, obj9) };
  obj9 = { bottomSheetExpandReasonRef: ref1, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, context, chatInputRef, contentStyle: onboardingNavigatorContent, entrypoint, expandBottomSheet: callback, keyboardCloseReasonRef: ref, width: defaultAppLauncherWidth };
  tmp31 = ref;
  tmp7Result2 = tmp7(tmp2[27]);
  if (onboardingNavigatorContent) {
    onboardingNavigatorContent = tmp6.onboardingNavigatorContent;
  }
  return ref2(tmp7Result, obj7);
});
let result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherKeyboard.tsx");

export default memoResult;
export function setAppLauncherA11yFocusReturnRef(current2) {
  c12 = current2;
}
