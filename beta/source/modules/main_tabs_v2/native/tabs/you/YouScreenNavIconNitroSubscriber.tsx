// Module ID: 16611
// Function ID: 16612
// Name: YouScreenNavIconNitroSubscriber
// Dependencies: [32, 19, 6872, 12935, 2042, 21, 7500, 504, 6806, 2029, 16606, 16608, 8122, 1115, 2]

// Module 16611 (YouScreenNavIconNitroSubscriber)
import Fragment from "Fragment" /* 21 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import PremiumNitroNavigationStore2 from "PremiumNitroNavigationStore" /* 12935 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6872 */;
import size from "module_2" /* 2 */;

const PremiumNitroNavigationStore = PremiumNitroNavigationStore2;
let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const NitroHomeSectionId = PremiumNitroNavigationStore2.NitroHomeSectionId;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const memoResult = react.memo(function SubscriberNitroIcon(onPress) {
  let closure_2;
  let closure_3;
  onPress = onPress.onPress;
  let showReferralNotificationDot;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let tmp = onPress;
  let obj = onPress(7500);
  if (showReferralNotificationDot) {
    showReferralNotificationDot = obj.useIsEligibleSenderForReferralProgram(!showReferralNotificationDot);
  }
  const items = [ReferralTrialStore];
  const items1 = [showReferralNotificationDot];
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    const obj = { bypassFetch: !showReferralNotificationDot };
    return ReferralTrialStore.getReferralsRemaining(obj);
  }, items1);
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = tmp(6806).useSelectedTimeRecurringDismissibleContent;
  tmp(6806);
  if (showReferralNotificationDot) {
    prop = null;
    if (null != stateFromStores) {
      prop = null;
      if (stateFromStores > 0) {
        prop = tmp(2029).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
      }
    }
  }
  const obj2 = { cooldownDurationMs: tmp(16606).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS };
  const tmp6 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, obj2, undefined, true), 2);
  dependencyMap = tmp7;
  const tmp8 = tmp6[0] === tmp(2029).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
  _slicedToArray = tmp8;
  const items2 = [tmp8, tmp6[1], onPress];
  const callback = react.useCallback(() => {
    const tmp = closure_3;
    if (tmp) {
      closure_2(ContentDismissActionType.TAKE_ACTION);
      const obj = { scrollToSectionId: NitroHomeSectionId.REFERRAL_PROGRAM };
      PremiumNitroNavigationStore.setState(obj);
    }
    onPress();
  }, items2);
  showReferralNotificationDot(16608);
  const intl = tmp(1115).intl;
  return <tmp10 IconComponent={tmp(8122).NitroWheelIcon} accessibilityLabel={intl.string(tmp(1115).t.Ipxkog)} onPress={callback} showRedDot={tmp8} />;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx");

export default memoResult;
