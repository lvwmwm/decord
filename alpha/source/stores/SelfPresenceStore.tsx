// Module ID: 6533
// Function ID: 6534
// Name: SelfPresenceStore
// Dependencies: [6534, 1243, 2036, 6668, 2040, 11233, 5748, 5752, 1084, 7543, 4832, 10686, 1354, 12, 504, 584, 2]

// Module 6533 (SelfPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _modDef1354 from "module_1354" /* 1354 */;
import UserSettings from "UserSettings" /* 4832 */;
import PresenceStore2 from "PresenceStore" /* 5748 */;
import LibraryApplicationUtils from "LibraryApplicationUtils" /* 7543 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10686 */;
import SpotifyStore from "SpotifyStore" /* 6534 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import DetectableGameStore from "DetectableGameStore" /* 2036 */;
import IdleStore from "IdleStore" /* 6668 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 2040 */;
import LocalActivityStore from "LocalActivityStore" /* 11233 */;
import SessionsStore from "SessionsStore" /* 5752 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const PresenceStore = PresenceStore2;

let IDLE;
let closure_14;
let closure_17;
let map1;
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
      if (nextResult.type === map1.PLAYING) {
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
  if (map1.LISTENING === type) {
    let shouldShowActivityResult;
    if (isListeningOnSpotifyDefault(type)) {
      shouldShowActivityResult = SpotifyStore.shouldShowActivity();
    } else {
      shouldShowActivityResult = null != type.application_id;
      if (shouldShowActivityResult) {
        const application_id3 = type.application_id;
        const obj4 = LibraryApplicationUtils;
        shouldShowActivityResult = obj4.shouldShareApplicationActivity(application_id3, LibraryApplicationStore);
      }
    }
    return shouldShowActivityResult;
  } else if (map1.PLAYING === type) {
    let result;
    if (null != type.application_id) {
      const application_id2 = type.application_id;
      const obj3 = LibraryApplicationUtils;
      result = obj3.shouldShareApplicationActivity(application_id2, LibraryApplicationStore);
    } else {
      const searchGamesByNameResult = DetectableGameStore.searchGamesByName(type.name);
      if (1 === searchGamesByNameResult.length) {
        const first = searchGamesByNameResult[0];
        const obj2 = LibraryApplicationUtils;
        result = obj2.shouldShareApplicationActivity(first, LibraryApplicationStore);
      } else {
        const ShowCurrentGame = UserSettings.ShowCurrentGame;
        result = ShowCurrentGame.getSetting();
      }
    }
    return result;
  } else {
    if (map1.STREAMING !== type) {
      const WATCHING = tmp.WATCHING;
    }
    let result1 = null == type.application_id;
    if (!result1) {
      const application_id = type.application_id;
      const obj = LibraryApplicationUtils;
      result1 = obj.shouldShareApplicationActivity(application_id, LibraryApplicationStore);
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
  let closure_21 = obj.isAFK();
  const tmp2 = c22;
  if (tmp2) {
    IDLE = closure_17;
    ONLINE = closure_17;
  } else {
    const tmp3 = c15;
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
  const tmp11 = c22;
  if (!tmp11) {
    if (IDLE !== StatusTypes.INVISIBLE) {
      activities = LocalActivityStore.getActivities();
      found = activities.filter(shouldShowActivity);
    }
    let flag = false;
    const tmp15 = importDefault;
    if (!_modDef1354(found, found)) {
      let closure_20 = filterPlayingActivities(found);
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
      HermesBuiltin.arraySpread(items, remoteActivities.filter((type) => type.type !== constants.CUSTOM_STATUS), arraySpreadResult);
      const tmp15ResultResult = tmp15Result(items.sort(sortActivity));
      const iter = tmp15ResultResult.uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name);
      valueResult = iter.value();
      closure_26 = filterPlayingActivities(valueResult);
    }
  }
  found = [];
}
function handleConnectionOpen() {
  c22 = false;
  const UNKNOWN = StatusTypes.UNKNOWN;
  handleUpdate();
  const result = PresenceStore.setCurrentUserOnConnectionOpen(IDLE, valueResult);
}
const sortActivity = PresenceStore2.sortActivity;
const StatusTypes = Constants.StatusTypes;
({ ActivityTypes: map1, AppStates: closure_14 } = Constants);
let c15 = false;
({ ONLINE: IDLE, UNKNOWN: closure_17 } = StatusTypes);
let num = 0;
let found = [];
let activities = [];
const afk = false;
let c22 = true;
let remoteActivities = Object.freeze([]);
let hiddenActivities = Object.freeze([]);
let valueResult = [];
let closure_26 = [];
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
    return flag ? closure_26 : activities;
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
  findActivity(cResult) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    activities = this.getActivities(flag);
    return activities.find(cResult);
  }
}
const prototype = SelfPresenceStore.prototype;
SelfPresenceStore.displayName = "SelfPresenceStore";
let obj = {
  START_SESSION: handleUpdate,
  CONNECTION_OPEN: function handleConnectionOpenTracked() {
    c22 = false;
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
    c22 = true;
    closure_17 = IDLE;
    handleUpdate();
  },
  FORCE_INVISIBLE: function handleForceInvisible(invisible) {
    invisible = invisible.invisible;
    handleUpdate();
  },
  WINDOW_FOCUS: function handleWindowFocus() {
    c15 = false;
    handleUpdate();
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state.state === constants2.ACTIVE) {
      const tmp = c15;
      if (tmp) {
        c15 = false;
        handleUpdate();
      }
    }
    return false;
  }
};
const selfPresenceStore = new SelfPresenceStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/SelfPresenceStore.tsx");

export default selfPresenceStore;
