// Module ID: 11858
// Function ID: 11859
// Name: useConjureProjectIcon
// Dependencies: [558, 576, 6809, 1417, 2]
// Exports: conjureProjectIconMetrics

// Module 11858 (useConjureProjectIcon)
import react from "react" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const ApplicationActionCreators = tmp(6809);
function conjureProjectIconMetrics(arg0) {
  const obj = { glyphSize: Math.round(0.6 * arg0), radius: arg0 / 4 };
  return obj;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectIcon(preview_application_id, size) {
  const obj = react;
  const cResult = obj.c(9);
  let application_id = preview_application_id.preview_application_id;
  if (application_id == null) {
    application_id = preview_application_id.application_id;
  }
  const tmpResult = ApplicationActionCreators;
  const data = tmpResult.useApplication(application_id).data;
  if (cResult[0] === data) {
    if (cResult[1] === application_id) {
      let tmp4;
      let tmp8;
      if (cResult[2] === size) {
        tmp4 = cResult[3];
      }
      if (cResult[4] !== size) {
        const obj2 = { glyphSize: Math.round(0.6 * size), radius: size / 4 };
        const _Math = Math;
        cResult[4] = size;
        cResult[5] = obj2;
        tmp8 = obj2;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        let tmp10;
        if (cResult[7] === tmp8) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
      const obj4 = { url: tmp4 };
      const merged = Object.assign(tmp8);
      cResult[6] = tmp4;
      cResult[7] = tmp8;
      cResult[8] = obj4;
      tmp10 = obj4;
    }
  }
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  let applicationIconURL;
  if (null != icon) {
    const obj5 = { id: application_id, icon: data.icon, size };
    const obj3 = AvatarUtilsDefault;
    applicationIconURL = obj3.getApplicationIconURL(obj5);
  }
  cResult[0] = data;
  cResult[1] = application_id;
  cResult[2] = size;
  cResult[3] = applicationIconURL;
  tmp4 = applicationIconURL;
}) : (function useConjureProjectIcon(preview_application_id, size) {
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
});
const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectIcon.tsx");

export default tmp2;
export { conjureProjectIconMetrics };
