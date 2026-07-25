// Module ID: 14717
// Function ID: 112187
// Name: markAsDismissed
// Dependencies: [31, 1852, 653, 1345, 33, 5462, 5482, 675, 6446, 9253, 3777, 5187, 14718, 2]
// Exports: default

// Module 14717 (markAsDismissed)
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
    if (null != userTrialOffer) {
      let obj = userTrialOffer(analyticsLocations[7]);
      obj = { location: analyticsLocations, trial_id: userTrialOffer.trial_id };
      obj.track(outer1_5.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED, obj);
      const result = userTrialOffer(analyticsLocations[8]).acknowledgeUserTrialOffer(userTrialOffer);
      const obj3 = userTrialOffer(analyticsLocations[8]);
    }
  }, []);
  const items = [userTrialOffer, markAsDismissed];
  const effect1 = React.useEffect(() => {
    if (null == userTrialOffer) {
      markAsDismissed(outer1_6.AUTO_DISMISS);
    }
  }, items);
  const items1 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const items2 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const callback = React.useCallback(() => {
    let obj = userTrialOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations };
    let trial_id;
    if (null != userTrialOffer) {
      trial_id = userTrialOffer.trial_id;
    }
    obj.trial_id = trial_id;
    obj.track(outer1_5.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(outer1_6.USER_DISMISS);
  }, items1);
  const callback1 = React.useCallback(() => {
    let obj = userTrialOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations };
    let trial_id;
    if (null != userTrialOffer) {
      trial_id = userTrialOffer.trial_id;
    }
    obj.trial_id = trial_id;
    obj.track(outer1_5.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED, obj);
    markAsDismissed(outer1_6.TAKE_ACTION);
    obj = { analyticsLocations };
    userTrialOffer(analyticsLocations[9])(obj);
  }, items2);
  markAsDismissed(analyticsLocations[10]);
  let obj = {};
  let interval;
  if (null != userTrialOffer) {
    const subscription_trial = userTrialOffer.subscription_trial;
    if (null != subscription_trial) {
      interval = subscription_trial.interval;
    }
  }
  obj.intervalType = interval;
  let interval_count;
  if (null != userTrialOffer) {
    const subscription_trial2 = userTrialOffer.subscription_trial;
    if (null != subscription_trial2) {
      interval_count = subscription_trial2.interval_count;
    }
  }
  obj.intervalCount = interval_count;
  let tmp11 = null;
  if (null != userTrialOffer) {
    obj = { startExpanded: true, onDismiss: callback };
    obj = { intervalDuration: tmp10, trialOffer: userTrialOffer, onConfirm: callback1, fallbackPremiumType: TIER_2 };
    obj.children = jsx(userTrialOffer(analyticsLocations[12]), { intervalDuration: tmp10, trialOffer: userTrialOffer, onConfirm: callback1, fallbackPremiumType: TIER_2 });
    tmp11 = jsx(markAsDismissed(analyticsLocations[11]).BottomSheet, { intervalDuration: tmp10, trialOffer: userTrialOffer, onConfirm: callback1, fallbackPremiumType: TIER_2 }, userTrialOffer.id);
  }
  return tmp11;
};
