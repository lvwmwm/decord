// Module ID: 10241
// Function ID: 79154
// Name: useSetHeightOnLayout
// Dependencies: []

// Module 10241 (useSetHeightOnLayout)
function useSetHeightOnLayout(expandedPreviewHeight) {
  const arg1 = expandedPreviewHeight;
  const items = [expandedPreviewHeight];
  return importAllResult.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > 0) {
      const result = nativeEvent.set(height);
    }
  }, items);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ DEFAULT_ANIMATION_TIMING: closure_6, IN_APP_NOTIFICATION_MAX_HEIGHT: closure_7, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_8, RIGHT_ACCESSORY_LEFT_MARGIN: closure_9 } = arg1(dependencyMap[3]));
const MessageEmbedTypes = arg1(dependencyMap[4]).MessageEmbedTypes;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_13 = arg1(dependencyMap[6]).isAndroid();
const PX_12 = importDefault(dependencyMap[7]).space.PX_12;
const PX_8 = importDefault(dependencyMap[7]).space.PX_8;
const obj2 = arg1(dependencyMap[6]);
let closure_16 = arg1(dependencyMap[8]).createStyles({ newContainerRoleDot: {}, initialPreviewOverlay: {}, expandedPreviewOverlay: { "Null": 131420590, "Null": -1717986767, "Null": -644245095, "Null": 94527 }, gradientStyles: { height: 32 } });
let closure_17 = importAllResult.memo((message) => callback(importDefault(dependencyMap[9]), { message: message.message, lineClamp: closure_8, maxHeight: closure_7 }));
let closure_18 = { code: "function MessageNotificationTsx1(){const{contentHeight,EXPANDED_MAX_HEIGHT,TRUNCATED_MESSAGE_HEIGHT_OFFSET,EXPANDED_SHORT_PREVIEW_PADDING}=this.__closure;const isGradientShown=contentHeight.get()>=EXPANDED_MAX_HEIGHT-TRUNCATED_MESSAGE_HEIGHT_OFFSET;const isShortPreview=contentHeight.get()>0&&!isGradientShown;return{paddingBottom:isShortPreview?EXPANDED_SHORT_PREVIEW_PADDING:0};}" };
let closure_19 = { code: "function MessageNotificationTsx2(){const{IS_ANDROID,hasPreviewableMedia,hasTextContent,hasEmbedMedia,fadeProgress,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(IS_ANDROID&&hasPreviewableMedia&&hasTextContent&&!hasEmbedMedia){return{opacity:fadeProgress.get()};}if(!hasTextContent||hasEmbedMedia){return{opacity:fadeProgress.get(),transform:[{translateY:(1-fadeProgress.get())*ACCESSORY_EXIT_THRESHOLD}]};}return{opacity:1};}" };
let closure_20 = importAllResult.memo((message) => {
  message = message.message;
  const arg1 = message;
  const fadeProgress = message.fadeProgress;
  const importDefault = fadeProgress;
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => result.useReducedMotion);
  let obj1 = arg1(dependencyMap[11]);
  const hasPreviewableMedia = obj1.useHasPreviewableMedia(message);
  const dependencyMap = hasPreviewableMedia;
  const items1 = [message.embeds];
  const memo = importAllResult.useMemo(() => {
    const embeds = message.embeds;
    return embeds.some((image) => {
      let tmp = null != image.image || null != image.thumbnail;
      if (!tmp) {
        tmp = image.type === constants.GIFV;
      }
      return tmp;
    });
  }, items1);
  const items2 = [hasPreviewableMedia, message.poll, memo];
  const memo1 = importAllResult.useMemo(() => {
    let tmp = hasPreviewableMedia;
    if (!hasPreviewableMedia) {
      tmp = null != message.poll;
    }
    if (!tmp) {
      tmp = memo;
    }
    return tmp;
  }, items2);
  const View = tmp6;
  const result = 0.24 * importDefault(dependencyMap[12])({ ignoreKeyboard: true }).height;
  closure_5 = result;
  let obj2 = arg1(dependencyMap[13]);
  const sharedValue = obj2.useSharedValue(0);
  const tmp8 = useSetHeightOnLayout(message.expandedPreviewHeight);
  let obj3 = arg1(dependencyMap[13]);
  const fn = function h() {
    const obj = {};
    let num = 0;
    if (sharedValue.get() > 0) {
      num = 0;
      if (!tmp) {
        num = closure_14;
      }
    }
    obj.paddingBottom = num;
    return obj;
  };
  obj = { contentHeight: sharedValue, EXPANDED_MAX_HEIGHT: result, TRUNCATED_MESSAGE_HEIGHT_OFFSET: PX_8, EXPANDED_SHORT_PREVIEW_PADDING: PX_12 };
  fn.__closure = obj;
  fn.__workletHash = 4300216170219;
  fn.__initData = closure_18;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const tmp10 = useSetHeightOnLayout(sharedValue);
  const fn2 = function u() {
    if (closure_13) {
      if (hasPreviewableMedia) {
        if (tmp6) {
          if (!memo) {
            let obj = { opacity: fadeProgress.get() };
            return obj;
          }
        }
      }
    }
    if (tmp6) {
      if (!memo) {
        obj = { opacity: 1 };
      }
    }
    obj = { opacity: fadeProgress.get() };
    const items = [{ translateY: (1 - fadeProgress.get()) * 20 }];
    obj.transform = items;
  };
  obj = { IS_ANDROID: closure_13, hasPreviewableMedia, hasTextContent: tmp6, hasEmbedMedia: memo, fadeProgress, ACCESSORY_EXIT_THRESHOLD: 20 };
  fn2.__closure = obj;
  fn2.__workletHash = 9879198032662;
  fn2.__initData = closure_19;
  const animatedStyle1 = arg1(dependencyMap[13]).useAnimatedStyle(fn2);
  obj1 = {};
  const items3 = [tmp.expandedPreviewOverlay, , ];
  let tmp14 = null;
  if (memo1) {
    tmp14 = animatedStyle1;
  }
  items3[1] = tmp14;
  items3[2] = animatedStyle;
  obj1.style = items3;
  obj1.onLayout = tmp8;
  obj2 = { onLayout: tmp10 };
  obj3 = { message };
  let num;
  if (memo1) {
    num = 6;
  }
  obj3.lineClamp = num;
  obj3.maxHeight = result;
  obj3.backgroundColor = importDefault(dependencyMap[7]).colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
  obj3.gifAutoPlay = !stateFromStores;
  obj3.gradientStyles = tmp.gradientStyles;
  obj2.children = closure_11(arg1(dependencyMap[14]).NativeChannelRowPreview, obj3);
  obj1.children = closure_11(View, obj2);
  return closure_11(importDefault(dependencyMap[13]).View, obj1);
});
let closure_21 = { code: "function MessageNotificationTsx3(){const{shouldHandlePreviewableMediaExpand,fadeProgress,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{opacity:Math.max(0,1-fadeProgress.get()*2),right:accessoryWidthSV.get()}:{opacity:Math.max(0,1-fadeProgress.get()*2)};}" };
let closure_22 = importAllResult.memo((fadeProgress) => {
  let initialPreviewContent;
  let initialPreviewHeight;
  fadeProgress = fadeProgress.fadeProgress;
  const arg1 = fadeProgress;
  const accessoryWidthSV = fadeProgress.accessoryWidthSV;
  const importDefault = accessoryWidthSV;
  const shouldHandlePreviewableMediaExpand = fadeProgress.shouldHandlePreviewableMediaExpand;
  const dependencyMap = shouldHandlePreviewableMediaExpand;
  ({ initialPreviewHeight, initialPreviewContent } = fadeProgress);
  const tmp = callback3();
  let obj = arg1(dependencyMap[13]);
  const fn = function h() {
    if (shouldHandlePreviewableMediaExpand) {
      let obj = {};
      const _Math2 = Math;
      obj.opacity = Math.max(0, 1 - 2 * fadeProgress.get());
      obj.right = accessoryWidthSV.get();
    } else {
      obj = {};
      const _Math = Math;
      obj.opacity = Math.max(0, 1 - 2 * fadeProgress.get());
    }
    return obj;
  };
  fn.__closure = { shouldHandlePreviewableMediaExpand, fadeProgress, accessoryWidthSV };
  fn.__workletHash = 15466459240148;
  fn.__initData = closure_21;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  const items = [tmp.initialPreviewOverlay, animatedStyle];
  obj.children = callback(View, { onLayout: useSetHeightOnLayout(initialPreviewHeight), children: initialPreviewContent });
  return callback(importDefault(dependencyMap[13]).View, obj);
});
let closure_23 = { code: "function MessageNotificationTsx4(){const{expandedPreviewHeight,EXPANDED_MAX_HEIGHT,expandedSV,notificationGestureY,initialPreviewHeight}=this.__closure;const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);if(expandedSV.get()){return maxExpandedHeight;}const dragDistance=Math.max(0,notificationGestureY.get());const maxHeight=Math.max(maxExpandedHeight,initialPreviewHeight.get());return Math.min(initialPreviewHeight.get()+dragDistance,maxHeight);}" };
let closure_24 = { code: "function MessageNotificationTsx5(){const{expandedSV,expandedPreviewHeight,EXPANDED_MAX_HEIGHT,initialPreviewHeight,notificationGestureY,ACCESSORY_EXIT_THRESHOLD,currentHeight}=this.__closure;if(expandedSV.get()){return 1;}const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);const heightDifference=maxExpandedHeight-initialPreviewHeight.get();const dragDistance=Math.max(0,notificationGestureY.get());if(heightDifference<=0){return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}return Math.min(1,(currentHeight.get()-initialPreviewHeight.get())/heightDifference);}" };
let closure_25 = { code: "function MessageNotificationTsx6(){const{shouldHandlePreviewableMediaExpand,currentHeight,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{overflow:'hidden',height:currentHeight.get(),marginRight:-accessoryWidthSV.get()}:{overflow:'hidden',height:currentHeight.get()};}" };
let closure_26 = importAllResult.memo((initialPreviewContent) => {
  let expandedSV;
  let message;
  ({ message, expandedSV } = initialPreviewContent);
  const arg1 = expandedSV;
  const notificationGestureY = initialPreviewContent.notificationGestureY;
  const importDefault = notificationGestureY;
  const initialPreviewHeight = initialPreviewContent.initialPreviewHeight;
  const dependencyMap = initialPreviewHeight;
  const accessoryWidthSV = initialPreviewContent.accessoryWidthSV;
  let hasPreviewableMedia;
  let derivedValue;
  const result = 0.24 * importDefault(dependencyMap[12])({ ignoreKeyboard: true }).height;
  const View = result;
  let obj = arg1(dependencyMap[13]);
  const sharedValue = obj.useSharedValue(result);
  let closure_5 = sharedValue;
  let obj1 = arg1(dependencyMap[11]);
  hasPreviewableMedia = closure_13;
  if (closure_13) {
    hasPreviewableMedia = obj1.useHasPreviewableMedia(message);
  }
  const fn = function h() {
    const bound = Math.min(sharedValue.get(), result);
    if (expandedSV.get()) {
      return bound;
    } else {
      const _Math = Math;
      const _Math2 = Math;
      const bound1 = Math.max(0, notificationGestureY.get());
      const _Math3 = Math;
      const bound2 = Math.max(bound, initialPreviewHeight.get());
      return Math.min(initialPreviewHeight.get() + bound1, bound2);
    }
  };
  fn.__closure = { expandedPreviewHeight: sharedValue, EXPANDED_MAX_HEIGHT: result, expandedSV, notificationGestureY, initialPreviewHeight };
  fn.__workletHash = 10745028098653;
  fn.__initData = closure_23;
  derivedValue = arg1(dependencyMap[13]).useDerivedValue(fn);
  const obj3 = arg1(dependencyMap[13]);
  const fn2 = function u() {
    if (expandedSV.get()) {
      return 1;
    } else {
      const _Math = Math;
      const bound = Math.min(sharedValue.get(), result);
      const diff = bound - initialPreviewHeight.get();
      const _Math2 = Math;
      if (diff <= 0) {
        const _Math4 = Math;
        let bound1 = Math.min(1, tmp8 / 20);
      } else {
        const _Math3 = Math;
        const value = derivedValue.get();
        bound1 = Math.min(1, (value - initialPreviewHeight.get()) / diff);
      }
      return bound1;
    }
  };
  fn2.__closure = { expandedSV, expandedPreviewHeight: sharedValue, EXPANDED_MAX_HEIGHT: result, initialPreviewHeight, notificationGestureY, ACCESSORY_EXIT_THRESHOLD: 20, currentHeight: derivedValue };
  fn2.__workletHash = 7693825745292;
  fn2.__initData = closure_24;
  const derivedValue1 = arg1(dependencyMap[13]).useDerivedValue(fn2);
  const obj4 = arg1(dependencyMap[13]);
  const fn3 = function _() {
    if (hasPreviewableMedia) {
      let obj = { overflow: "hidden", height: derivedValue.get(), marginRight: -accessoryWidthSV.get() };
    } else {
      obj = { overflow: "hidden", height: derivedValue.get() };
    }
    return obj;
  };
  obj = { shouldHandlePreviewableMediaExpand: hasPreviewableMedia, currentHeight: derivedValue, accessoryWidthSV };
  fn3.__closure = obj;
  fn3.__workletHash = 9399498954959;
  fn3.__initData = closure_25;
  const animatedStyle = arg1(dependencyMap[13]).useAnimatedStyle(fn3);
  obj = { style: animatedStyle };
  const items = [callback(closure_20, { message, expandedPreviewHeight: sharedValue, fadeProgress: derivedValue1 }), ];
  obj1 = { initialPreviewHeight, fadeProgress: derivedValue1, initialPreviewContent: initialPreviewContent.initialPreviewContent, accessoryWidthSV, shouldHandlePreviewableMediaExpand: hasPreviewableMedia };
  items[1] = callback(closure_22, obj1);
  obj.children = items;
  return callback2(importDefault(dependencyMap[13]).View, obj);
});
let closure_27 = { code: "function MessageNotificationTsx7(){const{isExpandableNotification,expandedSV,notificationGestureY,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(!isExpandableNotification){return 0;}if(expandedSV.get()){return 1;}const dragDistance=Math.max(0,notificationGestureY.get());return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}" };
let closure_28 = { code: "function MessageNotificationTsx8(){const{PREVIEW_SIZE,RIGHT_ACCESSORY_LEFT_MARGIN,accessoryExitProgressSV}=this.__closure;return(PREVIEW_SIZE+RIGHT_ACCESSORY_LEFT_MARGIN)*(1-accessoryExitProgressSV.get());}" };
let closure_29 = { code: "function MessageNotificationTsx9(){const{isExpandableNotification,hasPreviewableMedia,accessoryWidthSV,PREVIEW_SIZE}=this.__closure;if(!isExpandableNotification||!hasPreviewableMedia){return{};}return{marginRight:accessoryWidthSV.get(),minHeight:PREVIEW_SIZE};}" };
let closure_30 = { code: "function MessageNotificationTsx10(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),maxHeight:withTiming(expandedSV.get()?60:0,DEFAULT_ANIMATION_TIMING)};}" };
const obj3 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function MessageNotification(notification) {
  let accessibilityActions;
  let onAccessibilityAction;
  let onAccessibilityExpand;
  notification = notification.notification;
  const arg1 = notification;
  let closure_5;
  let isExpanded;
  let expandedSV;
  let notificationGestureY;
  let handleDismissNotification;
  let MessageEmbedTypes;
  let onReactionPress;
  let hasPreviewableMedia;
  let closure_13;
  let PX_12;
  const message = notification.message;
  const importDefault = message;
  const channel = notification.channel;
  const dependencyMap = channel;
  const parentChannel = notification.parentChannel;
  const guild = notification.guild;
  const View = guild;
  let tmp2 = 0 === message.content.length;
  if (tmp2) {
    tmp2 = null !== message.interaction;
  }
  if (tmp2) {
    tmp2 = undefined !== message.interaction;
  }
  if (tmp2) {
    tmp2 = null !== message.activityInstance;
  }
  if (tmp2) {
    tmp2 = undefined !== message.activityInstance;
  }
  if (tmp2) {
    const intl = arg1(dependencyMap[20]).intl;
    let obj = {};
    let obj1 = arg1(dependencyMap[21]);
    const interaction = message.interaction;
    let user;
    if (null != interaction) {
      user = interaction.user;
    }
    obj.username = obj1.getUserAuthor(user, channel).nick;
    message.content = intl.formatToPlainString(arg1(dependencyMap[20]).t.7eikg1, obj);
  }
  let obj2 = arg1(dependencyMap[21]);
  const nullableMessageAuthor = obj2.useNullableMessageAuthor(message);
  closure_5 = nullableMessageAuthor;
  obj = { author: nullableMessageAuthor, containerStyles: callback3().newContainerRoleDot };
  const tmp = callback3();
  let obj4 = arg1(dependencyMap[16]);
  const inAppNotificationContext = obj4.useInAppNotificationContext();
  isExpanded = inAppNotificationContext.isExpanded;
  expandedSV = inAppNotificationContext.expandedSV;
  notificationGestureY = inAppNotificationContext.notificationGestureY;
  handleDismissNotification = inAppNotificationContext.handleDismissNotification;
  let isExpandableNotification = inAppNotificationContext.isExpandableNotification;
  MessageEmbedTypes = isExpandableNotification;
  const tmp12 = function useExpandNotificationActions(isExpandableNotification) {
    let setConfirmation;
    function onAccessibilityExpand() {
      setExpanded(!closure_3, "accessibility_expand");
    }
    const nullableMessageAuthor = onAccessibilityExpand;
    let obj = notification(channel[16]);
    const inAppNotificationContext = obj.useInAppNotificationContext();
    const setExpanded = inAppNotificationContext.setExpanded;
    const notification = setExpanded;
    const setAutoDismissing = inAppNotificationContext.setAutoDismissing;
    const message = setAutoDismissing;
    const setActionTaken = inAppNotificationContext.setActionTaken;
    const channel = setActionTaken;
    ({ isExpanded: closure_3, setConfirmation } = inAppNotificationContext);
    const guild = setConfirmation;
    obj = {
      onReactionPress: parentChannel.useCallback((channel, reaction, burst) => {
        let obj = setExpanded(setActionTaken[17]);
        const result = obj.triggerHapticFeedback(setExpanded(setActionTaken[17]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj2 = setExpanded(setActionTaken[18]);
        const obj3 = setExpanded(setActionTaken[19]);
        obj = { burst };
        obj2.addReaction(channel.channel.id, channel.message.id, setExpanded(setActionTaken[19]).toReactionEmoji(reaction), setExpanded(setActionTaken[18]).ReactionLocations.IN_APP_NOTIFICATION, obj);
        setActionTaken(true);
        setExpanded(false);
        obj = { type: "message", reaction };
        const intl = setExpanded(setActionTaken[20]).intl;
        obj.message = intl.string(setExpanded(setActionTaken[20]).t.UjTvrz);
        setConfirmation(obj);
        setAutoDismissing(true);
      }, items),
      onAccessibilityExpand
    };
    const items = [setActionTaken, setExpanded, setAutoDismissing, setConfirmation];
    let tmp2;
    if (isExpandableNotification) {
      obj = { name: "expand_toggle" };
      const intl = notification(channel[20]).intl;
      obj.label = intl.string(notification(channel[20]).t.PbxI/x);
      const items1 = [obj];
      tmp2 = items1;
    }
    obj.accessibilityActions = tmp2;
    obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
      if ("expand_toggle" === nativeEvent.nativeEvent.actionName) {
        onAccessibilityExpand();
      }
    };
    return obj;
  }(isExpandableNotification);
  onReactionPress = tmp12.onReactionPress;
  ({ onAccessibilityAction, accessibilityActions, onAccessibilityExpand } = tmp12);
  let obj5 = arg1(dependencyMap[22]);
  const items = [nullableMessageAuthor.nick, channel.id, message.content];
  const isScreenReaderEnabled = obj5.useIsScreenReaderEnabled();
  const effect = importAllResult.useEffect(() => {
    const intl = notification(channel[20]).intl;
    const obj = { userName: nullableMessageAuthor.nick, message: message(channel[23]).unparse(message.content, channel.id, true) };
    const obj2 = message(channel[23]);
    const AccessibilityAnnouncer = notification(channel[24]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(notification(channel[20]).t.Hjp1LH, obj));
  }, items);
  const items1 = [channel.id, message.id];
  const items2 = [channel.id];
  const callback = importAllResult.useCallback(() => {
    message(channel[25]).popAll();
    const obj = message(channel[25]);
    notification(channel[26]).transitionToMessage(channel.id, message.id, { navigationReplace: true });
  }, items1);
  const callback1 = importAllResult.useCallback(() => {
    let obj = message(channel[25]);
    obj = { channelId: channel.id };
    return obj.pushLazy(notification(channel[28])(channel[27], channel.paths), obj, "in-app-notification-settings-modal");
  }, items2);
  let obj6 = arg1(dependencyMap[11]);
  hasPreviewableMedia = obj6.useHasPreviewableMedia(message);
  let obj7 = arg1(dependencyMap[13]);
  const sharedValue = obj7.useSharedValue(expandedSV);
  let obj8 = arg1(dependencyMap[13]);
  class U {
    constructor() {
      if (isExpandableNotification) {
        tmp = expandedSV;
        if (expandedSV.get()) {
          num5 = 1;
          return 1;
        } else {
          tmp2 = globalThis;
          _Math = Math;
          tmp3 = notificationGestureY;
          num2 = 0;
          _Math2 = Math;
          num3 = 20;
          num4 = 1;
          return Math.min(1, Math.max(0, notificationGestureY.get()) / 20);
        }
      } else {
        num = 0;
        return 0;
      }
    }
  }
  obj = { isExpandableNotification, expandedSV, notificationGestureY, ACCESSORY_EXIT_THRESHOLD: 20 };
  U.__closure = obj;
  U.__workletHash = 10189805207166;
  U.__initData = closure_27;
  const derivedValue = obj8.useDerivedValue(U);
  closure_13 = derivedValue;
  const tmp10 = function useAccessoryLabelNode(author) {
    author = author.author;
    let obj = notification(channel[10]);
    const items = [nullableMessageAuthor];
    let colorString;
    const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
    if (null != author) {
      colorString = author.colorString;
    }
    let tmp5Result;
    if ("dot" === stateFromStores) {
      if (undefined !== tmp3) {
        obj = { color: tmp3 };
        let colorStrings;
        if (null != author) {
          colorStrings = author.colorStrings;
        }
        obj.colors = colorStrings;
        obj.containerStyles = author.containerStyles;
        tmp5Result = onReactionPress(notification(channel[15]).RoleDot, obj);
        const tmp5 = onReactionPress;
      }
    }
    return tmp5Result;
  }(obj);
  class Z {
    constructor() {
      sum = notification(channel[29]).PREVIEW_SIZE + handleDismissNotification;
      return sum * (1 - closure_13.get());
    }
  }
  obj1 = { PREVIEW_SIZE: arg1(dependencyMap[29]).PREVIEW_SIZE, RIGHT_ACCESSORY_LEFT_MARGIN: handleDismissNotification, accessoryExitProgressSV: derivedValue };
  Z.__closure = obj1;
  Z.__workletHash = 12027019053130;
  Z.__initData = closure_28;
  const derivedValue1 = arg1(dependencyMap[13]).useDerivedValue(Z);
  PX_12 = derivedValue1;
  const obj11 = arg1(dependencyMap[13]);
  const fn = function j() {
    if (isExpandableNotification) {
      if (hasPreviewableMedia) {
        const obj = { marginRight: derivedValue1.get(), minHeight: notification(channel[29]).PREVIEW_SIZE };
      }
      return {};
    }
  };
  obj2 = { isExpandableNotification, hasPreviewableMedia, accessoryWidthSV: derivedValue1, PREVIEW_SIZE: arg1(dependencyMap[29]).PREVIEW_SIZE };
  fn.__closure = obj2;
  fn.__workletHash = 2118539495108;
  fn.__initData = closure_29;
  const items3 = [channel, parentChannel, guild, nullableMessageAuthor, isExpanded, handleDismissNotification];
  const animatedStyle = arg1(dependencyMap[13]).useAnimatedStyle(fn);
  const memo = importAllResult.useMemo(() => ({ type: "message", channel, parentChannel, guild, author: nullableMessageAuthor, expanded: isExpanded, onDismiss: handleDismissNotification }), items3);
  const tmp23 = onReactionPress(closure_17, { message });
  let tmp24 = tmp23;
  if (isExpandableNotification) {
    const obj3 = { message, expandedSV, notificationGestureY, initialPreviewContent: tmp23, initialPreviewHeight: sharedValue, accessoryWidthSV: derivedValue1 };
    tmp24 = onReactionPress(closure_26, obj3);
  }
  const obj13 = arg1(dependencyMap[13]);
  class B {
    constructor() {
      obj = {};
      obj2 = notification(channel[30]);
      num = 0;
      if (expandedSV.get()) {
        num = 1;
      }
      obj.opacity = obj2.withTiming(num, isExpanded);
      obj3 = notification(channel[30]);
      num2 = 0;
      if (expandedSV.get()) {
        num2 = 60;
      }
      obj.maxHeight = obj3.withTiming(num2, isExpanded);
      return obj;
    }
  }
  obj4 = { withTiming: arg1(dependencyMap[30]).withTiming, expandedSV, DEFAULT_ANIMATION_TIMING: isExpanded };
  B.__closure = obj4;
  B.__workletHash = 2035414692485;
  B.__initData = closure_30;
  const animatedStyle1 = arg1(dependencyMap[13]).useAnimatedStyle(B);
  obj5 = {};
  obj6 = { user: message.author };
  const guild2 = notification.guild;
  let id;
  if (null != guild2) {
    id = guild2.id;
  }
  obj6.guildId = id;
  obj6.size = arg1(dependencyMap[15]).AvatarSizes.NORMAL;
  obj5.icon = onReactionPress(arg1(dependencyMap[15]).Avatar, obj6);
  obj5.accessoryLabelNode = tmp10;
  obj5.bodyStyle = animatedStyle;
  if (!isExpandableNotification) {
    obj7 = { message };
    let tmp34;
    if (isExpandableNotification) {
      tmp34 = derivedValue;
    }
    obj7.accessoryExitProgressSV = tmp34;
    let tmp31Result = onReactionPress(arg1(dependencyMap[29]).MediaPreviewRightAccessory, obj7);
    const tmp31 = onReactionPress;
  } else {
    tmp31Result = null;
  }
  obj5.rightAccessory = tmp31Result;
  obj5.children = tmp24;
  obj5.header = memo;
  if (isExpandableNotification) {
    isExpandableNotification = !isExpanded || isScreenReaderEnabled;
    const tmp35 = !isExpanded || isScreenReaderEnabled;
  }
  obj5.showDragHandle = isExpandableNotification;
  obj5.onAccessibilityExpand = onAccessibilityExpand;
  obj5.expandedContentVisible = isExpanded;
  obj5.notification = notification;
  obj5.onPress = callback;
  obj5.onSettingsPress = callback1;
  obj5.accessibilityActions = accessibilityActions;
  obj5.onAccessibilityAction = onAccessibilityAction;
  let tmp36;
  if (inAppNotificationContext.showReactionBar) {
    obj8 = {
      notification,
      onReactionPress(MessageNotificationReactBar, MessageNotificationReactBar, MessageNotificationReactBar) {
          return onReactionPress(notification, MessageNotificationReactBar, MessageNotificationReactBar);
        },
      animationStyle: animatedStyle1
    };
    tmp36 = onReactionPress(arg1(dependencyMap[32]).MessageNotificationReactBar, obj8);
  }
  obj5.expandableContent = tmp36;
  return onReactionPress(arg1(dependencyMap[31]).NotificationPressable, obj5);
});
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/in_app_notifications/native/MessageNotification.tsx");

export default memoResult;
