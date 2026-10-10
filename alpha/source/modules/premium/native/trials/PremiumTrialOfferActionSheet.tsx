// Module ID: 16034
// Function ID: 16035
// Name: PremiumTrialOfferActionSheet
// Dependencies: [19, 1392, 1085, 2062, 21, 6851, 6878, 1265, 13618, 9393, 4769, 6839, 16035, 2]
// Exports: default

// Module 16034 (PremiumTrialOfferActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import UserTrialActionCreatorsDefault from "UserTrialActionCreators" /* 13618 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let tmp;
const openPremiumModalDefault = tmp(9393);
const PremiumTypes = PremiumConstants.PremiumTypes;
const AnalyticEvents = Constants.AnalyticEvents;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx");

export default function _default(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const userTrialOffer = markAsDismissed.userTrialOffer;
  let TIER_2 = markAsDismissed.fallbackPremiumType;
  if (TIER_2 === undefined) {
    let tmp = PremiumTypes;
    TIER_2 = PremiumTypes.TIER_2;
  }
  let analyticsLocations;
  const tmp3 = analyticsLocations;
  let tmp4 = userTrialOffer(analyticsLocations[5]);
  analyticsLocations = tmp4(userTrialOffer(analyticsLocations[6]).PREMIUM_TRIAL_OFFER_ACTION_SHEET).analyticsLocations;
  const effect = react.useEffect(() => {
    if (null != userTrialOffer) {
      const obj2 = { location: analyticsLocations, trial_id: userTrialOffer.trialId };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED, obj2);
      const obj3 = UserTrialActionCreatorsDefault;
      const result = obj3.acknowledgeUserTrialOffer(tmp);
    }
  }, []);
  const items = [userTrialOffer, markAsDismissed];
  const effect1 = react.useEffect(() => {
    if (null == userTrialOffer) {
      markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items);
  const items1 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const items2 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const callback = react.useCallback(() => {
    let trialId;
    const obj = { location: analyticsLocations, trial_id: trialId };
    trialId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED = AnalyticEvents.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED;
    AnalyticsUtilsDefault;
    if (userTrialOffer != null) {
      trialId = userTrialOffer.trialId;
    }
    track(PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const callback1 = react.useCallback(() => {
    let trialId;
    const obj = { location: analyticsLocations, trial_id: trialId };
    trialId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED = AnalyticEvents.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED;
    AnalyticsUtilsDefault;
    const tmp4 = analyticsLocations;
    if (userTrialOffer != null) {
      trialId = userTrialOffer.trialId;
    }
    track(PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED, obj);
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    openPremiumModalDefault({ analyticsLocations: tmp4 });
  }, items2);
  markAsDismissed(analyticsLocations[10]);
  let interval;
  const tmp9 = markAsDismissed;
  if (userTrialOffer != null) {
    const subscriptionTrial = userTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      interval = subscriptionTrial.interval;
    }
  }
  let intervalCount;
  if (userTrialOffer != null) {
    const subscriptionTrial2 = userTrialOffer.subscriptionTrial;
    if (subscriptionTrial2 != null) {
      intervalCount = subscriptionTrial2.intervalCount;
    }
  }
  ({ intervalType: interval, intervalCount: null }.intervalCount) = intervalCount;
  let tmp14 = null;
  if (null != userTrialOffer) {
    BottomSheet = tmp9(tmp3[11]).BottomSheet;
    let obj2 = { intervalDuration: tmp13, trialOffer: userTrialOffer, onConfirm: callback1, fallbackPremiumType: TIER_2 };
    tmp14 = <BottomSheet key={userTrialOffer.id} startExpanded onDismiss={callback}>{null}</BottomSheet>;
  }
  return tmp14;
};
