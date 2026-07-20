// Module ID: 15119
// Function ID: 114117
// Name: NotificationNudgeBottomSheet
// Dependencies: []
// Exports: default

// Module 15119 (NotificationNudgeBottomSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ EventActionType: closure_5, NotificationNudgeAnalyticsAction: closure_6 } = arg1(dependencyMap[2]));
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { marginHorizontal: importDefault(dependencyMap[7]).space.PX_24, alignItems: "center" };
obj.container = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.illustration = { marginVertical: importDefault(dependencyMap[7]).space.PX_24 };
obj.title = { textAlign: "center" };
const obj1 = { marginVertical: importDefault(dependencyMap[7]).space.PX_24 };
obj.body = { textAlign: "center", marginTop: importDefault(dependencyMap[7]).space.PX_8 };
const obj2 = { textAlign: "center", marginTop: importDefault(dependencyMap[7]).space.PX_8 };
obj.buttonsContainer = { marginTop: importDefault(dependencyMap[7]).space.PX_8, width: "100%" };
let closure_11 = obj.createStyles(obj);
const obj3 = { marginTop: importDefault(dependencyMap[7]).space.PX_8, width: "100%" };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/nuf/native/components/notification/NotificationNudgeBottomSheet.tsx");

export default function NotificationNudgeBottomSheet(actionLocation) {
  let body;
  let title;
  actionLocation = actionLocation.actionLocation;
  const arg1 = actionLocation;
  const surface = actionLocation.surface;
  const importDefault = surface;
  const markAsDismissed = actionLocation.markAsDismissed;
  const dependencyMap = markAsDismissed;
  const onHide = actionLocation.onHide;
  const React = onHide;
  ({ title, body } = actionLocation);
  const tmp = callback3();
  const items = [surface];
  const effect = React.useEffect(() => {
    let obj = surface(markAsDismissed[8]);
    obj = { action: constants2.IMPRESSION, prompt_type: surface };
    obj.track(constants3.CONTEXTUAL_REMINDER_ACTION, obj);
  }, items);
  const items1 = [onHide];
  const callback = React.useCallback(() => {
    surface(markAsDismissed[9]).hideActionSheet();
    if (null != onHide) {
      onHide();
    }
  }, items1);
  const View = callback;
  const items2 = [surface, actionLocation, callback, markAsDismissed];
  const items3 = [surface, callback, markAsDismissed];
  const callback1 = React.useCallback(() => {
    let obj = surface(markAsDismissed[8]);
    obj = { action: constants2.ACCEPT, prompt_type: surface };
    obj.track(constants3.CONTEXTUAL_REMINDER_ACTION, obj);
    markAsDismissed(constants4.USER_DISMISS);
    const pushNotificationPermission = actionLocation(markAsDismissed[10]).requestPushNotificationPermission(constants.ALLOW_TO_REQUEST, actionLocation, callback);
  }, items2);
  const callback2 = React.useCallback(() => {
    let obj = surface(markAsDismissed[8]);
    obj = { action: constants2.DISMISS, prompt_type: surface };
    obj.track(constants3.CONTEXTUAL_REMINDER_ACTION, obj);
    markAsDismissed(constants4.USER_DISMISS);
    callback();
  }, items3);
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.illustration, children: callback(arg1(dependencyMap[12]).BellSpotIllustration, { scale: 0.8 }) };
  const items4 = [callback(View, obj), , , ];
  const obj1 = { "Bool(false)": "faint", "Bool(false)": 16, "Bool(false)": "none", style: tmp.title, children: title };
  items4[1] = callback(arg1(dependencyMap[13]).Text, obj1);
  items4[2] = callback(arg1(dependencyMap[13]).Text, { style: tmp.body, children: body });
  const obj3 = { style: tmp.buttonsContainer };
  const obj4 = {};
  const obj5 = {};
  const intl = arg1(dependencyMap[16]).intl;
  obj5.text = intl.string(arg1(dependencyMap[16]).t.+7MDbQ);
  obj5.onPress = callback1;
  const items5 = [callback(arg1(dependencyMap[15]).Button, obj5), ];
  const obj6 = {};
  const intl2 = arg1(dependencyMap[16]).intl;
  obj6.text = intl2.string(arg1(dependencyMap[16]).t.L5eIZ2);
  obj6.onPress = callback2;
  obj6.variant = "secondary";
  items5[1] = callback(arg1(dependencyMap[15]).Button, obj6);
  obj4.children = items5;
  obj3.children = callback2(arg1(dependencyMap[14]).ButtonGroup, obj4);
  items4[3] = callback(View, obj3);
  obj.children = items4;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[11]).BottomSheet, obj);
};
