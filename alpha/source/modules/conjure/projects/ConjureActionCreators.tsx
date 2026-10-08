// Module ID: 12364
// Function ID: 12365
// Name: ConjureActionCreators
// Dependencies: [5, 6040, 1389, 11251, 1085, 5972, 584, 12365, 12366, 1294, 5119, 12377, 6933, 6842, 8281, 12378, 12379, 12381, 2]
// Exports: createProject, deleteProjectInBackground, fetchProjectLimit, markLogsSeen, refreshPublishedProject, reloadConjureProjectFrames, setBuilderPreviewApplicationId, setBuilderPreviewLandscape, setBuilderPreviewMobile, setChatSidebarWidth, setComposerDraft, setGuildHints, setProjectIcon, setSelectedProjectForGuild, trackPublishFailed, unpublishProject, updateProjectSettings

// Module 12364 (ConjureActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import ReadStateConstants from "ReadStateConstants" /* 5972 */;
import ConjureTypes from "ConjureTypes" /* 6933 */;
import UserActionCreators from "UserActionCreators" /* 8281 */;
import ConjureAnalytics from "ConjureAnalytics" /* 12365 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 12366 */;
import conjureAppInServer from "conjureAppInServer" /* 12378 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ReadStateStore from "ReadStateStore" /* 6040 */;
import UserStore from "UserStore" /* 1389 */;
import ConjureProjectStore from "ConjureProjectStore" /* 11251 */;
import size from "module_2" /* 2 */;

let PUBLIC, closure_10, closure_11, closure_18, closure_4, currentUser, projectsFetchState, resourceIds;

