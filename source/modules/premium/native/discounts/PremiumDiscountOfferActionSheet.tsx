// Module ID: 15482
// Function ID: 118170
// Name: markAsDismissed
// Dependencies: []
// Exports: default

// Module 15482 (markAsDismissed)
let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let closure_3 = importAll(dependencyMap[0]);
({ PremiumTypes: closure_4, SubscriptionPlanInfo: closure_5 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[2]);
const AnalyticEvents = tmp3.AnalyticEvents;
({ AnalyticsObjectTypes, AnalyticsPages, AnalyticsSections } = tmp3);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_9 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/premium/native/discounts/PremiumDiscountOfferActionSheet.tsx");

export default function _default(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const arg1 = markAsDismissed;
  const userDiscountOffer = markAsDismissed.userDiscountOffer;
  const importDefault = userDiscountOffer;
  const analyticsLocations = importDefault(dependencyMap[5])(importDefault(dependencyMap[6]).PREMIUM_DISCOUNT_OFFER_ACTION_SHEET).analyticsLocations;
  const dependencyMap = analyticsLocations;
  const items = [userDiscountOffer];
  const memo = React.useMemo(() => {
    const first = userDiscountOffer.discount.planIds[0];
    let tmp2 = null;
    if (null != first) {
      tmp2 = closure_5[first];
    }
    let premiumType;
    if (null != tmp2) {
      premiumType = tmp2.premiumType;
    }
    if (null == premiumType) {
      premiumType = TIER_2.TIER_2;
    }
    return premiumType;
  }, items);
  const React = memo;
  const effect = React.useEffect(() => {
    let obj = userDiscountOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, discount_offer_id: userDiscountOffer.id };
    obj.track(constants.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_VIEWED, obj);
    markAsDismissed(analyticsLocations[8]).acknowledgeUserOffer(undefined, userDiscountOffer);
  }, []);
  const items1 = [analyticsLocations, markAsDismissed, userDiscountOffer];
  const items2 = [analyticsLocations, markAsDismissed, userDiscountOffer, memo];
  const callback = React.useCallback(() => {
    let obj = userDiscountOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, discount_offer_id: userDiscountOffer.id };
    obj.track(constants.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(constants2.USER_DISMISS);
  }, items1);
  const callback1 = React.useCallback(() => {
    let obj = userDiscountOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, discount_offer_id: userDiscountOffer.id };
    obj.track(constants.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_CTA_CLICKED, obj);
    markAsDismissed(constants2.TAKE_ACTION);
    obj = { analyticsLocations };
    userDiscountOffer(analyticsLocations[9]).pushLazy(markAsDismissed(analyticsLocations[11])(analyticsLocations[10], analyticsLocations.paths), obj);
    userDiscountOffer(analyticsLocations[12])({ analyticsLocation: closure_9, analyticsLocations, premiumType: memo });
  }, items2);
  const obj = { startExpanded: true, onDismiss: callback, children: jsx(importDefault(dependencyMap[14]), { discountOffer: userDiscountOffer, onConfirm: callback1 }) };
  let id;
  if (null != userDiscountOffer) {
    id = userDiscountOffer.id;
  }
  return jsx(arg1(dependencyMap[13]).BottomSheet, obj, id);
};
