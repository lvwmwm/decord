// Module ID: 6890
// Function ID: 54719
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 6, 7, 4808, 1352, 1194, 1348, 1910, 1838, 3758, 1349, 3, 1882, 6891, 483, 3766, 2]

// Module 6890 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { createChannelRecordFromServer as closure_9 } from "_callSuper";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { ChannelLoader } from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_14 from "_createForOfIteratorHelperLoose";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_createForOfIteratorHelperLoose";
import importDefaultResult from "_defineProperties";

const require = arg1;
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
function hasBasicChannelChanged(type, type2) {
  let tmp = null == type || type.type !== type2.type || type.parent_id !== type2.parent_id;
  if (!tmp) {
    const basicPermissions = closure_15.computeBasicPermissions(type);
    tmp = basicPermissions !== closure_15.computeBasicPermissions(type2);
  }
  return tmp;
}
importDefaultResult = new importDefaultResult("GuildBasicChannels");
let tmp4 = (() => {
  class GuildBasicChannels {
    constructor() {
      self = this;
      tmp = outer1_6(this, GuildBasicChannels);
      this.synced = null;
      this.actions = {
        BACKGROUND_SYNC(arg0, arg1) {
              return self.handleBackgroundSync(arg0, arg1);
            },
        CHANNEL_CREATE(arg0, arg1) {
              return self.handleChannelCreate(arg0, arg1);
            },
        CHANNEL_DELETE(arg0, arg1) {
              return self.handleChannelDelete(arg0, arg1);
            },
        CHANNEL_UPDATES(arg0, arg1) {
              return self.handleChannelUpdates(arg0, arg1);
            },
        CONNECTION_OPEN(arg0, arg1) {
              return self.handleConnectionOpen(arg0, arg1);
            },
        GUILD_CREATE(arg0, arg1) {
              return self.handleGuildCreate(arg0, arg1);
            },
        GUILD_DELETE(arg0, arg1) {
              return self.handleGuildDelete(arg0, arg1);
            },
        GUILD_MEMBER_UPDATE(arg0, arg1) {
              return self.handleGuildMemberUpdate(arg0, arg1);
            },
        GUILD_ROLE_UPDATE(arg0, arg1) {
              return self.handleGuildRoleUpdate(arg0, arg1);
            },
        GUILD_UPDATE(arg0, arg1) {
              return self.handleGuildUpdate(arg0, arg1);
            },
        POST_CONNECTION_OPEN() {
              return self.handlePostConnectionOpen();
            },
        WRITE_CACHES(arg0, arg1) {
              return self.handleWriteCaches(arg0, arg1);
            }
      };
      return;
    }
  }
  let obj = { key: "getAsync" };
  let closure_1 = callback(async function(arg0) {
    let iter2;
    let set;
    let obj = callback(outer2_3[13]);
    const nowResult = performance.now();
    const items = [obj.basicChannels(arg0).getKvEntries(), ];
    const basicChannelsResult = obj.basicChannels(arg0);
    const obj3 = callback(outer2_3[13]);
    items[1] = callback(outer2_3[13]).syncedBasicChannels(arg0).getKvEntries();
    const tmp3 = outer2_4(yield Promise.all(items), 2);
    const first = tmp3[0];
    const diff = performance.now() - nowResult;
    const items1 = [];
    const items2 = [];
    const tmp5 = outer2_18(tmp3[1]);
    let iter = tmp5();
    if (!iter.done) {
      do {
        let tmp6 = outer2_4;
        let tmp7 = outer2_4(iter.value, 2);
        let arr5 = items2;
        if (tmp7[1]) {
          arr5 = items1;
        }
        let arr = arr5.push(tmp7[0]);
        iter2 = tmp5();
        iter = iter2;
      } while (!iter2.done);
    }
    const items3 = [items1, items2];
    const tmp2Result = outer2_4(items3, 2);
    set = new Set(tmp2Result[0]);
    this.synced = set;
    outer2_17.verbose("loaded in " + diff + "ms (guilds: " + first.length + ", synced: " + set.size + " unsynced: " + tmp2Result[1].length + ")");
    obj = {
      all: first,
      stale: arr7,
      channels: first.filter((arg0) => {
        let tmp;
        [tmp, ] = arg0;
        return set.has(tmp);
      })
    };
    return obj;
  });
  obj.value = function getAsync() {
    return callback2(...arguments);
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "handleChannelCreate",
    value(channel, closure_0) {
      const self = this;
      if (null != channel.channel.guild_id) {
        self.unsync(channel.channel.guild_id, closure_0);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleChannelDelete",
    value(channel, closure_0) {
      const self = this;
      if (null != channel.channel.guild_id) {
        self.unsync(channel.channel.guild_id, closure_0);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleChannelUpdates",
    value(channels, closure_0) {
      let iter2;
      const self = this;
      channels = channels.channels;
      const tmp = outer1_18(channels.filter((guild_id) => null != guild_id.guild_id));
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp2 = outer1_20;
          let tmp3 = outer1_11;
          if (outer1_20(outer1_11.getBasicChannel(value.id), value)) {
            let unsyncResult = self.unsync(value.guild_id, closure_0);
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  };
  items[4] = {
    key: "handleBackgroundSync",
    value(guilds) {
      let done;
      let closure_0 = arg1;
      const self = this;
      function _loop(value) {
        let closure_0 = value;
        const data_mode = value.data_mode;
        if ("unavailable" !== data_mode) {
          if ("partial" === data_mode) {
            const id = value.id;
            const channels = value.partial_updates.channels;
            let mapped;
            if (null != channels) {
              mapped = channels.map((arg0) => outer3_9(arg0, value.id));
            }
            if (null == mapped) {
              mapped = [];
            }
            let deleted_channel_ids = value.partial_updates.deleted_channel_ids;
            if (null == deleted_channel_ids) {
              deleted_channel_ids = [];
            }
            self.onGuildUpdate(id, mapped, deleted_channel_ids, closure_0);
            const tmp4 = self;
          } else {
            self.onGuildSync(value.id, closure_0);
          }
        }
      }
      const tmp = outer1_18(guilds.guilds);
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
  items[5] = {
    key: "handleConnectionOpen",
    value: function handleConnectionOpen(guilds) {
      let done;
      const self = this;
      const tmp = outer1_18(guilds.guilds);
      let iter = tmp();
      if (!iter.done) {
        do {
          let handleOneGuildCreateResult = self.handleOneGuildCreate(iter.value, arg1);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  const obj4 = { key: "handlePostConnectionOpen" };
  let closure_0 = callback(async function() {
    const self = this;
    let closure_2;
    let c3;
    closure_2 = outer2_8.lastTimeConnectedChanged();
    const databaseResult = callback2(outer2_3[13]).database();
    c3 = databaseResult;
    if (null != self.synced) {
      if (null != databaseResult) {
        if (obj2.isCacheEnabled()) {
          const guildIds = outer2_14.getGuildIds();
          let _HermesInternal = HermesInternal;
          outer2_17.verbose("scheduling basic_channel optimstic writes (guilds: " + guildIds.filter((arg0) => {
            const synced = self.synced;
            return !synced.has(arg0);
          }).length + ")");
          function* _loop2(value) {
            let closure_0 = value;
            if (null != outer1_1.synced) {
              if (outer1_3 === obj.database()) {
                if (outer1_2 === outer4_8.lastTimeConnectedChanged()) {
                  const synced = outer1_1.synced;
                  if (synced.has(tmp)) {
                    return 1;
                  } else {
                    const _HermesInternal = HermesInternal;
                    outer4_17.verbose("optimstically writing basic_channels (guild: " + tmp + ")");
                    const items = [tmp];
                    yield outer4_12.loadGuildIds(items);
                    yield outer1_3.transaction((arg0) => outer2_1.syncOne(closure_0, arg0), "handlePostConnectionOpen");
                    yield new Promise((arg0) => setTimeout(arg0, 1000));
                  }
                }
              }
              obj = callback(outer4_3[13]);
            }
            return 0;
          }
          const tmp7 = outer2_18(guildIds);
          const iter = tmp7();
          let iter2 = iter;
          if (!iter.done) {
            const _Symbol = Symbol;
            const _loop2Result = _loop2(iter2.value);
            HermesBuiltin.ensureObject("iterator is not an object");
            while (true) {
              let iter3 = tmp12(undefined);
              let tmp13 = iter3;
              let str8 = "iterator.next() did not return an object";
              let ensureObjectResult1 = HermesBuiltin.ensureObject("iterator.next() did not return an object");
              if (!iter3.done) {
                break;
              } else {
                while (true) {
                  let value = iter4.value;
                  if (0 === value) {
                    break;
                  } else {
                    if (1 !== value) {
                      if (value) {
                        return value.v;
                      }
                    }
                    let iter5 = tmp7();
                    iter2 = iter5;
                    if (iter5.done) {
                      break;
                    }
                  }
                  break;
                }
              }
            }
            const tmp9 = _loop2(iter2.value)[Symbol.iterator]();
          }
        }
        obj2 = callback(outer2_3[14]);
      }
    }
  });
  obj4.value = function handlePostConnectionOpen() {
    return callback(...arguments);
  };
  items[6] = obj4;
  items[7] = {
    key: "handleGuildCreate",
    value: function handleGuildCreate(guild) {
      this.handleOneGuildCreate(guild.guild, arg1);
    }
  };
  items[8] = {
    key: "handleOneGuildCreate",
    value: function handleOneGuildCreate(arg0, closure_0) {
      let channels;
      let id;
      const self = this;
      ({ id, channels } = arg0);
      const op = channels.op;
      if ("full_sync" === op) {
        self.onGuildSync(id, closure_0);
      } else if ("update" === op) {
        self.onGuildUpdate(id, channels.writes, channels.deletes, closure_0);
      }
    }
  };
  items[9] = {
    key: "handleGuildUpdate",
    value: function handleGuildUpdate(guild, closure_0) {
      this.unsync(guild.guild.id, closure_0);
    }
  };
  items[10] = {
    key: "handleGuildDelete",
    value: function handleGuildDelete(guild) {
      const self = this;
      if (true !== guild.guild.unavailable) {
        self.delete(guild.guild.id, arg1);
      }
    }
  };
  items[11] = {
    key: "handleGuildRoleUpdate",
    value: function handleGuildRoleUpdate(role, closure_0) {
      const self = this;
      role = role.role;
      role = outer1_13.getRole(role.guildId, role.id);
      let equalsResult = null != role;
      if (equalsResult) {
        const obj = GuildBasicChannels(outer1_3[15]);
        equalsResult = obj.equals(GuildBasicChannels(outer1_3[15]).deserialize(role.permissions), role.permissions);
        const obj2 = GuildBasicChannels(outer1_3[15]);
      }
      if (!equalsResult) {
        self.unsync(role.guildId, closure_0);
      }
    }
  };
  items[12] = {
    key: "handleGuildMemberUpdate",
    value: function handleGuildMemberUpdate(user, closure_0) {
      const self = this;
      if (user.user.id === outer1_10.getId()) {
        self.unsync(user.guildId, closure_0);
      }
    }
  };
  items[13] = {
    key: "handleWriteCaches",
    value: function handleWriteCaches(arg0, arg1) {
      this.sync(arg1);
    }
  };
  items[14] = {
    key: "resetInMemoryState",
    value: function resetInMemoryState() {
      this.synced = null;
    }
  };
  items[15] = {
    key: "onGuildUpdate",
    value: function onGuildUpdate(id, mapped, deleted_channel_ids, closure_0) {
      const self = this;
      if (tmp) {
        self.unsync(id, closure_0);
      }
    }
  };
  items[16] = {
    key: "onGuildSync",
    value: function onGuildSync(id, closure_0) {
      this.unsync(id, closure_0);
    }
  };
  items[17] = {
    key: "delete",
    value: function _delete(guild_id, closure_0) {
      this.unsync(guild_id, closure_0);
      const result = callback2(outer1_3[13]).basicChannelsTransaction(closure_0);
      result.delete(guild_id);
      const obj = callback2(outer1_3[13]);
      const result1 = callback2(outer1_3[13]).syncedBasicChannelsTransaction(closure_0);
      result1.delete(guild_id);
    }
  };
  items[18] = {
    key: "unsync",
    value: function unsync(guild_id, closure_0) {
      const synced = this.synced;
      if (null != synced) {
        synced.delete(guild_id);
      }
      const result = callback2(outer1_3[13]).basicChannelsTransaction(closure_0);
      result.delete(guild_id);
      const obj = callback2(outer1_3[13]);
      const result1 = callback2(outer1_3[13]).syncedBasicChannelsTransaction(closure_0);
      result1.put(guild_id, false);
      outer1_16.invalidate(guild_id);
    }
  };
  items[19] = {
    key: "sync",
    value: function sync(arg0) {
      let iter2;
      const self = this;
      outer1_17.verbose("Starting to write all basic channels");
      const obj = { written: 0, skipped: 0 };
      const tmp3 = outer1_18(outer1_14.getGuildIds());
      let iter = tmp3();
      if (!iter.done) {
        do {
          if (self.syncOne(iter.value, arg0)) {
            obj.written = obj.written + 1;
          } else {
            obj.skipped = obj.skipped + 1;
          }
          iter2 = tmp3();
          iter = iter2;
        } while (!iter2.done);
      }
      outer1_17.verbose("" + obj.written + " basic_channel guilds submitted (took: " + performance.now() - performance.now() + "ms, skipped: " + obj.skipped + " guilds)");
    }
  };
  items[20] = {
    key: "syncOne",
    value: function syncOne(closure_0, arg1) {
      const self = this;
      let tmp = null == outer1_14.getGuild(closure_0);
      if (!tmp) {
        const synced = self.synced;
        tmp = null != synced && synced.has(closure_0);
        const tmp2 = null != synced && synced.has(closure_0);
      }
      let flag = !tmp;
      if (flag) {
        const synced2 = self.synced;
        if (null != synced2) {
          synced2.add(closure_0);
        }
        const result = callback2(outer1_3[13]).basicChannelsTransaction(arg1);
        result.put(closure_0, (function computeBasicChannels(closure_0) {
          const values = Object.values(outer2_11.getMutableGuildChannelsForGuild(closure_0));
          return values.map((id) => {
            const obj = { id: id.id, type: id.type, guild_id: id.guild_id, parent_id: id.parent_id, basicPermissions: callback(outer3_3[16]).asBasicFlag(outer3_15.computePermissions(id)) };
            return obj;
          });
        })(closure_0));
        let obj = callback2(outer1_3[13]);
        const result1 = callback2(outer1_3[13]).syncedBasicChannelsTransaction(arg1);
        result1.put(closure_0, true);
        flag = true;
        const obj3 = callback2(outer1_3[13]);
      }
      return flag;
    }
  };
  return callback2(GuildBasicChannels, items);
})();
tmp4 = new tmp4();
let result = require("_classCallCheck").fileFinishedImporting("modules/app_database/modules/GuildBasicChannels.tsx");

export default tmp4;
