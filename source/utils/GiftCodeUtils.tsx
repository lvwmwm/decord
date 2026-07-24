// Module ID: 4366
// Function ID: 38709
// Name: unambiguousRegex
// Dependencies: [5, 57, 4367, 1849, 653, 1851, 4118, 4368, 4369, 675, 3799, 4462, 1212, 4329, 1327, 566, 3776, 2]
// Exports: findGiftCodes, firstLibraryApplicationForGiftCode, getBodyText, getButtonText, getGiftCodeURL, getHeaderText, getStep, getSubscriptionGiftStartHeaderText, isGiftCodeEmbed, makeComboId, parseComboId, processGiftCodeInput, resolveGiftCode, shouldShowCustomGiftExperience, trackGiftCodeCopy, trackStep, useGetGiftCode

// Module 4366 (unambiguousRegex)
import closure_3 from "GuildFeatures";
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import importDefaultResult from "set";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function unambiguousRegex(arg0, arg1) {
  let closure_0 = arg0;
  const ArrayResult = Array(arg1);
  const mapped = Array(arg1).fill(undefined).map(() => "[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{" + closure_0 + "}");
  return mapped.join("-?");
}
function getGiftExperience(arg0) {
  if (!require(4368) /* isTablet */.isMobile) {
    if (!require(4368) /* isTablet */.isTablet) {
      if (null == arg0) {
        if (!arg1) {
          let DEFAULT = obj.CUSTOM_STYLE;
        }
      }
      DEFAULT = obj.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD;
    }
    return DEFAULT;
  }
  DEFAULT = obj.DEFAULT;
}
function cleanCode(str) {
  return str.replace(/[^A-Za-z0-9]/g, "");
}
async function _resolveGiftCode(arg0, arg1) {
  let iter = (function*(arg0) {
    let flag = arg1;
    let flag2 = arg2;
    if (flag === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    yield undefined;
    let obj = outer2_0(outer2_2[8]);
    obj = { url: outer2_7.GIFT_CODE_RESOLVE(arg0), query: obj, oldFormErrors: true, rejectWithError: false };
    obj = { with_application: flag, with_subscription_plan: flag2 };
    const body = yield obj.httpGetWithCountryCodeQuery(obj).body;
    outer2_1(outer2_2[9]).track(outer2_8.GIFT_CODE_RESOLVED, { resolved: true, gift_code: body.code, gift_code_max_uses: body.max_uses, sku_id: body.store_listing.sku.id, sku_type: body.store_listing.sku.type, application_id: body.store_listing.sku.application_id, store_title: body.store_listing.sku.name }, { flush: true });
    return body;
  })();
  iter.next();
  return iter;
}
function getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan) {
  const _require = getOrFetchSubscriptionPlan;
  const match = _require(4329).match(getOrFetchSubscriptionPlan);
  let obj = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_2 };
  const str = _require(4329);
  obj = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_2 };
  const withResult = match.with(obj, () => {
    const intl = getOrFetchSubscriptionPlan(outer1_2[12]).intl;
    return intl.formatToPlainString(getOrFetchSubscriptionPlan(outer1_2[12]).t.O2bEOt, { intervalCount: getOrFetchSubscriptionPlan.intervalCount });
  });
  const obj1 = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 };
  const withResult1 = match.with(obj, () => {
    const intl = getOrFetchSubscriptionPlan(outer1_2[12]).intl;
    return intl.formatToPlainString(getOrFetchSubscriptionPlan(outer1_2[12]).t.O2bEOt, { intervalCount: getOrFetchSubscriptionPlan.intervalCount });
  }).with(obj, () => {
    const intl = getOrFetchSubscriptionPlan(outer1_2[12]).intl;
    return intl.formatToPlainString(getOrFetchSubscriptionPlan(outer1_2[12]).t["ZEvHF+"], { intervalCount: getOrFetchSubscriptionPlan.intervalCount });
  });
  const obj2 = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_1 };
  const withResult2 = match.with(obj, () => {
    const intl = getOrFetchSubscriptionPlan(outer1_2[12]).intl;
    return intl.formatToPlainString(getOrFetchSubscriptionPlan(outer1_2[12]).t.O2bEOt, { intervalCount: getOrFetchSubscriptionPlan.intervalCount });
  }).with(obj, () => {
    const intl = getOrFetchSubscriptionPlan(outer1_2[12]).intl;
    return intl.formatToPlainString(getOrFetchSubscriptionPlan(outer1_2[12]).t["ZEvHF+"], { intervalCount: getOrFetchSubscriptionPlan.intervalCount });
  }).with({ interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 }, () => {
    const intl = getOrFetchSubscriptionPlan(outer1_2[12]).intl;
    return intl.formatToPlainString(getOrFetchSubscriptionPlan(outer1_2[12]).t.gjKbF4, { intervalCount: getOrFetchSubscriptionPlan.intervalCount });
  });
  return match.with(obj, () => {
    const intl = getOrFetchSubscriptionPlan(outer1_2[12]).intl;
    return intl.formatToPlainString(getOrFetchSubscriptionPlan(outer1_2[12]).t.O2bEOt, { intervalCount: getOrFetchSubscriptionPlan.intervalCount });
  }).with(obj, () => {
    const intl = getOrFetchSubscriptionPlan(outer1_2[12]).intl;
    return intl.formatToPlainString(getOrFetchSubscriptionPlan(outer1_2[12]).t["ZEvHF+"], { intervalCount: getOrFetchSubscriptionPlan.intervalCount });
  }).with({ interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 }, () => {
    const intl = getOrFetchSubscriptionPlan(outer1_2[12]).intl;
    return intl.formatToPlainString(getOrFetchSubscriptionPlan(outer1_2[12]).t.gjKbF4, { intervalCount: getOrFetchSubscriptionPlan.intervalCount });
  }).with({ interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_1 }, () => {
    const intl = getOrFetchSubscriptionPlan(outer1_2[12]).intl;
    return intl.formatToPlainString(getOrFetchSubscriptionPlan(outer1_2[12]).t.GIe7Bw, { intervalCount: getOrFetchSubscriptionPlan.intervalCount });
  }).otherwise(() => {
    const intl = getOrFetchSubscriptionPlan(outer1_2[12]).intl;
    return intl.string(getOrFetchSubscriptionPlan(outer1_2[12]).t["5ayf7w"]);
  });
}
function getErrorMessage(libraryApplication, error, accepted, accepting, onGoToLibrary) {
  let tmp;
  if (!accepted) {
    if (!accepting) {
      tmp = libraryApplication;
    }
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  let formatResult = intl.format(require(1212) /* getSystemLocale */.t["5zyz9y"], { onGoToLibrary });
  if (null == tmp) {
    let tmp4 = null;
    if (null != error) {
      tmp4 = getGiftCodeRedeemError(error, currentUser.getCurrentUser());
    }
    formatResult = tmp4;
  }
  return formatResult;
}
function getGiftCodeRedeemError(code, currentUser) {
  code = code.code;
  if (constants2.INVALID_GIFT_SELF_REDEMPTION === code) {
    const intl11 = require(1212) /* getSystemLocale */.intl;
    return intl11.string(require(1212) /* getSystemLocale */.t.wa9h7F);
  } else if (constants2.INVALID_GIFT_REDEMPTION_EXHAUSTED === code) {
    const intl10 = require(1212) /* getSystemLocale */.intl;
    return intl10.string(require(1212) /* getSystemLocale */.t.Iw2TUW);
  } else if (constants2.INVALID_GIFT_REDEMPTION_OWNED === code) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    return intl9.string(require(1212) /* getSystemLocale */.t.mdLtb5);
  } else if (constants2.UNKNOWN_GIFT_CODE === code) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    return intl8.string(require(1212) /* getSystemLocale */.t.roztIr);
  } else if (constants2.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE === code) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    const obj = {};
    const obj2 = require(3776) /* _createForOfIteratorHelperLoose */;
    const intl7 = require(1212) /* getSystemLocale */.intl;
    const string = intl7.string;
    const t = require(1212) /* getSystemLocale */.t;
    if (isPremiumExactlyResult) {
      let stringResult = string(t.lG6a5x);
    } else {
      stringResult = string(t.FSOz78);
    }
    obj.planName = stringResult;
    return intl6.formatToPlainString(require(1212) /* getSystemLocale */.t["4YTHKw"], obj);
  } else if (constants2.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED === code) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t["9i1J30"]);
  } else if (constants2.INVALID_GIFT_REDEMPTION_INVOICE_OPEN === code) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t["U26WX+"]);
  } else if (constants2.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED === code) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.ypuSd8);
  } else if (constants2.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE === code) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.mXMmWE);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["s9+XlB"]);
  }
}
({ Endpoints: closure_7, AnalyticEvents: closure_8, AbortCodes: closure_9, GiftCodeModalStates: closure_10, MessageEmbedTypes: closure_11, MessageTypes: closure_12 } = ME);
({ PremiumTypes: closure_13, SubscriptionIntervalTypes: closure_14 } = GuildFeatures);
let items = [require("set").escape(window.GLOBAL_ENV.GIFT_CODE_HOST), ...items1.map((arg0) => importDefault(4118).escape(arg0))];
items1 = ["discordapp.com/gifts", "discord.com/gifts"];
let regExp = new RegExp("(?: |^|https?://)(?:" + items.join("|") + ")/([a-z0-9-]+)", "gi");
const items2 = ["discord.com/billing/promotions", "promos.discord.gg"];
const items3 = [...items2.map((arg0) => importDefault(4118).escape(arg0))];
const regExp1 = new RegExp("(?: |^|https?://)(?:" + items3.join("|") + ")(/|(/)?\\?code=)([a-z0-9-]+)", "gi");
const items4 = [require("ME"), require("ME"), require("GuildFeatures"), "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"];
const regExp2 = new RegExp("^(WUMP-?)?(" + items4.join("|") + ")$");
let obj = { DEFAULT: 0, [0]: "DEFAULT", CUSTOM_STYLE: 1, [1]: "CUSTOM_STYLE", CUSTOM_MESSAGE_EMOJI_SOUNDBOARD: 2, [2]: "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/GiftCodeUtils.tsx");

