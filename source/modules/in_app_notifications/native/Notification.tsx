// Module ID: 10290
// Function ID: 79445
// Name: NotificationPressable
// Dependencies: []
// Exports: NotificationPressable

// Module 10290 (NotificationPressable)
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ MIN_SWIPE_VELOCITY: closure_4, STARTED_SWIPE_THRESHOLD: closure_5 } = tmp2);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = {};
const merged = Object.assign(importDefault(dependencyMap[5]).shadows.SHADOW_HIGH);
obj["backgroundColor"] = importDefault(dependencyMap[5]).colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
obj["borderRadius"] = importDefault(dependencyMap[5]).radii.lg;
obj["maxWidth"] = tmp2.NOTIFICATION_MAX_WIDTH;
obj["width"] = "100%";
obj["alignSelf"] = "center";
obj.shadow = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.container = { borderRadius: importDefault(dependencyMap[5]).radii.lg, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, overflow: "hidden" };
let closure_9 = obj.createStyles(obj);
let closure_10 = { 0: 760348674, 326587: 291798377, 9223372036854775807: 38808897, 0: 1602048 };
let closure_11 = { code: "function NotificationTsx1(){const{withSpring,scale,ON_PRESS_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(scale.get(),ON_PRESS_SPRING_CONFIG)}]};}" };
let closure_12 = { code: "function NotificationTsx2(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}" };
let closure_13 = { code: "function NotificationTsx3(){const{withTiming,expandedSV,tokens,Easing}=this.__closure;return{borderRadius:withTiming(expandedSV.get()?tokens.radii.xl:tokens.radii.lg,{duration:220,easing:Easing.bezier(0.16,1,0.3,1)})};}" };
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.lg, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, overflow: "hidden" };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/in_app_notifications/native/Notification.tsx");

