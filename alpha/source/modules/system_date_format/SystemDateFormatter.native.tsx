// Module ID: 4855
// Function ID: 4856
// Name: SystemDateFormatter
// Dependencies: [4856, 1384, 2]
// Exports: supportsSystemDateFormatter

// Module 4855 (SystemDateFormatter)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import react_native from "react-native" /* 4856 */;
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
