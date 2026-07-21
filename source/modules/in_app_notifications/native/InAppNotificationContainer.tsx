// Module ID: 10238
// Function ID: 79112
// Name: NotificationWrapper
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 10238 (NotificationWrapper)
import closure_3 from "result";
import closure_4 from "result";
import result from "result";
import closure_8 from "result";
import closure_9 from "result";
import result from "result";
import result from "result";
import result from "result";
import { Easing } from "result";
import result from "result";
import result from "result";

function NotificationWrapper(notification) {
  notification = notification.notification;
  const type = notification.type;
  if (constants.MESSAGE === type) {
    let obj = { notification };
    return callback2(importDefault(dependencyMap[13]), obj);
  } else if (constants.MESSAGE_FAILED_TO_SEND === type) {
    obj = { notification };
    return callback2(importDefault(dependencyMap[14]), obj);
  } else if (constants.FORUM_THREAD_CREATED === type) {
    const obj1 = { notification };
    return callback2(importDefault(dependencyMap[15]), obj1);
  } else if (constants.BUG_REPORTER === type) {
    const obj2 = { notification };
    return callback2(arg1(dependencyMap[16]).BugReporterNotification, obj2);
  } else if (constants.ALERT === type) {
    const obj3 = { notification };
    return callback2(importDefault(dependencyMap[17]), obj3);
  } else if (constants.REACTION === type) {
    const obj4 = { notification };
    return callback2(importDefault(dependencyMap[18]), obj4);
  } else if (constants.MESSAGE_REMINDER === type) {
    const obj5 = { notification };
    return callback2(importDefault(dependencyMap[19]), obj5);
  } else {
    if (constants.RESTRICTED_HOURS_WARNING !== type) {
      if (constants.RESTRICTED_SCHEDULE_UPDATED !== type) {
        if (constants.MESSAGE_REQUEST === type) {
          obj = { notification };
          return callback2(importDefault(dependencyMap[21]), obj);
        } else {
          return null;
        }
      }
    }
    const obj6 = { notification };
    return callback2(importDefault(dependencyMap[20]), obj6);
  }
}
function DetachedNotificationContent(notification) {
  notification = notification.notification;
  let tmp = null;
  if (notification.type === constants.MESSAGE) {
    const obj = { notification };
    tmp = callback2(arg1(dependencyMap[22]).MessageNotificationDetachedContent, obj);
  }
  return tmp;
}
({ View: closure_5, StyleSheet: closure_6, Keyboard: closure_7 } = result);
({ DEFAULT_ANIMATION_TIMING: closure_10, extrapolateConfig: closure_11, MIN_SWIPE_DISTANCE: closure_12, MIN_SWIPE_VELOCITY: closure_13, NOTIFICATION_BOB_RANGE: closure_14, EXPANDABLE_MIN_WINDOW_HEIGHT: closure_15, PAN_INPUT_RANGE: closure_16 } = result);
({ InAppNotificationTypes: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, AnalyticsObjects: closure_20, AnalyticsObjectTypes: closure_21 } = result);
({ jsx: closure_22, jsxs: closure_23 } = result);
const obj = { duration: 200 };
obj.easing = Easing.in(require("result").Easing.ease);
let closure_25 = result.createStyles({ safeAreaContainer: { contentType: 4209, width: 1379557632, height: 1153565118, bitrate: 28000321, framerate: 1077504, type: 1111621632, settings: 1056965288 }, backdrop: { 1365423970: null, 996475903: null }, animatedContainer: {} });
let closure_26 = { code: "function InAppNotificationContainerTsx1(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('autodismissed');}}" };
let closure_27 = { code: "function InAppNotificationContainerTsx2(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}" };
let closure_28 = { code: "function InAppNotificationContainerTsx3(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING)};}" };
let closure_29 = { code: "function InAppNotificationContainerTsx4(){const{runOnJS,setPanning}=this.__closure;runOnJS(setPanning)(false);}" };
let closure_30 = { code: "function InAppNotificationContainerTsx5(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,isExpandableNotification,notificationGestureY,expandedSV,runOnJS,setExpanded,withTiming,PAN_INPUT_RANGE,DEFAULT_ANIMATION_TIMING,handleDismissNotification,setPanning,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(isExpandableNotification&&event.translationY>MIN_SWIPE_DISTANCE){notificationGestureY.set(0);expandedSV.set(true);runOnJS(setExpanded)(true,'swipe');}else if(shouldDismiss&&event.translationY<=0){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],DEFAULT_ANIMATION_TIMING,'animate-always',function(finished){if(finished){runOnJS(handleDismissNotification)('swipe');}}));}else{runOnJS(setPanning)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}" };
let closure_31 = { code: "function InAppNotificationContainerTsx6(event){const{startY,isExpandableNotification,notificationGestureY,velocityY}=this.__closure;const rawY=startY.get()+event.translationY;const newY=isExpandableNotification&&rawY>0?rawY:Math.min(rawY,startY.get());notificationGestureY.set(newY);velocityY.set(event.velocityY);}" };
let closure_32 = { code: "function InAppNotificationContainerTsx7(){const{startY,notificationGestureY,velocityY,runOnJS,setPanning}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setPanning)(true);}" };
let closure_33 = { code: "function InAppNotificationContainerTsx8(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('swipe');}}" };
let closure_34 = { code: "function InAppNotificationContainerTsx9(){const{notificationGestureY,scale,isExpandableNotification,interpolate,MIN_SWIPE_DISTANCE,PAN_INPUT_RANGE,NOTIFICATION_BOB_RANGE,extrapolateConfig,initialized}=this.__closure;const gestureY=notificationGestureY.get();const scaleValue=scale.get();if(isExpandableNotification&&gestureY>0){return{transform:[{translateY:interpolate(gestureY,[0,MIN_SWIPE_DISTANCE,PAN_INPUT_RANGE[2]],[0,0,NOTIFICATION_BOB_RANGE],extrapolateConfig)},{scale:initialized?1:scaleValue}],opacity:initialized?1:scaleValue};}const scaleTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scaleValue;const opacityTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scaleValue;return{transform:[{translateY:gestureY},{scale:scaleTransform}],opacity:opacityTransform};}" };
result = result.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContainer.tsx");

