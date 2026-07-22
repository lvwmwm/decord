// Module ID: 6888
// Function ID: 54735
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6888 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const updateJoinedAt = arg1(dependencyMap[3]).updateJoinedAt;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let importDefaultResult = importDefault(dependencyMap[8]);
importDefaultResult = new importDefaultResult("Guilds");
let tmp4 = () => {
  class Guilds {
    constructor() {
      f54754 = this;
      tmp = closure_4(this, Guilds);
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
        GUILD_MEMBER_ADD(guildId) {
              return self.handleGuildMemberAdd(guildId, arg1);
            },
        GUILD_MEMBER_UPDATE(arg0, arg1) {
              return self.handleGuildMemberUpdate(arg0, arg1);
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
        GUILD_UPDATE(arg0, arg1) {
              return self.handleGuildUpdate(arg0, arg1);
            }
      };
      return;
    }
  }
  const dependencyMap = Guilds;
  let obj = { key: "getAsync" };
  let closure_1 = callback(async (arg0) => {
    const nowResult = performance.now();
    const obj = callback(closure_2[9]);
    const arr = yield callback(closure_2[9]).guilds(arg0).getMany();
    closure_11.verbose("loaded in " + performance.now() - nowResult + "ms (guilds: " + arr.length + ")");
    return arr;
  });
  obj.value = function getAsync() {
    return callback2(...arguments);
  };
  const items = [obj, , , , , , , , , , , , , , ];
  obj = { key: "getOneAsync" };
  let closure_0 = callback(async (arg0, arg1) => {
    const obj = callback(closure_2[9]);
    return yield callback(closure_2[9]).guilds(arg0).get(arg1);
  });
  obj.value = function getOneAsync(arg0, guildId) {
    return callback(...arguments);
  };
  items[1] = obj;
  obj = {
    key: "handleBackgroundSync",
    value(guilds) {
      let iter3;
      const self = this;
      const tmp = callback5(guilds.guilds);
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let putResult = iter2.value;
          let tmp3 = tmp2;
          if ("unavailable" !== putResult.data_mode) {
            let tmp18 = closure_10;
            let guild = closure_10.getGuild(putResult.id);
            tmp3 = tmp2;
            let tmp20 = guild;
            if (null != guild) {
              let tmp21 = closure_9;
              let unsafeMutableRoles = closure_9.getUnsafeMutableRoles(putResult.id);
              if ("partial" === putResult.data_mode) {
                let tmp7 = closure_1;
                let tmp8 = closure_2;
                let obj2 = closure_1(closure_2[10]);
                let tmp9 = obj2;
                let tmp10 = unsafeMutableRoles;
                let filterRoleDeletesResult = obj2.filterRoleDeletes(putResult.id, unsafeMutableRoles, putResult.partial_updates.roles, putResult.partial_updates.deleted_role_ids);
              } else {
                let tmp4 = closure_1;
                let tmp5 = closure_2;
                let obj = closure_1(closure_2[11]);
                filterRoleDeletesResult = obj.fromServerArray(putResult.id, putResult.roles);
              }
              let tmp11 = closure_1;
              let tmp12 = closure_2;
              let obj3 = closure_1(closure_2[12]);
              let obj4 = closure_1(closure_2[12]);
              let fromBackgroundSyncResult = obj4.fromBackgroundSync(putResult, guild);
              let obj5 = closure_1(closure_2[11]);
              let tmp15 = closure_8;
              let result = obj5.toSerializedPartition(filterRoleDeletesResult);
              putResult = self.put(obj3.attachSerializedData(fromBackgroundSyncResult, result, closure_8.getSelfMember(putResult.id)), arg1);
              let tmp16 = guild;
              let tmp17 = unsafeMutableRoles;
            }
          }
          iter3 = tmp();
          let tmp2 = tmp3;
          iter2 = iter3;
        } while (!iter3.done);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleConnectionOpen",
    value(unavailableGuilds) {
      let done;
      const self = this;
      const items = [...unavailableGuilds.unavailableGuilds];
      const obj = callback(Guilds[9]);
      callback(Guilds[9]).guildsTransaction(arg1).deleteAllExcept(items);
      const tmp2 = callback5(unavailableGuilds.guilds);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let putOneResult = self.putOne(iter.value, arg1);
          let iter2 = tmp2();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[4] = {
    key: "handleGuildCreate",
    value(guild) {
      this.putOne(guild.guild, arg1);
    }
  };
  items[5] = {
    key: "handleGuildUpdate",
    value(guild) {
      guild = store4.getGuild(guild.guild.id);
      const obj = callback2(Guilds[12]);
      const fromGuildResult = callback2(Guilds[12]).fromGuild(guild.guild, guild);
      const obj2 = callback2(Guilds[12]);
      const obj3 = callback2(Guilds[11]);
      const result = obj3.toSerializedPartition(callback2(Guilds[11]).fromServerArray(guild.guild.id, guild.guild.roles));
      this.put(obj2.attachSerializedData(fromGuildResult, result, store2.getSelfMember(guild.guild.id)), arg1);
    }
  };
  items[6] = {
    key: "handleGuildDelete",
    value(guild) {
      this.delete(guild.guild.id, arg1);
    }
  };
  items[7] = {
    key: "handleGuildRoleChange",
    value(guildId) {
      const self = this;
      const guild = store4.getGuild(guildId.guildId);
      const unsafeMutableRoles = store3.getUnsafeMutableRoles(guildId.guildId);
      if (null != guild) {
        let obj = callback2(Guilds[12]);
        obj = {};
        const merged = Object.assign(unsafeMutableRoles);
        const obj2 = callback2(Guilds[11]);
        obj[guildId.role.id] = callback2(Guilds[11]).fromServer(guildId.guildId, guildId.role);
        const result = obj2.toSerializedPartition(obj);
        self.put(obj.attachSerializedData(guild, result, store2.getSelfMember(guildId.guildId)), arg1);
        const obj4 = callback2(Guilds[11]);
      }
    }
  };
  items[8] = {
    key: "handleGuildRoleDelete",
    value(guildId) {
      const self = this;
      let closure_0 = guildId;
      const guild = store4.getGuild(guildId.guildId);
      if (null != guild) {
        let obj = {};
        const merged = Object.assign(store3.getUnsafeMutableRoles(guildId.guildId));
        const roleId = guildId.roleId;
        delete r8[r5];
        const selfMember = store2.getSelfMember(guildId.guildId);
        let tmp5 = selfMember;
        if (null != selfMember) {
          obj = {};
          const merged1 = Object.assign(selfMember);
          const roles = selfMember.roles;
          obj["roles"] = roles.filter((arg0) => arg0 !== arg0.roleId);
          tmp5 = obj;
        }
        const obj2 = callback2(Guilds[12]);
        self.put(obj2.attachSerializedData(guild, callback2(Guilds[11]).toSerializedPartition(obj), tmp5), arg1);
        const obj3 = callback2(Guilds[11]);
      }
    }
  };
  items[9] = {
    key: "handleGuildMemberAdd",
    value(joinedAt) {
      const self = this;
      if (null != joinedAt.joinedAt) {
        if (joinedAt.user.id === store.getId()) {
          const guild = store4.getGuild(joinedAt.guildId);
          if (null != guild) {
            const obj = callback2(Guilds[12]);
            const tmp7 = callback4(guild, joinedAt.joinedAt);
            const result = callback2(Guilds[11]).toSerializedPartition(store3.getUnsafeMutableRoles(guild.id));
            self.put(obj.attachSerializedData(tmp7, result, store2.getSelfMember(guild.id)), arg1);
            const obj2 = callback2(Guilds[11]);
          }
        }
      }
    }
  };
  items[10] = {
    key: "handleGuildMemberUpdate",
    value(user) {
      const self = this;
      if (user.user.id === store.getId()) {
        const guild = store4.getGuild(user.guildId);
        if (null != guild) {
          let obj = callback2(Guilds[12]);
          obj = { roles: user.roles, userId: user.user.id };
          self.put(obj.attachSerializedData(guild, callback2(Guilds[11]).toSerializedPartition(store3.getUnsafeMutableRoles(guild.id)), obj), arg1);
          const obj2 = callback2(Guilds[11]);
        }
      }
    }
  };
  items[11] = {
    key: "resetInMemoryState",
    value() {

    }
  };
  items[12] = {
    key: "putOne",
    value(members) {
      let id;
      let roles;
      const self = this;
      members = members.members;
      const found = members.find((user) => user.user.id === id.getId());
      const guild = store4.getGuild(members.id);
      if (null != members.properties) {
        let obj = callback2(Guilds[11]);
        ({ id, roles } = members);
        const fromSyncOperationResult = obj.fromSyncOperation(id, roles, store3.getUnsafeMutableRoles(members.id));
        const obj2 = callback2(Guilds[12]);
        const obj3 = callback2(Guilds[12]);
        const fromServerResult = callback2(Guilds[12]).fromServer(members, guild);
        let tmp9 = null;
        const result = callback2(Guilds[11]).toSerializedPartition(fromSyncOperationResult);
        if (null != found) {
          obj = { userId: found.user.id, roles: found.roles };
          tmp9 = obj;
        }
        self.put(obj2.attachSerializedData(fromServerResult, result, tmp9), arg1);
        const obj4 = callback2(Guilds[11]);
      }
    }
  };
  items[13] = {
    key: "put",
    value(arg0, arg1) {
      const obj = callback(Guilds[9]);
      callback(Guilds[9]).guildsTransaction(arg1).put(arg0);
    }
  };
  items[14] = {
    key: "delete",
    value(arg0, arg1) {
      const obj = callback(Guilds[9]);
      callback(Guilds[9]).guildsTransaction(arg1).delete(arg0);
    }
  };
  return callback2(Guilds, items);
}();
tmp4 = new tmp4();
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/app_database/modules/Guilds.tsx");

export default tmp4;
