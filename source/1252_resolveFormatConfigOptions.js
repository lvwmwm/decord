// Module ID: 1252
// Function ID: 14087
// Name: resolveFormatConfigOptions
// Dependencies: []

// Module 1252 (resolveFormatConfigOptions)
arg5.DEFAULT_FORMAT_CONFIG = undefined;
arg5.resolveFormatConfigOptions = function resolveFormatConfigOptions(list, format) {
  format = undefined;
  if (null != format) {
    format = format.format;
  }
  if ("string" === typeof format) {
    const _Object = Object;
    const _Object2 = Object;
    return Object.assign(Object.assign({}, list[format.format]), format);
  } else {
    return format;
  }
};
arg5.DEFAULT_FORMAT_CONFIG = { duration: {}, list: {}, relativeTime: {}, number: { integer: { maximumFractionDigits: 0 }, currency: { style: "currency" }, percent: { style: "percent" } }, date: { short: { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false }, medium: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }, long: {}, full: {} }, time: { short: { CONVERSATIONS_EXTRACTION_PROCESSING: false, CREATOR_STORE_PAGE_VIEWED: false }, medium: {}, long: {}, full: {} } };
