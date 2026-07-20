// Module ID: 7442
// Function ID: 59699
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: claimOutboundPromotion, getClaimedEndedOutboundPromotions, getClaimedOutboundPromotionCodeMap, getOutboundPromotionRedemptionUrl, getPromotionImageURL, shouldShowOutboundPromotionNotice

// Module 7442 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function claimedOutboundPromotionCodeFromServer(code) {
  return { code: code.code, userId: code.user_id, claimedAt: code.claimed_at, promotion: closure_5.createFromServer(code.promotion) };
}
async function _claimOutboundPromotion(arg0, arg1) {
  const fn = function*(arg0) {
    let analyticsLocations;
    let partnerId;
    let promotionId;
    let promotionTitle;
    ({ promotionId, promotionTitle, partnerId, analyticsLocations } = arg0);
    yield undefined;
    const HTTP = callback(closure_2[8]).HTTP;
    let obj = { url: closure_9.CLAIM_OUTBOUND_PROMOTION_CODE(promotionId), rejectWithError: callback(closure_2[8]).rejectWithMigratedError() };
    const tmp2 = yield HTTP.post(obj);
    const obj2 = callback(closure_2[8]);
    const obj3 = callback(closure_2[9]);
    const tmp4 = callback(closure_2[9]).isIOS() ? closure_10.IOS : closure_10.ANDROID;
    obj = { platform: tmp4, status: tmp2.status, location_stack: analyticsLocations, promotion_id: promotionId };
    let tmp5 = null;
    if (null != promotionTitle) {
      tmp5 = promotionTitle;
    }
    obj.name = tmp5;
    let tmp6 = null;
    if (null != partnerId) {
      tmp6 = partnerId;
    }
    obj.partner = tmp6;
    callback2(closure_2[10]).track(constants.OUTBOUND_PROMOTION_CLAIMED, obj);
    return callback3(tmp2.body);
  };
  fn.next();
  return fn;
}
function getNextUnseenOutboundPromotionId() {
  const outboundPromotions = closure_6.outboundPromotions;
  let closure_0 = closure_6.consumedInboundPromotionId;
  const found = outboundPromotions.filter((id) => {
    let tmp = id.id !== callback;
    if (tmp) {
      tmp = !callback(closure_2[11]).hasFlag(id.flags, constants.SUPPRESS_NOTIFICATION);
      const obj = callback(closure_2[11]);
    }
    if (tmp) {
      tmp = !callback2(id);
    }
    return tmp;
  });
  const userContent = settings.settings.userContent;
  let prop;
  if (null != userContent) {
    if (null != userContent.recurringDismissibleContentStates[closure_0(undefined, closure_2[12]).DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]) {
      prop = tmp4.lastDismissedObjectId;
    }
  }
  const importDefault = prop;
  let found1 = found;
  if (null != prop) {
    found1 = found.filter((id) => 1 === prop(closure_2[13]).compare(id.id, prop));
  }
  let id = null;
  if (0 !== found1.length) {
    id = found1.sort((startDate, startDate2) => {
      const date = new Date(startDate.startDate);
      let num = 1;
      if (date < date1) {
        num = -1;
      }
      return num;
    })[0].id;
  }
  return id;
}
function isLogitechPromotion(promotion) {
  return promotion.partnerId === arg1(dependencyMap[15]).LOGITECH_PARTNER_ID;
}
function shouldShowOutboundPromotionOnPlatform(promotion) {
  let tmp = !arg1(dependencyMap[9]).isIOS();
  if (!tmp) {
    tmp = !promotion.hasFlag(PromotionFlags.IS_BLOCKED_IOS);
  }
  return tmp;
}
function isRecurringPromotion(promotionType) {
  return promotionType.promotionType === arg1(dependencyMap[15]).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const PromotionFlags = arg1(dependencyMap[4]).PromotionFlags;
({ AnalyticEvents: closure_8, Endpoints: closure_9, Platforms: closure_10 } = arg1(dependencyMap[5]));
const ActivityPlatform = arg1(dependencyMap[6]).ActivityPlatform;
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/premium/promotions/PromotionUtils.tsx");

export const getPromotionImageURL = function getPromotionImageURL(id, arg1) {
  let str = "logo-light";
  if (obj.isThemeDark(arg1)) {
    str = "logo-dark";
  }
  if (null != CDN_HOST) {
    const _HermesInternal2 = HermesInternal;
    let combined = "https://" + CDN_HOST + "/promotions/" + id + "/" + str + "?size=256";
  } else {
    const _location = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    combined = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT + "/promotions/" + id + "/" + str + "?size=256";
  }
  return combined;
};
export { claimedOutboundPromotionCodeFromServer };
export const claimOutboundPromotion = function claimOutboundPromotion(arg0) {
  return _claimOutboundPromotion(...arguments);
};
export const getOutboundPromotionRedemptionUrl = function getOutboundPromotionRedemptionUrl(code, outboundPromotion) {
  if (null != outboundPromotion.outboundRedemptionUrlFormat) {
    if ("" !== outboundPromotion.outboundRedemptionUrlFormat) {
      const _encodeURIComponent = encodeURIComponent;
      let str2 = outboundPromotion.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(code));
      const str3 = outboundPromotion.outboundRedemptionUrlFormat;
    }
    return str2;
  }
  const outboundRedemptionPageLink = outboundPromotion.outboundRedemptionPageLink;
  str2 = "";
  if (null != outboundRedemptionPageLink) {
    str2 = outboundRedemptionPageLink;
  }
};
export { getNextUnseenOutboundPromotionId };
export const shouldShowOutboundPromotionNotice = function shouldShowOutboundPromotionNotice() {
  const tmp = getNextUnseenOutboundPromotionId();
  let tmp2 = null != tmp;
  if (tmp2) {
    let obj = arg1(dependencyMap[14]);
    obj = { cooldownDurationMs: 259200000 };
    tmp2 = !obj.isTimeRecurringSnowflakeBoundDismissibleContentDismissed(arg1(dependencyMap[12]).DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, tmp, obj);
  }
  return tmp2;
};
export { isLogitechPromotion };
export { shouldShowOutboundPromotionOnPlatform };
export const getClaimedOutboundPromotionCodeMap = function getClaimedOutboundPromotionCodeMap(stateFromStores2) {
  let done;
  const obj = {};
  const tmp = _createForOfIteratorHelperLoose(stateFromStores2);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      obj[value.promotion.id] = value.code;
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return obj;
};
export const getClaimedEndedOutboundPromotions = function getClaimedEndedOutboundPromotions(arr, arr2) {
  arr2 = new Set(arr2.map((id) => id.id));
  return arr.filter((promotion) => {
    promotion = promotion.promotion;
    let tmp = !set.has(promotion.id);
    if (tmp) {
      tmp = !callback3(promotion);
    }
    if (tmp) {
      tmp = !callback(promotion);
    }
    if (tmp) {
      tmp = callback2(promotion);
    }
    return tmp;
  });
};
export { isRecurringPromotion };
