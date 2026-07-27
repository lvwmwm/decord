// Module ID: 15687
// Function ID: 120986
// Name: markAsDismissed
// Dependencies: [31, 1852, 653, 1345, 33, 5462, 5482, 675, 6447, 9253, 6162, 5187, 15688, 2]
// Exports: default

// Module 15687 (markAsDismissed)
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
    let first;
    if (null != userDiscountOffer) {
      const discount = userDiscountOffer.discount;
      if (null != discount) {
        const planIds = discount.planIds;
        if (null != planIds) {
          first = planIds[0];
        }
      }
    }
    let tmp3 = null;
    if (null != first) {
      tmp3 = outer1_5[first];
    }
    let premiumType;
    if (null != tmp3) {
      premiumType = tmp3.premiumType;
    }
    if (null == premiumType) {
      premiumType = outer1_4.TIER_2;
    }
    return premiumType;
  }, items);
  const effect = memo.useEffect(() => {
    if (null != userDiscountOffer) {
      let obj = userDiscountOffer(analyticsLocations[7]);
      obj = { location: analyticsLocations, discount_offer_id: userDiscountOffer.id };
      obj.track(outer1_6.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_VIEWED, obj);
      markAsDismissed(analyticsLocations[8]).acknowledgeUserOffer(undefined, userDiscountOffer);
      const obj3 = markAsDismissed(analyticsLocations[8]);
    }
  }, []);
  const items1 = [userDiscountOffer, markAsDismissed];
  const effect1 = memo.useEffect(() => {
    if (null == userDiscountOffer) {
      markAsDismissed(outer1_7.AUTO_DISMISS);
    }
  }, items1);
  const items2 = [analyticsLocations, markAsDismissed, userDiscountOffer];
  const items3 = [analyticsLocations, markAsDismissed, userDiscountOffer, memo];
  const callback = memo.useCallback(() => {
    let obj = userDiscountOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations };
    let id;
    if (null != userDiscountOffer) {
      id = userDiscountOffer.id;
    }
    obj.discount_offer_id = id;
    obj.track(outer1_6.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(outer1_7.USER_DISMISS);
  }, items2);
  let tmp8Result = null;
  if (null != userDiscountOffer) {
    let obj = { startExpanded: true, onDismiss: callback };
    obj = { discountOffer: userDiscountOffer, onConfirm: tmp6 };
    obj.children = jsx(userDiscountOffer(analyticsLocations[12]), { discountOffer: userDiscountOffer, onConfirm: tmp6 });
    let id;
    if (null != userDiscountOffer) {
      id = userDiscountOffer.id;
    }
    tmp8Result = jsx(markAsDismissed(analyticsLocations[11]).BottomSheet, { discountOffer: userDiscountOffer, onConfirm: tmp6 }, id);
    const tmp8 = jsx;
  }
  return tmp8Result;
};
