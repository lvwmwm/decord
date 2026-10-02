// Module ID: 8752
// Function ID: 8753
// Name: getShelfItemData
// Dependencies: [5064, 2]
// Exports: default

// Module 8752 (getShelfItemData)
import ApplicationStore from "ApplicationStore" /* 5064 */;
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
