// Module ID: 10979
// Function ID: 10980
// Name: ConjurePreviewActionCreators
// Dependencies: [10897, 10930, 7170, 584, 2]
// Exports: reloadConjureAppFrames, reloadConjureProjectFrames, setBuilderPreviewApplicationId, setBuilderPreviewLandscape, setBuilderPreviewMobile

// Module 10979 (ConjurePreviewActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7170 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10930 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10897 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewActionCreators.tsx");

export const reloadConjureAppFrames = function reloadConjureAppFrames(application_id) {
  const obj = ConjurePlatformUtilsDefault;
  obj.reloadAppFrames(application_id);
};
export const reloadConjureProjectFrames = function reloadConjureProjectFrames(arg0) {
  const project = ConjureProjectStore.getProject(arg0);
  if (null != project) {
    const application_id = project.application_id;
    const obj = ConjurePlatformUtilsDefault;
    obj.reloadAppFrames(application_id);
    const obj2 = ConjureProjectTypes;
    const tmp2 = importDefault;
    if (!obj2.isPreviewlessProject(project)) {
      let prop = project.preview_application_id;
      if (prop == null) {
        prop = null;
      }
      const tmp2Result = tmp2(10930);
      tmp2Result.reloadAppFrames(prop);
    }
  }
};
export const setBuilderPreviewApplicationId = function setBuilderPreviewApplicationId(applicationId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId };
  obj.dispatch(obj2);
};
export const setBuilderPreviewMobile = function setBuilderPreviewMobile(enabled) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled };
  obj.dispatch(obj2);
};
export const setBuilderPreviewLandscape = function setBuilderPreviewLandscape(landscape) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape };
  obj.dispatch(obj2);
};
