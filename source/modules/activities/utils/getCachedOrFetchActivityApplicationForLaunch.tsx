// Module ID: 10582
// Function ID: 82485
// Name: _getCachedOrFetchActivityApplicationForLaunch
// Dependencies: [5, 4168, 4154, 1348, 5668, 10570, 10583, 2]
// Exports: default

// Module 10582 (_getCachedOrFetchActivityApplicationForLaunch)
import getShelfItemData from "getShelfItemData";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_6 from "_isNativeReflectConstruct";

const require = arg1;
function _getCachedOrFetchActivityApplicationForLaunch() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function isUsableApplicationRecord(embeddedActivityConfig) {
  return null != embeddedActivityConfig && null != embeddedActivityConfig.embeddedActivityConfig;
}
const result = require("_callSuper").fileFinishedImporting("modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx");

export default function getCachedOrFetchActivityApplicationForLaunch() {
  return _getCachedOrFetchActivityApplicationForLaunch(...arguments);
};
