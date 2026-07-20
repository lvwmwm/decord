// Module ID: 3819
// Function ID: 31730
// Name: _openURL
// Dependencies: []
// Exports: default

// Module 3819 (_openURL)
async function _openURL(defaultResult1, skipExtensionCheck, arg2) {
  callback(closure_1[1]).default(defaultResult1);
  yield closure_0(closure_1[3])(closure_1[2], closure_1.paths).default(defaultResult1, { skipExtensionCheck, analyticsLocations: [] });
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("lib/openURL.tsx");

export default function openURL() {
  return _openURL(...arguments);
};
