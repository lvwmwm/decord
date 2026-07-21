// Module ID: 5654
// Function ID: 48424
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5654 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeGroup(guildId, key, count, index) {
  if (constants.ONLINE !== key) {
    if (constants.OFFLINE !== key) {
      if (constants.UNKNOWN !== key) {
        const guild = guild.getGuild(guildId);
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
      if (constants.ONLINE === arg1) {
        const intl3 = arg1(closure_3[17]).intl;
        return intl3.string(arg1(closure_3[17]).t.WbGtnH);
      } else if (constants.OFFLINE === tmp) {
        const intl2 = arg1(closure_3[17]).intl;
        return intl2.string(arg1(closure_3[17]).t.Vv0abJ);
      } else {
        const intl = arg1(closure_3[17]).intl;
        return intl.string(arg1(closure_3[17]).t.UQMV/E);
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
  const user = user.getUser(id);
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
  const channel = channel.getChannel(channelId);
  if (null == channel) {
    let memberListId = closure_22;
  } else if (null == channel.memberListId) {
    memberListId = function computeMemberListId(channel) {
      if (obj.canEveryone(constants.VIEW_CHANNEL, channel)) {
        return closure_22;
      } else {
        const obj2 = callback(closure_3[19]);
        const reduced = callback(closure_3[20])(channel.permissionOverwrites).reduce((arr, id) => {
          let allow;
          let deny;
          id = id.id;
          ({ allow, deny } = id);
          if (obj.has(allow, constants.VIEW_CHANNEL)) {
            const _HermesInternal2 = HermesInternal;
            arr.push("allow:" + id);
          } else {
            if (obj2.has(deny, constants.VIEW_CHANNEL)) {
              const _HermesInternal = HermesInternal;
              arr.push("deny:" + id);
            }
            const obj2 = callback(closure_3[21]);
          }
          return arr;
        }, []);
        const sorted = reduced.sort();
        const arr = callback(closure_3[20])(channel.permissionOverwrites);
        return obj2.v3(sorted.join(",")).toString();
      }
      const obj = callback2(closure_3[18]);
    }(channel);
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
  const combined = closure_26.concat(allApplicationStreams);
  closure_26 = allApplicationStreams;
  const item = combined.forEach((arg0) => {
    const item = closure_25.forEach(null, (rebuildMember) => rebuildMember.rebuildMember(rebuildMember.ownerId));
  });
}
function handleLocalPresenceUpdate() {
  const id = store.getId();
  const item = tmp3.forEach(null, (rebuildMember) => rebuildMember.rebuildMember(closure_0));
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
let closure_16 = importDefault(dependencyMap[12]);
let closure_17 = importDefault(dependencyMap[13]);
let closure_18 = importDefault(dependencyMap[14]);
let closure_19 = importDefault(dependencyMap[15]);
({ StatusTypes: closure_20, Permissions: closure_21 } = arg1(dependencyMap[16]));
let closure_22 = "everyone";
let obj = { GROUP: "GROUP", MEMBER: "MEMBER", CONTENT_INVENTORY: "CONTENT_INVENTORY", CONTENT_INVENTORY_GROUP: "CONTENT_INVENTORY_GROUP", HIDDEN_CONTENT_INVENTORY: "HIDDEN_CONTENT_INVENTORY", CONTENT_INVENTORY_LEADERBOARD: "CONTENT_INVENTORY_LEADERBOARD" };
let closure_24 = () => {
  class MemberList {
    constructor(arg0, arg1) {
      tmp = closure_7(this, MemberList);
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
  const arg1 = MemberList;
  let obj = {
    key: "updateOwnerId",
    value() {
      const self = this;
      const guild = guild.getGuild(this.guildId);
      if (null == guild) {
        return false;
      } else {
        const guildVisualOwnerId = callback(closure_3[18]).getGuildVisualOwnerId(guild);
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
      const MemberList = this;
      let closure_1 = 0;
      this.groups = arr.map((count) => {
        count = count.count;
        let num = 0;
        if (null != count) {
          num = count;
        }
        const bound = Math.max(0, num);
        closure_1 = closure_1 + (bound + 1);
        return callback(self.guildId, count.id, bound, closure_1);
      });
      this.rows.length = closure_1;
    }
  };
  items[1] = obj;
  obj = {
    key: "sync",
    value(arg0, arr) {
      const MemberList = this;
      const iter = arg0[Symbol.iterator]();
      let nextResult;
      if (iter !== undefined) {
        nextResult = iter.next();
      }
      if (iter !== undefined) {
        iter.return();
      }
      const item = arr.forEach((arg0, arg1) => self.update(nextResult + arg1, arg0));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "invalidate",
    value(arg0) {
      let sum;
      let tmp;
      let tmp2;
      const self = this;
      [tmp, tmp2] = arg0;
      if (sum <= tmp2) {
        while (null != self.rows[sum]) {
          let rows = self.rows;
          delete r7[r5];
          let tmp4 = constants;
          if (tmp3.type === constants.MEMBER) {
            let members = self.members;
            let id = tmp3.user.id;
            delete r7[r6];
          }
          sum = sum + 1;
          if (sum > tmp2) {
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
        rows.splice(arg0, 0, callback3(self.guildId, group.id, group.count));
      } else if (null != member) {
        const tmp5 = callback4(self.guildId, self.ownerId, member.user.id);
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
      const tmp = this.rows[arg0];
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = tmp.type === constants.MEMBER;
      }
      if (tmp2) {
        const members = self.members;
        const id = tmp.user.id;
        delete r6[r2];
      }
      if (null != group) {
        self.rows[arg0] = callback3(self.guildId, group.id, group.count);
      } else if (null != member) {
        const tmp5 = callback4(self.guildId, self.ownerId, member.user.id);
        if (null != tmp5) {
          self.rows[arg0] = tmp5;
          self.members[member.user.id] = tmp5;
        }
      }
      self.version = self.version + 1;
    }
  };
  items[6] = {
    key: "delete",
    value(arg0) {
      const self = this;
      const tmp = this.rows[arg0];
      if (null != tmp) {
        if (tmp.type === constants.MEMBER) {
          const members = self.members;
          const id = tmp.user.id;
          delete r2[r0];
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
      const tmp = this.members[arg0];
      if (null != tmp) {
        const _Object = Object;
        const merged = Object.assign(tmp, callback4(self.guildId, self.ownerId, arg0));
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
      const MemberList = arg0;
      let groups = this.groups;
      const findIndexResult = groups.findIndex((id) => id.id === id);
      const tmp2 = this.groups[findIndexResult];
      if (null != tmp2) {
        groups = self.groups;
        groups.splice(findIndexResult, 1, callback3(self.guildId, arg0, tmp2.count, tmp2.index));
        self.version = self.version + 1;
      }
    }
  };
  return callback2(MemberList, items);
}();
let tmp3 = () => {
  class MemberLists {
    constructor() {
      tmp = closure_7(this, MemberLists);
      this._guildLists = {};
      return;
    }
  }
  const arg1 = MemberLists;
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
        const prototype = ctor.prototype;
        const obj2 = new ctor(arg0, arg1);
        obj = { id: constants.UNKNOWN, count: 0 };
        const items = [obj];
        obj2.setGroups(items);
        tmp[arg1] = obj2;
        tmp2 = obj2;
      }
      return tmp2;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "forEach",
    value(arg0, arg1) {
      const self = this;
      const MemberLists = arg1;
      if (null == arg0) {
        const item = callback(closure_3[20]).forEach(self._guildLists, (arg0) => {
          const item = callback(closure_3[20]).forEach(arg0, arg1);
        });
        const arr2 = callback(closure_3[20]);
      } else if (null != self._guildLists[arg0]) {
        const item1 = callback(closure_3[20]).forEach(tmp, arg1);
        const arr = callback(closure_3[20]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "delete",
    value(arg0) {
      delete r1[r0];
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
}();
tmp3 = new tmp3();
let closure_26 = [];
let tmp5 = (Store) => {
  class ChannelMemberStore {
    constructor() {
      self = this;
      tmp = closure_7(this, ChannelMemberStore);
      obj = closure_5(ChannelMemberStore);
      tmp2 = closure_4;
      if (closure_27()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ChannelMemberStore;
  callback(ChannelMemberStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_19, closure_16, closure_15, closure_12, closure_14, closure_17, closure_18, closure_11, closure_13, closure_10, closure_9);
      const items = [closure_18];
      this.syncWith(items, closure_32);
      const items1 = [closure_10];
      this.syncWith(items1, closure_31);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getProps",
    value(arg0, arg1) {
      const value = store.get(arg0, callback4(arg1));
      return { listId: "" + value.guildId + ":" + value.listId, groups: value.groups, rows: value.rows, version: value.version };
    }
  };
  items[1] = obj;
  obj = {
    key: "getRows",
    value(arg0, arg1) {
      return store.get(arg0, callback4(arg1)).rows;
    }
  };
  items[2] = obj;
  return callback2(ChannelMemberStore, items);
}(importDefault(dependencyMap[22]).Store);
tmp5.displayName = "ChannelMemberStore";
obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMemberListUpdate(guildId) {
    const value = tmp3.get(guildId.guildId, guildId.id);
    const arg1 = value;
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
    const arg1 = role.role;
    const item = tmp3.forEach(role.guildId, (rebuildGroup) => {
      rebuildGroup.rebuildGroup(role.id);
      rebuildGroup.rebuildMembers();
    });
  },
  GUILD_MEMBER_UPDATE: function handleMemberUpdate(user) {
    const arg1 = user.user;
    const item = tmp3.forEach(user.guildId, (rebuildMember) => rebuildMember.rebuildMember(user.id));
  },
  CHANNEL_UPDATES: function handleChannelUpdates() {
    return true;
  }
};
tmp5 = new tmp5(importDefault(dependencyMap[23]), obj);
const tmp2 = arg1(dependencyMap[16]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("stores/ChannelMemberStore.tsx");

export default tmp5;
export const EVERYONE_ID = "everyone";
export const EVERYONE_CHANNEL_ID = 0;
export const MemberListRowTypes = obj;
