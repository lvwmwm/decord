// Module ID: 11343
// Function ID: 11344
// Name: useConjureProjectIcon
// Dependencies: [6881, 1409, 2]
// Exports: conjureProjectIconMetrics, default

// Module 11343 (useConjureProjectIcon)
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6881 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectIcon.tsx");

export default function useConjureProjectIcon(preview_application_id, size) {
  let application_id = preview_application_id.preview_application_id;
  if (application_id == null) {
    application_id = preview_application_id.application_id;
  }
  const obj = ApplicationActionCreators;
  const data = obj.useApplication(application_id).data;
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  let applicationIconURL;
  if (null != icon) {
    const obj3 = { id: application_id, icon: data.icon, size };
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
