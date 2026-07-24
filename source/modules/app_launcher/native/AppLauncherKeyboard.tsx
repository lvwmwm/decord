// Module ID: 11184
// Function ID: 86988
// Name: setAppLauncherA11yFocusReturnRef
// Dependencies: [31, 27, 653, 1345, 11185, 33, 4130, 689, 10912, 10911, 11186, 4528, 11187, 3991, 11196, 4476, 5189, 11197, 477, 4324, 1553, 1454, 1555, 4539, 11229, 8226, 11231, 2]
// Exports: setAppLauncherA11yFocusReturnRef

// Module 11184 (setAppLauncherA11yFocusReturnRef)
import importAllResult from "result";
import { View } from "set";
import { AnalyticEvents } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { KEYBOARD_ANIMATION_CONFIG } from "KEYBOARD_ANIMATION_DURATION";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.onboardingRoundingView = obj;
_createForOfIteratorHelperLoose = { borderWidth: 2, borderBottomWidth: 0, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderBottomColor: "transparent", borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.onboardingHeader = _createForOfIteratorHelperLoose;
obj.onboardingNavigatorContent = { borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let c12 = null;
let closure_13 = { code: "function AppLauncherKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
let closure_14 = { code: "function AppLauncherKeyboardTsx2(i,prev){const{runOnJS,handleOnboardingParamChange,showOnboarding}=this.__closure;if(i===prev)return;runOnJS(handleOnboardingParamChange)(i,showOnboarding);}" };
let obj2 = { borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
const memoResult = importAllResult.memo(function AppLauncherKeyboard(context) {
  context = context.context;
  const chatInputRef = context.chatInputRef;
  const onClose = context.onClose;
  const transitionState = context.transitionState;
  const entrypoint = context.entrypoint;
  let obj = context(onClose[8]);
  const defaultAppLauncherWidth = obj.useDefaultAppLauncherWidth(entrypoint);
  const ref = transitionState.useRef(context(onClose[9]).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = transitionState.useRef(undefined);
  const tmp4 = onboardingNavigatorContent();
  let tmp5 = chatInputRef(onClose[10])();
  const minimum = tmp5.minimum;
  let closure_7 = transitionState.useRef(Date.now());
  let closure_8 = transitionState.useRef(false);
  let obj1 = context(onClose[11]);
  let isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  obj = { channelId: context.channel.id };
  const visibleContent = chatInputRef(onClose[12])(obj).visibleContent;
  onboardingNavigatorContent = null != visibleContent;
  let obj3 = context(onClose[13]);
  let sharedValue = obj3.useSharedValue(-1);
  const sharedValue1 = context(onClose[13]).useSharedValue(0);
  const ref2 = transitionState.useRef(null);
  let items = [ref2];
  const callback = transitionState.useCallback(() => {
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
  const callback1 = transitionState.useCallback((arg0, arg1) => {
    let tmp = arg1;
    if (arg1) {
      tmp = 1 === arg0;
    }
    if (tmp) {
      chatInputRef(onClose[14])(minimum.TAKE_ACTION);
    }
  }, []);
  const items1 = [onboardingNavigatorContent, sharedValue, callback1];
  const effect = transitionState.useEffect(() => {
    callback1(sharedValue.get(), onboardingNavigatorContent);
  }, items1);
  const obj5 = context(onClose[13]);
  class O {
    constructor() {
      return closure_12.get();
    }
  }
  O.__closure = { bottomSheetIndex: sharedValue };
  O.__workletHash = 15587451723262;
  O.__initData = ref2;
  const fn = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      context(onClose[13]).runOnJS(callback1)(arg0, onboardingNavigatorContent);
      const obj = context(onClose[13]);
    }
  };
  obj = { runOnJS: context(onClose[13]).runOnJS, handleOnboardingParamChange: callback1, showOnboarding: onboardingNavigatorContent };
  fn.__closure = obj;
  fn.__workletHash = 14003176039781;
  fn.__initData = callback1;
  const animatedReaction = context(onClose[13]).useAnimatedReaction(O, fn);
  const items2 = [transitionState];
  const layoutEffect = transitionState.useLayoutEffect(() => {
    if (transitionState === context(onClose[15]).TransitionStates.YEETED) {
      chatInputRef(onClose[14])(minimum.USER_DISMISS);
    }
  }, items2);
  const items3 = [visibleContent, context, minimum, onboardingNavigatorContent];
  const items4 = [ref1];
  const callback2 = transitionState.useCallback((arg0) => {
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
      obj4 = context(onClose[18]);
    }
    items[1] = tmp5Result;
    obj.children = items;
    return visibleContent(isScreenReaderEnabled, obj);
  }, items3);
  const items5 = [chatInputRef, isScreenReaderEnabled, ref, onClose];
  const callback3 = transitionState.useCallback((arg0, arg1, arg2) => {
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
  const callback4 = transitionState.useCallback(() => {
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
      if (null != sharedValue) {
        current = sharedValue.current;
      }
      if (null != current) {
        const obj1 = { ref: sharedValue };
        const result = context(onClose[23]).setAccessibilityFocus(obj1);
        sharedValue = null;
        const obj6 = context(onClose[23]);
      }
      const obj4 = context(onClose[21]);
    }
  }, items5);
  obj1 = { ref: ref2, animationConfigs: closure_7, animatedIndex: sharedValue, animatedPosition: sharedValue1, chatInputRef };
  let obj6 = context(onClose[13]);
  const tmp18 = closure_8;
  if (!isScreenReaderEnabled) {
    isScreenReaderEnabled = context(onClose[20]).isMetaQuest();
    const obj9 = context(onClose[20]);
  }
  obj1.forceMaxHeight = isScreenReaderEnabled;
  const tmp19 = chatInputRef(onClose[24]);
  obj1.enablePanDownToClose = context(onClose[20]).isMetaQuest();
  obj1.onAnimate = callback3;
  obj1.onClose = callback4;
  obj1.transitionState = transitionState;
  obj1.backdropComponent = callback2;
  let tmp22 = onboardingNavigatorContent;
  if (!onboardingNavigatorContent) {
    tmp22 = entrypoint === context(onClose[25]).AppLauncherEntrypoint.VOICE;
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
  obj1.rendersHandle = entrypoint !== context(onClose[25]).AppLauncherEntrypoint.VOICE;
  obj1.width = defaultAppLauncherWidth;
  const obj2 = { style: { position: "relative", height: tmp5.maximum } };
  obj3 = { bottomSheetExpandReasonRef: ref1, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, context, chatInputRef };
  const obj10 = context(onClose[20]);
  const tmp26 = ref;
  if (onboardingNavigatorContent) {
    onboardingNavigatorContent = tmp4.onboardingNavigatorContent;
  }
  obj3.contentStyle = onboardingNavigatorContent;
  obj3.entrypoint = entrypoint;
  obj3.expandBottomSheet = callback;
  obj3.keyboardCloseReasonRef = ref;
  obj3.width = defaultAppLauncherWidth;
  obj2.children = closure_8(chatInputRef(onClose[26]), obj3);
  obj1.children = closure_8(tmp26, obj2);
  return tmp18(tmp19, obj1);
});
let result = require("ME").fileFinishedImporting("modules/app_launcher/native/AppLauncherKeyboard.tsx");

export default memoResult;
export function setAppLauncherA11yFocusReturnRef(current2) {
  let closure_12 = current2;
}
