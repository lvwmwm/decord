// Module ID: 6885
// Function ID: 54654
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6885 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createChannelRecordFromServer;
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
const ChannelLoader = arg1(dependencyMap[7]).ChannelLoader;
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
let closure_15 = importDefault(dependencyMap[10]);
let closure_16 = importDefault(dependencyMap[11]);
let importDefaultResult = importDefault(dependencyMap[12]);
importDefaultResult = new importDefaultResult("GuildBasicChannels");
let tmp4 = () => {
  class GuildBasicChannels {
    constructor() {
      f54685 = this;
      tmp = closure_6(this, GuildBasicChannels);
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
  const importAll = GuildBasicChannels;
  let obj = { key: "getAsync" };
  let closure_1 = callback(async function(arg0) {
    let iter2;
    let set;
    let obj = callback(closure_3[13]);
    const nowResult = performance.now();
    const items = [obj.basicChannels(arg0).getKvEntries(), ];
    const basicChannelsResult = obj.basicChannels(arg0);
    const obj3 = callback(closure_3[13]);
    items[1] = callback(closure_3[13]).syncedBasicChannels(arg0).getKvEntries();
    const tmp3 = callback2(yield Promise.all(items), 2);
    const first = tmp3[0];
    const diff = performance.now() - nowResult;
    const items1 = [];
    const items2 = [];
    const tmp5 = callback3(tmp3[1]);
    let iter = tmp5();
    if (!iter.done) {
      do {
        let tmp6 = closure_4;
        let tmp7 = closure_4(iter.value, 2);
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
    const tmp2Result = callback2(items3, 2);
    set = new Set(tmp2Result[0]);
    this.synced = set;
    closure_17.verbose("loaded in " + diff + "ms (guilds: " + first.length + ", synced: " + set.size + " unsynced: " + tmp2Result[1].length + ")");
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
  const items = [obj, , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "handleChannelCreate",
    value(channel, value) {
      const self = this;
      if (null != channel.channel.guild_id) {
        self.unsync(channel.channel.guild_id, value);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleChannelDelete",
    value(channel, value) {
      const self = this;
      if (null != channel.channel.guild_id) {
        self.unsync(channel.channel.guild_id, value);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleChannelUpdates",
    value(channels, value) {
      let iter2;
      const self = this;
      channels = channels.channels;
      const tmp = callback4(channels.filter((guild_id) => null != guild_id.guild_id));
      let iter = tmp();
      if (!iter.done) {
        do {
          value = iter.value;
          let tmp2 = closure_20;
          let tmp3 = closure_11;
          if (closure_20(closure_11.getBasicChannel(value.id), value)) {
            let unsyncResult = self.unsync(value.guild_id, value);
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
      let closure_1 = this;
      function _loop(value) {
        const arg1 = value;
        const data_mode = value.data_mode;
        if ("unavailable" !== data_mode) {
          if ("partial" === data_mode) {
            const id = value.id;
            const channels = value.partial_updates.channels;
            let mapped;
            if (null != channels) {
              mapped = channels.map((arg0) => callback(arg0, arg0.id));
            }
            if (null == mapped) {
              mapped = [];
            }
            let deleted_channel_ids = value.partial_updates.deleted_channel_ids;
            if (null == deleted_channel_ids) {
              deleted_channel_ids = [];
            }
            self.onGuildUpdate(id, mapped, deleted_channel_ids, arg1);
            const tmp4 = self;
          } else {
            self.onGuildSync(value.id, arg1);
          }
        }
      }
      const tmp = callback4(guilds.guilds);
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
      const tmp = callback4(guilds.guilds);
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
    let databaseResult;
    closure_2 = closure_8.lastTimeConnectedChanged();
    databaseResult = self(databaseResult[13]).database();
    if (null != self.synced) {
      if (null != databaseResult) {
        if (obj2.isCacheEnabled()) {
          const guildIds = guildIds.getGuildIds();
          const _HermesInternal = HermesInternal;
          closure_17.verbose("scheduling basic_channel optimstic writes (guilds: " + guildIds.filter((arg0) => {
            const synced = self.synced;
            return !synced.has(arg0);
          }).length + ")");
          function* _loop2(value) {
            if (null != lib.synced) {
              if (closure_3 === obj.database()) {
                if (closure_2 === closure_8.lastTimeConnectedChanged()) {
                  const synced = lib.synced;
                  if (synced.has(tmp)) {
                    return 1;
                  } else {
                    const _HermesInternal = HermesInternal;
                    closure_17.verbose("optimstically writing basic_channels (guild: " + tmp + ")");
                    const items = [tmp];
                    yield closure_12.loadGuildIds(items);
                    yield closure_3.transaction((arg0) => closure_1.syncOne(arg0, arg0), "handlePostConnectionOpen");
                    yield new Promise((arg0) => setTimeout(arg0, 1000));
                  }
                }
              }
              const obj = lib(closure_3[13]);
            }
            return 0;
          }
          const tmp7 = callback(guildIds);
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
                    } else {
                      // continue label0
                    }
                  }
                  break;
                }
              }
            }
            const tmp9 = _loop2(iter2.value)[Symbol.iterator]();
          }
        }
        const obj2 = self(databaseResult[14]);
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
    value: function handleOneGuildCreate(arg0, value) {
      let channels;
      let id;
      const self = this;
      ({ id, channels } = arg0);
      const op = channels.op;
      if ("full_sync" === op) {
        self.onGuildSync(id, value);
      } else if ("update" === op) {
        self.onGuildUpdate(id, channels.writes, channels.deletes, value);
      }
    }
  };
  items[9] = {
    key: "handleGuildUpdate",
    value: function handleGuildUpdate(guild, value) {
      this.unsync(guild.guild.id, value);
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
    value: function handleGuildRoleUpdate(role, value) {
      const self = this;
      role = role.role;
      role = role.getRole(role.guildId, role.id);
      let equalsResult = null != role;
      if (equalsResult) {
        const obj = GuildBasicChannels(closure_3[15]);
        equalsResult = obj.equals(GuildBasicChannels(closure_3[15]).deserialize(role.permissions), role.permissions);
        const obj2 = GuildBasicChannels(closure_3[15]);
      }
      if (!equalsResult) {
        self.unsync(role.guildId, value);
      }
    }
  };
  items[12] = {
    key: "handleGuildMemberUpdate",
    value: function handleGuildMemberUpdate(user, value) {
      const self = this;
      if (user.user.id === id.getId()) {
        self.unsync(user.guildId, value);
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
    value: function onGuildUpdate(id, mapped, deleted_channel_ids, value) {
      const self = this;
      if (tmp) {
        self.unsync(id, value);
      }
    }
  };
  items[16] = {
    key: "onGuildSync",
    value: function onGuildSync(id, value) {
      this.unsync(id, value);
    }
  };
  items[17] = {
    key: "delete",
    value: function _delete(guild_id, value) {
      this.unsync(guild_id, value);
      const result = callback2(closure_3[13]).basicChannelsTransaction(value);
      result.delete(guild_id);
      const obj = callback2(closure_3[13]);
      const result1 = callback2(closure_3[13]).syncedBasicChannelsTransaction(value);
      result1.delete(guild_id);
    }
  };
  items[18] = {
    key: "unsync",
    value: function unsync(guild_id, value) {
      const synced = this.synced;
      if (null != synced) {
        synced.delete(guild_id);
      }
      const result = callback2(closure_3[13]).basicChannelsTransaction(value);
      result.delete(guild_id);
      const obj = callback2(closure_3[13]);
      const result1 = callback2(closure_3[13]).syncedBasicChannelsTransaction(value);
      result1.put(guild_id, false);
      closure_16.invalidate(guild_id);
    }
  };
  items[19] = {
    key: "sync",
    value: function sync(arg0) {
      let iter2;
      const self = this;
      closure_17.verbose("Starting to write all basic channels");
      const obj = { -9223372036854775808: -536870861, -9223372036854775808: -299892737 };
      const tmp3 = callback4(store.getGuildIds());
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
      closure_17.verbose("" + obj.written + " basic_channel guilds submitted (took: " + performance.now() - performance.now() + "ms, skipped: " + obj.skipped + " guilds)");
    }
  };
  items[20] = {
    key: "syncOne",
    value: function syncOne(value, arg1) {
      const self = this;
      let tmp = null == store.getGuild(value);
      if (!tmp) {
        const synced = self.synced;
        tmp = null != synced && synced.has(value);
        const tmp2 = null != synced && synced.has(value);
      }
      let flag = !tmp;
      if (flag) {
        const synced2 = self.synced;
        if (null != synced2) {
          synced2.add(value);
        }
        const result = callback2(closure_3[13]).basicChannelsTransaction(arg1);
        result.put(value, function computeBasicChannels(value) {
          const values = Object.values(mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(value));
          return values.map((id) => {
            const obj = { id: id.id, type: id.type, guild_id: id.guild_id, parent_id: id.parent_id, basicPermissions: callback(closure_3[16]).asBasicFlag(closure_15.computePermissions(id)) };
            return obj;
          });
        }(value));
        const obj = callback2(closure_3[13]);
        const result1 = callback2(closure_3[13]).syncedBasicChannelsTransaction(arg1);
        result1.put(value, true);
        flag = true;
        const obj3 = callback2(closure_3[13]);
      }
      return flag;
    }
  };
  return callback2(GuildBasicChannels, items);
}();
tmp4 = new tmp4();
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/app_database/modules/GuildBasicChannels.tsx");

export default tmp4;
