// Module ID: 15617
// Function ID: 120449
// Name: markAsDismissed
// Dependencies: [31, 1851, 653, 1345, 33, 5464, 5484, 675, 7374, 8139, 6661, 5187, 15618, 2]
// Exports: default

// Module 15617 (markAsDismissed)
import result from "result";
import GuildFeatures from "GuildFeatures";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let closure_4;
let closure_5;
const require = arg1;
({ PremiumTypes: closure_4, SubscriptionPlanInfo: closure_5 } = GuildFeatures);
const AnalyticEvents = ME.AnalyticEvents;
({ AnalyticsObjectTypes, AnalyticsPages, AnalyticsSections } = ME);
let closure_9 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
const result = require("ME").fileFinishedImporting("modules/premium/native/discounts/PremiumDiscountOfferActionSheet.tsx");

export default function _default(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const userDiscountOffer = markAsDismissed.userDiscountOffer;
  analyticsLocations = userDiscountOffer(analyticsLocations[5])(userDiscountOffer(analyticsLocations[6]).PREMIUM_DISCOUNT_OFFER_ACTION_SHEET).analyticsLocations;
  const items = [userDiscountOffer];
  memo = memo.useMemo(() => {
    const first = userDiscountOffer.discount.planIds[0];
    let tmp2 = null;
    if (null != first) {
      tmp2 = outer1_5[first];
    }
    let premiumType;
    if (null != tmp2) {
      premiumType = tmp2.premiumType;
    }
    if (null == premiumType) {
      premiumType = outer1_4.TIER_2;
    }
    return premiumType;
  }, items);
  const effect = memo.useEffect(() => {
    let obj = userDiscountOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, discount_offer_id: userDiscountOffer.id };
    obj.track(outer1_6.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_VIEWED, obj);
    markAsDismissed(analyticsLocations[8]).acknowledgeUserOffer(undefined, userDiscountOffer);
  }, []);
  const items1 = [analyticsLocations, markAsDismissed, userDiscountOffer];
  const items2 = [analyticsLocations, markAsDismissed, userDiscountOffer, memo];
  const callback = memo.useCallback(() => {
    let obj = userDiscountOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, discount_offer_id: userDiscountOffer.id };
    obj.track(outer1_6.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(outer1_7.USER_DISMISS);
  }, items1);
  const callback1 = memo.useCallback(() => {
    let obj = userDiscountOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, discount_offer_id: userDiscountOffer.id };
    obj.track(outer1_6.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_CTA_CLICKED, obj);
    markAsDismissed(outer1_7.TAKE_ACTION);
    obj = { analyticsLocations };
    userDiscountOffer(analyticsLocations[9])(obj);
    userDiscountOffer(analyticsLocations[10])({ analyticsLocation: outer1_9, analyticsLocations, premiumType: memo });
  }, items2);
  let obj = { startExpanded: true, onDismiss: callback, children: jsx(userDiscountOffer(analyticsLocations[12]), { discountOffer: userDiscountOffer, onConfirm: callback1 }) };
  let id;
  if (null != userDiscountOffer) {
    id = userDiscountOffer.id;
  }
  return jsx(markAsDismissed(analyticsLocations[11]).BottomSheet, { startExpanded: true, onDismiss: callback, children: jsx(userDiscountOffer(analyticsLocations[12]), { discountOffer: userDiscountOffer, onConfirm: callback1 }) }, id);
};
