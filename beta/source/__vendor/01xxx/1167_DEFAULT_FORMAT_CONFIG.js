// Module ID: 1167
// Function ID: 1168
// Name: DEFAULT_FORMAT_CONFIG
// Dependencies: [1168, 1169]
// Exports: makeDataFormatters

// Module 1167 (DEFAULT_FORMAT_CONFIG)
import _mod1168 from "module_1168" /* 1168 */;
import dataFormatterCache2 from "dataFormatterCache" /* 1169 */;

let value;


export function makeDataFormatters(items, formatConfig, _forceLookupMatcher) {
  let closure_0 = items;
  let flag = _forceLookupMatcher;
  if (_forceLookupMatcher === undefined) {
    flag = false;
  }
  let obj = {
    formatDate(arg0, format) {
      const formatConfigOptions = _mod1168.resolveFormatConfigOptions(formatConfig.date, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getDateTimeFormatter = dataFormatterCache.getDateTimeFormatter;
      const tmp2 = items;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const dateTimeFormatter = getDateTimeFormatter(tmp2, merged);
      return dateTimeFormatter.format(arg0);
    },
    formatDuration(arg0, format) {
      const formatConfigOptions = _mod1168.resolveFormatConfigOptions(formatConfig.time, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getDurationFormatter = dataFormatterCache.getDurationFormatter;
      const tmp2 = items;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const durationFormatter = getDurationFormatter(tmp2, merged);
      return durationFormatter.format(arg0);
    },
    formatNumber(result2, parseNumberSkeletonResult) {
      const formatConfigOptions = _mod1168.resolveFormatConfigOptions(formatConfig.number, parseNumberSkeletonResult);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getNumberFormatter = dataFormatterCache.getNumberFormatter;
      const tmp2 = items;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const numberFormatter = getNumberFormatter(tmp2, merged);
      return numberFormatter.format(result2);
    },
    formatList(arg0, format) {
      const formatConfigOptions = _mod1168.resolveFormatConfigOptions(formatConfig.list, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getListFormatter = dataFormatterCache.getListFormatter;
      const tmp2 = items;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const listFormatter = getListFormatter(tmp2, merged);
      return listFormatter.format(arg0);
    },
    formatListToParts(obj, format) {
      const formatConfigOptions = _mod1168.resolveFormatConfigOptions(formatConfig.list, format);
      obj = {};
      for (const key10015 in obj) {
        obj["$+/-$placeholder." + key10015] = obj[key10015];
        continue;
      }
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getListFormatter = dataFormatterCache.getListFormatter;
      const tmp2 = items;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const listFormatter = getListFormatter(tmp2, merged);
      const formatToPartsResult = listFormatter.formatToParts(Object.keys(obj));
      return formatToPartsResult.map((value) => {
        value = obj[value.value];
        if (null === value) {
          value = value.value;
        }
        value.value = value;
        return value;
      });
    },
    formatRelativeTime(arg0, day, format) {
      const formatConfigOptions = _mod1168.resolveFormatConfigOptions(formatConfig.relativeTime, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getRelativeTimeFormatter = dataFormatterCache.getRelativeTimeFormatter;
      const tmp2 = items;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const relativeTimeFormatter = getRelativeTimeFormatter(tmp2, merged);
      return relativeTimeFormatter.format(arg0, day);
    },
    formatTime(arg0, format) {
      const formatConfigOptions = _mod1168.resolveFormatConfigOptions(formatConfig.time, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getDateTimeFormatter = dataFormatterCache.getDateTimeFormatter;
      const tmp2 = items;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const dateTimeFormatter = getDateTimeFormatter(tmp2, merged);
      return dateTimeFormatter.format(arg0);
    },
    getPluralRules(arg0) {
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = arg0;
      const getPluralRules = dataFormatterCache.getPluralRules;
      const tmp = items;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, arg0), { localeMatcher: "lookup" });
      }
      return getPluralRules(tmp, merged);
    }
  };
  return obj;
}
