// Module ID: 11341
// Function ID: 88188
// Name: ChatInputActions
// Dependencies: [57, 31, 11105, 653, 33, 4130, 689, 4547, 1324, 8829, 3834, 5784, 3996, 1555, 11342, 4539, 4687, 1212, 9671, 4644, 9655, 11343, 9075, 9657, 675, 3991, 4131, 9302, 11345, 3838, 11346, 11347, 11351, 2]

// Module 11341 (ChatInputActions)
import _slicedToArray from "_slicedToArray";
import importAllResult from "module_11347";
import TextAreaCta from "TextAreaCta";
import { AnalyticEvents } from "ME";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ ChatInputActionType: closure_5, ChatInputOmniButtonActionType: closure_6 } = TextAreaCta);
({ jsx: closure_8, Fragment: closure_9 } = jsxProd);
const CHAT_INPUT_TIMING_CONFIG = TextAreaCta.CHAT_INPUT_TIMING_CONFIG;
let obj = { actions: { flexDirection: "row", alignItems: "center" } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_SECONDARY_BG };
obj.themedChatInput = obj;
_createForOfIteratorHelperLoose = { maxHeight: require("getButtonPadding").SMALL_BUTTON_HEIGHT + require("getButtonPadding").SMALL_BUTTON_PADDING };
obj.buttonWrapper = _createForOfIteratorHelperLoose;
obj.activeBrand = { tintColor: require("_createForOfIteratorHelperLoose").colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_12 = { code: "function ChatInputActionsTsx1(){const{chatInputFloating,withTiming,showPhotosOnly,actionButtonWidth,actionButtonsWidth,timingConfig}=this.__closure;if(chatInputFloating){return{opacity:1};}return{overflow:'hidden',opacity:1,width:withTiming(showPhotosOnly?actionButtonWidth:actionButtonsWidth,timingConfig)};}" };
const forwardRefResult = importAllResult.forwardRef((canStartThreads) => {
  let canUpload;
  let closure_16;
  let closure_4;
  let keyboardType;
  let onPressAction;
  let tmp9;
  canStartThreads = canStartThreads.canStartThreads;
  const channel = canStartThreads.channel;
  const isAppLauncherEnabled = canStartThreads.isAppLauncherEnabled;
  ({ keyboardType, onPressAction } = canStartThreads);
  ({ shouldPhotosButtonBeDisabled: closure_4, canUpload } = canStartThreads);
  const canPostPolls = canStartThreads.canPostPolls;
  const onPollsPress = canStartThreads.onPollsPress;
  const onAttachPress = canStartThreads.onAttachPress;
  const photosButtonExternalRef = canStartThreads.photosButtonExternalRef;
  let c22;
  let c23;
  let sum1;
  let obj = canStartThreads(isAppLauncherEnabled[8]);
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "ChatInputActions" });
  const enabled = mobileVisualRefreshConfig.enabled;
  const chatInputFloating = mobileVisualRefreshConfig.chatInputFloating;
  let tmp2 = chatInputFloating();
  let closure_12 = tmp2;
  let obj1 = canStartThreads(isAppLauncherEnabled[9]);
  let closure_13 = obj1.useClientThemesOverride(tmp2.themedChatInput);
  let obj2 = canStartThreads(isAppLauncherEnabled[10]);
  const token = obj2.useToken(channel(isAppLauncherEnabled[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj3 = canStartThreads(isAppLauncherEnabled[10]);
  const token1 = obj3.useToken(channel(isAppLauncherEnabled[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj4 = canStartThreads(isAppLauncherEnabled[10]);
  const token2 = obj4.useToken(channel(isAppLauncherEnabled[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP);
  const sum = token + 2 * token1;
  let keyboardWillOpen = channel(isAppLauncherEnabled[11])({ includeCustomKeyboard: true });
  let obj5 = canStartThreads(isAppLauncherEnabled[12]);
  const tmp7 = channel(isAppLauncherEnabled[14])(channel);
  let closure_15 = tmp7;
  [tmp9, closure_16] = onPressAction(importAllResult.useState(false), 2);
  const tmp10 = onPressAction(importAllResult.useState(true), 2);
  let closure_17 = tmp10[1];
  let closure_18 = importAllResult.useRef(null);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, importAllResult.useMemo(() => {
    let closure_0 = {
      onDismissActions(arg0) {
        outer1_16(arg0);
        outer1_17(false);
      },
      onShowActions(arg0) {
        outer1_16(arg0);
        outer1_17(true);
      },
      focusPhotosButton() {
        let obj = canStartThreads(isAppLauncherEnabled[15]);
        obj = { ref: outer1_18, delay: 0 };
        const result = obj.setAccessibilityFocus(obj);
      }
    };
    return {
      showActionsImperativeApi() {
        return closure_0;
      }
    };
  }, []).showActionsImperativeApi);
  let items = [enabled, canPostPolls, canStartThreads, isAppLauncherEnabled, canUpload, tmp7, onPressAction, onPollsPress, onAttachPress];
  let closure_19 = importAllResult.useMemo(() => {
    const items = [];
    if (enabled) {
      let result = canUpload;
      if (canUpload) {
        result = !closure_15;
      }
      if (result) {
        let obj = canStartThreads(isAppLauncherEnabled[16]);
        result = obj.isImageCaptureIntentSupported();
      }
      if (result) {
        obj = {};
        const intl = canStartThreads(isAppLauncherEnabled[17]).intl;
        obj.label = intl.string(canStartThreads(isAppLauncherEnabled[17]).t.uje3P9);
        obj.IconComponent = canStartThreads(isAppLauncherEnabled[18]).CameraIcon;
        obj.action = function action() {
          return outer1_3({}, canUpload.CAMERA);
        };
        items.push(obj);
      }
      if (canUpload) {
        obj = {};
        const intl2 = canStartThreads(isAppLauncherEnabled[17]).intl;
        obj.label = intl2.string(canStartThreads(isAppLauncherEnabled[17]).t.Zmm6dN);
        obj.IconComponent = canStartThreads(isAppLauncherEnabled[19]).ImageIcon;
        obj.action = function action() {
          return outer1_3({}, canUpload.ALL_PHOTOS);
        };
        items.push(obj);
      }
      if (canPostPolls) {
        const obj1 = {};
        const intl3 = canStartThreads(isAppLauncherEnabled[17]).intl;
        obj1.label = intl3.string(canStartThreads(isAppLauncherEnabled[17]).t.RgIi2B);
        obj1.IconComponent = canStartThreads(isAppLauncherEnabled[20]).PollsIcon;
        obj1.action = onPollsPress;
        items.push(obj1);
      }
      if (canStartThreads) {
        const obj2 = {};
        const intl4 = canStartThreads(isAppLauncherEnabled[17]).intl;
        obj2.label = intl4.string(canStartThreads(isAppLauncherEnabled[17]).t["7Xm5QI"]);
        obj2.IconComponent = canStartThreads(isAppLauncherEnabled[21]).ThreadPlusIcon;
        obj2.action = function action() {
          return outer1_3({}, canUpload.THREAD);
        };
        items.push(obj2);
      }
      if (isAppLauncherEnabled) {
        const obj3 = {};
        const intl5 = canStartThreads(isAppLauncherEnabled[17]).intl;
        obj3.label = intl5.string(canStartThreads(isAppLauncherEnabled[17]).t.PHjkRE);
        obj3.IconComponent = canStartThreads(isAppLauncherEnabled[22]).AppsIcon;
        obj3.action = function action() {
          return outer1_3({}, canUpload.APPS);
        };
        items.push(obj3);
      }
      if (canUpload) {
        const obj4 = {};
        const intl6 = canStartThreads(isAppLauncherEnabled[17]).intl;
        obj4.label = intl6.string(canStartThreads(isAppLauncherEnabled[17]).t["8Hvr3+"]);
        obj4.IconComponent = canStartThreads(isAppLauncherEnabled[23]).AttachmentIcon;
        obj4.action = onAttachPress;
        items.push(obj4);
      }
      return items;
    } else {
      return items;
    }
  }, items);
  let closure_20 = importAllResult.useCallback(() => {
    let obj = channel(isAppLauncherEnabled[24]);
    obj = { type: canPostPolls.OPENED };
    obj.track(onPollsPress.CHAT_INPUT_OMNI_BUTTON_ACTION, obj);
  }, []);
  let closure_21 = importAllResult.useCallback((arg0) => {
    if (arg0) {
      let obj = channel(isAppLauncherEnabled[24]);
      obj = { type: canPostPolls.CLOSED };
      obj.track(onPollsPress.CHAT_INPUT_OMNI_BUTTON_ACTION, obj);
    }
  }, []);
  let items1 = [];
  obj = { type: canUpload.PHOTOS };
  let tmp12 = keyboardType === canStartThreads(isAppLauncherEnabled[13]).KeyboardTypes.MEDIA;
  if (!tmp12) {
    let tmp13 = chatInputFloating;
    if (chatInputFloating) {
      tmp13 = keyboardType === canStartThreads(isAppLauncherEnabled[13]).KeyboardTypes.APP_LAUNCHER;
    }
    tmp12 = tmp13;
  }
  obj.active = tmp12;
  items1.push(obj);
  if (tmp17) {
    obj = { type: canUpload.APPS, active: keyboardType === canStartThreads(isAppLauncherEnabled[13]).KeyboardTypes.APP_LAUNCHER };
    items1.push(obj);
  }
  let tmp22 = true === canStartThreads;
  if (tmp22) {
    if (!keyboardWillOpen) {
      keyboardWillOpen = obj5.useKeyboardContextForType(canStartThreads(isAppLauncherEnabled[13]).KeyboardTypes.SYSTEM).keyboardWillOpen;
    }
    if (!keyboardWillOpen) {
      keyboardWillOpen = tmp9;
    }
    tmp22 = keyboardWillOpen;
  }
  c22 = tmp22;
  if (!chatInputFloating) {
    if (tmp22) {
      obj1 = { type: canUpload.THREAD };
      items1.push(obj1);
    } else if (canStartThreads.shouldShowGiftButton) {
      obj2 = { type: canUpload.NITRO_GIFT };
      items1.push(obj2);
    }
  }
  c23 = tmp27;
  let num = 0;
  if (items1.length > 1) {
    num = (items1.length - 1) * token2;
  }
  sum1 = items1.length * sum + num;
  tmp17 = !chatInputFloating && isAppLauncherEnabled;
  const tmp8 = onPressAction(importAllResult.useState(false), 2);
  function it() {
    if (chatInputFloating) {
      let obj = { opacity: 1 };
    } else {
      obj = { overflow: "hidden", opacity: 1, width: canStartThreads(isAppLauncherEnabled[26]).withTiming(c23 ? closure_14 : sum1, enabled) };
      const obj2 = canStartThreads(isAppLauncherEnabled[26]);
    }
    return obj;
  }
  obj3 = { chatInputFloating, withTiming: canStartThreads(isAppLauncherEnabled[26]).withTiming, showPhotosOnly: tmp27, actionButtonWidth: sum, actionButtonsWidth: sum1, timingConfig: enabled };
  it.__closure = obj3;
  it.__workletHash = 11213591113353;
  it.__initData = closure_12;
  obj4 = {};
  const animatedStyle = canStartThreads(isAppLauncherEnabled[25]).useAnimatedStyle(it);
  obj5 = {};
  const items2 = [tmp2.actions, animatedStyle, ];
  let obj6 = { gap: token2 };
  let tmp32;
  if (!chatInputFloating) {
    tmp32 = sum1;
  }
  obj6.maxWidth = tmp32;
  items2[2] = obj6;
  obj5.style = items2;
  obj5.children = items1.map((arg0, arg1) => {
    let active;
    let type;
    ({ type, active } = arg0);
    if (canUpload.PHOTOS === type) {
      if (enabled) {
        if (length.length > 0) {
          let obj = {
            items: length,
            triggerOnLongPress: true,
            align: "above",
            onOpen: closure_20,
            onClose: closure_21,
            children(arg0) {
                    let accessibilityActions;
                    let onAccessibilityAction;
                    let ref;
                    ({ ref, accessibilityActions, onAccessibilityAction } = arg0);
                    let obj = {};
                    const tmp = onAttachPress;
                    const tmp2 = channel(isAppLauncherEnabled[28]);
                    const items = [ref, outer1_18, outer1_9];
                    const items1 = [...items.filter(Boolean)];
                    obj.ref = canStartThreads(isAppLauncherEnabled[29]).mergeRefs.apply(items1);
                    const intl = canStartThreads(isAppLauncherEnabled[17]).intl;
                    obj.accessibilityLabel = intl.string(canStartThreads(isAppLauncherEnabled[17]).t.aDZSuz);
                    const intl2 = canStartThreads(isAppLauncherEnabled[17]).intl;
                    obj.accessibilityHint = intl2.string(canStartThreads(isAppLauncherEnabled[17]).t.o7j1jA);
                    obj = { expanded: active };
                    obj.accessibilityState = obj;
                    obj.accessibilityActions = accessibilityActions;
                    obj.onAccessibilityAction = onAccessibilityAction;
                    obj.active = active;
                    obj.activeIconStyle = outer1_12.activeBrand;
                    obj.disabled = outer1_4;
                    obj.IconComponent = canStartThreads(isAppLauncherEnabled[30]).MediaKeyboardButtonIcon;
                    obj.onPress = function onPress(arg0) {
                      return outer2_3(arg0, canUpload.PHOTOS);
                    };
                    let tmp4;
                    if (!outer1_11) {
                      tmp4 = outer1_13;
                    }
                    obj.style = tmp4;
                    return tmp(tmp2, obj);
                  }
          };
          let tmp31Result = onAttachPress(canStartThreads(isAppLauncherEnabled[27]).ContextMenu, obj, arg1);
        }
        return tmp31Result;
      }
      obj = {};
      if (null != photosButtonExternalRef) {
        let mergeRefsResult = canStartThreads(isAppLauncherEnabled[29]).mergeRefs(closure_18, photosButtonExternalRef);
        const obj6 = canStartThreads(isAppLauncherEnabled[29]);
      } else {
        mergeRefsResult = closure_18;
      }
      obj.ref = mergeRefsResult;
      let intl2 = canStartThreads(isAppLauncherEnabled[17]).intl;
      obj.accessibilityLabel = intl2.string(canStartThreads(isAppLauncherEnabled[17]).t.aDZSuz);
      const intl3 = canStartThreads(isAppLauncherEnabled[17]).intl;
      obj.accessibilityHint = intl3.string(canStartThreads(isAppLauncherEnabled[17]).t.o7j1jA);
      const obj1 = { expanded: active };
      obj.accessibilityState = obj1;
      obj.active = active;
      obj.activeIconStyle = tmp2.activeBrand;
      obj.disabled = closure_4;
      obj.IconComponent = canStartThreads(isAppLauncherEnabled[30]).MediaKeyboardButtonIcon;
      obj.onPress = function onPress(arg0) {
        return outer1_3(arg0, canUpload.PHOTOS);
      };
      let tmp47;
      if (!chatInputFloating) {
        tmp47 = closure_13;
      }
      obj.style = tmp47;
      tmp31Result = onAttachPress(channel(isAppLauncherEnabled[28]), obj, arg1);
      const tmp31 = onAttachPress;
      const tmp34 = channel(isAppLauncherEnabled[28]);
    } else if (canUpload.APPS === type) {
      const obj2 = { accessible: !c23, active, channel, onPress: onPressAction, styleButton: closure_13, styleActiveIcon: tmp2.activeBrand };
      return onAttachPress(channel(isAppLauncherEnabled[31]), obj2, arg1);
    } else if (canUpload.ALL_PHOTOS === type) {
      const obj3 = {};
      let intl = canStartThreads(isAppLauncherEnabled[17]).intl;
      obj3.accessibilityLabel = intl.string(canStartThreads(isAppLauncherEnabled[17]).t.ZT24In);
      obj3.accessible = !c23;
      const obj4 = { expanded: active };
      obj3.accessibilityState = obj4;
      obj3.active = active;
      obj3.activeIconStyle = tmp2.activeBrand;
      obj3.disabled = !canUpload;
      obj3.IconComponent = canStartThreads(isAppLauncherEnabled[19]).ImageIcon;
      obj3.onPress = function onPress(arg0) {
        return outer1_3(arg0, canUpload.ALL_PHOTOS);
      };
      obj3.style = closure_13;
      return onAttachPress(channel(isAppLauncherEnabled[28]), obj3, arg1);
    } else {
      obj = { accessible: !c23, canStartThreads: active, channel, onPress: onPressAction, styleButtonWrapper: onAttachPress.buttonWrapper, styleButton: closure_13, shouldShowThread: c22 };
      return onAttachPress(channel(isAppLauncherEnabled[32]), obj, "gift-or-thread");
    }
  });
  obj4.children = onAttachPress(channel(isAppLauncherEnabled[25]).View, obj5);
  return onAttachPress(photosButtonExternalRef, obj4);
});
forwardRefResult.displayName = "ChatInputActions";
let obj2 = { tintColor: require("_createForOfIteratorHelperLoose").colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("TextAreaCta").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActions.tsx");

export default memoResult;
