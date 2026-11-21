// Module ID: 5584
// Function ID: 5585
// Name: SystemDateFormatter
// Dependencies: [5585, 1378, 2]
// Exports: supportsSystemDateFormatter

// Module 5584 (SystemDateFormatter)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import react_native from "react-native" /* 5585 */;
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
