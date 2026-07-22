// Module ID: 5613
// Function ID: 47851
// Name: formatSingleCurrencyPrice
// Dependencies: []
// Exports: formatPercent, formatSubscriptionPlanRate, shortenAndFormatPrice

// Module 5613 (formatSingleCurrencyPrice)
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
    localeOverride = closure_2.locale;
  }
  let isWindowsResult = "en-US" === localeOverride;
  let hasItem = isWindowsResult;
  if (isWindowsResult) {
    hasItem = closure_6.includes(closure_2.systemLocale);
  }
  if (hasItem) {
    obj.currencyDisplay = "code";
  }
  if (isWindowsResult) {
    isWindowsResult = BGN(dependencyMap[4]).isWindows();
    const obj3 = BGN(dependencyMap[4]);
  }
  if (isWindowsResult) {
    isWindowsResult = "en-GB" === closure_2.systemLocale;
  }
  if (isWindowsResult) {
    obj.currencyDisplay = "code";
  }
  if (tmp11) {
    obj.minimumFractionDigits = 0;
  }
  return BGN(dependencyMap[5]).formatPrice(result, BGN, localeOverride, obj);
}
function formatDualPriceForBG(result, localeOverride) {
  return "" + formatSingleCurrencyPrice(result, CurrencyCodes.EUR, localeOverride) + " (" + formatSingleCurrencyPrice(1.95583 * result, CurrencyCodes.BGN, localeOverride) + ")";
}
function formatPrice(amount, currency, localeOverride, localeOverride) {
  const timestamp = Date.now();
  let flag = false;
  if (timestamp < date.getTime()) {
    const platformName = currency(dependencyMap[4]).getPlatformName();
    if ("android" === platformName) {
      let ipCountryCode = currency(dependencyMap[6]).default.getUserCountry();
      const _default2 = currency(dependencyMap[6]).default;
    } else if ("ios" === platformName) {
      const storeFront = currency(dependencyMap[7]).default.getStoreFront();
      let country;
      if (null != storeFront) {
        country = storeFront.country;
      }
      ipCountryCode = country;
      const _default = currency(dependencyMap[7]).default;
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
    const obj2 = currency(dependencyMap[4]);
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
    const intl3 = interval(dependencyMap[8]).intl;
    let obj = { price: priceString };
    return intl3.formatToPlainString(interval(dependencyMap[8]).t.rS8FA+, obj);
  } else {
    if (interval === SubscriptionIntervalTypes.MONTH) {
      if (1 === intervalCount) {
        const intl2 = interval(dependencyMap[8]).intl;
        obj = { price: priceString };
        return intl2.formatToPlainString(interval(dependencyMap[8]).t.AbOLNu, obj);
      }
    }
    if (interval === SubscriptionIntervalTypes.MONTH) {
      if (intervalCount > 1) {
        const intl = interval(dependencyMap[8]).intl;
        obj = { price: priceString, intervalCount };
        return intl.formatToPlainString(interval(dependencyMap[8]).t.Qc+9ww, obj);
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const SubscriptionIntervalTypes = arg1(dependencyMap[2]).SubscriptionIntervalTypes;
const CurrencyCodes = arg1(dependencyMap[3]).CurrencyCodes;
let closure_6 = Object.freeze([true, true, true]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("utils/PriceUtils.tsx");

export { formatSingleCurrencyPrice };
export { formatDualPriceForBG };
export { formatPrice };
export { formatRate };
export const formatPercent = function formatPercent(arg0, arg1) {
  return Intl.NumberFormat(arg0, { "Null": 49447680, "Null": 49447680 }).format(arg1);
};
export const formatSubscriptionPlanRate = function formatSubscriptionPlanRate(interval_count) {
  const price = arg1(dependencyMap[9]).getPrice(interval_count.id);
  return formatRate(formatPrice(price.amount, price.currency), interval_count.interval, "interval_count" in interval_count ? interval_count.interval_count : interval_count.intervalCount);
};
export { maybeShortenPrice };
export const shortenAndFormatPrice = function shortenAndFormatPrice(amount, currency, localeOverride) {
  return maybeShortenPrice(formatPrice(amount, currency, localeOverride));
};