function reloadConjureAppFrames(application_id) {
  obj = ConjurePlatformUtilsDefault;
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
      let tmp47;
      function forgetMissingProjects() {
        return closure_1_16(...arguments);
      }
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
                closure_10 = tmp34;
                const obj5 = { type: "CONJURE_PROJECTS_FETCH_START", guildId };
                const obj6 = DispatcherDefault;
                obj6.dispatch(obj5);
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const request = { url: constants.CONJURE_PROJECTS, query: tmp47, rejectWithError: true };
                tmp47 = undefined;
                const get = HTTP.get;
                if (null != guildId) {
                  tmp47 = { guild_id: guildId };
                  const obj7 = { guild_id: guildId };
                }
                c5 = 2;
                c6 = 1;
                const obj8 = { value: get(request), done: false };
                return obj8;
              } else {
                if (null != guildId) {
                  if (guildId !== closure_10) {
                    closure_11 = tmp34;
                  }
                }
                const tmp39 = null == tmp34 && null != closure_10;
                if (tmp39) {
                  c12 = true;
                }
              }
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj9 = { type: "CONJURE_PROJECTS_FETCH_FAIL", guildId };
              const obj4 = closure_131_1(closure_131_2[6]);
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
              const obj11 = { type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: body, guildId };
              obj = closure_131_1(closure_131_2[6]);
              obj.dispatch(obj11);
              c12 = false;
              forgetMissingProjects();
              c4 = 0;
            }
            closure_2 = c11;
            c11 = null;
            if (null != closure_2) {
              if (closure_2 !== guildId) {
                closure_131_13(closure_2);
              }
            }
            const tmp27 = c12;
            if (tmp27) {
              c12 = false;
              closure_131_13();
            }
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp48) {
          if (0 === c4) {
            c6 = 3;
            throw tmp48;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _forgetMissingProjects() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      while (true) {
        let closure_2;
        let c0;
        let closure_1;
        let closure_0;
        c7 = 2;
        let tmp4 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            closure_2 = tmp4;
            c0 = undefined;
            closure_1 = undefined;
            let tmp59 = c15;
            if (!tmp59) {
              c15 = true;
              resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
              closure_0 = resourceIds[Symbol.iterator]();
              if (closure_0 !== undefined) {
                let c5 = 1;
                c0 = tmp36;
                if (null == closure_131_6.getProject(c0)) {
                  if (0 !== closure_131_4.getMentionCount(c0, closure_131_8.CONJURING_PROJECT)) {
                    let obj5 = closure_131_0(closure_131_2[10]);
                    let _Math = Math;
                    c6 = 2;
                    c7 = 1;
                    let obj6 = { value: obj5.sleep(5000 * Math.random()), done: false };
                    return obj6;
                  } else {
                    let tmp46 = closure_131_17(c0);
                  }
                }
              }
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === tmp4) {
          c5 = 0;
          closure_0.return();
          throw closure_1_4;
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_0.return();
            c7 = 3;
            let obj7 = { value, done: true };
            return obj7;
          } else if (null == closure_131_6.getProject(c0)) {
            c5 = 2;
            c6 = 4;
            c7 = 1;
            let obj8 = { value: closure_131_20(c0), done: false };
            return obj8;
          }
        } else if (3 === tmp4) {
          c5 = 1;
          closure_2 = closure_1_4;
          let obj2 = closure_131_0(closure_131_2[11]);
          closure_1 = obj2.createFailureStatus(closure_2);
          let tmp14 = 403 !== closure_1;
          if (tmp14) {
            tmp14 = 404 !== closure_1;
          }
          if (!tmp14) {
            let tmp21 = closure_131_17(c0);
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_0.return();
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c5 = 1;
        }
        c5 = 0;
      }
    }
  });
  return obj(...arguments);
};
function forgetProject(projectId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId };
  obj.dispatch(obj2);
}
obj = function _fetchProjectLimit() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let closure_0;
        let max_projects;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            closure_0 = undefined;
            max_projects = undefined;
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            let c0 = id;
            if (id == null) {
              c0 = null;
            }
            closure_0 = c0;
            if (null != c0) {
              if (closure_18 !== c0) {
                if (!ConjureProjectStore.hasFetchedProjectLimit()) {
                  closure_18 = tmp16;
                  max_projects = null;
                  c3 = 1;
                  const HTTP = HTTPUtils.HTTP;
                  const obj4 = { url: constants.CONJURE_PROJECT_LIMIT, rejectWithError: true };
                  c4 = 2;
                  c5 = 1;
                  const obj5 = { value: HTTP.get(obj4), done: false };
                  return obj5;
                }
              }
            }
          }
        } else {
          if (1 === c4) {
            c3 = 0;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            max_projects = value.body.max_projects;
            c3 = 0;
          }
          if (c18 === closure_0) {
            c18 = null;
          }
          const currentUser1 = currentUser.getCurrentUser();
          let id1;
          if (currentUser1 != null) {
            id1 = currentUser1.id;
          }
          if (id1 === closure_0) {
            const obj7 = { type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: max_projects };
            const obj6 = closure_130_1(closure_130_2[6]);
            obj6.dispatch(obj7);
          }
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp21) {
        if (0 === c3) {
          c5 = 3;
          throw tmp21;
        } else {
          c4 = 1;
        }
      }
    }
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
        obj = signal(closure_1_2[6]);
        const obj2 = { type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus };
        obj.dispatch(obj2);
      }
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj4 = { url: Endpoints.CONJURE_PROJECT(closure_0), rejectWithError: false, signal };
      value = await get(obj4);
      if (signal != null) {
        aborted = signal.aborted;
      }
      const ok = true !== aborted && value.ok;
      if (ok) {
        obj = closure_131_1(closure_131_2[6]);
        const obj7 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: value.body.project };
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
  obj = _asyncToGenerator(async (arg0) => {
    let flags = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj4;
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              body = undefined;
              flags = flags.flags;
              PUBLIC = flags;
              if (flags == null) {
                PUBLIC = ConjureTypes.ConjureProjectFlags.PUBLIC;
              }
              let num5 = 0;
              const tmp31 = PUBLIC;
              if ("guild" === flags.install_scope) {
                num5 = ConjureTypes.ConjureProjectFlags.NATIVE_APP_CHANNELS;
              }
              c5 = 1;
              const tmp34 = tmp31 | num5;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.CONJURE_PROJECTS, body: obj4, rejectWithError: false };
              const post = HTTP.post;
              obj4 = { flags: tmp34 };
              const merged = Object.assign(tmp48);
              c6 = 2;
              c7 = 1;
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (1 === c6) {
            c5 = 0;
            let closure_1 = closure_4;
            const ConjureCreateError = closure_131_0(closure_131_2[11]).ConjureCreateError;
            const obj5 = closure_131_0(closure_131_2[11]);
            const result = obj5.classifyCreateFailure(closure_1);
            const self = this;
            const self2 = this;
            const obj6 = closure_131_0(closure_131_2[11]);
            const conjureCreateError = new ConjureCreateError(result, obj6.createFailureStatus(closure_1));
            throw conjureCreateError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            c5 = 0;
            const obj9 = { type: "CONJURE_PROJECT_CREATE_SUCCESS", project: body };
            obj = closure_131_1(closure_131_2[6]);
            obj.dispatch(obj9);
            c7 = 3;
            return { value: body.id, done: true };
          }
        } catch (tmp41) {
          closure_4 = tmp41;
          if (0 === c5) {
            c7 = 3;
            throw tmp41;
          } else {
            c6 = 1;
          }
        }
      }
    })();
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
      const request = { url: Endpoints.CONJURE_PROJECT(value), body, rejectWithError: false };
      const patch = HTTP.patch;
      value = await patch(request);
      if (value.ok) {
        const obj6 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: value.body };
        obj = closure_131_1(closure_131_2[6]);
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
            obj3 = closure_131_0(closure_131_2[13]);
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
              const obj5 = { type: "CONJURE_PROJECT_DELETE_START", projectId };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              c5 = 2;
              c6 = 1;
              const obj6 = { url: Endpoints.CONJURE_PROJECT(projectId), rejectWithError: false };
              const obj7 = { value: del(obj6), done: false };
              return obj7;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const obj8 = { type: "CONJURE_PROJECT_DELETE_FAIL", projectId };
            const obj4 = closure_130_1(closure_130_2[6]);
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
            let str = "CONJURE_PROJECT_DELETE_FAIL";
            const dispatch = closure_130_1(closure_130_2[6]).dispatch;
            closure_130_1(closure_130_2[6]);
            if (value.ok) {
              str = "CONJURE_PROJECT_DELETE_SUCCESS";
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
obj = function _unpublishProject() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let alsoRemovePreviewBot = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let obj5;
      let tmp7;
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp7;
              alsoRemovePreviewBot = undefined;
              alsoRemovePreviewBot = alsoRemovePreviewBot.alsoRemovePreviewBot;
              c6 = 1;
              c7 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 1;
              const HTTP = closure_131_0(closure_131_2[9]).HTTP;
              const request = { url: closure_131_7.CONJURE_PROJECT_UNPUBLISH(closure_0), body: obj5, rejectWithError: false };
              const post = HTTP.post;
              c6 = 3;
              c7 = 1;
              obj5 = { also_remove_preview_bot: alsoRemovePreviewBot };
              const obj6 = { value: post(request), done: false };
              return obj6;
            }
          } else if (2 === c6) {
            c5 = 0;
            tmp7 = closure_131_29(closure_0);
            throw closure_4;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            tmp7 = closure_131_29;
            closure_131_29(closure_0);
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            tmp7 = closure_131_29;
            closure_131_29(closure_0);
            c7 = 3;
            return { value, done: true };
          }
        } catch (tmp22) {
          closure_4 = tmp22;
          if (0 === c5) {
            c7 = 3;
            throw tmp22;
          } else {
            c6 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function refreshConjureInstallState(projectId) {
  const project = ConjureProjectStore.getProject(projectId);
  if (null != project) {
    const promise = getProject(projectId);
    promise.catch(() => {

    });
    const fetchProfile = UserActionCreators.fetchProfile;
    UserActionCreators;
    obj = conjureAppInServer;
    const profile = fetchProfile(obj.conjureProductionBotUserId(project), { withMutualGuilds: true });
    profile.catch(() => {

    });
  }
}
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
      let obj10;
      await closure_131_20(closure_0);
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
            application_id = tmp59.preview_application_id;
          } else {
            application_id = tmp59.application_id;
          }
          if (null != application_id) {
            const obj11 = { type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: application_id };
            const obj8 = closure_131_1(closure_131_2[6]);
            obj8.dispatch(obj11);
            c4 = 3;
            c5 = 1;
            const obj12 = { value: obj10.fetchApplication(application_id), done: false };
            obj10 = closure_131_0(closure_131_2[13]);
            return obj12;
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
          const obj3 = closure_131_0(closure_131_2[16]);
          const widgetConfigs = obj3.fetchWidgetConfigs(application_id, { force: true });
          c4 = 4;
          c5 = 1;
          const obj14 = {
            value: widgetConfigs.catch(() => {

                }),
            done: false
          };
          return obj14;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        return { value, done: true };
      } else {
        const tmp6 = isPreview;
        if (tmp6) {
          const tmp11 = integration_installed && !bot_permissions_changed;
          if (tmp11) {
            obj = closure_131_0(closure_131_2[17]);
            const result = obj.reloadAppFramesAfterDeploy(application_id);
          }
        } else {
          closure_131_9(application_id);
        }
      }
      const obj16 = { isPreview };
      const obj6 = closure_131_0(closure_131_2[7]);
      obj6.trackConjureDeployed(closure_0, obj16);
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
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let c10 = null;
let c11 = null;
let c12 = false;
let c15 = false;
let c18 = null;
let result = size.fileFinishedImporting("modules/conjure/projects/ConjureActionCreators.tsx");

export const trackPublishFailed = function trackPublishFailed(projectId, message, isPreview) {
  let str;
  const tmp = ConjureAnalytics;
  const trackConjureErrored = tmp.trackConjureErrored;
  obj = { location: "publish", code: ConjureAnalytics.ConjureErrorCodes.PUBLISH_FAILED, message: "publish" + str + " failed", details: message, isPreview };
  str = "";
  if (isPreview) {
    str = "-preview";
  }
  trackConjureErrored(projectId, obj);
};
export { reloadConjureAppFrames };
export const reloadConjureProjectFrames = function reloadConjureProjectFrames(arg0) {
  const project = ConjureProjectStore.getProject(arg0);
  if (null != project) {
    const application_id = project.application_id;
    obj = ConjurePlatformUtilsDefault;
    obj.reloadAppFrames(application_id);
    let prop = project.preview_application_id;
    const tmp2 = importDefault;
    if (prop == null) {
      prop = null;
    }
    const tmp2Result = tmp2(12366);
    tmp2Result.reloadAppFrames(prop);
  }
};
export { listProjects };
export const fetchProjectLimit = function fetchProjectLimit() {
  return obj(...arguments);
};
export { getProject };
export const createProject = function createProject() {
  return obj(...arguments);
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
export const unpublishProject = function unpublishProject() {
  return obj(...arguments);
};
export { refreshConjureInstallState };
export const setSelectedProjectForGuild = function setSelectedProjectForGuild(guildId, projectId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_SELECT", guildId, projectId };
  obj.dispatch(obj2);
};
export const refreshPublishedProject = function refreshPublishedProject() {
  return obj(...arguments);
};
export const setComposerDraft = function setComposerDraft(projectId, draft) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_COMPOSER_DRAFT_SET", projectId, draft };
  obj.dispatch(obj2);
};
export const setChatSidebarWidth = function setChatSidebarWidth(width) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width };
  obj.dispatch(obj2);
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
export const markLogsSeen = function markLogsSeen(projectId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_LOGS_SEEN", projectId };
  obj.dispatch(obj2);
};
