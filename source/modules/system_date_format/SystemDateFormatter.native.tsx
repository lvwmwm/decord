// Module ID: 3815
// Function ID: 31706
// Name: __DiscordCreateDateFormatter
// Dependencies: []
// Exports: supportsSystemDateFormatter

// Module 3815 (__DiscordCreateDateFormatter)
if (null != global.__DiscordCreateDateFormatter) {
  let __DiscordCreateDateFormatter = global.__DiscordCreateDateFormatter;
} else {
  const _module = require(dependencyMap[1]);
  if (_module.isAndroid()) {
    let DateFormatUtils = importDefault(dependencyMap[2]);
  } else {
    DateFormatUtils = tmp2.DateFormatUtils;
  }
  let activateResult;
  if (null != DateFormatUtils) {
    if (null != DateFormatUtils.activate) {
      activateResult = DateFormatUtils.activate();
    }
  }
  if (true === activateResult) {
    if (null != global.__DiscordCreateDateFormatter) {
      __DiscordCreateDateFormatter = global.__DiscordCreateDateFormatter;
    }
  }
}
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/system_date_format/SystemDateFormatter.native.tsx");

export const makeFormatter = __DiscordCreateDateFormatter;
export const supportsSystemDateFormatter = function supportsSystemDateFormatter() {
  return require(dependencyMap[1]).isIOS();
};
