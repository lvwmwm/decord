// Module ID: 5313
// Function ID: 45132
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5313 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleChannelSelect(arg0) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  let flag = false;
  if (channelId !== closure_15) {
    let tmp2 = null;
    if (null != channelId) {
      tmp2 = channelId;
    }
    closure_15 = tmp2;
    let isMatch = null != channelId;
    if (isMatch) {
      isMatch = ID_REGEX.test(channelId);
    }
    let flag2 = false;
    if (isMatch) {
      importDefaultResult.track(channelId);
      const pendingUsages = closure_17.pendingUsages;
      let obj = { key: channelId };
      const _Date = Date;
      obj.timestamp = Date.now();
      pendingUsages.push(obj);
      flag2 = true;
    }
    flag = flag2;
  }
  let tmp10 = flag;
  if (guildId !== closure_16) {
    let tmp12 = null;
    if (null != guildId) {
      tmp12 = guildId;
    }
    closure_16 = tmp12;
    let isMatch1 = null != guildId;
    if (isMatch1) {
      isMatch1 = ID_REGEX.test(guildId);
    }
    if (isMatch1) {
      importDefaultResult.track(guildId);
      const pendingUsages1 = closure_17.pendingUsages;
      obj = { key: guildId };
      const _Date2 = Date;
      obj.timestamp = Date.now();
      pendingUsages1.push(obj);
      flag = true;
    }
    tmp10 = flag;
  }
  return tmp10;
}
function initFrecency() {
  const guildAndChannelFrecency = obj.frecencyWithoutFetchingLatest.guildAndChannelFrecency;
  let guildAndChannels;
  if (null != guildAndChannelFrecency) {
    guildAndChannels = guildAndChannelFrecency.guildAndChannels;
  }
  if (null == guildAndChannels) {
    return false;
  } else {
    const obj = importDefault(dependencyMap[13]);
    importDefaultResult.overwriteHistory(obj.mapValues(guildAndChannels, (recentUses) => {
      const obj = {};
      const merged = Object.assign(recentUses);
      recentUses = recentUses.recentUses;
      const mapped = recentUses.map(Number);
      obj["recentUses"] = mapped.filter((arg0) => arg0 > 0);
      return obj;
    }), closure_17.pendingUsages);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
const ID_REGEX = arg1(dependencyMap[10]).ID_REGEX;
const UserSettingsTypes = arg1(dependencyMap[11]).UserSettingsTypes;
let importDefaultResult = importDefault(dependencyMap[12]);
let obj = {
  computeBonus() {
    return 100;
  },
  computeWeight(arg0) {
    let num = 100;
    if (0 !== arg0) {
      if (arg0 < 1) {
        if (arg0 < 2) {
          if (arg0 < 4) {
            num = 1;
            if (arg0 >= 7) {
              num = 10;
            }
          } else {
            num = 30;
          }
        } else {
          num = 50;
        }
      } else {
        num = 70;
      }
    }
    return num;
  },
  lookupKey(channelId) {
    let guild = guild.getGuild(channelId);
    if (null == guild) {
      guild = authStore.getChannel(channelId);
    }
    if (null == guild) {
      guild = authStore.getChannel(authStore.getDMFromUserId(channelId));
    }
    return guild;
  },
  afterCompute() {

  },
  numFrequentlyItems: 100,
  maxSamples: 10
};
importDefaultResult = new importDefaultResult(obj);
let closure_15 = null;
let closure_16 = null;
let closure_17 = { pendingUsages: [] };
let tmp4 = (PersistedStore) => {
  class FrecencyStore {
    constructor() {
      self = this;
      tmp = closure_2(this, FrecencyStore);
      obj = closure_5(FrecencyStore);
      tmp2 = closure_4;
      if (closure_18()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = FrecencyStore;
  callback2(FrecencyStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(pendingUsages) {
      const self = this;
      this.waitFor(closure_8, closure_9, closure_10, closure_11, closure_7);
      if (null != pendingUsages) {
        pendingUsages = pendingUsages.pendingUsages;
        pendingUsages.pendingUsages = pendingUsages.filter((key) => {
          let isMatch = null != key;
          if (isMatch) {
            isMatch = regex.test(key.key);
          }
          return isMatch;
        });
      }
      const items = [closure_7];
      self.syncWith(items, closure_19);
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_17;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasPendingUsage",
    value() {
      return pendingUsages.pendingUsages.length > 0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "frecencyWithoutFetchingLatest",
    get() {
      return closure_14;
    }
  };
  items[4] = {
    key: "getFrequentlyWithoutFetchingLatest",
    value() {
      return frecency.frequently;
    }
  };
  items[5] = {
    key: "getScoreWithoutFetchingLatest",
    value(arg0) {
      const frecency = frecency.getFrecency(arg0);
      let num = 0;
      if (null != frecency) {
        num = frecency;
      }
      return num;
    }
  };
  items[6] = {
    key: "getScoreForDMWithoutFetchingLatest",
    value(arg0) {
      const self = this;
      const dMFromUserId = dMFromUserId.getDMFromUserId(arg0);
      let num = 0;
      if (null != dMFromUserId) {
        num = self.getScoreWithoutFetchingLatest(dMFromUserId);
      }
      return num;
    }
  };
  items[7] = {
    key: "getMaxScore",
    value() {
      return 1000;
    }
  };
  items[8] = {
    key: "getBonusScore",
    value() {
      return 100;
    }
  };
  items[9] = {
    key: "getVersion",
    value() {
      return frecency.version;
    }
  };
  return callback(FrecencyStore, items);
}(importDefault(dependencyMap[14]).PersistedStore);
tmp4.displayName = "FrecencyStore";
tmp4.persistKey = "FrecencyStore";
obj = {
  CHANNEL_SELECT: handleChannelSelect,
  VOICE_CHANNEL_SELECT: handleChannelSelect,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    let flag = !tmp;
    if (!(settings.settings.type !== UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !settings.wasSaved)) {
      closure_17.pendingUsages = [];
      flag = true;
    }
    return flag;
  }
};
tmp4 = new tmp4(importDefault(dependencyMap[15]), obj);
const result = arg1(dependencyMap[16]).fileFinishedImporting("stores/FrecencyStore.tsx");

export default tmp4;
export const MAX_NUM_SELECTED_ITEMS = 100;
