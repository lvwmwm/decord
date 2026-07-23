// Module ID: 15252
// Function ID: 116387
// Name: NotificationNudgeBottomSheet
// Dependencies: [31, 27, 11449, 653, 1345, 33, 4130, 689, 675, 4098, 11450, 5187, 5807, 4126, 4965, 4543, 1212, 2]
// Exports: default

// Module 15252 (NotificationNudgeBottomSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import EventActionType from "EventActionType";
import { AnalyticEvents } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ EventActionType: closure_5, NotificationNudgeAnalyticsAction: closure_6 } = EventActionType);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24, alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.illustration = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
let obj1 = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.body = { textAlign: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj2 = { textAlign: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.buttonsContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, width: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, width: "100%" };
const result = require("EventActionType").fileFinishedImporting("modules/nuf/native/components/notification/NotificationNudgeBottomSheet.tsx");

export default function NotificationNudgeBottomSheet(actionLocation) {
  let body;
  let title;
  actionLocation = actionLocation.actionLocation;
  const surface = actionLocation.surface;
  const markAsDismissed = actionLocation.markAsDismissed;
  const onHide = actionLocation.onHide;
  ({ title, body } = actionLocation);
  const tmp = _createForOfIteratorHelperLoose();
  const items = [surface];
  const effect = onHide.useEffect(() => {
    let obj = surface(markAsDismissed[8]);
    obj = { action: outer1_6.IMPRESSION, prompt_type: surface };
    obj.track(outer1_7.CONTEXTUAL_REMINDER_ACTION, obj);
  }, items);
  const items1 = [onHide];
  const callback = onHide.useCallback(() => {
    surface(markAsDismissed[9]).hideActionSheet();
    if (null != onHide) {
      onHide();
    }
  }, items1);
  const items2 = [surface, actionLocation, callback, markAsDismissed];
  const items3 = [surface, callback, markAsDismissed];
  const callback1 = onHide.useCallback(() => {
    let obj = surface(markAsDismissed[8]);
    obj = { action: outer1_6.ACCEPT, prompt_type: surface };
    obj.track(outer1_7.CONTEXTUAL_REMINDER_ACTION, obj);
    markAsDismissed(outer1_8.USER_DISMISS);
    const pushNotificationPermission = actionLocation(markAsDismissed[10]).requestPushNotificationPermission(outer1_5.ALLOW_TO_REQUEST, actionLocation, callback);
  }, items2);
  const callback2 = onHide.useCallback(() => {
    let obj = surface(markAsDismissed[8]);
    obj = { action: outer1_6.DISMISS, prompt_type: surface };
    obj.track(outer1_7.CONTEXTUAL_REMINDER_ACTION, obj);
    markAsDismissed(outer1_8.USER_DISMISS);
    callback();
  }, items3);
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.illustration, children: callback(actionLocation(markAsDismissed[12]).BellSpotIllustration, { scale: 0.8 }) };
  const items4 = [callback(callback, obj), , , ];
  const obj1 = { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header", children: title };
  items4[1] = callback(actionLocation(markAsDismissed[13]).Text, obj1);
  const obj2 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: body };
  items4[2] = callback(actionLocation(markAsDismissed[13]).Text, obj2);
  const obj3 = { style: tmp.buttonsContainer };
  const obj4 = {};
  const obj5 = {};
  const intl = actionLocation(markAsDismissed[16]).intl;
  obj5.text = intl.string(actionLocation(markAsDismissed[16]).t["+7MDbQ"]);
  obj5.onPress = callback1;
  const items5 = [callback(actionLocation(markAsDismissed[15]).Button, obj5), ];
  const obj6 = {};
  const intl2 = actionLocation(markAsDismissed[16]).intl;
  obj6.text = intl2.string(actionLocation(markAsDismissed[16]).t.L5eIZ2);
  obj6.onPress = callback2;
  obj6.variant = "secondary";
  items5[1] = callback(actionLocation(markAsDismissed[15]).Button, obj6);
  obj4.children = items5;
  obj3.children = callback2(actionLocation(markAsDismissed[14]).ButtonGroup, obj4);
  items4[3] = callback(callback, obj3);
  obj.children = items4;
  obj.children = callback2(callback, obj);
  return callback(actionLocation(markAsDismissed[11]).BottomSheet, obj);
};
