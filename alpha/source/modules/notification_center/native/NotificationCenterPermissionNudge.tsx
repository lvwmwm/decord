// Module ID: 18471
// Function ID: 18472
// Name: NotificationCenterPermissionNudge
// Dependencies: [32, 19, 17, 1072, 4860, 13959, 21, 5014, 575, 1252, 10992, 5624, 1113, 5634, 13960, 6980, 7054, 17464, 7569, 4847, 2]
// Exports: default

// Module 18471 (NotificationCenterPermissionNudge)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 17464 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 13959 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let unpackModuleId;
function NotificationCenterBannerImpl(onDismiss) {
  let BellSlashIcon;
  let Button;
  let constants4;
  let constants5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let obj3;
  let obj7;
  let obj9;
  onDismiss = onDismiss.onDismiss;
  const tmp = closure_16();
  closure_5(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action: constants4.IMPRESSION, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
    obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
  }, []);
  let obj = { style: tmp.container, children: items };
  let obj2 = { style: tmp.iconContainer, children: closure_14(BellSlashIcon, obj3) };
  obj3 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
  BellSlashIcon = onDismiss(10992).BellSlashIcon;
  items = [closure_14(View, obj2), , ];
  const obj4 = { style: tmp.contentContainer, children: items1 };
  const obj5 = { variant: "text-md/semibold", color: "text-default", children: intl.string(onDismiss(1113).t.G6YBna) };
  const Text = onDismiss(5624).Text;
  intl = onDismiss(1113).intl;
  items1 = [closure_14(Text, obj5), , ];
  const obj6 = { variant: "text-md/medium", color: "text-muted", style: obj7, children: intl2.string(onDismiss(1113).t["9CoPDE"]) };
  obj7 = { marginTop: nativeDefault.space.PX_4 };
  const Text2 = onDismiss(5624).Text;
  intl2 = onDismiss(1113).intl;
  items1[1] = closure_14(Text2, obj6);
  const obj8 = { style: tmp.ctaButton, children: closure_14(Button, obj9) };
  obj9 = {
    variant: "primary",
    size: "md",
    text: intl3.string(onDismiss(1113).t.a4bgO0),
    onPress: function handlePress() {
      const obj = onDismiss(dependencyMap[14]);
      const pushNotificationPermission = obj.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, constants3.NOTIFICATION_CENTER, closure_1_8);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { action: constants4.ACCEPT, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
      obj2.track(constants.CONTEXTUAL_REMINDER_ACTION, obj3);
    }
  };
  Button = onDismiss(5634).Button;
  intl3 = onDismiss(1113).intl;
  items1[2] = closure_14(View, obj8);
  items[1] = closure_15(View, obj4);
  const obj10 = {
    onPress: function handleDismiss() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { action: constants4.DISMISS, prompt_type: map1.NOTIFICATION_CENTER_BANNER };
      obj.track(metroImportDefault.CONTEXTUAL_REMINDER_ACTION, obj2);
      onDismiss();
    },
    hitSlop: 8,
    accessibilityRole: "button",
    accessibilityLabel: intl4.string(onDismiss(1113).t.WAI6xu),
    children: closure_14(onDismiss(7054).XSmallIcon, { size: "sm", color: "icon-strong" })
  };
  const PressableHighlight = onDismiss(6980).PressableHighlight;
  intl4 = onDismiss(1113).intl;
  items[2] = closure_14(PressableHighlight, obj10);
  return closure_15(View, obj);
}
({ useCallback: closure_4, useEffect: hasOwnProperty } = react);
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, NOOP: metroImportAll } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ EventActionType: c10, EventActionLocation: unpackModuleId, NotificationNudgeAnalyticsAction: closure_12, NotificationNudgeSurface: map1 } = NotificationPermissionConstants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: { flex: 1 }, iconContainer: size, ctaButton: obj3 };
obj2 = { flexDirection: "row", paddingLeft: 24, paddingRight: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "flex-start", borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, gap: 16 };
createStyles = createStyles.createStyles;
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
obj3 = { alignSelf: "flex-start", marginTop: nativeDefault.space.PX_12 };
let closure_16 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterPermissionNudge.tsx");

export default function NotificationCenterPermissionNudge() {
  let closure_0;
  const obj = ContextualOptInNudgeHoldoutExperimentDefault;
  const inHoldout = obj.useConfig({ location: "NotificationCenterPermissionNudge" }).inHoldout;
  const obj2 = require("NotificationPermissionUtil");
  const canSeePushNotificationNudge = obj2.useCanSeePushNotificationNudge();
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = require("useSelectedDismissibleContent").useSelectedTimeRecurringDismissibleContent;
  require("useSelectedDismissibleContent");
  if (!inHoldout) {
    prop = null;
    if (canSeePushNotificationNudge) {
      prop = tmp2(4847).DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER;
    }
  }
  const tmp6 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 604800000 }), 2);
  _require = tmp8;
  const items = [tmp6[1]];
  const first = tmp6[0];
  let tmp10 = null;
  const tmp9 = closure_4(() => closure_0(ContentDismissActionType.USER_DISMISS), items);
  if (first === require("dismissible_content").DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER) {
    const obj3 = { onDismiss: tmp9 };
    tmp10 = closure_14(NotificationCenterBannerImpl, obj3);
  }
  return tmp10;
};
