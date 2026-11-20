// Module ID: 5465
// Function ID: 5466
// Name: SystemDateFormatter
// Dependencies: [5466, 1378, 2]
// Exports: supportsSystemDateFormatter

// Module 5465 (SystemDateFormatter)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import react_native from "react-native" /* 5466 */;
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
