// Module ID: 11024
// Function ID: 11025
// Name: Notification
// Dependencies: [19, 10963, 1072, 21, 5243, 575, 10962, 11014, 1652, 5876, 5485, 1705, 6004, 7364, 11025, 11027, 2]
// Exports: NotificationPressable

// Module 11024 (Notification)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5485 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 6004 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10962 */;
import react from "react" /* 19 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 10963 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let set;

let NOTIFICATION_MAX_WIDTH;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
({ MIN_SWIPE_VELOCITY: closure_4, STARTED_SWIPE_THRESHOLD: hasOwnProperty, NOTIFICATION_MAX_WIDTH } = InAppNotificationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { shadow: obj2, container: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, maxWidth: NOTIFICATION_MAX_WIDTH, width: "100%", alignSelf: "center", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj3 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let closure_9 = createStyles(obj);
let closure_10 = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
let closure_11 = { code: "(function NotificationTsx1(){let[withSpring,scale,ON_PRESS_SPRING_CONFIG]=this.__closure;return{transform:[{scale:withSpring(scale.get(),ON_PRESS_SPRING_CONFIG)}]};})" };
let closure_12 = { code: "(function NotificationTsx2(finished){let[scheduleOnRN,handleDismissNotification]=this.__closure;if(finished){scheduleOnRN(handleDismissNotification,'timeout');}})" };
let result = size.fileFinishedImporting("modules/in_app_notifications/native/Notification.tsx");

export function NotificationPressable(notification) {
  let PressableHighlight;
  let accessoryLabelNode;
  let children;
  let header;
  let icon;
  let items10;
  let items11;
  let obj5;
  let rightAccessory;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp26;
  notification = notification.notification;
  const onPress = notification.onPress;
  const onSettingsPress = notification.onSettingsPress;
  ({ icon, children, accessoryLabelNode, rightAccessory, header } = notification);
  let merged = Object.assign(notification, Object.assign({ notification: 0, icon: 0, children: 0, accessoryLabelNode: 0, rightAccessory: 0, header: 0, onPress: 0, onSettingsPress: 0 }));
  let guildId;
  let handleDismissNotification;
  let sharedValue1;
  let closure_14;
  let callback2;
  let callback3;
  let tmp2 = handleDismissNotification();
  let obj = guildId;
  let items = [notification];
  const memo = guildId.useMemo(() => {
    const obj = { type: notification.type };
    const obj2 = InAppNotificationUtils;
    const merged = Object.assign(obj2.extractMetadataFromNotification(notification));
    return obj;
  }, items);
  guildId = memo.guildId;
  const channelId = memo.channelId;
  const messageId = memo.messageId;
  const type = memo.type;
  let tmp4 = notification;
  let obj2 = notification(onSettingsPress[7]);
  const inAppNotificationContext = obj2.useInAppNotificationContext();
  const notificationGestureY = inAppNotificationContext.notificationGestureY;
  const velocityY = inAppNotificationContext.velocityY;
  handleDismissNotification = inAppNotificationContext.handleDismissNotification;
  const initialized = inAppNotificationContext.initialized;
  const panning = inAppNotificationContext.panning;
  const obj3 = notification(onSettingsPress[8]);
  const sharedValue = obj3.useSharedValue(1);
  let items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = guildId.useCallback(() => sharedValue.set(0.95), items1);
  const callback1 = guildId.useCallback(() => sharedValue.set(1), items2);
  const items3 = [panning, , , ];
  const useAnimatedStyle = notification(onSettingsPress[8]).useAnimatedStyle;
  const tmp10 = notification(onSettingsPress[8]);
  items3[1] = notification(onSettingsPress[9]).withSpring;
  items3[2] = sharedValue;
  items3[3] = initialized;
  let c0;
  let c1;
  let c2;
  [tmp11, tmp12, tmp13, tmp14] = items3;
  class NotificationTsx1 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: _undefined(_undefined2.get(), c2) }];
      ({ scale: _undefined(_undefined2.get(), c2) });
      return obj;
    }
  }
  const items4 = [tmp12, tmp13, tmp14];
  NotificationTsx1.__closure = items4;
  NotificationTsx1.__workletHash = 8384259234867;
  NotificationTsx1.__initData = tmp11;
  const animatedStyle = useAnimatedStyle(NotificationTsx1);
  const memo1 = obj.useMemo(() => ({ foreground: true }), []);
  const tmp4Result = tmp4(onSettingsPress[8]);
  sharedValue1 = tmp4Result.useSharedValue(100);
  closure_14 = tmp18;
  const items5 = [initialized, panning, notification, sharedValue1, handleDismissNotification, tmp18];
  const effect = obj.useEffect(() => {
    let tmp;
    let tmp13;
    let tmp14;
    let tmp15;
    const tmp2 = initialized;
    if (tmp2) {
      const tmp3 = panning;
      if (!tmp3) {
        const tmp4 = closure_14;
        if (tmp4) {
          const value = sharedValue1.get();
          set = sharedValue1.set;
          const tmp9 = timing_timing;
          let obj = { duration: value / 100 * tmp, easing: _mod1652.Easing.linear };
          const withTiming = tmp9.withTiming;
          const items = [closure_12, _mod1705.scheduleOnRN, handleDismissNotification];
          let c0;
          let c1;
          [tmp13, tmp14, tmp15] = items;
          class NotificationTsx2 {
            constructor(arg0) {
              const tmp = arg0;
              if (tmp) {
                _undefined(c1, "timeout");
              }
            }
          }
          const items1 = [tmp14, tmp15];
          NotificationTsx2.__closure = items1;
          NotificationTsx2.__workletHash = 15850789902158;
          NotificationTsx2.__initData = tmp13;
          const result = set(withTiming(0, obj, "animate-always", NotificationTsx2));
          return () => {
            const obj = notification(onSettingsPress[8]);
            obj.cancelAnimation(sharedValue1);
          };
        }
      }
    }
  }, items5);
  const items6 = [velocityY, notificationGestureY];
  callback2 = obj.useCallback(() => {
    let tmp = Math.abs(velocityY.get()) >= React3;
    if (!tmp) {
      const _Math = Math;
      tmp = Math.abs(notificationGestureY.get()) >= hasOwnProperty;
    }
    return tmp;
  }, items6);
  const items7 = [callback2, type, notification.inAppNotificationId, guildId, channelId, messageId, sharedValue1, tmp18];
  callback3 = obj.useCallback((IAR_MODAL_OPEN, fn) => {
    let floorResult;
    if (!callback2()) {
      const obj = { type, notif_guild_id: guildId, notif_channel_id: channelId, message_id: messageId, in_app_notification_id: notification.inAppNotificationId, percent: floorResult };
      floorResult = undefined;
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      AppAnalyticsUtilsDefault;
      if (closure_14) {
        let value = sharedValue1;
        const _Math = Math;
        const obj2 = sharedValue1;
        if (typeof sharedValue1 !== "number") {
          value = obj2.get();
        }
        floorResult = floor(value);
      }
      trackWithMetadata(IAR_MODAL_OPEN, obj);
      if (fn != null) {
        fn();
      }
    }
  }, items7);
  const items8 = [callback3, onPress];
  const items9 = [callback3, onSettingsPress];
  const callback4 = obj.useCallback(() => callback3(AnalyticEvents.IN_APP_NOTIFICATION_CLICKED, onPress), items8);
  const callback5 = obj.useCallback(() => {
    callback3(AnalyticEvents.IN_APP_NOTIFICATION_LONG_PRESSED, onSettingsPress);
  }, items9);
  const obj4 = { style: items10, children: tmp26(PressableHighlight, obj5) };
  items10 = [tmp2.shadow, animatedStyle];
  const View = onPress(tmp5[8]).View;
  obj5 = {
    onAccessibilityEscape() {
      return handleDismissNotification("accessibility_escape");
    },
    style: tmp2.container,
    androidRippleConfig: memo1,
    onPress: callback4,
    onPressIn: callback,
    onPressOut: callback1,
    onLongPress: callback5,
    accessibilityRole: "button",
    children: items11
  };
  PressableHighlight = tmp4(tmp5[13]).PressableHighlight;
  const merged1 = Object.assign(merged);
  items11 = [notificationGestureY(onPress(tmp5[14]), { icon, children, accessoryLabelNode, rightAccessory, header }), ];
  let tmp24Result = null;
  const tmp25 = onPress;
  tmp26 = velocityY;
  if (notification.duration !== Infinity) {
    const obj6 = { percent: sharedValue1 };
    tmp24Result = tmp24(tmp25(tmp5[15]), obj6);
  }
  items11[1] = tmp24Result;
  return notificationGestureY(View, obj4);
}
