// Module ID: 10832
// Function ID: 10833
// Name: ConjureActionCreators
// Dependencies: [109, 5, 6829, 1389, 10833, 6831, 1084, 6763, 584, 1294, 10834, 5760, 10836, 569, 10831, 10837, 10839, 10842, 10840, 5664, 6832, 6868, 8710, 10843, 2]
// Exports: applyPublishedPreview, applyRemixPreview, clearGlobalChatProject, createProject, createRemix, deleteProjectInBackground, fetchApplicationChannels, fetchMissingConjureProjectNow, fetchProjectLimit, isConjureProjectUnavailable, loadMissingConjureProjects, prefetchProject, refreshConjureInstallState, refreshPreviewApplication, selectGlobalChatProject, setGuildHints, setSelectedProjectForGuild, takePrefetchedRead, updateProjectSettings

// Module 10832 (ConjureActionCreators)
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5664 */;
import ReadStateConstants from "ReadStateConstants" /* 6763 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6832 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6868 */;
import UserActionCreators from "UserActionCreators" /* 8710 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10831 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10837 */;
import conjurePreviewTicket from "conjurePreviewTicket" /* 10839 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10840 */;
import createProxyTicket from "createProxyTicket" /* 10842 */;
import conjureAppInServer from "conjureAppInServer" /* 10843 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ReadStateStore from "ReadStateStore" /* 6829 */;
import UserStore from "UserStore" /* 1389 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 10833 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
import size from "module_2" /* 2 */;

let GUILD_COLLABORATION, c2, c8, closure_14, closure_15, closure_28, closure_35, projectsFetchState, resourceIds;

