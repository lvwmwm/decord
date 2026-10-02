// Module ID: 8809
// Function ID: 8810
// Name: LocalActivityStore
// Dependencies: [32, 2050, 5064, 2006, 8810, 5593, 1232, 4859, 2051, 2023, 8813, 2102, 4855, 1086, 2027, 8814, 12, 8815, 4967, 1343, 8816, 1391, 504, 585, 2]

// Module 8809 (LocalActivityStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import _modDef1343 from "module_1343" /* 1343 */;
import FlagUtils from "FlagUtils" /* 1391 */;
import UserSettings from "UserSettings" /* 2027 */;
import ActivityFlagUtils from "ActivityFlagUtils" /* 8816 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ApplicationStore from "ApplicationStore" /* 5064 */;
import RunningGameStore from "RunningGameStore" /* 2006 */;
import FirstPartyRichPresenceStore from "FirstPartyRichPresenceStore" /* 8810 */;
import SpotifyStore from "SpotifyStore" /* 5593 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4859 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import DetectableGameStore from "DetectableGameStore" /* 2023 */;
import ExternalStreamingStore from "ExternalStreamingStore" /* 8813 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import SessionsStore from "SessionsStore" /* 4855 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

let set;

let closure_16;
let closure_17;
let closure_18;
let tmp;
const RobloxSubgameUtils = tmp(4967);
const userSettingToActivity = tmp(8814);
const PresenceActivityFiltering = tmp(8815);
function updateActivities() {
  let id;
  let obj3;
  let tmp22;
  items = [];
  const tmp = require;
  const CustomStatusSetting = UserSettings.CustomStatusSetting;
  const setting = CustomStatusSetting.getSetting();
  let tmp4 = null != setting;
  if (tmp4) {
    let tmp5 = "0" === setting.expiresAtMs;
    if (!tmp5) {
      const _Date = Date;
      const _Number = Number;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(Number(setting.expiresAtMs));
      const time = date.getTime();
      const date1 = new Date();
      tmp5 = time - date1.getTime() > 0;
    }
    tmp4 = tmp5;
  }
  if (tmp4) {
    const push = items.push;
    const tmpResult = userSettingToActivity;
    push(tmpResult.getActivityFromCustomStatus(setting));
  }
  const items1 = [...FirstPartyRichPresenceStore.getActivities()];
  items.push.apply(items1);
  const stream = ExternalStreamingStore.getStream();
  if (null != stream) {
    const push2 = items.push;
    const obj = { type: constants.STREAMING };
    const merged = Object.assign(stream);
    push2(obj);
  }
  const self5 = this;
  set = new Set();
  const arr3 = _modDef12;
  const item = arr3.forEach(closure_20, (arg0) => {
    let tmp;
    [, tmp] = arg0;
    if (null != tmp.application_id) {
      set.add(tmp.name);
      items.push(tmp);
    }
  });
  const tmp20 = null != ApplicationStreamingStore.getCurrentUserActiveStream();
  const visibleGame = RunningGameStore.getVisibleGame();
  const obj6 = ApplicationStreamingStore;
  const obj7 = RunningGameStore;
  if (tmp20) {
    const streamerActiveStreamMetadata = obj6.getStreamerActiveStreamMetadata();
    const visibleRunningGames = obj7.getVisibleRunningGames();
    let pid;
    if (streamerActiveStreamMetadata != null) {
      pid = streamerActiveStreamMetadata.pid;
    }
    let tmp25 = null;
    if (null != pid) {
      let found = visibleRunningGames.find((pid) => pid.pid === streamerActiveStreamMetadata.pid);
      if (found == null) {
        found = null;
      }
      tmp25 = found;
    }
    let tmp27 = null == tmp25;
    if (tmp27) {
      let id1;
      if (streamerActiveStreamMetadata != null) {
        id1 = streamerActiveStreamMetadata.id;
      }
      tmp27 = null != id1;
    }
    if (tmp27) {
      let found1 = visibleRunningGames.find((id) => id.id === streamerActiveStreamMetadata.id);
      if (found1 == null) {
        found1 = null;
      }
      tmp25 = found1;
    }
    if (null != tmp25) {
      tmp22 = tmp25;
      if (null == c25) {
        let start = tmp25.start;
        if (start == null) {
          const _Date3 = Date;
          start = Date.now();
        }
        c25 = start;
        tmp22 = tmp25;
      }
    } else {
      c25 = null;
      tmp22 = visibleGame;
    }
  } else {
    c25 = null;
    tmp22 = visibleGame;
  }
  let tmp31 = null != tmp22 && null != tmp22.name;
  if (tmp31) {
    let hasItem = set.has(tmp22.name);
    if (!hasItem) {
      const items2 = [];
      const doesGameHaveRichPresence = PresenceActivityFiltering.doesGameHaveRichPresence;
      PresenceActivityFiltering;
      const arraySpreadResult = HermesBuiltin.arraySpread(items2, items, 0);
      HermesBuiltin.arraySpread(items2, SessionsStore.getRemoteActivities(), arraySpreadResult);
      hasItem = doesGameHaveRichPresence(tmp22, items2);
    }
    tmp31 = hasItem;
  }
  const tmp40 = null != tmp22 && tmp22.isLauncher;
  if (null != tmp22) {
    if (null != tmp22.name) {
      if (!tmp31) {
        if (!tmp40) {
          const findGameResult = DetectableGameStore.findGame(tmp22);
          const obj2 = { type: constants.PLAYING, name: null, application_id: id, timestamps: obj3 };
          ({ name: obj8.name, id } = tmp22);
          const push3 = items.push;
          if (id == null) {
            let id2;
            if (findGameResult != null) {
              id2 = findGameResult.id;
            }
            id = id2;
          }
          let start2 = c25;
          if (c25 == null) {
            start2 = tmp22.start;
          }
          obj3 = { start: start2 };
          const tmpResult4 = RobloxSubgameUtils;
          const merged1 = Object.assign(tmpResult4.maybeAddAdditionalGameMetadata(tmp22));
          push3(obj2);
        }
      }
    }
  }
  const activity = SpotifyStore.getActivity();
  if (null != activity) {
    const push4 = items.push;
    const obj4 = { type: constants.LISTENING };
    const merged2 = Object.assign(activity);
    push4(obj4);
  }
}
({ ActivityFlags: closure_16, ActivityGamePlatforms: closure_17, ActivityTypes: closure_18 } = Constants);
let items = [];
let closure_20 = {};
let closure_21 = {};
let sum = 0;
let closure_23 = {};
let closure_24 = {};
let c25 = null;
const Store = get_initializedDefault.Store;
class LocalActivityStore extends Store {
  initialize() {
    this.waitFor(ApplicationStore, ApplicationStreamingStore, ChannelStore, EmbeddedActivitiesStore, ExternalStreamingStore, FirstPartyRichPresenceStore, DetectableGameStore, RunningGameStore, SelectedChannelStore, SessionsStore, SpotifyStore, UserSettingsProtoStore);
    items = [FirstPartyRichPresenceStore];
    this.syncWith(items, () => {
      updateActivities();
    });
  }
  getActivities() {
    return items;
  }
  getPrimaryActivity() {
    return items[0];
  }
  getApplicationActivity(arg0) {
    let closure_0 = arg0;
    return this.findActivity((application_id) => application_id.application_id === closure_0);
  }
  getCustomStatusActivity() {
    return this.findActivity((type) => type.type === constants.CUSTOM_STATUS);
  }
  findActivity(cResult) {
    return items.find(cResult);
  }
  getApplicationActivities() {
    return closure_20;
  }
  getActivityForPID(arg0) {
    const values = Object.values(closure_20);
    const obj = values[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp4 = _slicedToArray(tmp2, 2);
      if (tmp4[0] === arg0) {
        obj.return();
        return tmp5;
      }
    }
    return null;
  }
  getApplicationIdForPID(pid) {
    const entries = Object.entries(closure_21);
    const obj = entries[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let first = tmp5[0];
      let tmp7 = _slicedToArray(tmp5[1], 2);
      if (tmp7[0] === pid) {
        obj.return();
        return tmp8;
      }
      continue;
    }
  }
}
const prototype = LocalActivityStore.prototype;
LocalActivityStore.displayName = "LocalActivityStore";
let obj = {
  ROBLOX_SUBGAME_UPDATE: updateActivities,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: updateActivities,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(localActivities) {
    const obj = {};
    const merged = Object.assign(localActivities.localActivities);
    closure_20 = obj;
    updateActivities();
  },
  START_SESSION: function handleStartSession() {
    closure_20 = {};
    closure_21 = {};
    sum = 0;
    closure_23 = {};
    closure_24 = {};
    updateActivities();
  },
  LOCAL_ACTIVITY_UPDATE: function handleLocalActivityUpdate(arg0) {
    let activity;
    let applicationId;
    let partyPrivacy;
    let pid;
    let socketId;
    let tmp15;
    ({ socketId, pid, applicationId, activity, partyPrivacy } = arg0);
    let closure_0;
    let tmp = closure_23[socketId];
    if (null == tmp) {
      sum = sum + 1;
      closure_23[socketId] = sum;
      tmp = sum;
    }
    let flag = false;
    if (null != pid) {
      closure_0 = tmp6;
      let someResult = null != tmp6;
      if (someResult) {
        const _Object = Object;
        const keys = Object.keys(closure_21);
        someResult = keys.some((item) => closure_23[item] === closure_0);
      }
      flag = false;
      const tmp10 = null == closure_24[pid] || tmp >= closure_24[pid] || !someResult;
      if (tmp10) {
        flag = tmp !== tmp6;
        closure_24[pid] = tmp;
      }
    }
    if (null == activity) {
      tmp15 = null == closure_20[socketId];
    } else {
      items = [pid, activity, partyPrivacy];
      tmp15 = _modDef1343(closure_20[socketId], items);
    }
    let tmp17 = null == applicationId;
    if (!tmp17) {
      const items1 = [pid, applicationId];
      tmp17 = _modDef1343(closure_21[socketId], items1);
    }
    if (tmp15) {
      if (tmp17) {
        if (!flag) {
          return false;
        }
      }
    }
    if (null != applicationId) {
      const items2 = [pid, applicationId];
      closure_21[socketId] = items2;
    }
    if (null != activity) {
      const items3 = [pid, activity, partyPrivacy];
      closure_20[socketId] = items3;
    } else {
      delete closure_20[socketId];
    }
    updateActivities();
  },
  RPC_APP_CONNECTED: function handleRPCAppConnected(socketId) {
    sum = sum + 1;
    closure_23[socketId.socketId] = sum;
  },
  RPC_APP_DISCONNECTED: function handleRPCAppDisconnected(socketId) {
    socketId = socketId.socketId;
    delete closure_20[socketId];
    delete closure_21[socketId];
    updateActivities();
  },
  RUNNING_GAMES_CHANGE: updateActivities,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: updateActivities,
  SPOTIFY_PLAYER_STATE: updateActivities,
  SPOTIFY_PLAYER_PLAY: updateActivities,
  STREAMING_UPDATE: updateActivities,
  USER_CONNECTIONS_UPDATE: updateActivities,
  STREAM_START: updateActivities,
  STREAM_STOP: updateActivities,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate() {
    let constants2;
    function recalculateActivityPartyPrivacyFlags() {
      let tmp8;
      let tmp9;
      obj = {};
      let flag = false;
      const entries = Object.entries(obj);
      const tmp2 = entries[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let tmp5 = _slicedToArray(tmp3, 2);
        let first = tmp5[0];
        let tmp7 = _slicedToArray(tmp5[1], 3);
        [tmp8, tmp9] = tmp7;
        let tmp10 = tmp9;
        let tmp11 = tmp7[2];
        let num = tmp9.flags;
        if (num == null) {
          num = 0;
        }
        let tmp12 = num;
        let tmp13 = require;
        let tmp14 = dependencyMap;
        let tmp15 = ActivityFlagUtils;
        let computeActivityFlags = tmp15.computeActivityFlags;
        let tmp16 = tmp9;
        let tmp17 = FlagUtils;
        let num2;
        let hasFlag = tmp17.hasFlag;
        if (tmp10 != null) {
          num2 = tmp10.flags;
        }
        if (num2 == null) {
          num2 = 0;
        }
        let hasFlagResult = hasFlag(num2, constants.INSTANCE);
        let platform = tmp10.platform;
        let EMBEDDED = constants2.EMBEDDED;
        let tmp13Result = tmp13(tmp14[20]);
        let activityFlags = computeActivityFlags(tmp16, hasFlagResult, platform === EMBEDDED, tmp13Result.isContextlessEmbeddedActivity(tmp10), tmp11);
        if (activityFlags !== tmp12) {
          items = [tmp8, , ];
          let obj2 = { flags: tmp26 };
          let merged = Object.assign(tmp10);
          items[1] = obj2;
          items[2] = tmp11;
          obj[first] = items;
          flag = true;
        } else {
          let items1 = [tmp8, , ];
          items1[1] = tmp10;
          items1[2] = tmp11;
          obj[first] = items1;
        }
        continue;
      }
      let str = "NO_CHANGES";
      if (flag) {
        str = "APPLICATION_ACTIVITIES_CHANGED";
      }
      return str;
    }
    recalculateActivityPartyPrivacyFlags();
    let tmp2 = updateActivities();
  },
  EMBEDDED_ACTIVITY_CLOSE: updateActivities,
  RUNNING_GAME_TOGGLE_DETECTION: updateActivities
};
const localActivityStore = new LocalActivityStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/LocalActivityStore.tsx");

export default localActivityStore;
