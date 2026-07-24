// Module ID: 10845
// Function ID: 84161
// Name: _getCachedOrFetchActivityApplicationForLaunch
// Dependencies: [5, 4167, 4153, 1348, 10515, 10539, 10846, 2]
// Exports: default

// Module 10845 (_getCachedOrFetchActivityApplicationForLaunch)
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
