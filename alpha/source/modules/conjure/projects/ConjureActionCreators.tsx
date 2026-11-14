// Module ID: 7329
// Function ID: 7330
// Name: ConjureActionCreators
// Dependencies: [109, 5, 7015, 1388, 7330, 7017, 1072, 6959, 4, 572, 1285, 7331, 6079, 7333, 559, 7334, 7335, 7336, 7338, 7341, 7339, 5977, 7018, 7055, 7347, 7350, 7351, 2]
// Exports: applyPublishedPreview, applyRemixPreview, clearGlobalChatProject, createProject, createRemix, deleteProjectInBackground, fetchApplicationChannels, fetchMissingConjureProjectNow, fetchProjectLimit, installConjureProjectForOwner, isConjureProjectUnavailable, loadMissingConjureProjects, makeConjureProjectPersonal, prefetchProject, refetchProjectsAfterReconnect, refreshPreviewApplication, selectGlobalChatProject, setGuildHints, setSelectedProjectForGuild, shareConjureProject, takePrefetchedRead, updateProjectSettings

// Module 7329 (ConjureActionCreators)
import logger_Logger from "logger/Logger" /* 4 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5977 */;
import ReadStateConstants from "ReadStateConstants" /* 6959 */;
import conjureProjectSockets from "conjureProjectSockets" /* 7335 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 7336 */;
import prefetchConjurePreviewFrame from "prefetchConjurePreviewFrame" /* 7338 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7339 */;
import createProxyTicket from "createProxyTicket" /* 7341 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ReadStateStore from "ReadStateStore" /* 7015 */;
import UserStore from "UserStore" /* 1388 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 7330 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c8, closure_14, closure_15, closure_30, closure_5, flags2, resourceIds;

function listProjects() {
  return obj(...arguments);
}
let obj = function _listProjects() {
  obj = _asyncToGenerator(async (guildId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj8;
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
          return { value: "HermesInternal", done: null };
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
                closure_14 = tmp40;
                const obj6 = { type: "CONJURE_PROJECTS_FETCH_START", guildId };
                const obj4 = DispatcherDefault;
                obj4.dispatch(obj6);
                c4 = 1;
                const HTTP = require("HTTPUtils").HTTP;
                const request = { url: constants.CONJURE_PROJECTS, query: obj8, rejectWithError: true };
                const get = HTTP.get;
                if (null != guildId) {
                  obj8 = { guild_id: guildId };
                  const obj7 = { guild_id: guildId };
                } else {
                  obj8 = { include_shared: true };
                }
                c5 = 2;
                c6 = 1;
                const obj9 = { value: get(request), done: false };
                return obj9;
              } else {
                if (null != guildId) {
                  if (guildId !== closure_14) {
                    closure_15 = tmp40;
                  }
                }
                const tmp45 = null == tmp40 && null != closure_14;
                if (tmp45) {
                  c16 = true;
                }
              }
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj10 = { type: "CONJURE_PROJECTS_FETCH_FAIL", guildId };
              const obj2 = closure_131_1(closure_131_2[9]);
              obj2.dispatch(obj10);
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
              const obj12 = closure_131_1(closure_131_2[9]);
              obj12.dispatch(obj11);
              closure_131_19(body.map((id) => id.id));
              c16 = false;
              forgetMissingProjects();
              c4 = 0;
            }
            closure_2 = closure_15;
            closure_15 = null;
            if (reconnectListPending.isReconnectListPending()) {
              c16 = false;
              const tmp30 = null != closure_2 && closure_2 !== guildId;
              if (tmp30) {
                closure_15 = closure_2;
              }
              closure_131_17();
            } else {
              if (null != closure_2) {
                if (closure_2 !== guildId) {
                  closure_131_17(closure_2);
                }
              }
              const tmp21 = c16;
              if (tmp21) {
                c16 = false;
                closure_131_17();
              }
            }
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp53) {
          if (0 === c4) {
            c6 = 3;
            throw tmp53;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function markParticipatingProjects(arr) {
  set = new Set(ReadStateStore.getResourceIds(ReadStateTypes.CONJURING_PROJECT));
  const found = arr.filter((item) => set.has(item));
  if (found.length > 0) {
    const obj2 = { type: "CONJURE_PARTICIPATING_PROJECTS_MARK", projectIds: found };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
}
obj = function _forgetMissingProjects() {
  let missingProjectsCheckedUserId;
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        let c1;
        let closure_2;
        let closure_0;
        c7 = 2;
        let tmp5 = c6;
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
            c1 = undefined;
            closure_2 = undefined;
            let tmp74 = currentSession();
            closure_0 = tmp74;
            let userId = tmp74.userId;
            if (null != userId) {
              if (missingProjectsCheckedUserId.getMissingProjectsCheckedUserId() !== userId) {
                let obj10 = DispatcherDefault;
                let obj7 = { type: "CONJURE_MISSING_PROJECTS_CHECK_START", userId };
                let dispatchResult = obj10.dispatch(obj7);
                resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
                closure_0 = resourceIds[Symbol.iterator]();
                if (closure_0 !== undefined) {
                  let c5 = 1;
                  c1 = tmp45;
                  if (null == closure_131_10.getProject(c1)) {
                    let obj5 = closure_131_0(closure_131_2[11]);
                    if (obj5.isConjureProjectUnread(c1)) {
                      let obj6 = closure_131_0(closure_131_2[12]);
                      let _Math = Math;
                      c6 = 2;
                      c7 = 1;
                      let obj8 = { value: obj6.sleep(5000 * Math.random()), done: false };
                      return obj8;
                    } else {
                      let tmp55 = closure_131_23(c1);
                    }
                  }
                }
              }
            }
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === tmp5) {
          c5 = 0;
          closure_0.return();
          throw closure_1_4;
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_0.return();
            c7 = 3;
            let obj9 = { value, done: true };
            return obj9;
          } else if (closure_131_22(closure_0)) {
            if (null == closure_131_10.getProject(c1)) {
              closure_2 = null;
              c5 = 2;
              c6 = 4;
              c7 = 1;
              let obj11 = { value: closure_131_40(c1, undefined, closure_0), done: false };
              return obj11;
            }
          } else {
            c5 = 0;
            closure_0.return();
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else {
          if (3 === tmp5) {
            c5 = 1;
            closure_3 = closure_1_4;
            let obj2 = closure_131_0(closure_131_2[13]);
            closure_2 = obj2.createFailureStatus(closure_3);
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
          if (closure_131_22(closure_0)) {
            if (null == closure_2) {
              let items = [c1];
              let tmp33 = closure_131_19(items);
            } else {
              let tmp23 = 403 !== closure_2;
              if (tmp23) {
                tmp23 = 404 !== closure_2;
              }
              if (!tmp23) {
                let tmp28 = closure_131_23(c1);
              }
            }
          } else {
            c5 = 0;
            closure_0.return();
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
        c5 = 0;
      }
    }
  });
  return obj(...arguments);
};
function currentSession() {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (id == null) {
    id = null;
  }
  obj = { userId: id, generation: ConjureProjectStore.getSessionGeneration() };
  return obj;
}
function isCurrentSession(generation) {
  let tmp = generation.generation === ConjureProjectStore.getSessionGeneration();
  if (tmp) {
    const userId = generation.userId;
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (id == null) {
      id = null;
    }
    tmp = userId === id;
  }
  return tmp;
}
function forgetProject(projectId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId };
  obj.dispatch(obj2);
}
function resetMissingProjectsOnUserChange() {
  let tmp = null != obj;
  if (tmp) {
    let tmp4 = obj.generation === ConjureProjectStore.getSessionGeneration();
    const tmp2 = obj;
    if (tmp4) {
      const userId = tmp2.userId;
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (id == null) {
        id = null;
      }
      tmp4 = userId === id;
    }
    tmp = tmp4;
  }
  if (!tmp) {
    const currentUser1 = UserStore.getCurrentUser();
    let id1;
    if (currentUser1 != null) {
      id1 = currentUser1.id;
    }
    if (id1 == null) {
      id1 = null;
    }
    obj = { userId: id1, generation: ConjureProjectStore.getSessionGeneration() };
    set.clear();
    set1.clear();
    set2.clear();
    closure_24.cancel();
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
    const tmp36 = currentSession();
    let closure_2 = tmp36;
    closure_30 = closure_0;
    await getProject(closure_0, undefined, tmp36);
    if (1 === c5) {
      let c4 = 0;
      const obj2 = closure_130_0(closure_130_2[13]);
      c1 = obj2.createFailureStatus(closure_3);
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
    const tmp16 = 200 === c1 || !closure_130_22(closure_2);
    let tmp19 = !tmp16;
    if (tmp19) {
      if (403 !== c1) {
        let flag;
        if (404 !== c1) {
          set.delete(closure_0);
          flag = true;
        }
        tmp19 = flag;
      }
      set2.add(closure_0);
      closure_130_23(closure_0);
      flag = false;
    }
    return tmp19;
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
          return { value: "HermesInternal", done: null };
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
            const dispatch = closure_130_1(closure_130_2[9]).dispatch;
            closure_130_1(closure_130_2[9]);
            if (closure_1) {
              str = "failed";
            }
            dispatch(obj);
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
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
        return { value: "HermesInternal", done: null };
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
            c29 = true;
            closure_0 = [];
            let closure_1 = set2;
            closure_0 = set2[Symbol.iterator]();
            if (closure_0 === undefined) {
              c29 = false;
              if (0 !== closure_0.length) {
                let failResult = closure_132_24.fail(() => {
                  for (const item10005 of closure_1_0) {
                    let addResult = set.add(item10005);
                    continue;
                  }
                  const tmp3 = closure_2_29;
                  if (!tmp3) {
                    closure_2_35();
                  }
                });
              } else {
                let succeedResult = closure_132_24.succeed();
              }
              c8 = 3;
              return { value: "HermesInternal", done: null };
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
                  let obj4 = { value: closure_132_32(c1), done: false };
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
obj = function _requestProjectLimit() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let currentUser;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let max_projects;
        let failureCode;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp4;
            max_projects = null;
            failureCode = null;
            c4 = 1;
            const HTTP = require("HTTPUtils").HTTP;
            const obj5 = { url: constants.CONJURE_PROJECT_LIMIT, rejectWithError: true };
            c5 = 2;
            c6 = 1;
            const obj6 = { value: HTTP.get(obj5), done: false };
            return obj6;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            failureCode = closure_130_1(closure_130_2[15])(closure_3);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            max_projects = value.body.max_projects;
            c4 = 0;
          }
          let userId;
          if (userId != null) {
            userId = userId.userId;
          }
          if (userId === closure_0) {
            userId = null;
          }
          currentUser = currentUser.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          if (id === closure_0) {
            const obj7 = { type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: max_projects, failureCode };
            const obj2 = closure_130_1(closure_130_2[9]);
            obj2.dispatch(obj7);
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp34) {
        closure_3 = tmp34;
        if (0 === c4) {
          c6 = 3;
          throw tmp34;
        } else {
          c5 = 1;
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
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let aborted = arg1;
    let closure_2 = arg2;
    closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let tmp31;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
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
              closure_5 = tmp2;
              let tmp22;
              closure_3 = undefined;
              body = undefined;
              const tmp33 = closure_3;
              closure_3 = startProjectRead(closure_0);
              const HTTP = require("HTTPUtils").HTTP;
              const request = { url: Endpoints.CONJURE_PROJECT(closure_0), query: tmp22, rejectWithError: false, signal: tmp31 };
              const get = HTTP.get;
              tmp31 = aborted;
              if (null != closure_3) {
                tmp22 = { ticket: tmp33 };
                const obj4 = { ticket: tmp33 };
              }
              c6 = 1;
              c7 = 1;
              const obj5 = { value: get(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            body = value;
            if (null != closure_2) {
              let tmp11;
              if (!closure_133_22(closure_2)) {
                tmp11 = body;
              }
              c7 = 3;
              return { value: tmp11, done: true };
            }
            aborted = undefined;
            if (aborted != null) {
              aborted = aborted.aborted;
            }
            if (true !== aborted) {
              closure_133_44(closure_0, body.body, closure_3);
            }
            tmp11 = body;
          }
        } catch (tmp23) {
          c7 = 3;
          throw tmp23;
        }
      }
    })();
  });
  return obj(...arguments);
};
function startProjectRead(arg0) {
  let obj1 = map1.get(arg0);
  obj = map1;
  if (obj1 == null) {
    obj1 = { started: 0, applied: 0 };
  }
  obj1.started = obj1.started + 1;
  const result = obj.set(arg0, obj1);
  return obj1.started;
}
function applyProjectRead(projectId, project, applied) {
  const value = map1.get(projectId);
  const tmp2 = null == value || applied < value.applied;
  if (!tmp2) {
    value.applied = applied;
    const obj2 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: project.project };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
    const obj5 = { bot_permissions_changed: null, integration_installed: null, preview_ready: null, has_activity: null, owner_authorization_revoked: null, preview_app_channels: null };
    ({ bot_permissions_changed: obj3.bot_permissions_changed, integration_installed: obj3.integration_installed, preview_ready: obj3.preview_ready, has_activity: obj3.has_activity, owner_authorization_revoked: obj3.owner_authorization_revoked, preview_app_channels: obj3.preview_app_channels } = project);
    const obj8 = { type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus: obj5 };
    const obj4 = DispatcherDefault;
    obj4.dispatch(obj8);
  }
}
function applyProjectChange(projectId, project) {
  let obj2 = map1.get(projectId);
  if (obj2 == null) {
    obj2 = { started: 0, applied: 0 };
  }
  obj2.started = obj2.started + 1;
  const result = obj.set(projectId, obj2);
  const started = obj2.started;
  const value2 = obj.get(projectId);
  const tmp3 = null == value2 || started < value2.applied;
  if (!tmp3) {
    value2.applied = started;
    const obj4 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: project.project };
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj4);
    const obj7 = { bot_permissions_changed: null, integration_installed: null, preview_ready: null, has_activity: null, owner_authorization_revoked: null, preview_app_channels: null };
    ({ bot_permissions_changed: obj5.bot_permissions_changed, integration_installed: obj5.integration_installed, preview_ready: obj5.preview_ready, has_activity: obj5.has_activity, owner_authorization_revoked: obj5.owner_authorization_revoked, preview_app_channels: obj5.preview_app_channels } = project);
    const obj10 = { type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus: obj7 };
    const obj6 = DispatcherDefault;
    obj6.dispatch(obj10);
  }
}
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
    const obj6 = closure_130_1(closure_130_2[9]);
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
      const obj6 = closure_130_1(closure_130_2[9]);
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
          return { value: "HermesInternal", done: null };
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
              const HTTP = require("HTTPUtils").HTTP;
              const request = { url: constants.CONJURE_PROJECTS, body: obj6, rejectWithError: false };
              const post = HTTP.post;
              obj6 = { flags: flags2 };
              const merged = Object.assign(flags);
              flags = flags.flags;
              flags2 = flags;
              if (flags == null) {
                flags2 = require("ConjureProjectTypes").ConjureProjectFlags.GUILD_COLLABORATION | require("ConjureProjectTypes").ConjureProjectFlags.PUBLIC;
              }
              c6 = 2;
              c7 = 1;
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (1 === c6) {
            c5 = 0;
            flags2 = closure_4;
            const ConjureCreateError = closure_131_0(closure_131_2[13]).ConjureCreateError;
            const obj4 = closure_131_0(closure_131_2[13]);
            const result = obj4.classifyCreateFailure(flags2);
            const self = this;
            const self2 = this;
            const obj5 = closure_131_0(closure_131_2[13]);
            const conjureCreateError = new ConjureCreateError(result, obj5.createFailureStatus(flags2));
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
              obj = closure_131_0(closure_131_2[17]);
              const result1 = obj.rememberCreatedProjectTicket(body.id, body.ws_ticket);
            }
            c5 = 0;
            c7 = 3;
            return { value: body, done: true };
          }
        } catch (tmp36) {
          closure_4 = tmp36;
          if (0 === c5) {
            c7 = 3;
            throw tmp36;
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
      const HTTP = require("HTTPUtils").HTTP;
      const request = { url: Endpoints.CONJURE_PROJECT(value), body, rejectWithError: false };
      const patch = HTTP.patch;
      value = await patch(request);
      const obj6 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: value.body };
      obj = closure_131_1(closure_131_2[9]);
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
        return { value: "HermesInternal", done: null };
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
            obj4 = require("ApplicationActionCreators");
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
            obj = closure_130_1(closure_130_2[9]);
            obj.dispatch(obj7);
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
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
        return { value: "HermesInternal", done: null };
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
        return { value: "HermesInternal", done: null };
      } catch (tmp10) {
        c1 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
obj = function _updateProjectSettings() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c4;
    let c5;
    let prop;
    let closure_1 = arg1;
    let value = tmp;
    let closure_0 = closure_1;
    project = project.getProject(closure_0);
    const tmp35 = closure_0;
    const tmp36 = closure_1;
    if (project != null) {
      prop = project.preview_application_id;
    }
    value = await patchProject(tmp35, tmp36);
    const preview_application_id = value.body.preview_application_id;
    const tmp8 = null != prop && prop !== preview_application_id;
    if (tmp8) {
      closure_131_1(closure_131_2[24])(prop);
    }
    let tmp17 = null == preview_application_id;
    if (!tmp17) {
      const tmp20 = null == closure_0.name && null == closure_0.icon && null == closure_0.description && !("cover_image" in closure_0) && null == closure_0.uses_preview_app;
      tmp17 = tmp20;
    }
    if (!tmp17) {
      const promise = closure_131_52(preview_application_id);
      promise.catch(() => {

      });
    }
    return value;
  });
  return obj(...arguments);
};
obj = function _shareConjureProject() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj4;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let body;
        let prop;
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
            closure_3 = tmp2;
            let closure_2 = tmp;
            body = undefined;
            project = project.getProject(closure_0);
            prop = undefined;
            const tmp36 = closure_0;
            const tmp37 = closure_1;
            if (project != null) {
              prop = project.preview_application_id;
            }
            const HTTP = require("HTTPUtils").HTTP;
            const request = { url: "" + Endpoints.CONJURE_PROJECT(tmp36) + "/server", body: obj4, rejectWithError: true };
            const put = HTTP.put;
            const _HermesInternal = HermesInternal;
            obj4 = { guild_id: tmp37, uses_preview_app: true };
            c4 = 1;
            c5 = 1;
            const obj5 = { value: put(request), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          body = value.body;
          const obj6 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: body };
          const obj7 = closure_131_1(closure_131_2[9]);
          obj7.dispatch(obj6);
          closure_131_62(closure_0);
          const tmp9 = null != prop && prop !== body.preview_application_id;
          if (tmp9) {
            closure_131_1(closure_131_2[24])(prop);
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp21) {
        c5 = 3;
        throw tmp21;
      }
    }
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
        return { value: "HermesInternal", done: null };
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
            const HTTP = require("HTTPUtils").HTTP;
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
          return { value: "HermesInternal", done: null };
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
              const HTTP = require("HTTPUtils").HTTP;
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
            const obj5 = closure_130_1(closure_130_2[9]);
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
            obj = closure_130_1(closure_130_2[9]);
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
obj = function _makeConjureProjectPersonal() {
  obj = _asyncToGenerator(async (arg0, value) => {
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let body;
        let prop;
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
            let c2 = 0;
            let closure_1 = tmp;
            body = undefined;
            project = project.getProject(closure_0);
            prop = undefined;
            const tmp32 = closure_0;
            if (project != null) {
              prop = project.preview_application_id;
            }
            const HTTP = require("HTTPUtils").HTTP;
            const obj4 = { url: "" + Endpoints.CONJURE_PROJECT(tmp32) + "/server", rejectWithError: true };
            const del = HTTP.del;
            const _HermesInternal = HermesInternal;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: del(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          body = value.body;
          closure_130_45(closure_0, body);
          const tmp8 = null != prop && prop !== body.project.preview_application_id;
          if (tmp8) {
            closure_130_1(closure_130_2[24])(prop);
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp20) {
        c4 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
obj = function _installConjureProjectForOwner() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_2;
        let closure_1;
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
            closure_2 = applyProjectChange;
            closure_1 = closure_0;
            const HTTP = require("HTTPUtils").HTTP;
            const obj4 = { url: "" + Endpoints.CONJURE_PROJECT(closure_0) + "/owner-install", rejectWithError: true };
            const put = HTTP.put;
            const _HermesInternal = HermesInternal;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: put(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2(closure_1, value.body);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        c4 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
function refreshConjureInstallState(id) {
  let projectId;
  _require = id;
  const project = ConjureProjectStore.getProject(id);
  if (null != project) {
    const promise = getProject(id);
    promise.catch((error) => {
      obj = { projectId, err: error };
      return logger.warn("project refresh failed", obj);
    });
    const fetchProfile = require("UserActionCreators").fetchProfile;
    require("UserActionCreators");
    obj = require("conjureAppInServer");
    const profile = fetchProfile(obj.conjureProductionBotUserId(project), { withMutualGuilds: true });
    profile.catch((error) => {
      obj = { projectId, err: error };
      return logger.warn("bot server list refresh failed", obj);
    });
  }
}
let closure_3 = ["ws_ticket", "remix_preview"];
let closure_4 = ["ws_ticket", "remix_preview"];
const Endpoints = Constants.Endpoints;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const logger = new logger_Logger.Logger("ConjureActionCreators");
let c14 = null;
let c15 = null;
let c16 = false;
let tmp3 = new BackoffDefault(30000, 300000);
let closure_24 = tmp3;
let set = new Set();
const set1 = new Set();
const set2 = new Set();
let c29 = false;
let c30 = null;
obj = null;
const map = new Map();
const map1 = new Map();
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
export function refetchProjectsAfterReconnect() {
  let result = ConjureProjectStore.isReconnectListPending();
  obj = ConjureProjectStore;
  if (result) {
    const projectsFetchState = obj.getProjectsFetchState();
    let type;
    if (projectsFetchState != null) {
      type = projectsFetchState.type;
    }
    result = "loading" !== type;
  }
  if (result) {
    listProjects();
  }
}
export { currentSession };
export { isCurrentSession };
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
      hasItem = c30 !== tmp3;
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
  const pending = c29 || closure_24.pending;
  if (!pending) {
    drainMissingProjects();
  }
}
export function fetchMissingConjureProjectNow() {
  return obj(...arguments);
}
export function fetchProjectLimit() {
  function requestProjectLimit() {
    return obj(...arguments);
  }
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (id == null) {
    id = null;
  }
  if (null != id) {
    if (!ConjureProjectStore.hasFetchedProjectLimit()) {
      let userId;
      if (obj != null) {
        userId = obj.userId;
      }
      if (userId === id) {
        return obj.settled;
      } else {
        const tmp5 = requestProjectLimit(id);
        obj = { userId: id, settled: tmp5 };
        return tmp5;
      }
    }
  }
  return Promise.resolve();
}
export function prefetchProject(projectId) {
  obj = conjureProjectSockets;
  if (null == obj.getConjureSocket(projectId)) {
    const tmpResult = ConjureWorkerTickets;
    tmpResult.prefetchWorkerTicket(projectId);
  }
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (id == null) {
    id = null;
  }
  const obj2 = { userId: id, generation: ConjureProjectStore.getSessionGeneration() };
  const promise = getProject(projectId, undefined, obj2);
  promise.catch(() => {

  });
  const obj3 = { read: promise, at: Date.now(), session: obj2 };
  const result = map.set(projectId, obj3);
  const tmpResult2 = prefetchConjurePreviewFrame;
  const result1 = tmpResult2.prefetchConjurePreviewFrame(projectId);
}
export function takePrefetchedRead(arg0) {
  const value = map.get(arg0);
  map.delete(arg0);
  let read = null;
  if (null != value) {
    const session = value.session;
    let tmp5 = session.generation === ConjureProjectStore.getSessionGeneration();
    if (tmp5) {
      const userId = session.userId;
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (id == null) {
        id = null;
      }
      tmp5 = userId === id;
    }
    read = null;
    if (tmp5) {
      const _Date = Date;
      read = null;
      if (Date.now() - value.at < 5000) {
        read = value.read;
      }
    }
  }
  return read;
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
export function shareConjureProject() {
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
export function makeConjureProjectPersonal() {
  return obj(...arguments);
}
export function installConjureProjectForOwner() {
  return obj(...arguments);
}
export { refreshConjureInstallState };
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
