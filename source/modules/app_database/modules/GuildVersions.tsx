// Module ID: 6886
// Function ID: 54795
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6886 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult("GuildVersions");
let tmp4 = () => {
  class GuildVersions {
    constructor() {
      f54814 = this;
      tmp = closure_5(this, GuildVersions);
      map = new Map();
      this.pending = map;
      map1 = new Map();
      this.committed = map1;
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
        GUILD_EMOJIS_UPDATE(arg0, arg1) {
              return self.handleGuildEmojisUpdate(arg0, arg1);
            },
        GUILD_ROLE_CREATE(arg0, arg1) {
              return self.handleGuildRoleChange(arg0, arg1);
            },
        GUILD_ROLE_DELETE(arg0, arg1) {
              return self.handleGuildRoleDelete(arg0, arg1);
            },
        GUILD_ROLE_UPDATE(arg0, arg1) {
              return self.handleGuildRoleChange(arg0, arg1);
            },
        GUILD_STICKERS_UPDATE(arg0, arg1) {
              return self.handleGuildStickersUpdate(arg0, arg1);
            },
        GUILD_UPDATE(arg0, arg1) {
              return self.handleGuildUpdate(arg0, arg1);
            }
      };
      return;
    }
  }
  const importDefault = GuildVersions;
  let obj = { key: "getCommittedVersions" };
  let closure_0 = callback(async () => {
    const guildVersionsResult = callback(closure_2[6]).guildVersions();
    if (null == guildVersionsResult) {
      return {};
    } else {
      const mapped = yield obj2.getMany().map((arg0) => {
        const items = [, ];
        ({ id: arr[0], version: arr[1] } = arg0);
        return items;
      });
      return Object.fromEntries(null != mapped ? mapped : []);
    }
    const obj = callback(closure_2[6]);
    const obj2 = guildVersionsResult;
  });
  obj.value = function getCommittedVersions() {
    return callback(...arguments);
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "remove",
    value(arg0, arg1) {
      this.deleteWith(arg0);
      this.commit(arg1);
    }
  };
  items[1] = obj;
  obj = {
    key: "handleBackgroundSync",
    value(guilds) {
      let iter2;
      const self = this;
      const tmp = callback3(guilds.guilds);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          if ("unavailable" !== value.data_mode) {
            let items = [value];
            let updateWithResult = self.updateWith(value.id, items);
          }
          let tmp3 = closure_7;
          if (null == closure_7.getGuild(value.id)) {
            let removeResult = self.remove(value.id, arg1);
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      self.commit(arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleConnectionOpen",
    value(unavailableGuilds) {
      let done;
      const self = this;
      this.reset();
      const items = [...unavailableGuilds.unavailableGuilds];
      const result = GuildVersions(closure_2[6]).guildVersionsTransaction(arg1);
      result.deleteAllExcept(items);
      const tmp3 = callback3(unavailableGuilds.guilds);
      let iter = tmp3();
      if (!iter.done) {
        do {
          let value = iter.value;
          let items1 = [value];
          let updateWithResult = self.updateWith(value.id, items1);
          let iter2 = tmp3();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      self.commit(arg1);
    }
  };
  items[4] = {
    key: "handleGuildCreate",
    value(guild) {
      function entitiesForOperation(channels) {
        const op = channels.op;
        if ("full_sync" === op) {
          return channels.items;
        } else if ("update" === op) {
          return channels.writes;
        } else {
          callback(closure_2[7]).assertNever(channels);
        }
      }
      guild = guild.guild;
      const id = guild.guild.id;
      const items = [guild];
      this.updateWith(id, items);
      this.updateWith(id, entitiesForOperation(guild.emojis));
      this.updateWith(id, entitiesForOperation(guild.stickers));
      this.updateWith(id, entitiesForOperation(guild.channels));
      this.updateWith(id, entitiesForOperation(guild.roles));
      this.commit(arg1);
    }
  };
  items[5] = {
    key: "handleGuildUpdate",
    value(guild) {
      guild = guild.guild;
      const id = guild.guild.id;
      const items = [guild];
      this.updateWith(id, items);
      this.updateWith(id, guild.emojis);
      this.updateWith(id, guild.stickers);
      this.updateWith(id, guild.roles);
      this.commit(arg1);
    }
  };
  items[6] = {
    key: "handleGuildDelete",
    value(guild) {
      this.deleteWith(guild.guild.id);
      this.commit(arg1);
    }
  };
  items[7] = {
    key: "handleGuildRoleChange",
    value(role) {
      const items = [role.role];
      this.updateWith(role.guildId, items);
      this.commit(arg1);
    }
  };
  items[8] = {
    key: "handleGuildRoleDelete",
    value(version) {
      const items = [{ version: version.version }];
      this.updateWith(version.guildId, items);
      this.commit(arg1);
    }
  };
  items[9] = {
    key: "handleGuildEmojisUpdate",
    value(guildId) {
      this.updateWith(guildId.guildId, guildId.emojis);
      this.commit(arg1);
    }
  };
  items[10] = {
    key: "handleGuildStickersUpdate",
    value(guildId) {
      this.updateWith(guildId.guildId, guildId.stickers);
      this.commit(arg1);
    }
  };
  items[11] = {
    key: "handleChannelCreate",
    value(channel) {
      const self = this;
      if (null != channel.channel.guild_id) {
        const items = [channel.channel];
        self.updateWith(channel.channel.guild_id, items);
      }
      self.commit(arg1);
    }
  };
  items[12] = {
    key: "handleChannelUpdates",
    value(channels) {
      let iter2;
      const self = this;
      const tmp = callback3(channels.channels);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          if (null != value.guild_id) {
            let items = [value];
            let updateWithResult = self.updateWith(value.guild_id, items);
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      self.commit(arg1);
    }
  };
  items[13] = {
    key: "handleChannelDelete",
    value(channel) {
      const self = this;
      if (null != channel.channel.guild_id) {
        const items = [channel.channel];
        self.updateWith(channel.channel.guild_id, items);
      }
      self.commit(arg1);
    }
  };
  items[14] = {
    key: "resetInMemoryState",
    value() {
      this.reset();
    }
  };
  items[15] = {
    key: "reset",
    value() {
      this.committed = new Map();
      const map = new Map();
      this.pending = new Map();
    }
  };
  items[16] = {
    key: "deleteWith",
    value(arg0) {
      const pending = this.pending;
      const result = pending.set(arg0, null);
    }
  };
  items[17] = {
    key: "updateWith",
    value(arg0, arg1) {
      const self = this;
      if (0 !== arg1.length) {
        const committed = self.committed;
        let value = committed.get(arg0);
        let num = 0;
        if (null != value) {
          num = value;
        }
        const pending = self.pending;
        value = pending.get(arg0);
        let num2 = 0;
        if (null != value) {
          num2 = value;
        }
        const bound = Math.max(num, num2);
        const latestVersion = self.computeLatestVersion(bound, arg1);
        if (latestVersion > bound) {
          const pending2 = self.pending;
          const result = pending2.set(arg0, latestVersion);
        }
      }
    }
  };
  items[18] = {
    key: "computeLatestVersion",
    value(arg0, arg1) {
      let iter3;
      const tmp = callback3(arg1);
      const iter = tmp();
      let iter2 = iter;
      let bound = arg0;
      let tmp3 = arg0;
      if (!iter.done) {
        do {
          let version = iter2.value.version;
          let num = 0;
          if (null != version) {
            num = version;
          }
          bound = Math.max(bound, num);
          iter3 = tmp();
          iter2 = iter3;
          tmp3 = bound;
        } while (!iter3.done);
      }
      return tmp3;
    }
  };
  items[19] = {
    key: "commit",
    value(arg0) {
      let iter;
      let tmp3;
      let tmp4;
      const self = this;
      if (this.pending.size > 0) {
        const result = GuildVersions(closure_2[6]).guildVersionsTransaction(arg0);
        const tmp14 = callback3(self.pending);
        let iter2 = tmp14();
        if (!iter2.done) {
          do {
            let tmp = closure_3;
            let tmp2 = closure_3(iter2.value, 2);
            [tmp3, tmp4] = tmp2;
            if (null != tmp4) {
              let obj = { id: tmp3, version: tmp4 };
              let putResult = result.put(obj);
              let committed2 = self.committed;
              let result1 = committed2.set(tmp3, tmp4);
            } else {
              let deleteResult = result.delete(tmp3);
              let committed = self.committed;
              let deleteResult1 = committed.delete(tmp3);
            }
            iter = tmp14();
            iter2 = iter;
          } while (!iter.done);
        }
        const pending = self.pending;
        pending.clear();
        const obj2 = GuildVersions(closure_2[6]);
      }
    }
  };
  return callback2(GuildVersions, items);
}();
tmp4 = new tmp4();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/app_database/modules/GuildVersions.tsx");

export default tmp4;
export const GuildVersions = tmp4;
