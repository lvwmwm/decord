// Module ID: 1252
// Function ID: 14091
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
arg5.DEFAULT_FORMAT_CONFIG = { duration: {}, list: {}, relativeTime: {}, number: { integer: { maximumFractionDigits: 0 }, currency: { style: "currency" }, percent: { style: "percent" } }, date: { short: { <string:3478312518>: false, <string:4217799105>: false, <string:1449286816>: false }, medium: { <string:3478312518>: true, <string:4217799105>: true, <string:1449286816>: true }, long: {}, full: {} }, time: { short: { state: false, sk: false }, medium: {}, long: {}, full: {} } };