export const GiftExperience = obj;
export { getGiftExperience };
export const shouldShowCustomGiftExperience = function shouldShowCustomGiftExperience(arg0) {
  return getGiftExperience(arg0) !== obj.DEFAULT;
};
export const makeComboId = function makeComboId(skuId, subscriptionPlanId, giftStyle) {
  let tmp = subscriptionPlanId;
  if (subscriptionPlanId === undefined) {
    tmp = null;
  }
  let str = "";
  if (null != tmp) {
    str = tmp;
  }
  let str2 = "";
  if (null != giftStyle) {
    str2 = giftStyle;
  }
  return "" + skuId + ":" + str + ":" + str2;
};
export const parseComboId = function parseComboId(str) {
  const tmp = callback2(str.split(":"), 3);
  const obj = { skuId: tmp[0] };
  let tmp4 = null;
  if ("" !== tmp[1]) {
    tmp4 = tmp2;
  }
  obj.subscriptionPlanId = tmp4;
  let parsed;
  if ("" !== tmp[2]) {
    if (null != tmp3) {
      const _Number = Number;
      parsed = Number.parseInt(tmp3);
    }
  }
  obj.giftStyle = parsed;
  return obj;
};
export { cleanCode };
export const isGiftCodeEmbed = function isGiftCodeEmbed(type) {
  type = undefined;
  if (null != type) {
    type = type.type;
  }
  let tmp2 = type === constants5.CUSTOM_GIFT;
  if (tmp2) {
    let length;
    if (null != type) {
      const embeds = type.embeds;
      if (null != embeds) {
        length = embeds.length;
      }
    }
    tmp2 = 1 === length;
  }
  if (tmp2) {
    let type1;
    if (null != type) {
      type1 = type.embeds[0].type;
    }
    tmp2 = type1 === constants4.GIFT;
  }
  return tmp2;
};
export const findGiftCodes = function findGiftCodes(content) {
  if (null == content) {
    return [];
  } else {
    const _Set = Set;
    const set = new Set();
    let match = regExp.exec(content);
    if (null != match) {
      if (set.size < 3) {
        set.add(cleanCode(match[1]));
        const match1 = regExp.exec(content);
        while (null != match1) {
          match = match1;
          if (set.size >= 3) {
            break;
          }
        }
      }
    }
    const _Array = Array;
    return Array.from(set);
  }
};
export const getGiftCodeURL = function getGiftCodeURL(code) {
  let str = code;
  if (code === undefined) {
    str = "";
  }
  if (null != GIFT_CODE_HOST) {
    const _HermesInternal2 = HermesInternal;
    let combined = "/" + str;
    let host = GIFT_CODE_HOST;
  } else {
    const _location = location;
    host = location.host;
    const _HermesInternal = HermesInternal;
    combined = "/gifts/" + str;
  }
  return "" + location.protocol + "//" + host + combined;
};
export const resolveGiftCode = function resolveGiftCode() {
  return _resolveGiftCode(...arguments);
};
export const trackGiftCodeCopy = function trackGiftCodeCopy(giftCode, sku) {
  let obj = importDefault(675);
  obj = {};
  const merged = Object.assign(importDefault(4462)(sku, false, false));
  const merged1 = Object.assign(giftCode.analyticsData);
  obj.track(constants.GIFT_CODE_COPIED, obj);
};
export const getStep = function getStep(arg0, isSubscription, error) {
  let accepted;
  let accepting;
  ({ accepted, accepting } = error);
  if (null == error.error) {
    if (!accepted) {
      if (!accepting) {
        return ERROR;
      }
    }
    if (tmp2) {
      if (!tmp) {
        if (!accepted) {
          if (!accepting) {
            ERROR = constants3.OPEN;
          }
        }
      }
    }
    if (!accepted) {
      const CONFIRM = constants3.CONFIRM;
    }
    const SUCCESS = constants3.SUCCESS;
  }
  ERROR = constants3.ERROR;
};
export const getHeaderText = function getHeaderText(arg0, isSubscription, name) {
  if (constants3.ERROR === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.formatToMarkdownString(require(1212) /* getSystemLocale */.t.JUvC0s, {});
  } else if (constants3.SUCCESS === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    if (isSubscription.isSubscription) {
      let obj = { skuName: name.name };
      let formatToPlainStringResult = intl.formatToPlainString(tmp2(1212).t["1C2BG/"], obj);
    } else {
      formatToPlainStringResult = intl.string(tmp2(1212).t["+BNMcF"]);
    }
    return formatToPlainStringResult;
  } else {
    const CONFIRM = constants3.CONFIRM;
    const intl3 = require(1212) /* getSystemLocale */.intl;
    if (isSubscription.isSubscription) {
      obj = { skuName: name.name };
      let formatToPlainStringResult1 = intl3.formatToPlainString(tmp9(1212).t["2VN4N9"], obj);
    } else {
      formatToPlainStringResult1 = intl3.string(tmp9(1212).t.RmamAI);
    }
    return formatToPlainStringResult1;
  }
};
export const getButtonText = function getButtonText(arg0, giftStyle, isCustomGift) {
  isCustomGift = isCustomGift.isCustomGift;
  if (constants3.ERROR === arg0) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.w19zb6);
  } else if (constants3.SUCCESS === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.zW87EM);
  } else if (constants3.OPEN === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.F8ktci);
  } else {
    const CONFIRM = constants3.CONFIRM;
    if (null != isCustomGift) {
      if (isCustomGift) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl3.string(require(1212) /* getSystemLocale */.t.n6I6k4);
      }
      return stringResult;
    }
    if (null != giftStyle.giftStyle) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const string2 = intl2.string;
      let OgpR0c = require(1212) /* getSystemLocale */.t;
      if (giftStyle.isClaimed) {
        OgpR0c = OgpR0c.OgpR0c;
        let string2Result = string2(OgpR0c);
      } else {
        string2Result = string2(OgpR0c["2BWscv"]);
      }
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      const string = intl.string;
      const t = require(1212) /* getSystemLocale */.t;
      if (giftStyle.isSubscription) {
        stringResult = string(t.wQ1FHy);
      } else {
        stringResult = string(t.OgpR0c);
      }
    }
  }
};
export { getSubscriptionGiftSuccessText };
export const getSubscriptionGiftStartHeaderText = function getSubscriptionGiftStartHeaderText(subscriptionPlan, sender, name) {
  const _require = sender;
  let closure_1 = name;
  if (null == name) {
    if (null != sender) {
      const intl2 = _require(intervalCount[12]).intl;
      let obj = { sender };
      let formatToPlainStringResult = intl2.formatToPlainString(_require(intervalCount[12]).t.td2m3W, obj);
    } else {
      let intl = _require(intervalCount[12]).intl;
      formatToPlainStringResult = intl.string(_require(intervalCount[12]).t.hrnGng);
    }
    return formatToPlainStringResult;
  } else {
    intervalCount = subscriptionPlan.intervalCount;
    if (null != sender) {
      const match = _require(intervalCount[13]).match(subscriptionPlan);
      obj = { interval: constants6.MONTH };
      const str = _require(intervalCount[13]);
      const obj1 = { interval: constants6.YEAR };
      const withResult = match.with(obj, () => {
        const intl = sender(intervalCount[12]).intl;
        return intl.formatToPlainString(sender(intervalCount[12]).t["/RDIEA"], { username: sender, skuName: closure_1, intervalCount });
      });
      let otherwiseResult = match.with(obj, () => {
        const intl = sender(intervalCount[12]).intl;
        return intl.formatToPlainString(sender(intervalCount[12]).t["/RDIEA"], { username: sender, skuName: closure_1, intervalCount });
      }).with(obj1, () => {
        const intl = sender(intervalCount[12]).intl;
        return intl.formatToPlainString(sender(intervalCount[12]).t["3CX6Ev"], { username: sender, skuName: closure_1, intervalCount });
      }).otherwise(() => {
        const intl = sender(intervalCount[12]).intl;
        return intl.formatToPlainString(sender(intervalCount[12]).t.td2m3W, { sender });
      });
      const withResult1 = match.with(obj, () => {
        const intl = sender(intervalCount[12]).intl;
        return intl.formatToPlainString(sender(intervalCount[12]).t["/RDIEA"], { username: sender, skuName: closure_1, intervalCount });
      }).with(obj1, () => {
        const intl = sender(intervalCount[12]).intl;
        return intl.formatToPlainString(sender(intervalCount[12]).t["3CX6Ev"], { username: sender, skuName: closure_1, intervalCount });
      });
    } else {
      const match1 = _require(intervalCount[13]).match(subscriptionPlan);
      const obj2 = { interval: constants6.MONTH };
      const str2 = _require(intervalCount[13]);
      const obj3 = { interval: constants6.YEAR };
      const withResult2 = match1.with(obj2, () => {
        const intl = sender(intervalCount[12]).intl;
        return intl.formatToPlainString(sender(intervalCount[12]).t["2O4lo5"], { skuName: closure_1, intervalCount });
      });
      otherwiseResult = match1.with(obj2, () => {
        const intl = sender(intervalCount[12]).intl;
        return intl.formatToPlainString(sender(intervalCount[12]).t["2O4lo5"], { skuName: closure_1, intervalCount });
      }).with(obj3, () => {
        const intl = sender(intervalCount[12]).intl;
        return intl.formatToPlainString(sender(intervalCount[12]).t["+XjmsR"], { skuName: closure_1, intervalCount });
      }).otherwise(() => {
        const intl = sender(intervalCount[12]).intl;
        return intl.string(sender(intervalCount[12]).t.hrnGng);
      });
      const withResult3 = match1.with(obj2, () => {
        const intl = sender(intervalCount[12]).intl;
        return intl.formatToPlainString(sender(intervalCount[12]).t["2O4lo5"], { skuName: closure_1, intervalCount });
      }).with(obj3, () => {
        const intl = sender(intervalCount[12]).intl;
        return intl.formatToPlainString(sender(intervalCount[12]).t["+XjmsR"], { skuName: closure_1, intervalCount });
      });
    }
    return otherwiseResult;
  }
};
export const getBodyText = function getBodyText(arg0) {
  let accepted;
  let accepting;
  let error;
  let libraryApplication;
  let onGoToLibrary;
  let sku;
  let step;
  let subscriptionPlan;
  ({ step, sku, libraryApplication, error, accepted, accepting, onGoToLibrary, subscriptionPlan } = arg0);
  if (subscriptionPlan === undefined) {
    subscriptionPlan = null;
  }
  if (constants3.ERROR === step) {
    return getErrorMessage(libraryApplication, error, accepted, accepting, onGoToLibrary);
  } else if (constants3.SUCCESS === step) {
    if (null != subscriptionPlan) {
      let formatToPlainStringResult = getSubscriptionGiftSuccessText(subscriptionPlan);
    } else {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      let obj = { skuName: sku.name };
      formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["3CPsbo"], obj);
    }
    return formatToPlainStringResult;
  } else {
    const CONFIRM = constants3.CONFIRM;
    if (null != subscriptionPlan) {
      if (subscriptionPlan.interval === constants6.MONTH) {
        let d8rUdy = require(1212) /* getSystemLocale */.t.P9eTKt;
      } else {
        d8rUdy = require(1212) /* getSystemLocale */.t.d8rUdy;
      }
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj = { skuName: sku.name, intervalCount: subscriptionPlan.intervalCount };
      return intl2.format(d8rUdy, obj);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = { skuName: sku.name };
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.l6Ea4Z, obj);
    }
  }
};
export { getErrorMessage };
export const firstLibraryApplicationForGiftCode = function firstLibraryApplicationForGiftCode(arg0, applicationId) {
  let arr = arg0;
  const _require = arg2;
  applicationId = applicationId.applicationId;
  if (arg0.length <= 0) {
    const items = [applicationId];
    arr = items;
  }
  const mapped = arr.map((arg0) => libraryApplication.getLibraryApplication(applicationId, arg0, true));
  const found = mapped.filter(_require(1327).isNotNullish);
  let first = null;
  if (found.length === arr.length) {
    first = found[0];
  }
  return first;
};
export const processGiftCodeInput = function processGiftCodeInput(str) {
  const parts = str.trim().split("/");
  str = str.trim();
  const match = parts.pop().match(regExp2);
  if (null == match) {
    return null;
  } else {
    const tmp3 = callback2(match, 3);
    const first = tmp3[0];
    let replaced = null;
    if (null != tmp3[2]) {
      const _RegExp = RegExp;
      const regExp = new RegExp("-", "g");
      replaced = str3.replace(regExp, "");
    }
    return replaced;
  }
  const str2 = parts.pop();
};
export const useGetGiftCode = function useGetGiftCode(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    if (null != closure_0) {
      if (closure_1) {
        const giftCode = outer1_5.getGiftCode(closure_0);
        let tmp5 = null;
        if (null != giftCode) {
          tmp5 = null;
          if ("" !== giftCode) {
            tmp5 = giftCode;
          }
        }
        return tmp5;
      }
    }
    return null;
  });
};
export const trackStep = function trackStep(giftCode) {
  let customMessage;
  let emojiName;
  let productLine;
  let soundId;
  let step;
  giftCode = giftCode.giftCode;
  ({ step, customMessage, emojiName, soundId, productLine } = giftCode);
  let obj = importDefault(675);
  obj = { to_step: step, has_custom_message: null != giftCode.giftStyle };
  let tmp = null != giftCode.giftStyle;
  if (tmp) {
    const intl = require(1212) /* getSystemLocale */.intl;
    tmp = customMessage !== intl.string(require(1212) /* getSystemLocale */.t.ZkOo1U);
  }
  obj.is_custom_message_edited = tmp;
  ({ giftStyle: obj2.gift_style, code: obj2.gift_code } = giftCode);
  obj.emoji_name = emojiName;
  obj.sound_id = soundId;
  obj.product_line = productLine;
  obj.track(constants.GIFT_ACCEPT_STEP, obj);
};
export { getGiftCodeRedeemError };
