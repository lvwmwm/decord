// Module ID: 6564
// Function ID: 6565
// Name: SelfPresenceStore
// Dependencies: [6565, 1232, 2034, 6699, 2038, 11490, 5756, 5761, 1072, 5757, 7574, 4834, 10742, 1343, 12, 504, 572, 2]

// Module 6564 (SelfPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import _modDef1343 from "module_1343" /* 1343 */;
import UserSettings from "UserSettings" /* 4834 */;
import PresenceStore2 from "PresenceStore" /* 5756 */;
import ActivityTypes from "ActivityTypes" /* 5757 */;
import LibraryApplicationUtils from "LibraryApplicationUtils" /* 7574 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10742 */;
import SpotifyStore from "SpotifyStore" /* 6565 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import DetectableGameStore from "DetectableGameStore" /* 2034 */;
import IdleStore from "IdleStore" /* 6699 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 2038 */;
import LocalActivityStore from "LocalActivityStore" /* 11490 */;
import SessionsStore from "SessionsStore" /* 5761 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const PresenceStore = PresenceStore2;

let IDLE;
let closure_16;
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
  type = type.type;
  if (ActivityTypes.ActivityTypes.LISTENING === type) {
    let shouldShowActivityResult;
    if (isListeningOnSpotifyDefault(type)) {
      shouldShowActivityResult = SpotifyStore.shouldShowActivity();
    } else {
      shouldShowActivityResult = null != type.application_id;
      if (shouldShowActivityResult) {
        const application_id3 = type.application_id;
        const tmpResult = LibraryApplicationUtils;
        shouldShowActivityResult = tmpResult.shouldShareApplicationActivity(application_id3, LibraryApplicationStore);
      }
    }
    return shouldShowActivityResult;
  } else if (ActivityTypes.ActivityTypes.PLAYING === type) {
    let result;
    if (null != type.application_id) {
      const application_id2 = type.application_id;
      const tmpResult4 = LibraryApplicationUtils;
      result = tmpResult4.shouldShareApplicationActivity(application_id2, LibraryApplicationStore);
    } else {
      const searchGamesByNameResult = DetectableGameStore.searchGamesByName(type.name);
      if (1 === searchGamesByNameResult.length) {
        const first = searchGamesByNameResult[0];
        const tmpResult5 = LibraryApplicationUtils;
        result = tmpResult5.shouldShareApplicationActivity(first, LibraryApplicationStore);
      } else {
        const ShowCurrentGame = tmp(4834).ShowCurrentGame;
        result = ShowCurrentGame.getSetting();
      }
    }
    return result;
  } else {
    if (ActivityTypes.ActivityTypes.STREAMING !== type) {
      const WATCHING = tmp(5757).ActivityTypes.WATCHING;
    }
    let result1 = null == type.application_id;
    if (!result1) {
      const application_id = type.application_id;
      const tmpResult6 = LibraryApplicationUtils;
      result1 = tmpResult6.shouldShareApplicationActivity(application_id, LibraryApplicationStore);
    }
    return result1;
  }
}
function handleUpdate() {
  let ONLINE;
  num = IdleStore.getIdleSince();
  const obj = IdleStore;
  if (num == null) {
    num = 0;
  }
  let closure_20 = obj.isAFK();
  const tmp2 = c21;
  if (tmp2) {
    IDLE = closure_16;
    ONLINE = closure_16;
  } else {
    const tmp3 = c14;
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
  const tmp11 = c21;
  if (!tmp11) {
    if (IDLE !== StatusTypes.INVISIBLE) {
      activities = LocalActivityStore.getActivities();
      found = activities.filter(shouldShowActivity);
    }
    let flag = false;
    const tmp15 = importDefault;
    if (!_modDef1343(found, found)) {
      let closure_19 = filterPlayingActivities(found);
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
      closure_25 = filterPlayingActivities(valueResult);
    }
  }
  found = [];
}
function handleConnectionOpen() {
  c21 = false;
  const UNKNOWN = StatusTypes.UNKNOWN;
  handleUpdate();
  const result = PresenceStore.setCurrentUserOnConnectionOpen(IDLE, valueResult);
}
const sortActivity = PresenceStore2.sortActivity;
const StatusTypes = Constants.StatusTypes;
const AppStates = Constants.AppStates;
let c14 = false;
({ ONLINE: IDLE, UNKNOWN: closure_16 } = StatusTypes);
let num = 0;
let found = [];
let activities = [];
const afk = false;
let c21 = true;
let remoteActivities = Object.freeze([]);
let hiddenActivities = Object.freeze([]);
let valueResult = [];
let closure_25 = [];
const Store = get_initializedDefault.Store;
class SelfPresenceStore extends Store {
  initialize() {
    this.waitFor(DetectableGameStore, IdleStore, LibraryApplicationStore, LocalActivityStore, PresenceStore, SessionsStore, SpotifyStore, UserSettingsProtoStore);
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
    return flag ? closure_25 : activities;
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
    c21 = false;
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
    c21 = true;
    closure_16 = IDLE;
    handleUpdate();
  },
  FORCE_INVISIBLE: function handleForceInvisible(invisible) {
    invisible = invisible.invisible;
    handleUpdate();
  },
  WINDOW_FOCUS: function handleWindowFocus() {
    c14 = false;
    handleUpdate();
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state.state === AppStates.ACTIVE) {
      const tmp = c14;
      if (tmp) {
        c14 = false;
        handleUpdate();
      }
    }
    return false;
  }
};
const selfPresenceStore = new SelfPresenceStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/SelfPresenceStore.tsx");

export default selfPresenceStore;
