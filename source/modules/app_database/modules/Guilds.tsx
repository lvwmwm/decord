// Module ID: 6892
// Function ID: 54777
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 1391, 1194, 1917, 1910, 1838, 3, 1882, 1912, 1914, 1387, 2]

// Module 6892 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_createForOfIteratorHelperLoose";
import { updateJoinedAt } from "isGuildOwner";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_createForOfIteratorHelperLoose";
import importDefaultResult from "isGuildOwner";

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
importDefaultResult = new importDefaultResult("Guilds");
let tmp4 = (() => {
  class Guilds {
    constructor() {
      self = this;
      tmp = outer1_4(this, Guilds);
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
  let obj = { key: "getAsync" };
  let closure_1 = callback(async (arg0) => {
    const nowResult = performance.now();
    const obj = callback(Guilds[9]);
    const arr = yield callback(Guilds[9]).guilds(arg0).getMany();
    outer2_11.verbose("loaded in " + performance.now() - nowResult + "ms (guilds: " + arr.length + ")");
    return arr;
  });
  obj.value = function getAsync() {
    return callback2(...arguments);
  };
  let items = [obj, , , , , , , , , , , , , , ];
  obj = { key: "getOneAsync" };
  let closure_0 = callback(async (arg0, arg1) => {
    const obj = callback(Guilds[9]);
    return yield callback(Guilds[9]).guilds(arg0).get(arg1);
  });
  obj.value = function getOneAsync(closure_0, guildId) {
    return callback(...arguments);
  };
  items[1] = obj;
  obj = {
    key: "handleBackgroundSync",
    value(guilds) {
      let iter3;
      const self = this;
      const tmp = outer1_12(guilds.guilds);
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let putResult = iter2.value;
          let tmp3 = tmp2;
          if ("unavailable" !== putResult.data_mode) {
            let tmp18 = outer1_10;
            let guild = outer1_10.getGuild(putResult.id);
            tmp3 = tmp2;
            let tmp20 = guild;
            if (null != guild) {
              let tmp21 = outer1_9;
              let unsafeMutableRoles = outer1_9.getUnsafeMutableRoles(putResult.id);
              if ("partial" === putResult.data_mode) {
                let tmp7 = callback2;
                let tmp8 = Guilds;
                let obj2 = callback2(Guilds[10]);
                let tmp9 = obj2;
                let tmp10 = unsafeMutableRoles;
                let filterRoleDeletesResult = obj2.filterRoleDeletes(putResult.id, unsafeMutableRoles, putResult.partial_updates.roles, putResult.partial_updates.deleted_role_ids);
              } else {
                let tmp4 = callback2;
                let tmp5 = Guilds;
                let obj = callback2(Guilds[11]);
                filterRoleDeletesResult = obj.fromServerArray(putResult.id, putResult.roles);
              }
              let tmp11 = callback2;
              let tmp12 = Guilds;
              let obj3 = callback2(Guilds[12]);
              let obj4 = callback2(Guilds[12]);
              let fromBackgroundSyncResult = obj4.fromBackgroundSync(putResult, guild);
              let obj5 = callback2(Guilds[11]);
              let tmp15 = outer1_8;
              let result = obj5.toSerializedPartition(filterRoleDeletesResult);
              putResult = self.put(obj3.attachSerializedData(fromBackgroundSyncResult, result, outer1_8.getSelfMember(putResult.id)), arg1);
              let tmp16 = guild;
              let tmp17 = unsafeMutableRoles;
            }
          }
          iter3 = tmp();
          tmp2 = tmp3;
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
      const tmp2 = outer1_12(unavailableGuilds.guilds);
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
      guild = outer1_10.getGuild(guild.guild.id);
      const obj = callback2(Guilds[12]);
      const fromGuildResult = callback2(Guilds[12]).fromGuild(guild.guild, guild);
      const obj2 = callback2(Guilds[12]);
      const obj3 = callback2(Guilds[11]);
      const result = obj3.toSerializedPartition(callback2(Guilds[11]).fromServerArray(guild.guild.id, guild.guild.roles));
      this.put(obj2.attachSerializedData(fromGuildResult, result, outer1_8.getSelfMember(guild.guild.id)), arg1);
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
      const guild = outer1_10.getGuild(guildId.guildId);
      const unsafeMutableRoles = outer1_9.getUnsafeMutableRoles(guildId.guildId);
      if (null != guild) {
        let obj = callback2(Guilds[12]);
        obj = {};
        const merged = Object.assign(unsafeMutableRoles);
        const obj2 = callback2(Guilds[11]);
        obj[guildId.role.id] = callback2(Guilds[11]).fromServer(guildId.guildId, guildId.role);
        const result = obj2.toSerializedPartition(obj);
        self.put(obj.attachSerializedData(guild, result, outer1_8.getSelfMember(guildId.guildId)), arg1);
        const obj4 = callback2(Guilds[11]);
      }
    }
  };
  items[8] = {
    key: "handleGuildRoleDelete",
    value(guildId) {
      const self = this;
      let closure_0 = guildId;
      const guild = outer1_10.getGuild(guildId.guildId);
      if (null != guild) {
        let obj = {};
        const merged = Object.assign(outer1_9.getUnsafeMutableRoles(guildId.guildId));
        const roleId = guildId.roleId;
        delete tmp2[tmp];
        const selfMember = outer1_8.getSelfMember(guildId.guildId);
        let tmp7 = selfMember;
        if (null != selfMember) {
          obj = {};
          const merged1 = Object.assign(selfMember);
          const roles = selfMember.roles;
          obj["roles"] = roles.filter((arg0) => arg0 !== guildId.roleId);
          tmp7 = obj;
        }
        const obj2 = callback2(Guilds[12]);
        self.put(obj2.attachSerializedData(guild, callback2(Guilds[11]).toSerializedPartition(obj), tmp7), arg1);
        const obj3 = callback2(Guilds[11]);
      }
    }
  };
  items[9] = {
    key: "handleGuildMemberAdd",
    value(joinedAt) {
      const self = this;
      if (null != joinedAt.joinedAt) {
        if (joinedAt.user.id === outer1_7.getId()) {
          const guild = outer1_10.getGuild(joinedAt.guildId);
          if (null != guild) {
            const obj = callback2(Guilds[12]);
            const tmp7 = outer1_6(guild, joinedAt.joinedAt);
            const result = callback2(Guilds[11]).toSerializedPartition(outer1_9.getUnsafeMutableRoles(guild.id));
            self.put(obj.attachSerializedData(tmp7, result, outer1_8.getSelfMember(guild.id)), arg1);
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
      if (user.user.id === outer1_7.getId()) {
        const guild = outer1_10.getGuild(user.guildId);
        if (null != guild) {
          let obj = callback2(Guilds[12]);
          obj = { roles: user.roles, userId: user.user.id };
          self.put(obj.attachSerializedData(guild, callback2(Guilds[11]).toSerializedPartition(outer1_9.getUnsafeMutableRoles(guild.id)), obj), arg1);
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
      const found = members.find((user) => user.user.id === outer2_7.getId());
      const guild = outer1_10.getGuild(members.id);
      if (null != members.properties) {
        let obj = callback2(Guilds[11]);
        ({ id, roles } = members);
        const fromSyncOperationResult = obj.fromSyncOperation(id, roles, outer1_9.getUnsafeMutableRoles(members.id));
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
})();
tmp4 = new tmp4();
let result = require("_defineProperties").fileFinishedImporting("modules/app_database/modules/Guilds.tsx");

export default tmp4;
