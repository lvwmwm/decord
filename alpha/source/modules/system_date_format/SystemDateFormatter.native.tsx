// Module ID: 5494
// Function ID: 5495
// Name: SystemDateFormatter
// Dependencies: [5495, 1380, 2]
// Exports: supportsSystemDateFormatter

// Module 5494 (SystemDateFormatter)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import react_native from "react-native" /* 5495 */;
import size from "module_2" /* 2 */;

let activateResult;
if (react_native != null) {
  activateResult = react_native.activate();
}
let prop;
if (true === activateResult) {
  prop = global.__DiscordCreateDateFormatter;
}
const result = size.fileFinishedImporting("modules/system_date_format/SystemDateFormatter.native.tsx");

export const makeFormatter = prop;
export function supportsSystemDateFormatter() {
  const obj = PlatformUtils;
  return obj.isIOS();
}
