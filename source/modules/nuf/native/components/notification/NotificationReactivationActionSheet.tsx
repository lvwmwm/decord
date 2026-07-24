// Module ID: 16185
// Function ID: 125459
// Name: NotificationReactivationActionSheet
// Dependencies: [31, 27, 11479, 653, 33, 4130, 689, 675, 11480, 4098, 5187, 16186, 4126, 1212, 4965, 4543, 2]
// Exports: default

// Module 16185 (NotificationReactivationActionSheet)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { EventActionType } from "EventActionType";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24, alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.image = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_24, height: 120 };
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
let obj1 = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_24, height: 120 };
_createForOfIteratorHelperLoose.subtitle = { textAlign: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj2 = { textAlign: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.buttons = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("EventActionType").fileFinishedImporting("modules/nuf/native/components/notification/NotificationReactivationActionSheet.tsx");

export default function NotificationReactivationActionSheet(location) {
  const _location = location.location;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [_location];
  const items1 = [_location];
  const callback = React.useCallback(() => {
    const pushNotificationPermission = _location(outer1_2[8]).requestPushNotificationPermission(outer1_6.ALLOW_TO_REQUEST, _location, () => {
      outer2_1(outer2_2[9]).hideActionSheet();
    });
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = outer1_1(outer1_2[7]);
    obj = { action_type: outer1_6.SKIP_STEP, action_location: _location, permission_granted: undefined };
    obj.track(outer1_7.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
    outer1_1(outer1_2[9]).hideActionSheet();
  }, items1);
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.image, source: importDefault(16186), resizeMode: "contain" };
  const items2 = [callback(closure_5, obj), , , ];
  const obj1 = { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header" };
  const intl = _location(1212).intl;
  obj1.children = intl.string(_location(1212).t.a4bgO0);
  items2[1] = callback(_location(4126).Text, obj1);
  const obj2 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default" };
  const intl2 = _location(1212).intl;
  obj2.children = intl2.string(_location(1212).t["rW5gw/"]);
  items2[2] = callback(_location(4126).Text, obj2);
  const obj3 = { style: tmp.buttons };
  const obj4 = {};
  const intl3 = _location(1212).intl;
  obj4.text = intl3.string(_location(1212).t.a4bgO0);
  obj4.onPress = callback;
  const items3 = [callback(_location(4543).Button, obj4), ];
  const obj5 = {};
  const intl4 = _location(1212).intl;
  obj5.text = intl4.string(_location(1212).t["/L3kom"]);
  obj5.onPress = callback1;
  obj5.variant = "secondary";
  items3[1] = callback(_location(4543).Button, obj5);
  obj3.children = items3;
  items2[3] = callback2(_location(4965).ButtonGroup, obj3);
  obj.children = items2;
  obj.children = callback2(closure_4, obj);
  return callback(_location(5187).BottomSheet, obj);
};
