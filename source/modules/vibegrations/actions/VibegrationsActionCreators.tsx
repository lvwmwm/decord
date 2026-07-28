// Module ID: 5667
// Function ID: 48211
// Name: reloadActivityIfRunning
// Dependencies: [5, 5668, 5665, 653, 5675, 686, 507, 2]
// Exports: createProject, deleteProject, listProjects, publishPreviewProject, publishProject, renameProject, setBuilderPreviewApplicationId, setChatSidebarWidth, setGuildHints

// Module 5667 (reloadActivityIfRunning)
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { Endpoints } from "ME";

const require = arg1;
function reloadActivityIfRunning(applicationId) {
  let tmp = null != applicationId;
  if (tmp) {
    connectedFrame = connectedFrame.getConnectedFrame();
    applicationId = undefined;
    if (null != connectedFrame) {
      applicationId = connectedFrame.applicationId;
    }
    tmp = applicationId === applicationId;
  }
  if (tmp) {
    let obj = importDefault(5675);
    obj = { applicationId };
    obj.refreshProxyTicket(obj);
  }
}
async function _listProjects() {
  const projectsFetchState = outer2_5.getProjectsFetchState();
  let type;
  if (null != projectsFetchState) {
    type = projectsFetchState.type;
  }
  if ("loading" !== type) {
    let obj = { type: "VIBEGRATIONS_PROJECTS_FETCH_START" };
    outer2_1(outer2_2[5]).dispatch(obj);
    const HTTP = outer2_0(outer2_2[6]).HTTP;
    obj = { url: outer2_6.VIBEGRATIONS_PROJECTS, rejectWithError: true };
    obj = outer2_1(outer2_2[5]);
    const obj1 = { type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: yield HTTP.get(obj).body };
    obj.dispatch(obj1);
    const obj3 = outer2_1(outer2_2[5]);
  }
}
async function _createProject(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  const body = yield HTTP.post({ url: outer2_6.VIBEGRATIONS_PROJECTS, body: arg0, rejectWithError: false }).body;
  outer2_1(outer2_2[5]).dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: body });
  return body.id;
}
async function _renameProject(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  obj = { url: outer2_6.VIBEGRATIONS_PROJECT(arg0), body: obj, rejectWithError: false };
  obj = { name: arg1 };
  const tmp = yield HTTP.patch(obj);
  if (tmp.ok) {
    obj = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: tmp.body };
    outer2_1(outer2_2[5]).dispatch(obj);
    const obj3 = outer2_1(outer2_2[5]);
  }
  return tmp;
}
async function _setGuildHints(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  let obj = { url: outer2_6.VIBEGRATIONS_PROJECT(arg0), body: arg1, rejectWithError: false };
  const tmp = yield HTTP.patch(obj);
  if (tmp.ok) {
    obj = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: tmp.body };
    outer2_1(outer2_2[5]).dispatch(obj);
    const obj2 = outer2_1(outer2_2[5]);
  }
  return tmp;
}
async function _deleteProject(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  let obj = { url: outer2_6.VIBEGRATIONS_PROJECT(arg0), rejectWithError: false };
  const tmp = yield HTTP.del(obj);
  if (tmp.ok) {
    obj = { type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: arg0 };
    outer2_1(outer2_2[5]).dispatch(obj);
    const obj2 = outer2_1(outer2_2[5]);
  }
  return tmp;
}
async function _publishProject(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  let obj = { url: outer2_6.VIBEGRATIONS_PROJECT_PUBLISH(arg0), rejectWithError: false };
  const tmp = yield HTTP.post(obj);
  if (tmp.ok) {
    const body = tmp.body;
    const application = body.application;
    obj = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: body.project };
    outer2_1(outer2_2[5]).dispatch(obj);
    const obj2 = outer2_1(outer2_2[5]);
    obj = { type: "APPLICATION_FETCH_SUCCESS", application, isHydrated: true };
    outer2_1(outer2_2[5]).dispatch(obj);
    outer2_7(application.id);
    const obj4 = outer2_1(outer2_2[5]);
  }
  return tmp;
}
async function _publishPreviewProject(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  let obj = { url: outer2_6.VIBEGRATIONS_PROJECT_PUBLISH_PREVIEW(arg0), rejectWithError: false };
  const tmp = yield HTTP.post(obj);
  if (tmp.ok) {
    const body = tmp.body;
    const application = body.application;
    obj = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: body.project };
    outer2_1(outer2_2[5]).dispatch(obj);
    const obj2 = outer2_1(outer2_2[5]);
    obj = { type: "APPLICATION_FETCH_SUCCESS", application, isHydrated: true };
    outer2_1(outer2_2[5]).dispatch(obj);
    outer2_7(application.id);
    const obj4 = outer2_1(outer2_2[5]);
  }
  return tmp;
}
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/vibegrations/actions/VibegrationsActionCreators.tsx");

export const listProjects = function listProjects() {
  return _listProjects(...arguments);
};
export const createProject = function createProject() {
  return _createProject(...arguments);
};
export const renameProject = function renameProject() {
  return _renameProject(...arguments);
};
export const setGuildHints = function setGuildHints() {
  return _setGuildHints(...arguments);
};
export const deleteProject = function deleteProject() {
  return _deleteProject(...arguments);
};
export const publishProject = function publishProject() {
  return _publishProject(...arguments);
};
export const publishPreviewProject = function publishPreviewProject(arg0) {
  return _publishPreviewProject(...arguments);
};
export const setChatSidebarWidth = function setChatSidebarWidth(width) {
  let obj = importDefault(686);
  obj = { type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width };
  obj.dispatch(obj);
};
export const setBuilderPreviewApplicationId = function setBuilderPreviewApplicationId(applicationId) {
  let obj = importDefault(686);
  obj = { type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId };
  obj.dispatch(obj);
};
