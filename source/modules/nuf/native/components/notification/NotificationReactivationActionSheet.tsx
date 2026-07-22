// Module ID: 16021
// Function ID: 122962
// Name: NotificationReactivationActionSheet
// Dependencies: []
// Exports: default

// Module 16021 (NotificationReactivationActionSheet)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
const EventActionType = arg1(dependencyMap[2]).EventActionType;
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { marginHorizontal: importDefault(dependencyMap[6]).space.PX_24, alignItems: "center" };
obj.container = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.image = { marginVertical: importDefault(dependencyMap[6]).space.PX_24, height: 120 };
obj.title = { textAlign: "center" };
const obj1 = { marginVertical: importDefault(dependencyMap[6]).space.PX_24, height: 120 };
obj.subtitle = { textAlign: "center", marginTop: importDefault(dependencyMap[6]).space.PX_8 };
const obj2 = { textAlign: "center", marginTop: importDefault(dependencyMap[6]).space.PX_8 };
obj.buttons = { marginTop: importDefault(dependencyMap[6]).space.PX_8 };
let closure_10 = obj.createStyles(obj);
const obj3 = { marginTop: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/nuf/native/components/notification/NotificationReactivationActionSheet.tsx");

export default function NotificationReactivationActionSheet(location) {
  const _location = location.location;
  const arg1 = _location;
  const tmp = callback3();
  const items = [_location];
  const items1 = [_location];
  const callback = React.useCallback(() => {
    const pushNotificationPermission = _location(closure_2[8]).requestPushNotificationPermission(constants.ALLOW_TO_REQUEST, _location, () => {
      callback(closure_2[9]).hideActionSheet();
    });
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = callback(closure_2[7]);
    obj = { action_type: constants.SKIP_STEP, action_location: _location, permission_granted: undefined };
    obj.track(constants2.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
    callback(closure_2[9]).hideActionSheet();
  }, items1);
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.image, source: importDefault(dependencyMap[11]), resizeMode: "contain" };
  const items2 = [callback(closure_5, obj), , , ];
  const obj1 = { vy: "faint", numberActiveTouches: 16, _accountsForMovesUpTo: "none", style: tmp.title };
  const intl = arg1(dependencyMap[13]).intl;
  obj1.children = intl.string(arg1(dependencyMap[13]).t.a4bgO0);
  items2[1] = callback(arg1(dependencyMap[12]).Text, obj1);
  const obj2 = { style: tmp.subtitle };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[13]).t.rW5gw/);
  items2[2] = callback(arg1(dependencyMap[12]).Text, obj2);
  const obj3 = { style: tmp.buttons };
  const obj4 = {};
  const intl3 = arg1(dependencyMap[13]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[13]).t.a4bgO0);
  obj4.onPress = callback;
  const items3 = [callback(arg1(dependencyMap[15]).Button, obj4), ];
  const obj5 = {};
  const intl4 = arg1(dependencyMap[13]).intl;
  obj5.text = intl4.string(arg1(dependencyMap[13]).t./L3kom);
  obj5.onPress = callback1;
  obj5.variant = "secondary";
  items3[1] = callback(arg1(dependencyMap[15]).Button, obj5);
  obj3.children = items3;
  items2[3] = callback2(arg1(dependencyMap[14]).ButtonGroup, obj3);
  obj.children = items2;
  obj.children = callback2(closure_4, obj);
  return callback(arg1(dependencyMap[10]).BottomSheet, obj);
};
