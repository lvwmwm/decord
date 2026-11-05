// Module ID: 11539
// Function ID: 11540
// Name: useConjureProjectIcon
// Dependencies: [19, 2167, 504, 11540, 1411, 2]
// Exports: conjureProjectIconMetrics, default

// Module 11539 (useConjureProjectIcon)
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import prefetchConjureApplicationDefault from "prefetchConjureApplication" /* 11540 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2167 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectIcon.tsx");

export default function useConjureProjectIcon(preview_application_id, size) {
  let application_id = preview_application_id.preview_application_id;
  if (application_id == null) {
    application_id = preview_application_id.application_id;
  }
  const items = [ApplicationStore];
  const obj = application_id(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const application = ApplicationStore.getApplication(application_id);
    let icon;
    if (application != null) {
      icon = application.icon;
    }
    return icon;
  });
  const items1 = [application_id];
  const effect = react.useEffect(() => prefetchConjureApplicationDefault(application_id), items1);
  let applicationIconURL;
  if (null != stateFromStores) {
    const obj3 = { id: application_id, icon: stateFromStores, size };
    const obj2 = AvatarUtilsDefault;
    applicationIconURL = obj2.getApplicationIconURL(obj3);
  }
  const obj4 = { url: applicationIconURL };
  const obj5 = { glyphSize: Math.round(0.6 * size), radius: size / 4 };
  const merged = Object.assign(obj5);
  return obj4;
};
export function conjureProjectIconMetrics(size) {
  const obj = { glyphSize: Math.round(0.6 * size), radius: size / 4 };
  return obj;
}
