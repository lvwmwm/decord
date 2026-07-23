// Module ID: 10816
// Function ID: 83969
// Name: _getCachedOrFetchActivityApplicationForLaunch
// Dependencies: [5, 4167, 4153, 1348, 10486, 10510, 10817, 2]
// Exports: default

// Module 10816 (_getCachedOrFetchActivityApplicationForLaunch)
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
