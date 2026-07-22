// Module ID: 14545
// Function ID: 109579
// Name: markAsDismissed
// Dependencies: []
// Exports: default

// Module 14545 (markAsDismissed)
let closure_3 = importAll(dependencyMap[0]);
const PremiumTypes = arg1(dependencyMap[1]).PremiumTypes;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx");

export default function _default(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const arg1 = markAsDismissed;
  const userTrialOffer = markAsDismissed.userTrialOffer;
  const importDefault = userTrialOffer;
  let TIER_2 = markAsDismissed.fallbackPremiumType;
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  let dependencyMap;
  const analyticsLocations = importDefault(dependencyMap[5])(importDefault(dependencyMap[6]).PREMIUM_TRIAL_OFFER_ACTION_SHEET).analyticsLocations;
  dependencyMap = analyticsLocations;
  const effect = React.useEffect(() => {
    let obj = userTrialOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, trial_id: userTrialOffer.trial_id };
    obj.track(constants.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED, obj);
    const result = userTrialOffer(analyticsLocations[8]).acknowledgeUserTrialOffer(userTrialOffer);
  }, []);
  const items = [analyticsLocations, markAsDismissed, userTrialOffer];
  const items1 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const callback = React.useCallback(() => {
    let obj = userTrialOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, trial_id: userTrialOffer.trial_id };
    obj.track(constants.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(constants2.USER_DISMISS);
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = userTrialOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, trial_id: userTrialOffer.trial_id };
    obj.track(constants.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED, obj);
    markAsDismissed(constants2.TAKE_ACTION);
    obj = { analyticsLocations };
    userTrialOffer(analyticsLocations[9])(obj);
  }, items1);
  let obj = arg1(dependencyMap[10]);
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
  const result = obj.formatIntervalDuration(obj);
  obj = { startExpanded: true, onDismiss: callback };
  const obj1 = { intervalDuration: result, trialOffer: userTrialOffer, onConfirm: callback1, fallbackPremiumType: TIER_2 };
  obj.children = jsx(importDefault(dependencyMap[12]), obj1);
  return jsx(arg1(dependencyMap[11]).BottomSheet, obj, userTrialOffer.id);
};
