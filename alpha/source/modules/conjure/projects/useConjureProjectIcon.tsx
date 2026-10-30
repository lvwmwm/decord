// Module ID: 12428
// Function ID: 12429
// Name: useConjureProjectIcon
// Dependencies: [6875, 1410, 2]
// Exports: conjureProjectIconMetrics, default

// Module 12428 (useConjureProjectIcon)
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6875 */;
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
export function conjureProjectIconMetrics(arg0) {
  const obj = { glyphSize: Math.round(0.6 * arg0), radius: arg0 / 4 };
  return obj;
}
