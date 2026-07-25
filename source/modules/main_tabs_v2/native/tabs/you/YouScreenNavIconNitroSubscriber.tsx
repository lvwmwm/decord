// Module ID: 15542
// Function ID: 119655
// Dependencies: [57, 31, 6158, 12377, 1345, 33, 7778, 566, 8379, 1334, 15537, 15539, 6570, 1212, 2]

// Module 15542
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import zustandStore from "zustandStore";
import { NitroHomeSectionId } from "zustandStore";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(function SubscriberNitroIcon(onPress) {
  onPress = onPress.onPress;
  let showReferralNotificationDot = onPress.showReferralNotificationDot;
  showReferralNotificationDot = undefined;
  let dependencyMap;
  let callback;
  let obj = onPress(7778);
  if (showReferralNotificationDot) {
    showReferralNotificationDot = obj.useIsEligibleSenderForReferralProgram(!showReferralNotificationDot);
  }
  const items = [_isNativeReflectConstruct];
  const items1 = [showReferralNotificationDot];
  const stateFromStores = onPress(566).useStateFromStores(items, () => outer1_5.getReferralsRemaining({ bypassFetch: !showReferralNotificationDot }), items1);
  const obj2 = onPress(566);
  let prop = null;
  if (showReferralNotificationDot) {
    prop = null;
    if (null != stateFromStores) {
      prop = null;
      if (stateFromStores > 0) {
        prop = onPress(1334).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
      }
    }
  }
  obj = { cooldownDurationMs: onPress(15537).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS };
  const tmp5 = callback(onPress(8379).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  dependencyMap = tmp6;
  const tmp7 = tmp5[0] === onPress(1334).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
  callback = tmp7;
  const items2 = [tmp7, tmp5[1], onPress];
  callback = importAllResult.useCallback(() => {
    if (c3) {
      _undefined(outer1_8.TAKE_ACTION);
      const obj = { scrollToSectionId: outer1_7.REFERRAL_PROGRAM };
      outer1_6.setState(obj);
    }
    onPress();
  }, items2);
  obj = {};
  const obj3 = onPress(8379);
  obj.IconComponent = onPress(6570).NitroWheelIcon;
  const intl = onPress(1212).intl;
  obj.accessibilityLabel = intl.string(onPress(1212).t.Ipxkog);
  obj.onPress = callback;
  obj.showRedDot = tmp7;
  return jsx(showReferralNotificationDot(15539), {});
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx");

export default memoResult;
