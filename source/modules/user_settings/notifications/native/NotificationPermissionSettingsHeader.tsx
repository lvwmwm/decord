// Module ID: 14365
// Function ID: 109947
// Name: NotificationPermissionSettingsHeader
// Dependencies: [31, 27, 653, 11479, 33, 4130, 689, 11480, 675, 5167, 10232, 4126, 1212, 4543, 2]
// Exports: default

// Module 14365 (NotificationPermissionSettingsHeader)
import result from "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import EventActionType from "EventActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_5, NOOP: closure_6 } = ME);
({ EventActionLocation: closure_7, EventActionType: closure_8, NotificationNudgeAnalyticsAction: closure_9, NotificationNudgeSurface: closure_10 } = EventActionType);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cardContent = { alignItems: "center" };
let obj1 = { width: 48, height: 48, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.iconCircle = obj1;
_createForOfIteratorHelperLoose.body = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
const result = require("ME").fileFinishedImporting("modules/user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx");

export default function NotificationPermissionSettingsHeader() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = canSeePushNotificationNudge(11480);
  canSeePushNotificationNudge = obj.useCanSeePushNotificationNudge();
  const items = [canSeePushNotificationNudge];
  const effect = React.useEffect(() => {
    if (canSeePushNotificationNudge) {
      let obj = outer1_1(outer1_2[8]);
      obj = { action: outer1_9.IMPRESSION, prompt_type: outer1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
      obj.track(outer1_5.CONTEXTUAL_REMINDER_ACTION, obj);
    }
  }, items);
  let tmp5 = null;
  if (canSeePushNotificationNudge) {
    obj = { style: tmp.container };
    obj = { border: "none", shadow: "none" };
    const obj1 = { style: tmp.cardContent };
    const obj2 = { style: tmp.iconCircle };
    const obj3 = { size: "md", color: importDefault(689).colors.ICON_STRONG };
    obj2.children = callback(canSeePushNotificationNudge(10232).BellSlashIcon, obj3);
    const items1 = [callback(View, obj2), , , ];
    const obj4 = { variant: "heading-lg/bold", color: "text-default" };
    const intl = canSeePushNotificationNudge(1212).intl;
    obj4.children = intl.string(canSeePushNotificationNudge(1212).t.MUwOvc);
    items1[1] = callback(canSeePushNotificationNudge(4126).Text, obj4);
    const obj5 = { variant: "text-sm/medium", style: tmp.body, color: "text-muted" };
    const intl2 = canSeePushNotificationNudge(1212).intl;
    obj5.children = intl2.string(canSeePushNotificationNudge(1212).t.G4uKoe);
    items1[2] = callback(canSeePushNotificationNudge(4126).Text, obj5);
    const obj6 = {};
    const obj7 = { alignSelf: "stretch" };
    obj6.style = obj7;
    const obj8 = { variant: "primary" };
    const intl3 = canSeePushNotificationNudge(1212).intl;
    obj8.text = intl3.string(canSeePushNotificationNudge(1212).t["5xWOXv"]);
    obj8.onPress = tmp4;
    obj6.children = callback(canSeePushNotificationNudge(4543).Button, obj8);
    items1[3] = callback(View, obj6);
    obj1.children = items1;
    obj.children = callback2(View, obj1);
    obj.children = callback(canSeePushNotificationNudge(5167).Card, obj);
    tmp5 = callback(View, obj);
  }
  return tmp5;
};
