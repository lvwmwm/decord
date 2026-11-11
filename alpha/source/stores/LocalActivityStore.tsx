// Module ID: 7253
// Function ID: 7254
// Name: LocalActivityStore
// Dependencies: [32, 5091, 2162, 2137, 7254, 7255, 7226, 1231, 6757, 5092, 2156, 15871, 5146, 6010, 1072, 5068, 9463, 6006, 12, 15872, 15873, 6749, 1342, 7406, 12605, 1403, 504, 572, 2]

// Module 7253 (LocalActivityStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import _modDef1342 from "module_1342" /* 1342 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import ActivityTypes from "ActivityTypes" /* 6006 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7406 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5091 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import RunningGameStore from "RunningGameStore" /* 2137 */;
import SocialSdkApplicationStore from "SocialSdkApplicationStore" /* 7254 */;
import FirstPartyRichPresenceStore from "FirstPartyRichPresenceStore" /* 7255 */;
import SpotifyStore from "SpotifyStore" /* 7226 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6757 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import DetectableGameStore from "DetectableGameStore" /* 2156 */;
import ExternalStreamingStore from "ExternalStreamingStore" /* 15871 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import SessionsStore from "SessionsStore" /* 6010 */;
import size from "module_2" /* 2 */;

let tmp;
const ActivityFlagUtils = tmp(12605);
function updateActivities() {
  let id;
  let obj3;
  let streamerActiveStreamMetadata;
  let tmp21;
  const items = [];
  const tmp = items;
  let tmp2 = streamerActiveStreamMetadata;
  const CustomStatusSetting = items(streamerActiveStreamMetadata[15]).CustomStatusSetting;
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
    const tmpResult = tmp(tmp2[16]);
    push(tmpResult.getActivityFromCustomStatus(setting));
  }
  const items1 = [...FirstPartyRichPresenceStore.getActivities()];
  items.push.apply(items1);
  const stream = ExternalStreamingStore.getStream();
  if (null != stream) {
    const push2 = items.push;
    const obj = { type: tmp(tmp2[17]).ActivityTypes.STREAMING };
    const merged = Object.assign(stream);
    push2(obj);
  }
  const self5 = this;
  set = new Set();
  const arr3 = set(tmp2[18]);
  const item = arr3.forEach(closure_19, (arg0) => {
    let tmp;
    [, tmp] = arg0;
    if (null != tmp.application_id) {
      set.add(tmp.name);
      items.push(tmp);
    }
  });
  const tmp19 = null != ApplicationStreamingStore.getCurrentUserActiveStream();
  const visibleGame = RunningGameStore.getVisibleGame();
  const obj6 = ApplicationStreamingStore;
  if (tmp19) {
    streamerActiveStreamMetadata = obj6.getStreamerActiveStreamMetadata();
    const visibleRunningGames = obj7.getVisibleRunningGames();
    let pid;
    if (streamerActiveStreamMetadata != null) {
      pid = streamerActiveStreamMetadata.pid;
    }
    let tmp24 = null;
    if (null != pid) {
      let found = visibleRunningGames.find((pid) => pid.pid === streamerActiveStreamMetadata.pid);
      if (found == null) {
        found = null;
      }
      tmp24 = found;
    }
    let tmp26 = null == tmp24;
    if (tmp26) {
      let id1;
      if (streamerActiveStreamMetadata != null) {
        id1 = streamerActiveStreamMetadata.id;
      }
      tmp26 = null != id1;
    }
    if (tmp26) {
      let found1 = visibleRunningGames.find((id) => id.id === streamerActiveStreamMetadata.id);
      if (found1 == null) {
        found1 = null;
      }
      tmp24 = found1;
    }
    if (null != tmp24) {
      tmp21 = tmp24;
      if (null == c21) {
        let start = tmp24.start;
        if (start == null) {
          const _Date3 = Date;
          start = Date.now();
        }
        c21 = start;
        tmp21 = tmp24;
      }
    } else {
      c21 = null;
      tmp21 = visibleGame;
    }
  } else {
    c21 = null;
    tmp21 = visibleGame;
  }
  let sdkResolutionForPID;
  if (null != tmp21) {
    sdkResolutionForPID = obj7.getSdkResolutionForPID(tmp21.pid);
  }
  let id2;
  if (null != sdkResolutionForPID) {
    if (sdkResolutionForPID.type !== tmp(tmp2[19]).SdkCanonicalGameResolutionType.UNRESOLVED) {
      id2 = sdkResolutionForPID.game.id;
    }
  }
  const remoteActivities = SessionsStore.getRemoteActivities();
  let someResult = null != id2;
  if (someResult) {
    const items2 = [];
    HermesBuiltin.arraySpread(items2, remoteActivities, HermesBuiltin.arraySpread(items2, items, 0));
    someResult = items2.some((application_id) => {
      let tmp2 = application_id.application_id === id2;
      if (!tmp2) {
        application_id = application_id.application_id;
        const getApplication = ApplicationStore.getApplication;
        const application = getApplication(application_id);
        let canonicalGameId;
        if (application != null) {
          canonicalGameId = application.getCanonicalGameId();
        }
        tmp2 = canonicalGameId === tmp;
      }
      return tmp2;
    });
  }
  let tmp39 = null != tmp21 && null != tmp21.name;
  if (tmp39) {
    if (!someResult) {
      someResult = set.has(tmp21.name);
    }
    if (!someResult) {
      const items3 = [];
      const doesGameHaveRichPresence = tmp(tmp2[20]).doesGameHaveRichPresence;
      tmp(tmp2[20]);
      HermesBuiltin.arraySpread(items3, remoteActivities, HermesBuiltin.arraySpread(items3, items, 0));
      someResult = doesGameHaveRichPresence(tmp21, items3);
    }
    tmp39 = someResult;
  }
  const tmp46 = null != tmp21 && tmp21.isLauncher;
  if (null != tmp21) {
    if (null != tmp21.name) {
      if (!tmp39) {
        if (!tmp46) {
          const findGameResult = DetectableGameStore.findGame(tmp21);
          const push3 = items.push;
          const obj2 = { type: tmp(tmp2[17]).ActivityTypes.PLAYING, name: null, application_id: id, timestamps: obj3 };
          ({ name: obj8.name, id } = tmp21);
          if (id == null) {
            let id3;
            if (findGameResult != null) {
              id3 = findGameResult.id;
            }
            id = id3;
          }
          let start2 = c21;
          if (c21 == null) {
            start2 = tmp21.start;
          }
          obj3 = { start: start2 };
          const tmpResult4 = tmp(tmp2[21]);
          const merged1 = Object.assign(tmpResult4.maybeAddAdditionalGameMetadata(tmp21));
          push3(obj2);
        }
      }
    }
  }
  const activity = SpotifyStore.getActivity();
  if (null != activity) {
    const push4 = items.push;
    const obj4 = { type: tmp(tmp2[17]).ActivityTypes.LISTENING };
    const merged2 = Object.assign(activity);
    push4(obj4);
  }
  let flag = !tmp17(tmp2[22])(items, items);
  set(tmp2[22])(items, items);
  if (flag) {
    flag = true;
  }
  return flag;
}
function isNonContextlessEmbeddedActivity(platform) {
  let tmp3 = platform.platform === ActivityGamePlatforms.ActivityGamePlatforms.EMBEDDED;
  if (tmp3) {
    const tmpResult = ActivityFlagUtils;
    tmp3 = !tmpResult.isContextlessEmbeddedActivity(platform);
  }
  return tmp3;
}
const ActivityFlags = Constants.ActivityFlags;
const authStore4 = [];
let closure_19 = {};
let set = new Set();
let c21 = null;
const Store = get_initializedDefault.Store;
class LocalActivityStore extends Store {
  initialize() {
    this.waitFor(ApplicationStore, ApplicationStreamingStore, ChannelStore, EmbeddedActivitiesStore, ExternalStreamingStore, FirstPartyRichPresenceStore, DetectableGameStore, RunningGameStore, SelectedChannelStore, SessionsStore, SocialSdkApplicationStore, SpotifyStore, UserSettingsProtoStore);
    const items = [FirstPartyRichPresenceStore];
    this.syncWith(items, () => updateActivities());
  }
  getActivities() {
    return closure_18;
  }
  getPrimaryActivity() {
    return closure_18[0];
  }
  getApplicationActivity(arg0) {
    let closure_0 = arg0;
    return this.findActivity((application_id) => application_id.application_id === closure_0);
  }
  getCustomStatusActivity() {
    return this.findActivity((type) => type.type === ActivityTypes.ActivityTypes.CUSTOM_STATUS);
  }
  findActivity(arg0) {
    return closure_18.find(arg0);
  }
  getApplicationActivities() {
    return closure_19;
  }
  getActivityForPID(arg0) {
    const values = Object.values(closure_19);
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
}
const prototype = LocalActivityStore.prototype;
LocalActivityStore.displayName = "LocalActivityStore";
let obj = {
  ROBLOX_SUBGAME_UPDATE: updateActivities,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: updateActivities,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(localActivities) {
    const obj = {};
    const merged = Object.assign(localActivities.localActivities);
    closure_19 = obj;
    updateActivities();
  },
  START_SESSION: function handleStartSession() {
    closure_19 = {};
    set.clear();
    updateActivities();
  },
  LOCAL_ACTIVITY_UPDATE: function handleLocalActivityUpdate(arg0) {
    let activity;
    let application_id;
    let partyPrivacy;
    let pid;
    let socketId;
    let tmp7;
    ({ socketId, pid, activity, partyPrivacy } = arg0);
    if (activity != null) {
      application_id = activity.application_id;
    }
    if (null != activity) {
      if (null != application_id) {
        let tmp = activity.platform === ActivityGamePlatforms.ActivityGamePlatforms.EMBEDDED;
        const tmp11 = require;
        if (tmp) {
          const tmp11Result = tmp11(12605);
          tmp = !tmp11Result.isContextlessEmbeddedActivity(activity);
        }
        if (tmp) {
          const obj2 = set;
          if (set.has(application_id)) {
            const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
            if (selfEmbeddedActivities.has(application_id)) {
              obj2.delete(application_id);
            } else {
              return false;
            }
          }
        }
      }
    }
    if (null == activity) {
      tmp7 = null == closure_19[socketId];
    } else {
      const items = [pid, activity, partyPrivacy];
      tmp7 = _modDef1342(closure_19[socketId], items);
    }
    if (!tmp7) {
      if (null != activity) {
        const items1 = [pid, activity, partyPrivacy];
        closure_19[socketId] = items1;
      } else {
        delete closure_19[socketId];
      }
    }
    let tmp10 = !tmp7;
    if (tmp7) {
      tmp10 = updateActivities();
    }
    return tmp10;
  },
  RPC_APP_DISCONNECTED: function handleRPCAppDisconnected(arg0) {
    delete closure_19[arg0.socketId];
    updateActivities();
  },
  RUNNING_GAMES_CHANGE: updateActivities,
  SOCIAL_SDK_GAMES_UPDATE: updateActivities,
  APPLICATION_FETCH_SUCCESS: updateActivities,
  APPLICATIONS_FETCH_SUCCESS: updateActivities,
  GAMES_DATABASE_UPDATE: updateActivities,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: updateActivities,
  SPOTIFY_PLAYER_STATE: updateActivities,
  SPOTIFY_PLAYER_PLAY: updateActivities,
  STREAMING_UPDATE: updateActivities,
  USER_CONNECTIONS_UPDATE: updateActivities,
  STREAM_START: updateActivities,
  STREAM_STOP: updateActivities,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate() {
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
        let tmp13 = require;
        let tmp14 = dependencyMap;
        let tmp12 = num;
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
        let EMBEDDED = tmp13(tmp14[23]).ActivityGamePlatforms.EMBEDDED;
        let tmp13Result = tmp13(tmp14[24]);
        let activityFlags = computeActivityFlags(tmp16, hasFlagResult, platform === EMBEDDED, tmp13Result.isContextlessEmbeddedActivity(tmp10), tmp11);
        if (activityFlags !== tmp12) {
          let items = [tmp8, , ];
          let obj2 = { flags: tmp25 };
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
  EMBEDDED_ACTIVITY_CLOSE: function handleEmbeddedActivityClose(applicationId) {
    let omitByResult;
    applicationId = applicationId.applicationId;
    set.add(applicationId);
    const obj = _modDef12;
    omitByResult = obj.omitBy(omitByResult, (arg0) => {
      let tmp;
      [, tmp] = arg0;
      const tmp2 = tmp.application_id === applicationId && isNonContextlessEmbeddedActivity(tmp);
      return tmp2;
    });
    const obj2 = _modDef12;
    const sizeResult = obj2.size(omitByResult);
    const obj3 = _modDef12;
    const sizeResult1 = obj3.size(omitByResult);
    const tmp5 = updateActivities() || sizeResult !== sizeResult1;
    return tmp5;
  },
  RUNNING_GAME_TOGGLE_DETECTION: updateActivities
};
const localActivityStore = new LocalActivityStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/LocalActivityStore.tsx");

export default localActivityStore;
