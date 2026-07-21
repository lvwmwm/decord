// Module ID: 10594
// Function ID: 82655
// Name: useDispatchOpenActivity
// Dependencies: []
// Exports: default

// Module 10594 (useDispatchOpenActivity)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/activities/useDispatchOpenActivity.tsx");

export default function useDispatchOpenActivity(connectedEmbeddedActivity) {
  connectedEmbeddedActivity = connectedEmbeddedActivity.connectedEmbeddedActivity;
  const importDefault = connectedEmbeddedActivity;
  let dependencyMap;
  let applicationId;
  if (null != connectedEmbeddedActivity) {
    applicationId = connectedEmbeddedActivity.applicationId;
  }
  dependencyMap = applicationId;
  const items = [applicationId, connectedEmbeddedActivity];
  const effect = React.useEffect(() => {
    let tmp = null != connectedEmbeddedActivity;
    if (tmp) {
      tmp = null != applicationId;
    }
    if (tmp) {
      let obj = connectedEmbeddedActivity(applicationId[1]);
      obj = { type: "EMBEDDED_ACTIVITY_OPEN", location: connectedEmbeddedActivity.location, applicationId };
      obj.dispatch(obj);
    }
  }, items);
};
