// Module ID: 11331
// Function ID: 88138
// Name: ChatInputActions
// Dependencies: []

// Module 11331 (ChatInputActions)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ ChatInputActionType: closure_5, ChatInputOmniButtonActionType: closure_6 } = tmp2);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
({ jsx: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
const CHAT_INPUT_TIMING_CONFIG = tmp2.CHAT_INPUT_TIMING_CONFIG;
let obj1 = arg1(dependencyMap[5]);
let obj = { actions: { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" } };
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.CARD_SECONDARY_BG };
obj.themedChatInput = obj;
obj1 = { maxHeight: arg1(dependencyMap[7]).SMALL_BUTTON_HEIGHT + arg1(dependencyMap[7]).SMALL_BUTTON_PADDING };
obj.buttonWrapper = obj1;
const tmp3 = arg1(dependencyMap[4]);
obj.activeBrand = { tintColor: importDefault(dependencyMap[6]).colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
let closure_11 = obj1.createStyles(obj);
let closure_12 = { code: "function ChatInputActionsTsx1(){const{chatInputFloating,withTiming,showPhotosOnly,actionButtonWidth,actionButtonsWidth,timingConfig}=this.__closure;if(chatInputFloating){return{opacity:1};}return{overflow:'hidden',opacity:1,width:withTiming(showPhotosOnly?actionButtonWidth:actionButtonsWidth,timingConfig)};}" };
const forwardRefResult = importAllResult.forwardRef((canStartThreads) => {
  let canUpload;
  let keyboardType;
  let onPressAction;
  let tmp9;
  canStartThreads = canStartThreads.canStartThreads;
  const arg1 = canStartThreads;
  const channel = canStartThreads.channel;
  const importDefault = channel;
  const isAppLauncherEnabled = canStartThreads.isAppLauncherEnabled;
  const dependencyMap = isAppLauncherEnabled;
  ({ keyboardType, onPressAction } = canStartThreads);
  const callback = onPressAction;
  ({ shouldPhotosButtonBeDisabled: closure_4, canUpload } = canStartThreads);
  const canPostPolls = canStartThreads.canPostPolls;
  const onPollsPress = canStartThreads.onPollsPress;
  const AnalyticEvents = onPollsPress;
  const onAttachPress = canStartThreads.onAttachPress;
  const photosButtonExternalRef = canStartThreads.photosButtonExternalRef;
  let tmp22;
  let tmp27;
  let sum1;
  let obj = arg1(dependencyMap[8]);
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "ChatInputActions" });
  const enabled = mobileVisualRefreshConfig.enabled;
  const CHAT_INPUT_TIMING_CONFIG = enabled;
  const chatInputFloating = mobileVisualRefreshConfig.chatInputFloating;
  const callback2 = chatInputFloating;
  const tmp2 = callback2();
  let closure_12 = tmp2;
  let obj1 = arg1(dependencyMap[9]);
  let closure_13 = obj1.useClientThemesOverride(tmp2.themedChatInput);
  let obj2 = arg1(dependencyMap[10]);
  const token = obj2.useToken(importDefault(dependencyMap[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj3 = arg1(dependencyMap[10]);
  const token1 = obj3.useToken(importDefault(dependencyMap[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj4 = arg1(dependencyMap[10]);
  const token2 = obj4.useToken(importDefault(dependencyMap[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP);
  const sum = token + 2 * token1;
  let keyboardWillOpen = importDefault(dependencyMap[11])({ includeCustomKeyboard: true });
  let obj5 = arg1(dependencyMap[12]);
  const tmp7 = importDefault(dependencyMap[14])(channel);
  [tmp9, closure_16] = callback(importAllResult.useState(false), 2);
  const tmp10 = callback(importAllResult.useState(true), 2);
  let closure_17 = tmp10[1];
  let closure_18 = importAllResult.useRef(null);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, importAllResult.useMemo(() => {
    let closure_0 = {
      onDismissActions(arg0) {
        callback2(arg0);
        callback3(false);
      },
      onShowActions(arg0) {
        callback2(arg0);
        callback3(true);
      },
      focusPhotosButton() {
        let obj = callback(closure_2[15]);
        obj = { ref: closure_18, delay: 0 };
        const result = obj.setAccessibilityFocus(obj);
      }
    };
    return {
      showActionsImperativeApi() {
        return closure_0;
      }
    };
  }, []).showActionsImperativeApi);
  const items = [enabled, canPostPolls, canStartThreads, isAppLauncherEnabled, canUpload, tmp7, onPressAction, onPollsPress, onAttachPress];
  let closure_19 = importAllResult.useMemo(() => {
    const items = [];
    if (enabled) {
      let result = canUpload;
      if (canUpload) {
        result = !tmp7;
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
          return callback({}, constants.CAMERA);
        };
        items.push(obj);
      }
      if (canUpload) {
        obj = {};
        const intl2 = canStartThreads(isAppLauncherEnabled[17]).intl;
        obj.label = intl2.string(canStartThreads(isAppLauncherEnabled[17]).t.Zmm6dN);
        obj.IconComponent = canStartThreads(isAppLauncherEnabled[19]).ImageIcon;
        obj.action = function action() {
          return callback({}, constants.ALL_PHOTOS);
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
        obj2.label = intl4.string(canStartThreads(isAppLauncherEnabled[17]).t.7Xm5QI);
        obj2.IconComponent = canStartThreads(isAppLauncherEnabled[21]).ThreadPlusIcon;
        obj2.action = function action() {
          return callback({}, constants.THREAD);
        };
        items.push(obj2);
      }
      if (isAppLauncherEnabled) {
        const obj3 = {};
        const intl5 = canStartThreads(isAppLauncherEnabled[17]).intl;
        obj3.label = intl5.string(canStartThreads(isAppLauncherEnabled[17]).t.PHjkRE);
        obj3.IconComponent = canStartThreads(isAppLauncherEnabled[22]).AppsIcon;
        obj3.action = function action() {
          return callback({}, constants.APPS);
        };
        items.push(obj3);
      }
      if (canUpload) {
        const obj4 = {};
        const intl6 = canStartThreads(isAppLauncherEnabled[17]).intl;
        obj4.label = intl6.string(canStartThreads(isAppLauncherEnabled[17]).t.8Hvr3+);
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
  const items1 = [];
  obj = { type: canUpload.PHOTOS };
  let tmp12 = keyboardType === arg1(dependencyMap[13]).KeyboardTypes.MEDIA;
  if (!tmp12) {
    let tmp13 = chatInputFloating;
    if (chatInputFloating) {
      tmp13 = keyboardType === arg1(dependencyMap[13]).KeyboardTypes.APP_LAUNCHER;
    }
    tmp12 = tmp13;
  }
  obj.active = tmp12;
  items1.push(obj);
  if (tmp17) {
    obj = { type: canUpload.APPS, active: keyboardType === arg1(dependencyMap[13]).KeyboardTypes.APP_LAUNCHER };
    items1.push(obj);
  }
  tmp22 = true === canStartThreads;
  if (tmp22) {
    if (!keyboardWillOpen) {
      keyboardWillOpen = obj5.useKeyboardContextForType(arg1(dependencyMap[13]).KeyboardTypes.SYSTEM).keyboardWillOpen;
    }
    if (!keyboardWillOpen) {
      keyboardWillOpen = tmp9;
    }
    tmp22 = keyboardWillOpen;
  }
  if (!chatInputFloating) {
    if (tmp22) {
      obj1 = { type: canUpload.THREAD };
      items1.push(obj1);
    } else if (canStartThreads.shouldShowGiftButton) {
      obj2 = { type: canUpload.NITRO_GIFT };
      items1.push(obj2);
    }
  }
  tmp27 = !tmp10[0];
  let num = 0;
  if (items1.length > 1) {
    num = (items1.length - 1) * token2;
  }
  sum1 = items1.length * sum + num;
  const tmp17 = !chatInputFloating && isAppLauncherEnabled;
  const tmp8 = callback(importAllResult.useState(false), 2);
  function it() {
    if (chatInputFloating) {
      let obj = { opacity: 1 };
    } else {
      obj = { paddingHorizontal: true, accessibilityRole: true, width: canStartThreads(isAppLauncherEnabled[26]).withTiming(tmp27 ? sum : sum1, enabled) };
      const obj2 = canStartThreads(isAppLauncherEnabled[26]);
    }
    return obj;
  }
  obj3 = { chatInputFloating, withTiming: arg1(dependencyMap[26]).withTiming, showPhotosOnly: tmp27, actionButtonWidth: sum, actionButtonsWidth: sum1, timingConfig: CHAT_INPUT_TIMING_CONFIG };
  it.__closure = obj3;
  it.__workletHash = 11213591113353;
  it.__initData = closure_12;
  obj4 = {};
  const animatedStyle = arg1(dependencyMap[25]).useAnimatedStyle(it);
  obj5 = {};
  const items2 = [tmp2.actions, animatedStyle, ];
  const obj6 = { gap: token2 };
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
    const canStartThreads = active;
    if (canUpload.PHOTOS === type) {
      if (enabled) {
        if (length.length > 0) {
          let obj = {
            position: true,
            right: true,
            top: true,
            items: length,
            onOpen: closure_20,
            onClose: closure_21,
            children(arg0) {
                    let accessibilityActions;
                    let onAccessibilityAction;
                    let ref;
                    ({ ref, accessibilityActions, onAccessibilityAction } = arg0);
                    let obj = {};
                    const tmp = closure_8;
                    const tmp2 = callback(closure_2[28]);
                    const items = [ref, closure_18, closure_9];
                    const items1 = [...items.filter(Boolean)];
                    obj.ref = active(closure_2[29]).mergeRefs.apply(items1);
                    const intl = active(closure_2[17]).intl;
                    obj.accessibilityLabel = intl.string(active(closure_2[17]).t.aDZSuz);
                    const intl2 = active(closure_2[17]).intl;
                    obj.accessibilityHint = intl2.string(active(closure_2[17]).t.o7j1jA);
                    obj = { expanded: active };
                    obj.accessibilityState = obj;
                    obj.accessibilityActions = accessibilityActions;
                    obj.onAccessibilityAction = onAccessibilityAction;
                    obj.active = active;
                    obj.activeIconStyle = activeBrand.activeBrand;
                    obj.disabled = closure_4;
                    obj.IconComponent = active(closure_2[30]).MediaKeyboardButtonIcon;
                    obj.onPress = function onPress(arg0) {
                      return callback(arg0, constants.PHOTOS);
                    };
                    let tmp4;
                    if (!closure_11) {
                      tmp4 = closure_13;
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
      const intl2 = canStartThreads(isAppLauncherEnabled[17]).intl;
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
        return callback2(arg0, constants.PHOTOS);
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
      const obj2 = { accessible: !tmp27, active, channel, onPress: onPressAction, styleButton: closure_13, styleActiveIcon: tmp2.activeBrand };
      return onAttachPress(channel(isAppLauncherEnabled[31]), obj2, arg1);
    } else if (canUpload.ALL_PHOTOS === type) {
      const obj3 = {};
      const intl = canStartThreads(isAppLauncherEnabled[17]).intl;
      obj3.accessibilityLabel = intl.string(canStartThreads(isAppLauncherEnabled[17]).t.ZT24In);
      obj3.accessible = !tmp27;
      const obj4 = { expanded: active };
      obj3.accessibilityState = obj4;
      obj3.active = active;
      obj3.activeIconStyle = tmp2.activeBrand;
      obj3.disabled = !canUpload;
      obj3.IconComponent = canStartThreads(isAppLauncherEnabled[19]).ImageIcon;
      obj3.onPress = function onPress(arg0) {
        return callback2(arg0, constants.ALL_PHOTOS);
      };
      obj3.style = closure_13;
      return onAttachPress(channel(isAppLauncherEnabled[28]), obj3, arg1);
    } else {
      obj = { accessible: !tmp27, canStartThreads, channel, onPress: onPressAction, styleButtonWrapper: onAttachPress.buttonWrapper, styleButton: closure_13, shouldShowThread: tmp22 };
      return onAttachPress(channel(isAppLauncherEnabled[32]), obj, "gift-or-thread");
    }
  });
  obj4.children = onAttachPress(importDefault(dependencyMap[25]).View, obj5);
  return onAttachPress(photosButtonExternalRef, obj4);
});
forwardRefResult.displayName = "ChatInputActions";
const obj2 = { tintColor: importDefault(dependencyMap[6]).colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
const memoResult = importAllResult.memo(forwardRefResult);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActions.tsx");

export default memoResult;
