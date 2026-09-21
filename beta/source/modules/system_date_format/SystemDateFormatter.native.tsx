// Module ID: 4445
// Function ID: 4446
// Name: SystemDateFormatter
// Dependencies: [17, 1368, 4446, 2]
// Exports: supportsSystemDateFormatter

// Module 4445 (SystemDateFormatter)
import PlatformUtils from "PlatformUtils" /* 1368 */;
import NativeDateFormatUtilsModuleDefault from "NativeDateFormatUtilsModule" /* 4446 */;
import size from "module_2" /* 2 */;

if (null != global.__DiscordCreateDateFormatter) {
  let __DiscordCreateDateFormatter = global.__DiscordCreateDateFormatter;
} else {
  const _module = PlatformUtils;
  if (_module.isAndroid()) {
    let DateFormatUtils = NativeDateFormatUtilsModuleDefault;
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
  return PlatformUtils.isIOS();
};
