// Module ID: 15137
// Function ID: 115254
// Name: NotificationCenterBannerImpl
// Dependencies: [57, 31, 27, 653, 1345, 11449, 33, 4130, 689, 675, 10202, 4126, 1212, 4543, 11450, 4660, 5119, 14313, 5802, 1334, 2]
// Exports: default

// Module 15137 (NotificationCenterBannerImpl)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import EventActionType from "EventActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
let require = arg1;
function NotificationCenterBannerImpl(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  const tmp = _createForOfIteratorHelperLoose();
  callback3(() => {
    let obj = outer1_1(outer1_2[9]);
    obj = { action: outer1_12.IMPRESSION, prompt_type: outer1_13.NOTIFICATION_CENTER_BANNER };
    obj.track(outer1_7.CONTEXTUAL_REMINDER_ACTION, obj);
  }, []);
  let obj = { style: tmp.container };
  obj = { style: tmp.iconContainer };
  obj = { size: "md", color: importDefault(689).colors.ICON_STRONG };
  obj.children = callback4(onDismiss(10202).BellSlashIcon, obj);
  const items = [callback4(View, obj), , ];
  const obj1 = { style: tmp.contentContainer };
  const obj2 = { variant: "text-md/semibold", color: "text-default" };
  const intl = onDismiss(1212).intl;
  obj2.children = intl.string(onDismiss(1212).t.G6YBna);
  const items1 = [callback4(onDismiss(4126).Text, obj2), , ];
  const obj3 = { variant: "text-md/medium", color: "text-muted" };
  const obj4 = { marginTop: importDefault(689).space.PX_4 };
  obj3.style = obj4;
  const intl2 = onDismiss(1212).intl;
  obj3.children = intl2.string(onDismiss(1212).t["9CoPDE"]);
  items1[1] = callback4(onDismiss(4126).Text, obj3);
  const obj5 = { style: tmp.ctaButton };
  const obj6 = { variant: "primary", size: "md" };
  const intl3 = onDismiss(1212).intl;
  obj6.text = intl3.string(onDismiss(1212).t.a4bgO0);
  obj6.onPress = function onPress() {
    let obj = onDismiss(outer1_2[14]);
    const pushNotificationPermission = obj.requestPushNotificationPermission(outer1_10.ALLOW_TO_REQUEST, outer1_11.NOTIFICATION_CENTER, outer1_8);
    obj = { action: outer1_12.ACCEPT, prompt_type: outer1_13.NOTIFICATION_CENTER_BANNER };
    outer1_1(outer1_2[9]).track(outer1_7.CONTEXTUAL_REMINDER_ACTION, obj);
  };
  obj5.children = callback4(onDismiss(4543).Button, obj6);
  items1[2] = callback4(View, obj5);
  obj1.children = items1;
  items[1] = callback5(View, obj1);
  const obj7 = {
    onPress() {
      let obj = outer1_1(outer1_2[9]);
      obj = { action: outer1_12.DISMISS, prompt_type: outer1_13.NOTIFICATION_CENTER_BANNER };
      obj.track(outer1_7.CONTEXTUAL_REMINDER_ACTION, obj);
      onDismiss();
    },
    hitSlop: 8,
    accessibilityRole: "button"
  };
  const intl4 = onDismiss(1212).intl;
  obj7.accessibilityLabel = intl4.string(onDismiss(1212).t.WAI6xu);
  obj7.children = callback4(onDismiss(5119).XSmallIcon, { size: "sm", color: "icon-strong" });
  items[2] = callback4(onDismiss(4660).PressableHighlight, obj7);
  obj.children = items;
  return callback5(View, obj);
}
({ useCallback: closure_4, useEffect: closure_5 } = result);
({ AnalyticEvents: closure_7, NOOP: closure_8 } = ME);
({ EventActionType: closure_10, EventActionLocation: closure_11, NotificationNudgeAnalyticsAction: closure_12, NotificationNudgeSurface: closure_13 } = EventActionType);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", paddingLeft: 24, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, alignItems: "flex-start", borderBottomWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, gap: 16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { flex: 1 };
let obj1 = { width: 48, height: 48, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.iconContainer = obj1;
_createForOfIteratorHelperLoose.ctaButton = { alignSelf: "flex-start", marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { alignSelf: "flex-start", marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
result = require("get ActivityIndicator").fileFinishedImporting("modules/notification_center/native/NotificationCenterPermissionNudge.tsx");

export default function NotificationCenterPermissionNudge() {
  let obj = importDefault(14313);
  const canSeePushNotificationNudge = require(11450) /* _requestPushNotificationPermission */.useCanSeePushNotificationNudge();
  const obj2 = require(11450) /* _requestPushNotificationPermission */;
  let prop = null;
  if (!obj.useConfig({ location: "NotificationCenterPermissionNudge" }).inHoldout) {
    prop = null;
    if (canSeePushNotificationNudge) {
      prop = require(1334) /* DismissibleContent */.DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER;
    }
  }
  const tmp5 = callback(require(5802) /* useSelectedDismissibleContent */.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 604800000 }), 2);
  require = tmp6;
  const items = [tmp5[1]];
  const obj3 = require(5802) /* useSelectedDismissibleContent */;
  let tmp8 = null;
  if (tmp5[0] === require(1334) /* DismissibleContent */.DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER) {
    obj = { onDismiss: tmp7 };
    tmp8 = callback4(NotificationCenterBannerImpl, obj);
  }
  return tmp8;
};
