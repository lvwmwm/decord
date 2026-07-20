// Module ID: 13600
// Function ID: 103089
// Name: spendingLimitEqual
// Dependencies: []
// Exports: getCurrencySymbol, getNextRenewalDateLabel, sanitizeAmountInput, spendingLimitEqual

// Module 13600 (spendingLimitEqual)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/parent_tools/SpendingLimitUtils.tsx");

export const spendingLimitEqual = function spendingLimitEqual(amount, amount2) {
  let tmp = null == amount && null == amount2;
  if (!tmp) {
    let tmp2 = null != amount && null != amount2;
    if (tmp2) {
      tmp2 = amount.amount === amount2.amount && amount.currency === amount2.currency;
      const tmp3 = amount.amount === amount2.amount && amount.currency === amount2.currency;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const getNextRenewalDateLabel = function getNextRenewalDateLabel() {
  const date = new Date();
  const uTCFullYear = date.getUTCFullYear();
  const dateTimeFormat = new Intl.DateTimeFormat(undefined, {});
  return dateTimeFormat.format(new Date(Date.UTC(uTCFullYear, date.getUTCMonth() + 1, 1)));
};
export const getCurrencySymbol = function getCurrencySymbol(formatted) {
  const numberFormat = new Intl.NumberFormat(undefined, { style: "currency", currency: formatted.toUpperCase() });
  const obj = { style: "currency", currency: formatted.toUpperCase() };
  const iter = numberFormat.formatToParts(0).find((type) => "currency" === type.type);
  let value;
  if (null != iter) {
    value = iter.value;
  }
  if (null != value) {
    formatted = value;
  } else {
    formatted = formatted.toUpperCase();
  }
  return formatted;
};
export const sanitizeAmountInput = function sanitizeAmountInput(str, arg1) {
  if (0 === arg1) {
    return str.replace(/[^0-9]/g, "");
  } else {
    let str2 = str.replace(/[^0-9.]/g, "");
    const parts = str2.split(".");
    if (1 !== parts.length) {
      const substr = parts.slice(1);
      const joined = substr.join("");
      const _HermesInternal = HermesInternal;
      str2 = "" + parts[0] + "." + joined.slice(0, arg1);
    }
    return str2;
  }
};
