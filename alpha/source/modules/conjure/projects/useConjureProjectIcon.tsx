// Module ID: 11343
// Function ID: 11344
// Name: useConjureProjectIcon
// Dependencies: [19, 2038, 504, 11344, 1409, 2]
// Exports: conjureProjectIconMetrics, default

// Module 11343 (useConjureProjectIcon)
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import prefetchConjureApplicationDefault from "prefetchConjureApplication" /* 11344 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
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
