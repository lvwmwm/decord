// Module ID: 14201
// Function ID: 107468
// Name: NotificationPermissionSettingsHeader
// Dependencies: []
// Exports: default

// Module 14201 (NotificationPermissionSettingsHeader)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ AnalyticEvents: closure_5, NOOP: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ EventActionLocation: closure_7, EventActionType: closure_8, NotificationNudgeAnalyticsAction: closure_9, NotificationNudgeSurface: closure_10 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { paddingTop: importDefault(dependencyMap[6]).space.PX_16 };
obj.container = obj;
obj.cardContent = { alignItems: "center" };
const tmp4 = arg1(dependencyMap[4]);
obj.iconCircle = { borderRadius: importDefault(dependencyMap[6]).radii.round, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED, marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
const obj1 = { borderRadius: importDefault(dependencyMap[6]).radii.round, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED, marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
obj.body = { marginBottom: importDefault(dependencyMap[6]).space.PX_12, marginTop: importDefault(dependencyMap[6]).space.PX_8, textAlign: "center" };
let closure_13 = obj.createStyles(obj);
const obj2 = { marginBottom: importDefault(dependencyMap[6]).space.PX_12, marginTop: importDefault(dependencyMap[6]).space.PX_8, textAlign: "center" };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx");

export default function NotificationPermissionSettingsHeader() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const canSeePushNotificationNudge = obj.useCanSeePushNotificationNudge();
  const arg1 = canSeePushNotificationNudge;
  const items = [canSeePushNotificationNudge];
  const effect = React.useEffect(() => {
    if (canSeePushNotificationNudge) {
      let obj = callback(closure_2[8]);
      obj = { action: constants4.IMPRESSION, prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
      obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
    }
  }, items);
  let tmp5 = null;
  if (canSeePushNotificationNudge) {
    obj = { style: tmp.container };
    obj = { 9223372036854775807: true, 9223372036854775807: true };
    const obj1 = { style: tmp.cardContent };
    const obj2 = { style: tmp.iconCircle };
    const obj3 = { size: "md", color: importDefault(dependencyMap[6]).colors.ICON_STRONG };
    obj2.children = callback(arg1(dependencyMap[10]).BellSlashIcon, obj3);
    const items1 = [callback(View, obj2), , , ];
    const obj4 = { cachedAt: null, edpbxy: null };
    const intl = arg1(dependencyMap[12]).intl;
    obj4.children = intl.string(arg1(dependencyMap[12]).t.MUwOvc);
    items1[1] = callback(arg1(dependencyMap[11]).Text, obj4);
    const obj5 = { minWidth: null, height: null, top: null, style: tmp.body };
    const intl2 = arg1(dependencyMap[12]).intl;
    obj5.children = intl2.string(arg1(dependencyMap[12]).t.G4uKoe);
    items1[2] = callback(arg1(dependencyMap[11]).Text, obj5);
    const obj6 = {};
    const obj7 = { alignSelf: "stretch" };
    obj6.style = obj7;
    const obj8 = { variant: "primary" };
    const intl3 = arg1(dependencyMap[12]).intl;
    obj8.text = intl3.string(arg1(dependencyMap[12]).t.5xWOXv);
    obj8.onPress = tmp4;
    obj6.children = callback(arg1(dependencyMap[13]).Button, obj8);
    items1[3] = callback(View, obj6);
    obj1.children = items1;
    obj.children = callback2(View, obj1);
    obj.children = callback(arg1(dependencyMap[9]).Card, obj);
    tmp5 = callback(View, obj);
  }
  return tmp5;
};
