// Module ID: 12998
// Function ID: 12999
// Name: useConjureProjectIcon
// Dependencies: [558, 576, 6852, 1415, 2]

// Module 12998 (useConjureProjectIcon)
import react from "react" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const ApplicationActionCreators = tmp(6852);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectIcon(preview_application_id, size) {
  const obj = react;
  const cResult = obj.c(10);
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
        const _Math = Math;
        const rounded = Math.round(0.6 * size);
        cResult[4] = size;
        cResult[5] = rounded;
        tmp8 = rounded;
      } else {
        tmp8 = cResult[5];
      }
      const result = size / 4;
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp8) {
          let tmp12;
          if (cResult[8] === result) {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
      const obj2 = { url: tmp4, glyphSize: tmp8, radius: result };
      cResult[6] = tmp4;
      cResult[7] = tmp8;
      cResult[8] = result;
      cResult[9] = obj2;
      tmp12 = obj2;
    }
  }
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  let applicationIconURL;
  if (null != icon) {
    const obj4 = { id: application_id, icon: data.icon, size };
    const obj3 = AvatarUtilsDefault;
    applicationIconURL = obj3.getApplicationIconURL(obj4);
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
  const obj4 = { url: applicationIconURL, glyphSize: Math.round(0.6 * size), radius: size / 4 };
  return obj4;
});
let result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectIcon.tsx");

export default tmp2;
