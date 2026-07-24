// Module ID: 6889
// Function ID: 54686
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 1352, 1194, 1348, 1882, 2]

// Module 6889 (_createForOfIteratorHelperLoose)
import set from "set";
import _defineProperties from "_defineProperties";
import { createChannelRecordFromServer as closure_4 } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

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
let tmp2 = (() => {
  class Channels {
    constructor() {
      self = this;
      tmp = outer1_2(this, self);
      this.privateChannels = [];
      this.actions = {
        BACKGROUND_SYNC(arg0, arg1) {
              return self.handleBackgroundSync(arg0, arg1);
            },
        CHANNEL_CREATE(channel) {
              return self.putOne(channel.channel, arg1);
            },
        CHANNEL_DELETE(channel, id) {
              return self.deleteOne(channel.channel.guild_id, channel.channel.id, id);
            },
        CHANNEL_RECIPIENT_ADD(channelId) {
              return self.handleChannelRecipientAdd(channelId, arg1);
            },
        CHANNEL_RECIPIENT_REMOVE(channelId) {
              return self.handleChannelRecipientRemove(channelId, arg1);
            },
        CHANNEL_UPDATES(channels, generation) {
              return self.putMany(channels.channels, generation);
            },
        CONNECTION_OPEN_SUPPLEMENTAL(arg0, arg1) {
              return self.handleConnectionOpenSupplemental(arg0, arg1);
            },
        CONNECTION_OPEN(arg0, arg1) {
              return self.handleConnectionOpen(arg0, arg1);
            },
        GUILD_CREATE(arg0, arg1) {
              return self.handleGuildCreate(arg0, arg1);
            },
        GUILD_DELETE(arg0, arg1) {
              return self.handleGuildDelete(arg0, arg1);
            }
      };
      return;
    }
  }
  let obj = {
    key: "handleBackgroundSync",
    value(guilds) {
      let done;
      let closure_0 = arg1;
      const self = this;
      function _loop(value) {
        let closure_0 = value;
        function asRecord(arg0) {
          return outer3_4(arg0, value.id);
        }
        const data_mode = value.data_mode;
        if ("unavailable" !== data_mode) {
          if ("partial" === data_mode) {
            let obj = { op: "update" };
            const channels = value.partial_updates.channels;
            let mapped;
            if (null != channels) {
              mapped = channels.map(asRecord);
            }
            if (null == mapped) {
              mapped = [];
            }
            obj.writes = mapped;
            let deleted_channel_ids = value.partial_updates.deleted_channel_ids;
            if (null == deleted_channel_ids) {
              deleted_channel_ids = [];
            }
            obj.deletes = deleted_channel_ids;
            const result = self.handleGuildSynchronize(value.id, obj, closure_0);
          } else {
            obj = { op: "full_sync" };
            const channels1 = value.channels;
            obj.items = channels1.map(asRecord);
            const result1 = self.handleGuildSynchronize(value.id, obj, closure_0);
          }
        }
      }
      const tmp = outer1_7(guilds.guilds);
      let iter = tmp();
      if (!iter.done) {
        do {
          let _loopResult = _loop(iter.value);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  let items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "handleConnectionOpen",
    value: function handleConnectionOpen(unavailableGuilds, closure_0) {
      let done;
      const self = this;
      const items = [...unavailableGuilds.unavailableGuilds];
      const obj = Channels(outer1_1[5]);
      Channels(outer1_1[5]).channelsTransaction(closure_0).deleteAllExcept(items);
      const tmp2 = outer1_7(unavailableGuilds.guilds);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let value = iter.value;
          let result = self.handleGuildSynchronize(value.id, value.channels, closure_0);
          let iter2 = tmp2();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      self.privateChannels = unavailableGuilds.initialPrivateChannels;
    }
  };
  items[1] = obj;
  obj = {
    key: "handleConnectionOpenSupplemental",
    value: function handleConnectionOpenSupplemental(lazyPrivateChannels) {
      const items = [...lazyPrivateChannels.lazyPrivateChannels];
      const replaced = this.replace(null, items, arg1);
      this.privateChannels = [];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleChannelRecipientAdd",
    value: function handleChannelRecipientAdd(channelId, arg1) {
      const self = this;
      const channel = outer1_6.getChannel(channelId.channelId);
      let isPrivateResult = null != channel;
      const id = outer1_5.getId();
      if (isPrivateResult) {
        isPrivateResult = channel.isPrivate();
      }
      if (isPrivateResult) {
        self.putOne(channel.addRecipient(channelId.user.id, channelId.nick, id), arg1);
      }
    }
  };
  items[4] = {
    key: "handleChannelRecipientRemove",
    value: function handleChannelRecipientRemove(channelId, arg1) {
      const self = this;
      const channel = outer1_6.getChannel(channelId.channelId);
      if (tmp) {
        self.putOne(channel.removeRecipient(channelId.user.id), arg1);
      }
    }
  };
  items[5] = {
    key: "handleGuildCreate",
    value: function handleGuildCreate(guild, closure_0) {
      const result = this.handleGuildSynchronize(guild.guild.id, guild.guild.channels, closure_0);
    }
  };
  items[6] = {
    key: "handleGuildDelete",
    value: function handleGuildDelete(guild) {
      this.deleteManySyncUnsafe(guild.guild.id);
    }
  };
  items[7] = {
    key: "resetInMemoryState",
    value: function resetInMemoryState() {
      this.privateChannels = [];
    }
  };
  items[8] = {
    key: "handleGuildSynchronize",
    value: function handleGuildSynchronize(id, channels, closure_0) {
      let done;
      const self = this;
      const op = channels.op;
      if ("update" === op) {
        const channelsTransactionResult = Channels(outer1_1[5]).channelsTransaction(closure_0);
        channelsTransactionResult.putAll(id, channels.writes);
        const tmp5 = outer1_7(channels.deletes);
        let iter = tmp5();
        if (!iter.done) {
          do {
            let deleteResult = channelsTransactionResult.delete(id, iter.value);
            let iter2 = tmp5();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        const obj = Channels(outer1_1[5]);
      } else if ("full_sync" === op) {
        const replaced = self.replace(id, channels.items, closure_0);
      }
    }
  };
  items[9] = {
    key: "putOne",
    value: function putOne(channel, arg1) {
      const obj = Channels(outer1_1[5]);
      Channels(outer1_1[5]).channelsTransaction(arg1).put(channel.guild_id, channel);
    }
  };
  items[10] = {
    key: "putMany",
    value: function putMany(channels, generation) {
      let done;
      const obj = Channels(outer1_1[5]);
      const tmp = outer1_7(channels);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let putResult = channelsTransactionResult.put(value.guild_id, value);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[11] = {
    key: "replace",
    value: function replace(arg0, arg1, arg2) {
      const obj = Channels(outer1_1[5]);
      const replaced = Channels(outer1_1[5]).channelsTransaction(arg2).replaceAll(arg0, arg1);
    }
  };
  items[12] = {
    key: "deleteOne",
    value: function deleteOne(guildId, channelId, id, arg3) {
      const obj = Channels(outer1_1[5]);
      Channels(outer1_1[5]).channelsTransaction(id).delete(guildId, channelId);
    }
  };
  items[13] = {
    key: "deleteManySyncUnsafe",
    value: function deleteManySyncUnsafe(id) {
      const channelsResult = Channels(outer1_1[5]).channels();
      if (null != channelsResult) {
        channelsResult.deleteSyncUnsafe(id);
      }
    }
  };
  return callback(Channels, items);
})();
tmp2 = new tmp2();
let result = require("_callSuper").fileFinishedImporting("modules/app_database/modules/Channels.tsx");

export default tmp2;
