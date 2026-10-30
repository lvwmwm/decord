// Module ID: 10875
// Function ID: 10876
// Name: ConjurePreviewActionCreators
// Dependencies: [5, 4862, 6838, 10876, 1072, 10877, 6839, 572, 10902, 10920, 1283, 2]
// Exports: loadConjurePreviewDm, pauseConjurePreview, reloadConjureAppFrames, reloadConjureProjectFrames, resumeConjurePreview, setBuilderPreviewApplicationId, setBuilderPreviewLandscape, setBuilderPreviewMobile, wakeConjurePreview

// Module 10875 (ConjurePreviewActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6839 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10877 */;
import leaveFrame from "leaveFrame" /* 10902 */;
import conjurePausedPreviewViews from "conjurePausedPreviewViews" /* 10920 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import ConjurePreviewPauseStore from "ConjurePreviewPauseStore" /* 10876 */;
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

export function reloadConjureAppFrames(application_id) {
  obj = ConjurePlatformUtilsDefault;
  obj.reloadAppFrames(application_id);
}
export function reloadConjureProjectFrames(projectId) {
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
      const tmp2Result = tmp2(10877);
      tmp2Result.reloadAppFrames(prop);
    }
  }
}
export function setBuilderPreviewApplicationId(applicationId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId };
  obj.dispatch(obj2);
}
export function setBuilderPreviewMobile(enabled) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled };
  obj.dispatch(obj2);
}
export function setBuilderPreviewLandscape(landscape) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape };
  obj.dispatch(obj2);
}
export function pauseConjurePreview(projectId, id) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: true };
  obj.dispatch(obj2);
  const obj3 = leaveFrame;
  obj3.leaveFrame(id);
}
export function resumeConjurePreview(projectId) {
  if (ConjurePreviewPauseStore.isPaused(projectId)) {
    const obj2 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: false };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
}
export function wakeConjurePreview(projectId) {
  obj = conjurePausedPreviewViews;
  if (obj.isConjurePausedPreviewMounted(projectId)) {
    if (ConjurePreviewPauseStore.isPaused(projectId)) {
      const obj3 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: false };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
}
export function loadConjurePreviewDm() {
  return obj(...arguments);
}
