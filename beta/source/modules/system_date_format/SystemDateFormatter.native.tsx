// Module ID: 5684
// Function ID: 5685
// Name: SystemDateFormatter
// Dependencies: [5685, 1384, 2]
// Exports: supportsSystemDateFormatter

// Module 5684 (SystemDateFormatter)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import react_native from "react-native" /* 5685 */;
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
export const supportsSystemDateFormatter = function supportsSystemDateFormatter() {
  const obj = PlatformUtils;
  return obj.isIOS();
};
