// Module ID: 10499
// Function ID: 82003
// Name: getShelfItemData
// Dependencies: []
// Exports: default

// Module 10499 (getShelfItemData)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/activities/getShelfItemData.tsx");

export default function getShelfItemData(applicationId) {
  let activityConfigs;
  let applications;
  applicationId = applicationId.applicationId;
  const application = applicationId;
  ({ activityConfigs, applications } = applicationId);
  let found;
  if (null != applications) {
    found = applications.find((id) => id.id === applicationId);
  }
  if (null == found) {
    found = application.getApplication(applicationId);
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
