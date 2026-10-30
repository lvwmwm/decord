// Module ID: 11703
// Function ID: 11704
// Name: getShelfItemData
// Dependencies: [2040, 2]
// Exports: default

// Module 11703 (getShelfItemData)
import ApplicationStore from "ApplicationStore" /* 2040 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/getShelfItemData.tsx");

export default function getShelfItemData(applicationId) {
  let activityConfigs;
  let applications;
  applicationId = applicationId.applicationId;
  ({ activityConfigs, applications } = applicationId);
  let found;
  if (applications != null) {
    found = applications.find((id) => id.id === applicationId);
  }
  if (found == null) {
    found = ApplicationStore.getApplication(applicationId);
  }
  const found1 = activityConfigs.find((application_id) => application_id.application_id === applicationId);
  let tmp4 = null;
  if (null != found1) {
    tmp4 = null;
    if (null != found) {
      tmp4 = { activity: found1, application: found };
      const obj = { activity: found1, application: found };
    }
  }
  return tmp4;
};
