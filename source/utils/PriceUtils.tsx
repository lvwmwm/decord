// Module ID: 5618
// Function ID: 47878
// Name: formatSingleCurrencyPrice
// Dependencies: [1921, 3778, 1851, 482, 477, 5619, 5621, 5623, 1212, 3776, 2]
// Exports: formatPercent, formatSubscriptionPlanRate, shortenAndFormatPrice

// Module 5618 (formatSingleCurrencyPrice)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { SubscriptionIntervalTypes } from "GuildFeatures";
import { CurrencyCodes } from "sum";

const require = arg1;
function formatSingleCurrencyPrice(result, BGN, localeOverride) {
  let obj = {};
  obj = localeOverride;
  if (null == localeOverride) {
    obj = {};
  }
  const merged = Object.assign(obj);
  localeOverride = undefined;
  if (null != localeOverride) {
    localeOverride = localeOverride.localeOverride;
  }
  if (null == localeOverride) {
    localeOverride = _isNativeReflectConstruct.locale;
  }
  let isWindowsResult = "en-US" === localeOverride;
  let hasItem = isWindowsResult;
  if (isWindowsResult) {
    hasItem = closure_6.includes(_isNativeReflectConstruct.systemLocale);
  }
  if (hasItem) {
    obj.currencyDisplay = "code";
  }
  if (isWindowsResult) {
    isWindowsResult = require(477) /* set */.isWindows();
    const obj3 = require(477) /* set */;
  }
  if (isWindowsResult) {
    isWindowsResult = "en-GB" === _isNativeReflectConstruct.systemLocale;
  }
  if (isWindowsResult) {
    obj.currencyDisplay = "code";
  }
  if (tmp11) {
    obj.minimumFractionDigits = 0;
  }
  return require(5619) /* CurrencyCodes */.formatPrice(result, BGN, localeOverride, obj);
}
function formatDualPriceForBG(result, localeOverride) {
  return "" + formatSingleCurrencyPrice(result, CurrencyCodes.EUR, localeOverride) + " (" + formatSingleCurrencyPrice(1.95583 * result, CurrencyCodes.BGN, localeOverride) + ")";
}
function formatPrice(amount, currency, localeOverride, localeOverride) {
  const timestamp = Date.now();
  let flag = false;
  if (timestamp < date.getTime()) {
    const platformName = require(477) /* set */.getPlatformName();
    if ("android" === platformName) {
      let ipCountryCode = require(5621) /* _isNativeReflectConstruct */.default.getUserCountry();
      const _default2 = require(5621) /* _isNativeReflectConstruct */.default;
    } else if ("ios" === platformName) {
      const storeFront = require(5623) /* _isNativeReflectConstruct */.default.getStoreFront();
      let country;
      if (null != storeFront) {
        country = storeFront.country;
      }
      ipCountryCode = country;
      const _default = require(5623) /* _isNativeReflectConstruct */.default;
    } else {
      ipCountryCode = ipCountryCode.ipCountryCode;
    }
    let tmp13 = "BG" === ipCountryCode;
    if (tmp13) {
      let formatted;
      if (null != currency) {
        formatted = currency.toLowerCase();
      }
      tmp13 = formatted === CurrencyCodes.EUR;
    }
    flag = tmp13;
    const obj2 = require(477) /* set */;
  }
  if (flag) {
    let tmp18 = formatDualPriceForBG(amount, localeOverride);
  } else {
    tmp18 = formatSingleCurrencyPrice(amount, currency, localeOverride);
  }
  return tmp18;
}
function formatRate(priceString, interval, intervalCount) {
  if (interval === SubscriptionIntervalTypes.YEAR) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let obj = { price: priceString };
    return intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["rS8FA+"], obj);
  } else {
    if (interval === SubscriptionIntervalTypes.MONTH) {
      if (1 === intervalCount) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj = { price: priceString };
        return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.AbOLNu, obj);
      }
    }
    if (interval === SubscriptionIntervalTypes.MONTH) {
      if (intervalCount > 1) {
        const intl = require(1212) /* getSystemLocale */.intl;
        obj = { price: priceString, intervalCount };
        return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["Qc+9ww"], obj);
      }
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unsupported interval type: " + interval + ", and interval count: " + intervalCount);
    throw error;
  }
}
function maybeShortenPrice(str) {
  let replaced = str;
  if (str.length > 5) {
    replaced = str.replace(/\.00(?=[\s)]|$)/g, "");
  }
  return replaced;
}
let closure_6 = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
const result = require("GuildFeatures").fileFinishedImporting("utils/PriceUtils.tsx");

export { formatSingleCurrencyPrice };
export { formatDualPriceForBG };
export { formatPrice };
export { formatRate };
export const formatPercent = function formatPercent(arg0, arg1) {
  return Intl.NumberFormat(arg0, { style: "percent", minimumFractionDigits: 0 }).format(arg1);
};
export const formatSubscriptionPlanRate = function formatSubscriptionPlanRate(interval_count) {
  const price = require(3776) /* _createForOfIteratorHelperLoose */.getPrice(interval_count.id);
  return formatRate(formatPrice(price.amount, price.currency), interval_count.interval, "interval_count" in interval_count ? interval_count.interval_count : interval_count.intervalCount);
};
export { maybeShortenPrice };
export const shortenAndFormatPrice = function shortenAndFormatPrice(amount, currency, localeOverride) {
  return maybeShortenPrice(formatPrice(amount, currency, localeOverride));
};
