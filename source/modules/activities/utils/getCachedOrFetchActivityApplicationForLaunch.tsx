// Module ID: 10620
// Function ID: 82606
// Name: _getCachedOrFetchActivityApplicationForLaunch
// Dependencies: [5, 4202, 4188, 1348, 5678, 10608, 10621, 2]
// Exports: default

// Module 10620 (_getCachedOrFetchActivityApplicationForLaunch)
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
