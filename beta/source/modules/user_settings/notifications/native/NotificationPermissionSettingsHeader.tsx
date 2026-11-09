// Module ID: 17800
// Function ID: 17801
// Name: NotificationPermissionSettingsHeader
// Dependencies: [19, 17, 1072, 14208, 21, 5140, 575, 14209, 1252, 7040, 11122, 5751, 1113, 5758, 2]
// Exports: default

// Module 17800 (NotificationPermissionSettingsHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 14208 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let unpackModuleId;
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, NOOP: metroRequire } = Constants);
({ EventActionLocation: metroImportDefault, EventActionType: metroImportAll, NotificationNudgeAnalyticsAction: c9, NotificationNudgeSurface: c10 } = NotificationPermissionConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, cardContent: { alignItems: "center" }, iconCircle: size, body: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_8 };
obj3 = { marginBottom: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let closure_13 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx");

export default function NotificationPermissionSettingsHeader() {
  let BellSlashIcon;
  let Button;
  let Card;
  let canSeePushNotificationNudge;
  let constants4;
  let constants5;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj10;
  let obj3;
  let obj4;
  let obj6;
  let tmp = closure_13();
  let obj = canSeePushNotificationNudge(14209);
  canSeePushNotificationNudge = obj.useCanSeePushNotificationNudge();
  const items = [canSeePushNotificationNudge];
  const effect = react.useEffect(() => {
    const tmp = canSeePushNotificationNudge;
    if (tmp) {
      const obj2 = { action: constants4.IMPRESSION, prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
      const obj = AnalyticsUtilsDefault;
      obj.track(hasOwnProperty.CONTEXTUAL_REMINDER_ACTION, obj2);
    }
  }, items);
  let tmp7 = null;
  if (canSeePushNotificationNudge) {
    let obj2 = { style: tmp.container, children: closure_11(Card, obj3) };
    obj3 = { border: "none", shadow: "none", children: closure_12(View, obj4) };
    obj4 = { style: tmp.cardContent, children: items1 };
    const obj5 = { style: tmp.iconCircle, children: closure_11(BellSlashIcon, obj6) };
    Card = tmp2(7040).Card;
    obj6 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
    BellSlashIcon = tmp2(11122).BellSlashIcon;
    items1 = [closure_11(View, obj5), , , ];
    const obj7 = { variant: "heading-lg/semibold", color: "text-default", children: intl.string(canSeePushNotificationNudge(1113).t.MUwOvc) };
    const Text = tmp2(5751).Text;
    intl = tmp2(1113).intl;
    items1[1] = closure_11(Text, obj7);
    const obj8 = { variant: "body-sm/medium", style: tmp.body, color: "text-muted", children: intl2.string(canSeePushNotificationNudge(1113).t.G4uKoe) };
    const Text2 = tmp2(5751).Text;
    intl2 = tmp2(1113).intl;
    items1[2] = closure_11(Text2, obj8);
    const obj9 = { style: { alignSelf: "stretch" }, children: closure_11(Button, obj10) };
    obj10 = { variant: "primary", text: intl3.string(canSeePushNotificationNudge(1113).t["5xWOXv"]), onPress: tmp6 };
    Button = tmp2(5758).Button;
    intl3 = tmp2(1113).intl;
    items1[3] = closure_11(View, obj9);
    tmp7 = closure_11(View, obj2);
  }
  return tmp7;
};
