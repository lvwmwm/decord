// Module ID: 3817
// Function ID: 31719
// Name: __DiscordCreateDateFormatter
// Dependencies: [27, 477, 3818, 2]
// Exports: supportsSystemDateFormatter

// Module 3817 (__DiscordCreateDateFormatter)
if (null != global.__DiscordCreateDateFormatter) {
  let __DiscordCreateDateFormatter = global.__DiscordCreateDateFormatter;
} else {
  const _module = require("set");
  if (_module.isAndroid()) {
    let DateFormatUtils = require("enforcing");
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
const result = require("enforcing").fileFinishedImporting("modules/system_date_format/SystemDateFormatter.native.tsx");

export const makeFormatter = __DiscordCreateDateFormatter;
export const supportsSystemDateFormatter = function supportsSystemDateFormatter() {
  return require(477) /* set */.isIOS();
};
