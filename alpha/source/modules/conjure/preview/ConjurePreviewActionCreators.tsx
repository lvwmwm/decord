// Module ID: 11043
// Function ID: 11044
// Name: ConjurePreviewActionCreators
// Dependencies: [6724, 11044, 11045, 6725, 584, 11068, 11081, 2]
// Exports: pauseConjurePreview, reloadConjureAppFrames, reloadConjureProjectFrames, resumeConjurePreview, setBuilderPreviewApplicationId, setBuilderPreviewLandscape, setBuilderPreviewMobile, wakeConjurePreview

// Module 11043 (ConjurePreviewActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6725 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 11045 */;
import leaveFrame from "leaveFrame" /* 11068 */;
import conjurePausedPreviewViews from "conjurePausedPreviewViews" /* 11081 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6724 */;
import ConjurePreviewPauseStore from "ConjurePreviewPauseStore" /* 11044 */;
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
      const tmp2Result = tmp2(11045);
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
export const pauseConjurePreview = function pauseConjurePreview(projectId, id) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: true };
  obj.dispatch(obj2);
  const obj3 = leaveFrame;
  obj3.leaveFrame(id);
};
export const resumeConjurePreview = function resumeConjurePreview(projectId) {
  if (ConjurePreviewPauseStore.isPaused(projectId)) {
    const obj2 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: false };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
};
export const wakeConjurePreview = function wakeConjurePreview(projectId) {
  const obj = conjurePausedPreviewViews;
  if (obj.isConjurePausedPreviewMounted(projectId)) {
    if (ConjurePreviewPauseStore.isPaused(projectId)) {
      const obj3 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: false };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
