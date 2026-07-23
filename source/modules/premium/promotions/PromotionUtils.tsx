// Module ID: 7452
// Function ID: 59767
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 1316, 7131, 7130, 1851, 653, 4155, 3976, 507, 477, 675, 1360, 1334, 21, 1336, 7132, 2]
// Exports: claimOutboundPromotion, getClaimedEndedOutboundPromotions, getClaimedOutboundPromotionCodeMap, getOutboundPromotionRedemptionUrl, getPromotionImageURL, shouldShowOutboundPromotionNotice

// Module 7452 (_createForOfIteratorHelperLoose)
import closure_3 from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { PromotionFlags } from "GuildFeatures";
import ME from "ME";
import { ActivityPlatform } from "items3";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  let iter = (function*(arg0) {
    let analyticsLocations;
    let partnerId;
    let promotionId;
    let promotionTitle;
    ({ promotionId, promotionTitle, partnerId, analyticsLocations } = arg0);
    yield undefined;
    const HTTP = outer2_0(outer2_2[8]).HTTP;
    let obj = { url: outer2_9.CLAIM_OUTBOUND_PROMOTION_CODE(promotionId), rejectWithError: outer2_0(outer2_2[8]).rejectWithMigratedError() };
    const tmp2 = yield HTTP.post(obj);
    const obj2 = outer2_0(outer2_2[8]);
    const obj3 = outer2_0(outer2_2[9]);
    const tmp4 = outer2_0(outer2_2[9]).isIOS() ? outer2_10.IOS : outer2_10.ANDROID;
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
    outer2_1(outer2_2[10]).track(outer2_8.OUTBOUND_PROMOTION_CLAIMED, obj);
    return outer2_13(tmp2.body);
  })();
  iter.next();
  return iter;
}
function getNextUnseenOutboundPromotionId() {
  const outboundPromotions = closure_6.outboundPromotions;
  const _require = closure_6.consumedInboundPromotionId;
  const found = outboundPromotions.filter((id) => {
    let tmp = id.id !== callback;
    if (tmp) {
      tmp = !callback(outer1_2[11]).hasFlag(id.flags, outer1_7.SUPPRESS_NOTIFICATION);
      const obj = callback(outer1_2[11]);
    }
    if (tmp) {
      tmp = !outer1_16(id);
    }
    return tmp;
  });
  const userContent = settings.settings.userContent;
  let prop;
  if (null != userContent) {
    const tmp4 = userContent.recurringDismissibleContentStates[_require(undefined, 1334).DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR];
    if (null != tmp4) {
      prop = tmp4.lastDismissedObjectId;
    }
  }
  let found1 = found;
  if (null != prop) {
    found1 = found.filter((id) => 1 === prop(outer1_2[13]).compare(id.id, prop));
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
  return promotion.partnerId === require(7132) /* CountryListMode */.LOGITECH_PARTNER_ID;
}
function shouldShowOutboundPromotionOnPlatform(promotion) {
  let tmp = !require(477) /* set */.isIOS();
  if (!tmp) {
    tmp = !promotion.hasFlag(PromotionFlags.IS_BLOCKED_IOS);
  }
  return tmp;
}
function isRecurringPromotion(promotionType) {
  return promotionType.promotionType === require(7132) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING;
}
({ AnalyticEvents: closure_8, Endpoints: closure_9, Platforms: closure_10 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/promotions/PromotionUtils.tsx");

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
    let obj = require(1336) /* addVersionedDismissedContent */;
    obj = { cooldownDurationMs: 259200000 };
    tmp2 = !obj.isTimeRecurringSnowflakeBoundDismissibleContentDismissed(require(1334) /* DismissibleContent */.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, tmp, obj);
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
  const set = new Set(arr2.map((id) => id.id));
  return arr.filter((promotion) => {
    promotion = promotion.promotion;
    let tmp = !set.has(promotion.id);
    if (tmp) {
      tmp = !outer1_18(promotion);
    }
    if (tmp) {
      tmp = !outer1_16(promotion);
    }
    if (tmp) {
      tmp = outer1_17(promotion);
    }
    return tmp;
  });
};
export { isRecurringPromotion };
