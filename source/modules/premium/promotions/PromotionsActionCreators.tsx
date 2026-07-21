// Module ID: 7444
// Function ID: 59689
// Name: fetchActivePromotions
// Dependencies: []
// Exports: addClaimedOutboundPromotionCode, clearActivePromotions, dismissOutboundPromotionNotice, fetchActiveBogoPromotion, fetchClaimedOutboundPromotionCodes, maybeFetchActivePromotions

// Module 7444 (fetchActivePromotions)
function fetchActivePromotions() {
  return _fetchActivePromotions(...arguments);
}
async function _fetchActivePromotions() {
  const locale = locale.locale;
  let obj = callback2(closure_2[6]);
  obj.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH", locale });
  const HTTP = callback(closure_2[8]).HTTP;
  obj = { url: constants.PROMOTIONS, query: { locale, platform: callback(closure_2[7]).MarketingComponentPlatform.MOBILE }, oldFormErrors: true, rejectWithError: true };
  let consumedInboundPromotionId = closure_6.consumedInboundPromotionId;
  if (!closure_6.hasFetchedConsumedInboundPromotionId) {
    const obj3 = callback(closure_2[9]);
    const found = yield callback(closure_2[9]).fetchUserEntitlementsForApplication(closure_7, false).find((promotion_id) => {
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
    const arr = yield callback(closure_2[9]).fetchUserEntitlementsForApplication(closure_7, false);
  }
  const tmp2 = yield HTTP.get(obj);
  obj = { type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS", promotions: tmp2.body, consumedInboundPromotionId };
  callback2(closure_2[6]).dispatch(obj);
}
function dismissOutboundPromotionNotice() {
  importDefault(dependencyMap[6]).dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
  const lastDismissedOutboundPromotionStartDate = closure_6.lastDismissedOutboundPromotionStartDate;
  const arg1 = lastDismissedOutboundPromotionStartDate;
  if (null != lastDismissedOutboundPromotionStartDate) {
    const PreloadedUserSettingsActionCreators = arg1(dependencyMap[10]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("userContent", (arg0) => {
      const StringValue = lastDismissedOutboundPromotionStartDate(closure_2[11]).StringValue;
      arg0.lastDismissedOutboundPromotionStartDate = StringValue.create({ value: lastDismissedOutboundPromotionStartDate });
    }, arg1(dependencyMap[10]).UserSettingsDelay.INFREQUENT_USER_ACTION);
  }
}
function fetchActiveBogoPromotion() {
  return _fetchActiveBogoPromotion(...arguments);
}
async function _fetchActiveBogoPromotion() {
  if (!obj.isFetchingActiveBogoPromotion) {
    let obj = callback2(closure_2[6]);
    obj = { type: "ACTIVE_BOGO_PROMOTION_FETCH" };
    obj.dispatch(obj);
    const HTTP = callback(closure_2[8]).HTTP;
    obj = { url: constants.BOGO_PROMOTIONS };
    const obj1 = { locale: locale.locale };
    obj.query = obj1;
    obj.rejectWithError = true;
    const obj2 = { type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS", activePromotion: closure_5.createFromServer(yield HTTP.get(obj).body) };
    callback2(closure_2[6]).dispatch(obj2);
    const obj5 = callback2(closure_2[6]);
  }
}
function fetchClaimedOutboundPromotionCodes() {
  return _fetchClaimedOutboundPromotionCodes(...arguments);
}
async function _fetchClaimedOutboundPromotionCodes() {
  const HTTP = callback(closure_2[8]).HTTP;
  let obj = { url: constants.CLAIMED_OUTBOUND_PROMOTION_CODES, query: obj, oldFormErrors: true };
  obj = { locale: locale.locale, rejectWithError: callback(closure_2[8]).rejectWithMigratedError() };
  const body = yield HTTP.get(obj).body;
  const mapped = body.map(callback(closure_2[12]).claimedOutboundPromotionCodeFromServer);
  const obj3 = callback(closure_2[8]);
  callback2(closure_2[6]).dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS", claimedOutboundPromotionCodes: mapped });
}
function addClaimedOutboundPromotionCode(claimedOutboundPromotionCode) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "CLAIMED_OUTBOUND_PROMOTION_CODE_ADD", claimedOutboundPromotionCode };
  obj.dispatch(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).PREMIUM_SUBSCRIPTION_APPLICATION;
const Endpoints = arg1(dependencyMap[5]).Endpoints;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/premium/promotions/PromotionsActionCreators.tsx");

export default {
  fetchActivePromotions,
  fetchClaimedOutboundPromotionCodes,
  addClaimedOutboundPromotionCode,
  dismissOutboundPromotionNotice,
  markOutboundPromotionsSeen() {
    importDefault(dependencyMap[6]).dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
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
  importDefault(dependencyMap[6]).dispatch({ type: "ACTIVE_PROMOTIONS_CLEAR" });
};
export { fetchActivePromotions };
export { dismissOutboundPromotionNotice };
export { fetchActiveBogoPromotion };
export { fetchClaimedOutboundPromotionCodes };
export { addClaimedOutboundPromotionCode };
