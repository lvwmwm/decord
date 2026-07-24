// Module ID: 7426
// Function ID: 59692
// Name: fetchActivePromotions
// Dependencies: [5, 1921, 7130, 7129, 1851, 653, 686, 7427, 507, 6638, 1331, 1313, 7428, 2]
// Exports: addClaimedOutboundPromotionCode, clearActivePromotions, dismissOutboundPromotionNotice, fetchActiveBogoPromotion, fetchClaimedOutboundPromotionCodes, maybeFetchActivePromotions

// Module 7426 (fetchActivePromotions)
import ME from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { PREMIUM_SUBSCRIPTION_APPLICATION as closure_7 } from "GuildFeatures";
import { Endpoints } from "ME";

const require = arg1;
function fetchActivePromotions() {
  return _fetchActivePromotions(...arguments);
}
async function _fetchActivePromotions() {
  const locale = outer2_4.locale;
  let obj = outer2_1(outer2_2[6]);
  obj.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH", locale });
  const HTTP = outer2_0(outer2_2[8]).HTTP;
  obj = { url: outer2_8.PROMOTIONS, query: { locale, platform: outer2_0(outer2_2[7]).MarketingComponentPlatform.MOBILE }, oldFormErrors: true, rejectWithError: true };
  let consumedInboundPromotionId = outer2_6.consumedInboundPromotionId;
  if (!outer2_6.hasFetchedConsumedInboundPromotionId) {
    const obj3 = outer2_0(outer2_2[9]);
    const found = yield outer2_0(outer2_2[9]).fetchUserEntitlementsForApplication(outer2_7, false).find((promotion_id) => {
      let tmp = null != promotion_id.promotion_id;
      if (tmp) {
        tmp = true === promotion_id.consumed;
      }
      return tmp;
    });
    let promotion_id;
    if (null != found) {
      promotion_id = found.promotion_id;
    }
    let tmp11 = null;
    if (null != promotion_id) {
      tmp11 = promotion_id;
    }
    consumedInboundPromotionId = tmp11;
    const arr = yield outer2_0(outer2_2[9]).fetchUserEntitlementsForApplication(outer2_7, false);
  }
  const tmp2 = yield HTTP.get(obj);
  obj = { type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS", promotions: tmp2.body, consumedInboundPromotionId };
  outer2_1(outer2_2[6]).dispatch(obj);
}
function dismissOutboundPromotionNotice() {
  importDefault(686).dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
  const lastDismissedOutboundPromotionStartDate = closure_6.lastDismissedOutboundPromotionStartDate;
  if (null != lastDismissedOutboundPromotionStartDate) {
    const PreloadedUserSettingsActionCreators = lastDismissedOutboundPromotionStartDate(1331).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("userContent", (arg0) => {
      const StringValue = lastDismissedOutboundPromotionStartDate(outer1_2[11]).StringValue;
      arg0.lastDismissedOutboundPromotionStartDate = StringValue.create({ value: lastDismissedOutboundPromotionStartDate });
    }, lastDismissedOutboundPromotionStartDate(1331).UserSettingsDelay.INFREQUENT_USER_ACTION);
  }
}
function fetchActiveBogoPromotion() {
  return _fetchActiveBogoPromotion(...arguments);
}
async function _fetchActiveBogoPromotion() {
  if (!outer2_6.isFetchingActiveBogoPromotion) {
    let obj = outer2_1(outer2_2[6]);
    obj = { type: "ACTIVE_BOGO_PROMOTION_FETCH" };
    obj.dispatch(obj);
    const HTTP = outer2_0(outer2_2[8]).HTTP;
    obj = { url: outer2_8.BOGO_PROMOTIONS };
    const obj1 = { locale: outer2_4.locale };
    obj.query = obj1;
    obj.rejectWithError = true;
    const obj2 = { type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS", activePromotion: outer2_5.createFromServer(yield HTTP.get(obj).body) };
    outer2_1(outer2_2[6]).dispatch(obj2);
    const obj5 = outer2_1(outer2_2[6]);
  }
}
function fetchClaimedOutboundPromotionCodes() {
  return _fetchClaimedOutboundPromotionCodes(...arguments);
}
async function _fetchClaimedOutboundPromotionCodes() {
  const HTTP = outer2_0(outer2_2[8]).HTTP;
  obj = { url: outer2_8.CLAIMED_OUTBOUND_PROMOTION_CODES, query: obj, oldFormErrors: true };
  obj = { locale: outer2_4.locale, rejectWithError: outer2_0(outer2_2[8]).rejectWithMigratedError() };
  const body = yield HTTP.get(obj).body;
  const mapped = body.map(outer2_0(outer2_2[12]).claimedOutboundPromotionCodeFromServer);
  const obj3 = outer2_0(outer2_2[8]);
  outer2_1(outer2_2[6]).dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS", claimedOutboundPromotionCodes: mapped });
}
function addClaimedOutboundPromotionCode(claimedOutboundPromotionCode) {
  let obj = importDefault(686);
  obj = { type: "CLAIMED_OUTBOUND_PROMOTION_CODE_ADD", claimedOutboundPromotionCode };
  obj.dispatch(obj);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/promotions/PromotionsActionCreators.tsx");

export default {
  fetchActivePromotions,
  fetchClaimedOutboundPromotionCodes,
  addClaimedOutboundPromotionCode,
  dismissOutboundPromotionNotice,
  markOutboundPromotionsSeen() {
    importDefault(686).dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
  },
  fetchActiveBogoPromotion
};
export const maybeFetchActivePromotions = function maybeFetchActivePromotions(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let isFetchingActivePromotions = closure_6.isFetchingActivePromotions;
  if (!isFetchingActivePromotions) {
    if (flag) {
      flag = null != closure_6.lastFetchedActivePromotions;
    }
    isFetchingActivePromotions = flag;
  }
  if (!isFetchingActivePromotions) {
    fetchActivePromotions();
  }
};
export const clearActivePromotions = function clearActivePromotions() {
  importDefault(686).dispatch({ type: "ACTIVE_PROMOTIONS_CLEAR" });
};
export { fetchActivePromotions };
export { dismissOutboundPromotionNotice };
export { fetchActiveBogoPromotion };
export { fetchClaimedOutboundPromotionCodes };
export { addClaimedOutboundPromotionCode };
