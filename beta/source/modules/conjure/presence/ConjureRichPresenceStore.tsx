// Module ID: 11705
// Function ID: 11706
// Name: ConjureRichPresenceStore
// Dependencies: [32, 5, 109, 502, 6792, 5073, 5203, 11002, 11706, 6932, 5026, 10908, 7489, 11003, 5923, 11028, 2118, 6967, 11001, 504, 572, 2]

// Module 11705 (ConjureRichPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ChannelConstants from "ChannelConstants" /* 5026 */;
import ActivityTypes from "ActivityTypes" /* 5923 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6967 */;
import conjureServerProject from "conjureServerProject" /* 7489 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10908 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import IdleStore from "IdleStore" /* 6792 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5073 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5203 */;
import ConjureChatStore from "ConjureChatStore" /* 11002 */;
import ConjurePagesStore from "ConjurePagesStore" /* 11706 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6932 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _null, c3, c4, ownedProjectsFetchState;

function updateActivity(withGracePeriod) {
  let found;
  let obj4;
  let obj6;
  let obj8;
  let timeout;
  let timeout2;
  const f101316 = () => {
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
      timeout = setTimeout(f101316, closure_1_14);
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
    c15 = null;
    let flag5 = null != _null;
    if (flag5) {
      _null = null;
      flag5 = true;
    }
    return flag5;
  } else {
    let tmp11;
    if (null != c15) {
      if (null == ConjureProjectStore.getProject(c15)) {
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
        c15 = null;
        let flag4 = null != _null;
        if (flag4) {
          _null = null;
          flag4 = true;
        }
        return flag4;
      }
    }
    const shownProjectId = ConjurePagesStore.getShownProjectId();
    if (null != shownProjectId) {
      let tmp13 = null;
      const tmp12 = ConjureProjectStore;
      if (null != ConjureProjectStore.getProject(shownProjectId)) {
        tmp13 = shownProjectId;
      }
      tmp11 = tmp13;
      obj = tmp12;
    } else {
      const guildId = SelectedGuildStore.getGuildId();
      let globalSelectedProjectId = ConjureProjectStore.getGlobalSelectedProjectId();
      if (globalSelectedProjectId == null) {
        let selectedProjectId = null;
        if (null != guildId) {
          selectedProjectId = null;
          if (SelectedChannelStore.getChannelId() === StaticChannelRoute.CONJURE) {
            selectedProjectId = obj11.getSelectedProjectId(guildId);
          }
        }
        globalSelectedProjectId = selectedProjectId;
      }
      tmp11 = null;
      if (null != globalSelectedProjectId) {
        tmp11 = null;
        if (null != ConjureProjectStore.getProject(globalSelectedProjectId)) {
          tmp11 = globalSelectedProjectId;
        }
      }
      obj = obj11;
    }
    if (null == tmp11) {
      let flag3;
      if (null != _null) {
        if (withGracePeriod) {
          flag3 = false;
          if (null == timeout) {
            const _setTimeout2 = setTimeout;
            timeout = setTimeout(() => {
              c17 = null;
              if (null != c18) {
                const _clearTimeout = clearTimeout;
                clearTimeout(c18);
                c18 = null;
              }
              c15 = null;
              let flag = null != c16;
              if (flag) {
                c16 = null;
                flag = true;
              }
              if (flag) {
                conjureRichPresenceStore.emitChange();
              }
            }, 30000);
            flag3 = false;
          }
        }
        return flag3;
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
      c15 = null;
      flag3 = null != _null;
      if (flag3) {
        _null = null;
        flag3 = true;
      }
    } else {
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      const project = obj.getProject(tmp11);
      let tmp18 = null;
      if (null != project) {
        tmp18 = null;
        const obj2 = conjureServerProject;
        const tmp19 = require;
        if (null != obj2.conjureServerAppGuildId(project)) {
          const messages = ConjureChatStore.getMessages(tmp11);
          const tmp19Result = tmp19(11003);
          const findOpenTurnResult = tmp19Result.findOpenTurn(messages);
          tmp18 = null;
          if (null != findOpenTurnResult) {
            const substr = messages.slice(0, messages.lastIndexOf(findOpenTurnResult));
            const findLastResult = substr.findLast((role) => "user" === role.role);
            let user_id;
            if (findLastResult != null) {
              user_id = findLastResult.user_id;
            }
            if (user_id == null) {
              user_id = project.owner_user_id;
            }
            let tmp26 = null;
            if (user_id === AuthenticationStore.getId()) {
              tmp26 = tmp11;
            }
            tmp18 = tmp26;
          }
        }
      }
      if (tmp11 === c15) {
        let flag;
        if (null != _null) {
          let flag2 = false;
          if (null != _null) {
            const party3 = _null.party;
            let id;
            if (party3 != null) {
              id = party3.id;
            }
            if (id == null) {
              id = null;
            }
            flag2 = false;
            if (id !== tmp18) {
              const party4 = _null.party;
              const tmp51 = _objectWithoutProperties(_null, closure_2);
              let tmp52 = tmp51;
              if (null != tmp18) {
                const obj3 = { party: obj4 };
                let merged = Object.assign(tmp51);
                tmp52 = obj3;
                obj4 = { id: tmp18 };
              }
              _null = tmp52;
              flag2 = true;
            }
          }
          flag = flag2;
        }
        return flag;
      }
      c15 = tmp11;
      const obj5 = { type: ActivityTypes.ActivityTypes.PLAYING, name: conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_NAME, details: found[Math.floor(Math, Math.random(Math) * found.length)], timestamps: obj6 };
      let c0;
      let prop = conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_LINES;
      found = prop.filter((item) => item !== details);
      let _Math = Math;
      let _Math2 = Math;
      const _Date = Date;
      _null = obj5;
      const party = obj5.party;
      let id1;
      obj6 = { start: Date.now() };
      if (party != null) {
        id1 = party.id;
      }
      if (id1 == null) {
        id1 = null;
      }
      if (id1 !== tmp18) {
        const party2 = _null.party;
        const tmp36 = _objectWithoutProperties(_null, closure_2);
        let tmp37 = tmp36;
        if (null != tmp18) {
          const obj7 = { party: obj8 };
          const merged1 = Object.assign(tmp36);
          tmp37 = obj7;
          obj8 = { id: tmp18 };
        }
        _null = tmp37;
      }
      if (null != timeout2) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(timeout2);
        timeout2 = null;
      }
      let _setTimeout = setTimeout;
      timeout2 = setTimeout(f101316, c14);
      flag = true;
    }
  }
}
function fetchOwnedProjects() {
  return obj(...arguments);
}
let obj = function _fetchOwnedProjects() {
  let paths;
  obj = _asyncToGenerator(async function(arg0, value) {
    let tmp2;
    function ownedProjectsSettled() {
      const promise = new Promise((fn) => {
        let closure_0 = fn;
        function check() {
          ownedProjectsFetchState = closure_2_12.getOwnedProjectsFetchState();
          let tmp2 = "success" !== ownedProjectsFetchState;
          obj = closure_2_12;
          if (tmp2) {
            tmp2 = "error" !== ownedProjectsFetchState;
          }
          if (!tmp2) {
            obj.removeChangeListener(check);
            fn();
          }
        }
        obj = closure_12;
        closure_12.addChangeListener(check);
        ownedProjectsFetchState = closure_12.getOwnedProjectsFetchState();
        let tmp3 = "success" !== ownedProjectsFetchState;
        if (tmp3) {
          tmp3 = "error" !== ownedProjectsFetchState;
        }
        if (!tmp3) {
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let listProjects;
        c3 = 2;
        let tmp3 = c2;
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
              const obj4 = { value: require("asyncRequire")(paths[15], paths.paths), done: false };
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
            const obj8 = { value: ownedProjectsSettled(), done: false };
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
        const str = "success";
        if ("success" !== closure_129_12.getOwnedProjectsFetchState()) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Conjure projects fetch failed");
          throw error;
        } else {
          c3 = 3;
          const obj9 = { value: closure_129_12.getOwnedProjects(), done: true };
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c2;
      try {
        let closure_0;
        let closure_1;
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
            const tmp23 = c19;
            if (!tmp23) {
              c19 = true;
              const obj2 = ConjureGuildExperiment;
              const tmp14 = require;
              if (obj2.hasConjureGuildWithoutExposure("conjure_resume")) {
                c2 = 1;
                const items = [fetchOwnedProjects(), tmp14(dependencyMap[16])(dependencyMap[18], dependencyMap.paths)];
                c3 = 2;
                c4 = 1;
                const obj5 = { value: all(items), done: false };
                return obj5;
              }
            }
          }
        } else if (1 === c3) {
          c2 = 0;
          c19 = false;
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
          closure_1 = closure_129_3(closure_0, 2);
          closure_2 = closure_1[0];
          ensureConnection = closure_1[1].ensureConnection;
          const found = closure_2.filter((running) => true === running.running);
          const substr = found.slice(0, 5);
          const item = substr.forEach((id) => closure_1_3(id.id));
          c2 = 0;
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
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
let closure_2 = ["party"];
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let c14 = 300000;
let c15 = null;
let c16 = null;
let c17 = null;
let c18 = null;
let c19 = false;
const Store = get_initializedDefault.Store;
class ConjureRichPresenceStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ConjureChatStore, ConjurePagesStore, ConjureProjectStore, IdleStore, SelectedChannelStore, SelectedGuildStore);
    const items = [IdleStore, SelectedChannelStore, SelectedGuildStore, ConjureProjectStore, ConjurePagesStore, ConjureChatStore];
    this.syncWith(items, () => updateActivity({ withGracePeriod: true }));
  }
  getActivity() {
    return c16;
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
    c19 = false;
    if (null != c17) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c17);
      c17 = null;
    }
    if (null != c18) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(c18);
      c18 = null;
    }
    c15 = null;
    let flag = null != c16;
    if (flag) {
      c16 = null;
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
