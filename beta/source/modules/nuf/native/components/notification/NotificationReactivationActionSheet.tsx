// Module ID: 17226
// Function ID: 17227
// Name: NotificationReactivationActionSheet
// Dependencies: [19, 17, 11903, 1074, 21, 4836, 576, 1241, 11904, 4800, 6571, 17227, 4832, 1115, 5745, 5281, 2]
// Exports: default

// Module 17226 (NotificationReactivationActionSheet)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 11903 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 11904 */;
import AssetRegistryDefault from "AssetRegistry" /* 17227 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const EventActionType = NotificationPermissionConstants.EventActionType;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, image: obj3, title: { textAlign: "center" }, subtitle: obj4, buttons: obj5 };
obj2 = { marginHorizontal: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginVertical: nativeDefault.space.PX_24, height: 120 };
obj4 = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
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
  const tmp = closure_10();
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
    const obj2 = { action_type: SKIP_STEP, action_location: _location, permission_granted: "Array" };
    obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  }, items1);
  let obj = { children: closure_9(closure_4, obj2) };
  obj2 = { style: tmp.container, children: items2 };
  let obj3 = { style: tmp.image, source: AssetRegistryDefault, resizeMode: "contain" };
  BottomSheet = _location(6571).BottomSheet;
  items2 = [closure_8(closure_5, obj3), , , ];
  const obj4 = { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header", children: intl.string(_location(1115).t.a4bgO0) };
  const Text = _location(4832).Text;
  intl = _location(1115).intl;
  items2[1] = closure_8(Text, obj4);
  const obj5 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(_location(1115).t["rW5gw/"]) };
  const Text2 = _location(4832).Text;
  intl2 = _location(1115).intl;
  items2[2] = closure_8(Text2, obj5);
  const obj6 = { style: tmp.buttons, children: items3 };
  const ButtonGroup = _location(5745).ButtonGroup;
  const obj7 = { text: intl3.string(_location(1115).t.a4bgO0), onPress: callback };
  const Button = _location(5281).Button;
  intl3 = _location(1115).intl;
  items3 = [closure_8(Button, obj7), ];
  const obj8 = { text: intl4.string(_location(1115).t["/L3kom"]), onPress: callback1, variant: "secondary" };
  const Button2 = _location(5281).Button;
  intl4 = _location(1115).intl;
  items3[1] = closure_8(Button2, obj8);
  items2[3] = closure_9(ButtonGroup, obj6);
  return closure_8(BottomSheet, obj);
};
