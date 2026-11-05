// Module ID: 11226
// Function ID: 11227
// Name: InAppNotificationContainer
// Dependencies: [32, 19, 17, 10388, 11212, 1072, 21, 1652, 5143, 11227, 11277, 11280, 11281, 11324, 11325, 11344, 11383, 11386, 1357, 11387, 11211, 504, 5731, 5380, 1705, 1252, 5430, 5773, 1187, 7431, 11261, 2]
// Exports: default

// Module 11226 (InAppNotificationContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5380 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 11211 */;
import MessageNotificationDefault from "MessageNotification" /* 11227 */;
import MessageFailedToSendNotificationDefault from "MessageFailedToSendNotification" /* 11277 */;
import ForumThreadCreatedNotificationDefault from "ForumThreadCreatedNotification" /* 11280 */;
import BugReporterNotification from "BugReporterNotification" /* 11281 */;
import AlertNotificationDefault from "AlertNotification" /* 11324 */;
import ReactionNotificationDefault from "ReactionNotification" /* 11325 */;
import ReminderNotificationDefault from "ReminderNotification" /* 11344 */;
import RestrictedHoursWarningNotificationDefault from "RestrictedHoursWarningNotification" /* 11383 */;
import MessageRequestNotificationDefault from "MessageRequestNotification" /* 11386 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 10388 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 11212 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let set, set2;

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
let obj = { duration: 200, easing: Easing.in(_mod1652.Easing.ease) };
Easing = _mod1652.Easing;
let obj2 = { safeAreaContainer: { position: "absolute", left: 0, right: 0, backgroundColor: "transparent", marginTop: 8, top: 0, bottom: 0 }, animatedContainer: { marginLeft: NOTIFICATION_CONTAINER_MARGIN, marginRight: NOTIFICATION_CONTAINER_MARGIN } };
let closure_16 = createStyles.createStyles(obj2);
let closure_18 = { code: "(function InAppNotificationContainerTsx1(){let[scheduleOnRN,setInitialized]=this.__closure;return scheduleOnRN(setInitialized,true);})" };
let closure_19 = { code: "(function InAppNotificationContainerTsx2(){let[startY,notificationGestureY,velocityY,scheduleOnRN,setPanning]=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);scheduleOnRN(setPanning,true);})" };
let closure_20 = { code: "(function InAppNotificationContainerTsx3(event){let[startY,notificationGestureY,velocityY]=this.__closure;const rawY=startY.get()+event.translationY;const newY=Math.min(rawY,startY.get());notificationGestureY.set(newY);velocityY.set(event.velocityY);})" };
let closure_21 = { code: "(function InAppNotificationContainerTsx4(finished){let[scheduleOnRN,handleDismissNotification]=this.__closure;if(finished){scheduleOnRN(handleDismissNotification,'swipe');}})" };
let closure_22 = { code: "(function InAppNotificationContainerTsx5(event){let[velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,notificationGestureY,withTiming,PAN_INPUT_RANGE,DEFAULT_ANIMATION_TIMING,_worklet_14549346579562_init_data,scheduleOnRN,handleDismissNotification,setPanning,withSpring]=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(shouldDismiss&&event.translationY<=0){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],DEFAULT_ANIMATION_TIMING,'animate-always',function InAppNotificationContainerTsx4Factory([_worklet_14549346579562_init_data,scheduleOnRN,handleDismissNotification]){const InAppNotificationContainerTsx4=function(finished){if(finished){scheduleOnRN(handleDismissNotification,'swipe');}};InAppNotificationContainerTsx4.__closure=[scheduleOnRN,handleDismissNotification];InAppNotificationContainerTsx4.__workletHash=14549346579562;InAppNotificationContainerTsx4.__initData=_worklet_14549346579562_init_data;return InAppNotificationContainerTsx4;}([_worklet_14549346579562_init_data,scheduleOnRN,handleDismissNotification])));}else{scheduleOnRN(setPanning,false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}})" };
let closure_23 = { code: "(function InAppNotificationContainerTsx6(){let[scheduleOnRN,setPanning]=this.__closure;scheduleOnRN(setPanning,false);})" };
let closure_24 = { code: "(function InAppNotificationContainerTsx7(){let[notificationGestureY,scale,initialized,interpolate,PAN_INPUT_RANGE,extrapolateConfig,usesFullScaleEntrance]=this.__closure;const gestureY=notificationGestureY.get();const scaleValue=scale.get();const scaleTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):usesFullScaleEntrance?1:scaleValue;const opacityTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scaleValue;return{transform:[{translateY:gestureY},{scale:scaleTransform}],opacity:opacityTransform};})" };
let result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContainer.tsx");

export default function InAppNotificationContainer(notification) {
  let str;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp59;
  notification = notification.notification;
  let guildId;
  let channelId;
  let messageId;
  let channelType;
  let sharedValue;
  let sharedValue1;
  let sharedValue3;
  let initialized;
  let closure_9;
  let first1;
  let handleDismissNotification;
  let tmp = closure_16();
  const tmp2 = notification;
  let tmp3 = channelId;
  obj = notification(channelId[18]);
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    const tmp2Result = tmp2(tmp3[19]);
    isIOSResult = tmp2Result.shouldEnableYYTextReplacement({ location: "InAppNotificationContainer" });
  }
  let items = [notification];
  const memo = channelType.useMemo(() => {
    obj = InAppNotificationUtils;
    return obj.extractMetadataFromNotification(notification);
  }, items);
  guildId = memo.guildId;
  channelId = memo.channelId;
  messageId = memo.messageId;
  const obj3 = channelType;
  channelType = memo.channelType;
  const tmp2Result7 = tmp2(tmp3[7]);
  sharedValue = tmp2Result7.useSharedValue(0);
  const tmp2Result8 = tmp2(tmp3[7]);
  sharedValue1 = tmp2Result8.useSharedValue(0);
  const tmp2Result9 = tmp2(tmp3[7]);
  const sharedValue2 = tmp2Result9.useSharedValue(0);
  const tmp2Result10 = tmp2(tmp3[7]);
  sharedValue3 = tmp2Result10.useSharedValue(0);
  const tmp10 = messageId(channelType.useState(false), 2);
  initialized = tmp10[0];
  closure_9 = tmp10[1];
  const tmp12 = messageId(channelType.useState(false), 2);
  first1 = tmp12[0];
  let items1 = [sharedValue1];
  const items2 = [notification, guildId, channelId, messageId];
  const tmp2Result11 = tmp2(tmp3[21]);
  const stateFromStores = tmp2Result11.useStateFromStores(items1, () => sharedValue1.isOpen());
  handleDismissNotification = channelType.useCallback((dismissReason) => {
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
  const tmp17 = guildId;
  guildId(tmp3[22])(() => {
    let tmp4;
    let tmp5;
    let tmp6;
    const items = [closure_18, , ];
    set = sharedValue3.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    items[1] = _mod1705.scheduleOnRN;
    items[2] = closure_9;
    let c0;
    let c1;
    [tmp4, tmp5, tmp6] = items;
    const tmp3 = obj;
    class InAppNotificationContainerTsx1 {
      constructor() {
        return _undefined(c1, true);
      }
    }
    const items1 = [tmp5, tmp6];
    InAppNotificationContainerTsx1.__closure = items1;
    InAppNotificationContainerTsx1.__workletHash = 4111779721667;
    InAppNotificationContainerTsx1.__initData = tmp4;
    const result = set(withTiming(1, tmp3, "respect-motion-settings", InAppNotificationContainerTsx1));
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
  const Gesture = tmp2(tmp3[26]).Gesture;
  const items4 = [closure_19, sharedValue2, sharedValue, sharedValue1, , ];
  const onBegin = Gesture.Pan().onBegin;
  Gesture.Pan();
  items4[4] = tmp2(tmp3[24]).scheduleOnRN;
  items4[5] = tmp12[1];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items4;
  class InAppNotificationContainerTsx2 {
    constructor() {
      const result = _undefined.set(_undefined2.get());
      const result1 = _undefined3.set(0);
      _undefined4(c4, true);
    }
  }
  const items5 = [tmp22, tmp23, tmp24, tmp25, tmp26];
  InAppNotificationContainerTsx2.__closure = items5;
  InAppNotificationContainerTsx2.__workletHash = 9958676486255;
  InAppNotificationContainerTsx2.__initData = tmp21;
  const items6 = [closure_20, sharedValue2, sharedValue, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp27, tmp28, tmp29, tmp30] = items6;
  const onBeginResult = onBegin(InAppNotificationContainerTsx2);
  class InAppNotificationContainerTsx3 {
    constructor(translationY) {
      const sum = _undefined.get() + translationY.translationY;
      const result = _undefined2.set(Math.min(sum, _undefined.get()));
      const result1 = _undefined3.set(translationY.velocityY);
    }
  }
  const items7 = [tmp28, tmp29, tmp30];
  InAppNotificationContainerTsx3.__closure = items7;
  InAppNotificationContainerTsx3.__workletHash = 8301292753596;
  InAppNotificationContainerTsx3.__initData = tmp27;
  const items8 = [closure_22, sharedValue1, first1, closure_9, sharedValue, , , , , , , , ];
  const onEnd = onBeginResult.onUpdate(InAppNotificationContainerTsx3).onEnd;
  onBeginResult.onUpdate(InAppNotificationContainerTsx3);
  items8[5] = tmp2(tmp3[23]).withTiming;
  items8[6] = handleDismissNotification;
  items8[7] = sharedValue3;
  items8[8] = closure_21;
  items8[9] = tmp2(tmp3[24]).scheduleOnRN;
  items8[10] = handleDismissNotification;
  items8[11] = tmp12[1];
  items8[12] = tmp2(tmp3[27]).withSpring;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45] = items8;
  const tmp32 = handleDismissNotification;
  class InAppNotificationContainerTsx5 {
    constructor(translationY) {
      let tmp15;
      let tmp16;
      let tmp17;
      obj = _undefined;
      if (Math.abs(_undefined.get()) >= c1) {
        if (translationY.translationY <= 0) {
          let first;
          set2 = _undefined2.set;
          const tmp6 = c4;
          if (translationY.translationY > 0) {
            first = _undefined3[2];
          } else {
            first = _undefined3[0];
          }
          const items = [c7, _undefined4, c9];
          [tmp15, tmp16, tmp17] = items;
          class InAppNotificationContainerTsx4 {
            constructor(arg0) {
              tmp = translationY;
              if (tmp) {
                tmp2 = closure_0;
                tmp3 = closure_1;
                str = "swipe";
                tmp4 = closure_0(closure_1, "swipe");
              }
              return;
            }
          }
          const items1 = [tmp16, tmp17];
          InAppNotificationContainerTsx4.__closure = items1;
          InAppNotificationContainerTsx4.__workletHash = 14549346579562;
          InAppNotificationContainerTsx4.__initData = tmp15;
          set2(tmp6(first, c6, "animate-always", InAppNotificationContainerTsx4));
        }
      } else {
        const _Math = Math;
        let tmp = c2;
      }
      _undefined4(c10, false);
      set = _undefined2.set;
      tmp3[3] = obj.get();
      const result = set(_undefined5(0, tmp3, "animate-always"));
    }
  }
  const items9 = [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45];
  InAppNotificationContainerTsx5.__closure = items9;
  InAppNotificationContainerTsx5.__workletHash = 3427472707207;
  InAppNotificationContainerTsx5.__initData = tmp33;
  const items10 = [closure_23, , ];
  const onFinalize = onEnd(InAppNotificationContainerTsx5).onFinalize;
  onEnd(InAppNotificationContainerTsx5);
  items10[1] = tmp2(tmp3[24]).scheduleOnRN;
  items10[2] = tmp12[1];
  c0 = undefined;
  c1 = undefined;
  [tmp47, tmp48, tmp49] = items10;
  class InAppNotificationContainerTsx6 {
    constructor() {
      _undefined(c1, false);
    }
  }
  const items11 = [tmp48, tmp49];
  InAppNotificationContainerTsx6.__closure = items11;
  InAppNotificationContainerTsx6.__workletHash = 1825489770853;
  InAppNotificationContainerTsx6.__initData = tmp47;
  const items12 = [closure_24, sharedValue, sharedValue3, initialized, , , , ];
  const onFinalizeResult = onFinalize(InAppNotificationContainerTsx6);
  const useAnimatedStyle = tmp2(tmp3[7]).useAnimatedStyle;
  tmp2(tmp3[7]);
  items12[4] = tmp2(tmp3[7]).interpolate;
  items12[5] = tmp32;
  items12[6] = initialized;
  items12[7] = isIOSResult;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59] = items12;
  class InAppNotificationContainerTsx7 {
    constructor() {
      let num;
      const value = _undefined.get();
      let value2 = _undefined2.get();
      const items = [{ translateY: value }, ];
      if (c2) {
        num = _undefined3(value, c4, [0.3, 1, 0.3], c5);
      } else {
        num = 1;
        if (!c6) {
          num = value2;
        }
      }
      obj = { transform: items, opacity: value2 };
      items[1] = { scale: num };
      if (c2) {
        value2 = _undefined3(value, c4, [0, 1, 0], c5);
      }
      return obj;
    }
  }
  const items13 = [tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59];
  InAppNotificationContainerTsx7.__closure = items13;
  InAppNotificationContainerTsx7.__workletHash = 9732012167849;
  InAppNotificationContainerTsx7.__initData = tmp52;
  const items14 = [handleDismissNotification, initialized, sharedValue, sharedValue1, first1];
  const animatedStyle = useAnimatedStyle(InAppNotificationContainerTsx7);
  const memo1 = obj3.useMemo(() => ({ notificationGestureY: sharedValue, velocityY: sharedValue1, initialized, handleDismissNotification, panning: first1 }), items14);
  const OverlayView = tmp2(tmp3[28]).OverlayView;
  const rect = { top: true, bottom: true, left: true, right: true, style: tmp.safeAreaContainer, pointerEvents: "box-none", importantForAccessibility: str, children: null };
  str = undefined;
  const SafeAreaPaddingView = tmp2(tmp3[29]).SafeAreaPaddingView;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  const Provider = tmp2(tmp3[30]).InAppNotificationContext.Provider;
  const GestureDetector = tmp2(tmp3[26]).GestureDetector;
  const items15 = [tmp.animatedContainer, animatedStyle];
  const View = tmp17(tmp3[7]).View;
  return <OverlayView style={sharedValue.absoluteFill} pointerEvents="box-none">{null}</OverlayView>;
};
