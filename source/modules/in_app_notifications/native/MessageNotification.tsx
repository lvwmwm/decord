// Module ID: 10283
// Function ID: 79417
// Name: useSetHeightOnLayout
// Dependencies: [31, 27, 4122, 10267, 653, 33, 477, 689, 4130, 10284, 10285, 566, 10266, 1450, 3991, 10286, 1273, 10307, 4099, 7004, 3769, 1212, 4360, 4528, 6923, 3843, 4337, 4138, 10308, 1934, 10338, 4131, 10339, 10344, 2]

// Module 10283 (useSetHeightOnLayout)
import importAllResult from "withTiming";
import { View } from "transitionToChannel";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import { MessageEmbedTypes } from "ME";
import jsxProd from "PX_12";
import set from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "_isNativeReflectConstruct";

let closure_11;
let closure_12;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function useSetHeightOnLayout(expandedPreviewHeight) {
  let closure_0 = expandedPreviewHeight;
  const items = [expandedPreviewHeight];
  return importAllResult.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > 0) {
      const result = expandedPreviewHeight.set(height);
    }
  }, items);
}
({ DEFAULT_ANIMATION_TIMING: closure_6, IN_APP_NOTIFICATION_MAX_HEIGHT: closure_7, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_8, RIGHT_ACCESSORY_LEFT_MARGIN: closure_9 } = set);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
set = set.isAndroid();
const PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
const PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
let closure_16 = _createForOfIteratorHelperLoose.createStyles({ newContainerRoleDot: { paddingRight: 4, paddingTop: 0 }, initialPreviewOverlay: { position: "absolute", top: 0, left: 0, right: 0, overflow: "hidden" }, expandedPreviewOverlay: { position: "absolute", top: 0, left: 0, right: 0 } });
let closure_17 = importAllResult.memo((message) => callback(importDefault(10284), { message: message.message, lineClamp: closure_8, maxHeight: closure_7 }));
let closure_18 = { code: "function MessageNotificationTsx1(){const{contentHeight,EXPANDED_MAX_HEIGHT,TRUNCATED_MESSAGE_HEIGHT_OFFSET,EXPANDED_SHORT_PREVIEW_PADDING}=this.__closure;const isGradientShown=contentHeight.get()>=EXPANDED_MAX_HEIGHT-TRUNCATED_MESSAGE_HEIGHT_OFFSET;const isShortPreview=contentHeight.get()>0&&!isGradientShown;return{paddingBottom:isShortPreview?EXPANDED_SHORT_PREVIEW_PADDING:0};}" };
let closure_19 = { code: "function MessageNotificationTsx2(){const{IS_ANDROID,hasPreviewableMedia,hasTextContent,hasEmbedMedia,fadeProgress,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(IS_ANDROID&&hasPreviewableMedia&&hasTextContent&&!hasEmbedMedia){return{opacity:fadeProgress.get()};}if(!hasTextContent||hasEmbedMedia){return{opacity:fadeProgress.get(),transform:[{translateY:(1-fadeProgress.get())*ACCESSORY_EXIT_THRESHOLD}]};}return{opacity:1};}" };
let closure_20 = importAllResult.memo((message) => {
  let gradientColors;
  let gradientStyles;
  message = message.message;
  const fadeProgress = message.fadeProgress;
  let tmp = callback3();
  ({ gradientColors, gradientStyles } = fadeProgress(hasPreviewableMedia[10])());
  let obj = message(hasPreviewableMedia[11]);
  let items = [result];
  const stateFromStores = obj.useStateFromStores(items, () => result.useReducedMotion);
  let obj1 = message(hasPreviewableMedia[12]);
  hasPreviewableMedia = obj1.useHasPreviewableMedia(message);
  const items1 = [message.embeds];
  memo = memo.useMemo(() => {
    const embeds = message.embeds;
    return embeds.some((image) => {
      let tmp = null != image.image || null != image.thumbnail;
      if (!tmp) {
        tmp = image.type === outer2_10.GIFV;
      }
      return tmp;
    });
  }, items1);
  const items2 = [hasPreviewableMedia, message.poll, memo];
  const memo1 = memo.useMemo(() => {
    let tmp = hasPreviewableMedia;
    if (!hasPreviewableMedia) {
      tmp = null != message.poll;
    }
    if (!tmp) {
      tmp = memo;
    }
    return tmp;
  }, items2);
  const View = tmp7;
  result = 0.24 * fadeProgress(hasPreviewableMedia[13])({ ignoreKeyboard: true }).height;
  const tmp2 = fadeProgress(hasPreviewableMedia[10])();
  let obj2 = message(hasPreviewableMedia[14]);
  const sharedValue = obj2.useSharedValue(0);
  const tmp9 = useSetHeightOnLayout(message.expandedPreviewHeight);
  let obj3 = message(hasPreviewableMedia[14]);
  const fn = function u() {
    const obj = {};
    let num = 0;
    if (sharedValue.get() > 0) {
      num = 0;
      if (!tmp) {
        num = outer1_14;
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
  const tmp11 = useSetHeightOnLayout(sharedValue);
  const fn2 = function h() {
    if (outer1_13) {
      if (hasPreviewableMedia) {
        if (closure_4) {
          if (!memo) {
            let obj = { opacity: fadeProgress.get() };
            return obj;
          }
        }
      }
    }
    if (closure_4) {
      if (!memo) {
        obj = { opacity: 1 };
      }
    }
    obj = { opacity: fadeProgress.get() };
    const items = [{ translateY: (1 - fadeProgress.get()) * 20 }];
    obj.transform = items;
  };
  obj = { IS_ANDROID: set, hasPreviewableMedia, hasTextContent: tmp7, hasEmbedMedia: memo, fadeProgress, ACCESSORY_EXIT_THRESHOLD: 20 };
  fn2.__closure = obj;
  fn2.__workletHash = 9879198032662;
  fn2.__initData = closure_19;
  const animatedStyle1 = message(hasPreviewableMedia[14]).useAnimatedStyle(fn2);
  obj1 = {};
  const items3 = [tmp.expandedPreviewOverlay, , ];
  let tmp15 = null;
  if (memo1) {
    tmp15 = animatedStyle1;
  }
  items3[1] = tmp15;
  items3[2] = animatedStyle;
  obj1.style = items3;
  obj1.onLayout = tmp9;
  obj2 = { onLayout: tmp11 };
  obj3 = { message };
  let num;
  if (memo1) {
    num = 6;
  }
  obj3.lineClamp = num;
  obj3.maxHeight = result;
  obj3.gifAutoPlay = !stateFromStores;
  obj3.gradientStyles = gradientStyles;
  obj3.gradientColors = gradientColors;
  obj2.children = closure_11(message(hasPreviewableMedia[15]).NativeChannelRowPreview, obj3);
  obj1.children = closure_11(View, obj2);
  return closure_11(fadeProgress(hasPreviewableMedia[14]).View, obj1);
});
let closure_21 = { code: "function MessageNotificationTsx3(){const{shouldHandlePreviewableMediaExpand,fadeProgress,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{opacity:Math.max(0,1-fadeProgress.get()*2),right:accessoryWidthSV.get()}:{opacity:Math.max(0,1-fadeProgress.get()*2)};}" };
let closure_22 = importAllResult.memo((fadeProgress) => {
  let initialPreviewContent;
  let initialPreviewHeight;
  fadeProgress = fadeProgress.fadeProgress;
  const accessoryWidthSV = fadeProgress.accessoryWidthSV;
  const shouldHandlePreviewableMediaExpand = fadeProgress.shouldHandlePreviewableMediaExpand;
  ({ initialPreviewHeight, initialPreviewContent } = fadeProgress);
  const tmp = callback3();
  let obj = fadeProgress(shouldHandlePreviewableMediaExpand[14]);
  const fn = function u() {
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
  items = [tmp.initialPreviewOverlay, animatedStyle];
  obj.children = callback(View, { onLayout: useSetHeightOnLayout(initialPreviewHeight), children: initialPreviewContent });
  return callback(accessoryWidthSV(shouldHandlePreviewableMediaExpand[14]).View, obj);
});
let closure_23 = { code: "function MessageNotificationTsx4(){const{expandedPreviewHeight,EXPANDED_MAX_HEIGHT,expandedSV,notificationGestureY,initialPreviewHeight}=this.__closure;const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);if(expandedSV.get()){return maxExpandedHeight;}const dragDistance=Math.max(0,notificationGestureY.get());const maxHeight=Math.max(maxExpandedHeight,initialPreviewHeight.get());return Math.min(initialPreviewHeight.get()+dragDistance,maxHeight);}" };
let closure_24 = { code: "function MessageNotificationTsx5(){const{expandedSV,expandedPreviewHeight,EXPANDED_MAX_HEIGHT,initialPreviewHeight,notificationGestureY,ACCESSORY_EXIT_THRESHOLD,currentHeight}=this.__closure;if(expandedSV.get()){return 1;}const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);const heightDifference=maxExpandedHeight-initialPreviewHeight.get();const dragDistance=Math.max(0,notificationGestureY.get());if(heightDifference<=0){return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}return Math.min(1,(currentHeight.get()-initialPreviewHeight.get())/heightDifference);}" };
let closure_25 = { code: "function MessageNotificationTsx6(){const{shouldHandlePreviewableMediaExpand,currentHeight,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{overflow:'hidden',height:currentHeight.get(),marginRight:-accessoryWidthSV.get()}:{overflow:'hidden',height:currentHeight.get()};}" };
let closure_26 = importAllResult.memo((initialPreviewContent) => {
  let expandedSV;
  let message;
  ({ message, expandedSV } = initialPreviewContent);
  const notificationGestureY = initialPreviewContent.notificationGestureY;
  const initialPreviewHeight = initialPreviewContent.initialPreviewHeight;
  const accessoryWidthSV = initialPreviewContent.accessoryWidthSV;
  let hasPreviewableMedia;
  let derivedValue;
  const result = 0.24 * notificationGestureY(initialPreviewHeight[13])({ ignoreKeyboard: true }).height;
  const View = result;
  let obj = expandedSV(initialPreviewHeight[14]);
  const sharedValue = obj.useSharedValue(result);
  let obj1 = expandedSV(initialPreviewHeight[12]);
  hasPreviewableMedia = set;
  if (set) {
    hasPreviewableMedia = obj1.useHasPreviewableMedia(message);
  }
  const fn = function u() {
    const bound = Math.min(sharedValue.get(), closure_4);
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
  derivedValue = expandedSV(initialPreviewHeight[14]).useDerivedValue(fn);
  const obj3 = expandedSV(initialPreviewHeight[14]);
  const fn2 = function h() {
    if (expandedSV.get()) {
      return 1;
    } else {
      const _Math = Math;
      const bound = Math.min(sharedValue.get(), closure_4);
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
  const derivedValue1 = expandedSV(initialPreviewHeight[14]).useDerivedValue(fn2);
  const obj4 = expandedSV(initialPreviewHeight[14]);
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
  const animatedStyle = expandedSV(initialPreviewHeight[14]).useAnimatedStyle(fn3);
  obj = { style: animatedStyle };
  const items = [callback(closure_20, { message, expandedPreviewHeight: sharedValue, fadeProgress: derivedValue1 }), ];
  obj1 = { initialPreviewHeight, fadeProgress: derivedValue1, initialPreviewContent: initialPreviewContent.initialPreviewContent, accessoryWidthSV, shouldHandlePreviewableMediaExpand: hasPreviewableMedia };
  items[1] = callback(closure_22, obj1);
  obj.children = items;
  return callback2(notificationGestureY(initialPreviewHeight[14]).View, obj);
});
let closure_27 = { code: "function MessageNotificationTsx7(){const{isExpandableNotification,expandedSV,notificationGestureY,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(!isExpandableNotification){return 0;}if(expandedSV.get()){return 1;}const dragDistance=Math.max(0,notificationGestureY.get());return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}" };
let closure_28 = { code: "function MessageNotificationTsx8(){const{PREVIEW_SIZE,RIGHT_ACCESSORY_LEFT_MARGIN,accessoryExitProgressSV}=this.__closure;return(PREVIEW_SIZE+RIGHT_ACCESSORY_LEFT_MARGIN)*(1-accessoryExitProgressSV.get());}" };
let closure_29 = { code: "function MessageNotificationTsx9(){const{isExpandableNotification,hasPreviewableMedia,accessoryWidthSV,PREVIEW_SIZE}=this.__closure;if(!isExpandableNotification||!hasPreviewableMedia){return{};}return{marginRight:accessoryWidthSV.get(),minHeight:PREVIEW_SIZE};}" };
let closure_30 = { code: "function MessageNotificationTsx10(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),maxHeight:withTiming(expandedSV.get()?60:0,DEFAULT_ANIMATION_TIMING)};}" };
let result = set.fileFinishedImporting("modules/in_app_notifications/native/MessageNotification.tsx");

export default importAllResult.memo(function MessageNotification(notification) {
  let accessibilityActions;
  let onAccessibilityAction;
  let onAccessibilityExpand;
  notification = notification.notification;
  let nullableMessageAuthor;
  let isExpanded;
  let expandedSV;
  let notificationGestureY;
  let handleDismissNotification;
  let isExpandableNotification;
  let onReactionPress;
  let hasPreviewableMedia;
  let derivedValue;
  let derivedValue1;
  const message = notification.message;
  const channel = notification.channel;
  const parentChannel = notification.parentChannel;
  const guild = notification.guild;
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
    let intl = notification(channel[21]).intl;
    let obj = {};
    let obj1 = notification(channel[22]);
    const interaction = message.interaction;
    let user;
    if (null != interaction) {
      user = interaction.user;
    }
    obj.username = obj1.getUserAuthor(user, channel).nick;
    message.content = intl.formatToPlainString(notification(channel[21]).t["7eikg1"], obj);
  }
  let obj2 = notification(channel[22]);
  nullableMessageAuthor = obj2.useNullableMessageAuthor(message);
  obj = { author: nullableMessageAuthor, containerStyles: callback3().newContainerRoleDot };
  const tmp = callback3();
  let obj4 = notification(channel[17]);
  let inAppNotificationContext = obj4.useInAppNotificationContext();
  isExpanded = inAppNotificationContext.isExpanded;
  expandedSV = inAppNotificationContext.expandedSV;
  notificationGestureY = inAppNotificationContext.notificationGestureY;
  handleDismissNotification = inAppNotificationContext.handleDismissNotification;
  isExpandableNotification = inAppNotificationContext.isExpandableNotification;
  const tmp12 = (function useExpandNotificationActions(isExpandableNotification) {
    let parentChannel;
    let setConfirmation;
    function onAccessibilityExpand() {
      setExpanded(!closure_3, "accessibility_expand");
    }
    let obj = notification(channel[17]);
    const inAppNotificationContext = obj.useInAppNotificationContext();
    const setExpanded = inAppNotificationContext.setExpanded;
    const setAutoDismissing = inAppNotificationContext.setAutoDismissing;
    const setActionTaken = inAppNotificationContext.setActionTaken;
    ({ isExpanded: parentChannel, setConfirmation } = inAppNotificationContext);
    obj = {
      onReactionPress: parentChannel.useCallback((channel, reaction, burst) => {
        let obj = notification(channel[18]);
        const result = obj.triggerHapticFeedback(notification(channel[18]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj2 = notification(channel[19]);
        const obj3 = notification(channel[20]);
        obj = { burst };
        obj2.addReaction(channel.channel.id, channel.message.id, notification(channel[20]).toReactionEmoji(reaction), notification(channel[19]).ReactionLocations.IN_APP_NOTIFICATION, obj);
        setActionTaken(true);
        setExpanded(false);
        obj = { type: "message", reaction };
        const intl = notification(channel[21]).intl;
        obj.message = intl.string(notification(channel[21]).t.UjTvrz);
        setConfirmation(obj);
        setAutoDismissing(true);
      }, items),
      onAccessibilityExpand
    };
    items = [setActionTaken, setExpanded, setAutoDismissing, setConfirmation];
    let tmp2;
    if (isExpandableNotification) {
      obj = { name: "expand_toggle" };
      let intl = notification(channel[21]).intl;
      obj.label = intl.string(notification(channel[21]).t["PbxI/x"]);
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
  })(isExpandableNotification);
  onReactionPress = tmp12.onReactionPress;
  ({ onAccessibilityAction, accessibilityActions, onAccessibilityExpand } = tmp12);
  let obj5 = notification(channel[23]);
  let items = [nullableMessageAuthor.nick, channel.id, message.content];
  const isScreenReaderEnabled = obj5.useIsScreenReaderEnabled();
  const effect = parentChannel.useEffect(() => {
    const intl = notification(channel[21]).intl;
    const obj = { userName: nullableMessageAuthor.nick, message: message(channel[24]).unparse(message.content, channel.id, true) };
    const obj2 = message(channel[24]);
    const AccessibilityAnnouncer = notification(channel[25]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(notification(channel[21]).t.Hjp1LH, obj));
  }, items);
  let items1 = [channel.id, message.id];
  const items2 = [channel.id];
  const callback = parentChannel.useCallback(() => {
    message(channel[26]).popAll();
    const obj = message(channel[26]);
    notification(channel[27]).transitionToMessage(channel.id, message.id, { navigationReplace: true });
  }, items1);
  const callback1 = parentChannel.useCallback(() => {
    let obj = message(channel[26]);
    obj = { channelId: channel.id };
    return obj.pushLazy(notification(channel[29])(channel[28], channel.paths), obj, "in-app-notification-settings-modal");
  }, items2);
  let obj6 = notification(channel[12]);
  hasPreviewableMedia = obj6.useHasPreviewableMedia(message);
  let obj7 = notification(channel[14]);
  const sharedValue = obj7.useSharedValue(expandedSV);
  let obj8 = notification(channel[14]);
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
  derivedValue = obj8.useDerivedValue(U);
  const tmp10 = (function useAccessoryLabelNode(author) {
    author = author.author;
    let obj = notification(channel[11]);
    const items = [nullableMessageAuthor];
    let colorString;
    const stateFromStores = obj.useStateFromStores(items, () => nullableMessageAuthor.roleStyle);
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
        tmp5Result = onReactionPress(notification(channel[16]).RoleDot, obj);
        const tmp5 = onReactionPress;
      }
    }
    return tmp5Result;
  })(obj);
  class Z {
    constructor() {
      sum = notification(channel[30]).PREVIEW_SIZE + handleDismissNotification;
      return sum * (1 - c13.get());
    }
  }
  obj1 = { PREVIEW_SIZE: notification(channel[30]).PREVIEW_SIZE, RIGHT_ACCESSORY_LEFT_MARGIN: handleDismissNotification, accessoryExitProgressSV: derivedValue };
  Z.__closure = obj1;
  Z.__workletHash = 12027019053130;
  Z.__initData = closure_28;
  derivedValue1 = notification(channel[14]).useDerivedValue(Z);
  const obj11 = notification(channel[14]);
  const fn = function j() {
    if (isExpandableNotification) {
      if (hasPreviewableMedia) {
        const obj = { marginRight: derivedValue1.get(), minHeight: notification(channel[30]).PREVIEW_SIZE };
      }
      return {};
    }
  };
  obj2 = { isExpandableNotification, hasPreviewableMedia, accessoryWidthSV: derivedValue1, PREVIEW_SIZE: notification(channel[30]).PREVIEW_SIZE };
  fn.__closure = obj2;
  fn.__workletHash = 2118539495108;
  fn.__initData = closure_29;
  const items3 = [channel, parentChannel, guild, nullableMessageAuthor, isExpanded, handleDismissNotification];
  const animatedStyle = notification(channel[14]).useAnimatedStyle(fn);
  const memo = parentChannel.useMemo(() => ({ type: "message", channel, parentChannel, guild, author: nullableMessageAuthor, expanded: isExpanded, onDismiss: handleDismissNotification }), items3);
  const tmp23 = onReactionPress(closure_17, { message });
  let tmp24 = tmp23;
  if (isExpandableNotification) {
    let obj3 = { message, expandedSV, notificationGestureY, initialPreviewContent: tmp23, initialPreviewHeight: sharedValue, accessoryWidthSV: derivedValue1 };
    tmp24 = onReactionPress(closure_26, obj3);
  }
  const obj13 = notification(channel[14]);
  const fn2 = function z() {
    const obj = {};
    let num = 0;
    if (expandedSV.get()) {
      num = 1;
    }
    obj.opacity = notification(channel[31]).withTiming(num, isExpanded);
    const obj2 = notification(channel[31]);
    let num2 = 0;
    if (expandedSV.get()) {
      num2 = 60;
    }
    obj.maxHeight = notification(channel[31]).withTiming(num2, isExpanded);
    return obj;
  };
  obj4 = { withTiming: notification(channel[31]).withTiming, expandedSV, DEFAULT_ANIMATION_TIMING: isExpanded };
  fn2.__closure = obj4;
  fn2.__workletHash = 2035414692485;
  fn2.__initData = closure_30;
  const animatedStyle1 = notification(channel[14]).useAnimatedStyle(fn2);
  obj5 = {};
  obj6 = { user: message.author };
  const guild2 = notification.guild;
  let id;
  if (null != guild2) {
    id = guild2.id;
  }
  obj6.guildId = id;
  obj6.size = notification(channel[16]).AvatarSizes.NORMAL;
  obj5.icon = onReactionPress(notification(channel[16]).Avatar, obj6);
  obj5.accessoryLabelNode = tmp10;
  obj5.bodyStyle = animatedStyle;
  if (!isExpandableNotification) {
    obj7 = { message };
    let tmp34;
    if (isExpandableNotification) {
      tmp34 = derivedValue;
    }
    obj7.accessoryExitProgressSV = tmp34;
    let tmp31Result = onReactionPress(notification(channel[30]).MediaPreviewRightAccessory, obj7);
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
    tmp36 = onReactionPress(notification(channel[33]).MessageNotificationReactBar, obj8);
  }
  obj5.expandableContent = tmp36;
  return onReactionPress(notification(channel[32]).NotificationPressable, obj5);
});
