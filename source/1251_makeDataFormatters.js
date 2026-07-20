// Module ID: 1251
// Function ID: 14075
// Name: makeDataFormatters
// Dependencies: []

// Module 1251 (makeDataFormatters)
arg5.makeDataFormatters = function makeDataFormatters(items, formatConfig, _forceLookupMatcher) {
  formatConfig = items;
  const arg6 = formatConfig;
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
      const formatConfigOptions = arg0(format[0]).resolveFormatConfigOptions(format.date, format);
      const dataFormatterCache = arg0(format[1]).dataFormatterCache;
      const dateTimeFormatter = dataFormatterCache.getDateTimeFormatter(arg0, optionsWithLocaleMatcher(formatConfigOptions));
      return dateTimeFormatter.format(arg0);
    },
    formatDuration(arg0, format) {
      const formatConfigOptions = arg0(format[0]).resolveFormatConfigOptions(format.time, format);
      const dataFormatterCache = arg0(format[1]).dataFormatterCache;
      const durationFormatter = dataFormatterCache.getDurationFormatter(arg0, optionsWithLocaleMatcher(formatConfigOptions));
      return durationFormatter.format(arg0);
    },
    formatNumber(arg0, format) {
      const formatConfigOptions = arg0(format[0]).resolveFormatConfigOptions(format.number, format);
      const dataFormatterCache = arg0(format[1]).dataFormatterCache;
      const numberFormatter = dataFormatterCache.getNumberFormatter(arg0, optionsWithLocaleMatcher(formatConfigOptions));
      return numberFormatter.format(arg0);
    },
    formatList(arg0, format) {
      const formatConfigOptions = arg0(format[0]).resolveFormatConfigOptions(format.list, format);
      const dataFormatterCache = arg0(format[1]).dataFormatterCache;
      const listFormatter = dataFormatterCache.getListFormatter(arg0, optionsWithLocaleMatcher(formatConfigOptions));
      return listFormatter.format(arg0);
    },
    formatListToParts(obj, format) {
      obj = {};
      const formatConfigOptions = obj(format[0]).resolveFormatConfigOptions(format.list, format);
      for (const key10016 in arg0) {
        let tmp2 = key10016;
        obj["$+/-$placeholder." + key10016] = arg0[key10016];
      }
      const dataFormatterCache = obj(format[1]).dataFormatterCache;
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
      const formatConfigOptions = arg0(day[0]).resolveFormatConfigOptions(day.relativeTime, format);
      const dataFormatterCache = arg0(day[1]).dataFormatterCache;
      const relativeTimeFormatter = dataFormatterCache.getRelativeTimeFormatter(arg0, optionsWithLocaleMatcher(formatConfigOptions));
      return relativeTimeFormatter.format(arg0, day);
    },
    formatTime(arg0, format) {
      const formatConfigOptions = arg0(format[0]).resolveFormatConfigOptions(format.time, format);
      const dataFormatterCache = arg0(format[1]).dataFormatterCache;
      const dateTimeFormatter = dataFormatterCache.getDateTimeFormatter(arg0, optionsWithLocaleMatcher(formatConfigOptions));
      return dateTimeFormatter.format(arg0);
    },
    getPluralRules(formatConfigOptions) {
      const dataFormatterCache = formatConfigOptions(arg1[1]).dataFormatterCache;
      return dataFormatterCache.getPluralRules(formatConfigOptions, optionsWithLocaleMatcher(formatConfigOptions));
    }
  };
};
