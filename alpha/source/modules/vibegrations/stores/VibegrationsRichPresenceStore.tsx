// Module ID: 11119
// Function ID: 11120
// Name: VibegrationsRichPresenceStore
// Dependencies: [5567, 2103, 4699, 8699, 1085, 2058, 10621, 504, 584, 2]

// Module 11119 (VibegrationsRichPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import conjuringActivity from "conjuringActivity" /* 10621 */;
import IdleStore from "IdleStore" /* 5567 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8699 */;
import size from "module_2" /* 2 */;

let _null, c10, c12, c9;

function updateActivity(withGracePeriod) {
  let found;
  let obj3;
  let timeout;
  let timeout2;
  const f106350 = () => {
    let found;
    let timeout = null;
    if (null != _null) {
      const obj = { details: found[Math.floor(Math, Math.random(Math) * found.length)] };
      const merged = Object.assign(_null);
      const details = _null.details;
      const prop = conjuringActivity.CONJURING_ACTIVITY_LINES;
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
      timeout = setTimeout(f106350, closure_1_8);
      vibegrationsRichPresenceStore.emitChange();
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
      if (null == VibegrationsProjectStore.getProject(selectedProjectId)) {
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
    if (SelectedChannelStore.getChannelId() === StaticChannelRoute.VIBEGRATIONS) {
      const guildId = SelectedGuildStore.getGuildId();
      tmp7 = null;
      if (null != guildId) {
        let obj = VibegrationsProjectStore;
        selectedProjectId = VibegrationsProjectStore.getSelectedProjectId(guildId);
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
                vibegrationsRichPresenceStore.emitChange();
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
        obj2 = { type: ActivityTypes.PLAYING, name: conjuringActivity.CONJURING_ACTIVITY_NAME, details: found[Math.floor(Math, Math.random(Math) * found.length)], timestamps: obj3 };
        let c0;
        let prop = conjuringActivity.CONJURING_ACTIVITY_LINES;
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
        timeout2 = setTimeout(f106350, c8);
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
class VibegrationsRichPresenceStore extends Store {
  initialize() {
    const items = [IdleStore, SelectedChannelStore, SelectedGuildStore, VibegrationsProjectStore];
    this.syncWith(items, () => updateActivity({ withGracePeriod: true }));
  }
  getActivity() {
    return obj2;
  }
}
const prototype = VibegrationsRichPresenceStore.prototype;
VibegrationsRichPresenceStore.displayName = "VibegrationsRichPresenceStore";
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
const vibegrationsRichPresenceStore = new VibegrationsRichPresenceStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsRichPresenceStore.tsx");

export default vibegrationsRichPresenceStore;
export const CONJURING_ACTIVITY_GRACE_PERIOD_MS = 30000;
export const CONJURING_ACTIVITY_LINE_ROTATION_MS = 300000;
