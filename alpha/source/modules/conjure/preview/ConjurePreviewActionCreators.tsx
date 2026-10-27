// Module ID: 10743
// Function ID: 10744
// Name: ConjurePreviewActionCreators
// Dependencies: [5, 4828, 6774, 10744, 1084, 10745, 6775, 584, 10769, 10787, 1294, 2]
// Exports: loadConjurePreviewDm, pauseConjurePreview, reloadConjureAppFrames, reloadConjureProjectFrames, resumeConjurePreview, setBuilderPreviewApplicationId, setBuilderPreviewLandscape, setBuilderPreviewMobile, wakeConjurePreview

// Module 10743 (ConjurePreviewActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import ChannelRecord from "ChannelRecord" /* 4828 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6775 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10745 */;
import leaveFrame from "leaveFrame" /* 10769 */;
import conjurePausedPreviewViews from "conjurePausedPreviewViews" /* 10787 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6774 */;
import ConjurePreviewPauseStore from "ConjurePreviewPauseStore" /* 10744 */;
import size from "module_2" /* 2 */;

let obj = function _loadConjurePreviewDm() {
  obj = _asyncToGenerator(async (arg0) => {
    let c3;
    let c4;
    let closure_2;
    let closure_0 = arg0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: Endpoints.CONJURE_PROJECT_PREVIEW_DM(closure_0), rejectWithError: true };
    const post = HTTP.post;
    await post(obj4);
    const body = arg1.body;
    const channel = closure_130_4(body);
    const obj7 = { type: "CHANNEL_CREATE", channel };
    obj = closure_130_1(closure_130_2[7]);
    obj.dispatch(obj7);
    return channel.id;
  });
  return obj(...arguments);
};
let closure_4 = ChannelRecord.createChannelRecordFromServer;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewActionCreators.tsx");

export const reloadConjureAppFrames = function reloadConjureAppFrames(application_id) {
  obj = ConjurePlatformUtilsDefault;
  obj.reloadAppFrames(application_id);
};
export const reloadConjureProjectFrames = function reloadConjureProjectFrames(projectId) {
  const project = ConjureProjectStore.getProject(projectId);
  if (null != project) {
    const application_id = project.application_id;
    obj = ConjurePlatformUtilsDefault;
    obj.reloadAppFrames(application_id);
    const obj2 = ConjureProjectTypes;
    const tmp2 = importDefault;
    if (!obj2.isPreviewlessProject(project)) {
      let prop = project.preview_application_id;
      if (prop == null) {
        prop = null;
      }
      const tmp2Result = tmp2(10745);
      tmp2Result.reloadAppFrames(prop);
    }
  }
};
export const setBuilderPreviewApplicationId = function setBuilderPreviewApplicationId(applicationId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId };
  obj.dispatch(obj2);
};
export const setBuilderPreviewMobile = function setBuilderPreviewMobile(enabled) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled };
  obj.dispatch(obj2);
};
export const setBuilderPreviewLandscape = function setBuilderPreviewLandscape(landscape) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape };
  obj.dispatch(obj2);
};
export const pauseConjurePreview = function pauseConjurePreview(projectId, id) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: true };
  obj.dispatch(obj2);
  const obj3 = leaveFrame;
  obj3.leaveFrame(id);
};
export const resumeConjurePreview = function resumeConjurePreview(projectId) {
  if (ConjurePreviewPauseStore.isPaused(projectId)) {
    const obj2 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: false };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
};
export const wakeConjurePreview = function wakeConjurePreview(projectId) {
  obj = conjurePausedPreviewViews;
  if (obj.isConjurePausedPreviewMounted(projectId)) {
    if (ConjurePreviewPauseStore.isPaused(projectId)) {
      const obj3 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: false };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
export const loadConjurePreviewDm = function loadConjurePreviewDm() {
  return obj(...arguments);
};
