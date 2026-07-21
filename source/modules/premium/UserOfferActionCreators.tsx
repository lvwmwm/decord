// Module ID: 7368
// Function ID: 59406
// Name: _fetchUserOffer
// Dependencies: []
// Exports: acknowledgeUserOffer, fetchChurnDiscountOffer, fetchExistingChurnDiscountOffer, fetchUserOffer

// Module 7368 (_fetchUserOffer)
async function _fetchUserOffer(arg0, arg1) {
  const fn = function*(call_location, arg1, arg2, retries) {
    let offerId;
    let paymentGatewayOverride;
    let flag = arg1;
    let tmp = arg2;
    if (flag === undefined) {
      flag = true;
    }
    if (tmp === undefined) {
      let obj = { offerId: undefined, paymentGatewayOverride: undefined };
      tmp = obj;
    }
    yield undefined;
    if (flag) {
      let obj1 = callback2(closure_2[5]);
      obj = { type: "BILLING_USER_OFFER_FETCH_START" };
      obj1.dispatch(obj);
      if (null != call_location) {
        let obj3 = callback2(closure_2[6]);
        obj = { call_location };
        obj3.track(constants.FETCH_USER_OFFER_STARTED, obj);
      }
      ({ offerId, paymentGatewayOverride } = tmp);
      if (undefined !== paymentGatewayOverride) {
        let GOOGLE = paymentGatewayOverride;
      } else {
        let obj5 = callback(closure_2[4]);
        if (obj5.isAndroid()) {
          GOOGLE = constants3.GOOGLE;
        } else {
          let obj6 = callback(closure_2[4]);
          GOOGLE = null;
          if (obj6.isIOS()) {
            GOOGLE = constants3.APPLE;
          }
        }
      }
      if (null == GOOGLE) {
        if (null == offerId) {
          obj1 = {};
        }
        const HTTP = callback(closure_2[7]).HTTP;
        const obj2 = { url: constants2.USER_OFFER, body: obj1, rejectWithError: true };
        retries = undefined;
        if (null != retries) {
          retries = retries.retries;
        }
        obj2.retries = retries;
        const tmp28 = yield HTTP.post(obj2);
        const user_trial_offer = tmp28.body.user_trial_offer;
        let tmp31 = null;
        if (null != user_trial_offer) {
          tmp31 = user_trial_offer;
        }
        const user_discount_offer = tmp28.body.user_discount_offer;
        let tmp34 = null;
        if (null != user_discount_offer) {
          tmp34 = user_discount_offer;
        }
        let trial_id;
        if (null != tmp31) {
          trial_id = tmp32.trial_id;
        }
        let tmp41 = tmp40;
        if (trial_id === closure_5) {
          obj3 = { location: "user_offer_action_creators" };
          tmp41 = !callback(closure_2[8]).isAndroidTwoWeekTrialsExperimentEnabled(obj3);
          const obj11 = callback(closure_2[8]);
        }
        if (null != offerId) {
          if (null != tmp35) {
            if (tmp35.discount_id !== offerId) {
              const _Error = Error;
              const error = new Error("Returned user discount offer does not match offer ID request parameter");
              const obj4 = {};
              obj5 = { offer_id: offerId, user_discount_offer: tmp34 };
              obj4.extra = obj5;
              const merged = Object.assign(arg4);
              callback2(closure_2[9]).captureException(error, obj4);
              throw error;
            }
          }
        }
        let result = tmp50;
        if (null == tmp31) {
          result = callback(closure_2[10]).UNSAFE_isDismissibleContentDismissed(callback(closure_2[11]).DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING);
          const obj13 = callback(closure_2[10]);
        }
        if (result) {
          const result1 = callback(closure_2[12]).removeDismissedContent(callback(closure_2[11]).DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING);
          const obj14 = callback(closure_2[12]);
        }
        obj6 = { type: "BILLING_USER_OFFER_FETCH_SUCCESS" };
        let tmp60 = null;
        if (!tmp41) {
          tmp60 = tmp31;
        }
        obj6.userTrialOffer = tmp60;
        let fromServer = null;
        if (null != tmp34) {
          fromServer = closure_4.createFromServer(tmp35);
        }
        obj6.userDiscountOffer = fromServer;
        callback2(closure_2[5]).dispatch(obj6);
        return true;
      }
      const obj7 = { payment_gateway: GOOGLE, offer_id: offerId };
      obj1 = obj7;
    } else {
      return false;
    }
  };
  fn.next();
  return fn;
}
async function _fetchExistingChurnDiscountOffer() {
  let obj = callback2(closure_2[5]);
  obj.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
  const HTTP = callback(closure_2[7]).HTTP;
  obj = { url: constants.CHURN_USER_OFFER, rejectWithError: true };
  const offer = yield HTTP.get(obj).body.offer;
  let tmp2 = null;
  if (null != offer) {
    tmp2 = offer;
  }
  let fromServer = null;
  if (null != tmp2) {
    fromServer = closure_4.createFromServer(tmp2);
  }
  obj = { type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: fromServer };
  callback2(closure_2[5]).dispatch(obj);
  const obj1 = { userDiscountOffer: fromServer };
  return obj1;
}
async function _fetchChurnDiscountOffer() {
  const HTTP = callback(closure_2[7]).HTTP;
  let obj = { url: constants.CHURN_USER_OFFER, rejectWithError: true };
  const offer = yield HTTP.post(obj).body.offer;
  let tmp2 = null;
  if (null != offer) {
    tmp2 = offer;
  }
  if (null != tmp2) {
    const fromServer = closure_4.createFromServer(tmp2);
    obj = { type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: fromServer };
    callback2(closure_2[5]).dispatch(obj);
    const obj2 = callback2(closure_2[5]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
({ AnalyticEvents: closure_6, Endpoints: closure_7, PaymentGateways: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/premium/UserOfferActionCreators.tsx");

export const fetchUserOffer = function fetchUserOffer(MobilePremiumOfferManager, arg1, arg2) {
  return _fetchUserOffer(...arguments);
};
export const fetchExistingChurnDiscountOffer = function fetchExistingChurnDiscountOffer() {
  return _fetchExistingChurnDiscountOffer(...arguments);
};
export const fetchChurnDiscountOffer = function fetchChurnDiscountOffer() {
  return _fetchChurnDiscountOffer(...arguments);
};
export const acknowledgeUserOffer = function acknowledgeUserOffer(expires_at, premiumDiscountOffer) {
  let id;
  if (null != expires_at) {
    if (null == expires_at.expires_at) {
      id = expires_at.id;
    }
  }
  let id1;
  if (null != premiumDiscountOffer) {
    if (!premiumDiscountOffer.hasAcknowledged()) {
      id1 = premiumDiscountOffer.id;
    }
  }
  const HTTP = premiumDiscountOffer(dependencyMap[7]).HTTP;
  let obj = { url: constants.USER_OFFER_ACKNOWLEDGED, body: obj, oldFormErrors: true, rejectWithError: false };
  obj = { user_trial_offer_id: id, user_discount_offer_id: id1 };
  const postResult = HTTP.post(obj);
  return HTTP.post(obj).then((body) => {
    const user_discount = body.body.user_discount;
    let tmp = null;
    if (null != user_discount) {
      tmp = user_discount;
    }
    const user_discount_offer = body.body.user_discount_offer;
    let tmp2 = null;
    if (null != user_discount_offer) {
      tmp2 = user_discount_offer;
    }
    let obj = callback(closure_2[5]);
    obj = { type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS" };
    const user_trial_offer = body.body.user_trial_offer;
    let tmp3 = null;
    if (null != user_trial_offer) {
      tmp3 = user_trial_offer;
    }
    obj.userTrialOffer = tmp3;
    let fromServer = null;
    if (null != tmp) {
      fromServer = closure_4.createFromServer(tmp);
    }
    obj.userDiscount = fromServer;
    let fromServer1 = null;
    if (null != tmp2) {
      fromServer1 = closure_4.createFromServer(tmp2);
    }
    obj.userDiscountOffer = fromServer1;
    obj.dispatch(obj);
  }).catch((status) => {
    if (404 === status.status) {
      callback(closure_2[5]).dispatch({});
      const obj = callback(closure_2[5]);
    }
  });
};
