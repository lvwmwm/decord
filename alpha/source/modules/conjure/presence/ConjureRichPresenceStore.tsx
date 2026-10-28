// Module ID: 11236
// Function ID: 11237
// Name: ConjureRichPresenceStore
// Dependencies: [32, 5, 6668, 4907, 5035, 11237, 6808, 1084, 4863, 10681, 6843, 1294, 10733, 1999, 504, 584, 2]

// Module 11236 (ConjureRichPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ChannelConstants from "ChannelConstants" /* 4863 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6843 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10681 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import IdleStore from "IdleStore" /* 6668 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4907 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5035 */;
import ConjurePagesStore from "ConjurePagesStore" /* 11237 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let _null, c3, c4;

let c10;
let c9;
function updateActivity(withGracePeriod) {
  let found;
  let obj3;
  let timeout;
  let timeout2;
  const f110362 = () => {
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
      timeout = setTimeout(f110362, closure_1_12);
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
    c13 = null;
    let flag4 = null != c14;
    if (flag4) {
      c14 = null;
      flag4 = true;
    }
    return flag4;
  } else {
    let tmp13;
    let flag;
    if (null != c13) {
      if (null == ConjureProjectStore.getProject(c13)) {
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
        c13 = null;
        let flag3 = null != c14;
        if (flag3) {
          c14 = null;
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
      if (null != c14) {
        if (withGracePeriod) {
          flag2 = false;
          if (null == timeout) {
            const _setTimeout2 = setTimeout;
            timeout = setTimeout(() => {
              c15 = null;
              if (null != c16) {
                const _clearTimeout = clearTimeout;
                clearTimeout(c16);
                c16 = null;
              }
              c13 = null;
              let flag = null != c14;
              if (flag) {
                c14 = null;
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
      c13 = null;
      flag2 = null != c14;
      if (flag2) {
        c14 = null;
        flag2 = true;
      }
    } else {
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      flag = tmp13 !== c13 || null == c14;
      if (flag) {
        c13 = tmp13;
        let c0;
        const obj2 = { type: constants.PLAYING, name: conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_NAME, details: found[Math.floor(Math, Math.random(Math) * found.length)], timestamps: obj3 };
        let prop = conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_LINES;
        found = prop.filter((item) => item !== details);
        let _Math = Math;
        let _Math2 = Math;
        const _Date = Date;
        c14 = obj2;
        obj3 = { start: Date.now() };
        if (null != timeout2) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout2);
          timeout2 = null;
        }
        let _setTimeout = setTimeout;
        timeout2 = setTimeout(f110362, c12);
        flag = true;
      }
    }
    return flag;
  }
}
let obj = function _resumeRunningProjects() {
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
        return { value: "IconComponent", done: null };
      }
    } else {
      let c2;
      try {
        let closure_0;
        let closure_1;
        let body;
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
            body = undefined;
            let ensureConnection;
            const tmp23 = c17;
            if (!tmp23) {
              c17 = true;
              const obj2 = ConjureGuildExperiment;
              if (obj2.hasConjureGuildWithoutExposure("conjure_resume")) {
                c2 = 1;
                const HTTP = tmp6(tmp7[11]).HTTP;
                const obj5 = { url: constants.CONJURE_PROJECTS, rejectWithError: true };
                const items = [HTTP.get(obj5), asyncRequire(dependencyMap[12], dependencyMap.paths)];
                c3 = 2;
                c4 = 1;
                const obj6 = { value: all(items), done: false };
                return obj6;
              }
            }
          }
        } else if (1 === c3) {
          c2 = 0;
          c17 = false;
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
          body = closure_1[0].body;
          ensureConnection = closure_1[1].ensureConnection;
          const found = body.filter((running) => true === running.running);
          const substr = found.slice(0, 5);
          const item = substr.forEach((id) => closure_1_3(id.id));
          c2 = 0;
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp9) {
        if (0 === c2) {
          c4 = 3;
          throw tmp9;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ ActivityTypes: c9, Endpoints: c10 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let c12 = 300000;
let c13 = null;
let c14 = null;
let c15 = null;
let c16 = null;
let c17 = false;
const Store = get_initializedDefault.Store;
class ConjureRichPresenceStore extends Store {
  initialize() {
    const items = [IdleStore, SelectedChannelStore, SelectedGuildStore, ConjureProjectStore, ConjurePagesStore];
    this.syncWith(items, () => updateActivity({ withGracePeriod: true }));
  }
  getActivity() {
    return c14;
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
    c17 = false;
    if (null != c15) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c15);
      c15 = null;
    }
    if (null != c16) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(c16);
      c16 = null;
    }
    c13 = null;
    let flag = null != c14;
    if (flag) {
      c14 = null;
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
