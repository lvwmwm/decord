// Module ID: 3856
// Function ID: 31857
// Name: _openURL
// Dependencies: [5, 3857, 8183, 1935, 2]
// Exports: default

// Module 3856 (_openURL)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
async function _openURL(arg0, arg1, arg2) {
  outer2_0(outer2_1[1]).default(arg0);
  yield outer2_0(outer2_1[3])(outer2_1[2], outer2_1.paths).default(arg0, { skipExtensionCheck: arg1, analyticsLocations: [] });
}
const result = require("openInviteModal").fileFinishedImporting("lib/openURL.tsx");

export default function openURL() {
  return _openURL(...arguments);
};
