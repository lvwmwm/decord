// Module ID: 16660
// Function ID: 129877
// Name: libDiscoreSmokeTest
// Dependencies: [5, 653, 3, 1847, 1844, 1841, 675, 2]
// Exports: default, libDiscoreSmokeTest

// Module 16660 (libDiscoreSmokeTest)
import _callSuper from "_callSuper";
import { AnalyticEvents } from "ME";
import importDefaultResult from "_initLibdiscore";

const require = arg1;
function libDiscoreSmokeTest() {
  return _libDiscoreSmokeTest(...arguments);
}
function _libDiscoreSmokeTest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function trackLibdiscoreSuccess() {
  const items = [];
  const prop = items(1841).ALL_LIBDISCORE_EXPERIMENTS;
  const item = prop.forEach((getEnabledFeatureName) => {
    const enabledFeatureName = getEnabledFeatureName.getEnabledFeatureName();
    if (null != enabledFeatureName) {
      items.push(enabledFeatureName);
    }
  });
  importDefault(675).track(AnalyticEvents.LIBDISCORE_LOADED, { success: true, experimental_features: items });
}
function formatErrorMessage(arg0) {
  let message;
  let name;
  if (arg0 instanceof Error) {
    ({ message, name } = arg0);
  } else {
    message = "Unknown error";
    if (null != arg0) {
      const _String = String;
      message = String(arg0);
    }
    name = null;
  }
  let text = message;
  if (message.length > 1000) {
    text = `${message.substring(0, 997)}...`;
  }
  let combined = text;
  if (null != name) {
    const _HermesInternal = HermesInternal;
    combined = "" + name + ": " + text;
  }
  return combined;
}
function trackLibdiscoreFailure(arg0) {
  importDefaultResult.error("Failed to execute smoke test:", arg0);
  const tmp2 = formatErrorMessage(arg0);
  importDefault(675).track(AnalyticEvents.LIBDISCORE_LOADED, { success: false, error: tmp2 });
}
importDefaultResult = new importDefaultResult("libdiscore");
let c6 = false;
const result = require("timestamp").fileFinishedImporting("modules/libdiscore/libDiscoreSmokeTest.tsx");

export default libDiscoreSmokeTest;
export { libDiscoreSmokeTest };
export { trackLibdiscoreSuccess };
export { formatErrorMessage };
export { trackLibdiscoreFailure };
