// Module ID: 16473
// Function ID: 127242
// Name: libDiscoreSmokeTest
// Dependencies: []
// Exports: default, libDiscoreSmokeTest

// Module 16473 (libDiscoreSmokeTest)
function libDiscoreSmokeTest() {
  return _libDiscoreSmokeTest(...arguments);
}
function _libDiscoreSmokeTest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _libDiscoreSmokeTest = obj;
  return obj(...arguments);
}
function trackLibdiscoreSuccess() {
  const items = [];
  const arg1 = items;
  const prop = arg1(dependencyMap[5]).ALL_LIBDISCORE_EXPERIMENTS;
  const item = prop.forEach((getEnabledFeatureName) => {
    const enabledFeatureName = getEnabledFeatureName.getEnabledFeatureName();
    if (null != enabledFeatureName) {
      items.push(enabledFeatureName);
    }
  });
  importDefault(dependencyMap[6]).track(AnalyticEvents.LIBDISCORE_LOADED, { success: true, experimental_features: items });
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
  importDefault(dependencyMap[6]).track(AnalyticEvents.LIBDISCORE_LOADED, { success: false, error: tmp2 });
}
let closure_3 = importDefault(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult("libdiscore");
let closure_6 = false;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/libdiscore/libDiscoreSmokeTest.tsx");

export default libDiscoreSmokeTest;
export { libDiscoreSmokeTest };
export { trackLibdiscoreSuccess };
export { formatErrorMessage };
export { trackLibdiscoreFailure };
