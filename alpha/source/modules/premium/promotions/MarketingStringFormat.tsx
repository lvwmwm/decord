// Module ID: 16156
// Function ID: 16157
// Name: MarketingStringFormat
// Dependencies: [3, 1130, 1128, 2]
// Exports: formatMarketingPlainString, formatMarketingString

// Module 16156 (MarketingStringFormat)
import LoggerDefault from "Logger" /* 3 */;
import intl2 from "intl" /* 1128 */;
import intl_util from "intl/util" /* 1130 */;
import size from "module_2" /* 2 */;

function formatWith(acknowledgedBadgeLabel, arg1, fn) {
  let obj2;
  if ("" === acknowledgedBadgeLabel) {
    return { ok: true, content: "" };
  } else {
    try {
      const obj = { ok: true, content: fn(obj2.parseRuntimeIcuAsIntlMessage(acknowledgedBadgeLabel, intl2.intl.currentLocale)) };
      obj2 = intl_util;
      return obj;
    } catch (tmp4) {
      logger.warn("Failed to format marketing string", tmp4);
      const _String = String;
      const obj4 = { ok: false, error: String(tmp4) };
      return obj4;
    }
  }
}
const logger = new LoggerDefault("MarketingStringFormat.tsx");
const tmp2 = new LoggerDefault("MarketingStringFormat.tsx");
const result = size.fileFinishedImporting("modules/premium/promotions/MarketingStringFormat.tsx");

export const formatMarketingString = function formatMarketingString(acknowledgedBadgeLabel, arg1) {
  let closure_0 = arg1;
  return formatWith(acknowledgedBadgeLabel, "", (arg0) => {
    closure_0 = arg0;
    const intl = intl2.intl;
    return intl.format(() => closure_0, closure_0);
  });
};
export const formatMarketingPlainString = function formatMarketingPlainString(acknowledgedBadgeLabel, formatVariableValues) {
  let closure_0 = formatVariableValues;
  return formatWith(acknowledgedBadgeLabel, "", (time) => {
    let closure_0 = time;
    const intl = intl2.intl;
    return intl.formatToPlainString(() => closure_0, closure_0);
  });
};
