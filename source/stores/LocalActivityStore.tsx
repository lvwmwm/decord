// Module ID: 10434
// Function ID: 80488
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10434 (_isNativeReflectConstruct)
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
  const arg1 = items;
  const CustomStatusSetting = arg1(dependencyMap[19]).CustomStatusSetting;
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
    let obj2 = arg1(dependencyMap[20]);
    items.push(obj2.getActivityFromCustomStatus(setting));
  }
  const items1 = [...closure_12.getActivities()];
  items.push.apply(items1);
  const stream = stream.getStream();
  if (null != stream) {
    let obj = { type: constants.STREAMING };
    const merged = Object.assign(stream);
    items.push(obj);
  }
  const set = new Set();
  const importDefault = set;
  const item = importDefault(dependencyMap[21]).forEach(closure_25, (arg0) => {
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
    const streamerActiveStreamMetadata = authStore.getStreamerActiveStreamMetadata();
    const dependencyMap = streamerActiveStreamMetadata;
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
      if (null == closure_26) {
        let start = tmp33.start;
        if (null == start) {
          const _Date3 = Date;
          start = Date.now();
        }
        closure_26 = start;
        tmp25 = tmp33;
      }
    } else {
      closure_26 = null;
      tmp25 = visibleGame;
    }
  } else {
    closure_26 = null;
    tmp25 = visibleGame;
  }
  let tmp38 = null != tmp25 && null != tmp25.name;
  if (tmp38) {
    let hasItem = set.has(tmp25.name);
    if (!hasItem) {
      const items2 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(remoteActivities.getRemoteActivities(), arraySpreadResult);
      hasItem = arg1(dependencyMap[22]).doesGameHaveRichPresence(tmp25, items2);
      const obj6 = arg1(dependencyMap[22]);
    }
    tmp38 = hasItem;
  }
  if (null != tmp25) {
    if (null != tmp25.name) {
      if (!tmp38) {
        const findGameResult = closure_17.findGame(tmp25);
        obj = { type: constants.PLAYING };
        ({ name: obj7.name, id } = tmp25);
        if (null == id) {
          let id1;
          if (null != findGameResult) {
            id1 = findGameResult.id;
          }
          id = id1;
        }
        obj.application_id = id;
        let obj1 = { start: null != closure_26 ? closure_26 : tmp25.start };
        obj.timestamps = obj1;
        obj1 = Object.assign(arg1(dependencyMap[23]).maybeAddAdditionalGameMetadata(tmp25));
        obj = items.push(obj);
        const obj9 = arg1(dependencyMap[23]);
      }
    }
  }
  const activity = activity.getActivity();
  if (null != activity) {
    obj2 = { type: constants.LISTENING };
    const merged1 = Object.assign(activity);
    items.push(obj2);
  }
  if (!importDefault(dependencyMap[24])(closure_24, items)) {
    closure_24 = items;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
let closure_18 = importDefault(dependencyMap[15]);
let closure_19 = importDefault(dependencyMap[16]);
let closure_20 = importDefault(dependencyMap[17]);
({ ActivityFlags: closure_21, ActivityGamePlatforms: closure_22, ActivityTypes: closure_23 } = arg1(dependencyMap[18]));
let closure_24 = [];
let closure_25 = {};
let closure_26 = null;
let tmp3 = (Store) => {
  class LocalActivityStore {
    constructor() {
      self = this;
      tmp = closure_3(this, LocalActivityStore);
      obj = closure_6(LocalActivityStore);
      tmp2 = closure_5;
      if (closure_27()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = LocalActivityStore;
  callback2(LocalActivityStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10, closure_15, closure_16, closure_9, closure_18, closure_12, closure_17, closure_11, closure_19, closure_20, closure_13, closure_14);
      const items = [closure_12];
      this.syncWith(items, () => {
        callback();
      });
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getActivities",
    value() {
      return closure_24;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPrimaryActivity",
    value() {
      return closure_24[0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getApplicationActivity",
    value(arg0) {
      const LocalActivityStore = arg0;
      return this.findActivity((application_id) => application_id.application_id === application_id);
    }
  };
  items[4] = {
    key: "getCustomStatusActivity",
    value() {
      return this.findActivity((type) => type.type === constants.CUSTOM_STATUS);
    }
  };
  items[5] = {
    key: "findActivity",
    value(arg0) {
      return closure_24.find(arg0);
    }
  };
  items[6] = {
    key: "getApplicationActivities",
    value() {
      return closure_25;
    }
  };
  items[7] = {
    key: "getActivityForPID",
    value(arg0) {
      const values = Object.values(closure_25);
      let num = 0;
      if (0 < values.length) {
        const tmp2 = callback3(values[num], 2);
        while (tmp2[0] !== arg0) {
          num = num + 1;
        }
        return tmp2[1];
      }
      return null;
    }
  };
  return callback(LocalActivityStore, items);
}(importDefault(dependencyMap[27]).Store);
tmp3.displayName = "LocalActivityStore";
tmp3 = new tmp3(importDefault(dependencyMap[28]), {
  ROBLOX_SUBGAME_UPDATE: updateActivities,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: updateActivities,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(localActivities) {
    const merged = Object.assign(localActivities.localActivities);
    let closure_25 = {};
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
    if (importDefault(dependencyMap[24])(closure_25[socketId], items)) {
      return false;
    } else {
      if (null != activity) {
        const items1 = [pid, activity, partyPrivacy];
        closure_25[socketId] = items1;
      } else {
        delete r2[r4];
      }
      updateActivities();
    }
  },
  RPC_APP_DISCONNECTED: function handleRPCAppDisconnected(arg0) {
    delete r1[r2];
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
    const entries = Object.entries(closure_25);
    let flag = false;
    let num = 0;
    let flag2 = false;
    if (0 < entries.length) {
      do {
        let tmp = closure_8;
        let tmp2 = closure_8(entries[num], 2);
        let first = tmp2[0];
        let tmp4 = closure_8(tmp2[1], 3);
        [tmp5, tmp6, tmp7] = tmp4;
        let flags = tmp6.flags;
        let num2 = 0;
        if (null != flags) {
          num2 = flags;
        }
        let tmp8 = closure_0;
        let tmp9 = closure_2;
        let obj2 = closure_0(closure_2[25]);
        let obj3 = closure_0(closure_2[26]);
        flags = undefined;
        if (null != tmp6) {
          flags = tmp6.flags;
        }
        let num3 = 0;
        if (null != flags) {
          num3 = flags;
        }
        let tmp11 = closure_21;
        let tmp13 = closure_22;
        let tmp14 = closure_0;
        let tmp15 = closure_2;
        let hasFlagResult = obj3.hasFlag(num3, closure_21.INSTANCE);
        let obj4 = closure_0(closure_2[25]);
        let tmp16 = obj2;
        let tmp17 = tmp6;
        let tmp18 = tmp7;
        let activityFlags = obj2.computeActivityFlags(tmp6, hasFlagResult, tmp6.platform === closure_22.EMBEDDED, obj4.isContextlessEmbeddedActivity(tmp6), tmp7);
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
    if (flag2) {
      closure_25 = obj;
    }
    updateActivities();
  },
  EMBEDDED_ACTIVITY_CLOSE: updateActivities,
  RUNNING_GAME_TOGGLE_DETECTION: updateActivities
});
const obj = {
  ROBLOX_SUBGAME_UPDATE: updateActivities,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: updateActivities,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(localActivities) {
    const merged = Object.assign(localActivities.localActivities);
    let closure_25 = {};
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
    if (importDefault(dependencyMap[24])(closure_25[socketId], items)) {
      return false;
    } else {
      if (null != activity) {
        const items1 = [pid, activity, partyPrivacy];
        closure_25[socketId] = items1;
      } else {
        delete r2[r4];
      }
      updateActivities();
    }
  },
  RPC_APP_DISCONNECTED: function handleRPCAppDisconnected(arg0) {
    delete r1[r2];
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
    const entries = Object.entries(closure_25);
    let flag = false;
    let num = 0;
    let flag2 = false;
    if (0 < entries.length) {
      do {
        let tmp = closure_8;
        let tmp2 = closure_8(entries[num], 2);
        let first = tmp2[0];
        let tmp4 = closure_8(tmp2[1], 3);
        [tmp5, tmp6, tmp7] = tmp4;
        let flags = tmp6.flags;
        let num2 = 0;
        if (null != flags) {
          num2 = flags;
        }
        let tmp8 = closure_0;
        let tmp9 = closure_2;
        let obj2 = closure_0(closure_2[25]);
        let obj3 = closure_0(closure_2[26]);
        flags = undefined;
        if (null != tmp6) {
          flags = tmp6.flags;
        }
        let num3 = 0;
        if (null != flags) {
          num3 = flags;
        }
        let tmp11 = closure_21;
        let tmp13 = closure_22;
        let tmp14 = closure_0;
        let tmp15 = closure_2;
        let hasFlagResult = obj3.hasFlag(num3, closure_21.INSTANCE);
        let obj4 = closure_0(closure_2[25]);
        let tmp16 = obj2;
        let tmp17 = tmp6;
        let tmp18 = tmp7;
        let activityFlags = obj2.computeActivityFlags(tmp6, hasFlagResult, tmp6.platform === closure_22.EMBEDDED, obj4.isContextlessEmbeddedActivity(tmp6), tmp7);
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
    if (flag2) {
      closure_25 = obj;
    }
    updateActivities();
  },
  EMBEDDED_ACTIVITY_CLOSE: updateActivities,
  RUNNING_GAME_TOGGLE_DETECTION: updateActivities
};
const tmp2 = arg1(dependencyMap[18]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("stores/LocalActivityStore.tsx");

export default tmp3;
