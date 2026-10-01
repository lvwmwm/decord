// Module ID: 6655
// Function ID: 6656
// Name: PriceUtils
// Dependencies: [2112, 4490, 1374, 1085, 1364, 6656, 6658, 6660, 1115, 4488, 2]
// Exports: formatDualPriceForBG, formatPercent, formatSubscriptionPlanRate, maybeShortenPrice, shortenAndFormatPrice

// Module 6655 (PriceUtils)
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import utils_PriceUtils from "utils/PriceUtils" /* 6656 */;
import IAPStore from "IAPStore" /* 6658 */;
import GenericIAPStore from "GenericIAPStore" /* 6660 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import BillingInfoStore from "BillingInfoStore" /* 4490 */;
import size from "module_2" /* 2 */;

function formatSingleCurrencyPrice(result, BGN, localeOverride) {
  let obj = localeOverride;
  if (localeOverride == null) {
    obj = {};
  }
  const obj2 = {};
  const merged = Object.assign(obj);
  localeOverride = undefined;
  if (localeOverride != null) {
    localeOverride = localeOverride.localeOverride;
  }
  if (localeOverride == null) {
    localeOverride = LocaleStore.locale;
  }
  let isWindowsResult = "en-US" === localeOverride;
  const hasItem = isWindowsResult && closure_6.includes(LocaleStore.systemLocale);
  if (hasItem) {
    obj2.currencyDisplay = "code";
  }
  if (isWindowsResult) {
    const obj3 = PlatformUtils;
    isWindowsResult = obj3.isWindows();
  }
  if (isWindowsResult) {
    isWindowsResult = "en-GB" === LocaleStore.systemLocale;
  }
  if (isWindowsResult) {
    obj2.currencyDisplay = "code";
  }
  const tmp11 = 0 === obj2.maximumFractionDigits && null == obj2.minimumFractionDigits;
  if (tmp11) {
    obj2.minimumFractionDigits = 0;
  }
  const obj4 = utils_PriceUtils;
  return obj4.formatPrice(result, BGN, localeOverride, obj2);
}
function formatPrice(amount, currency, localeOverride) {
  let combined;
  const timestamp = Date.now();
  let flag = false;
  const date = new Date("2026-08-05T22:00:00Z");
  if (timestamp < date.getTime()) {
    let ipCountryCode;
    const obj2 = PlatformUtils;
    const platformName = obj2.getPlatformName();
    if ("android" === platformName) {
      const _default2 = IAPStore.default;
      ipCountryCode = _default2.getUserCountry();
    } else if ("ios" === platformName) {
      const _default = GenericIAPStore.default;
      const storeFront = _default.getStoreFront();
      let country;
      if (storeFront != null) {
        country = storeFront.country;
      }
      ipCountryCode = country;
    } else {
      ipCountryCode = BillingInfoStore.ipCountryCode;
    }
    let tmp9 = "BG" === ipCountryCode;
    if (tmp9) {
      let formatted;
      if (currency != null) {
        formatted = currency.toLowerCase();
      }
      tmp9 = formatted === CurrencyCodes.EUR;
    }
    flag = tmp9;
  }
  if (flag) {
    const _HermesInternal = HermesInternal;
    const tmp13Result = formatSingleCurrencyPrice(amount, CurrencyCodes.EUR, localeOverride);
    combined = "" + tmp13Result + " (" + tmp13(1.95583 * amount, CurrencyCodes.BGN, localeOverride) + ")";
  } else {
    combined = tmp13(amount, currency, localeOverride);
  }
  return combined;
}
function formatRate(priceString, interval, intervalCount) {
  if (interval === SubscriptionIntervalTypes.YEAR) {
    const intl3 = intl4.intl;
    const obj2 = { price: priceString };
    return intl3.formatToPlainString(intl4.t["rS8FA+"], obj2);
  } else {
    if (interval === SubscriptionIntervalTypes.MONTH) {
      if (1 === intervalCount) {
        const intl2 = intl4.intl;
        const obj3 = { price: priceString };
        return intl2.formatToPlainString(intl4.t.AbOLNu, obj3);
      }
    }
    if (interval === SubscriptionIntervalTypes.MONTH) {
      if (intervalCount > 1) {
        const intl = intl4.intl;
        const obj = { price: priceString, intervalCount };
        return intl.formatToPlainString(intl4.t["Qc+9ww"], obj);
      }
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported interval type: " + interval + ", and interval count: " + intervalCount);
    throw error;
  }
}
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const CurrencyCodes = Constants.CurrencyCodes;
let closure_6 = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
const result = size.fileFinishedImporting("utils/PriceUtils.tsx");

export { formatSingleCurrencyPrice };
export const formatDualPriceForBG = function formatDualPriceForBG(result, localeOverride) {
  const tmp = formatSingleCurrencyPrice(result, CurrencyCodes.EUR, localeOverride);
  return "" + tmp + " (" + formatSingleCurrencyPrice(1.95583 * result, CurrencyCodes.BGN, localeOverride) + ")";
};
export { formatPrice };
export { formatRate };
export const formatPercent = function formatPercent(arg0, arg1) {
  const NumberFormatResult = Intl.NumberFormat(arg0, { style: "percent", minimumFractionDigits: 0 });
  return NumberFormatResult.format(arg1);
};
export const formatSubscriptionPlanRate = function formatSubscriptionPlanRate(interval_count) {
  const tmp = "interval_count" in interval_count ? interval_count.interval_count : interval_count.intervalCount;
  const obj = PremiumUtils;
  const price = obj.getPrice(interval_count.id);
  return formatRate(formatPrice(price.amount, price.currency), interval_count.interval, tmp);
};
export const maybeShortenPrice = function maybeShortenPrice(str) {
  let replaced = str;
  if (str.length > 5) {
    replaced = str.replace(/\.00(?=[\s)]|$)/g, "");
  }
  return replaced;
};
export const shortenAndFormatPrice = function shortenAndFormatPrice(amount, currency, localeOverride) {
  const arr = formatPrice(amount, currency, localeOverride);
  let replaced = arr;
  if (arr.length > 5) {
    replaced = arr.replace(/\.00(?=[\s)]|$)/g, "");
  }
  return replaced;
};
