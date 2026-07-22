// Module ID: 9858
// Function ID: 76314
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9858 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleChannelDelete(arg0) {
  delete r1[r0];
}
function handleRelationshipUpdate() {
  const item = importDefault(dependencyMap[13]).forEach(closure_16, (items) => {
    items = items.items;
    const item = items.forEach((message) => {
      message = message.message;
      const result = message.set("blocked", closure_13.isBlockedForMessage(message));
      const result1 = message.set("ignored", closure_13.isIgnoredForMessage(message));
    });
    const items1 = items.items;
    items.items = items1.slice();
  });
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
let obj = { LOADING: "LOADING", LOADED_HAS_MORE: "LOADED_HAS_MORE", LOADED_FINISHED: "LOADING_FINISHED", FAILED: "FAILED" };
let closure_16 = {};
let tmp2 = (Store) => {
  class ChannelPinsStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ChannelPinsStore);
      obj = closure_6(ChannelPinsStore);
      tmp2 = closure_5;
      if (closure_17()) {
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
  const arg1 = ChannelPinsStore;
  callback2(ChannelPinsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_10, closure_11, closure_8, closure_12, closure_13, closure_14);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getPins",
    value(arg0) {
      return closure_16[arg0];
    }
  };
  items[1] = obj;
  return callback(ChannelPinsStore, items);
}(importDefault(dependencyMap[15]).Store);
tmp2.displayName = "ChannelPinsStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_16 = {};
  },
  LOAD_PINNED_MESSAGES: function handleLoadStart(channelId) {
    channelId = channelId.channelId;
    if (!channelId.reset) {
      if (null != closure_16[channelId]) {
        closure_16[channelId].state = obj.LOADING;
      }
    }
    const channel = channel.getChannel(channelId);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let tmp6;
    if (null != guildId) {
      tmp6 = guildId;
    }
    const obj = { id: channelId, items: [], state: obj.LOADING, guildId: tmp6 };
    closure_16[channelId] = obj;
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadSuccess(pins) {
    pins = pins.pins;
    if (null == closure_16[pins.channelId]) {
      return false;
    } else {
      const mapped = pins.map((pinned_at) => {
        const obj = { pinnedAt: new Date(Date.parse(pinned_at.pinned_at)) };
        const date = new Date(Date.parse(pinned_at.pinned_at));
        obj.message = callback(closure_2[12]).createMessageRecord(pinned_at.message);
        return obj;
      });
      const items = [];
      HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(tmp2.items, 0));
      tmp2.items = items;
      tmp2.state = tmp ? obj.LOADED_HAS_MORE : obj.LOADED_FINISHED;
    }
  },
  LOAD_PINNED_MESSAGES_FAILURE: function handleLoadFail(arg0) {
    if (null == closure_16[arg0.channelId]) {
      return false;
    } else {
      tmp.state = obj.FAILED;
    }
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  GUILD_DELETE: function handleGuildDelete(guild) {
    const arg1 = guild.guild;
    const found = importDefault(dependencyMap[13])(closure_16).filter((guildId) => guildId.guildId !== guild.id);
    const arr = importDefault(dependencyMap[13])(closure_16);
    closure_16 = found.keyBy("id").value();
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    let channelId;
    ({ id: closure_0, channelId } = arg0);
    let tmp2 = null != tmp;
    if (tmp2) {
      const tmp5 = 0 !== importDefault(dependencyMap[13]).remove(tmp.items, (message) => message.message.id === closure_0).length;
      if (tmp5) {
        const items = tmp.items;
        tmp.items = items.slice();
        closure_16[channelId] = tmp;
      }
      tmp2 = tmp5;
      const obj = importDefault(dependencyMap[13]);
    }
    return tmp2;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    const arg1 = ids.ids;
    if (null == closure_16[ids.channelId]) {
      return false;
    } else {
      const items = tmp.items;
      tmp.items = items.filter((message) => !ids.includes(message.message.id));
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const arg1 = message.message.id;
    const channel_id = message.message.channel_id;
    if (null == channel_id) {
      return false;
    } else if (null == closure_16[channel_id]) {
      return false;
    } else if (null != message.message.author) {
      if (message.message.pinned) {
        const items = tmp23.items;
        tmp23.items = items.slice();
        const findIndexResult = importDefault(dependencyMap[13]).findIndex(tmp23.items, (message) => message.message.id === id);
        if (-1 === findIndexResult) {
          const items1 = tmp23.items;
          let obj = { message: arg1(dependencyMap[12]).createMessageRecord(message.message) };
          const _Date = Date;
          const date = new Date();
          obj.pinnedAt = date;
          items1.unshift(obj);
          const obj6 = arg1(dependencyMap[12]);
        } else {
          tmp23.items[findIndexResult].message = arg1(dependencyMap[12]).updateMessageRecord(tmp23.items[findIndexResult].message, message.message);
          const obj4 = arg1(dependencyMap[12]);
        }
        const obj3 = importDefault(dependencyMap[13]);
      } else {
        const findIndexResult1 = importDefault(dependencyMap[13]).findIndex(tmp23.items, (message) => message.message.id === id);
        if (-1 === findIndexResult1) {
          return false;
        } else {
          const items2 = tmp23.items;
          tmp23.items = items2.slice();
          const items3 = tmp23.items;
          items3.splice(findIndexResult1, 1);
        }
        const obj2 = importDefault(dependencyMap[13]);
      }
    } else {
      const findIndexResult2 = importDefault(dependencyMap[13]).findIndex(tmp23.items, (message) => message.message.id === id);
      if (-1 !== findIndexResult2) {
        message = tmp.message;
        obj = arg1(dependencyMap[12]);
        const updateMessageRecordResult = obj.updateMessageRecord(message, message.message);
        if (updateMessageRecordResult !== message) {
          const items4 = tmp23.items;
          const substr = items4.slice();
          obj = { pinnedAt: tmp.pinnedAt, message: updateMessageRecordResult };
          substr[findIndexResult2] = obj;
          closure_16[channel_id].items = substr;
        }
      }
      const obj7 = importDefault(dependencyMap[13]);
    }
  },
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleScanTimeout(messageId) {
    const arg1 = messageId.messageId;
    if (null == closure_16[messageId.channelId]) {
      return false;
    } else {
      const findIndexResult = importDefault(dependencyMap[13]).findIndex(tmp.items, (message) => message.message.id === messageId);
      if (-1 === findIndexResult) {
        return false;
      } else {
        const items = tmp.items;
        tmp.items = items.slice();
        tmp.items[findIndexResult].message = arg1(dependencyMap[14]).handleExplicitMediaScanTimeoutForMessage(tmp.items[findIndexResult].message);
      }
      const obj2 = importDefault(dependencyMap[13]);
    }
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[16]), obj);
const result = arg1(dependencyMap[17]).fileFinishedImporting("stores/ChannelPinsStore.tsx");

export default tmp2;
export const FetchState = obj;
