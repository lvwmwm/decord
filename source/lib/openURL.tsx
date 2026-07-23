// Module ID: 3821
// Function ID: 31742
// Name: _openURL
// Dependencies: [5, 3822, 8343, 1934, 2]
// Exports: default

// Module 3821 (_openURL)
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
