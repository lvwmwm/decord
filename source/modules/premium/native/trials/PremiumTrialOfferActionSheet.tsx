// Module ID: 14706
// Function ID: 112060
// Name: markAsDismissed
// Dependencies: [31, 1851, 653, 1345, 33, 5462, 5482, 675, 7373, 8183, 3776, 5187, 14707, 2]
// Exports: default

// Module 14706 (markAsDismissed)
import result from "result";
import { PremiumTypes } from "GuildFeatures";
import { AnalyticEvents } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx");

export default function _default(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const userTrialOffer = markAsDismissed.userTrialOffer;
  let TIER_2 = markAsDismissed.fallbackPremiumType;
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  let analyticsLocations;
  analyticsLocations = userTrialOffer(analyticsLocations[5])(userTrialOffer(analyticsLocations[6]).PREMIUM_TRIAL_OFFER_ACTION_SHEET).analyticsLocations;
  const effect = React.useEffect(() => {
    let obj = userTrialOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, trial_id: userTrialOffer.trial_id };
    obj.track(outer1_5.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED, obj);
    const result = userTrialOffer(analyticsLocations[8]).acknowledgeUserTrialOffer(userTrialOffer);
  }, []);
  const items = [analyticsLocations, markAsDismissed, userTrialOffer];
  const items1 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const callback = React.useCallback(() => {
    let obj = userTrialOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, trial_id: userTrialOffer.trial_id };
    obj.track(outer1_5.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(outer1_6.USER_DISMISS);
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = userTrialOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, trial_id: userTrialOffer.trial_id };
    obj.track(outer1_5.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED, obj);
    markAsDismissed(outer1_6.TAKE_ACTION);
    obj = { analyticsLocations };
    userTrialOffer(analyticsLocations[9])(obj);
  }, items1);
  let obj = markAsDismissed(analyticsLocations[10]);
  obj = {};
  const subscription_trial = userTrialOffer.subscription_trial;
  let interval;
  if (null != subscription_trial) {
    interval = subscription_trial.interval;
  }
  obj.intervalType = interval;
  const subscription_trial2 = userTrialOffer.subscription_trial;
  let interval_count;
  if (null != subscription_trial2) {
    interval_count = subscription_trial2.interval_count;
  }
  obj.intervalCount = interval_count;
  let result = obj.formatIntervalDuration(obj);
  obj = { startExpanded: true, onDismiss: callback };
  const obj1 = { intervalDuration: result, trialOffer: userTrialOffer, onConfirm: callback1, fallbackPremiumType: TIER_2 };
  obj.children = jsx(userTrialOffer(analyticsLocations[12]), { intervalDuration: result, trialOffer: userTrialOffer, onConfirm: callback1, fallbackPremiumType: TIER_2 });
  return jsx(markAsDismissed(analyticsLocations[11]).BottomSheet, { startExpanded: true, onDismiss: callback }, userTrialOffer.id);
};
