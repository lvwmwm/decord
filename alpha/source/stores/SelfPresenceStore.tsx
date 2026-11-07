// Module ID: 6625
// Function ID: 6626
// Name: SelfPresenceStore
// Dependencies: [4988, 6626, 1231, 4989, 2156, 6760, 2160, 11670, 5890, 5895, 1072, 5891, 7655, 4965, 15803, 10881, 1342, 12, 504, 572, 2]

// Module 6625 (SelfPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import _modDef1342 from "module_1342" /* 1342 */;
import UserSettings from "UserSettings" /* 4965 */;
import PresenceStore2 from "PresenceStore" /* 5890 */;
import ActivityTypes from "ActivityTypes" /* 5891 */;
import LibraryApplicationUtils from "LibraryApplicationUtils" /* 7655 */;
import isGuildSpaceEmbeddedActivityDefault from "isGuildSpaceEmbeddedActivity" /* 15803 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4988 */;
import SpotifyStore from "SpotifyStore" /* 6626 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import DetectableGameStore from "DetectableGameStore" /* 2156 */;
import IdleStore from "IdleStore" /* 6760 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 2160 */;
import LocalActivityStore from "LocalActivityStore" /* 11670 */;
import SessionsStore from "SessionsStore" /* 5895 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const PresenceStore = PresenceStore2;

let IDLE;
let closure_18;
let tmp;
const isListeningOnSpotifyDefault = tmp(10881);
function filterPlayingActivities(arg0) {
  if (0 === arg0.length) {
    return arg0;
  } else {
    const items = [];
    const items1 = [];
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if (nextResult.type === ActivityTypes.ActivityTypes.PLAYING) {
        let arr = items1.push(tmp5);
      } else {
        let arr2 = items.push(tmp5);
      }
      continue;
    }
    if (0 === items1.length) {
      return arg0;
    } else if (1 === items1.length) {
      return arg0;
    } else {
      const items2 = [];
      HermesBuiltin.arraySpread(items2, items1, 0);
      const items3 = [];
      items3[HermesBuiltin.arraySpread(items3, items, 0)] = items2.sort(sortActivity)[0];
      return items3.sort(sortActivity);
    }
  }
}
function shouldShowActivity(type) {
  if (isGuildSpaceEmbeddedActivityDefault(type)) {
    return false;
  } else {
    type = type.type;
    if (ActivityTypes.ActivityTypes.LISTENING === type) {
      let shouldShowActivityResult;
      if (isListeningOnSpotifyDefault(type)) {
        shouldShowActivityResult = SpotifyStore.shouldShowActivity();
      } else {
        shouldShowActivityResult = null != type.application_id;
        if (shouldShowActivityResult) {
          const application_id3 = type.application_id;
          const tmp3Result = LibraryApplicationUtils;
          shouldShowActivityResult = tmp3Result.shouldShareApplicationActivity(application_id3, LibraryApplicationStore);
        }
      }
      return shouldShowActivityResult;
    } else if (ActivityTypes.ActivityTypes.PLAYING === type) {
      let result;
      if (null != type.application_id) {
        const application_id2 = type.application_id;
        const tmp3Result4 = LibraryApplicationUtils;
        result = tmp3Result4.shouldShareApplicationActivity(application_id2, LibraryApplicationStore);
      } else {
        const searchGamesByNameResult = DetectableGameStore.searchGamesByName(type.name);
        if (1 === searchGamesByNameResult.length) {
          const first = searchGamesByNameResult[0];
          const tmp3Result5 = LibraryApplicationUtils;
          result = tmp3Result5.shouldShareApplicationActivity(first, LibraryApplicationStore);
        } else {
          const ShowCurrentGame = tmp3(4965).ShowCurrentGame;
          result = ShowCurrentGame.getSetting();
        }
      }
      return result;
    } else {
      if (ActivityTypes.ActivityTypes.STREAMING !== type) {
        const WATCHING = tmp3(5891).ActivityTypes.WATCHING;
      }
      let result1 = null == type.application_id;
      if (!result1) {
        const application_id = type.application_id;
        const tmp3Result6 = LibraryApplicationUtils;
        result1 = tmp3Result6.shouldShareApplicationActivity(application_id, LibraryApplicationStore);
      }
      return result1;
    }
  }
}
function handleUpdate() {
  let ONLINE;
  num = IdleStore.getIdleSince();
  const obj = IdleStore;
  if (num == null) {
    num = 0;
  }
  let closure_22 = obj.isAFK();
  const tmp2 = c23;
  if (tmp2) {
    IDLE = closure_18;
    ONLINE = closure_18;
  } else {
    const tmp3 = c16;
    if (tmp3) {
      const INVISIBLE = StatusTypes.INVISIBLE;
      IDLE = INVISIBLE;
      ONLINE = INVISIBLE;
    } else {
      const StatusSetting = UserSettings.StatusSetting;
      ONLINE = StatusSetting.getSetting();
      if (ONLINE === StatusTypes.UNKNOWN) {
        ONLINE = StatusTypes.ONLINE;
      }
      IDLE = ONLINE;
    }
  }
  const tmp9 = ONLINE === StatusTypes.ONLINE && num > 0;
  if (tmp9) {
    IDLE = tmp8.IDLE;
  }
  const tmp11 = c23;
  if (!tmp11) {
    if (IDLE !== StatusTypes.INVISIBLE) {
      activities = LocalActivityStore.getActivities();
      found = activities.filter(shouldShowActivity);
    }
    let flag = false;
    const tmp15 = importDefault;
    if (!_modDef1342(found, found)) {
      let closure_21 = filterPlayingActivities(found);
      flag = true;
    }
    remoteActivities = SessionsStore.getRemoteActivities();
    const obj2 = SessionsStore;
    if (remoteActivities !== remoteActivities) {
      flag = true;
    }
    hiddenActivities = obj2.getHiddenActivities();
    if (flag) {
      const items = [];
      const tmp15Result = tmp15(12);
      const arraySpreadResult = HermesBuiltin.arraySpread(items, found, 0);
      HermesBuiltin.arraySpread(items, remoteActivities.filter((type) => type.type !== ActivityTypes.ActivityTypes.CUSTOM_STATUS), arraySpreadResult);
      const tmp15ResultResult = tmp15Result(items.sort(sortActivity));
      const iter = tmp15ResultResult.uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name);
      valueResult = iter.value();
      closure_27 = filterPlayingActivities(valueResult);
    }
  }
  found = [];
}
function handleConnectionOpen() {
  c23 = false;
  const UNKNOWN = StatusTypes.UNKNOWN;
  handleUpdate();
  const result = PresenceStore.setCurrentUserOnConnectionOpen(IDLE, valueResult);
}
const sortActivity = PresenceStore2.sortActivity;
const StatusTypes = Constants.StatusTypes;
const AppStates = Constants.AppStates;
let c16 = false;
({ ONLINE: IDLE, UNKNOWN: closure_18 } = StatusTypes);
let num = 0;
let found = [];
let activities = [];
const authStore6 = false;
let c23 = true;
let remoteActivities = Object.freeze([]);
let hiddenActivities = Object.freeze([]);
let valueResult = [];
let closure_27 = [];
const Store = get_initializedDefault.Store;
class SelfPresenceStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, DetectableGameStore, EmbeddedActivitiesStore, IdleStore, LibraryApplicationStore, LocalActivityStore, PresenceStore, SessionsStore, SpotifyStore, UserSettingsProtoStore);
    const items = [LocalActivityStore];
    this.syncWith(items, handleUpdate);
  }
  getLocalPresence() {
    return { status: IDLE, since: num, activities, afk };
  }
  getStatus() {
    return IDLE;
  }
  getActivities() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    return flag ? closure_27 : activities;
  }
  getUnfilteredActivities() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    return flag ? valueResult : found;
  }
  getHiddenActivities() {
    return hiddenActivities;
  }
  getPrimaryActivity() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    return this.getActivities(flag)[0];
  }
  getApplicationActivity(arg0) {
    let closure_0 = arg0;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    return this.findActivity((application_id) => application_id.application_id === closure_0, flag);
  }
  findActivity(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    activities = this.getActivities(flag);
    return activities.find(arg0);
  }
}
const prototype = SelfPresenceStore.prototype;
SelfPresenceStore.displayName = "SelfPresenceStore";
let obj = {
  START_SESSION: handleUpdate,
  CONNECTION_OPEN: function handleConnectionOpenTracked() {
    c23 = false;
    const UNKNOWN = StatusTypes.UNKNOWN;
    handleUpdate();
    const result = PresenceStore.setCurrentUserOnConnectionOpen(IDLE, valueResult);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CONNECTION_CLOSED: handleUpdate,
  IDLE: handleUpdate,
  AFK: handleUpdate,
  RUNNING_GAMES_CHANGE: handleUpdate,
  STREAMING_UPDATE: handleUpdate,
  USER_SETTINGS_PROTO_UPDATE: handleUpdate,
  LOCAL_ACTIVITY_UPDATE: handleUpdate,
  SPOTIFY_PLAYER_STATE: handleUpdate,
  SPOTIFY_PLAYER_PLAY: handleUpdate,
  USER_CONNECTIONS_UPDATE: handleUpdate,
  SESSIONS_REPLACE: handleUpdate,
  RPC_APP_DISCONNECTED: handleUpdate,
  LIBRARY_FETCH_SUCCESS: handleUpdate,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: handleUpdate,
  LOGOUT: function handleLogout() {
    c23 = true;
    closure_18 = IDLE;
    handleUpdate();
  },
  FORCE_INVISIBLE: function handleForceInvisible(invisible) {
    invisible = invisible.invisible;
    handleUpdate();
  },
  WINDOW_FOCUS: function handleWindowFocus() {
    c16 = false;
    handleUpdate();
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state.state === AppStates.ACTIVE) {
      const tmp = c16;
      if (tmp) {
        c16 = false;
        handleUpdate();
      }
    }
    return false;
  }
};
const selfPresenceStore = new SelfPresenceStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/SelfPresenceStore.tsx");

export default selfPresenceStore;
