// Module ID: 10444
// Function ID: 80538
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 1347, 4167, 4150, 10445, 4811, 1316, 4149, 1348, 4162, 10447, 1906, 4145, 653, 3803, 8239, 22, 10448, 4301, 636, 10449, 1360, 566, 686, 2]

// Module 10444 (_isNativeReflectConstruct)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "ME";
import _slicedToArray from "_slicedToArray";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_21;
let closure_22;
let closure_23;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateActivities() {
  let id;
  const items = [];
  const CustomStatusSetting = items(streamerActiveStreamMetadata[19]).CustomStatusSetting;
  const setting = CustomStatusSetting.getSetting();
  let tmp2 = null != setting;
  if (tmp2) {
    let tmp3 = "0" === setting.expiresAtMs;
    if (!tmp3) {
      const _Date = Date;
      const _Number = Number;
      const date = new Date(Number(setting.expiresAtMs));
      const _Date2 = Date;
      const time = date.getTime();
      const date1 = new Date();
      tmp3 = time - date1.getTime() > 0;
    }
    tmp2 = tmp3;
  }
  if (tmp2) {
    let obj2 = items(streamerActiveStreamMetadata[20]);
    items.push(obj2.getActivityFromCustomStatus(setting));
  }
  const items1 = [...closure_12.getActivities()];
  items.push.apply(items1);
  stream = stream.getStream();
  if (null != stream) {
    let obj = { type: constants3.STREAMING };
    const merged = Object.assign(stream);
    items.push(obj);
  }
  const set = new Set();
  const item = set(streamerActiveStreamMetadata[21]).forEach(closure_25, (arg0) => {
    let tmp2;
    [, tmp2] = arg0;
    if (null != tmp2.application_id) {
      set.add(tmp2.name);
      items.push(tmp2);
    }
  });
  const tmp23 = null != authStore.getCurrentUserActiveStream();
  const visibleGame = uiStore.getVisibleGame();
  if (tmp23) {
    streamerActiveStreamMetadata = authStore.getStreamerActiveStreamMetadata();
    const visibleRunningGames = uiStore.getVisibleRunningGames();
    let pid;
    if (null != streamerActiveStreamMetadata) {
      pid = streamerActiveStreamMetadata.pid;
    }
    let tmp30 = null;
    if (null != pid) {
      const found = visibleRunningGames.find((pid) => pid.pid === streamerActiveStreamMetadata.pid);
      let tmp32 = null;
      if (null != found) {
        tmp32 = found;
      }
      tmp30 = tmp32;
    }
    let tmp33 = tmp30;
    if (null == tmp30) {
      id = undefined;
      if (null != streamerActiveStreamMetadata) {
        id = streamerActiveStreamMetadata.id;
      }
      tmp33 = tmp30;
      if (null != id) {
        const found1 = visibleRunningGames.find((id) => id.id === streamerActiveStreamMetadata.id);
        let tmp36 = null;
        if (null != found1) {
          tmp36 = found1;
        }
        tmp33 = tmp36;
      }
    }
    if (null != tmp33) {
      let tmp25 = tmp33;
      if (null == c26) {
        let start = tmp33.start;
        if (null == start) {
          const _Date3 = Date;
          start = Date.now();
        }
        c26 = start;
        tmp25 = tmp33;
      }
    } else {
      c26 = null;
      tmp25 = visibleGame;
    }
  } else {
    c26 = null;
    tmp25 = visibleGame;
  }
  let tmp38 = null != tmp25 && null != tmp25.name;
  if (tmp38) {
    let hasItem = set.has(tmp25.name);
    if (!hasItem) {
      const items2 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(remoteActivities.getRemoteActivities(), arraySpreadResult);
      hasItem = items(streamerActiveStreamMetadata[22]).doesGameHaveRichPresence(tmp25, items2);
      const obj6 = items(streamerActiveStreamMetadata[22]);
    }
    tmp38 = hasItem;
  }
  if (null != tmp25) {
    if (null != tmp25.name) {
      if (!tmp38) {
        const findGameResult = closure_17.findGame(tmp25);
        obj = { type: constants3.PLAYING };
        ({ name: obj7.name, id } = tmp25);
        if (null == id) {
          let id1;
          if (null != findGameResult) {
            id1 = findGameResult.id;
          }
          id = id1;
        }
        obj.application_id = id;
        let obj1 = { start: null != c26 ? c26 : tmp25.start };
        obj.timestamps = obj1;
        obj1 = Object.assign(items(streamerActiveStreamMetadata[23]).maybeAddAdditionalGameMetadata(tmp25));
        obj = items.push(obj);
        const obj9 = items(streamerActiveStreamMetadata[23]);
      }
    }
  }
  activity = activity.getActivity();
  if (null != activity) {
    obj2 = { type: constants3.LISTENING };
    const merged1 = Object.assign(activity);
    items.push(obj2);
  }
}
({ ActivityFlags: closure_21, ActivityGamePlatforms: closure_22, ActivityTypes: closure_23 } = ME);
let closure_24 = [];
let closure_25 = {};
let c26 = null;
let tmp3 = ((Store) => {
  class LocalActivityStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, LocalActivityStore);
      obj = outer1_6(LocalActivityStore);
      tmp2 = outer1_5;
      if (outer1_27()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(LocalActivityStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10, outer1_15, outer1_16, outer1_9, outer1_18, outer1_12, outer1_17, outer1_11, outer1_19, outer1_20, outer1_13, outer1_14);
      const items = [outer1_12];
      this.syncWith(items, () => {
        outer2_28();
      });
    }
  };
  let items = [obj, , , , , , , ];
  obj = {
    key: "getActivities",
    value() {
      return outer1_24;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPrimaryActivity",
    value() {
      return outer1_24[0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getApplicationActivity",
    value(arg0) {
      let closure_0 = arg0;
      return this.findActivity((application_id) => application_id.application_id === closure_0);
    }
  };
  items[4] = {
    key: "getCustomStatusActivity",
    value() {
      return this.findActivity((type) => type.type === outer2_23.CUSTOM_STATUS);
    }
  };
  items[5] = {
    key: "findActivity",
    value(arg0) {
      return outer1_24.find(arg0);
    }
  };
  items[6] = {
    key: "getApplicationActivities",
    value() {
      return outer1_25;
    }
  };
  items[7] = {
    key: "getActivityForPID",
    value(arg0) {
      const values = Object.values(outer1_25);
      let num = 0;
      if (0 < values.length) {
        const tmp2 = outer1_8(values[num], 2);
        while (tmp2[0] !== arg0) {
          num = num + 1;
        }
        return tmp2[1];
      }
      return null;
    }
  };
  return callback(LocalActivityStore, items);
})(require("initialize").Store);
tmp3.displayName = "LocalActivityStore";
tmp3 = new tmp3(require("dispatcher"), {
  ROBLOX_SUBGAME_UPDATE: updateActivities,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: updateActivities,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(localActivities) {
    const obj = {};
    const merged = Object.assign(localActivities.localActivities);
    updateActivities();
  },
  START_SESSION: function handleStartSession() {
    let closure_25 = {};
    updateActivities();
  },
  LOCAL_ACTIVITY_UPDATE: function handleLocalActivityUpdate(arg0) {
    let activity;
    let partyPrivacy;
    let pid;
    let socketId;
    ({ socketId, pid, activity, partyPrivacy } = arg0);
    const items = [pid, activity, partyPrivacy];
    if (importDefault(636)(table[socketId], items)) {
      return false;
    } else {
      if (null != activity) {
        const items1 = [pid, activity, partyPrivacy];
        table[socketId] = items1;
      } else {
        delete tmp[tmp2];
      }
      updateActivities();
    }
  },
  RPC_APP_DISCONNECTED: function handleRPCAppDisconnected(arg0) {
    delete tmp[tmp2];
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
    let tmp5;
    let tmp6;
    let tmp7;
    let obj = {};
    const entries = Object.entries(obj);
    let flag = false;
    let num = 0;
    let flag2 = false;
    if (0 < entries.length) {
      do {
        let tmp = callback3;
        let tmp2 = callback3(entries[num], 2);
        let first = tmp2[0];
        let tmp4 = callback3(tmp2[1], 3);
        [tmp5, tmp6, tmp7] = tmp4;
        let flags = tmp6.flags;
        let num2 = 0;
        if (null != flags) {
          num2 = flags;
        }
        let tmp8 = require;
        let tmp9 = dependencyMap;
        let obj2 = require(10449) /* _computeActivityPartyPrivacyFlags */;
        let obj3 = require(1360) /* hasFlag */;
        flags = undefined;
        if (null != tmp6) {
          flags = tmp6.flags;
        }
        let num3 = 0;
        if (null != flags) {
          num3 = flags;
        }
        let tmp11 = constants;
        let tmp13 = constants2;
        let tmp14 = require;
        let tmp15 = dependencyMap;
        let hasFlagResult = obj3.hasFlag(num3, constants.INSTANCE);
        let obj4 = require(10449) /* _computeActivityPartyPrivacyFlags */;
        let tmp16 = obj2;
        let tmp17 = tmp6;
        let tmp18 = tmp7;
        let activityFlags = obj2.computeActivityFlags(tmp6, hasFlagResult, tmp6.platform === constants2.EMBEDDED, obj4.isContextlessEmbeddedActivity(tmp6), tmp7);
        if (activityFlags !== num2) {
          let items = [tmp5, , ];
          obj = {};
          let tmp20 = obj;
          let tmp21 = tmp6;
          let merged = Object.assign(tmp6);
          obj["flags"] = activityFlags;
          items[1] = obj;
          items[2] = tmp7;
          obj[first] = items;
          flag = true;
        } else {
          let items1 = [tmp5, tmp6, tmp7];
          obj[first] = items1;
        }
        num = num + 1;
        flag2 = flag;
      } while (num < entries.length);
    }
    updateActivities();
  },
  EMBEDDED_ACTIVITY_CLOSE: updateActivities,
  RUNNING_GAME_TOGGLE_DETECTION: updateActivities
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/LocalActivityStore.tsx");

export default tmp3;
