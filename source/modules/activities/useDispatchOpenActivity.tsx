// Module ID: 10605
// Function ID: 82718
// Name: useDispatchOpenActivity
// Dependencies: [31, 686, 2]
// Exports: default

// Module 10605 (useDispatchOpenActivity)
import result from "result";

const result = require("set").fileFinishedImporting("modules/activities/useDispatchOpenActivity.tsx");

export default function useDispatchOpenActivity(connectedEmbeddedActivity) {
  connectedEmbeddedActivity = connectedEmbeddedActivity.connectedEmbeddedActivity;
  let applicationId;
  applicationId = undefined;
  if (null != connectedEmbeddedActivity) {
    applicationId = connectedEmbeddedActivity.applicationId;
  }
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
