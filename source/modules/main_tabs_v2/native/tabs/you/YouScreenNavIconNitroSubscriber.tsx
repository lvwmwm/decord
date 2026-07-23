// Module ID: 15485
// Function ID: 119205
// Dependencies: [57, 31, 6689, 7420, 1345, 33, 7423, 566, 5802, 1334, 15480, 15482, 7871, 1212, 2]

// Module 15485
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
  let obj = onPress(7423);
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
  obj = { cooldownDurationMs: onPress(15480).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS };
  const tmp5 = callback(onPress(5802).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
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
  const obj3 = onPress(5802);
  obj.IconComponent = onPress(7871).NitroWheelIcon;
  const intl = onPress(1212).intl;
  obj.accessibilityLabel = intl.string(onPress(1212).t.Ipxkog);
  obj.onPress = callback;
  obj.showRedDot = tmp7;
  return jsx(showReferralNotificationDot(15482), {});
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx");

export default memoResult;
