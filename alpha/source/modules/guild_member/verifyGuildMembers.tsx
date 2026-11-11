// Module ID: 11562
// Function ID: 11563
// Name: verifyGuildMembers
// Dependencies: [32, 6737, 502, 5155, 1385, 5161, 1403, 572, 8785, 559, 6854, 5087, 2]
// Exports: verifyGuildMembers

// Module 11562 (verifyGuildMembers)
import BackoffDefault from "Backoff" /* 559 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import Timers from "Timers" /* 5087 */;
import GuildMemberConstants from "GuildMemberConstants" /* 5161 */;
import GatewayConnectionStore2 from "GatewayConnectionStore" /* 6737 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6854 */;
import createMessage from "createMessage" /* 8785 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import UserStore from "UserStore" /* 1385 */;
import Dispatcher_mod from "Dispatcher" /* 572 */;
import size_mod from "module_2" /* 2 */;

const GatewayConnectionStore = GatewayConnectionStore2;
let closure_20, set, user;

function isVerifiableMember(trueMember) {
  let tmp = null != trueMember;
  if (tmp) {
    let num = trueMember.flags;
    const hasFlag = FlagUtils.hasFlag;
    FlagUtils;
    if (num == null) {
      num = 0;
    }
    tmp = !hasFlag(num, GuildMemberFlags.IS_GUEST);
  }
  return tmp;
}
function getInFlightNonce(guildId, arg1) {
  const value = map3.get(guildId);
  let value2;
  if (value != null) {
    value2 = value.get(arg1);
  }
  return value2;
}
function clearInFlightMember(guildId, nextResult, arg2) {
  const value = map3.get(guildId);
  let value2;
  const obj = map3;
  if (value != null) {
    value2 = value.get(nextResult);
  }
  if (value2 === arg2) {
    value.delete(nextResult);
    if (0 === value.size) {
      obj.delete(guildId);
    }
  }
}
function addPending(guildId, item10018) {
  let value = map1.get(guildId);
  const obj = map1;
  if (null == value) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    const result = obj.set(guildId, set);
    value = set;
  }
  value.add(item10018);
}
function clearFailedAttempts(guildId, arg1) {
  const value = map4.get(guildId);
  const obj = map4;
  if (null != value) {
    value.delete(arg1);
    if (0 === value.size) {
      obj.delete(guildId);
    }
  }
}
function scheduleFlush() {
  delayedCall.delay(false);
}
function isBackingOff(arg0) {
  const value = map5.get(arg0);
  let pending;
  if (value != null) {
    pending = value.pending;
  }
  return true === pending;
}
function clearRetryBackoff(guildId) {
  const value = map5.get(guildId);
  const obj = map5;
  if (value != null) {
    value.cancel();
  }
  obj.delete(guildId);
}
function expireRequest(arg0) {
  function armRetryBackoff(guildId) {
    let value = map5.get(guildId);
    const obj = map5;
    if (null == value) {
      const self = this;
      const self2 = this;
      const tmp3 = new BackoffDefault(1000, 60000);
      const result = obj.set(guildId, tmp3);
      value = tmp3;
    }
    value.fail(scheduleFlush);
  }
  let obj = map2;
  let value = map2.get(arg0);
  if (null != value) {
    obj.delete(arg0);
    const guildId = value.guildId;
    let value2 = map4.get(guildId);
    const obj3 = map4;
    if (null == value2) {
      const _Map = Map;
      let self = this;
      let self2 = this;
      map = new Map();
      let result = obj3.set(guildId, map);
      value2 = map;
    }
    let flag = false;
    const members = value.members;
    const keys = members.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp11 = nextResult;
      let tmp13 = clearInFlightMember(guildId, nextResult, arg0);
      let num4 = value2.get(nextResult);
      if (num4 == null) {
        num4 = 0;
      }
      let sum = num4 + 1;
      if (sum < 3) {
        let result1 = value2.set(tmp11, tmp15);
        let tmp22 = addPending(guildId, tmp11);
        flag = true;
      } else {
        let deleteResult1 = value2.delete(tmp11);
      }
      continue;
    }
    if (0 === value2.size) {
      map4.delete(guildId);
    }
    if (flag) {
      armRetryBackoff(guildId);
    } else {
      clearRetryBackoff(guildId);
      if (map1.has(guildId)) {
        scheduleFlush();
      }
    }
  }
}
function startRequest(guildId, arg1) {
  function createNonce() {
    closure_20 = closure_20 + 1;
    const str = Date.now();
    const str1 = str.toString(36);
    return "gmv:" + str1 + ":" + closure_20.toString(36);
  }
  map = new Map();
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let trueMember = GuildMemberStore.getTrueMember(guildId, nextResult);
    let tmp5 = trueMember;
    if (isVerifiableMember(trueMember)) {
      let result = map.set(tmp2, tmp5);
    } else {
      let tmp9 = clearFailedAttempts(guildId, tmp2);
    }
    continue;
  }
  if (0 !== map.size) {
    const tmp25 = createNonce();
    let closure_0 = tmp25;
    let value = map3.get(guildId);
    const obj5 = map3;
    if (null == value) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map1 = new Map();
      const result1 = obj5.set(guildId, map1);
      value = map1;
    }
    const keys = map.keys();
    for (const item10045 of keys) {
      let result2 = value.set(item10045, tmp25);
      continue;
    }
    const _setTimeout = setTimeout;
    const obj = {
      guildId,
      members: map,
      timeout: setTimeout(() => {
          expireRequest(closure_0);
        }, 30000)
    };
    const result3 = map2.set(tmp25, obj);
    const _Array = Array;
    const obj4 = GuildActionCreatorsDefault;
    const membersByIdWithNonce = obj4.requestMembersByIdWithNonce(guildId, Array.from(map.keys()), tmp25);
  }
}
function armDeferredTimeout(arg0) {
  let timeout;
  if (null != timeout) {
    if (Infinity > arg0) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
    }
  }
  Infinity = arg0;
  timeout = setTimeout(releaseDueDeferred, Math.max(0, arg0 - Date.now()));
}
function clearDeferredTimeout() {
  if (null != c18) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c18);
  }
  c18 = null;
  Infinity = Infinity;
}
function deferUntilReverifiable(guildId, arg1, arg2) {
  let timeout;
  let value = map6.get(guildId);
  const obj = map6;
  if (null == value) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    const result = obj.set(guildId, map);
    value = map;
  }
  const result1 = value.set(arg1, arg2);
  if (null == timeout) {
    Infinity = arg2;
    const _setTimeout = setTimeout;
    const _Math = Math;
    const _Date = Date;
    timeout = setTimeout(releaseDueDeferred, Math.max(0, arg2 - Date.now()));
  } else if (Infinity > arg2) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
}
function releaseDueDeferred() {
  let tmp13;
  let tmp14;
  let tmp7;
  let tmp8;
  c18 = null;
  Infinity = Infinity;
  let num = Infinity;
  let flag = false;
  const timestamp = Date.now();
  const tmp3 = map6[Symbol.iterator]();
  while (tmp3 !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    [tmp7, tmp8] = tmp6;
    let obj = tmp8;
    for (const item10031 of tmp8) {
      let tmp12 = _slicedToArray(item10031, 2);
      [tmp13, tmp14] = tmp12;
      if (tmp14 > timestamp) {
        let _Math = Math;
        num = Math.min(num, tmp15);
      } else {
        let deleteResult = obj.delete(tmp13);
        if (null == getInFlightNonce(tmp7, tmp13)) {
          let tmp24 = addPending(tmp7, tmp13);
          flag = true;
        }
      }
      continue;
    }
    if (0 === obj.size) {
      let deleteResult1 = map6.delete(tmp7);
    }
    continue;
  }
  if (num !== Infinity) {
    armDeferredTimeout(num);
  }
  if (flag) {
    scheduleFlush();
  }
}
function clearInFlight() {
  const values = map2.values();
  const iter = values[Symbol.iterator]();
  while (iter !== undefined) {
    let _clearTimeout = clearTimeout;
    let clearTimeoutResult = clearTimeout(iter.next().timeout);
    continue;
  }
  map2.clear();
  map3.clear();
}
function clearRetryBackoffs() {
  const values = map5.values();
  for (const item10007 of values) {
    let cancelResult = item10007.cancel();
    continue;
  }
  map5.clear();
}
let closure_5 = GatewayConnectionStore2.MAX_GUILD_MEMBER_REQUEST_SIZE;
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let c10 = 300000;
let map = new Map();
let map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
const map6 = new Map();
let c18 = null;
let Infinity = Infinity;
let c20 = 0;
const delayedCall = new Timers.DelayedCall(500, () => {
  let first;
  let length;
  let sum;
  let tmp12;
  function pruneExpired(arg0) {
    let closure_0 = arg0;
    let item = set.forEach((size, index) => {
      const item = size.forEach((item, index) => {
        if (size - item >= closure_3_10) {
          size.delete(index);
        }
      });
      if (0 === size.size) {
        set.delete(index);
      }
    });
  }
  pruneExpired(Date.now());
  if (GatewayConnectionStore.isConnected()) {
    const tmp4 = map1[Symbol.iterator]();
    while (tmp4 !== undefined) {
      [first, tmp12] = tmp6;
      let tmp11 = first;
      if (!isBackingOff(first)) {
        let deleteResult = map1.delete(tmp11);
        let _Array = Array;
        let arr = Array.from(tmp12);
        let arr2 = arr;
        let num2 = 0;
        if (0 < arr.length) {
          do {
            let tmp23 = startRequest(tmp11, arr2.slice(num2, num2 + closure_5));
            sum = num2 + closure_5;
            num2 = sum;
            length = arr2.length;
          } while (sum < length);
        }
      }
      continue;
    }
  }
});
let Dispatcher = Dispatcher_mod;
const subscription = Dispatcher.subscribe("GUILD_MEMBERS_CHUNK_BATCH", (arg0) => {
  function _loop(iter) {
    if (null == iter.nonce) {
      return 0;
    } else {
      const nonce = iter.nonce;
      let obj = closure_13;
      let value = closure_13.get(nonce);
      if (null != value) {
        if (value.guildId === iter.guildId) {
          let tmp13 = globalThis;
          const _clearTimeout = clearTimeout;
          clearTimeout(value.timeout);
          obj.delete(nonce);
          let guildId = iter.guildId;
          let obj2 = closure_16;
          const value2 = closure_16.get(guildId);
          if (value2 != null) {
            value2.cancel();
          }
          obj2.delete(guildId);
          if (set.has(iter.guildId)) {
            closure_35.delay(false);
          }
          const _Set = Set;
          const members = iter.members;
          let self = this;
          let self2 = this;
          set = new Set(members.map((user) => user.user.id));
          let notFound = iter.notFound;
          const _Set2 = Set;
          if (notFound == null) {
            notFound = [];
          }
          const self3 = this;
          const self4 = this;
          const _Set21 = new _Set2(notFound);
          const _Date = Date;
          let closure_4 = Date.now();
          const members1 = value.members;
          const item = members1.forEach(function(joinedAt, userId) {
            let obj8;
            const guildId = iter.guildId;
            const value = map3.get(guildId);
            let value4;
            const obj = map3;
            const tmp2 = nonce;
            if (value != null) {
              value4 = value.get(userId);
            }
            if (value4 === tmp2) {
              value.delete(userId);
              if (0 === value.size) {
                obj.delete(guildId);
              }
            }
            const guildId2 = tmp.guildId;
            const value5 = map4.get(guildId2);
            const obj3 = map4;
            if (null != value5) {
              value5.delete(userId);
              if (0 === value5.size) {
                obj3.delete(guildId2);
              }
            }
            if (set.has(userId)) {
              let value6 = closure_2_11.get(tmp.guildId);
              const obj9 = closure_2_11;
              if (null == value6) {
                const _Map = Map;
                const self = this;
                const self2 = this;
                map = new Map();
                const result = obj9.set(tmp.guildId, map);
                value6 = map;
              }
              const result1 = value6.set(userId, closure_4);
            } else {
              let hasItem = _Set21.has(userId);
              if (hasItem) {
                trueMember = trueMember.getTrueMember(tmp.guildId, userId);
                let tmp13 = trueMember === joinedAt;
                if (!tmp13) {
                  let tmp14 = null != trueMember;
                  if (tmp14) {
                    joinedAt = trueMember.joinedAt;
                    if (joinedAt == null) {
                      joinedAt = null;
                    }
                    let joinedAt1 = joinedAt.joinedAt;
                    if (joinedAt1 == null) {
                      joinedAt1 = null;
                    }
                    tmp14 = joinedAt === joinedAt1;
                  }
                  tmp13 = tmp14;
                }
                hasItem = tmp13;
              }
              if (hasItem) {
                const guildId3 = tmp.guildId;
                user = user.getUser(userId);
                if (null != user) {
                  const obj2 = { type: "GUILD_MEMBER_REMOVE", guildId: guildId3, user: obj8.userRecordToServer(user) };
                  const dispatch = Dispatcher.dispatch;
                  Dispatcher;
                  obj8 = createMessage;
                  dispatch(obj2);
                } else {
                  const obj4 = { type: "GUILD_MEMBER_REMOVE_LOCAL", guildId: guildId3, userId };
                  const obj5 = Dispatcher;
                  obj5.dispatch(obj4);
                }
              }
            }
          });
        }
      }
      return 0;
    }
  }
  let iter = arg0.chunks[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    continue;
  }
});
Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("GUILD_DELETE", (guild) => {
  let set4;
  let set5;
  let set6;
  function clearGuild(id) {
    let tmp11;
    let tmp12;
    set.delete(id);
    set2.delete(id);
    set5.delete(id);
    set6.delete(id);
    clearRetryBackoff(id);
    const tmp7 = set3[Symbol.iterator]();
    while (tmp7 !== undefined) {
      let tmp10 = _slicedToArray(tmp8, 2);
      [tmp11, tmp12] = tmp10;
      if (tmp12.guildId === id) {
        let _clearTimeout = clearTimeout;
        let clearTimeoutResult = clearTimeout(tmp13.timeout);
        let deleteResult4 = set3.delete(tmp11);
      }
      continue;
    }
    set4.delete(id);
  }
  clearGuild(guild.guild.id);
});
Dispatcher = Dispatcher_mod;
const subscription2 = Dispatcher.subscribe("CONNECTION_OPEN", function handleConnectionOpen() {
  function releaseAllDeferred() {
    let obj;
    let tmp6;
    const tmp2 = map6[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, obj] = tmp5;
      let keys = obj.keys();
      for (const item10019 of keys) {
        let tmp12 = addPending(tmp6, item10019);
        continue;
      }
      continue;
    }
    map6.clear();
    clearDeferredTimeout();
  }
  const values = map2.values();
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let members = nextResult.members;
    let tmp3 = nextResult;
    let keys = members.keys();
    let tmp5 = keys;
    let tmp6 = keys;
    for (const item10018 of keys) {
      let tmp8 = nextResult;
      let tmp9 = addPending(tmp3.guildId, item10018);
      continue;
    }
    continue;
  }
  let tmp10 = clearInFlight();
  let tmp11 = clearRetryBackoffs();
  map4.clear();
  map.clear();
  releaseAllDeferred();
  if (map1.size > 0) {
    scheduleFlush();
  }
});
Dispatcher = Dispatcher_mod;
const subscription3 = Dispatcher.subscribe("CONNECTION_RESUMED", function handleConnectionResumed() {
  if (map1.size > 0) {
    delayedCall.delay(false);
  }
});
Dispatcher = Dispatcher_mod;
const subscription4 = Dispatcher.subscribe("LOGOUT", function reset() {
  map.clear();
  map1.clear();
  map4.clear();
  map6.clear();
  if (null != c18) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c18);
  }
  c18 = null;
  Infinity = Infinity;
  clearInFlight();
  clearRetryBackoffs();
  delayedCall.cancel();
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_member/verifyGuildMembers.tsx");

export function verifyGuildMembers(guildId, arg1) {
  const timestamp = Date.now();
  const id = AuthenticationStore.getId();
  const value = map.get(guildId);
  let flag = false;
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (nextResult !== id) {
      if (null == getInFlightNonce(guildId, tmp4)) {
        if (isVerifiableMember(GuildMemberStore.getTrueMember(guildId, tmp4))) {
          let value2;
          if (value != null) {
            value2 = value.get(tmp4);
          }
          let tmp10 = value2;
          if (null != value2) {
            if (timestamp - tmp10 < c10) {
              let tmp19 = deferUntilReverifiable(guildId, tmp4, tmp10 + tmp12);
            }
          }
          let tmp15 = addPending(guildId, tmp4);
          flag = true;
        }
      }
    }
    continue;
  }
  if (flag) {
    scheduleFlush();
  }
}
