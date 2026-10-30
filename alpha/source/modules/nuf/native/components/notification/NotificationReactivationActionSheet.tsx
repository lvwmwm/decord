// Module ID: 19520
// Function ID: 19521
// Name: NotificationReactivationActionSheet
// Dependencies: [19, 17, 13924, 1072, 21, 5009, 575, 1253, 13925, 5253, 5267, 5712, 19521, 5619, 1114, 6761, 5629, 2]
// Exports: default

// Module 19520 (NotificationReactivationActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import FastImageDefault from "FastImage" /* 5712 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 13924 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 13925 */;
import AssetRegistryDefault from "AssetRegistry" /* 19521 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const EventActionType = NotificationPermissionConstants.EventActionType;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, image: obj3, title: { textAlign: "center" }, subtitle: obj4, buttons: obj5 };
obj2 = { marginHorizontal: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginVertical: nativeDefault.space.PX_24, height: 120 };
obj4 = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/nuf/native/components/notification/NotificationReactivationActionSheet.tsx");

export default function NotificationReactivationActionSheet(location) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let obj2;
  const _location = location.location;
  const tmp = closure_9();
  const items = [_location];
  const items1 = [_location];
  const callback = react.useCallback(() => {
    let obj = NotificationPermissionUtil;
    const pushNotificationPermission = obj.requestPushNotificationPermission(EventActionType.ALLOW_TO_REQUEST, _location, () => {
      const obj = closure_1_1(closure_1_2[9]);
      obj.hideActionSheet();
    });
  }, items);
  const callback1 = react.useCallback(() => {
    const SKIP_STEP = EventActionType.SKIP_STEP;
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action_type: SKIP_STEP, action_location: _location, permission_granted: "r" };
    obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  }, items1);
  let obj = { children: closure_8(View, obj2) };
  obj2 = { style: tmp.container, children: items2 };
  BottomSheet = _location(5267).BottomSheet;
  let obj3 = { style: tmp.image, source: AssetRegistryDefault, resizeMode: "contain" };
  const tmp4 = FastImageDefault;
  items2 = [closure_7(tmp4, obj3), , , ];
  const obj4 = { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header", children: intl.string(_location(1114).t.a4bgO0) };
  const Text = _location(5619).Text;
  intl = _location(1114).intl;
  items2[1] = closure_7(Text, obj4);
  const obj5 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(_location(1114).t["rW5gw/"]) };
  const Text2 = _location(5619).Text;
  intl2 = _location(1114).intl;
  items2[2] = closure_7(Text2, obj5);
  const obj6 = { style: tmp.buttons, children: items3 };
  const ButtonGroup = _location(6761).ButtonGroup;
  const obj7 = { text: intl3.string(_location(1114).t.a4bgO0), onPress: callback };
  const Button = _location(5629).Button;
  intl3 = _location(1114).intl;
  items3 = [closure_7(Button, obj7), ];
  const obj8 = { text: intl4.string(_location(1114).t["/L3kom"]), onPress: callback1, variant: "secondary" };
  const Button2 = _location(5629).Button;
  intl4 = _location(1114).intl;
  items3[1] = closure_7(Button2, obj8);
  items2[3] = closure_8(ButtonGroup, obj6);
  return closure_7(BottomSheet, obj);
};
