// Module ID: 5042
// Function ID: 43567
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1316, 1348, 1838, 1906, 3947, 653, 662, 4214, 22, 566, 686, 2]

// Module 5042 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import dispatcher from "dispatcher";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { ID_REGEX } from "ME";
import { UserSettingsTypes } from "MAX_FAVORITES";
import importDefaultResult from "DEFAULT_FRECENCY";

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
  if (channelId !== c15) {
    let tmp2 = null;
    if (null != channelId) {
      tmp2 = channelId;
    }
    c15 = tmp2;
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
  if (guildId !== c16) {
    let tmp12 = null;
    if (null != guildId) {
      tmp12 = guildId;
    }
    c16 = tmp12;
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
    obj = importDefault(22);
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
    guild = guild.getGuild(channelId);
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
let c15 = null;
let c16 = null;
let closure_17 = { pendingUsages: [] };
let tmp4 = ((PersistedStore) => {
  class FrecencyStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, FrecencyStore);
      obj = outer1_5(FrecencyStore);
      tmp2 = outer1_4;
      if (outer1_18()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(FrecencyStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(pendingUsages) {
      const self = this;
      this.waitFor(outer1_8, outer1_9, outer1_10, outer1_11, outer1_7);
      if (null != pendingUsages) {
        pendingUsages = pendingUsages.pendingUsages;
        pendingUsages.pendingUsages = pendingUsages.filter((key) => {
          let isMatch = null != key;
          if (isMatch) {
            isMatch = outer2_12.test(key.key);
          }
          return isMatch;
        });
        const outer1_17 = pendingUsages;
      }
      const items = [outer1_7];
      self.syncWith(items, outer1_19);
    }
  };
  let items = [obj, , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_17;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasPendingUsage",
    value() {
      return outer1_17.pendingUsages.length > 0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "frecencyWithoutFetchingLatest",
    get() {
      return outer1_14;
    }
  };
  items[4] = {
    key: "getFrequentlyWithoutFetchingLatest",
    value() {
      return outer1_14.frequently;
    }
  };
  items[5] = {
    key: "getScoreWithoutFetchingLatest",
    value(arg0) {
      const frecency = outer1_14.getFrecency(arg0);
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
      const dMFromUserId = outer1_8.getDMFromUserId(arg0);
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
      return outer1_14.version;
    }
  };
  return callback(FrecencyStore, items);
})(require("initialize").PersistedStore);
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
tmp4 = new tmp4(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/FrecencyStore.tsx");

export default tmp4;
export const MAX_NUM_SELECTED_ITEMS = 100;
