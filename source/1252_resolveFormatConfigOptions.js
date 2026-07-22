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
arg5.DEFAULT_FORMAT_CONFIG = { duration: {}, list: {}, relativeTime: {}, number: { integer: { maximumFractionDigits: 0 }, currency: { style: "currency" }, percent: { style: "percent" } }, date: { short: { "Bool(true)": "message", "Bool(true)": "absolute", "Bool(true)": "100%" }, medium: { "Bool(true)": "log", "Bool(true)": "info", "Bool(true)": "warn" }, long: { "Bool(true)": "transparent", "Bool(true)": 1, "Bool(true)": "solid" }, full: {} }, time: { short: { -17117184: "message", 0: "absolute" }, medium: {}, long: {}, full: {} } };
