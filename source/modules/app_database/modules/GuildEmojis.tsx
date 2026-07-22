// Module ID: 4994
// Function ID: 43200
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 4994 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("GuildEmojis");
let tmp4 = () => {
  class GuildEmojis {
    constructor() {
      f43212 = this;
      tmp = closure_3(this, GuildEmojis);
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
  const dependencyMap = GuildEmojis;
  let obj = { key: "getAsync" };
  let closure_0 = callback(async (arg0) => {
    const nowResult = performance.now();
    const obj = callback(closure_1[4]);
    const arr = yield callback(closure_1[4]).emojis(arg0).getMapEntries();
    closure_5.log("asynchronously loaded in " + performance.now() - nowResult + "ms (guilds: " + arr.length + ")");
    return arr;
  });
  obj.value = function getAsync() {
    return callback(...arguments);
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "handleConnectionOpen",
    value(unavailableGuilds) {
      let done;
      const self = this;
      const items = [...unavailableGuilds.unavailableGuilds];
      const obj = callback(GuildEmojis[4]);
      callback(GuildEmojis[4]).emojisTransaction(arg1).deleteAllExcept(items);
      const tmp2 = callback3(unavailableGuilds.guilds);
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
      let closure_0 = this;
      const GuildEmojis = arg1;
      const prop = promisesForBackgroundSyncToWaitOn.promisesForBackgroundSyncToWaitOn;
      const emojis = promisesForBackgroundSyncToWaitOn.emojis;
      prop.push(Promise.all(emojis.map((dataMode) => {
        if ("unavailable" === dataMode.dataMode) {
          return Promise.resolve();
        } else if ("full" === dataMode.dataMode) {
          const _HermesInternal2 = HermesInternal;
          closure_5.verbose("Replacing " + dataMode.entities.length + " emojis for " + dataMode.guildId);
          const replaced = self.replace(dataMode.guildId, dataMode.entities, arg1);
        } else {
          if (tmp) {
            const _HermesInternal = HermesInternal;
            closure_5.verbose("Updating " + dataMode.updatedEntities.length + " and deleting " + dataMode.deletedEntityIds.length + " emojis for " + dataMode.guildId);
            self.update(dataMode.guildId, dataMode.updatedEntities, dataMode.deletedEntityIds, arg1);
          }
          const tmp = dataMode.updatedEntities.length > 0 || dataMode.deletedEntityIds.length > 0;
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
      const tmp2 = callback3(arg2);
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
}();
tmp4 = new tmp4();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/app_database/modules/GuildEmojis.tsx");

export default tmp4;
