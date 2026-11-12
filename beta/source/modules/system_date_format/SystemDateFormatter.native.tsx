// Module ID: 5858
// Function ID: 5859
// Name: SystemDateFormatter
// Dependencies: [5859, 1377, 2]
// Exports: supportsSystemDateFormatter

// Module 5858 (SystemDateFormatter)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import react_native from "react-native" /* 5859 */;
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
