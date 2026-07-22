// Module ID: 4943
// Function ID: 42381
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4943 (_isNativeReflectConstruct)
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
function recomputeGuild(guildId) {
  let iter2;
  const arg1 = guildId;
  clearGuild(guildId);
  set.add(guildId);
  const guild = guild.getGuild(guildId);
  const currentUser = authStore.getCurrentUser();
  let tmp4 = null != guild;
  if (tmp4) {
    tmp4 = guild.verificationLevel !== constants.NONE;
  }
  if (null != guild) {
    if (null != currentUser) {
      if (tmp4) {
        if (!isGuildOwner(guild, currentUser)) {
          const member = member.getMember(guild.id, currentUser.id);
          if (null == member) {
            let tmp13 = tmp6;
            if (tmp6) {
              tmp13 = null != member;
            }
            let flag = false;
            if (tmp13) {
              const roles = member.roles;
              tmp13 = !roles.includes(guild.verificationRoleId);
              flag = tmp13;
            }
            let role;
            if (tmp13) {
              role = role.getRole(guild.id, guild.verificationRoleId);
            }
            let flag2 = false;
            let flag3 = false;
            let flag4 = false;
            let flag5 = false;
            let flag6 = false;
            let num4 = 0;
            let num5 = 0;
            if (tmp4) {
              flag2 = false;
              flag3 = false;
              flag4 = false;
              flag5 = false;
              flag6 = false;
              num4 = 0;
              num5 = 0;
              if (!currentUser.isPhoneVerified()) {
                let flag7 = false;
                if (null != member) {
                  const _Set = Set;
                  const set = new Set();
                  const tmp21 = _createForOfIteratorHelperLoose(member.roles);
                  let iter = tmp21();
                  if (!iter.done) {
                    do {
                      let value = iter.value;
                      let tmp22 = closure_10;
                      let role1 = closure_10.getRole(guild.id, value);
                      let tmp24 = null == role1 || role1.managed;
                      if (!tmp24) {
                        let addResult1 = set.add(value);
                      }
                      iter2 = tmp21();
                      iter = iter2;
                    } while (!iter2.done);
                  }
                  const _Date = Date;
                  const date = new Date("2022-12-02 00:00:00");
                  let tmp30 = null == member.joinedAt;
                  if (!tmp30) {
                    const _Date2 = Date;
                    const date1 = new Date(member.joinedAt);
                    tmp30 = date1 < date;
                  }
                  const features = guild.features;
                  let tmp37 = !tmp6;
                  if (!tmp6) {
                    tmp37 = !tmp36;
                  }
                  if (tmp37) {
                    tmp37 = set.size > 0;
                  }
                  flag7 = false;
                  if (tmp37) {
                    flag7 = true;
                  }
                  const tmp36 = features.has(constants3.GUILD_ONBOARDING_EVER_ENABLED) && !tmp30;
                }
                flag2 = false;
                flag3 = false;
                flag4 = false;
                flag5 = false;
                flag6 = false;
                num4 = 0;
                num5 = 0;
                if (!flag7) {
                  const _Date3 = Date;
                  const result = 60000 * constants2.ACCOUNT_AGE;
                  const diff = +currentUser.createdAt + result - Date.now();
                  const _Date4 = Date;
                  const result1 = 60000 * constants2.MEMBER_AGE;
                  const diff1 = +guild.joinedAt + result1 - Date.now();
                  let flag8 = false;
                  let flag9 = false;
                  let flag10 = false;
                  let flag11 = false;
                  if (!currentUser.isStaff()) {
                    let tmp54 = guild.verificationLevel >= constants.MEDIUM;
                    if (tmp54) {
                      tmp54 = diff > 0;
                    }
                    flag11 = guild.verificationLevel >= constants.HIGH && diff1 > 0;
                    flag8 = guild.verificationLevel >= constants.LOW && !currentUser.verified;
                    flag9 = guild.verificationLevel >= constants.VERY_HIGH;
                    flag10 = tmp54;
                    const tmp50 = guild.verificationLevel >= constants.LOW && !currentUser.verified;
                    const tmp52 = guild.verificationLevel >= constants.VERY_HIGH;
                    const tmp56 = guild.verificationLevel >= constants.HIGH && diff1 > 0;
                  }
                  flag3 = flag8;
                  flag4 = flag9;
                  flag5 = flag10;
                  flag6 = flag11;
                  flag2 = guild.verificationLevel >= constants.LOW && !currentUser.isClaimed();
                  num4 = diff;
                  num5 = diff1;
                  const tmp38 = +currentUser.createdAt;
                  const tmp43 = +guild.joinedAt;
                  const tmp48 = guild.verificationLevel >= constants.LOW && !currentUser.isClaimed();
                }
              }
            }
            const items = [];
            if (flag6) {
              items.push(num5);
            }
            if (flag5) {
              items.push(num4);
            }
            let timerId;
            if (items.length > 0) {
              const _setTimeout = setTimeout;
              const _Math = Math;
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              const _Math2 = Math;
              timerId = setTimeout(() => {
                let obj = callback(closure_2[13]);
                obj = { type: "GUILD_VERIFICATION_CHECK", guildId: arg0 };
                return obj.dispatch(obj);
              }, HermesBuiltin.apply(items1, Math));
            }
            const obj = { notClaimed: flag2, notEmailVerified: flag3, notPhoneVerified: flag4, newAccount: flag5, newMember: flag6, missingVerificationRole: flag, verificationRole: role };
            if (!flag2) {
              flag2 = flag3;
            }
            if (!flag2) {
              flag2 = flag4;
            }
            if (!flag2) {
              flag2 = flag5;
            }
            if (!flag2) {
              flag2 = flag6;
            }
            if (!flag2) {
              flag2 = flag;
            }
            obj.canChat = !flag2;
            const _Date5 = Date;
            const _Date6 = Date;
            const date2 = new Date(Date.now() + num4);
            obj.accountDeadline = date2;
            const _Date7 = Date;
            const _Date8 = Date;
            const date3 = new Date(Date.now() + num5);
            obj.memberDeadline = date3;
            obj.timeoutRef = timerId;
            closure_19[guildId] = obj;
            const tmp66 = closure_19;
          } else {
            const flags = member.flags;
            let num2 = 0;
            if (null != flags) {
              num2 = flags;
            }
            const obj2 = arg1(dependencyMap[12]);
          }
        }
      }
    }
  }
}
function clearGuild(id) {
  if (null != closure_19[id]) {
    const _clearTimeout = clearTimeout;
    clearTimeout(tmp.timeoutRef);
  }
  delete r0[r1];
}
function handleCreateOrUpdateGuild(guild) {
  set.delete(guild.guild.id);
  recomputeGuild(guild.guild.id);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const isGuildOwner = arg1(dependencyMap[5]).isGuildOwner;
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
({ VerificationLevels: closure_13, VerificationCriteria: closure_14, GuildFeatures: closure_15 } = arg1(dependencyMap[10]));
const GuildMemberFlags = arg1(dependencyMap[11]).GuildMemberFlags;
let closure_17 = { lineClamp: "06ce787c33fd0c9cd370f243d3462ef5", allowFontScaling: "lt.messages.06ce787c33fd0c9cd370f243d3462ef5.compiled.messages", variant: "jsona", color: true, ellipsizeMode: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-1000k", lineClamp: true, variant: "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi" };
const set = new Set();
let closure_19 = {};
let tmp4 = (Store) => {
  class GuildVerificationStore {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildVerificationStore);
      obj = closure_6(GuildVerificationStore);
      tmp2 = closure_5;
      if (closure_20()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildVerificationStore;
  callback2(GuildVerificationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_10, closure_11, closure_12);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getCheck",
    value(arg0) {
      if (null == arg0) {
        let tmp5 = closure_17;
      } else {
        if (!set.has(arg0)) {
          callback4(arg0);
        }
        tmp5 = closure_19[arg0];
        if (null == tmp5) {
          tmp5 = closure_17;
        }
      }
      return tmp5;
    }
  };
  items[1] = obj;
  obj = {
    key: "canChatInGuild",
    value(arg0) {
      return this.getCheck(arg0).canChat;
    }
  };
  items[2] = obj;
  return callback(GuildVerificationStore, items);
}(importDefault(dependencyMap[15]).Store);
tmp4.displayName = "GuildVerificationStore";
tmp4 = new tmp4(importDefault(dependencyMap[13]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    for (const key10006 in closure_19) {
      let tmp2 = key10006;
      let tmp3 = closure_24;
      let tmp4 = closure_24(key10006);
    }
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    const keys = importDefault(dependencyMap[14]).keys(closure_19);
    const item = keys.forEach(clearGuild);
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    set.clear();
  },
  GUILD_CREATE: handleCreateOrUpdateGuild,
  GUILD_UPDATE: handleCreateOrUpdateGuild,
  GUILD_DELETE: function handleDeleteGuild(guild) {
    clearGuild(guild.guild.id);
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (guildId.user.id !== id) {
      return false;
    } else {
      set.delete(guildId);
      recomputeGuild(guildId);
    }
  },
  GUILD_VERIFICATION_CHECK: function handleGuildVerificationCheck(guildId) {
    recomputeGuild(guildId.guildId);
  }
});
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    for (const key10006 in closure_19) {
      let tmp2 = key10006;
      let tmp3 = closure_24;
      let tmp4 = closure_24(key10006);
    }
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    const keys = importDefault(dependencyMap[14]).keys(closure_19);
    const item = keys.forEach(clearGuild);
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    set.clear();
  },
  GUILD_CREATE: handleCreateOrUpdateGuild,
  GUILD_UPDATE: handleCreateOrUpdateGuild,
  GUILD_DELETE: function handleDeleteGuild(guild) {
    clearGuild(guild.guild.id);
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (guildId.user.id !== id) {
      return false;
    } else {
      set.delete(guildId);
      recomputeGuild(guildId);
    }
  },
  GUILD_VERIFICATION_CHECK: function handleGuildVerificationCheck(guildId) {
    recomputeGuild(guildId.guildId);
  }
};
const tmp2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("stores/GuildVerificationStore.tsx");

export default tmp4;
