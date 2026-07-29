// Module ID: 5685
// Function ID: 5686
// Name: reloadActivityIfRunning
// Dependencies: [5, 5686, 5683, 676, 5693, 709, 530, 2]
// Exports: createProject, deleteProject, listProjects, publishPreviewProject, publishProject, renameProject, setBuilderPreviewApplicationId, setChatSidebarWidth, setGuildHints, setSelectedProjectForGuild

// Module 5685 (reloadActivityIfRunning)
import dispatcher from "dispatcher";
import map from "map";
import handleProjectUpsert from "handleProjectUpsert";
import { Endpoints } from "ME";

const require = arg1;
function reloadActivityIfRunning(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    connectedFrame = connectedFrame.getConnectedFrame();
    let applicationId;
    if (connectedFrame != null) {
      applicationId = connectedFrame.applicationId;
    }
    tmp = applicationId === arg0;
  }
  if (tmp) {
    let obj = importDefault(5693);
    obj = { applicationId: null };
    obj[0] = arg0;
    obj.refreshProxyTicket(obj);
  }
}
function _listProjects() {
  const self = this;
  const tmp = callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            let body = tmp7;
            body = undefined;
            const projectsFetchState = outer1_5.getProjectsFetchState();
            let type;
            if (projectsFetchState != null) {
              type = projectsFetchState.type;
            }
            if ("loading" !== type) {
              let obj4 = outer1_1(709);
              obj4.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
              let dependencyMap = 1;
              const HTTP = outer1_0(530).HTTP;
              const obj1 = { url: null, rejectWithError: true };
              obj1[0] = outer1_6.VIBEGRATIONS_PROJECTS;
              c3 = 2;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            let obj3 = callback(709);
            obj3.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            body = arg1.body;
            obj = callback(709);
            obj3 = { type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: null };
            obj3[1] = body;
            obj.dispatch(obj3);
            dependencyMap = 0;
          }
          dependencyMap = 0;
          c4 = 3;
          obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        }
        c4 = 3;
      } catch (tmp25) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp25;
        } else {
          c3 = tmp;
        }
      }
    }
  });
  const _listProjects = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createProject() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const table = tmp2;
              const callback2 = tmp5;
              body = undefined;
              const HTTP = callback(outer1_2[6]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = outer1_6.VIBEGRATIONS_PROJECTS;
              obj1[1] = body;
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            body = body.body;
            obj = callback2(table[5]);
            const obj4 = { type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: null };
            obj4[1] = body;
            obj.dispatch(obj4);
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body.id;
            return obj5;
          }
        } catch (tmp17) {
          c4 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  const _createProject = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _renameProject() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dispatcher = tmp2;
              const table = tmp5;
              let lib;
              const HTTP = lib(outer1_2[6]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = outer1_6.VIBEGRATIONS_PROJECT(lib);
              const obj2 = { name: null };
              obj2[0] = callback;
              obj1[1] = obj2;
              c4 = 1;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            lib = arg1;
            if (lib.ok) {
              obj = callback(table[5]);
              const obj5 = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: null };
              obj5[1] = lib.body;
              obj.dispatch(obj5);
            }
            c5 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = lib;
            return obj6;
          }
        } catch (tmp15) {
          c5 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  const _renameProject = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setGuildHints() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dispatcher = tmp2;
              const table = tmp5;
              let lib;
              const HTTP = lib(outer1_2[6]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = outer1_6.VIBEGRATIONS_PROJECT(lib);
              obj1[1] = callback;
              c4 = 1;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.patch(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            if (lib.ok) {
              obj = callback(table[5]);
              const obj4 = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: null };
              obj4[1] = lib.body;
              obj.dispatch(obj4);
            }
            c5 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = lib;
            return obj5;
          }
        } catch (tmp15) {
          c5 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  const _setGuildHints = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteProject() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp2;
              let lib = tmp5;
              lib = undefined;
              const HTTP = callback(outer1_2[6]).HTTP;
              const obj1 = { url: null, rejectWithError: false };
              obj1[0] = outer1_6.VIBEGRATIONS_PROJECT(callback);
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            if (lib.ok) {
              obj = lib(table[5]);
              const obj4 = { type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: null };
              obj4[1] = callback;
              obj.dispatch(obj4);
            }
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = lib;
            return obj5;
          }
        } catch (tmp19) {
          c4 = tmp;
          throw tmp19;
        }
      }
    })();
  });
  const _deleteProject = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _publishProject() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === project) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let application = tmp3;
              let body = tmp2;
              let lib;
              body = undefined;
              application = undefined;
              project = undefined;
              const HTTP = lib(outer1_2[6]).HTTP;
              const obj1 = { url: null, rejectWithError: false };
              obj1[0] = outer1_6.VIBEGRATIONS_PROJECT_PUBLISH(lib);
              project = 1;
              c4 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            if (lib.ok) {
              body = lib.body;
              application = body.application;
              project = body.project;
              obj = body(application[5]);
              const obj4 = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: null };
              obj4[1] = project;
              obj.dispatch(obj4);
              obj2 = body(application[5]);
              const obj5 = { type: "APPLICATION_FETCH_SUCCESS", application: null, isHydrated: true };
              obj5[1] = application;
              obj2.dispatch(obj5);
              callback(application.id);
            }
            c4 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = lib;
            return obj6;
          }
        } catch (tmp23) {
          c4 = tmp;
          throw tmp23;
        }
      }
    })();
  });
  const _publishProject = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _publishPreviewProject() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === project) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let application = tmp3;
              let body = tmp2;
              let lib;
              body = undefined;
              application = undefined;
              project = undefined;
              const HTTP = lib(outer1_2[6]).HTTP;
              const obj1 = { url: null, rejectWithError: false };
              obj1[0] = outer1_6.VIBEGRATIONS_PROJECT_PUBLISH_PREVIEW(lib);
              project = 1;
              c4 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            if (lib.ok) {
              body = lib.body;
              application = body.application;
              project = body.project;
              obj = body(application[5]);
              const obj4 = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: null };
              obj4[1] = project;
              obj.dispatch(obj4);
              obj2 = body(application[5]);
              const obj5 = { type: "APPLICATION_FETCH_SUCCESS", application: null, isHydrated: true };
              obj5[1] = application;
              obj2.dispatch(obj5);
              callback(application.id);
            }
            c4 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = lib;
            return obj6;
          }
        } catch (tmp23) {
          c4 = tmp;
          throw tmp23;
        }
      }
    })();
  });
  const _publishPreviewProject = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("handleProjectUpsert").fileFinishedImporting("modules/vibegrations/actions/VibegrationsActionCreators.tsx");

export const listProjects = function listProjects() {
  const self = this;
  const apply = _listProjects.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createProject = function createProject() {
  const self = this;
  const apply = _createProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const renameProject = function renameProject() {
  const self = this;
  const apply = _renameProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setGuildHints = function setGuildHints() {
  const self = this;
  const apply = _setGuildHints.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteProject = function deleteProject() {
  const self = this;
  const apply = _deleteProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setSelectedProjectForGuild = function setSelectedProjectForGuild(guildId, projectId) {
  let obj = importDefault(709);
  obj = { type: "VIBEGRATIONS_PROJECT_SELECT", guildId, projectId };
  obj.dispatch(obj);
};
export const publishProject = function publishProject() {
  const self = this;
  const apply = _publishProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const publishPreviewProject = function publishPreviewProject(arg0) {
  const self = this;
  const apply = _publishPreviewProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setChatSidebarWidth = function setChatSidebarWidth(width) {
  let obj = importDefault(709);
  obj = { type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width };
  obj.dispatch(obj);
};
export const setBuilderPreviewApplicationId = function setBuilderPreviewApplicationId(applicationId) {
  let obj = importDefault(709);
  obj = { type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId };
  obj.dispatch(obj);
};
