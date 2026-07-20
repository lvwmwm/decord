// Module ID: 7086
// Function ID: 56852
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7086 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
        let tmp6 = closure_18;
        let obj = closure_18[tmp4];
        if (!obj.updateUserId(arg0)) {
          continue;
        } else {
          flag = true;
          // continue
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
      let tmp8 = closure_18;
      if (closure_18[tmp4].guildId !== tmp2) {
        continue;
      } else {
        let tmp5 = closure_18;
        let obj = closure_18[tmp4];
        let rebuildResult = obj.rebuild();
        flag = true;
        // continue
      }
      continue;
    }
  }
  return flag2;
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
({ StatusTypes: closure_16, Permissions: closure_17 } = arg1(dependencyMap[12]));
let closure_18 = {};
let closure_19 = () => {
  class MemberList {
    constructor(arg0, arg1, arg2) {
      tmp = closure_8(this, MemberList);
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
  const arg1 = MemberList;
  let obj = {
    key: "rebuild",
    value(items) {
      const self = this;
      const MemberList = this;
      this.version = this.version + 1;
      this.sections = {};
      if (null != items) {
        const _Set = Set;
        const set = new Set(items);
        self.allUserIds = set;
      }
      const callback = store.getChannel(self.parentId);
      const tmp7 = callback(closure_3[13]);
      const mapped = callback(closure_3[13])(Array.from(self.allUserIds)).map((userId) => {
        const tmp = callback2(self.calculateNewState(userId, closure_1), 3);
        return { userId, sectionId: tmp[0], displayName: tmp[1], canViewChannel: tmp[2] };
      });
      const sorted = mapped.sort((userId, userId2) => callback(closure_3[14]).compare(userId.userId, userId2.userId));
      const tmp7Result = callback(closure_3[13])(Array.from(self.allUserIds));
      const item = sorted.sortBy((displayName) => displayName.displayName).forEach((userId) => {
        self.addUser(userId.userId, userId.sectionId, userId.displayName, userId.canViewChannel, true);
      });
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "updateMultipleUserIds",
    value(arr) {
      const self = this;
      const MemberList = this;
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
        const tmp2 = callback3(self.findOldState(userId), 3);
        const first = tmp2[0];
        [tmp6, tmp7, tmp8] = callback3(self.calculateNewState(userId, store.getChannel(self.parentId)), 3);
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
      const tmp = callback3(this.calculateNewState(userId, store.getChannel(this.parentId)), 3);
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
      const user = authStore.getUser(userId);
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
      const MemberList = arg0;
      const tmp = this.sections[arg1];
      let tmp2 = null != arg1;
      if (tmp2) {
        let flag = arg0 in tmp.usersById;
        if (flag) {
          const usersById = tmp.usersById;
          delete r5[r6];
          const userIds = tmp.userIds;
          tmp.userIds = userIds.filter((arg0) => arg0 !== arg0);
          self.version = self.version + 1;
          flag = true;
        }
        tmp2 = flag;
      }
      return tmp2;
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
      const member = member.getMember(this.guildId, id);
      const user = authStore.getUser(id);
      const currentUser = authStore.getCurrentUser();
      id = undefined;
      if (null != user) {
        id = user.id;
      }
      let id1;
      if (null != currentUser) {
        id1 = currentUser.id;
      }
      if (id === id1) {
        let status = status2.getStatus();
      } else {
        status = status.getStatus(id, this.guildId);
      }
      let canResult = null != user && null != context;
      if (canResult) {
        let obj = callback2(closure_3[15]);
        obj = { permission: constants2.VIEW_CHANNEL, user, context };
        canResult = obj.can(obj);
      }
      let str = "offline";
      if (status !== constants.OFFLINE) {
        str = "offline";
        if (status !== constants.INVISIBLE) {
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
        nick = callback(closure_3[16]).getName(user);
        const obj3 = callback(closure_3[16]);
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
}();
let tmp3 = (Store) => {
  class ThreadMemberListStore {
    constructor() {
      self = this;
      tmp = closure_8(this, ThreadMemberListStore);
      obj = closure_5(ThreadMemberListStore);
      tmp2 = closure_4;
      if (closure_20()) {
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
  const arg1 = ThreadMemberListStore;
  callback(ThreadMemberListStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10, closure_11, closure_12, closure_13, closure_14, closure_15);
      const items = [closure_12];
      this.syncWith(items, () => {
        const subscribedThreadIds = subscribedThreadIds.getSubscribedThreadIds();
        let flag = false;
        let flag2 = false;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag2 = flag;
          while (keys[tmp] !== undefined) {
            let tmp5 = tmp3;
            if (subscribedThreadIds.has(tmp3)) {
              continue;
            } else {
              let tmp4 = closure_18;
              delete r10[r11];
              flag = true;
              // continue
            }
            continue;
          }
        }
        return flag2;
      });
      const items1 = [closure_14];
      this.syncWith(items1, () => {
        const currentUser = currentUser.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        return closure_23(id);
      });
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getMemberListVersion",
    value(arg0) {
      let version;
      if (null != closure_18[arg0]) {
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
      if (null != closure_18[arg0]) {
        sections = tmp.sections;
      }
      return sections;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "canUserViewChannel",
    value(arg0, arg1, arg2) {
      if (null == closure_18[arg0]) {
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
}(importDefault(dependencyMap[18]).Store);
tmp3.displayName = "ThreadMemberListStore";
tmp3 = new tmp3(importDefault(dependencyMap[19]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_18 = {};
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(id) {
    const arg1 = id;
    if (id.id in closure_18) {
      const addedMembers = id.addedMembers;
      if (null != addedMembers) {
        const item = addedMembers.forEach((userId) => closure_18[closure_0.id].addUserId(userId.userId));
      }
      const removedMemberIds = id.removedMemberIds;
      if (null != removedMemberIds) {
        const item1 = removedMemberIds.forEach((arg0) => closure_18[closure_0.id].removeUserId(arg0));
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
        delete r2[r1];
      }
    }
    return false;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (channel.id in closure_18) {
      const id = channel.id;
      delete r1[r0];
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
        let tmp7 = closure_18;
        if (!set.has(closure_18[tmp3].parentId)) {
          continue;
        } else {
          let tmp4 = closure_18;
          let obj2 = closure_18[tmp3];
          let rebuildResult = obj2.rebuild();
          flag = true;
          // continue
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
    const channel = channel.getChannel(threadId);
    let parent_id;
    if (null != channel) {
      parent_id = channel.parent_id;
    }
    if (null != parent_id) {
      const prototype = ctor.prototype;
      const tmp10 = new ctor(guildId, parent_id, threadId);
      closure_18[threadId] = tmp10;
      closure_18[threadId].rebuild(members.map((user_id) => user_id.user_id));
      const obj = closure_18[threadId];
    }
  },
  USER_UPDATE: handleUserUpdate,
  PRESENCE_UPDATES: function handleUserUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((user) => callback(user.user.id));
    return mapped.some((arg0) => arg0);
  },
  GUILD_MEMBER_ADD: handleUserUpdate,
  GUILD_MEMBER_UPDATE: handleUserUpdate,
  GUILD_MEMBER_REMOVE: handleUserUpdate,
  PRESENCES_REPLACE: function handlePresenceReplace(presences) {
    const mapped = importDefault(dependencyMap[13])(presences.presences).map((user) => {
      user = user.user;
      let id;
      if (null != user) {
        id = user.id;
      }
      return id;
    });
    const found = mapped.filter(arg1(dependencyMap[17]).isNotNullish);
    const arr = importDefault(dependencyMap[13])(presences.presences);
    const tmp = dependencyMap;
    let flag = false;
    let flag2 = false;
    const iter = found.uniq();
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp5 = tmp4;
        let tmp6 = closure_18;
        let obj2 = closure_18[tmp4];
        if (!obj2.updateMultipleUserIds(valueResult)) {
          continue;
        } else {
          flag = true;
          // continue
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
        let tmp4 = closure_18;
        let flag3 = flag;
        let tmp5 = flag;
        let mapped = members.map((user) => user.user.id);
        let keys = Object.keys();
        if (keys !== undefined) {
          tmp5 = flag3;
          let tmp7 = keys[tmp];
          while (tmp7 !== undefined) {
            let tmp8 = tmp7;
            let tmp9 = closure_18;
            let obj = closure_18[tmp7];
            if (!obj.updateMultipleUserIds(mapped, guildId)) {
              continue;
            } else {
              flag3 = true;
              // continue
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
    return members.reduce((arg0, user) => callback(user.user.id) || arg0, false);
  }
});
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_18 = {};
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(id) {
    const arg1 = id;
    if (id.id in closure_18) {
      const addedMembers = id.addedMembers;
      if (null != addedMembers) {
        const item = addedMembers.forEach((userId) => closure_18[closure_0.id].addUserId(userId.userId));
      }
      const removedMemberIds = id.removedMemberIds;
      if (null != removedMemberIds) {
        const item1 = removedMemberIds.forEach((arg0) => closure_18[closure_0.id].removeUserId(arg0));
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
        delete r2[r1];
      }
    }
    return false;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (channel.id in closure_18) {
      const id = channel.id;
      delete r1[r0];
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
        let tmp7 = closure_18;
        if (!set.has(closure_18[tmp3].parentId)) {
          continue;
        } else {
          let tmp4 = closure_18;
          let obj2 = closure_18[tmp3];
          let rebuildResult = obj2.rebuild();
          flag = true;
          // continue
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
    const channel = channel.getChannel(threadId);
    let parent_id;
    if (null != channel) {
      parent_id = channel.parent_id;
    }
    if (null != parent_id) {
      const prototype = ctor.prototype;
      const tmp10 = new ctor(guildId, parent_id, threadId);
      closure_18[threadId] = tmp10;
      closure_18[threadId].rebuild(members.map((user_id) => user_id.user_id));
      const obj = closure_18[threadId];
    }
  },
  USER_UPDATE: handleUserUpdate,
  PRESENCE_UPDATES: function handleUserUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((user) => callback(user.user.id));
    return mapped.some((arg0) => arg0);
  },
  GUILD_MEMBER_ADD: handleUserUpdate,
  GUILD_MEMBER_UPDATE: handleUserUpdate,
  GUILD_MEMBER_REMOVE: handleUserUpdate,
  PRESENCES_REPLACE: function handlePresenceReplace(presences) {
    const mapped = importDefault(dependencyMap[13])(presences.presences).map((user) => {
      user = user.user;
      let id;
      if (null != user) {
        id = user.id;
      }
      return id;
    });
    const found = mapped.filter(arg1(dependencyMap[17]).isNotNullish);
    const arr = importDefault(dependencyMap[13])(presences.presences);
    const tmp = dependencyMap;
    let flag = false;
    let flag2 = false;
    const iter = found.uniq();
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp5 = tmp4;
        let tmp6 = closure_18;
        let obj2 = closure_18[tmp4];
        if (!obj2.updateMultipleUserIds(valueResult)) {
          continue;
        } else {
          flag = true;
          // continue
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
        let tmp4 = closure_18;
        let flag3 = flag;
        let tmp5 = flag;
        let mapped = members.map((user) => user.user.id);
        let keys = Object.keys();
        if (keys !== undefined) {
          tmp5 = flag3;
          let tmp7 = keys[tmp];
          while (tmp7 !== undefined) {
            let tmp8 = tmp7;
            let tmp9 = closure_18;
            let obj = closure_18[tmp7];
            if (!obj.updateMultipleUserIds(mapped, guildId)) {
              continue;
            } else {
              flag3 = true;
              // continue
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
    return members.reduce((arg0, user) => callback(user.user.id) || arg0, false);
  }
};
const tmp2 = arg1(dependencyMap[12]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/threads/ThreadMemberListStore.tsx");

export default tmp3;
