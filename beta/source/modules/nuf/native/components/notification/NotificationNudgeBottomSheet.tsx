// Module ID: 16164
// Function ID: 16165
// Name: NotificationNudgeBottomSheet
// Dependencies: [19, 17, 11903, 1074, 2042, 21, 4836, 576, 1241, 4800, 11904, 6571, 16165, 4832, 5745, 5281, 1115, 2]
// Exports: default

// Module 16164 (NotificationNudgeBottomSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 11904 */;
import react from "react" /* 19 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 11903 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ EventActionType: hasOwnProperty, NotificationNudgeAnalyticsAction: metroRequire } = NotificationPermissionConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, illustration: obj3, title: { textAlign: "center" }, body: obj4, buttonsContainer: obj5 };
obj2 = { marginHorizontal: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginVertical: nativeDefault.space.PX_24 };
obj4 = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_8, width: "100%" };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/nuf/native/components/notification/NotificationNudgeBottomSheet.tsx");

export default function NotificationNudgeBottomSheet(actionLocation) {
  let ButtonGroup;
  let body;
  let intl;
  let intl2;
  let items4;
  let items5;
  let obj2;
  let obj7;
  let title;
  actionLocation = actionLocation.actionLocation;
  const surface = actionLocation.surface;
  const markAsDismissed = actionLocation.markAsDismissed;
  const onHide = actionLocation.onHide;
  ({ title, body } = actionLocation);
  const tmp = closure_11();
  const items = [surface];
  const effect = onHide.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action: metroRequire.IMPRESSION, prompt_type: surface };
    obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj2);
  }, items);
  const items1 = [onHide];
  const callback = onHide.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (onHide != null) {
      onHide();
    }
  }, items1);
  const items2 = [surface, actionLocation, callback, markAsDismissed];
  const items3 = [surface, callback, markAsDismissed];
  const callback1 = onHide.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action: metroRequire.ACCEPT, prompt_type: surface };
    obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj2);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
    const obj3 = NotificationPermissionUtil;
    const pushNotificationPermission = obj3.requestPushNotificationPermission(hasOwnProperty.ALLOW_TO_REQUEST, actionLocation, callback);
  }, items2);
  const callback2 = onHide.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action: metroRequire.DISMISS, prompt_type: surface };
    obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj2);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
    callback();
  }, items3);
  let obj = { children: closure_10(callback, obj2) };
  obj2 = { style: tmp.container, children: items4 };
  let obj3 = { style: tmp.illustration, children: closure_9(actionLocation(markAsDismissed[12]).BellSpotIllustration, { scale: 0.8 }) };
  BottomSheet = actionLocation(markAsDismissed[11]).BottomSheet;
  items4 = [closure_9(callback, obj3), , , ];
  const obj4 = { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header", children: title };
  items4[1] = closure_9(actionLocation(markAsDismissed[13]).Text, obj4);
  const obj5 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: body };
  items4[2] = closure_9(actionLocation(markAsDismissed[13]).Text, obj5);
  const obj6 = { style: tmp.buttonsContainer, children: closure_10(ButtonGroup, obj7) };
  obj7 = { children: items5 };
  ButtonGroup = actionLocation(markAsDismissed[14]).ButtonGroup;
  const obj8 = { text: intl.string(actionLocation(markAsDismissed[16]).t["+7MDbQ"]), onPress: callback1 };
  const Button = actionLocation(markAsDismissed[15]).Button;
  intl = actionLocation(markAsDismissed[16]).intl;
  items5 = [closure_9(Button, obj8), ];
  const obj9 = { text: intl2.string(actionLocation(markAsDismissed[16]).t.L5eIZ2), onPress: callback2, variant: "secondary" };
  const Button2 = actionLocation(markAsDismissed[15]).Button;
  intl2 = actionLocation(markAsDismissed[16]).intl;
  items5[1] = closure_9(Button2, obj9);
  items4[3] = closure_9(callback, obj6);
  return closure_9(BottomSheet, obj);
};
