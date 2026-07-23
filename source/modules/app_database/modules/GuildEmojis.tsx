// Module ID: 4997
// Function ID: 43218
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 3, 1882, 2]

// Module 4997 (_createForOfIteratorHelperLoose)
import set from "set";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import importDefaultResult from "timestamp";

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
importDefaultResult = new importDefaultResult("GuildEmojis");
let tmp4 = (() => {
  class GuildEmojis {
    constructor() {
      self = this;
      tmp = outer1_3(this, GuildEmojis);
      this.actions = {
        BACKGROUND_SYNC(arg0, arg1) {
              return self.handleBackgroundSync(arg0, arg1);
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
        GUILD_UPDATE(arg0, arg1) {
              return self.handleGuildUpdate(arg0, arg1);
            }
      };
      return;
    }
  }
  let obj = { key: "getAsync" };
  let closure_0 = callback(async (arg0) => {
    const nowResult = performance.now();
    const obj = callback(GuildEmojis[4]);
    const arr = yield callback(GuildEmojis[4]).emojis(arg0).getMapEntries();
    outer2_5.log("asynchronously loaded in " + performance.now() - nowResult + "ms (guilds: " + arr.length + ")");
    return arr;
  });
  obj.value = function getAsync() {
    return callback(...arguments);
  };
  let items = [obj, , , , , , , , , , , ];
  obj = {
    key: "handleConnectionOpen",
    value(unavailableGuilds) {
      let done;
      const self = this;
      const items = [...unavailableGuilds.unavailableGuilds];
      const obj = callback(GuildEmojis[4]);
      callback(GuildEmojis[4]).emojisTransaction(arg1).deleteAllExcept(items);
      const tmp2 = outer1_6(unavailableGuilds.guilds);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let handleOneGuildCreateResult = self.handleOneGuildCreate(iter.value, arg1);
          let iter2 = tmp2();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleGuildCreate",
    value(guild) {
      this.handleOneGuildCreate(guild.guild, arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleGuildUpdate",
    value(guild) {
      const replaced = this.replace(guild.guild.id, guild.guild.emojis, arg1);
    }
  };
  items[4] = {
    key: "handleGuildDelete",
    value(guild) {
      this.delete(guild.guild.id, arg1);
    }
  };
  items[5] = {
    key: "handleGuildEmojisUpdate",
    value(guildId) {
      const replaced = this.replace(guildId.guildId, guildId.emojis, arg1);
    }
  };
  items[6] = {
    key: "handleBackgroundSync",
    value(promisesForBackgroundSyncToWaitOn) {
      const self = this;
      let closure_1 = arg1;
      const prop = promisesForBackgroundSyncToWaitOn.promisesForBackgroundSyncToWaitOn;
      const emojis = promisesForBackgroundSyncToWaitOn.emojis;
      prop.push(Promise.all(emojis.map((dataMode) => {
        if ("unavailable" === dataMode.dataMode) {
          return Promise.resolve();
        } else if ("full" === dataMode.dataMode) {
          const _HermesInternal2 = HermesInternal;
          outer2_5.verbose("Replacing " + dataMode.entities.length + " emojis for " + dataMode.guildId);
          const replaced = self.replace(dataMode.guildId, dataMode.entities, closure_1);
        } else {
          if (tmp) {
            const _HermesInternal = HermesInternal;
            outer2_5.verbose("Updating " + dataMode.updatedEntities.length + " and deleting " + dataMode.deletedEntityIds.length + " emojis for " + dataMode.guildId);
            self.update(dataMode.guildId, dataMode.updatedEntities, dataMode.deletedEntityIds, closure_1);
          }
          tmp = dataMode.updatedEntities.length > 0 || dataMode.deletedEntityIds.length > 0;
        }
      })));
    }
  };
  items[7] = {
    key: "handleOneGuildCreate",
    value(emojis) {
      const self = this;
      const op = emojis.emojis.op;
      if ("full_sync" === op) {
        const replaced = self.replace(emojis.id, emojis.emojis.items, arg1);
      } else if ("update" === op) {
        self.update(emojis.id, emojis.emojis.writes, emojis.emojis.deletes, arg1);
      } else {
        emojis = emojis.emojis;
      }
    }
  };
  items[8] = {
    key: "resetInMemoryState",
    value() {

    }
  };
  items[9] = {
    key: "replace",
    value(arg0, arg1, arg2) {
      const obj = callback(GuildEmojis[4]);
      const replaced = callback(GuildEmojis[4]).emojisTransaction(arg2).replaceAll(arg0, arg1);
    }
  };
  items[10] = {
    key: "delete",
    value(arg0, arg1) {
      const obj = callback(GuildEmojis[4]);
      callback(GuildEmojis[4]).emojisTransaction(arg1).delete(arg0);
    }
  };
  items[11] = {
    key: "update",
    value(arg0, arg1, arg2, arg3) {
      let done;
      const emojisTransactionResult = callback(GuildEmojis[4]).emojisTransaction(arg3);
      emojisTransactionResult.putAll(arg0, arg1);
      const tmp2 = outer1_6(arg2);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let deleteResult = emojisTransactionResult.delete(arg0, iter.value);
          let iter2 = tmp2();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  return callback2(GuildEmojis, items);
})();
tmp4 = new tmp4();
const result = require("_defineProperties").fileFinishedImporting("modules/app_database/modules/GuildEmojis.tsx");

export default tmp4;
