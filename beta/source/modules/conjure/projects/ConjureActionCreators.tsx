// Module ID: 11413
// Function ID: 11414
// Name: ConjureActionCreators
// Dependencies: [5, 6035, 1390, 10652, 1085, 5967, 584, 1295, 11414, 5121, 11417, 569, 6947, 6853, 8301, 11409, 2]
// Exports: createProject, deleteProjectInBackground, fetchProjectLimit, loadMissingConjureProjects, refreshConjureInstallState, setGuildHints, setProjectIcon, setSelectedProjectForGuild

// Module 11413 (ConjureActionCreators)
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import ReadStateConstants from "ReadStateConstants" /* 5967 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6947 */;
import UserActionCreators from "UserActionCreators" /* 8301 */;
import conjureAppInServer from "conjureAppInServer" /* 11409 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ReadStateStore from "ReadStateStore" /* 6035 */;
import UserStore from "UserStore" /* 1390 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10652 */;
import size from "module_2" /* 2 */;

let PUBLIC, closure_10, closure_24, closure_9, projectsFetchState, resourceIds;

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
        return closure_1_15(...arguments);
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
                closure_9 = tmp34;
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
                  if (guildId !== closure_9) {
                    closure_10 = tmp34;
                  }
                }
                const tmp39 = null == tmp34 && null != closure_9;
                if (tmp39) {
                  c11 = true;
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
              c11 = false;
              forgetMissingProjects();
              c4 = 0;
            }
            closure_2 = c10;
            c10 = null;
            if (null != closure_2) {
              if (closure_2 !== guildId) {
                closure_131_12(closure_2);
              }
            }
            const tmp27 = c11;
            if (tmp27) {
              c11 = false;
              closure_131_12();
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
            let tmp59 = c14;
            if (!tmp59) {
              c14 = true;
              resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
              closure_0 = resourceIds[Symbol.iterator]();
              if (closure_0 !== undefined) {
                let c5 = 1;
                c0 = tmp36;
                if (null == closure_131_6.getProject(c0)) {
                  let obj5 = closure_131_0(closure_131_2[8]);
                  if (obj5.isConjureProjectUnread(c0)) {
                    let obj6 = closure_131_0(closure_131_2[9]);
                    let _Math = Math;
                    c6 = 2;
                    c7 = 1;
                    let obj7 = { value: obj6.sleep(5000 * Math.random()), done: false };
                    return obj7;
                  } else {
                    let tmp46 = closure_131_16(c0);
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
            let obj8 = { value, done: true };
            return obj8;
          } else if (null == closure_131_6.getProject(c0)) {
            c5 = 2;
            c6 = 4;
            c7 = 1;
            let obj9 = { value: closure_131_26(c0), done: false };
            return obj9;
          }
        } else if (3 === tmp4) {
          c5 = 1;
          closure_2 = closure_1_4;
          let obj2 = closure_131_0(closure_131_2[10]);
          closure_1 = obj2.createFailureStatus(closure_2);
          let tmp14 = 403 !== closure_1;
          if (tmp14) {
            tmp14 = 404 !== closure_1;
          }
          if (!tmp14) {
            let tmp21 = closure_131_16(c0);
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
function drainMissingProjects() {
  return obj(...arguments);
}
obj = function _drainMissingProjects() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_3;
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
        return { value: "IconComponent", done: null };
      }
    } else {
      while (true) {
        let c1;
        let num2;
        let tmp;
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
            let closure_2 = tmp2;
            c1 = undefined;
            num2 = undefined;
            tmp = undefined;
            c21 = true;
            closure_0 = [];
            let closure_1 = set1;
            closure_0 = set1[Symbol.iterator]();
            if (closure_0 === undefined) {
              c21 = false;
              if (0 !== closure_0.length) {
                let failResult = closure_131_17.fail(() => {
                  for (const item10005 of closure_1_0) {
                    let addResult = set.add(item10005);
                    continue;
                  }
                  const tmp3 = closure_2_21;
                  if (!tmp3) {
                    closure_2_22();
                  }
                });
              } else {
                let succeedResult = closure_131_17.succeed();
              }
              c7 = 3;
              return { value: "IconComponent", done: null };
            } else {
              let c5 = 1;
              c1 = tmp38;
              let deleteResult = set2.delete(c1);
              if (!set.has(c1)) {
                let addResult = set.add(c1);
                if (null == project.getProject(c1)) {
                  num2 = undefined;
                  c5 = 2;
                  c6 = 3;
                  c7 = 1;
                  let obj5 = { value: closure_131_26(c1), done: false };
                  return obj5;
                }
              }
            }
          }
        } else if (1 === tmp5) {
          c5 = 0;
          closure_0.return();
          throw ReadStateStore;
        } else {
          if (2 === tmp5) {
            c5 = 1;
            let closure_4 = ReadStateStore;
            let obj2 = closure_131_0(closure_131_2[10]);
            num2 = obj2.createFailureStatus(closure_4);
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
            tmp = value;
            num2 = 200;
            if (!tmp.ok) {
              num2 = tmp.status;
            }
            c5 = 1;
          }
          if (200 !== num2) {
            if (403 !== num2) {
              if (404 !== num2) {
                let deleteResult1 = set.delete(c1);
                let arr = closure_0.push(c1);
              }
            }
            let tmp32 = closure_131_16(c1);
          }
        }
        c5 = 0;
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
              if (closure_24 !== c0) {
                if (!ConjureProjectStore.hasFetchedProjectLimit()) {
                  closure_24 = tmp16;
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
          if (c24 === closure_0) {
            c24 = null;
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
                PUBLIC = ConjureProjectTypes.ConjureProjectFlags.PUBLIC;
              }
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.CONJURE_PROJECTS, body: obj4, rejectWithError: false };
              const post = HTTP.post;
              obj4 = { flags: PUBLIC };
              const merged = Object.assign(tmp45);
              c6 = 2;
              c7 = 1;
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (1 === c6) {
            c5 = 0;
            let closure_1 = closure_4;
            const ConjureCreateError = closure_131_0(closure_131_2[10]).ConjureCreateError;
            const obj5 = closure_131_0(closure_131_2[10]);
            const result = obj5.classifyCreateFailure(closure_1);
            const self = this;
            const self2 = this;
            const obj6 = closure_131_0(closure_131_2[10]);
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
        } catch (tmp38) {
          closure_4 = tmp38;
          if (0 === c5) {
            c7 = 3;
            throw tmp38;
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
function updateProjectSettings() {
  return obj(...arguments);
}
obj = function _updateProjectSettings() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_2;
    let closure_3;
    let icon = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj3;
      icon = value;
      await patchProject(closure_0, value);
      if (1 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          return { value, done: true };
        } else if (value.ok) {
          if (null != icon.icon) {
            const preview_application_id = value.body.preview_application_id;
            if (null != preview_application_id) {
              c4 = 1;
              c5 = 3;
              c6 = 1;
              const obj7 = { value: obj3.fetchApplication(preview_application_id), done: false };
              obj3 = closure_131_0(closure_131_2[13]);
              return obj7;
            }
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
const Endpoints = Constants.Endpoints;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let c9 = null;
let c10 = null;
let c11 = false;
let c14 = false;
const tmp2 = new BackoffDefault(30000, 300000);
let closure_17 = tmp2;
let id = null;
const set = new Set();
const set1 = new Set();
let c21 = false;
let c24 = null;
let result = size.fileFinishedImporting("modules/conjure/projects/ConjureActionCreators.tsx");

export { listProjects };
export const loadMissingConjureProjects = function loadMissingConjureProjects(arg0) {
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
    closure_17.cancel();
  }
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp10 = nextResult;
    if (!set.has(nextResult)) {
      let addResult = set1.add(tmp10);
    }
    continue;
  }
  const pending = c21 || closure_17.pending;
  if (!pending) {
    drainMissingProjects();
  }
};
export const fetchProjectLimit = function fetchProjectLimit() {
  return obj(...arguments);
};
export { getProject };
export const createProject = function createProject() {
  return obj(...arguments);
};
export { updateProjectSettings };
export const setProjectIcon = function setProjectIcon(arg0, icon) {
  obj = { icon };
  return updateProjectSettings(arg0, obj);
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
export const refreshConjureInstallState = function refreshConjureInstallState(projectId) {
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
};
export const setSelectedProjectForGuild = function setSelectedProjectForGuild(guildId, projectId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_SELECT", guildId, projectId };
  obj.dispatch(obj2);
};
