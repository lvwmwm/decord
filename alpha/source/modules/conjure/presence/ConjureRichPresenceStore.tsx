// Module ID: 11250
// Function ID: 11251
// Name: ConjureRichPresenceStore
// Dependencies: [5884, 2115, 4899, 11251, 1085, 2070, 10232, 504, 584, 2]

// Module 11250 (ConjureRichPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import ChannelConstants from "ChannelConstants" /* 2070 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10232 */;
import IdleStore from "IdleStore" /* 5884 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;
import ConjureProjectStore from "ConjureProjectStore" /* 11251 */;
import size from "module_2" /* 2 */;

let _null, c10, c12, c9;

function updateActivity(withGracePeriod) {
  let found;
  let obj3;
  let timeout;
  let timeout2;
  const f107136 = () => {
    let found;
    let timeout = null;
    if (null != _null) {
      const obj = { details: found[Math.floor(Math, Math.random(Math) * found.length)] };
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
      timeout = setTimeout(f107136, closure_1_8);
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
    selectedProjectId = null;
    let flag4 = null != obj2;
    if (flag4) {
      obj2 = null;
      flag4 = true;
    }
    return flag4;
  } else {
    let flag;
    if (null != selectedProjectId) {
      if (null == ConjureProjectStore.getProject(selectedProjectId)) {
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
        selectedProjectId = null;
        let flag3 = null != obj2;
        if (flag3) {
          obj2 = null;
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
        let obj = ConjureProjectStore;
        selectedProjectId = ConjureProjectStore.getSelectedProjectId(guildId);
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
      if (null != obj2) {
        if (withGracePeriod) {
          flag2 = false;
          if (null == timeout) {
            const _setTimeout2 = setTimeout;
            timeout = setTimeout(() => {
              c11 = null;
              if (null != c12) {
                const _clearTimeout = clearTimeout;
                clearTimeout(c12);
                c12 = null;
              }
              c9 = null;
              let flag = null != c10;
              if (flag) {
                c10 = null;
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
      selectedProjectId = null;
      flag2 = null != obj2;
      if (flag2) {
        obj2 = null;
        flag2 = true;
      }
    } else {
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      flag = tmp7 !== selectedProjectId || null == obj2;
      if (flag) {
        selectedProjectId = tmp7;
        obj2 = { type: ActivityTypes.PLAYING, name: conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_NAME, details: found[Math.floor(Math, Math.random(Math) * found.length)], timestamps: obj3 };
        let c0;
        let prop = conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_LINES;
        found = prop.filter((item) => item !== details);
        let _Math = Math;
        let _Math2 = Math;
        const _Date = Date;
        obj3 = { start: Date.now() };
        if (null != timeout2) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout2);
          timeout2 = null;
        }
        let _setTimeout = setTimeout;
        timeout2 = setTimeout(f107136, c8);
        flag = true;
      }
    }
    return flag;
  }
}
const ActivityTypes = Constants.ActivityTypes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let c8 = 300000;
let selectedProjectId = null;
let obj2 = null;
let c11 = null;
let closure_12 = null;
const Store = get_initializedDefault.Store;
class ConjureRichPresenceStore extends Store {
  initialize() {
    const items = [IdleStore, SelectedChannelStore, SelectedGuildStore, ConjureProjectStore];
    this.syncWith(items, () => updateActivity({ withGracePeriod: true }));
  }
  getActivity() {
    return obj2;
  }
}
const prototype = ConjureRichPresenceStore.prototype;
ConjureRichPresenceStore.displayName = "ConjureRichPresenceStore";
let obj = {
  CONNECTION_OPEN() {
    return updateActivity({ withGracePeriod: false });
  },
  LOGOUT: function clearActivity() {
    if (null != c11) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c11);
      c11 = null;
    }
    if (null != closure_12) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(closure_12);
      closure_12 = null;
    }
    selectedProjectId = null;
    return null != obj2 && true;
  }
};
const conjureRichPresenceStore = new ConjureRichPresenceStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conjure/presence/ConjureRichPresenceStore.tsx");

export default conjureRichPresenceStore;
export const CONJURE_PRESENCE_ACTIVITY_GRACE_PERIOD_MS = 30000;
export const CONJURE_PRESENCE_ACTIVITY_LINE_ROTATION_MS = 300000;
