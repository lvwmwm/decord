// Module ID: 8921
// Function ID: 8922
// Name: useDispatchOpenActivity
// Dependencies: [19, 573, 2]
// Exports: default

// Module 8921 (useDispatchOpenActivity)
import DispatcherDefault from "Dispatcher" /* 573 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/useDispatchOpenActivity.tsx");

export default function useDispatchOpenActivity(connectedEmbeddedActivity) {
  connectedEmbeddedActivity = connectedEmbeddedActivity.connectedEmbeddedActivity;
  let applicationId;
  if (connectedEmbeddedActivity != null) {
    applicationId = connectedEmbeddedActivity.applicationId;
  }
  const items = [applicationId, connectedEmbeddedActivity];
  const effect = react.useEffect(() => {
    let tmp2 = null != connectedEmbeddedActivity;
    const tmp = connectedEmbeddedActivity;
    if (tmp2) {
      tmp2 = null != applicationId;
    }
    if (tmp2) {
      const obj2 = { type: "EMBEDDED_ACTIVITY_OPEN", location: tmp.location, applicationId };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  }, items);
};
