// Module ID: 9630
// Function ID: 9631
// Name: Notification
// Dependencies: [19, 9555, 1074, 21, 4836, 576, 9554, 9597, 4566, 5280, 4837, 5016, 5435, 9631, 9633, 2]
// Exports: NotificationPressable

// Module 9630 (Notification)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import spring from "spring" /* 5280 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 9554 */;
import react from "react" /* 19 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 9555 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
let closure_11 = { code: "function NotificationTsx1(){const{withSpring,scale,ON_PRESS_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(scale.get(),ON_PRESS_SPRING_CONFIG)}]};}" };
let closure_12 = { code: "function NotificationTsx2(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}" };
let result = size.fileFinishedImporting("modules/in_app_notifications/native/Notification.tsx");

export const NotificationPressable = function NotificationPressable(notification) {
  let PressableHighlight;
  let accessoryLabelNode;
  let children;
  let header;
  let icon;
  let items8;
  let items9;
  let obj7;
  let rightAccessory;
  let tmp21;
  notification = notification.notification;
  const onPress = notification.onPress;
  const onSettingsPress = notification.onSettingsPress;
  let tmp = null;
  ({ icon, children, accessoryLabelNode, rightAccessory, header } = notification);
  let merged = Object.assign(notification, Object.assign({ notification: 0, icon: 0, children: 0, accessoryLabelNode: 0, rightAccessory: 0, header: 0, onPress: 0, onSettingsPress: 0 }));
  let guildId;
  let handleDismissNotification;
  let sharedValue1;
  let closure_14;
  let callback2;
  let callback3;
  let tmp3 = handleDismissNotification();
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
  const tmp5 = onSettingsPress;
  let obj = notification(onSettingsPress[7]);
  const inAppNotificationContext = obj.useInAppNotificationContext();
  const notificationGestureY = inAppNotificationContext.notificationGestureY;
  const velocityY = inAppNotificationContext.velocityY;
  handleDismissNotification = inAppNotificationContext.handleDismissNotification;
  const initialized = inAppNotificationContext.initialized;
  const panning = inAppNotificationContext.panning;
  let obj2 = notification(onSettingsPress[8]);
  const sharedValue = obj2.useSharedValue(1);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = guildId.useCallback(() => sharedValue.set(0.95), items1);
  const callback1 = guildId.useCallback(() => sharedValue.set(1), items2);
  let obj3 = notification(onSettingsPress[8]);
  class A {
    constructor() {
      let items;
      let obj3;
      const obj = { transform: items };
      const obj2 = { scale: obj3.withSpring(sharedValue.get(), closure_10) };
      items = [obj2];
      obj3 = spring;
      return obj;
    }
  }
  A.__closure = { withSpring: notification(onSettingsPress[9]).withSpring, scale: sharedValue, ON_PRESS_SPRING_CONFIG: initialized };
  A.__workletHash = 5485274967370;
  A.__initData = panning;
  ({ withSpring: notification(onSettingsPress[9]).withSpring, scale: sharedValue, ON_PRESS_SPRING_CONFIG: initialized });
  const animatedStyle = obj3.useAnimatedStyle(A);
  const memo1 = guildId.useMemo(() => ({ foreground: true }), []);
  const obj5 = notification(onSettingsPress[8]);
  sharedValue1 = obj5.useSharedValue(100);
  closure_14 = tmp13;
  const items3 = [initialized, panning, notification, sharedValue1, handleDismissNotification, tmp13];
  const effect = guildId.useEffect(() => {
    let tmp;
    const tmp2 = initialized;
    if (tmp2) {
      const tmp3 = panning;
      if (!tmp3) {
        const tmp4 = closure_14;
        if (tmp4) {
          const value = sharedValue1.get();
          set = sharedValue1.set;
          const tmp9 = timing;
          let obj = { duration: value / 100 * tmp, easing: ReanimatedRexport.Easing.linear };
          const withTiming = tmp9.withTiming;
          const fn = function s(arg0) {
            const tmp = arg0;
            if (tmp) {
              const obj = notification(onSettingsPress[8]);
              obj.runOnJS(handleDismissNotification)("timeout");
            }
          };
          fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
          fn.__workletHash = 5704836747866;
          fn.__initData = __initData;
          const obj2 = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
          const result = set(withTiming(0, obj, "animate-always", fn));
          return () => {
            const obj = notification(onSettingsPress[8]);
            obj.cancelAnimation(sharedValue1);
          };
        }
      }
    }
  }, items3);
  const items4 = [velocityY, notificationGestureY];
  callback2 = guildId.useCallback(() => {
    let tmp = Math.abs(velocityY.get()) >= React3;
    if (!tmp) {
      const _Math = Math;
      tmp = Math.abs(notificationGestureY.get()) >= hasOwnProperty;
    }
    return tmp;
  }, items4);
  const items5 = [callback2, type, notification.inAppNotificationId, guildId, channelId, messageId, sharedValue1, tmp13];
  callback3 = guildId.useCallback((IAR_MODAL_OPEN, fn) => {
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
  }, items5);
  const items6 = [callback3, onPress];
  const items7 = [callback3, onSettingsPress];
  const callback4 = guildId.useCallback(() => callback3(AnalyticEvents.IN_APP_NOTIFICATION_CLICKED, onPress), items6);
  const callback5 = guildId.useCallback(() => {
    callback3(AnalyticEvents.IN_APP_NOTIFICATION_LONG_PRESSED, onSettingsPress);
  }, items7);
  const obj6 = { style: items8, children: tmp21(PressableHighlight, obj7) };
  items8 = [tmp3.shadow, animatedStyle];
  const View = onPress(onSettingsPress[8]).View;
  obj7 = {
    onAccessibilityEscape() {
      return handleDismissNotification("accessibility_escape");
    },
    style: tmp3.container,
    androidRippleConfig: memo1,
    onPress: callback4,
    onPressIn: callback,
    onPressOut: callback1,
    onLongPress: callback5,
    accessibilityRole: "button",
    children: items9
  };
  PressableHighlight = notification(onSettingsPress[12]).PressableHighlight;
  const merged1 = Object.assign(merged);
  items9 = [notificationGestureY(onPress(onSettingsPress[13]), { icon, children, accessoryLabelNode, rightAccessory, header }), ];
  const tmp20 = onPress;
  tmp21 = velocityY;
  if (notification.duration !== Infinity) {
    const obj8 = { percent: sharedValue1 };
    tmp = tmp19(tmp20(tmp5[14]), obj8);
  }
  items9[1] = tmp;
  return notificationGestureY(View, obj6);
};
