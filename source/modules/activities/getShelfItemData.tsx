// Module ID: 10510
// Function ID: 82077
// Name: getShelfItemData
// Dependencies: [4167, 2]
// Exports: default

// Module 10510 (getShelfItemData)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/activities/getShelfItemData.tsx");

export default function getShelfItemData(applicationId) {
  let activityConfigs;
  let applications;
  applicationId = applicationId.applicationId;
  ({ activityConfigs, applications } = applicationId);
  let found;
  if (null != applications) {
    found = applications.find((id) => id.id === applicationId);
  }
  if (null == found) {
    found = applicationId.getApplication(applicationId);
  }
  const found1 = activityConfigs.find((application_id) => application_id.application_id === applicationId);
  let tmp4 = null;
  if (null != found1) {
    tmp4 = null;
    if (null != found) {
      const obj = { activity: found1, application: found };
      tmp4 = obj;
    }
  }
  return tmp4;
};
