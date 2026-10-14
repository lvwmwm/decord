// Module ID: 4798
// Function ID: 4799
// Name: SystemDateFormatter
// Dependencies: [4799, 1382, 2]
// Exports: supportsSystemDateFormatter

// Module 4798 (SystemDateFormatter)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import react_native from "react-native" /* 4799 */;
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
