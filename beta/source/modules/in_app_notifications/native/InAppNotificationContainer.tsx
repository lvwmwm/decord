// Module ID: 9564
// Function ID: 9565
// Name: InAppNotificationContainer
// Dependencies: [32, 19, 17, 8966, 9555, 1074, 21, 4566, 4836, 9565, 9639, 9642, 9643, 9677, 9678, 10860, 10861, 10864, 9554, 504, 5298, 4837, 1241, 6073, 5280, 1177, 6544, 9597, 2]
// Exports: default

// Module 9564 (InAppNotificationContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import spring from "spring" /* 5280 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 9554 */;
import MessageNotificationDefault from "MessageNotification" /* 9565 */;
import MessageFailedToSendNotificationDefault from "MessageFailedToSendNotification" /* 9639 */;
import ForumThreadCreatedNotificationDefault from "ForumThreadCreatedNotification" /* 9642 */;
import BugReporterNotification from "BugReporterNotification" /* 9643 */;
import AlertNotificationDefault from "AlertNotification" /* 9677 */;
import ReactionNotificationDefault from "ReactionNotification" /* 9678 */;
import ReminderNotificationDefault from "ReminderNotification" /* 10860 */;
import RestrictedHoursWarningNotificationDefault from "RestrictedHoursWarningNotification" /* 10861 */;
import MessageRequestNotificationDefault from "MessageRequestNotification" /* 10864 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 8966 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 9555 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let first, set, set2;

let Easing;
let NOTIFICATION_CONTAINER_MARGIN;
let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function NotificationWrapper(notification) {
  notification = notification.notification;
  const type = notification.type;
  if (constants.MESSAGE === type) {
    return jsx(MessageNotificationDefault, { notification });
  } else if (constants.MESSAGE_FAILED_TO_SEND === type) {
    return jsx(MessageFailedToSendNotificationDefault, { notification });
  } else if (constants.FORUM_THREAD_CREATED === type) {
    return jsx(ForumThreadCreatedNotificationDefault, { notification });
  } else if (constants.BUG_REPORTER === type) {
    return jsx(BugReporterNotification.BugReporterNotification, { notification });
  } else if (constants.ALERT === type) {
    return jsx(AlertNotificationDefault, { notification });
  } else if (constants.REACTION === type) {
    return jsx(ReactionNotificationDefault, { notification });
  } else if (constants.MESSAGE_REMINDER === type) {
    return jsx(ReminderNotificationDefault, { notification });
  } else {
    if (constants.RESTRICTED_HOURS_WARNING !== type) {
      if (constants.RESTRICTED_SCHEDULE_UPDATED !== type) {
        if (constants.MESSAGE_REQUEST === type) {
          return jsx(MessageRequestNotificationDefault, { notification });
        } else {
          return null;
        }
      }
    }
    return jsx(RestrictedHoursWarningNotificationDefault, { notification });
  }
}
const StyleSheet = react_native.StyleSheet;
({ DEFAULT_ANIMATION_TIMING: metroImportDefault, extrapolateConfig: metroImportAll, MIN_SWIPE_DISTANCE: c9, MIN_SWIPE_VELOCITY: c10, PAN_INPUT_RANGE: unpackModuleId, NOTIFICATION_CONTAINER_MARGIN } = InAppNotificationConstants);
({ InAppNotificationTypes: closure_12, AnalyticEvents: map1 } = Constants);
const jsx = Fragment.jsx;
let obj = { duration: 200, easing: Easing.in(ReanimatedRexport.Easing.ease) };
Easing = ReanimatedRexport.Easing;
let obj2 = { safeAreaContainer: { position: "absolute", left: 0, right: 0, backgroundColor: "transparent", marginTop: 8, top: 0, bottom: 0 }, animatedContainer: { marginLeft: NOTIFICATION_CONTAINER_MARGIN, marginRight: NOTIFICATION_CONTAINER_MARGIN } };
let closure_16 = createStyles.createStyles(obj2);
let closure_18 = { code: "function InAppNotificationContainerTsx1(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}" };
const __initData = { code: "function InAppNotificationContainerTsx2(){const{runOnJS,setPanning}=this.__closure;runOnJS(setPanning)(false);}" };
const __initData2 = { code: "function InAppNotificationContainerTsx3(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,notificationGestureY,withTiming,PAN_INPUT_RANGE,DEFAULT_ANIMATION_TIMING,runOnJS,handleDismissNotification,setPanning,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(shouldDismiss&&event.translationY<=0){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],DEFAULT_ANIMATION_TIMING,'animate-always',function(finished){if(finished){runOnJS(handleDismissNotification)('swipe');}}));}else{runOnJS(setPanning)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}" };
const __initData3 = { code: "function InAppNotificationContainerTsx4(event){const{startY,notificationGestureY,velocityY}=this.__closure;const rawY=startY.get()+event.translationY;const newY=Math.min(rawY,startY.get());notificationGestureY.set(newY);velocityY.set(event.velocityY);}" };
const __initData4 = { code: "function InAppNotificationContainerTsx5(){const{startY,notificationGestureY,velocityY,runOnJS,setPanning}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setPanning)(true);}" };
let closure_23 = { code: "function InAppNotificationContainerTsx6(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('swipe');}}" };
const __initData5 = { code: "function InAppNotificationContainerTsx7(){const{notificationGestureY,scale,initialized,interpolate,PAN_INPUT_RANGE,extrapolateConfig}=this.__closure;const gestureY=notificationGestureY.get();const scaleValue=scale.get();const scaleTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scaleValue;const opacityTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scaleValue;return{transform:[{translateY:gestureY},{scale:scaleTransform}],opacity:opacityTransform};}" };
let result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContainer.tsx");

export default function InAppNotificationContainer(notification) {
  let setInitialized;
  let str;
  notification = notification.notification;
  let channelType;
  let tmp = closure_16();
  let items = [notification];
  const memo = channelType.useMemo(() => {
    obj = InAppNotificationUtils;
    return obj.extractMetadataFromNotification(notification);
  }, items);
  const guildId = memo.guildId;
  const channelId = memo.channelId;
  const messageId = memo.messageId;
  channelType = memo.channelType;
  const tmp4 = channelId;
  obj = notification(channelId[7]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = notification(channelId[7]);
  const sharedValue1 = obj2.useSharedValue(0);
  let obj3 = notification(channelId[7]);
  const sharedValue2 = obj3.useSharedValue(0);
  let obj4 = notification(channelId[7]);
  const sharedValue3 = obj4.useSharedValue(0);
  const tmp9 = messageId(channelType.useState(false), 2);
  const initialized = tmp9[0];
  MIN_SWIPE_VELOCITY = tmp9[1];
  const tmp11 = messageId(channelType.useState(false), 2);
  const first1 = tmp11[0];
  closure_12 = tmp13;
  let obj5 = notification(channelId[19]);
  const items1 = [sharedValue1];
  const items2 = [notification, guildId, channelId, messageId];
  const stateFromStores = obj5.useStateFromStores(items1, () => sharedValue1.isOpen());
  const handleDismissNotification = channelType.useCallback((dismissReason) => {
    if (null != dismissReason) {
      const obj2 = { type: notification.type, guildId, channelId, dismissReason, inAppNotificationId: notification.inAppNotificationId, messageId };
      obj = InAppNotificationUtils;
      obj.trackDismissed(obj2);
    }
    const onDismiss = notification.onDismiss;
    if (onDismiss != null) {
      onDismiss();
    }
  }, items2);
  guildId(channelId[20])(() => {
    set = sharedValue3.set;
    obj = timing;
    const fn = function t() {
      obj = notification(channelId[7]);
      return obj.runOnJS(setInitialized)(true);
    };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setInitialized };
    fn.__workletHash = 16158991995287;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, setInitialized });
    const result = set(obj.withTiming(1, obj, "respect-motion-settings", fn));
    return () => {
      obj = notification(channelId[7]);
      return obj.cancelAnimation(sharedValue3);
    };
  });
  const items3 = [initialized, notification.type, guildId, channelId, notification.inAppNotificationId, messageId, channelType];
  const effect = channelType.useEffect(() => {
    const tmp = first;
    if (tmp) {
      const obj2 = { type: notification.type, guild_id: guildId, channel_id: channelId, in_app_notification_id: notification.inAppNotificationId, message_id: messageId, channel_type: channelType };
      obj = AnalyticsUtilsDefault;
      obj.track(map1.IN_APP_NOTIFICATION_SHOWN, obj2);
    }
  }, items3);
  const Gesture = notification(channelId[23]).Gesture;
  const PanResult = Gesture.Pan();
  const tmp16 = guildId;
  class X {
    constructor() {
      const result = sharedValue2.set(sharedValue.get());
      const result1 = sharedValue1.set(0);
      obj = ReanimatedRexport;
      obj.runOnJS(closure_12)(true);
    }
  }
  X.__closure = { startY: sharedValue2, notificationGestureY: sharedValue, velocityY: sharedValue1, runOnJS: notification(channelId[7]).runOnJS, setPanning: tmp11[1] };
  X.__workletHash = 16480026707740;
  X.__initData = __initData4;
  ({ startY: sharedValue2, notificationGestureY: sharedValue, velocityY: sharedValue1, runOnJS: notification(channelId[7]).runOnJS, setPanning: tmp11[1] });
  const onBeginResult = PanResult.onBegin(X);
  class K {
    constructor(translationY) {
      const sum = sharedValue2.get() + translationY.translationY;
      const result = sharedValue.set(Math.min(sum, sharedValue2.get()));
      const result1 = sharedValue1.set(translationY.velocityY);
    }
  }
  K.__closure = { startY: sharedValue2, notificationGestureY: sharedValue, velocityY: sharedValue1 };
  K.__workletHash = 4467653619554;
  K.__initData = __initData3;
  let fn = function q(translationY) {
    obj = sharedValue1;
    if (Math.abs(sharedValue1.get()) >= c10) {
      if (translationY.translationY <= 0) {
        set2 = sharedValue.set;
        const withTiming = timing.withTiming;
        const tmp5 = require;
        if (translationY.translationY > 0) {
          first = unpackModuleId[2];
        } else {
          first = unpackModuleId[0];
        }
        const fn = function n(arg0) {
          const tmp = arg0;
          if (tmp) {
            obj = notification(channelId[7]);
            obj.runOnJS(handleDismissNotification)("swipe");
          }
        };
        fn.__closure = { runOnJS: tmp5(4566).runOnJS, handleDismissNotification };
        fn.__workletHash = 3243235500892;
        fn.__initData = __initData2;
        const obj4 = { runOnJS: tmp5(4566).runOnJS, handleDismissNotification };
        set2(withTiming(first, metroImportDefault, "animate-always", fn));
      }
    } else {
      const _Math = Math;
      let tmp = React4;
    }
    const obj2 = ReanimatedRexport;
    obj2.runOnJS(closure_12)(false);
    set = sharedValue.set;
    const obj3 = spring;
    const obj5 = { damping: 10, mass: 1, stiffness: 100, velocity: obj.get() };
    const result = set(obj3.withSpring(0, obj5, "animate-always"));
  };
  const onUpdateResult = onBeginResult.onUpdate(K);
  fn.__closure = { velocityY: sharedValue1, MIN_SWIPE_VELOCITY, MIN_SWIPE_DISTANCE: initialized, notificationGestureY: sharedValue, withTiming: notification(channelId[21]).withTiming, PAN_INPUT_RANGE: first1, DEFAULT_ANIMATION_TIMING: sharedValue2, runOnJS: notification(channelId[7]).runOnJS, handleDismissNotification, setPanning: tmp11[1], withSpring: notification(channelId[24]).withSpring };
  fn.__workletHash = 12181654548715;
  fn.__initData = __initData2;
  ({ velocityY: sharedValue1, MIN_SWIPE_VELOCITY, MIN_SWIPE_DISTANCE: initialized, notificationGestureY: sharedValue, withTiming: notification(channelId[21]).withTiming, PAN_INPUT_RANGE: first1, DEFAULT_ANIMATION_TIMING: sharedValue2, runOnJS: notification(channelId[7]).runOnJS, handleDismissNotification, setPanning: tmp11[1], withSpring: notification(channelId[24]).withSpring });
  const onEndResult = onUpdateResult.onEnd(fn);
  class Q {
    constructor() {
      obj = ReanimatedRexport;
      obj.runOnJS(closure_12)(false);
    }
  }
  Q.__closure = { runOnJS: notification(channelId[7]).runOnJS, setPanning: tmp11[1] };
  Q.__workletHash = 7413448149557;
  Q.__initData = __initData;
  ({ runOnJS: notification(channelId[7]).runOnJS, setPanning: tmp11[1] });
  const onFinalizeResult = onEndResult.onFinalize(Q);
  const obj13 = notification(channelId[7]);
  class Z {
    constructor() {
      const value = sharedValue.get();
      let value2 = sharedValue3.get();
      const items = [{ translateY: value }, ];
      let interpolateResult = value2;
      if (first) {
        obj = ReanimatedRexport;
        interpolateResult = obj.interpolate(value, unpackModuleId, [0.3, 1, 0.3], metroImportAll);
      }
      const obj2 = { transform: items, opacity: value2 };
      items[1] = { scale: interpolateResult };
      if (first) {
        const obj3 = ReanimatedRexport;
        value2 = obj3.interpolate(value, unpackModuleId, [0, 1, 0], metroImportAll);
      }
      return obj2;
    }
  }
  Z.__closure = { notificationGestureY: sharedValue, scale: sharedValue3, initialized, interpolate: notification(channelId[7]).interpolate, PAN_INPUT_RANGE: first1, extrapolateConfig: sharedValue3 };
  Z.__workletHash = 1564072865992;
  Z.__initData = __initData5;
  const items4 = [handleDismissNotification, initialized, sharedValue, sharedValue1, first1];
  ({ notificationGestureY: sharedValue, scale: sharedValue3, initialized, interpolate: notification(channelId[7]).interpolate, PAN_INPUT_RANGE: first1, extrapolateConfig: sharedValue3 });
  const animatedStyle = obj13.useAnimatedStyle(Z);
  const memo1 = channelType.useMemo(() => ({ notificationGestureY: sharedValue, velocityY: sharedValue1, initialized, handleDismissNotification, panning: first1 }), items4);
  const OverlayView = notification(channelId[25]).OverlayView;
  const rect = { top: true, bottom: true, left: true, right: true, style: tmp.safeAreaContainer, pointerEvents: "box-none", importantForAccessibility: str, children: null };
  str = undefined;
  const SafeAreaPaddingView = notification(channelId[26]).SafeAreaPaddingView;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  const Provider = tmp3(tmp4[27]).InAppNotificationContext.Provider;
  const GestureDetector = tmp3(tmp4[23]).GestureDetector;
  const items5 = [tmp.animatedContainer, animatedStyle];
  const View = tmp16(tmp4[7]).View;
  return <OverlayView style={sharedValue.absoluteFill} pointerEvents="box-none">{null}</OverlayView>;
};
