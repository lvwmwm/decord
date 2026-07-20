// Module ID: 4358
// Function ID: 38612
// Name: unambiguousRegex
// Dependencies: []
// Exports: findGiftCodes, firstLibraryApplicationForGiftCode, getBodyText, getButtonText, getGiftCodeURL, getHeaderText, getStep, getSubscriptionGiftStartHeaderText, isGiftCodeEmbed, makeComboId, parseComboId, processGiftCodeInput, resolveGiftCode, shouldShowCustomGiftExperience, trackGiftCodeCopy, trackStep, useGetGiftCode

// Module 4358 (unambiguousRegex)
function unambiguousRegex(arg0, arg1) {
  arg1 = arg0;
  const ArrayResult = Array(arg1);
  const mapped = Array(arg1).fill(undefined).map(() => "[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{" + arg0 + "}");
  return mapped.join("-?");
}
function getGiftExperience(arg0) {
  if (!arg1(dependencyMap[7]).isMobile) {
    if (!arg1(dependencyMap[7]).isTablet) {
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
  const fn = function*(arg0) {
    let flag = arg1;
    let flag2 = arg2;
    if (flag === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    yield undefined;
    let obj = callback(closure_2[8]);
    obj = { url: closure_7.GIFT_CODE_RESOLVE(arg0), query: obj, oldFormErrors: true, rejectWithError: false };
    obj = { with_application: flag, with_subscription_plan: flag2 };
    const body = yield obj.httpGetWithCountryCodeQuery(obj).body;
    callback2(closure_2[9]).track(constants.GIFT_CODE_RESOLVED, { resolved: true, gift_code: body.code, gift_code_max_uses: body.max_uses, sku_id: body.store_listing.sku.id, sku_type: body.store_listing.sku.type, application_id: body.store_listing.sku.application_id, store_title: body.store_listing.sku.name }, { flush: true });
    return body;
  };
  fn.next();
  return fn;
}
function getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan) {
  const arg1 = getOrFetchSubscriptionPlan;
  const match = arg1(dependencyMap[13]).match(getOrFetchSubscriptionPlan);
  let obj = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_2 };
  const str = arg1(dependencyMap[13]);
  obj = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_2 };
  const withResult = match.with(obj, () => {
    const intl = arg0(closure_2[12]).intl;
    return intl.formatToPlainString(arg0(closure_2[12]).t.O2bEOt, { intervalCount: arg0.intervalCount });
  });
  const obj1 = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 };
  const withResult1 = match.with(obj, () => {
    const intl = arg0(closure_2[12]).intl;
    return intl.formatToPlainString(arg0(closure_2[12]).t.O2bEOt, { intervalCount: arg0.intervalCount });
  }).with(obj, () => {
    const intl = arg0(closure_2[12]).intl;
    return intl.formatToPlainString(arg0(closure_2[12]).t.ZEvHF+, { intervalCount: arg0.intervalCount });
  });
  const obj2 = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_1 };
  const withResult2 = match.with(obj, () => {
    const intl = arg0(closure_2[12]).intl;
    return intl.formatToPlainString(arg0(closure_2[12]).t.O2bEOt, { intervalCount: arg0.intervalCount });
  }).with(obj, () => {
    const intl = arg0(closure_2[12]).intl;
    return intl.formatToPlainString(arg0(closure_2[12]).t.ZEvHF+, { intervalCount: arg0.intervalCount });
  }).with({ interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 }, () => {
    const intl = arg0(closure_2[12]).intl;
    return intl.formatToPlainString(arg0(closure_2[12]).t.gjKbF4, { intervalCount: arg0.intervalCount });
  });
  return match.with(obj, () => {
    const intl = arg0(closure_2[12]).intl;
    return intl.formatToPlainString(arg0(closure_2[12]).t.O2bEOt, { intervalCount: arg0.intervalCount });
  }).with(obj, () => {
    const intl = arg0(closure_2[12]).intl;
    return intl.formatToPlainString(arg0(closure_2[12]).t.ZEvHF+, { intervalCount: arg0.intervalCount });
  }).with({ interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 }, () => {
    const intl = arg0(closure_2[12]).intl;
    return intl.formatToPlainString(arg0(closure_2[12]).t.gjKbF4, { intervalCount: arg0.intervalCount });
  }).with({ interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_1 }, () => {
    const intl = arg0(closure_2[12]).intl;
    return intl.formatToPlainString(arg0(closure_2[12]).t.GIe7Bw, { intervalCount: arg0.intervalCount });
  }).otherwise(() => {
    const intl = arg0(closure_2[12]).intl;
    return intl.string(arg0(closure_2[12]).t.5ayf7w);
  });
}
function getErrorMessage(libraryApplication, error, accepted, accepting, onGoToLibrary) {
  let tmp;
  if (!accepted) {
    if (!accepting) {
      tmp = libraryApplication;
    }
  }
  const intl = error(dependencyMap[12]).intl;
  let formatResult = intl.format(error(dependencyMap[12]).t.5zyz9y, { onGoToLibrary });
  if (null == tmp) {
    let tmp4 = null;
    if (null != error) {
      tmp4 = getGiftCodeRedeemError(error, currentUser.getCurrentUser());
    }
    formatResult = tmp4;
  }
  return formatResult;
}
function getGiftCodeRedeemError(code, closure_4) {
  code = code.code;
  if (constants2.INVALID_GIFT_SELF_REDEMPTION === code) {
    const intl11 = closure_4(dependencyMap[12]).intl;
    return intl11.string(closure_4(dependencyMap[12]).t.wa9h7F);
  } else if (constants2.INVALID_GIFT_REDEMPTION_EXHAUSTED === code) {
    const intl10 = closure_4(dependencyMap[12]).intl;
    return intl10.string(closure_4(dependencyMap[12]).t.Iw2TUW);
  } else if (constants2.INVALID_GIFT_REDEMPTION_OWNED === code) {
    const intl9 = closure_4(dependencyMap[12]).intl;
    return intl9.string(closure_4(dependencyMap[12]).t.mdLtb5);
  } else if (constants2.UNKNOWN_GIFT_CODE === code) {
    const intl8 = closure_4(dependencyMap[12]).intl;
    return intl8.string(closure_4(dependencyMap[12]).t.roztIr);
  } else if (constants2.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE === code) {
    const intl6 = closure_4(dependencyMap[12]).intl;
    const obj = {};
    const obj2 = closure_4(dependencyMap[16]);
    const intl7 = closure_4(dependencyMap[12]).intl;
    const string = intl7.string;
    const t = closure_4(dependencyMap[12]).t;
    if (isPremiumExactlyResult) {
      let stringResult = string(t.lG6a5x);
    } else {
      stringResult = string(t.FSOz78);
    }
    obj.planName = stringResult;
    return intl6.formatToPlainString(closure_4(dependencyMap[12]).t.4YTHKw, obj);
  } else if (constants2.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED === code) {
    const intl5 = closure_4(dependencyMap[12]).intl;
    return intl5.string(closure_4(dependencyMap[12]).t.9i1J30);
  } else if (constants2.INVALID_GIFT_REDEMPTION_INVOICE_OPEN === code) {
    const intl4 = closure_4(dependencyMap[12]).intl;
    return intl4.string(closure_4(dependencyMap[12]).t.U26WX+);
  } else if (constants2.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED === code) {
    const intl3 = closure_4(dependencyMap[12]).intl;
    return intl3.string(closure_4(dependencyMap[12]).t.ypuSd8);
  } else if (constants2.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE === code) {
    const intl2 = closure_4(dependencyMap[12]).intl;
    return intl2.string(closure_4(dependencyMap[12]).t.mXMmWE);
  } else {
    const intl = closure_4(dependencyMap[12]).intl;
    return intl.string(closure_4(dependencyMap[12]).t.s9+XlB);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ Endpoints: closure_7, AnalyticEvents: closure_8, AbortCodes: closure_9, GiftCodeModalStates: closure_10, MessageEmbedTypes: closure_11, MessageTypes: closure_12 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ PremiumTypes: closure_13, SubscriptionIntervalTypes: closure_14 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
const items = [importDefault(dependencyMap[6]).escape(window.GLOBAL_ENV.GIFT_CODE_HOST), ...items1.map((arg0) => importDefault(dependencyMap[6]).escape(arg0))];
const items1 = [];
const regExp = new RegExp("(?: |^|https?://)(?:" + items.join("|") + ")/([a-z0-9-]+)", "gi");
const items2 = [];
const items3 = [...items2.map((arg0) => importDefault(dependencyMap[6]).escape(arg0))];
const regExp1 = new RegExp("(?: |^|https?://)(?:" + items3.join("|") + ")(/|(/)?\\?code=)([a-z0-9-]+)", "gi");
const items4 = [require("module_4"), require("module_4"), require("module_5"), "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"];
const regExp2 = new RegExp("^(WUMP-?)?(" + items4.join("|") + ")$");
const obj = { DEFAULT: 0, [0]: "DEFAULT", CUSTOM_STYLE: 1, [1]: "CUSTOM_STYLE", CUSTOM_MESSAGE_EMOJI_SOUNDBOARD: 2, [2]: "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD" };
const importDefaultResult = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("utils/GiftCodeUtils.tsx");

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
  let obj = importDefault(dependencyMap[9]);
  obj = {};
  const merged = Object.assign(importDefault(dependencyMap[11])(sku, false, false));
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
            let ERROR = constants3.OPEN;
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
    const intl2 = isSubscription(dependencyMap[12]).intl;
    return intl2.formatToMarkdownString(isSubscription(dependencyMap[12]).t.JUvC0s, {});
  } else if (constants3.SUCCESS === arg0) {
    const intl = isSubscription(dependencyMap[12]).intl;
    if (isSubscription.isSubscription) {
      let obj = { skuName: name.name };
      let formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[12]).t.1C2BG/, obj);
    } else {
      formatToPlainStringResult = intl.string(tmp2(tmp3[12]).t.+BNMcF);
    }
    return formatToPlainStringResult;
  } else {
    const CONFIRM = constants3.CONFIRM;
    const intl3 = isSubscription(dependencyMap[12]).intl;
    if (isSubscription.isSubscription) {
      obj = { skuName: name.name };
      let formatToPlainStringResult1 = intl3.formatToPlainString(tmp9(tmp10[12]).t.2VN4N9, obj);
    } else {
      formatToPlainStringResult1 = intl3.string(tmp9(tmp10[12]).t.RmamAI);
    }
    return formatToPlainStringResult1;
  }
};
export const getButtonText = function getButtonText(arg0, giftStyle, isCustomGift) {
  isCustomGift = isCustomGift.isCustomGift;
  if (constants3.ERROR === arg0) {
    const intl6 = giftStyle(dependencyMap[12]).intl;
    return intl6.string(giftStyle(dependencyMap[12]).t.w19zb6);
  } else if (constants3.SUCCESS === arg0) {
    const intl5 = giftStyle(dependencyMap[12]).intl;
    return intl5.string(giftStyle(dependencyMap[12]).t.zW87EM);
  } else if (constants3.OPEN === arg0) {
    const intl4 = giftStyle(dependencyMap[12]).intl;
    return intl4.string(giftStyle(dependencyMap[12]).t.F8ktci);
  } else {
    const CONFIRM = constants3.CONFIRM;
    if (null != isCustomGift) {
      if (isCustomGift) {
        const intl3 = giftStyle(dependencyMap[12]).intl;
        let stringResult = intl3.string(giftStyle(dependencyMap[12]).t.n6I6k4);
      }
      return stringResult;
    }
    if (null != giftStyle.giftStyle) {
      const intl2 = giftStyle(dependencyMap[12]).intl;
      const string2 = intl2.string;
      let OgpR0c = giftStyle(dependencyMap[12]).t;
      if (giftStyle.isClaimed) {
        OgpR0c = OgpR0c.OgpR0c;
        let string2Result = string2(OgpR0c);
      } else {
        string2Result = string2(OgpR0c.2BWscv);
      }
    } else {
      const intl = giftStyle(dependencyMap[12]).intl;
      const string = intl.string;
      const t = giftStyle(dependencyMap[12]).t;
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
  const importDefault = name;
  if (null == name) {
    if (null != sender) {
      const intl2 = sender(dependencyMap[12]).intl;
      let obj = { sender };
      let formatToPlainStringResult = intl2.formatToPlainString(sender(dependencyMap[12]).t.td2m3W, obj);
    } else {
      const intl = sender(dependencyMap[12]).intl;
      formatToPlainStringResult = intl.string(sender(dependencyMap[12]).t.hrnGng);
    }
    return formatToPlainStringResult;
  } else {
    const dependencyMap = subscriptionPlan.intervalCount;
    if (null != sender) {
      const match = sender(dependencyMap[13]).match(subscriptionPlan);
      obj = { interval: constants6.MONTH };
      const str = sender(dependencyMap[13]);
      const obj1 = { interval: constants6.YEAR };
      const withResult = match.with(obj, () => {
        const intl = arg1(intervalCount[12]).intl;
        return intl.formatToPlainString(arg1(intervalCount[12]).t./RDIEA, { username: arg1, skuName: arg2, intervalCount });
      });
      let otherwiseResult = match.with(obj, () => {
        const intl = arg1(intervalCount[12]).intl;
        return intl.formatToPlainString(arg1(intervalCount[12]).t./RDIEA, { username: arg1, skuName: arg2, intervalCount });
      }).with(obj1, () => {
        const intl = arg1(intervalCount[12]).intl;
        return intl.formatToPlainString(arg1(intervalCount[12]).t.3CX6Ev, { username: arg1, skuName: arg2, intervalCount });
      }).otherwise(() => {
        const intl = arg1(intervalCount[12]).intl;
        return intl.formatToPlainString(arg1(intervalCount[12]).t.td2m3W, { sender: arg1 });
      });
      const withResult1 = match.with(obj, () => {
        const intl = arg1(intervalCount[12]).intl;
        return intl.formatToPlainString(arg1(intervalCount[12]).t./RDIEA, { username: arg1, skuName: arg2, intervalCount });
      }).with(obj1, () => {
        const intl = arg1(intervalCount[12]).intl;
        return intl.formatToPlainString(arg1(intervalCount[12]).t.3CX6Ev, { username: arg1, skuName: arg2, intervalCount });
      });
    } else {
      const match1 = sender(dependencyMap[13]).match(subscriptionPlan);
      const obj2 = { interval: constants6.MONTH };
      const str2 = sender(dependencyMap[13]);
      const obj3 = { interval: constants6.YEAR };
      const withResult2 = match1.with(obj2, () => {
        const intl = arg1(intervalCount[12]).intl;
        return intl.formatToPlainString(arg1(intervalCount[12]).t.2O4lo5, { skuName: arg2, intervalCount });
      });
      otherwiseResult = match1.with(obj2, () => {
        const intl = arg1(intervalCount[12]).intl;
        return intl.formatToPlainString(arg1(intervalCount[12]).t.2O4lo5, { skuName: arg2, intervalCount });
      }).with(obj3, () => {
        const intl = arg1(intervalCount[12]).intl;
        return intl.formatToPlainString(arg1(intervalCount[12]).t.+XjmsR, { skuName: arg2, intervalCount });
      }).otherwise(() => {
        const intl = arg1(intervalCount[12]).intl;
        return intl.string(arg1(intervalCount[12]).t.hrnGng);
      });
      const withResult3 = match1.with(obj2, () => {
        const intl = arg1(intervalCount[12]).intl;
        return intl.formatToPlainString(arg1(intervalCount[12]).t.2O4lo5, { skuName: arg2, intervalCount });
      }).with(obj3, () => {
        const intl = arg1(intervalCount[12]).intl;
        return intl.formatToPlainString(arg1(intervalCount[12]).t.+XjmsR, { skuName: arg2, intervalCount });
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
      const intl3 = arg1(dependencyMap[12]).intl;
      let obj = { skuName: sku.name };
      formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[12]).t.3CPsbo, obj);
    }
    return formatToPlainStringResult;
  } else {
    const CONFIRM = constants3.CONFIRM;
    if (null != subscriptionPlan) {
      if (subscriptionPlan.interval === constants6.MONTH) {
        let d8rUdy = arg1(dependencyMap[12]).t.P9eTKt;
      } else {
        d8rUdy = arg1(dependencyMap[12]).t.d8rUdy;
      }
      const intl2 = arg1(dependencyMap[12]).intl;
      obj = { skuName: sku.name, intervalCount: subscriptionPlan.intervalCount };
      return intl2.format(d8rUdy, obj);
    } else {
      const intl = arg1(dependencyMap[12]).intl;
      obj = { skuName: sku.name };
      return intl.formatToPlainString(arg1(dependencyMap[12]).t.l6Ea4Z, obj);
    }
  }
};
export { getErrorMessage };
export const firstLibraryApplicationForGiftCode = function firstLibraryApplicationForGiftCode(arg0, applicationId) {
  let arr = arg0;
  applicationId = arg2;
  applicationId = applicationId.applicationId;
  const importDefault = applicationId;
  if (arg0.length <= 0) {
    const items = [applicationId];
    arr = items;
  }
  const mapped = arr.map((arg0) => arg2.getLibraryApplication(applicationId, arg0, true));
  const found = mapped.filter(applicationId(dependencyMap[14]).isNotNullish);
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
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_5];
  return arg1(dependencyMap[15]).useStateFromStores(items, () => {
    if (null != arg0) {
      if (arg1) {
        const giftCode = giftCode.getGiftCode(arg0);
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
  let obj = importDefault(dependencyMap[9]);
  obj = { to_step: step, has_custom_message: null != giftCode.giftStyle };
  let tmp = null != giftCode.giftStyle;
  if (tmp) {
    const intl = arg1(dependencyMap[12]).intl;
    tmp = customMessage !== intl.string(arg1(dependencyMap[12]).t.ZkOo1U);
  }
  obj.is_custom_message_edited = tmp;
  ({ giftStyle: obj2.gift_style, code: obj2.gift_code } = giftCode);
  obj.emoji_name = emojiName;
  obj.sound_id = soundId;
  obj.product_line = productLine;
  obj.track(constants.GIFT_ACCEPT_STEP, obj);
};
export { getGiftCodeRedeemError };
