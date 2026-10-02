// Module ID: 8493
// Function ID: 8494
// Name: VibegrationsActionCreators
// Dependencies: [5, 8492, 1086, 585, 8494, 8495, 1283, 5372, 12449, 6585, 8488, 2]
// Exports: createProject, deleteProjectInBackground, markLogsSeen, refreshPublishedProject, reloadVibegrationsProjectFrames, renameProject, setBuilderPreviewApplicationId, setBuilderPreviewMobile, setChatSidebarWidth, setComposerDraft, setGuildHints, setProjectIcon, setSelectedProjectForGuild, trackPublishFailed, updateProjectSettings

// Module 8493 (VibegrationsActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5372 */;
import VibegrationsAnalytics from "VibegrationsAnalytics" /* 8494 */;
import VibegrationsPlatformUtilsDefault from "VibegrationsPlatformUtils" /* 8495 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8492 */;
import size from "module_2" /* 2 */;

let closure_7, closure_8, projectsFetchState;

function reloadVibegrationsAppFrames(application_id) {
  obj = VibegrationsPlatformUtilsDefault;
  obj.reloadAppFrames(application_id);
}
function listProjects() {
  return obj(...arguments);
}
let obj = function _listProjects() {
  obj = _asyncToGenerator(async (guildId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let tmp43;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              guildId = undefined;
              body = undefined;
              closure_2 = undefined;
              if (guildId == null) {
                guildId = null;
              }
              projectsFetchState = projectsFetchState.getProjectsFetchState();
              let type;
              if (projectsFetchState != null) {
                type = projectsFetchState.type;
              }
              if ("loading" !== type) {
                closure_7 = tmp31;
                const obj5 = { type: "VIBEGRATIONS_PROJECTS_FETCH_START", guildId };
                const obj6 = DispatcherDefault;
                obj6.dispatch(obj5);
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const request = { url: constants.VIBEGRATIONS_PROJECTS, query: tmp43, rejectWithError: true };
                tmp43 = undefined;
                const get = HTTP.get;
                if (null != guildId) {
                  tmp43 = { guild_id: guildId };
                  const obj7 = { guild_id: guildId };
                }
                c5 = 2;
                c6 = 1;
                const obj8 = { value: get(request), done: false };
                return obj8;
              } else {
                const tmp35 = null != tmp31 && tmp31 !== closure_7;
                if (tmp35) {
                  closure_8 = tmp31;
                }
              }
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj9 = { type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL", guildId };
              const obj4 = closure_131_1(closure_131_2[3]);
              obj4.dispatch(obj9);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              body = value.body;
              const obj11 = { type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: body, guildId };
              obj = closure_131_1(closure_131_2[3]);
              obj.dispatch(obj11);
              c4 = 0;
            }
            closure_2 = c8;
            c8 = null;
            const tmp22 = null != closure_2 && closure_2 !== guildId;
            if (tmp22) {
              closure_131_9(closure_2);
            }
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp44) {
          if (0 === c4) {
            c6 = 3;
            throw tmp44;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function getProject() {
  return obj(...arguments);
}
obj = function _getProject() {
  obj = _asyncToGenerator(async (arg0, signal) => {
    let closure_3;
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let aborted;
      function updateIntegrationStatus(projectId, integrationStatus) {
        obj = signal(closure_1_2[3]);
        const obj2 = { type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus };
        obj.dispatch(obj2);
      }
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj4 = { url: Endpoints.VIBEGRATIONS_PROJECT(closure_0), rejectWithError: false, signal };
      value = await get(obj4);
      if (signal != null) {
        aborted = signal.aborted;
      }
      const ok = true !== aborted && value.ok;
      if (ok) {
        obj = closure_131_1(closure_131_2[3]);
        const obj7 = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: value.body.project };
        obj.dispatch(obj7);
        const obj8 = { bot_permissions_changed: value.body.bot_permissions_changed, integration_installed: value.body.integration_installed, preview_ready: value.body.preview_ready, has_activity: value.body.has_activity, owner_authorization_revoked: value.body.owner_authorization_revoked };
        updateIntegrationStatus(closure_0, obj8);
      }
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _createProject() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj4;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let closure_1;
        let body;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            body = undefined;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.VIBEGRATIONS_PROJECTS, body: obj4, rejectWithError: false };
            obj4 = { flags: VibegrationsTypes.VibegrationsProjectFlags.PUBLIC };
            const post = HTTP.post;
            const merged = Object.assign(closure_0);
            c5 = 2;
            c6 = 1;
            const obj7 = { value: post(request), done: false };
            return obj7;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_1 = closure_3;
          const VibegrationsCreateError = closure_130_0(closure_130_2[8]).VibegrationsCreateError;
          const obj5 = closure_130_0(closure_130_2[8]);
          const result = obj5.classifyCreateFailure(closure_1);
          const self = this;
          const self2 = this;
          const obj6 = closure_130_0(closure_130_2[8]);
          const vibegrationsCreateError = new VibegrationsCreateError(result, obj6.createFailureStatus(closure_1));
          throw vibegrationsCreateError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          body = value.body;
          c4 = 0;
          const obj9 = { type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: body };
          obj = closure_130_1(closure_130_2[3]);
          obj.dispatch(obj9);
          c6 = 3;
          const obj10 = { value: body.id, done: true };
          return obj10;
        }
      } catch (tmp29) {
        closure_3 = tmp29;
        if (0 === c4) {
          c6 = 3;
          throw tmp29;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function patchProject() {
  return obj(...arguments);
}
obj = function _patchProject() {
  obj = _asyncToGenerator(async (value, body) => {
    let closure_2;
    let closure_3;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.VIBEGRATIONS_PROJECT(value), body, rejectWithError: false };
      const patch = HTTP.patch;
      value = await patch(request);
      if (value.ok) {
        const obj6 = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: value.body };
        obj = closure_131_1(closure_131_2[3]);
        obj.dispatch(obj6);
      }
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _setProjectIcon() {
  obj = _asyncToGenerator(async (value, icon) => {
    let closure_2;
    let closure_3;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj3;
      const obj5 = { icon };
      await patchProject(value, obj5);
      if (1 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          return { value, done: true };
        } else if (value.ok) {
          const preview_application_id = value.body.preview_application_id;
          if (null != preview_application_id) {
            c4 = 1;
            c5 = 3;
            c6 = 1;
            const obj8 = { value: obj3.fetchApplication(preview_application_id), done: false };
            obj3 = closure_131_0(closure_131_2[9]);
            return obj8;
          }
        }
      } else if (2 === c5) {
        c4 = 0;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        return { value, done: true };
      } else {
        c4 = 0;
      }
      return value;
    })();
  });
  return obj(...arguments);
};
function deleteProject() {
  return obj(...arguments);
}
obj = function _deleteProject() {
  obj = _asyncToGenerator(async (projectId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              value = undefined;
              const obj5 = { type: "VIBEGRATIONS_PROJECT_DELETE_START", projectId };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              c5 = 2;
              c6 = 1;
              const obj6 = { url: Endpoints.VIBEGRATIONS_PROJECT(projectId), rejectWithError: false };
              const obj7 = { value: del(obj6), done: false };
              return obj7;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const obj8 = { type: "VIBEGRATIONS_PROJECT_DELETE_FAIL", projectId };
            const obj4 = closure_130_1(closure_130_2[3]);
            obj4.dispatch(obj8);
            throw closure_2;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            c4 = 0;
            let str = "VIBEGRATIONS_PROJECT_DELETE_FAIL";
            const dispatch = closure_130_1(closure_130_2[3]).dispatch;
            closure_130_1(closure_130_2[3]);
            if (value.ok) {
              str = "VIBEGRATIONS_PROJECT_DELETE_SUCCESS";
            }
            obj = { type: str, projectId };
            dispatch(obj);
            c6 = 3;
            return { value, done: true };
          }
        } catch (tmp23) {
          closure_3 = tmp23;
          if (0 === c4) {
            c6 = 3;
            throw tmp23;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _refreshPublishedProject() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_2;
    let closure_3;
    let closure_0 = arg0;
    let isPreview = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let application_id;
      let bot_permissions_changed;
      let integration_installed;
      let obj7;
      await closure_131_11(closure_0);
      if (2 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        } else {
          const body = value.body;
          bot_permissions_changed = body.bot_permissions_changed;
          integration_installed = body.integration_installed;
          const project = body.project;
          if (isPreview) {
            application_id = tmp52.preview_application_id;
          } else {
            application_id = tmp52.application_id;
          }
          if (null != application_id) {
            c4 = 3;
            c5 = 1;
            const obj10 = { value: obj7.fetchApplication(application_id), done: false };
            obj7 = closure_131_0(closure_131_2[9]);
            return obj10;
          }
        }
      } else if (3 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        } else {
          const obj2 = closure_131_0(closure_131_2[10]);
          const widgetConfigs = obj2.fetchWidgetConfigs(application_id, { force: true });
          c4 = 4;
          c5 = 1;
          const obj12 = {
            value: widgetConfigs.catch(() => {

                }),
            done: false
          };
          return obj12;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        return { value, done: true };
      } else {
        let tmp7 = !isPreview;
        if (!tmp7) {
          tmp7 = integration_installed && !bot_permissions_changed;
          const tmp9 = integration_installed && !bot_permissions_changed;
        }
        if (tmp7) {
          closure_131_6(application_id);
        }
      }
      const obj13 = { isPreview };
      const obj5 = closure_131_0(closure_131_2[4]);
      const result = obj5.trackVibegrationDeployed(closure_0, obj13);
      await "IconComponent";
      isPreview = isPreview.isPreview;
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let c7 = null;
let c8 = null;
let result = size.fileFinishedImporting("modules/vibegrations/actions/VibegrationsActionCreators.tsx");

export const trackPublishFailed = function trackPublishFailed(projectId, message, isPreview) {
  let str;
  const tmp = VibegrationsAnalytics;
  const trackVibegrationErrored = tmp.trackVibegrationErrored;
  obj = { location: "publish", code: VibegrationsAnalytics.VibegrationErrorCodes.PUBLISH_FAILED, message: "publish" + str + " failed", details: message, isPreview };
  str = "";
  if (isPreview) {
    str = "-preview";
  }
  const result = trackVibegrationErrored(projectId, obj);
};
export { reloadVibegrationsAppFrames };
export const reloadVibegrationsProjectFrames = function reloadVibegrationsProjectFrames(arg0) {
  const project = VibegrationsProjectStore.getProject(arg0);
  if (null != project) {
    const application_id = project.application_id;
    obj = VibegrationsPlatformUtilsDefault;
    obj.reloadAppFrames(application_id);
    let prop = project.preview_application_id;
    const tmp2 = importDefault;
    if (prop == null) {
      prop = null;
    }
    const tmp2Result = tmp2(8495);
    tmp2Result.reloadAppFrames(prop);
  }
};
export { listProjects };
export { getProject };
export const createProject = function createProject() {
  return obj(...arguments);
};
export const renameProject = function renameProject(projectId, name) {
  obj = { name };
  return patchProject(projectId, obj);
};
export const updateProjectSettings = function updateProjectSettings(first2, arg1) {
  return patchProject(first2, arg1);
};
export const setProjectIcon = function setProjectIcon() {
  return obj(...arguments);
};
export const setGuildHints = function setGuildHints(first2, arg1) {
  return patchProject(first2, arg1);
};
export { deleteProject };
export const deleteProjectInBackground = function deleteProjectInBackground(id, arg1) {
  let closure_0 = arg1;
  const promise = deleteProject(id);
  promise.then((ok) => {
    if (!ok.ok) {
      closure_0();
    }
  }, arg1);
};
export const setSelectedProjectForGuild = function setSelectedProjectForGuild(guildId, projectId) {
  obj = DispatcherDefault;
  const obj2 = { type: "VIBEGRATIONS_PROJECT_SELECT", guildId, projectId };
  obj.dispatch(obj2);
};
export const refreshPublishedProject = function refreshPublishedProject() {
  return obj(...arguments);
};
export const setComposerDraft = function setComposerDraft(projectId, draft) {
  obj = DispatcherDefault;
  const obj2 = { type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId, draft };
  obj.dispatch(obj2);
};
export const setChatSidebarWidth = function setChatSidebarWidth(width) {
  obj = DispatcherDefault;
  const obj2 = { type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width };
  obj.dispatch(obj2);
};
export const setBuilderPreviewApplicationId = function setBuilderPreviewApplicationId(applicationId) {
  obj = DispatcherDefault;
  const obj2 = { type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId };
  obj.dispatch(obj2);
};
export const setBuilderPreviewMobile = function setBuilderPreviewMobile(enabled) {
  obj = DispatcherDefault;
  const obj2 = { type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled };
  obj.dispatch(obj2);
};
export const markLogsSeen = function markLogsSeen(projectId) {
  obj = DispatcherDefault;
  const obj2 = { type: "VIBEGRATIONS_LOGS_SEEN", projectId };
  obj.dispatch(obj2);
};