export const NotificationPressable = function NotificationPressable(notification) {
  let accessoryLabelNode;
  let bodyStyle;
  let children;
  let expandableContent;
  let expandedContentVisible;
  let header;
  let icon;
  let onAccessibilityExpand;
  let rightAccessory;
  notification = notification.notification;
  const arg1 = notification;
  let flag = notification.showDragHandle;
  ({ expandableContent, icon, children, accessoryLabelNode, rightAccessory, header } = notification);
  if (flag === undefined) {
    flag = false;
  }
  ({ expandedContentVisible, onAccessibilityExpand, bodyStyle } = notification);
  if (expandedContentVisible === undefined) {
    expandedContentVisible = false;
  }
  const onPress = notification.onPress;
  const importDefault = onPress;
  const onSettingsPress = notification.onSettingsPress;
  const dependencyMap = onSettingsPress;
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(notification, obj);
  let React;
  let channelId;
  let messageId;
  let AnalyticEvents;
  let notificationGestureY;
  let velocityY;
  let callback;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let initialized;
  let panning;
  let isExpandableNotification;
  let sharedValue;
  let sharedValue1;
  let tmp12;
  let callback2;
  let callback3;
  const tmp3 = callback();
  const items = [notification];
  const memo = React.useMemo(() => {
    const merged = Object.assign(notification(onSettingsPress[6]).extractMetadataFromNotification(notification));
    return { type: notification.type };
  }, items);
  const guildId = memo.guildId;
  React = guildId;
  channelId = memo.channelId;
  messageId = memo.messageId;
  const type = memo.type;
  AnalyticEvents = type;
  let obj1 = arg1(dependencyMap[7]);
  const inAppNotificationContext = obj1.useInAppNotificationContext();
  notificationGestureY = inAppNotificationContext.notificationGestureY;
  velocityY = inAppNotificationContext.velocityY;
  const autoDismissing = inAppNotificationContext.autoDismissing;
  callback = autoDismissing;
  const isExpanded = inAppNotificationContext.isExpanded;
  closure_10 = isExpanded;
  const expandedSV = inAppNotificationContext.expandedSV;
  closure_11 = expandedSV;
  const setExpanded = inAppNotificationContext.setExpanded;
  closure_12 = setExpanded;
  const handleDismissNotification = inAppNotificationContext.handleDismissNotification;
  closure_13 = handleDismissNotification;
  initialized = inAppNotificationContext.initialized;
  panning = inAppNotificationContext.panning;
  isExpandableNotification = inAppNotificationContext.isExpandableNotification;
  let obj2 = arg1(dependencyMap[8]);
  sharedValue = obj2.useSharedValue(1);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  callback = React.useCallback(() => sharedValue.set(0.95), items1);
  const callback1 = React.useCallback(() => sharedValue.set(1), items2);
  let obj3 = arg1(dependencyMap[8]);
  class R {
    constructor() {
      obj = {};
      obj = {};
      obj3 = notification(onSettingsPress[9]);
      obj.scale = obj3.withSpring(closure_17.get(), isExpanded);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[9]).withSpring, scale: sharedValue, ON_PRESS_SPRING_CONFIG: closure_10 };
  R.__closure = obj;
  R.__workletHash = 5485274967370;
  R.__initData = closure_11;
  let animatedStyle = obj3.useAnimatedStyle(R);
  const memo1 = React.useMemo(() => ({ foreground: true }), []);
  const obj6 = arg1(dependencyMap[10]);
  sharedValue1 = arg1(dependencyMap[8]).useSharedValue(100);
  tmp12 = notification.duration !== Infinity;
  const items3 = [initialized, panning, notification, sharedValue1, handleDismissNotification, isExpanded, autoDismissing, tmp12];
  const effect = React.useEffect(() => {
    if (initialized) {
      if (!panning) {
        if (tmp12) {
          if (!isExpanded) {
            if (!autoDismissing) {
              const value = sharedValue1.get();
              let obj = notification(onSettingsPress[11]);
              obj = { duration: value / 100 * tmp, easing: notification(onSettingsPress[8]).Easing.linear };
              const fn = function s(arg0) {
                if (arg0) {
                  callback(closure_2[8]).runOnJS(closure_13)("timeout");
                  const obj = callback(closure_2[8]);
                }
              };
              obj = { runOnJS: notification(onSettingsPress[8]).runOnJS, handleDismissNotification };
              fn.__closure = obj;
              fn.__workletHash = 5704836747866;
              fn.__initData = setExpanded;
              const result = sharedValue1.set(obj.withTiming(0, obj, "animate-always", fn));
              return () => {
                callback(closure_2[8]).cancelAnimation(closure_18);
              };
            }
          }
        }
      }
    }
  }, items3);
  const items4 = [velocityY, notificationGestureY];
  callback2 = React.useCallback(() => {
    let tmp = Math.abs(velocityY.get()) >= channelId;
    if (!tmp) {
      const _Math = Math;
      tmp = Math.abs(notificationGestureY.get()) >= messageId;
    }
    return tmp;
  }, items4);
  const items5 = [callback2, autoDismissing, type, notification.inAppNotificationId, guildId, channelId, messageId, sharedValue1, isExpanded, tmp12];
  callback3 = React.useCallback((arg0, arg1) => {
    if (tmp) {
      onPress(onSettingsPress[12]);
      const obj = { type, notif_guild_id: guildId, notif_channel_id: channelId, message_id: messageId, in_app_notification_id: notification.inAppNotificationId };
      if (!tmp12) {
        obj.percent = undefined;
        tmp5(arg0, obj);
        if (null != arg1) {
          arg1();
        }
      } else {
        if ("number" === typeof sharedValue1) {
          let value = sharedValue1;
        } else {
          value = sharedValue1.get();
        }
        const rounded = Math.floor(value);
      }
    }
  }, items5);
  const items6 = [callback3, onPress];
  const items7 = [callback3, isExpandableNotification, onSettingsPress, setExpanded];
  const callback4 = React.useCallback(() => callback3(type.IN_APP_NOTIFICATION_CLICKED, onPress), items6);
  const callback5 = React.useCallback(() => {
    if (isExpandableNotification) {
      setExpanded(true, "long_press");
    } else {
      callback3(type.IN_APP_NOTIFICATION_LONG_PRESSED, onSettingsPress);
    }
  }, items7);
  const obj7 = arg1(dependencyMap[8]);
  function ai() {
    let obj = {};
    const value = expandedSV.get();
    const radii = onPress(onSettingsPress[5]).radii;
    obj = { duration: 220 };
    const Easing = notification(onSettingsPress[8]).Easing;
    obj.easing = Easing.bezier(0.16, 1, 0.3, 1);
    obj.borderRadius = notification(onSettingsPress[11]).withTiming(value ? radii.xl : radii.lg, obj);
    return obj;
  }
  obj = { withTiming: arg1(dependencyMap[11]).withTiming, expandedSV, tokens: importDefault(dependencyMap[5]), Easing: arg1(dependencyMap[8]).Easing };
  ai.__closure = obj;
  ai.__workletHash = 15276203537259;
  ai.__initData = closure_13;
  const animatedStyle1 = arg1(dependencyMap[8]).useAnimatedStyle(ai);
  obj1 = {};
  const items8 = [tmp3.shadow, ];
  if (isExpandableNotification) {
    animatedStyle = animatedStyle1;
  }
  items8[1] = animatedStyle;
  obj1.style = items8;
  obj2 = {};
  const merged1 = Object.assign(merged);
  obj2["onAccessibilityEscape"] = function onAccessibilityEscape() {
    return handleDismissNotification("accessibility_escape");
  };
  const items9 = [tmp3.container, ];
  let tmp22 = null;
  if (isExpandableNotification) {
    tmp22 = animatedStyle1;
  }
  items9[1] = tmp22;
  obj2["style"] = items9;
  obj2["androidRippleConfig"] = memo1;
  obj2["onPress"] = callback4;
  obj2["onPressIn"] = callback;
  obj2["onPressOut"] = callback1;
  obj2["onLongPress"] = callback5;
  obj2["accessibilityRole"] = "button";
  obj3 = { icon, children, accessoryLabelNode, rightAccessory, header, showDragHandle: flag, onAccessibilityExpand, bodyStyle, expandedContentVisible };
  const items10 = [notificationGestureY(importDefault(dependencyMap[14]), obj3), , ];
  let tmp23 = null;
  if (tmp12) {
    const obj4 = { canExpand: obj6.useCanExpandInAppNotification("NotificationPressable").canExpand, percent: sharedValue1, type };
    tmp23 = notificationGestureY(importDefault(dependencyMap[15]), obj4);
  }
  items10[1] = tmp23;
  items10[2] = expandableContent;
  obj2["children"] = items10;
  obj1.children = velocityY(arg1(dependencyMap[13]).PressableHighlight, obj2);
  return notificationGestureY(importDefault(dependencyMap[8]).View, obj1);
};
