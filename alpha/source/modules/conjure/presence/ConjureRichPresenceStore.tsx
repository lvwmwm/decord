// Module ID: 11290
// Function ID: 11291
// Name: ConjureRichPresenceStore
// Dependencies: [32, 5, 6692, 4908, 5036, 11291, 6831, 1084, 4864, 10714, 10832, 2000, 6866, 10807, 504, 584, 2]

// Module 11290 (ConjureRichPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import ChannelConstants from "ChannelConstants" /* 4864 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6866 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10714 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import IdleStore from "IdleStore" /* 6692 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4908 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5036 */;
import ConjurePagesStore from "ConjurePagesStore" /* 11291 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _null, c3, c4;

function updateActivity(withGracePeriod) {
  let found;
  let obj3;
  let timeout;
  let timeout2;
  const f111588 = () => {
    let found;
    let timeout = null;
    if (null != _null) {
      obj = { details: found[Math.floor(Math, Math.random(Math) * found.length)] };
      const merged = Object.assign(_null);
      const details = _null.details;
      const prop = conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_LINES;
      found = prop.filter((item) => item !== details);
      const _Math = Math;
      const _Math2 = Math;
      _null = obj;
      if (null != timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      const _setTimeout = setTimeout;
      timeout = setTimeout(f111588, closure_1_11);
      conjureRichPresenceStore.emitChange();
    }
  };
  withGracePeriod = withGracePeriod.withGracePeriod;
  if (IdleStore.isIdle()) {
    if (null != timeout) {
      const _clearTimeout7 = clearTimeout;
      clearTimeout(timeout);
      timeout = null;
    }
    if (null != timeout2) {
      const _clearTimeout8 = clearTimeout;
      clearTimeout(timeout2);
      timeout2 = null;
    }
    c12 = null;
    let flag4 = null != c13;
    if (flag4) {
      c13 = null;
      flag4 = true;
    }
    return flag4;
  } else {
    let tmp13;
    let flag;
    if (null != c12) {
      if (null == ConjureProjectStore.getProject(c12)) {
        if (null != timeout) {
          const _clearTimeout5 = clearTimeout;
          clearTimeout(timeout);
          timeout = null;
        }
        if (null != timeout2) {
          const _clearTimeout6 = clearTimeout;
          clearTimeout(timeout2);
          timeout2 = null;
        }
        c12 = null;
        let flag3 = null != c13;
        if (flag3) {
          c13 = null;
          flag3 = true;
        }
        return flag3;
      }
    }
    const shownProjectId = ConjurePagesStore.getShownProjectId();
    if (null != shownProjectId) {
      let tmp15 = null;
      if (null != ConjureProjectStore.getProject(shownProjectId)) {
        tmp15 = shownProjectId;
      }
      tmp13 = tmp15;
    } else {
      const guildId = SelectedGuildStore.getGuildId();
      obj = ConjureProjectStore;
      let globalSelectedProjectId = ConjureProjectStore.getGlobalSelectedProjectId();
      if (globalSelectedProjectId == null) {
        let selectedProjectId = null;
        if (null != guildId) {
          selectedProjectId = null;
          if (SelectedChannelStore.getChannelId() === StaticChannelRoute.CONJURE) {
            selectedProjectId = obj.getSelectedProjectId(guildId);
          }
        }
        globalSelectedProjectId = selectedProjectId;
      }
      tmp13 = null;
      if (null != globalSelectedProjectId) {
        tmp13 = null;
        if (null != obj.getProject(globalSelectedProjectId)) {
          tmp13 = globalSelectedProjectId;
        }
      }
    }
    if (null == tmp13) {
      let flag2;
      if (null != c13) {
        if (withGracePeriod) {
          flag2 = false;
          if (null == timeout) {
            const _setTimeout2 = setTimeout;
            timeout = setTimeout(() => {
              c14 = null;
              if (null != c15) {
                const _clearTimeout = clearTimeout;
                clearTimeout(c15);
                c15 = null;
              }
              c12 = null;
              let flag = null != c13;
              if (flag) {
                c13 = null;
                flag = true;
              }
              if (flag) {
                conjureRichPresenceStore.emitChange();
              }
            }, 30000);
            flag2 = false;
          }
        }
        flag = flag2;
      }
      if (null != timeout) {
        const _clearTimeout3 = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      if (null != timeout2) {
        const _clearTimeout4 = clearTimeout;
        clearTimeout(timeout2);
        timeout2 = null;
      }
      c12 = null;
      flag2 = null != c13;
      if (flag2) {
        c13 = null;
        flag2 = true;
      }
    } else {
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      flag = tmp13 !== c12 || null == c13;
      if (flag) {
        c12 = tmp13;
        let c0;
        const obj2 = { type: ActivityTypes.PLAYING, name: conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_NAME, details: found[Math.floor(Math, Math.random(Math) * found.length)], timestamps: obj3 };
        let prop = conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_LINES;
        found = prop.filter((item) => item !== details);
        let _Math = Math;
        let _Math2 = Math;
        const _Date = Date;
        c13 = obj2;
        obj3 = { start: Date.now() };
        if (null != timeout2) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout2);
          timeout2 = null;
        }
        let _setTimeout = setTimeout;
        timeout2 = setTimeout(f111588, c11);
        flag = true;
      }
    }
    return flag;
  }
}
function fetchOwnedProjects() {
  return obj(...arguments);
}
let obj = function _fetchOwnedProjects() {
  let ownedProjectsFetchState;
  let paths;
  obj = _asyncToGenerator(async function(arg0, value) {
    function projectListsSettled() {
      const promise = new Promise((fn) => {
        let closure_0 = fn;
        function check() {
          const projectsFetchState = closure_2_8.getProjectsFetchState();
          let type;
          obj = closure_2_8;
          if (projectsFetchState != null) {
            type = projectsFetchState.type;
          }
          if ("loading" !== type) {
            obj.removeChangeListener(check);
            fn();
          }
        }
        obj = closure_8;
        closure_8.addChangeListener(check);
        let projectsFetchState = closure_8.getProjectsFetchState();
        let type;
        if (projectsFetchState != null) {
          type = projectsFetchState.type;
        }
        if ("loading" !== type) {
          obj.removeChangeListener(check);
          fn();
        }
      });
      return promise;
    }
    if (c3 === 2) {
      c3 = 3;
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
        let listProjects;
        c3 = 2;
        const tmp3 = c2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp3;
            let c0 = 0;
            listProjects = undefined;
            if ("success" !== ownedProjectsFetchState.getOwnedProjectsFetchState()) {
              c2 = 1;
              c3 = 1;
              const obj4 = { value: require("asyncRequire")(paths[10], paths.paths), done: false };
              return obj4;
            }
          }
        } else if (1 === tmp3) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            listProjects = value.listProjects;
            c2 = 2;
            c3 = 1;
            const obj6 = { value: listProjects(), done: false };
            return obj6;
          }
        } else if (2 === tmp3) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c2 = 3;
            c3 = 1;
            const obj8 = { value: projectListsSettled(), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
        if ("success" !== closure_129_8.getOwnedProjectsFetchState()) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Conjure projects fetch failed");
          throw error;
        } else {
          c3 = 3;
          const obj9 = { value: closure_129_8.getOwnedProjects(), done: true };
          return obj9;
        }
      } catch (tmp16) {
        c3 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
obj = function _resumeRunningProjects() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
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
      let c2;
      try {
        let closure_0;
        let closure_1;
        let closure_2;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            let ensureConnection;
            const tmp23 = c16;
            if (!tmp23) {
              c16 = true;
              const obj2 = ConjureGuildExperiment;
              const tmp14 = require;
              if (obj2.hasConjureGuildWithoutExposure("conjure_resume")) {
                c2 = 1;
                const items = [fetchOwnedProjects(), tmp14(dependencyMap[11])(dependencyMap[13], dependencyMap.paths)];
                c3 = 2;
                c4 = 1;
                const obj5 = { value: all(items), done: false };
                return obj5;
              }
            }
          }
        } else if (1 === c3) {
          c2 = 0;
          c16 = false;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          closure_1 = closure_129_2(closure_0, 2);
          closure_2 = closure_1[0];
          ensureConnection = closure_1[1].ensureConnection;
          const found = closure_2.filter((running) => true === running.running);
          const substr = found.slice(0, 5);
          const item = substr.forEach((id) => closure_1_3(id.id));
          c2 = 0;
        }
        c4 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      } catch (tmp17) {
        if (0 === c2) {
          c4 = 3;
          throw tmp17;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const ActivityTypes = Constants.ActivityTypes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let c11 = 300000;
let c12 = null;
let c13 = null;
let c14 = null;
let c15 = null;
let c16 = false;
const Store = get_initializedDefault.Store;
class ConjureRichPresenceStore extends Store {
  initialize() {
    const items = [IdleStore, SelectedChannelStore, SelectedGuildStore, ConjureProjectStore, ConjurePagesStore];
    this.syncWith(items, () => updateActivity({ withGracePeriod: true }));
  }
  getActivity() {
    return c13;
  }
}
const prototype = ConjureRichPresenceStore.prototype;
ConjureRichPresenceStore.displayName = "ConjureRichPresenceStore";
obj = {
  CONNECTION_OPEN() {
    return updateActivity({ withGracePeriod: false });
  },
  POST_CONNECTION_OPEN() {
    function resumeRunningProjects() {
      return obj(...arguments);
    }
    resumeRunningProjects();
    return false;
  },
  LOGOUT() {
    c16 = false;
    if (null != c14) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c14);
      c14 = null;
    }
    if (null != c15) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(c15);
      c15 = null;
    }
    c12 = null;
    let flag = null != c13;
    if (flag) {
      c13 = null;
      flag = true;
    }
    return flag;
  }
};
const conjureRichPresenceStore = new ConjureRichPresenceStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conjure/presence/ConjureRichPresenceStore.tsx");

export default conjureRichPresenceStore;
export const CONJURE_PRESENCE_ACTIVITY_GRACE_PERIOD_MS = 30000;
export const CONJURE_PRESENCE_ACTIVITY_LINE_ROTATION_MS = 300000;
