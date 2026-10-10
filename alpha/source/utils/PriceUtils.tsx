// Module ID: 6939
// Function ID: 6940
// Name: PriceUtils
// Dependencies: [2129, 1392, 1096, 1382, 6940, 1126, 2]
// Exports: formatDualPriceForBG, formatPercent, formatPrice, formatRate, maybeShortenPrice, shortenAndFormatPrice

// Module 6939 (PriceUtils)
import Constants from "Constants" /* 1096 */;
import intl4 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import utils_PriceUtils from "utils/PriceUtils" /* 6940 */;
import LocaleStore from "LocaleStore" /* 2129 */;
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
  const hasItem = isWindowsResult && closure_5.includes(LocaleStore.systemLocale);
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
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const CurrencyCodes = Constants.CurrencyCodes;
let closure_5 = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
const result = size.fileFinishedImporting("utils/PriceUtils.tsx");

export { formatSingleCurrencyPrice };
export const formatDualPriceForBG = function formatDualPriceForBG(result, localeOverride) {
  const tmp = formatSingleCurrencyPrice(result, CurrencyCodes.EUR, localeOverride);
  return "" + tmp + " (" + formatSingleCurrencyPrice(1.95583 * result, CurrencyCodes.BGN, localeOverride) + ")";
};
export const formatPrice = function formatPrice(amount, currency, localeOverride) {
  return formatSingleCurrencyPrice(amount, currency, localeOverride);
};
export const formatRate = function formatRate(priceString, interval, intervalCount) {
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
};
export const formatPercent = function formatPercent(arg0, arg1) {
  const NumberFormatResult = Intl.NumberFormat(arg0, { style: "percent", minimumFractionDigits: 0 });
  return NumberFormatResult.format(arg1);
};
export const maybeShortenPrice = function maybeShortenPrice(str) {
  let replaced = str;
  if (str.length > 5) {
    replaced = str.replace(/\.00(?=[\s)]|$)/g, "");
  }
  return replaced;
};
export const shortenAndFormatPrice = function shortenAndFormatPrice(amount, currency, localeOverride) {
  const arr = formatSingleCurrencyPrice(amount, currency, localeOverride);
  let replaced = arr;
  if (arr.length > 5) {
    replaced = arr.replace(/\.00(?=[\s)]|$)/g, "");
  }
  return replaced;
};
