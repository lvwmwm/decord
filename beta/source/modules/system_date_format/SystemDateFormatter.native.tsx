// Module ID: 4518
// Function ID: 4519
// Name: SystemDateFormatter
// Dependencies: [17, 1370, 4519, 2]
// Exports: supportsSystemDateFormatter

// Module 4518 (SystemDateFormatter)
import PlatformUtils from "PlatformUtils" /* 1370 */;
import react_nativeDefault from "react-native" /* 4519 */;
import size from "module_2" /* 2 */;

let __DiscordCreateDateFormatter;
if (null != global.__DiscordCreateDateFormatter) {
  __DiscordCreateDateFormatter = global.__DiscordCreateDateFormatter;
} else {
  let DateFormatUtils;
  const _module = PlatformUtils;
  if (_module.isAndroid()) {
    DateFormatUtils = react_nativeDefault;
  } else {
    DateFormatUtils = tmp2.DateFormatUtils;
  }
  let activateResult;
  if (DateFormatUtils != null) {
    const activate = DateFormatUtils.activate;
    if (activate != null) {
      activateResult = activate();
    }
  }
  if (true === activateResult) {
    if (null != global.__DiscordCreateDateFormatter) {
      __DiscordCreateDateFormatter = global.__DiscordCreateDateFormatter;
    }
  }
}
const result = size.fileFinishedImporting("modules/system_date_format/SystemDateFormatter.native.tsx");

export const makeFormatter = __DiscordCreateDateFormatter;
export const supportsSystemDateFormatter = function supportsSystemDateFormatter() {
  const obj = PlatformUtils;
  return obj.isIOS();
};
