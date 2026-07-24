// Module ID: 9897
// Function ID: 76549
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1921, 1348, 1917, 1838, 4349, 3767, 1849, 4351, 22, 6834, 566, 686, 2]

// Module 9897 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import initialize from "initialize";
import set from "set";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleChannelDelete(arg0) {
  delete tmp2[tmp];
}
function handleRelationshipUpdate() {
  let item = importDefault(22).forEach(closure_16, (items) => {
    items = items.items;
    const item = items.forEach((message) => {
      message = message.message;
      const result = message.set("blocked", outer2_13.isBlockedForMessage(message));
      const result1 = message.set("ignored", outer2_13.isIgnoredForMessage(message));
    });
    const items1 = items.items;
    items.items = items1.slice();
  });
}
let obj = { LOADING: "LOADING", LOADED_HAS_MORE: "LOADED_HAS_MORE", LOADED_FINISHED: "LOADING_FINISHED", FAILED: "FAILED" };
let closure_16 = {};
let tmp2 = ((Store) => {
  class ChannelPinsStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ChannelPinsStore);
      obj = outer1_6(ChannelPinsStore);
      tmp2 = outer1_5;
      if (outer1_17()) {
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
  callback2(ChannelPinsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10, outer1_11, outer1_8, outer1_12, outer1_13, outer1_14);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getPins",
    value(arg0) {
      return outer1_16[arg0];
    }
  };
  items[1] = obj;
  return callback(ChannelPinsStore, items);
})(require("initialize").Store);
tmp2.displayName = "ChannelPinsStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_16 = {};
  },
  LOAD_PINNED_MESSAGES: function handleLoadStart(channelId) {
    channelId = channelId.channelId;
    if (!channelId.reset) {
      if (null != dependencyMap[channelId]) {
        dependencyMap[channelId].state = obj.LOADING;
      }
    }
    channel = channel.getChannel(channelId);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let tmp6;
    if (null != guildId) {
      tmp6 = guildId;
    }
    obj = { id: channelId, items: [], state: obj.LOADING, guildId: tmp6 };
    dependencyMap[channelId] = obj;
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadSuccess(pins) {
    pins = pins.pins;
    if (null == dependencyMap[pins.channelId]) {
      return false;
    } else {
      const mapped = pins.map((pinned_at) => {
        const obj = { pinnedAt: new Date(Date.parse(pinned_at.pinned_at)) };
        const date = new Date(Date.parse(pinned_at.pinned_at));
        obj.message = outer1_0(outer1_2[12]).createMessageRecord(pinned_at.message);
        return obj;
      });
      const items = [];
      HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(tmp2.items, 0));
      tmp2.items = items;
      tmp2.state = tmp ? obj.LOADED_HAS_MORE : obj.LOADED_FINISHED;
    }
  },
  LOAD_PINNED_MESSAGES_FAILURE: function handleLoadFail(arg0) {
    if (null == dependencyMap[arg0.channelId]) {
      return false;
    } else {
      tmp.state = obj.FAILED;
    }
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const found = importDefault(22)(closure_16).filter((guildId) => guildId.guildId !== guild.id);
    const arr = importDefault(22)(closure_16);
    closure_16 = found.keyBy("id").value();
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    let channelId;
    let require;
    ({ id: require, channelId } = arg0);
    let tmp2 = null != tmp;
    if (tmp2) {
      const tmp5 = 0 !== importDefault(22).remove(tmp.items, (message) => message.message.id === closure_0).length;
      if (tmp5) {
        const items = tmp.items;
        tmp.items = items.slice();
        dependencyMap[channelId] = tmp;
      }
      tmp2 = tmp5;
      const obj = importDefault(22);
    }
    return tmp2;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    ids = ids.ids;
    if (null == dependencyMap[ids.channelId]) {
      return false;
    } else {
      const items = tmp.items;
      tmp.items = items.filter((message) => !ids.includes(message.message.id));
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    const channel_id = message.message.channel_id;
    if (null == channel_id) {
      return false;
    } else if (null == dependencyMap[channel_id]) {
      return false;
    } else if (null != message.message.author) {
      if (message.message.pinned) {
        const items = tmp23.items;
        tmp23.items = items.slice();
        const findIndexResult = importDefault(22).findIndex(tmp23.items, (message) => message.message.id === id);
        if (-1 === findIndexResult) {
          const items1 = tmp23.items;
          let obj = { message: id(4351).createMessageRecord(message.message) };
          const _Date = Date;
          const date = new Date();
          obj.pinnedAt = date;
          items1.unshift(obj);
          const obj6 = id(4351);
        } else {
          tmp23.items[findIndexResult].message = id(4351).updateMessageRecord(tmp23.items[findIndexResult].message, message.message);
          const obj4 = id(4351);
        }
        const obj3 = importDefault(22);
      } else {
        const findIndexResult1 = importDefault(22).findIndex(tmp23.items, (message) => message.message.id === id);
        if (-1 === findIndexResult1) {
          return false;
        } else {
          const items2 = tmp23.items;
          tmp23.items = items2.slice();
          const items3 = tmp23.items;
          items3.splice(findIndexResult1, 1);
        }
        const obj2 = importDefault(22);
      }
    } else {
      const findIndexResult2 = importDefault(22).findIndex(tmp23.items, (message) => message.message.id === id);
      if (-1 !== findIndexResult2) {
        message = tmp.message;
        obj = id(4351);
        const updateMessageRecordResult = obj.updateMessageRecord(message, message.message);
        if (updateMessageRecordResult !== message) {
          const items4 = tmp23.items;
          const substr = items4.slice();
          obj = { pinnedAt: tmp.pinnedAt, message: updateMessageRecordResult };
          substr[findIndexResult2] = obj;
          dependencyMap[channel_id].items = substr;
        }
      }
      const obj7 = importDefault(22);
    }
  },
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleScanTimeout(messageId) {
    messageId = messageId.messageId;
    if (null == dependencyMap[messageId.channelId]) {
      return false;
    } else {
      const findIndexResult = importDefault(22).findIndex(tmp.items, (message) => message.message.id === messageId);
      if (-1 === findIndexResult) {
        return false;
      } else {
        const items = tmp.items;
        tmp.items = items.slice();
        tmp.items[findIndexResult].message = messageId(6834).handleExplicitMediaScanTimeoutForMessage(tmp.items[findIndexResult].message);
      }
      const obj2 = importDefault(22);
    }
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/ChannelPinsStore.tsx");

export default tmp2;
export const FetchState = obj;
