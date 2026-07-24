// Module ID: 1251
// Function ID: 14081
// Name: makeDataFormatters
// Dependencies: [1252, 1253]

// Module 1251 (makeDataFormatters)
const require = arg1;
const dependencyMap = arg6;
arg5.makeDataFormatters = function makeDataFormatters(items, formatConfig, _forceLookupMatcher) {
  let closure_0 = items;
  let closure_1 = formatConfig;
  function optionsWithLocaleMatcher(formatConfigOptions) {
    let merged = formatConfigOptions;
    if (closure_2) {
      const _Object = Object;
      const _Object2 = Object;
      const obj = { localeMatcher: "lookup" };
      merged = Object.assign(Object.assign({}, formatConfigOptions), obj);
    }
    return merged;
  }
  let closure_2 = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
  return {
    formatDate(arg0, format) {
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(closure_1.date, format);
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      const dateTimeFormatter = dataFormatterCache.getDateTimeFormatter(items, optionsWithLocaleMatcher(formatConfigOptions));
      return dateTimeFormatter.format(arg0);
    },
    formatDuration(arg0, format) {
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(closure_1.time, format);
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      const durationFormatter = dataFormatterCache.getDurationFormatter(items, optionsWithLocaleMatcher(formatConfigOptions));
      return durationFormatter.format(arg0);
    },
    formatNumber(arg0, format) {
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(closure_1.number, format);
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      const numberFormatter = dataFormatterCache.getNumberFormatter(items, optionsWithLocaleMatcher(formatConfigOptions));
      return numberFormatter.format(arg0);
    },
    formatList(arg0, format) {
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(closure_1.list, format);
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      const listFormatter = dataFormatterCache.getListFormatter(items, optionsWithLocaleMatcher(formatConfigOptions));
      return listFormatter.format(arg0);
    },
    formatListToParts(obj, format) {
      obj = {};
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(closure_1.list, format);
      for (const key10016 in arg0) {
        let tmp2 = key10016;
        obj["$+/-$placeholder." + key10016] = arg0[key10016];
        continue;
      }
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      const listFormatter = dataFormatterCache.getListFormatter(obj, optionsWithLocaleMatcher(formatConfigOptions));
      return listFormatter.formatToParts(Object.keys(obj)).map((value) => {
        value = obj[value.value];
        if (null === value) {
          value = value.value;
        }
        value.value = value;
        return value;
      });
    },
    formatRelativeTime(arg0, day, format) {
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(closure_1.relativeTime, format);
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      const relativeTimeFormatter = dataFormatterCache.getRelativeTimeFormatter(items, optionsWithLocaleMatcher(formatConfigOptions));
      return relativeTimeFormatter.format(arg0, day);
    },
    formatTime(arg0, format) {
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(closure_1.time, format);
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      const dateTimeFormatter = dataFormatterCache.getDateTimeFormatter(items, optionsWithLocaleMatcher(formatConfigOptions));
      return dateTimeFormatter.format(arg0);
    },
    getPluralRules(formatConfigOptions) {
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      return dataFormatterCache.getPluralRules(items, optionsWithLocaleMatcher(formatConfigOptions));
    }
  };
};
