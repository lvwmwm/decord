// Module ID: 11194
// Function ID: 11195
// Name: ConjureRichPresenceStore
// Dependencies: [32, 5, 6633, 4874, 5002, 6773, 1087, 4830, 10646, 6808, 1297, 10698, 2002, 504, 584, 2]

// Module 11194 (ConjureRichPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ChannelConstants from "ChannelConstants" /* 4830 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6808 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10646 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import IdleStore from "IdleStore" /* 6633 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4874 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5002 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let _null, c3, c4;

let c9;
let metroImportAll;
function updateActivity(withGracePeriod) {
  let found;
  let obj3;
  let timeout;
  let timeout2;
  const f109433 = () => {
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
      timeout = setTimeout(f109433, closure_1_11);
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
    let tmp7 = null;
    if (SelectedChannelStore.getChannelId() === StaticChannelRoute.CONJURE) {
      const guildId = SelectedGuildStore.getGuildId();
      tmp7 = null;
      if (null != guildId) {
        obj = ConjureProjectStore;
        const selectedProjectId = ConjureProjectStore.getSelectedProjectId(guildId);
        let tmp11 = null;
        if (null != selectedProjectId) {
          tmp11 = null;
          if (null != obj.getProject(selectedProjectId)) {
            tmp11 = selectedProjectId;
          }
        }
        tmp7 = tmp11;
      }
    }
    if (null == tmp7) {
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
      flag = tmp7 !== c12 || null == c13;
      if (flag) {
        c12 = tmp7;
        let c0;
        const obj2 = { type: metroImportAll.PLAYING, name: conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_NAME, details: found[Math.floor(Math, Math.random(Math) * found.length)], timestamps: obj3 };
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
        timeout2 = setTimeout(f109433, c11);
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
            const tmp23 = c16;
            if (!tmp23) {
              c16 = true;
              const obj2 = ConjureGuildExperiment;
              if (obj2.hasConjureGuildWithoutExposure("conjure_resume")) {
                c2 = 1;
                const HTTP = tmp6(tmp7[10]).HTTP;
                const obj5 = { url: constants.CONJURE_PROJECTS, rejectWithError: true };
                const items = [HTTP.get(obj5), asyncRequire(dependencyMap[11], dependencyMap.paths)];
                c3 = 2;
                c4 = 1;
                const obj6 = { value: all(items), done: false };
                return obj6;
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
({ ActivityTypes: metroImportAll, Endpoints: c9 } = Constants);
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
    const items = [IdleStore, SelectedChannelStore, SelectedGuildStore, ConjureProjectStore];
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
