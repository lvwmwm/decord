// Module ID: 15004
// Function ID: 112984
// Name: NotificationCenterBannerImpl
// Dependencies: []
// Exports: default

// Module 15004 (NotificationCenterBannerImpl)
function NotificationCenterBannerImpl(onDismiss) {
  const arg1 = onDismiss.onDismiss;
  const tmp = callback6();
  callback3(() => {
    let obj = callback(closure_2[9]);
    obj = { action: constants4.IMPRESSION, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
    obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
  }, []);
  let obj = { style: tmp.container };
  obj = { style: tmp.iconContainer };
  obj = { size: "md", color: importDefault(dependencyMap[8]).colors.ICON_STRONG };
  obj.children = callback4(arg1(dependencyMap[10]).BellSlashIcon, obj);
  const items = [callback4(View, obj), , ];
  const obj1 = { style: tmp.contentContainer };
  const obj2 = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj2.children = intl.string(arg1(dependencyMap[12]).t.G6YBna);
  const items1 = [callback4(arg1(dependencyMap[11]).Text, obj2), , ];
  const obj3 = {};
  const obj4 = { marginTop: importDefault(dependencyMap[8]).space.PX_4 };
  obj3.style = obj4;
  const intl2 = arg1(dependencyMap[12]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[12]).t.9CoPDE);
  items1[1] = callback4(arg1(dependencyMap[11]).Text, obj3);
  const obj5 = { style: tmp.ctaButton };
  const obj6 = {};
  const intl3 = arg1(dependencyMap[12]).intl;
  obj6.text = intl3.string(arg1(dependencyMap[12]).t.a4bgO0);
  obj6.onPress = function onPress() {
    let obj = onDismiss(closure_2[14]);
    const pushNotificationPermission = obj.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, constants3.NOTIFICATION_CENTER, closure_8);
    obj = { action: constants4.ACCEPT, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
    callback(closure_2[9]).track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
  };
  obj5.children = callback4(arg1(dependencyMap[13]).Button, obj6);
  items1[2] = callback4(View, obj5);
  obj1.children = items1;
  items[1] = callback5(View, obj1);
  const obj7 = {
    onPress() {
      let obj = callback(closure_2[9]);
      obj = { action: constants4.DISMISS, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
      obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
      onDismiss();
    }
  };
  const intl4 = arg1(dependencyMap[12]).intl;
  obj7.accessibilityLabel = intl4.string(arg1(dependencyMap[12]).t.WAI6xu);
  obj7.children = callback4(arg1(dependencyMap[16]).XSmallIcon, {});
  items[2] = callback4(arg1(dependencyMap[15]).PressableHighlight, obj7);
  obj.children = items;
  return callback5(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
({ useCallback: closure_4, useEffect: closure_5 } = arg1(dependencyMap[1]));
const View = arg1(dependencyMap[2]).View;
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_7, NOOP: closure_8 } = arg1(dependencyMap[3]));
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const tmp3 = arg1(dependencyMap[3]);
({ EventActionType: closure_10, EventActionLocation: closure_11, NotificationNudgeAnalyticsAction: closure_12, NotificationNudgeSurface: closure_13 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { paddingRight: importDefault(dependencyMap[8]).space.PX_12, paddingVertical: importDefault(dependencyMap[8]).space.PX_16, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, borderColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE, gap: 16 };
obj.container = obj;
obj.contentContainer = { flex: 1 };
const obj1 = { "Bool(false)": "<string:1090519624>", "Bool(false)": "2026-04-social-layer-storefront-mobile-purchasing", "Bool(false)": "<string:3628267361>", "Bool(false)": "<string:2197815725>", "Bool(false)": "<string:1375731975>", "Bool(false)": "<string:2583738129>", borderRadius: importDefault(dependencyMap[8]).radii.round, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_STRONG };
obj.iconContainer = obj1;
const tmp5 = arg1(dependencyMap[6]);
obj.ctaButton = { alignSelf: "flex-start", marginTop: importDefault(dependencyMap[8]).space.PX_12 };
let closure_16 = obj.createStyles(obj);
const obj2 = { alignSelf: "flex-start", marginTop: importDefault(dependencyMap[8]).space.PX_12 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/notification_center/native/NotificationCenterPermissionNudge.tsx");

export default function NotificationCenterPermissionNudge() {
  let obj = importDefault(dependencyMap[17]);
  const canSeePushNotificationNudge = arg1(dependencyMap[14]).useCanSeePushNotificationNudge();
  const obj2 = arg1(dependencyMap[14]);
  let prop = null;
  if (!obj.useConfig({ location: "NotificationCenterPermissionNudge" }).inHoldout) {
    prop = null;
    if (canSeePushNotificationNudge) {
      prop = arg1(dependencyMap[19]).DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER;
    }
  }
  const tmp5 = callback(arg1(dependencyMap[18]).useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 604800000 }), 2);
  const arg1 = tmp6;
  const items = [tmp5[1]];
  const obj3 = arg1(dependencyMap[18]);
  let tmp8 = null;
  if (tmp5[0] === arg1(dependencyMap[19]).DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER) {
    obj = { onDismiss: tmp7 };
    tmp8 = callback4(NotificationCenterBannerImpl, obj);
  }
  return tmp8;
};
