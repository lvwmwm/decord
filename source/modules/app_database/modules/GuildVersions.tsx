// Module ID: 6895
// Function ID: 54870
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 6, 7, 1838, 3, 1882, 1327, 2]

// Module 6895 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import timestamp from "timestamp";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
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
importDefaultResult = new importDefaultResult("GuildVersions");
let tmp4 = (() => {
  class GuildVersions {
    constructor() {
      self = this;
      tmp = outer1_5(this, GuildVersions);
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
  let obj = { key: "getCommittedVersions" };
  let closure_0 = callback(async () => {
    const guildVersionsResult = GuildVersions(outer2_2[6]).guildVersions();
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
    const obj = GuildVersions(outer2_2[6]);
    obj2 = guildVersionsResult;
  });
  obj.value = function getCommittedVersions() {
    return callback(...arguments);
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , ];
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
      const tmp = outer1_9(guilds.guilds);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          if ("unavailable" !== value.data_mode) {
            let items = [value];
            let updateWithResult = self.updateWith(value.id, items);
          }
          let tmp3 = outer1_7;
          if (null == outer1_7.getGuild(value.id)) {
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
      const result = GuildVersions(outer1_2[6]).guildVersionsTransaction(arg1);
      result.deleteAllExcept(items);
      const tmp3 = outer1_9(unavailableGuilds.guilds);
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
          callback(outer2_2[7]).assertNever(channels);
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
      const tmp = outer1_9(channels.channels);
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
      const tmp = outer1_9(arg1);
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
        const result = GuildVersions(outer1_2[6]).guildVersionsTransaction(arg0);
        const tmp14 = outer1_9(self.pending);
        let iter2 = tmp14();
        if (!iter2.done) {
          do {
            let tmp = outer1_3;
            let tmp2 = outer1_3(iter2.value, 2);
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
        const obj2 = GuildVersions(outer1_2[6]);
      }
    }
  };
  return callback2(GuildVersions, items);
})();
tmp4 = new tmp4();
let result = require("_classCallCheck").fileFinishedImporting("modules/app_database/modules/GuildVersions.tsx");

export default tmp4;
export const GuildVersions = tmp4;
