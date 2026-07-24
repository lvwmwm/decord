// Module ID: 5658
// Function ID: 48469
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 4044, 4149, 1194, 1348, 4051, 1917, 1910, 1838, 4217, 4810, 1849, 653, 1212, 3763, 1193, 22, 483, 566, 686, 2]

// Module 5658 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getSystemLocale from "getSystemLocale";
import calculateElevatedPermissions from "calculateElevatedPermissions";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_16 from "_createForOfIteratorHelperLoose";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_20;
let closure_21;
let require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeGroup(guildId, key, count, index) {
  let closure_0 = key;
  if (constants.ONLINE !== key) {
    if (constants.OFFLINE !== key) {
      if (constants.UNKNOWN !== key) {
        guild = guild.getGuild(guildId);
        let role = null;
        if (null != guild) {
          role = role.getRole(guild.id, key);
        }
        let obj = {};
        obj.type = obj.GROUP;
        obj.key = key;
        obj.id = key;
        let str = "";
        if (null != role) {
          str = role.name;
        }
        obj.title = str;
        obj.count = count;
        obj.index = index;
        return obj;
      }
    }
  }
  obj = { type: obj.GROUP, key, id: key };
  Object.defineProperty(obj, "title", {
    get: () => {
      if (outer1_20.ONLINE === key) {
        const intl3 = key(outer1_3[17]).intl;
        return intl3.string(key(outer1_3[17]).t.WbGtnH);
      } else if (outer1_20.OFFLINE === tmp) {
        const intl2 = key(outer1_3[17]).intl;
        return intl2.string(key(outer1_3[17]).t.Vv0abJ);
      } else {
        const intl = key(outer1_3[17]).intl;
        return intl.string(key(outer1_3[17]).t["UQMV/E"]);
      }
    },
    set: undefined
  });
  obj.count = count;
  obj.index = index;
  return obj;
}
function makeMember(guildId, arg1, id) {
  const tmp = id === store.getId();
  const isMobileOnlineResult = store2.isMobileOnline(id);
  if (tmp) {
    let status = store3.getStatus();
  } else {
    status = store2.getStatus(id, guildId);
  }
  if (tmp) {
    let activities = store3.getActivities();
  } else {
    activities = store2.getActivities(id, guildId);
  }
  const streamForUser = authStore.getStreamForUser(id, guildId);
  user = user.getUser(id);
  let tmp12 = null;
  if (null != user) {
    const obj = {};
    obj.type = obj.MEMBER;
    const merged = Object.assign(member.getMember(guildId, id));
    obj["user"] = user;
    obj["status"] = status;
    obj["activities"] = activities;
    obj["applicationStream"] = streamForUser;
    obj["isOwner"] = arg1 === id;
    obj["isMobileOnline"] = isMobileOnlineResult;
    obj["isVROnline"] = isVROnlineResult;
    tmp12 = obj;
  }
  return tmp12;
}
function getMemberListId(channelId) {
  channel = channel.getChannel(channelId);
  if (null == channel) {
    let memberListId = everyone;
  } else if (null == channel.memberListId) {
    memberListId = (function computeMemberListId(channel) {
      if (obj.canEveryone(outer1_21.VIEW_CHANNEL, channel)) {
        return outer1_22;
      } else {
        let obj2 = outer1_1(outer1_3[19]);
        const reduced = outer1_1(outer1_3[20])(channel.permissionOverwrites).reduce((arr, id) => {
          let allow;
          let deny;
          id = id.id;
          ({ allow, deny } = id);
          if (obj.has(allow, outer2_21.VIEW_CHANNEL)) {
            const _HermesInternal2 = HermesInternal;
            arr.push("allow:" + id);
          } else {
            if (obj2.has(deny, outer2_21.VIEW_CHANNEL)) {
              const _HermesInternal = HermesInternal;
              arr.push("deny:" + id);
            }
            obj2 = outer2_2(outer2_3[21]);
          }
          return arr;
        }, []);
        const sorted = reduced.sort();
        const arr = outer1_1(outer1_3[20])(channel.permissionOverwrites);
        return obj2.v3(sorted.join(",")).toString();
      }
      obj = outer1_2(outer1_3[18]);
    })(channel);
  } else {
    memberListId = channel.memberListId;
  }
  return memberListId;
}
function handleConnectionOpen() {
  tmp3.reset();
}
function handleApplicationStreamUpdate() {
  const allApplicationStreams = authStore.getAllApplicationStreams();
  const combined = allApplicationStreams.concat(allApplicationStreams);
  let item = combined.forEach((arg0) => {
    let closure_0 = arg0;
    const item = outer1_25.forEach(null, (rebuildMember) => rebuildMember.rebuildMember(ownerId.ownerId));
  });
}
function handleLocalPresenceUpdate() {
  const id = store.getId();
  const item = tmp3.forEach(null, (rebuildMember) => rebuildMember.rebuildMember(closure_0));
}
({ StatusTypes: closure_20, Permissions: closure_21 } = ME);
const everyone = "everyone";
let obj = { GROUP: "GROUP", MEMBER: "MEMBER", CONTENT_INVENTORY: "CONTENT_INVENTORY", CONTENT_INVENTORY_GROUP: "CONTENT_INVENTORY_GROUP", HIDDEN_CONTENT_INVENTORY: "HIDDEN_CONTENT_INVENTORY", CONTENT_INVENTORY_LEADERBOARD: "CONTENT_INVENTORY_LEADERBOARD" };
let closure_24 = (() => {
  class MemberList {
    constructor(arg0, arg1) {
      tmp = outer1_7(this, MemberList);
      this.rows = [];
      this.groups = [];
      this.members = {};
      this.version = 0;
      this.guildId = arg0;
      this.listId = arg1;
      updateOwnerIdResult = this.updateOwnerId();
      return;
    }
  }
  let obj = {
    key: "updateOwnerId",
    value() {
      const self = this;
      const guild = outer1_16.getGuild(this.guildId);
      if (null == guild) {
        return false;
      } else {
        const guildVisualOwnerId = outer1_2(outer1_3[18]).getGuildVisualOwnerId(guild);
        let flag = self.ownerId !== guildVisualOwnerId;
        if (flag) {
          self.ownerId = guildVisualOwnerId;
          flag = true;
        }
        return flag;
      }
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "setGroups",
    value(arr) {
      const self = this;
      let c1 = 0;
      this.groups = arr.map((count) => {
        count = count.count;
        let num = 0;
        if (null != count) {
          num = count;
        }
        const bound = Math.max(0, num);
        closure_1 = closure_1 + (bound + 1);
        return outer2_28(self.guildId, count.id, bound, closure_1);
      });
      this.rows.length = c1;
    }
  };
  items[1] = obj;
  obj = {
    key: "sync",
    value(arg0, arr) {
      let closure_1;
      const self = this;
      [closure_1] = arg0;
      const item = arr.forEach((arg0, arg1) => self.update(closure_1 + arg1, arg0));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "invalidate",
    value(arg0) {
      let sum;
      let tmp4;
      let tmp5;
      const self = this;
      [tmp4, tmp5] = arg0;
      if (sum <= tmp5) {
        while (null != self.rows[sum]) {
          let rows = self.rows;
          delete tmp3[tmp];
          let tmp7 = outer1_23;
          if (tmp6.type === outer1_23.MEMBER) {
            let members = self.members;
            let id = tmp6.user.id;
            delete tmp3[tmp2];
          }
          sum = sum + 1;
          if (sum > tmp5) {
            break;
          }
        }
      }
      self.version = self.version + 1;
    }
  };
  items[4] = {
    key: "insert",
    value(arg0, arg1) {
      let group;
      let member;
      const self = this;
      ({ group, member } = arg1);
      if (null != group) {
        const rows = self.rows;
        rows.splice(arg0, 0, outer1_28(self.guildId, group.id, group.count));
      } else if (null != member) {
        const tmp5 = outer1_29(self.guildId, self.ownerId, member.user.id);
        if (null != tmp5) {
          const rows1 = self.rows;
          rows1.splice(arg0, 0, tmp5);
          self.members[member.user.id] = tmp5;
        }
      }
      self.version = self.version + 1;
    }
  };
  items[5] = {
    key: "update",
    value(arg0, arg1) {
      let group;
      let member;
      const self = this;
      ({ group, member } = arg1);
      let tmp4 = null != tmp3;
      if (tmp4) {
        tmp4 = tmp3.type === outer1_23.MEMBER;
      }
      if (tmp4) {
        const members = self.members;
        const id = tmp3.user.id;
        delete tmp2[tmp];
      }
      if (null != group) {
        self.rows[arg0] = outer1_28(self.guildId, group.id, group.count);
      } else if (null != member) {
        const tmp7 = outer1_29(self.guildId, self.ownerId, member.user.id);
        if (null != tmp7) {
          self.rows[arg0] = tmp7;
          self.members[member.user.id] = tmp7;
        }
      }
      self.version = self.version + 1;
    }
  };
  items[6] = {
    key: "delete",
    value(arg0) {
      const self = this;
      if (null != this.rows[arg0]) {
        if (tmp3.type === outer1_23.MEMBER) {
          const members = self.members;
          const id = tmp3.user.id;
          delete tmp2[tmp];
        }
        const rows = self.rows;
        rows.splice(arg0, 1);
        self.version = self.version + 1;
      }
    }
  };
  items[7] = {
    key: "rebuildMember",
    value(arg0) {
      const self = this;
      if (null != this.members[arg0]) {
        const _Object = Object;
        const merged = Object.assign(tmp, outer1_29(self.guildId, self.ownerId, arg0));
        self.version = self.version + 1;
      }
    }
  };
  items[8] = {
    key: "rebuildMembers",
    value() {
      let length;
      const self = this;
      const keys = Object.keys(this.members);
      let num = 0;
      if (0 < keys.length) {
        do {
          let rebuildMemberResult = self.rebuildMember(keys[num]);
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
    }
  };
  items[9] = {
    key: "rebuildGroup",
    value(arg0) {
      const self = this;
      let closure_0 = arg0;
      let groups = this.groups;
      const findIndexResult = groups.findIndex((id) => id.id === closure_0);
      if (null != this.groups[findIndexResult]) {
        groups = self.groups;
        groups.splice(findIndexResult, 1, outer1_28(self.guildId, arg0, tmp2.count, tmp2.index));
        self.version = self.version + 1;
      }
    }
  };
  return callback2(MemberList, items);
})();
let tmp3 = (() => {
  class MemberLists {
    constructor() {
      tmp = outer1_7(this, MemberLists);
      this._guildLists = {};
      return;
    }
  }
  let obj = {
    key: "get",
    value(arg0, arg1) {
      let tmp = this._guildLists[arg0];
      if (null == tmp) {
        let obj = {};
        this._guildLists[arg0] = obj;
        tmp = obj;
      }
      let tmp2 = tmp[arg1];
      if (null == tmp2) {
        const prototype = outer1_24.prototype;
        const obj2 = new outer1_24(arg0, arg1);
        obj = { id: outer1_20.UNKNOWN, count: 0 };
        const items = [obj];
        obj2.setGroups(items);
        tmp[arg1] = obj2;
        tmp2 = obj2;
      }
      return tmp2;
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "forEach",
    value(arg0, arg1) {
      const self = this;
      let closure_0 = arg1;
      if (null == arg0) {
        let item = outer1_1(outer1_3[20]).forEach(self._guildLists, (arg0) => {
          const item = outer2_1(outer2_3[20]).forEach(arg0, closure_0);
        });
        const arr2 = outer1_1(outer1_3[20]);
      } else if (null != self._guildLists[arg0]) {
        const item1 = outer1_1(outer1_3[20]).forEach(tmp, arg1);
        const arr = outer1_1(outer1_3[20]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "delete",
    value(arg0) {
      delete tmp2[tmp];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "reset",
    value() {
      this._guildLists = {};
    }
  };
  return callback2(MemberLists, items);
})();
tmp3 = new tmp3();
let closure_25 = tmp3;
let closure_26 = [];
let tmp5 = ((Store) => {
  class ChannelMemberStore {
    constructor() {
      self = this;
      tmp = outer1_7(this, ChannelMemberStore);
      obj = outer1_5(ChannelMemberStore);
      tmp2 = outer1_4;
      if (outer1_27()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback(ChannelMemberStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_19, outer1_16, outer1_15, outer1_12, outer1_14, outer1_17, outer1_18, outer1_11, outer1_13, outer1_10, outer1_9);
      const items = [outer1_18];
      this.syncWith(items, outer1_32);
      const items1 = [outer1_10];
      this.syncWith(items1, outer1_31);
    }
  };
  let items = [obj, , ];
  obj = {
    key: "getProps",
    value(arg0, arg1) {
      const value = outer1_25.get(arg0, outer1_30(arg1));
      return { listId: "" + value.guildId + ":" + value.listId, groups: value.groups, rows: value.rows, version: value.version };
    }
  };
  items[1] = obj;
  obj = {
    key: "getRows",
    value(arg0, arg1) {
      return outer1_25.get(arg0, outer1_30(arg1)).rows;
    }
  };
  items[2] = obj;
  return callback2(ChannelMemberStore, items);
})(require("initialize").Store);
tmp5.displayName = "ChannelMemberStore";
obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMemberListUpdate(guildId) {
    const value = tmp3.get(guildId.guildId, guildId.id);
    const require = value;
    const ops = guildId.ops;
    const item = ops.forEach((op) => {
      op = op.op;
      if ("SYNC" === op) {
        value.sync(op.range, op.items);
      } else if ("INVALIDATE" === op) {
        value.invalidate(op.range);
      } else if ("INSERT" === op) {
        value.insert(op.index, op.item);
      } else if ("UPDATE" === op) {
        value.update(op.index, op.item);
      } else if ("DELETE" === op) {
        value.delete(op.index);
      }
    });
    value.setGroups(guildId.groups);
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    const item = tmp3.forEach(guild.guild.id, (updateOwnerId) => {
      if (updateOwnerId.updateOwnerId()) {
        updateOwnerId.rebuildMembers();
      }
    });
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    tmp3.delete(guild.guild.id);
  },
  GUILD_ROLE_UPDATE: function handleGuildRoleUpdate(role) {
    role = role.role;
    const item = tmp3.forEach(role.guildId, (rebuildGroup) => {
      rebuildGroup.rebuildGroup(role.id);
      rebuildGroup.rebuildMembers();
    });
  },
  GUILD_MEMBER_UPDATE: function handleMemberUpdate(user) {
    user = user.user;
    const item = tmp3.forEach(user.guildId, (rebuildMember) => rebuildMember.rebuildMember(user.id));
  },
  CHANNEL_UPDATES: function handleChannelUpdates() {
    return true;
  }
};
tmp5 = new tmp5(require("dispatcher"), obj);
let result = require("_inherits").fileFinishedImporting("stores/ChannelMemberStore.tsx");

export default tmp5;
export const EVERYONE_ID = "everyone";
export const EVERYONE_CHANNEL_ID = 0;
export const MemberListRowTypes = obj;