function updateIntegrationStatus(projectId, integrationStatus) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus };
  obj.dispatch(obj2);
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
        return closure_1_20(...arguments);
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
          return { value: "IconComponent", done: "IconComponent" };
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
                closure_14 = tmp34;
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
                  if (guildId !== closure_14) {
                    closure_15 = tmp34;
                  }
                }
                const tmp39 = null == tmp34 && null != closure_14;
                if (tmp39) {
                  c16 = true;
                }
              }
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj9 = { type: "CONJURE_PROJECTS_FETCH_FAIL", guildId };
              const obj4 = closure_131_1(closure_131_2[8]);
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
              obj = closure_131_1(closure_131_2[8]);
              obj.dispatch(obj11);
              c16 = false;
              forgetMissingProjects();
              c4 = 0;
            }
            closure_2 = c15;
            c15 = null;
            if (null != closure_2) {
              if (closure_2 !== guildId) {
                closure_131_17(closure_2);
              }
            }
            const tmp27 = c16;
            if (tmp27) {
              c16 = false;
              closure_131_17();
            }
          }
          c6 = 3;
          return { value: "IconComponent", done: "IconComponent" };
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
        return { value: "IconComponent", done: "IconComponent" };
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
            closure_3 = tmp;
            closure_2 = tmp4;
            c0 = undefined;
            closure_1 = undefined;
            let tmp59 = c19;
            if (!tmp59) {
              c19 = true;
              resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
              closure_0 = resourceIds[Symbol.iterator]();
              if (closure_0 !== undefined) {
                let c5 = 1;
                c0 = tmp36;
                if (null == closure_131_10.getProject(c0)) {
                  let obj5 = closure_131_0(closure_131_2[10]);
                  if (obj5.isConjureProjectUnread(c0)) {
                    let obj6 = closure_131_0(closure_131_2[11]);
                    let _Math = Math;
                    c6 = 2;
                    c7 = 1;
                    let obj7 = { value: obj6.sleep(5000 * Math.random()), done: false };
                    return obj7;
                  } else {
                    let tmp46 = closure_131_21(c0);
                  }
                }
              }
            }
            c7 = 3;
            return { value: "IconComponent", done: "IconComponent" };
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
            let obj8 = { value, done: true };
            return obj8;
          } else if (null == closure_131_10.getProject(c0)) {
            c5 = 2;
            c6 = 4;
            c7 = 1;
            let obj9 = { value: closure_131_38(c0), done: false };
            return obj9;
          }
        } else if (3 === tmp4) {
          c5 = 1;
          closure_2 = closure_1_4;
          let obj2 = closure_131_0(closure_131_2[12]);
          closure_1 = obj2.createFailureStatus(closure_2);
          let tmp14 = 403 !== closure_1;
          if (tmp14) {
            tmp14 = 404 !== closure_1;
          }
          if (!tmp14) {
            let tmp21 = closure_131_21(c0);
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
function resetMissingProjectsOnUserChange() {
  const currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (id == null) {
    id = null;
  }
  if (id !== id) {
    set.clear();
    set1.clear();
    set2.clear();
    closure_22.cancel();
  }
}
function fetchMissingProject() {
  return obj(...arguments);
}
obj = function _fetchMissingProject() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c1;
    let closure_1;
    let closure_0 = arg0;
    let closure_2 = tmp;
    closure_28 = closure_0;
    await getProject(closure_0);
    if (1 === c5) {
      let c4 = 0;
      closure_2 = closure_3;
      const obj2 = closure_130_0(closure_130_2[12]);
      c1 = obj2.createFailureStatus(closure_2);
    } else if (arg0 === 1) {
      let c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      c1 = 200;
      c4 = 0;
    }
    let tmp16 = 200 !== c1;
    if (tmp16) {
      if (403 !== c1) {
        let flag;
        if (404 !== c1) {
          set.delete(closure_0);
          flag = true;
        }
        tmp16 = flag;
      }
      set2.add(closure_0);
      closure_130_21(closure_0);
      flag = false;
    }
    return tmp16;
  });
  return obj(...arguments);
};
obj = function _fetchMissingConjureProjectNow() {
  let projectLoadStatus;
  obj = _asyncToGenerator(async (projectId) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let str;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = undefined;
              if ("loading" !== projectLoadStatus.getProjectLoadStatus(projectId)) {
                resetMissingProjectsOnUserChange();
                set2.delete(projectId);
                set.add(projectId);
                const obj5 = { type: "CONJURE_PROJECT_LOAD_STATUS", projectId, status: "loading" };
                const obj3 = DispatcherDefault;
                obj3.dispatch(obj5);
                c3 = 1;
                c4 = 1;
                const obj6 = { value: fetchMissingProject(projectId), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            closure_1 = value;
            obj = { type: "CONJURE_PROJECT_LOAD_STATUS", projectId, status: str };
            str = null;
            const dispatch = closure_130_1(closure_130_2[8]).dispatch;
            closure_130_1(closure_130_2[8]);
            if (closure_1) {
              str = "failed";
            }
            dispatch(obj);
          }
          c4 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        } catch (tmp24) {
          c4 = 3;
          throw tmp24;
        }
      }
    })();
  });
  return obj(...arguments);
};
function drainMissingProjects() {
  return obj(...arguments);
}
obj = function _drainMissingProjects() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let tmp;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      while (true) {
        let c1;
        let closure_0;
        let closure_2;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp;
            closure_3 = tmp2;
            c1 = undefined;
            c27 = true;
            closure_0 = [];
            let closure_1 = set2;
            closure_0 = set2[Symbol.iterator]();
            if (closure_0 === undefined) {
              c27 = false;
              if (0 !== closure_0.length) {
                let failResult = closure_132_22.fail(() => {
                  for (const item10005 of closure_1_0) {
                    let addResult = set.add(item10005);
                    continue;
                  }
                  const tmp3 = closure_2_27;
                  if (!tmp3) {
                    closure_2_33();
                  }
                });
              } else {
                let succeedResult = closure_132_22.succeed();
              }
              c8 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            } else {
              let c6 = 1;
              c1 = tmp12;
              let deleteResult = set2.delete(c1);
              if (!set.has(c1)) {
                let addResult = set.add(c1);
                let tmp20 = null == project.getProject(c1);
                closure_2 = tmp20;
                if (closure_2) {
                  c7 = 2;
                  c8 = 1;
                  let obj4 = { value: closure_132_30(c1), done: false };
                  return obj4;
                }
              }
              c6 = 0;
            }
          }
        } else if (1 === tmp5) {
          c6 = 0;
          closure_0.return();
          throw _objectWithoutProperties;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          closure_0.return();
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = value;
        }
        let tmp21 = closure_2;
        if (tmp21) {
          let arr = closure_0.push(c1);
        }
      }
    }
  });
  return obj(...arguments);
};
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
        return { value: "IconComponent", done: "IconComponent" };
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
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            let c0 = id;
            if (id == null) {
              c0 = null;
            }
            closure_0 = c0;
            if (null != c0) {
              if (closure_35 !== c0) {
                if (!ConjureProjectStore.hasFetchedProjectLimit()) {
                  closure_35 = tmp16;
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
          if (c35 === closure_0) {
            c35 = null;
          }
          const currentUser1 = currentUser.getCurrentUser();
          let id1;
          if (currentUser1 != null) {
            id1 = currentUser1.id;
          }
          if (id1 === closure_0) {
            const obj7 = { type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: max_projects };
            const obj6 = closure_130_1(closure_130_2[8]);
            obj6.dispatch(obj7);
          }
        }
        c5 = 3;
        return { value: "IconComponent", done: "IconComponent" };
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
  obj = _asyncToGenerator(async (arg0, signal, arg2) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj4 = { url: Endpoints.CONJURE_PROJECT(closure_0), rejectWithError: false, signal };
      value = await get(obj4);
      let tmp13 = undefined !== closure_2;
      if (tmp13) {
        const currentUser = closure_132_8.getCurrentUser();
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        tmp13 = id !== closure_2;
      }
      if (!tmp13) {
        let aborted;
        if (signal != null) {
          aborted = signal.aborted;
        }
        if (true !== aborted) {
          const obj8 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: value.body.project };
          const obj6 = closure_132_1(closure_132_2[8]);
          obj6.dispatch(obj8);
          const obj9 = { bot_permissions_changed: value.body.bot_permissions_changed, integration_installed: value.body.integration_installed, preview_ready: value.body.preview_ready, has_activity: value.body.has_activity, owner_authorization_revoked: value.body.owner_authorization_revoked, preview_app_channels: value.body.preview_app_channels };
          closure_132_13(closure_0, obj9);
        }
      }
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _createProject() {
  obj = _asyncToGenerator(async (arg0) => {
    let c3;
    let c4;
    let closure_2;
    let closure_0 = arg0;
    closure_0 = await postProject(closure_0);
    const ws_ticket = closure_0.ws_ticket;
    const remix_preview = closure_0.remix_preview;
    const project = closure_130_5(closure_0, closure_130_3);
    const obj7 = { type: "CONJURE_PROJECT_CREATE_SUCCESS", project };
    const obj6 = closure_130_1(closure_130_2[8]);
    obj6.dispatch(obj7);
    return project.id;
  });
  return obj(...arguments);
};
obj = function _createRemix() {
  obj = _asyncToGenerator(async (value) => {
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      value = await postProject(value);
      const ws_ticket = value.ws_ticket;
      const remix_preview = value.remix_preview;
      project = closure_130_5(value, closure_130_4);
      const obj7 = { type: "CONJURE_PROJECT_CREATE_SUCCESS", project };
      const obj6 = closure_130_1(closure_130_2[8]);
      obj6.dispatch(obj7);
      return value;
    })();
  });
  return obj(...arguments);
};
function postProject() {
  return obj(...arguments);
}
obj = function _postProject() {
  obj = _asyncToGenerator(async (arg0) => {
    let flags = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj6;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
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
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.CONJURE_PROJECTS, body: obj6, rejectWithError: false };
              const post = HTTP.post;
              obj6 = { flags: GUILD_COLLABORATION };
              const merged = Object.assign(flags);
              flags = flags.flags;
              GUILD_COLLABORATION = flags;
              if (flags == null) {
                GUILD_COLLABORATION = ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION;
              }
              c6 = 2;
              c7 = 1;
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (1 === c6) {
            c5 = 0;
            let closure_1 = closure_4;
            const ConjureCreateError = closure_131_0(closure_131_2[12]).ConjureCreateError;
            const obj4 = closure_131_0(closure_131_2[12]);
            const result = obj4.classifyCreateFailure(closure_1);
            const self = this;
            const self2 = this;
            const obj5 = closure_131_0(closure_131_2[12]);
            const conjureCreateError = new ConjureCreateError(result, obj5.createFailureStatus(closure_1));
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
            if (null != body.ws_ticket) {
              obj = closure_131_0(closure_131_2[15]);
              const result1 = obj.rememberCreatedProjectTicket(body.id, body.ws_ticket);
            }
            c5 = 0;
            c7 = 3;
            return { value: body, done: true };
          }
        } catch (tmp34) {
          closure_4 = tmp34;
          if (0 === c5) {
            c7 = 3;
            throw tmp34;
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
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.CONJURE_PROJECT(value), body, rejectWithError: false };
      const patch = HTTP.patch;
      value = await patch(request);
      const obj6 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: value.body };
      obj = closure_131_1(closure_131_2[8]);
      obj.dispatch(obj6);
      return value;
    })();
  });
  return obj(...arguments);
};
function fetchConjureApplication() {
  return obj(...arguments);
}
obj = function _fetchConjureApplication() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj4;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let bot;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            bot = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj4.fetchApplication(closure_0), done: false };
            obj4 = ApplicationActionCreators;
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          bot = value.bot;
          if (null != bot) {
            const obj7 = { type: "USER_UPDATE", user: bot };
            obj = closure_130_1(closure_130_2[8]);
            obj.dispatch(obj7);
          }
          c4 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp17) {
        c4 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
obj = function _refreshPreviewApplication() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            project = project.getProject(closure_0);
            let prop;
            if (project != null) {
              prop = project.preview_application_id;
            }
            if (null != prop) {
              c2 = 1;
              c1 = 1;
              const obj4 = { value: fetchConjureApplication(prop), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      } catch (tmp10) {
        c1 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
obj = function _updateProjectSettings() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_2;
    let user = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      user = value;
      value = await patchProject(closure_0, value);
      const preview_application_id = value.body.preview_application_id;
      let tmp14 = null == preview_application_id;
      if (!tmp14) {
        tmp14 = null == user.name && null == user.icon && null == user.description && !("cover_image" in user);
        const tmp7 = null == user.name && null == user.icon && null == user.description && !("cover_image" in user);
      }
      if (!tmp14) {
        const promise = closure_131_46(preview_application_id);
        promise.catch(() => {

        });
      }
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _fetchApplicationChannels() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      let c3;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.CONJURE_APPLICATION_CHANNELS(closure_0), rejectWithError: true };
            const get = HTTP.get;
            c2 = 2;
            c1 = 1;
            const obj5 = { value: get(obj4), done: false };
            return obj5;
          }
        } else if (1 === tmp3) {
          c3 = 0;
          c1 = 3;
          const obj6 = { value: [], done: true };
          return obj6;
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c1 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c3 = 0;
          c1 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp8) {
        if (0 === c3) {
          c1 = 3;
          throw tmp8;
        } else {
          c2 = 1;
        }
      }
    }
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
          return { value: "IconComponent", done: "IconComponent" };
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
              const obj4 = { type: "CONJURE_PROJECT_DELETE_START", projectId };
              const obj10 = DispatcherDefault;
              obj10.dispatch(obj4);
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
            const obj5 = closure_130_1(closure_130_2[8]);
            obj5.dispatch(obj8);
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
            const obj11 = { type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId };
            obj = closure_130_1(closure_130_2[8]);
            obj.dispatch(obj11);
            c6 = 3;
            return { value, done: true };
          }
        } catch (tmp20) {
          closure_3 = tmp20;
          if (0 === c4) {
            c6 = 3;
            throw tmp20;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
let closure_3 = ["ws_ticket", "remix_preview"];
let closure_4 = ["ws_ticket", "remix_preview"];
const Endpoints = Constants.Endpoints;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let c14 = null;
let c15 = null;
let c16 = false;
let c19 = false;
const tmp2 = new BackoffDefault(30000, 300000);
let closure_22 = tmp2;
let id = null;
const set = new Set();
const set1 = new Set();
const set2 = new Set();
let c27 = false;
let c28 = null;
let c35 = null;
const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/projects/ConjureActionCreators.tsx");

export function applyPublishedPreview(projectId, arg1) {
  let botPermissionsChanged;
  let hasActivity;
  let integrationInstalled;
  let obj4;
  let project;
  ({ project, hasActivity, integrationInstalled, botPermissionsChanged } = arg1);
  obj = DispatcherDefault;
  obj.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project });
  let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
  if (integrationStatus == null) {
    integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(projectId);
  }
  let flag;
  if (integrationStatus != null) {
    flag = integrationStatus.owner_authorization_revoked;
  }
  if (flag == null) {
    flag = false;
  }
  let preview_app_channels;
  const obj2 = { owner_authorization_revoked: flag, preview_ready: true, has_activity: hasActivity, integration_installed: integrationInstalled, bot_permissions_changed: botPermissionsChanged };
  if (integrationStatus != null) {
    preview_app_channels = integrationStatus.preview_app_channels;
  }
  if (null != preview_app_channels) {
    obj4 = { preview_app_channels: integrationStatus.preview_app_channels };
    const obj3 = { preview_app_channels: integrationStatus.preview_app_channels };
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  const obj5 = { type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus: obj2 };
  const tmpResult = DispatcherDefault;
  tmpResult.dispatch(obj5);
}
export { listProjects };
export function isConjureProjectUnavailable(projectId) {
  const hasItem = set1.has(projectId) && null == ConjureProjectStore.getProject(projectId);
  return hasItem;
}
export function loadMissingConjureProjects(items) {
  resetMissingProjectsOnUserChange();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    obj = set;
    let hasItem = set.has(nextResult);
    if (hasItem) {
      hasItem = !set1.has(tmp3);
    }
    if (hasItem) {
      hasItem = c28 !== tmp3;
    }
    if (hasItem) {
      hasItem = null == ConjureProjectStore.getProject(tmp3);
    }
    if (hasItem) {
      let deleteResult = obj.delete(tmp3);
    }
    if (!obj.has(tmp3)) {
      let addResult = set2.add(tmp3);
    }
    continue;
  }
  const pending = c27 || closure_22.pending;
  if (!pending) {
    drainMissingProjects();
  }
}
export function fetchMissingConjureProjectNow() {
  return obj(...arguments);
}
export function fetchProjectLimit() {
  return obj(...arguments);
}
export function prefetchProject(projectId) {
  obj = conjureProjectSockets;
  if (null == obj.getConjureSocket(projectId)) {
    const tmpResult = ConjureWorkerTickets;
    tmpResult.prefetchWorkerTicket(projectId);
  }
  const currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (id == null) {
    id = null;
  }
  const promise = getProject(projectId, undefined, id);
  promise.catch(() => {

  });
  const obj2 = { read: promise, at: Date.now(), userId: id };
  const result = map.set(projectId, obj2);
  const tmpResult2 = conjurePreviewTicket;
  const result1 = tmpResult2.prefetchConjurePreviewTicket(projectId);
}
export function takePrefetchedRead(arg0) {
  const value = map.get(arg0);
  map.delete(arg0);
  let tmp3 = null;
  if (null != value) {
    const userId = value.userId;
    const currentUser = UserStore.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (id == null) {
      id = null;
    }
    tmp3 = null;
    if (userId === id) {
      const _Date = Date;
      let read = null;
      if (Date.now() - value.at < 5000) {
        read = value.read;
      }
      tmp3 = read;
    }
  }
  return tmp3;
}
export { getProject };
export function createProject() {
  return obj(...arguments);
}
export function createRemix() {
  return obj(...arguments);
}
export function applyRemixPreview(id, remix_preview) {
  let str;
  obj = DispatcherDefault;
  const obj2 = { type: "APPLICATION_FETCH_SUCCESS", application: remix_preview.application, isHydrated: true };
  obj.dispatch(obj2);
  if (null != remix_preview.proxy_ticket) {
    const proxy_ticket = remix_preview.proxy_ticket;
    const rememberProxyTicket = createProxyTicket.rememberProxyTicket;
    id = remix_preview.application.id;
    rememberProxyTicket(proxy_ticket, id, conjurePreviewSurface.CONJURE_UNKNOWN_CHANNEL, EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL);
  }
  const obj4 = { type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: id, integrationStatus: { preview_ready: true, has_activity: remix_preview.has_activity, preview_app_channels: remix_preview.preview_app_channels, integration_installed: false, bot_permissions_changed: false, owner_authorization_revoked: false } };
  const tmpResult = DispatcherDefault;
  tmpResult.dispatch(obj4);
  const obj5 = { type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId: id, publishState: "not_live", surface: str, previewAppChannels: remix_preview.preview_app_channels };
  str = null;
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  if (remix_preview.has_activity) {
    str = "activity";
  }
  dispatch(obj5);
}
export { fetchConjureApplication };
export function refreshPreviewApplication() {
  return obj(...arguments);
}
export function updateProjectSettings() {
  return obj(...arguments);
}
export function setGuildHints(first2, arg1) {
  return patchProject(first2, arg1);
}
export function fetchApplicationChannels() {
  return obj(...arguments);
}
export { deleteProject };
export function deleteProjectInBackground(id, arg1) {
  const promise = deleteProject(id);
  promise.then(() => {

  }, arg1);
}
export function refreshConjureInstallState(projectId) {
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
export function setSelectedProjectForGuild(guildId, projectId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_SELECT", guildId, projectId };
  obj.dispatch(obj2);
}
export function selectGlobalChatProject(projectId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_GLOBAL_SELECT", projectId };
  obj.dispatch(obj2);
}
export function clearGlobalChatProject(projectId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_GLOBAL_CLEAR", projectId };
  obj.dispatch(obj2);
}
