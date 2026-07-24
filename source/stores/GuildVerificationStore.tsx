// Module ID: 4946
// Function ID: 42403
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1391, 1917, 1910, 1838, 1849, 653, 3746, 1360, 686, 21, 566, 2]

// Module 4946 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import initialize from "initialize";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { isGuildOwner } from "isGuildOwner";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";
import set from "_possibleConstructorReturn";

let closure_13;
let closure_14;
let closure_15;
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
function recomputeGuild(guildId) {
  let iter2;
  const _require = guildId;
  clearGuild(guildId);
  set.add(guildId);
  guild = guild.getGuild(guildId);
  const currentUser = authStore.getCurrentUser();
  let tmp4 = null != guild;
  if (tmp4) {
    tmp4 = guild.verificationLevel !== constants.NONE;
  }
  if (null != guild) {
    if (null != currentUser) {
      if (tmp4) {
        if (!isGuildOwner(guild, currentUser)) {
          member = member.getMember(guild.id, currentUser.id);
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
              role = store.getRole(guild.id, guild.verificationRoleId);
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
                  set = new Set();
                  const tmp21 = _createForOfIteratorHelperLoose(member.roles);
                  let iter = tmp21();
                  if (!iter.done) {
                    do {
                      let value = iter.value;
                      let tmp22 = store;
                      let role1 = store.getRole(guild.id, value);
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
                  tmp36 = features.has(constants3.GUILD_ONBOARDING_EVER_ENABLED) && !tmp30;
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
                let obj = outer1_1(outer1_2[13]);
                obj = { type: "GUILD_VERIFICATION_CHECK", guildId: closure_0 };
                return obj.dispatch(obj);
              }, HermesBuiltin.apply(items1, Math));
            }
            let obj = { notClaimed: flag2, notEmailVerified: flag3, notPhoneVerified: flag4, newAccount: flag5, newMember: flag6, missingVerificationRole: flag, verificationRole: role };
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
            const obj2 = _require(1360);
          }
        }
      }
    }
  }
}
function clearGuild(id) {
  if (null != table[id]) {
    const _clearTimeout = clearTimeout;
    clearTimeout(tmp3.timeoutRef);
  }
  delete tmp[tmp2];
}
function handleCreateOrUpdateGuild(guild) {
  set.delete(guild.guild.id);
  recomputeGuild(guild.guild.id);
}
({ VerificationLevels: closure_13, VerificationCriteria: closure_14, GuildFeatures: closure_15 } = ME);
let closure_17 = { notClaimed: false, notEmailVerified: false, notPhoneVerified: false, newAccount: false, newMember: false, missingVerificationRole: false, canChat: true };
let set = new Set();
let closure_19 = {};
let tmp4 = ((Store) => {
  class GuildVerificationStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, GuildVerificationStore);
      obj = outer1_6(GuildVerificationStore);
      tmp2 = outer1_5;
      if (outer1_20()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildVerificationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10, outer1_11, outer1_12);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getCheck",
    value(arg0) {
      if (null == arg0) {
        let tmp5 = outer1_17;
      } else {
        if (!outer1_18.has(arg0)) {
          outer1_23(arg0);
        }
        tmp5 = outer1_19[arg0];
        if (null == tmp5) {
          tmp5 = outer1_17;
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
})(require("initialize").Store);
tmp4.displayName = "GuildVerificationStore";
tmp4 = new tmp4(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    for (const key10006 in closure_19) {
      let tmp2 = key10006;
      let tmp3 = clearGuild;
      let tmp4 = clearGuild(key10006);
      continue;
    }
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    const keys = importDefault(21).keys(closure_19);
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
let result = set.fileFinishedImporting("stores/GuildVerificationStore.tsx");

export default tmp4;