export default function InAppNotificationContainer(notification) {
  let channel;
  let message;
  notification = notification.notification;
  const arg1 = notification;
  const tmp = callback3();
  let obj = React;
  const items = [notification];
  const memo = React.useMemo(() => notification(channelId[23]).extractMetadataFromNotification(notification), items);
  const guildId = memo.guildId;
  const importDefault = guildId;
  const channelId = memo.channelId;
  const dependencyMap = channelId;
  const messageId = memo.messageId;
  let callback = messageId;
  const channelType = memo.channelType;
  const React = channelType;
  let obj1 = arg1(dependencyMap[8]);
  const sharedValue = obj1.useSharedValue(0);
  let obj2 = arg1(dependencyMap[8]);
  const sharedValue1 = obj2.useSharedValue(0);
  let obj3 = arg1(dependencyMap[8]);
  const sharedValue2 = obj3.useSharedValue(0);
  let obj4 = arg1(dependencyMap[8]);
  const sharedValue3 = obj4.useSharedValue(0);
  let closure_8 = sharedValue3;
  const tmp9 = callback(React.useState(null), 2);
  const first = tmp9[0];
  let closure_9 = first;
  const tmp11 = tmp9[1];
  const tmp12 = callback(React.useState(false), 2);
  const first1 = tmp12[0];
  let closure_12 = tmp12[1];
  const tmp14 = callback(React.useState(false), 2);
  const first2 = tmp14[0];
  let closure_14 = tmp14[1];
  let obj5 = arg1(dependencyMap[8]);
  const sharedValue4 = obj5.useSharedValue(false);
  const tmp18 = importDefault(dependencyMap[24])(sharedValue4);
  const tmp19 = callback(React.useState(false), 2);
  const first3 = tmp19[0];
  let closure_18 = tmp19[1];
  const tmp21 = callback(React.useState(false), 2);
  const first4 = tmp21[0];
  const tmp23 = tmp21[1];
  let obj6 = arg1(dependencyMap[25]);
  const items1 = [closure_8];
  const stateFromStores = obj6.useStateFromStores(items1, () => sharedValue3.isOpen());
  callback = React.useCallback(() => {
    const result = notification(channelId[26]).UNSAFE_markDismissibleContentAsDismissed(notification(channelId[27]).DismissibleContent.IN_APP_NOTIFICATION_EXPAND_NUX);
  }, []);
  const items2 = [sharedValue4, notification, guildId, channelId, messageId, callback];
  const callback1 = React.useCallback((arg0, arg1) => {
    const result = sharedValue4.set(arg0);
    if (arg0) {
      let obj = guildId(channelId[28]);
      obj.hideAllActionSheets();
      callback();
      obj = { type: notification.type, notif_guild_id: guildId, notif_channel_id: channelId, in_app_notification_id: notification.inAppNotificationId, message_id: messageId };
      let str = "unknown";
      if (null != arg1) {
        str = arg1;
      }
      obj.expand_source = str;
      guildId(channelId[29]).trackWithMetadata(constants.IN_APP_NOTIFICATION_EXPANDED, obj);
      const obj2 = guildId(channelId[29]);
    }
    let num3;
    if (arg0) {
      num3 = 1;
    }
    guildId(channelId[28]).setActionSheetZIndex(num3);
  }, items2);
  const items3 = [tmp18, callback1];
  const callback2 = React.useCallback(() => {
    let flag = !tmp;
    if (!!tmp18) {
      callback1(false);
      flag = true;
    }
    return flag;
  }, items3);
  importDefault(dependencyMap[30])(callback2, tmp18);
  const size = importDefault(dependencyMap[31])({ ignoreKeyboard: true });
  const height = size.height;
  obj = { notification, windowHeight: height };
  const notification2 = obj.notification;
  let obj8 = arg1(dependencyMap[10]);
  const canExpandInAppNotification = obj8.useCanExpandInAppNotification("InAppNotificationContainer");
  let canExpand = canExpandInAppNotification.canExpand;
  if (notification2.type !== first3.MESSAGE) {
    obj = { url: "#ffa813", body: "absolute", padding: null };
  } else {
    ({ message, channel } = notification2);
    if (canExpand) {
      canExpand = obj.windowHeight > sharedValue4;
    }
    let obj9 = arg1(dependencyMap[11]);
    let obj10 = arg1(dependencyMap[12]);
    obj = {};
    let tmp36 = canExpand;
    const canReactToMessageResult = obj9.canReactToMessage(message, channel);
    if (canExpand) {
      tmp36 = tmp30;
    }
    if (tmp36) {
      tmp36 = canReactToMessageResult;
    }
    obj.showReactionBar = tmp36;
    if (canExpand) {
      canExpand = canReplyToMessageResult;
    }
    obj.showReplyInput = canExpand;
    if (!tmp36) {
      tmp36 = canExpand;
    }
    obj.isExpandableNotification = tmp36;
    const canReplyToMessageResult = obj10.canReplyToMessage(channel, message);
  }
  const showReactionBar = obj.showReactionBar;
  const showReplyInput = obj.showReplyInput;
  obj = showReplyInput;
  const isExpandableNotification = obj.isExpandableNotification;
  let callback3 = isExpandableNotification;
  const items4 = [first3, notification, guildId, channelId, messageId];
  callback3 = obj.useCallback((dismissReason) => {
    if (null != dismissReason) {
      let obj = notification(channelId[23]);
      obj = { type: notification.type, guildId, channelId, dismissReason, inAppNotificationId: notification.inAppNotificationId, messageId };
      obj.trackDismissed(obj);
    }
    if (first3) {
      if (notification.type === first3.MESSAGE) {
        const ackMessageIdResult = first.ackMessageId(notification.channel.id);
        let tmp13 = null == ackMessageIdResult;
        if (!tmp13) {
          tmp13 = guildId(channelId[32]).compare(ackMessageIdResult, notification.message.id) < 0;
          const obj3 = guildId(channelId[32]);
        }
        if (tmp13) {
          tmp13 = notification.mentionCount >= first.getMentionCount(notification.channel.id);
        }
        if (tmp13) {
          const obj4 = notification(channelId[33]);
          obj = { section: first4.IN_APP_NOTIFICATION, object: tmp23.ACK_IN_APP_NOTIFICATION_ACTION, objectType: callback.ACK_SEMI_AUTOMATIC };
          obj4.ack(notification.channel.id, obj, true, true, notification.message.id);
        }
      }
    }
    if (null != notification.onDismiss) {
      notification.onDismiss();
    }
  }, items4);
  let closure_26 = callback3;
  let closure_27 = obj.useRef(null);
  const items5 = [first2, sharedValue, callback3];
  const effect = obj.useEffect(() => {
    let tmp = first2;
    if (first2) {
      tmp = null == ref.current;
    }
    if (tmp) {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        let obj = callback(closure_2[34]);
        const fn = function t(arg0) {
          if (arg0) {
            callback(closure_2[8]).runOnJS(closure_26)("autodismissed");
            const obj = callback(closure_2[8]);
          }
        };
        obj = { runOnJS: callback(closure_2[8]).runOnJS, handleDismissNotification: closure_26 };
        fn.__closure = obj;
        fn.__workletHash = 1150739008183;
        fn.__initData = closure_26;
        const result = closure_5.set(obj.withTiming(closure_16[0], closure_10, "respect-motion-settings", fn));
      }, 2000);
    }
  }, items5);
  let tmp3Result = tmp3(tmp4[35]);
  const unmountEffect = tmp3Result.useUnmountEffect(() => {
    guildId(channelId[28]).setActionSheetZIndex(undefined);
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      notification(channelId[8]).cancelAnimation(sharedValue);
      const obj2 = notification(channelId[8]);
    }
  });
  importDefault(dependencyMap[35])(() => {
    let obj = notification(channelId[34]);
    const fn = function t() {
      return callback(closure_2[8]).runOnJS(closure_12)(true);
    };
    obj = { runOnJS: notification(channelId[8]).runOnJS, setInitialized: closure_12 };
    fn.__closure = obj;
    fn.__workletHash = 11548697745556;
    fn.__initData = closure_27;
    const result = sharedValue3.set(obj.withTiming(1, showReplyInput, "respect-motion-settings", fn));
    return () => callback(closure_2[8]).cancelAnimation(closure_8);
  });
  const items6 = [first1, notification.type, guildId, channelId, notification.inAppNotificationId, messageId, channelType];
  const effect1 = obj.useEffect(() => {
    if (first1) {
      let obj = guildId(channelId[36]);
      obj = { type: notification.type, guild_id: guildId, channel_id: channelId, in_app_notification_id: notification.inAppNotificationId, message_id: messageId, channel_type: channelType };
      obj.track(constants.IN_APP_NOTIFICATION_SHOWN, obj);
    }
  }, items6);
  tmp3Result = tmp3(tmp4[8]);
  function xi() {
    const obj = {};
    let num = 0;
    if (sharedValue4.get()) {
      num = 1;
    }
    obj.opacity = notification(channelId[34]).withTiming(num, tmp11);
    return obj;
  }
  obj1 = { withTiming: tmp3(tmp4[34]).withTiming, expandedSV: sharedValue4, DEFAULT_ANIMATION_TIMING: tmp11 };
  xi.__closure = obj1;
  xi.__workletHash = 2841593511002;
  xi.__initData = closure_28;
  const animatedStyle = tmp3Result.useAnimatedStyle(xi);
  const Gesture = tmp3(tmp4[37]).Gesture;
  let tmp43 = !tmp18;
  if (tmp43) {
    tmp43 = !first2;
  }
  const PanResult = Gesture.Pan();
  const tmp17 = importDefault;
  function bi() {
    const result = sharedValue2.set(sharedValue.get());
    const result1 = sharedValue1.set(0);
    notification(channelId[8]).runOnJS(tmp23)(true);
  }
  obj2 = { startY: sharedValue2, notificationGestureY: sharedValue, velocityY: sharedValue1, runOnJS: arg1(dependencyMap[8]).runOnJS, setPanning: tmp23 };
  bi.__closure = obj2;
  bi.__workletHash = 11316955045022;
  bi.__initData = closure_32;
  const enabledResult = Gesture.Pan().enabled(tmp43);
  class Gi {
    constructor(arg0) {
      sum = closure_7.get() + notification.translationY;
      if (!isExpandableNotification) {
        tmp3 = globalThis;
        _Math = Math;
        tmp4 = closure_7;
        bound = Math.min(sum, closure_7.get());
      } else {
        num = 0;
        bound = sum;
      }
      result = closure_5.set(bound);
      result1 = closure_6.set(notification.velocityY);
      return;
    }
  }
  Gi.__closure = { startY: sharedValue2, isExpandableNotification, notificationGestureY: sharedValue, velocityY: sharedValue1 };
  Gi.__workletHash = 16677375054247;
  Gi.__initData = closure_31;
  const onBeginResult = Gesture.Pan().enabled(tmp43).onBegin(bi);
  function vi(translationY) {
    let tmp = Math.abs(sharedValue1.get()) >= first2;
    if (!tmp) {
      const _Math = Math;
      tmp = Math.abs(translationY.translationY) >= closure_12;
    }
    if (isExpandableNotification) {
      if (translationY.translationY > closure_12) {
        const result = sharedValue.set(0);
        const result1 = sharedValue4.set(true);
        notification(channelId[8]).runOnJS(callback1)(true, "swipe");
        const obj6 = notification(channelId[8]);
        const tmp23 = sharedValue4;
      }
    }
    if (tmp) {
      if (translationY.translationY <= 0) {
        const obj4 = notification(channelId[34]);
        if (translationY.translationY > 0) {
          let first = tmp18[2];
        } else {
          first = tmp18[0];
        }
        const fn = function n(arg0) {
          if (arg0) {
            callback(closure_2[8]).runOnJS(closure_26)("swipe");
            const obj = callback(closure_2[8]);
          }
        };
        let obj = { runOnJS: notification(channelId[8]).runOnJS, handleDismissNotification: callback3 };
        fn.__closure = obj;
        fn.__workletHash = 1684596854482;
        fn.__initData = closure_33;
        const result2 = sharedValue.set(obj4.withTiming(first, tmp11, "animate-always", fn));
      }
    }
    obj = notification(channelId[8]);
    obj.runOnJS(tmp23)(false);
    obj = { velocity: sharedValue1.get() };
    const result3 = sharedValue.set(notification(channelId[38]).withSpring(0, obj, "animate-always"));
  }
  obj3 = { velocityY: sharedValue1, MIN_SWIPE_VELOCITY: first2, MIN_SWIPE_DISTANCE: closure_12, isExpandableNotification, notificationGestureY: sharedValue, expandedSV: sharedValue4, runOnJS: arg1(dependencyMap[8]).runOnJS, setExpanded: callback1, withTiming: arg1(dependencyMap[34]).withTiming, PAN_INPUT_RANGE: tmp18, DEFAULT_ANIMATION_TIMING: tmp11, handleDismissNotification: callback3, setPanning: tmp23, withSpring: arg1(dependencyMap[38]).withSpring };
  vi.__closure = obj3;
  vi.__workletHash = 5165226193044;
  vi.__initData = closure_30;
  const onUpdateResult = Gesture.Pan().enabled(tmp43).onBegin(bi).onUpdate(Gi);
  class Mi {
    constructor() {
      obj = notification(channelId[8]);
      tmp = obj.runOnJS(closure_20)(false);
      return;
    }
  }
  obj4 = { runOnJS: arg1(dependencyMap[8]).runOnJS, setPanning: tmp23 };
  Mi.__closure = obj4;
  Mi.__workletHash = 2178187669683;
  Mi.__initData = closure_29;
  const onEndResult = Gesture.Pan().enabled(tmp43).onBegin(bi).onUpdate(Gi).onEnd(vi);
  const onFinalizeResult = Gesture.Pan().enabled(tmp43).onBegin(bi).onUpdate(Gi).onEnd(vi).onFinalize(Mi);
  class Ri {
    constructor() {
      value = closure_5.get();
      value1 = closure_8.get();
      if (isExpandableNotification) {
        num = 0;
        if (value > 0) {
          obj = {};
          obj1 = {};
          tmp17 = notification;
          tmp18 = channelId;
          num4 = 8;
          obj7 = notification(channelId[8]);
          tmp19 = useState;
          items = [0.229];
          items[1] = useState;
          tmp20 = closure_16;
          num5 = 2;
          items[2] = closure_16[2];
          tmp21 = useState;
          items1 = ["<string:53040003>", "<string:806589490>"];
          items1[2] = useState;
          tmp22 = closure_11;
          tmp23 = obj7;
          tmp24 = value;
          tmp25 = items;
          tmp26 = items1;
          obj1.translateY = obj7.interpolate(value, items, items1, closure_11);
          items2 = [, ];
          items2[0] = obj1;
          obj2 = {};
          tmp27 = closure_11;
          num6 = 1;
          num7 = 1;
          if (!closure_11) {
            num7 = value1;
          }
          obj2.scale = num7;
          items2[1] = obj2;
          obj.transform = items2;
          tmp28 = closure_11;
          if (!closure_11) {
            num6 = value1;
          }
          obj.opacity = num6;
        }
        return obj;
      }
      obj = {};
      items3 = [, ];
      items3[0] = { translateY: value };
      obj3 = {};
      interpolateResult = value1;
      if (closure_11) {
        tmp4 = notification;
        tmp5 = channelId;
        num2 = 8;
        obj3 = notification(channelId[8]);
        tmp6 = closure_16;
        tmp7 = closure_11;
        tmp8 = obj3;
        tmp9 = value;
        interpolateResult = obj3.interpolate(value, closure_16, [true, true, true], closure_11);
      }
      obj3.scale = interpolateResult;
      items3[1] = obj3;
      obj.transform = items3;
      interpolateResult1 = value1;
      if (closure_11) {
        tmp11 = notification;
        tmp12 = channelId;
        num3 = 8;
        obj4 = notification(channelId[8]);
        tmp13 = closure_16;
        tmp14 = closure_11;
        tmp15 = obj4;
        tmp16 = value;
        interpolateResult1 = obj4.interpolate(value, closure_16, [15400960, 14090240, 292749312], closure_11);
      }
      obj.opacity = interpolateResult1;
      return;
    }
  }
  obj5 = { notificationGestureY: sharedValue, scale: sharedValue3, isExpandableNotification, interpolate: arg1(dependencyMap[8]).interpolate, MIN_SWIPE_DISTANCE: closure_12, PAN_INPUT_RANGE: tmp18, NOTIFICATION_BOB_RANGE: closure_14, extrapolateConfig: first1, initialized: first1 };
  Ri.__closure = obj5;
  Ri.__workletHash = 14122965198084;
  Ri.__initData = closure_34;
  const items7 = [first2, sharedValue4, callback3, first1, tmp18, sharedValue, sharedValue3, callback1, sharedValue1, first4, isExpandableNotification, showReactionBar, showReplyInput, first, tmp11];
  const animatedStyle1 = arg1(dependencyMap[8]).useAnimatedStyle(Ri);
  const memo1 = React.useMemo(() => ({ notificationGestureY: sharedValue, velocityY: sharedValue1, containerScale: sharedValue3, initialized: first1, autoDismissing: first2, setAutoDismissing: closure_14, setActionTaken: closure_18, isExpanded: tmp18, expandedSV: sharedValue4, setExpanded: callback1, handleDismissNotification: callback3, panning: first4, isExpandableNotification, showReactionBar, showReplyInput, confirmation: first, setConfirmation: tmp11 }), items7);
  obj6 = { style: sharedValue1.absoluteFill, pointerEvents: "box-none" };
  const obj7 = { style: items8 };
  const items8 = [tmp.backdrop, { width: size.width, height }];
  let str = "none";
  if (tmp18) {
    str = "auto";
  }
  obj7.pointerEvents = str;
  obj8 = {
    style: animatedStyle,
    onDismiss() {
      sharedValue2.dismiss();
      callback1(false);
    }
  };
  const intl = arg1(dependencyMap[41]).intl;
  obj8.accessibilityLabel = intl.string(arg1(dependencyMap[41]).t.9sewOj);
  obj7.children = callback1(arg1(dependencyMap[40]).Backdrop, obj8);
  const items9 = [callback1(sharedValue, obj7), ];
  obj9 = { transparentBlack: "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==", withReducedMotion: null, getEmbeddedActivityLaunchability: "d867c905e6d6729963afa953ea030ad9", showChannelChangeConfirmationAlert: "bg.messages.d867c905e6d6729963afa953ea030ad9.compiled.messages", PREMIUM_INLINE_ROADBLOCK: "jsona", aa: "tenor", style: tmp.safeAreaContainer };
  let str2;
  if (stateFromStores) {
    str2 = "no-hide-descendants";
  }
  obj9.importantForAccessibility = str2;
  obj10 = { value: memo1 };
  const obj11 = { gesture: onFinalizeResult };
  const obj12 = { style: items10, pointerEvents: "box-none" };
  const items10 = [tmp.animatedContainer, animatedStyle1];
  obj12.children = callback1(NotificationWrapper, { notification });
  obj11.children = callback1(importDefault(dependencyMap[8]).View, obj12);
  const items11 = [callback1(arg1(dependencyMap[37]).GestureDetector, obj11), callback1(DetachedNotificationContent, { notification })];
  obj10.children = items11;
  obj9.children = showReactionBar(arg1(dependencyMap[43]).InAppNotificationContext.Provider, obj10);
  items9[1] = callback1(arg1(dependencyMap[42]).SafeAreaPaddingView, obj9);
  obj6.children = items9;
  return showReactionBar(arg1(dependencyMap[39]).OverlayView, obj6);
};
