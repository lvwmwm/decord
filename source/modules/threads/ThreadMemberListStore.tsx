// Module ID: 7096
// Function ID: 56920
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 57, 6, 7, 1348, 1917, 5657, 4217, 4810, 1849, 653, 22, 21, 3763, 3969, 1327, 566, 686, 2]

// Module 7096 (_isNativeReflectConstruct)
import calculateElevatedPermissions from "calculateElevatedPermissions";
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_16;
let closure_17;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function handleUserUpdate(user) {
  return updateUserId(user.user.id);
}
function updateUserId(arg0) {
  if (null == arg0) {
    return false;
  } else {
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp5 = tmp4;
        let tmp6 = dependencyMap;
        let obj = dependencyMap[tmp4];
        if (!obj.updateUserId(arg0)) {
          continue;
        } else {
          flag = true;
          continue;
        }
        continue;
      }
    }
    return flag2;
  }
}
function handleGuildRoleUpdateOrDelete(arg0) {
  let flag = false;
  let flag2 = false;
  const keys = Object.keys();
  if (keys !== undefined) {
    flag2 = flag;
    while (keys[tmp] !== undefined) {
      let tmp7 = tmp4;
      let tmp8 = dependencyMap;
      if (dependencyMap[tmp4].guildId !== tmp2) {
        continue;
      } else {
        let tmp5 = dependencyMap;
        let obj = dependencyMap[tmp4];
        let rebuildResult = obj.rebuild();
        flag = true;
        continue;
      }
      continue;
    }
  }
  return flag2;
}
({ StatusTypes: closure_16, Permissions: closure_17 } = ME);
let closure_18 = {};
let closure_19 = (() => {
  class MemberList {
    constructor(arg0, arg1, arg2) {
      tmp = outer1_8(this, MemberList);
      this.guildId = arg0;
      this.parentId = arg1;
      this.threadId = arg2;
      this.version = 0;
      this.sections = {};
      set = new Set();
      this.allUserIds = set;
      return;
    }
  }
  let obj = {
    key: "rebuild",
    value(items) {
      let self = this;
      self = this;
      this.version = this.version + 1;
      this.sections = {};
      if (null != items) {
        const _Set = Set;
        const set = new Set(items);
        self.allUserIds = set;
      }
      const channel = outer1_10.getChannel(self.parentId);
      const tmp7 = outer1_1(outer1_3[13]);
      const mapped = outer1_1(outer1_3[13])(Array.from(self.allUserIds)).map((userId) => {
        const tmp = outer2_7(self.calculateNewState(userId, closure_1), 3);
        return { userId, sectionId: tmp[0], displayName: tmp[1], canViewChannel: tmp[2] };
      });
      const sorted = mapped.sort((userId, userId2) => outer2_1(outer2_3[14]).compare(userId.userId, userId2.userId));
      const tmp7Result = outer1_1(outer1_3[13])(Array.from(self.allUserIds));
      const item = sorted.sortBy((displayName) => displayName.displayName).forEach((userId) => {
        self.addUser(userId.userId, userId.sectionId, userId.displayName, userId.canViewChannel, true);
      });
    }
  };
  let items = [obj, , , , , , , , , ];
  obj = {
    key: "updateMultipleUserIds",
    value(arr) {
      let self = this;
      self = this;
      if (!(null == arg1 || self.guildId === arg1)) {
        return tmp;
      } else {
        const found = arr.filter((arg0) => {
          const allUserIds = self.allUserIds;
          return allUserIds.has(arg0);
        });
        let flag = 0 !== found.length;
        if (flag) {
          if (found.length <= 50) {
            const item = found.forEach((arg0) => self.updateUserId(arg0));
            flag = true;
          }
        }
        self.rebuild();
        flag = true;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "updateUserId",
    value(userId) {
      let tmp6;
      let tmp7;
      let tmp8;
      const self = this;
      const allUserIds = this.allUserIds;
      if (allUserIds.has(userId)) {
        const tmp2 = outer1_7(self.findOldState(userId), 3);
        const first = tmp2[0];
        [tmp6, tmp7, tmp8] = outer1_7(self.calculateNewState(userId, outer1_10.getChannel(self.parentId)), 3);
        let flag2 = first !== tmp6 || tmp2[1] !== tmp7 || tmp2[2] !== tmp8;
        if (flag2) {
          self.removeUserId(userId, first);
          self.addUser(userId, tmp6, tmp7, tmp8);
          flag2 = true;
        }
        return flag2;
      } else {
        return false;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "addUserId",
    value(userId) {
      const tmp = outer1_7(this.calculateNewState(userId, outer1_10.getChannel(this.parentId)), 3);
      this.addUser(userId, tmp[0], tmp[1], tmp[2]);
    }
  };
  items[4] = {
    key: "removeUserId",
    value(arg0, arg1) {
      const self = this;
      const allUserIds = this.allUserIds;
      allUserIds.delete(arg0);
      if (null != arg1) {
        if (self.removeUserIdFromSection(arg0, arg1)) {
          return true;
        }
      }
      for (const key10011 in self.sections) {
        let tmp2 = key10011;
        if (!self.removeUserIdFromSection(arg0, key10011)) {
          continue;
        } else {
          let flag = true;
          return true;
        }
      }
      return false;
    }
  };
  items[5] = {
    key: "addUser",
    value(userId, sectionId, displayName, canViewChannel) {
      const self = this;
      const allUserIds = this.allUserIds;
      allUserIds.add(userId);
      const user = outer1_15.getUser(userId);
      if (null != user) {
        if ("" !== user.username) {
          if (!(sectionId in self.sections)) {
            let obj = { sectionId, usersById: {}, userIds: [] };
            self.sections[sectionId] = obj;
          }
          let sum = self.sections[sectionId];
          obj = { userId, displayName, canViewChannel };
          sum.usersById[userId] = obj;
          if (arg4) {
            const userIds = sum.userIds;
            userIds.push(userId);
          } else {
            const userIds1 = sum.userIds;
            userIds1.splice(self.findUserIdSortedPosition(sum, userId, displayName), 0, userId);
          }
          sum = self.version + 1;
          self.version = sum;
        }
      }
    }
  };
  items[6] = {
    key: "findUserIdSortedPosition",
    value(userIds) {
      userIds = userIds.userIds;
      let num = 0;
      if (0 < userIds.length) {
        while (true) {
          let tmp2 = userIds[num];
          let displayName = tmp[tmp2].displayName;
          let tmp3 = num;
          if (displayName === arg2) {
            if (arg1 < tmp2) {
              return num;
            }
          } else if (null == displayName) {
            if (null != arg2) {
              return num;
            }
          } else if (null != arg2) {
            if (arg2 < displayName) {
              break;
            }
          }
          num = num + 1;
        }
        return num;
      }
      return userIds.length;
    }
  };
  items[7] = {
    key: "removeUserIdFromSection",
    value(arg0, arg1) {
      const self = this;
      let closure_0 = arg0;
      let tmp4 = null != arg1;
      if (tmp4) {
        let flag = arg0 in tmp3.usersById;
        if (flag) {
          const usersById = tmp3.usersById;
          delete tmp[tmp2];
          const userIds = tmp3.userIds;
          tmp3.userIds = userIds.filter((arg0) => arg0 !== closure_0);
          self.version = self.version + 1;
          flag = true;
        }
        tmp4 = flag;
      }
      return tmp4;
    }
  };
  items[8] = {
    key: "findOldState",
    value(arg0) {
      for (const key10004 in this.sections) {
        let tmp2 = key10004;
        let tmp3 = tmp.sections[key10004];
        if (!(arg0 in tmp3.usersById)) {
          continue;
        } else {
          let items = [key10004, , ];
          ({ displayName: arr[1], canViewChannel: arr[2] } = tmp3.usersById[arg0]);
          return items;
        }
      }
      const items1 = [undefined, undefined, false];
      return items1;
    }
  };
  items[9] = {
    key: "calculateNewState",
    value(id, context) {
      const member = outer1_11.getMember(this.guildId, id);
      const user = outer1_15.getUser(id);
      const currentUser = outer1_15.getCurrentUser();
      id = undefined;
      if (null != user) {
        id = user.id;
      }
      let id1;
      if (null != currentUser) {
        id1 = currentUser.id;
      }
      if (id === id1) {
        let status = outer1_14.getStatus();
      } else {
        status = outer1_13.getStatus(id, this.guildId);
      }
      let canResult = null != user && null != context;
      if (canResult) {
        let obj = outer1_2(outer1_3[15]);
        obj = { permission: outer1_17.VIEW_CHANNEL, user, context };
        canResult = obj.can(obj);
      }
      let str = "offline";
      if (status !== outer1_16.OFFLINE) {
        str = "offline";
        if (status !== outer1_16.INVISIBLE) {
          let hoistRoleId;
          if (null != member) {
            hoistRoleId = member.hoistRoleId;
          }
          let str2 = "online";
          if (null != hoistRoleId) {
            str2 = hoistRoleId;
          }
          str = str2;
        }
      }
      let nick;
      if (null != member) {
        nick = member.nick;
      }
      if (null == nick) {
        nick = outer1_1(outer1_3[16]).getName(user);
        const obj3 = outer1_1(outer1_3[16]);
      }
      const items = [str, , ];
      let formatted;
      if (null != nick) {
        formatted = nick.toLowerCase();
      }
      items[1] = formatted;
      items[2] = canResult;
      return items;
    }
  };
  return callback2(MemberList, items);
})();
let tmp3 = ((Store) => {
  class ThreadMemberListStore {
    constructor() {
      self = this;
      tmp = outer1_8(this, ThreadMemberListStore);
      obj = outer1_5(ThreadMemberListStore);
      tmp2 = outer1_4;
      if (outer1_20()) {
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
  callback(ThreadMemberListStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10, outer1_11, outer1_12, outer1_13, outer1_14, outer1_15);
      const items = [outer1_12];
      this.syncWith(items, () => {
        const subscribedThreadIds = outer2_12.getSubscribedThreadIds();
        let flag = false;
        let flag2 = false;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag2 = flag;
          while (keys[tmp] !== undefined) {
            let tmp7 = tmp5;
            if (subscribedThreadIds.has(tmp5)) {
              continue;
            } else {
              let tmp6 = outer2_18;
              delete tmp2[tmp3];
              flag = true;
              continue;
            }
            continue;
          }
        }
        return flag2;
      });
      const items1 = [outer1_14];
      this.syncWith(items1, () => {
        const currentUser = outer2_15.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        return outer2_23(id);
      });
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "getMemberListVersion",
    value(arg0) {
      let version;
      if (null != outer1_18[arg0]) {
        version = tmp.version;
      }
      return version;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMemberListSections",
    value(arg0) {
      let sections;
      if (null != outer1_18[arg0]) {
        sections = tmp.sections;
      }
      return sections;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "canUserViewChannel",
    value(arg0, arg1, arg2) {
      if (null == outer1_18[arg0]) {
        return false;
      } else {
        let tmp4;
        if (null != tmp.sections[arg1]) {
          tmp4 = tmp3.usersById[arg2];
        }
        let canViewChannel;
        if (null != tmp4) {
          canViewChannel = tmp4.canViewChannel;
        }
        return null != canViewChannel && canViewChannel;
      }
    }
  };
  return callback2(ThreadMemberListStore, items);
})(require("initialize").Store);
tmp3.displayName = "ThreadMemberListStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_18 = {};
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(id) {
    let closure_0 = id;
    if (id.id in closure_18) {
      const addedMembers = id.addedMembers;
      if (null != addedMembers) {
        const item = addedMembers.forEach((userId) => outer1_18[user.id].addUserId(userId.userId));
      }
      const removedMemberIds = id.removedMemberIds;
      if (null != removedMemberIds) {
        const item1 = removedMemberIds.forEach((arg0) => outer1_18[user.id].removeUserId(arg0));
      }
    } else {
      return false;
    }
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    if (channel.id in closure_18) {
      const threadMetadata = channel.threadMetadata;
      let archived;
      if (null != threadMetadata) {
        archived = threadMetadata.archived;
      }
      if (true === archived) {
        const id = channel.id;
        delete tmp2[tmp];
      }
    }
    return false;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (channel.id in closure_18) {
      const id = channel.id;
      delete tmp2[tmp];
    } else {
      return false;
    }
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp6 = tmp3;
        let tmp7 = dependencyMap;
        if (!set.has(dependencyMap[tmp3].parentId)) {
          continue;
        } else {
          let tmp4 = dependencyMap;
          let obj2 = dependencyMap[tmp3];
          let rebuildResult = obj2.rebuild();
          flag = true;
          continue;
        }
        continue;
      }
    }
    return flag2;
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(arg0) {
    let guildId;
    let members;
    let threadId;
    ({ threadId, guildId, members } = arg0);
    channel = channel.getChannel(threadId);
    let parent_id;
    if (null != channel) {
      parent_id = channel.parent_id;
    }
    if (null != parent_id) {
      const prototype = ctor.prototype;
      const tmp10 = new ctor(guildId, parent_id, threadId);
      dependencyMap[threadId] = tmp10;
      dependencyMap[threadId].rebuild(members.map((user_id) => user_id.user_id));
      const obj = dependencyMap[threadId];
    }
  },
  USER_UPDATE: handleUserUpdate,
  PRESENCE_UPDATES: function handleUserUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((user) => outer1_23(user.user.id));
    return mapped.some((arg0) => arg0);
  },
  GUILD_MEMBER_ADD: handleUserUpdate,
  GUILD_MEMBER_UPDATE: handleUserUpdate,
  GUILD_MEMBER_REMOVE: handleUserUpdate,
  PRESENCES_REPLACE: function handlePresenceReplace(presences) {
    const mapped = importDefault(22)(presences.presences).map((user) => {
      user = user.user;
      let id;
      if (null != user) {
        id = user.id;
      }
      return id;
    });
    const found = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
    const arr = importDefault(22)(presences.presences);
    const tmp = dependencyMap;
    let flag = false;
    let flag2 = false;
    const iter = found.uniq();
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp5 = tmp4;
        let tmp6 = dependencyMap;
        let obj2 = dependencyMap[tmp4];
        if (!obj2.updateMultipleUserIds(valueResult)) {
          continue;
        } else {
          flag = true;
          continue;
        }
        continue;
      }
    }
    return flag2;
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(chunks) {
    let guildId;
    let iter3;
    let members;
    const tmp2 = _createForOfIteratorHelperLoose(chunks.chunks);
    const iter = tmp2();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        ({ members, guildId } = iter2.value);
        let tmp4 = dependencyMap;
        let flag3 = flag;
        let tmp5 = flag;
        let mapped = members.map((user) => user.user.id);
        let keys = Object.keys();
        if (keys !== undefined) {
          tmp5 = flag3;
          let tmp7 = keys[tmp];
          while (tmp7 !== undefined) {
            let tmp8 = tmp7;
            let tmp9 = dependencyMap;
            let obj = dependencyMap[tmp7];
            if (!obj.updateMultipleUserIds(mapped, guildId)) {
              continue;
            } else {
              flag3 = true;
              continue;
            }
            continue;
          }
        }
        iter3 = tmp2();
        flag = tmp5;
        iter2 = iter3;
        flag2 = tmp5;
      } while (!iter3.done);
    }
    return flag2;
  },
  GUILD_ROLE_UPDATE: handleGuildRoleUpdateOrDelete,
  GUILD_ROLE_DELETE: handleGuildRoleUpdateOrDelete,
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(members) {
    members = members.members;
    return members.reduce((arg0, user) => outer1_23(user.user.id) || arg0, false);
  }
});
let result = require("_inherits").fileFinishedImporting("modules/threads/ThreadMemberListStore.tsx");

export default tmp3;
