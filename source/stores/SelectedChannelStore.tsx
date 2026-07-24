// Module ID: 1906
// Function ID: 21376
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1352, 1194, 1348, 1907, 1838, 4177, 3758, 3947, 653, 1355, 587, 22, 1327, 483, 566, 686, 2]
// Exports: findFirstVoiceChannelId, handleConnectionOpen

// Module 1906 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import Storage from "Storage";
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import fromHexReverseArray from "fromHexReverseArray";
import _callSuper from "_callSuper";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import ME from "ME";
import { isGuildHomeChannel } from "set";
import set from "_possibleConstructorReturn";

let Routes;
let closure_10;
let closure_18;
let closure_19;
let closure_20;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function stringifyGuildId(guildId) {
  return String(guildId);
}
function saveStorage() {
  const Storage = require(587) /* Storage */.Storage;
  const obj = { selectedChannelId: closure_24, selectedVoiceChannelId: closure_26, lastChannelFollowingDestination: closure_25, lastConnectedTime: closure_27, selectedChannelIds: closure_30, mostRecentSelectedTextChannelIds: closure_32 };
  const values = importDefault(22)(closure_30).values();
  const obj2 = importDefault(22)(closure_30);
  const combined = values.concat(importDefault(22).values(closure_32));
  const found = combined.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  const obj4 = importDefault(22);
  const uniqResult = found.uniq();
  obj.knownThreadIds = found.uniq().filter((arg0) => {
    const basicChannel = outer1_12.getBasicChannel(arg0);
    let hasItem = outer1_33.has(arg0);
    if (!hasItem) {
      let hasItem1 = null != basicChannel;
      if (hasItem1) {
        hasItem1 = outer1_10.has(basicChannel.type);
      }
      hasItem = hasItem1;
    }
    return hasItem;
  }).value();
  const result = Storage.set(SelectedChannelStore, obj);
}
function findDefaultChannelId(guild_id) {
  if (null != guild_id) {
    defaultChannel = defaultChannel.getDefaultChannel(guild_id);
    if (null != defaultChannel) {
      return defaultChannel.id;
    }
  }
}
function setMostRecentTextChannel(guildId, channelId) {
  if (null != guildId) {
    if (null != channelId) {
      if (dependencyMap2[guildId] === channelId) {
        return false;
      } else {
        const channel = store.getChannel(channelId);
        let tmp3 = null != channel;
        if (tmp3) {
          tmp3 = callback3(channel.type);
        }
        guildId = undefined;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        let flag = !tmp6;
        if (!(!tmp3 || guildId !== guildId)) {
          dependencyMap2[guildId] = channelId;
          flag = true;
        }
        return flag;
      }
    }
  }
  return false;
}
function cleanupPreviouslySelected() {
  let c0 = false;
  const guildsArray = store2.getGuildsArray();
  importDefault(22).each(closure_30, (arg0, arg1) => {
    let tmp4 = null != arg0;
    if (tmp4) {
      let hasChannelResult = outer1_12.hasChannel(arg0);
      if (!hasChannelResult) {
        hasChannelResult = arg0 === outer1_24;
      }
      if (!hasChannelResult) {
        hasChannelResult = outer1_33.has(arg0);
      }
      if (!hasChannelResult) {
        hasChannelResult = outer1_21(arg0);
      }
      tmp4 = hasChannelResult;
    }
    if (!tmp4) {
      delete tmp3[tmp2];
      delete tmp[tmp2];
      let c0 = true;
    }
  });
  const obj = importDefault(22);
  importDefault(22).each(closure_32, (arg0, arg1) => {
    let tmp3 = null != arg0;
    if (tmp3) {
      let hasChannelResult = outer1_12.hasChannel(arg0);
      if (!hasChannelResult) {
        hasChannelResult = outer1_33.has(arg0);
      }
      tmp3 = hasChannelResult;
    }
    if (!tmp3) {
      delete tmp2[tmp];
      let c0 = true;
    }
  });
  const item = guildsArray.forEach((id) => {
    if (null == outer1_32[id.id]) {
      outer1_40(id.id, tmp);
    }
  });
  let tmp4 = null != closure_27;
  if (tmp4) {
    const _Date = Date;
    tmp4 = Date.now() - closure_27 >= 300000;
  }
  if (tmp4) {
    let c26 = null;
    c0 = true;
  }
  return c0;
}
function handleConnectionOpen(sessionId) {
  sessionId = sessionId.sessionId;
  if (null != c26) {
    const channel = store.getChannel(c26);
    let tmp3 = null != channel;
    if (tmp3) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        isPrivateResult = closure_16.can(importAll(483).combine(constants2.VIEW_CHANNEL, constants2.CONNECT), channel);
        const obj2 = importAll(483);
      }
      tmp3 = isPrivateResult;
    }
    if (!tmp3) {
      c26 = null;
    }
  }
  if (cleanupPreviouslySelected()) {
    saveStorage();
  }
}
function navigateAwayFromChannel(id, guild_id, parent_id) {
  set.delete(id);
  let tmp2 = guild_id;
  if (null == guild_id) {
    const guildId = store3.getGuildId();
    tmp2 = guild_id;
    if (dependencyMap[stringifyGuildId(undefined, guildId)] === id) {
      tmp2 = guildId;
    }
  }
  const guild = store2.getGuild(tmp2);
  let flag = false;
  if (c26 === id) {
    c26 = null;
    flag = true;
  }
  if (flag) {
    saveStorage();
  }
}
function handleChannelDelete(arg0) {
  let channel;
  let type;
  ({ type, channel } = arg0);
  navigateAwayFromChannel(channel.id, channel.guild_id, channel.parent_id);
}
({ isGuildTextChannelType: closure_9, THREAD_CHANNEL_TYPES: closure_10 } = _callSuper);
({ ChannelTypes: closure_18, ME: closure_19, Permissions: closure_20, Routes } = ME);
const SelectedChannelStore = "SelectedChannelStore";
let closure_30 = {};
let closure_31 = {};
let closure_32 = {};
let set = new Set();
let tmp5 = ((Store) => {
  class SelectedChannelStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, SelectedChannelStore);
      obj = outer1_7(SelectedChannelStore);
      tmp2 = outer1_6;
      if (outer1_34()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SelectedChannelStore, Store);
  let obj = {
    key: "initialize",
    value() {
      let mostRecentSelectedTextChannelIds;
      let outer1_25;
      let outer1_26;
      let outer1_27;
      const self = this;
      const Storage = SelectedChannelStore(outer1_3[15]).Storage;
      let value = Storage.get(outer1_29);
      if (null == value) {
        const obj = { selectedChannelId: outer1_24, selectedVoiceChannelId: outer1_26, lastChannelFollowingDestination: outer1_25, lastConnectedTime: outer1_27, selectedChannelIds: outer1_30, mostRecentSelectedTextChannelIds: outer1_32 };
        value = obj;
      }
      if (null != value.knownThreadIds) {
        const _Set = Set;
        const set = new Set(value.knownThreadIds);
        const outer1_33 = set;
      }
      ({ selectedVoiceChannelId: outer1_26, lastChannelFollowingDestination: outer1_25, lastConnectedTime: outer1_27, mostRecentSelectedTextChannelIds } = value);
      if (null == mostRecentSelectedTextChannelIds) {
        mostRecentSelectedTextChannelIds = {};
      }
      outer1_32 = mostRecentSelectedTextChannelIds;
      if (null != value.selectedChannelIds) {
        outer1_30 = value.selectedChannelIds;
      }
      self.mustEmitChanges((type) => {
        let tmp = "CONNECTION_OPEN" !== type.type;
        if (tmp) {
          tmp = "VOICE_STATE_UPDATES" !== type.type;
        }
        return tmp;
      });
      self.waitFor(outer1_11, outer1_12, outer1_13, outer1_14, outer1_15, outer1_16, outer1_17);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getChannelId",
    value(arg0) {
      let guildId = arg0;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let tmp3 = null;
      if (guildId !== outer1_19) {
        if (null == guildId) {
          guildId = outer1_17.getGuildId();
        }
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = guildId;
        }
        tmp3 = tmp5;
      }
      const tmp2Result = outer1_37(tmp3);
      if (flag) {
        let tmp9 = tmp7;
        if (null == tmp7) {
          tmp9 = outer1_39(tmp2Result);
        }
        let tmp8 = tmp9;
      } else {
        tmp8 = tmp7;
      }
      return tmp8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getVoiceChannelId",
    value() {
      let tmp = null;
      if (outer1_15.isSupported()) {
        tmp = outer1_26;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMostRecentSelectedTextChannelId",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let tmp4 = null;
        if (null != outer1_32[arg0]) {
          tmp4 = tmp3;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getCurrentlySelectedChannelId",
    value(arg0) {
      if (null != arg0) {
        let tmp = outer1_30[arg0];
      } else {
        tmp = outer1_24;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getLastSelectedChannelId",
    value(arg0) {
      if (null != arg0) {
        let tmp = outer1_31[arg0];
      } else {
        tmp = outer1_23;
      }
      return tmp;
    }
  };
  items[6] = {
    key: "getLastSelectedChannels",
    value(arg0) {
      return outer1_31[arg0];
    }
  };
  items[7] = {
    key: "getLastChannelFollowingDestination",
    value() {
      return outer1_25;
    }
  };
  return callback(SelectedChannelStore, items);
})(require("initialize").Store);
tmp5.displayName = "SelectedChannelStore";
tmp5 = new tmp5(require("dispatcher"), {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(selectedChannelId) {
    let closure_22;
    let closure_26;
    ({ sessionId: closure_22, selectedVoiceChannelId: closure_26 } = selectedChannelId);
    let closure_30 = {};
    let closure_31 = {};
    selectedChannelId = selectedChannelId.selectedChannelId;
    closure_30[selectedChannelId.selectedGuildId] = selectedChannelId.selectedChannelId;
    setMostRecentTextChannel(selectedChannelId.selectedGuildId, selectedChannelId);
    cleanupPreviouslySelected();
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let c22 = null;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    if (undefined === guildId) {
      return false;
    } else {
      if (null == channelId) {
        channelId = findDefaultChannelId(guildId);
      }
      let tmp3 = null != channelId;
      if (tmp3) {
        tmp3 = channelId !== channelId;
      }
      if (tmp3) {
        let closure_23 = channelId;
      }
      setMostRecentTextChannel(guildId, channelId);
      if (dependencyMap[stringifyGuildId(undefined, guildId)] !== channelId) {
        closure_31[stringifyGuildId(guildId)] = dependencyMap[stringifyGuildId(undefined, guildId)];
        dependencyMap[stringifyGuildId(guildId)] = channelId;
        const tmp12 = stringifyGuildId(guildId);
      }
      saveStorage();
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const type = channel.type;
    if (constants.GUILD_ANNOUNCEMENT === type) {
      const guild_id = channel.guild_id;
      let tmp3 = null != guild_id;
      if (tmp3) {
        tmp3 = null == dependencyMap2[guild_id];
      }
      if (tmp3) {
        dependencyMap2[guild_id] = channel.id;
      }
      if (null != guild_id) {
        if (null == dependencyMap[guild_id]) {
          dependencyMap[guild_id] = findDefaultChannelId(guild_id);
          return true;
        }
      }
    }
    return false;
  },
  CHANNEL_DELETE: handleChannelDelete,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (value.isScheduledForDeletion()) {
          let tmp2 = set;
          let hasItem = set.has(value.type);
          let tmp4 = navigateAwayFromChannel;
          let tmp5 = navigateAwayFromChannel(value.id, value.guild_id, value.parent_id);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  THREAD_DELETE: handleChannelDelete,
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    if (null == dependencyMap[guild.id]) {
      const tmp2 = findDefaultChannelId(guild.id);
      dependencyMap[guild.id] = tmp2;
      setMostRecentTextChannel(guild.id, tmp2);
      saveStorage();
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (c26 === dependencyMap[guild.id]) {
      c26 = null;
    }
    if (guild.unavailable) {
      return false;
    } else {
      delete tmp[tmp2];
      delete tmp[tmp2];
      saveStorage();
    }
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      const channel = store.getChannel(channelId);
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      let tmp5 = null != guild_id;
      if (tmp5) {
        tmp5 = guild_id !== store3.getGuildId();
      }
      if (tmp5) {
        tmp5 = dependencyMap[guild_id] === channelId;
      }
      if (tmp5) {
        dependencyMap[guild_id] = findDefaultChannelId(guild_id);
      }
    }
    saveStorage();
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, sessionId) => {
      if (sessionId.sessionId === outer1_22) {
        const _clearInterval = clearInterval;
        clearInterval(outer1_28);
        const channel = outer1_12.getChannel(outer1_26);
        let guildId;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        if (!tmp16) {
          outer1_26 = sessionId.channelId;
        }
        const _Date = Date;
        let outer1_27 = Date.now();
        if (null != outer1_26) {
          const _setInterval = setInterval;
          outer1_28 = setInterval(() => {
            const outer2_27 = Date.now();
            outer2_38();
          }, 60000);
        }
        outer1_38();
        tmp16 = sessionId.guildId !== guildId && null == sessionId.channelId;
      } else if (sessionId.userId !== outer1_11.getId()) {
        return arg0;
      } else {
        const _clearInterval2 = clearInterval;
        clearInterval(outer1_28);
        outer1_28 = undefined;
        outer1_27 = 0;
        const channel1 = outer1_12.getChannel(outer1_26);
        let guildId1;
        if (null != channel1) {
          guildId1 = channel1.getGuildId();
        }
        const channel2 = outer1_12.getChannel(sessionId.channelId);
        let guildId2;
        if (null != channel2) {
          guildId2 = channel2.getGuildId();
        }
        let tmp4 = null != guildId1 && guildId2 === guildId1;
        if (!tmp4) {
          tmp4 = outer1_26 === sessionId.channelId;
        }
        if (tmp4) {
          outer1_26 = null;
        }
        outer1_38();
      }
      return true;
    }, false);
  },
  CHANNEL_FOLLOWER_CREATED: function handleChannelFollowingDestinationUpdate(channelId) {
    channelId = channelId.channelId;
    let tmp = null != obj;
    if (tmp) {
      tmp = channelId === obj.channelId;
    }
    if (!tmp) {
      obj = { channelId, guildId: channelId.guildId };
      saveStorage();
    }
  },
  LOGOUT: function handleLogout() {
    let closure_30 = {};
    let c24 = null;
    let c23;
    let closure_32 = {};
    let closure_25 = {};
    let c26 = null;
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove(SelectedChannelStore);
  }
});
let result = set.fileFinishedImporting("stores/SelectedChannelStore.tsx");

export default tmp5;
export const findFirstVoiceChannelId = function findFirstVoiceChannelId(arg0) {
  let id;
  const mutableBasicGuildChannelsForGuild = store.getMutableBasicGuildChannelsForGuild(arg0);
  const found = importDefault(22).find(mutableBasicGuildChannelsForGuild, (type) => type.type === outer1_18.GUILD_VOICE);
  if (null != found) {
    id = found.id;
  }
  return id;
};
export { handleConnectionOpen };
