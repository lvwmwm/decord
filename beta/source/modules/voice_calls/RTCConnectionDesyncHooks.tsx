// Module ID: 16576
// Function ID: 16577
// Name: RTCConnectionDesyncHooks
// Dependencies: [32, 19, 4774, 4778, 502, 2045, 2109, 14027, 4781, 1376, 4777, 12, 558, 568, 504, 1374, 9612, 2]

// Module 16576 (RTCConnectionDesyncHooks)
import _mod12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1374 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4774 */;
import VoiceStateRecord from "VoiceStateRecord" /* 4778 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import RTCConnectionDesyncStore from "RTCConnectionDesyncStore" /* 14027 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4781 */;
import UserStore from "UserStore" /* 1376 */;
import VoiceStateStore from "VoiceStateStore" /* 4777 */;

const require = globalThis.__r;

require = fn;
function syncChannelVoiceStates(stateFromStores, arg1, mapped) {
  if (null == stateFromStores) {
    if (0 === mapped.length) {
      return arg1;
    }
  }
  const items = [];
  const set = new Set();
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let arr = items.push(nextResult);
    let addResult = set.add(nextResult.user.id);
    continue;
  }
  if (stateFromStores != null) {
    const item = stateFromStores.forEach((item) => {
      items.splice(_mod12.sortedIndexBy(items, item, (comparator) => comparator.comparator), 0, item);
    });
  }
  if (mapped.length > 0) {
    const item1 = mapped.forEach((user) => {
      if (!set.has(user.user.id)) {
        items.splice(_mod12.sortedIndexBy(items, user, (comparator) => comparator.comparator), 0, user);
      }
    });
  }
  return items;
}
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionDesyncStore, RTCConnectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let desyncedParticipants = null;
      if (closure_0 === RTCConnectionStore.getChannelId()) {
        desyncedParticipants = RTCConnectionDesyncStore.getDesyncedParticipants();
      }
      return desyncedParticipants;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [RTCConnectionDesyncStore, RTCConnectionStore];
  return require("initialize").useStateFromStores(items, () => {
    let desyncedParticipants = null;
    if (closure_0 === RTCConnectionStore.getChannelId()) {
      desyncedParticipants = RTCConnectionDesyncStore.getDesyncedParticipants();
    }
    return desyncedParticipants;
  });
});
let closure_14 = tmp3;
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RTCConnectionDesyncStore, RTCConnectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class C {
      constructor() {
        desyncedVoiceStates = null;
        if (closure_0 === closure_10.getChannelId()) {
          tmp2 = closure_9;
          desyncedVoiceStates = closure_9.getDesyncedVoiceStates();
        }
        return desyncedVoiceStates;
      }
    }
    cResult[1] = arg0;
    cResult[2] = C;
    const tmp7 = C;
  } else {
    class C {
      constructor() {
        desyncedVoiceStates = null;
        if (closure_0 === closure_10.getChannelId()) {
          tmp2 = closure_9;
          desyncedVoiceStates = closure_9.getDesyncedVoiceStates();
        }
        return desyncedVoiceStates;
      }
    }
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        desyncedVoiceStates = null;
        if (closure_0 === closure_10.getChannelId()) {
          tmp2 = closure_9;
          desyncedVoiceStates = closure_9.getDesyncedVoiceStates();
        }
        return desyncedVoiceStates;
      }
    }
    const items1 = [ChannelRTCStore];
    cResult[3] = items1;
    const tmp9 = items1;
  } else {
    class C {
      constructor() {
        desyncedVoiceStates = null;
        if (closure_0 === closure_10.getChannelId()) {
          tmp2 = closure_9;
          desyncedVoiceStates = closure_9.getDesyncedVoiceStates();
        }
        return desyncedVoiceStates;
      }
    }
  }
  if (cResult[4] !== arg0) {
    class C {
      constructor() {
        desyncedVoiceStates = null;
        if (closure_0 === closure_10.getChannelId()) {
          tmp2 = closure_9;
          desyncedVoiceStates = closure_9.getDesyncedVoiceStates();
        }
        return desyncedVoiceStates;
      }
    }
    cResult[4] = arg0;
    cResult[5] = tmp11;
    const tmp10 = tmp11;
  } else {
    class C {
      constructor() {
        desyncedVoiceStates = null;
        if (closure_0 === closure_10.getChannelId()) {
          tmp2 = closure_9;
          desyncedVoiceStates = closure_9.getDesyncedVoiceStates();
        }
        return desyncedVoiceStates;
      }
    }
  }
  const tmpResult = require("initialize");
  stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp9, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        desyncedVoiceStates = null;
        if (closure_0 === closure_10.getChannelId()) {
          tmp2 = closure_9;
          desyncedVoiceStates = closure_9.getDesyncedVoiceStates();
        }
        return desyncedVoiceStates;
      }
    }
    const items2 = [UserStore];
    cResult[6] = items2;
    const tmp13 = items2;
  } else {
    class C {
      constructor() {
        desyncedVoiceStates = null;
        if (closure_0 === closure_10.getChannelId()) {
          tmp2 = closure_9;
          desyncedVoiceStates = closure_9.getDesyncedVoiceStates();
        }
        return desyncedVoiceStates;
      }
    }
  }
  if (cResult[7] !== stateFromStoresArray) {
    class I {
      constructor() {
        mapped = closure_1.map(() => { ... });
        return mapped.filter(closure_0(closure_1[15]).isNotNullish);
      }
    }
    cResult[7] = stateFromStoresArray;
    cResult[8] = I;
    const tmp14 = I;
  } else {
    class I {
      constructor() {
        mapped = closure_1.map(() => { ... });
        return mapped.filter(closure_0(closure_1[15]).isNotNullish);
      }
    }
  }
  const tmpResult4 = require("initialize");
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(tmp13, tmp14);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        mapped = closure_1.map(() => { ... });
        return mapped.filter(closure_0(closure_1[15]).isNotNullish);
      }
    }
    const items3 = [ChannelStore];
    cResult[9] = items3;
    const tmp15 = items3;
  } else {
    class I {
      constructor() {
        mapped = closure_1.map(() => { ... });
        return mapped.filter(closure_0(closure_1[15]).isNotNullish);
      }
    }
  }
  if (cResult[10] !== arg0) {
    class P {
      constructor() {
        return closure_7.getBasicChannel(closure_0);
      }
    }
    cResult[10] = arg0;
    cResult[11] = P;
    const tmp16 = P;
  } else {
    class P {
      constructor() {
        return closure_7.getBasicChannel(closure_0);
      }
    }
  }
  const tmpResult5 = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp15, tmp16);
  if (stateFromStores1 != null) {
    class P {
      constructor() {
        return closure_7.getBasicChannel(closure_0);
      }
    }
  }
  if (cResult[12] === undefined) {
    class P {
      constructor() {
        return closure_7.getBasicChannel(closure_0);
      }
    }
    if (cResult[17] === stateFromStores) {
      class P {
        constructor() {
          return closure_7.getBasicChannel(closure_0);
        }
      }
    }
    const tmp25 = syncChannelVoiceStates(stateFromStores, arg1, tmp18);
    cResult[17] = stateFromStores;
    cResult[18] = tmp18;
    cResult[19] = arg1;
    cResult[20] = tmp25;
  }
  if (stateFromStores1 != null) {
    class P {
      constructor() {
        return closure_7.getBasicChannel(closure_0);
      }
    }
  }
  if (cResult[15] !== undefined) {
    class P {
      constructor() {
        return closure_7.getBasicChannel(closure_0);
      }
    }
    if (stateFromStores1 != null) {
      class P {
        constructor() {
          return closure_7.getBasicChannel(closure_0);
        }
      }
    }
    class N {
      constructor(arg0) {
        obj = { voiceState: null, user: null, member: null, nick: null, comparator: null, _isPlaceholder: false };
        tmp = new closure_5(arg0.id);
        obj.voiceState = tmp;
        obj.user = arg0;
        tmp2 = closure_2;
        guild_id = undefined;
        if (closure_2 != null) {
          guild_id = tmp2.guild_id;
        }
        member = null;
        if (null != guild_id) {
          guild_id1 = undefined;
          tmp5 = closure_8;
          if (tmp2 != null) {
            guild_id1 = tmp2.guild_id;
          }
          member = closure_8.getMember(guild_id1, arg0.id);
        }
        obj.member = member;
        ({ globalName: obj.nick, globalName: obj.comparator } = arg0);
        return obj;
      }
    }
    cResult[15] = tmp20;
    cResult[16] = N;
    const tmp19 = N;
  } else {
    class P {
      constructor() {
        return closure_7.getBasicChannel(closure_0);
      }
    }
  }
  let mapped = stateFromStoresArray1.map(tmp19);
  if (stateFromStores1 != null) {
    class P {
      constructor() {
        return closure_7.getBasicChannel(closure_0);
      }
    }
  }
  cResult[12] = undefined;
  cResult[13] = stateFromStoresArray1;
  cResult[14] = mapped;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  let items = [RTCConnectionDesyncStore, RTCConnectionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let desyncedVoiceStates = null;
    if (closure_0 === RTCConnectionStore.getChannelId()) {
      desyncedVoiceStates = RTCConnectionDesyncStore.getDesyncedVoiceStates();
    }
    return desyncedVoiceStates;
  });
  let obj = require("initialize");
  const items1 = [stateFromStoresArray];
  noop = require("initialize").useStateFromStoresArray(items1, () => {
    if (null == closure_0) {
      let items = [];
    } else {
      items = [];
      HermesBuiltin.arraySpread(ChannelRTCStore.getGuildRingingUsers(tmp), 0);
    }
    return items;
  });
  const obj2 = require("initialize");
  const items2 = [UserStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () => {
    const mapped = closure_3.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  const obj3 = require("initialize");
  const items3 = [ChannelStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => ChannelStore.getBasicChannel(closure_0));
  const items4 = [stateFromStoresArray, ];
  let guild_id;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  items4[1] = guild_id;
  const memo = noop.useMemo(() => stateFromStoresArray.map((id) => {
    const obj = { voiceState: new stateFromStores1(id.id), user: id, member: null, nick: null, comparator: null, _isPlaceholder: false };
    let guild_id;
    if (closure_1_5 != null) {
      guild_id = tmp2.guild_id;
    }
    member = null;
    if (null != guild_id) {
      let guild_id1;
      if (tmp2 != null) {
        guild_id1 = tmp2.guild_id;
      }
      member = member.getMember(guild_id1, id.id);
    }
    obj.member = member;
    ({ globalName: obj.nick, globalName: obj.comparator } = id);
    return obj;
  }), items4);
  const items5 = [stateFromStores, arg1, memo];
  return noop.useMemo(() => syncChannelVoiceStates(stateFromStores, closure_1, memo), items5);
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = items(568).c(3);
  const arr = closure_14(arg0);
  if (cResult[0] === arr) {
    if (cResult[1] === arg1) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  let tmp3 = arg1;
  if (null != arr) {
    tmp3 = arg1;
    if (0 !== arr.length) {
      items = [];
      HermesBuiltin.arraySpread(arg1, 0);
      const item = arr.forEach((item) => {
        items.splice(items(closure_1[11]).sortedIndexBy(items, item, (arg0) => items(closure_1_1[16]).sortKey(arg0)), 0, item);
      });
      tmp3 = items;
    }
  }
  cResult[0] = arr;
  cResult[1] = arg1;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((arg0, arg1) => {
  closure_0 = arg1;
  const tmp = closure_14(arg0);
  closure_1 = tmp;
  let items = [tmp, arg1];
  return noop.useMemo(() => {
    let tmp2 = items;
    if (null != closure_1) {
      tmp2 = tmp;
      if (0 !== arr.length) {
        items = [];
        HermesBuiltin.arraySpread(tmp, 0);
        const item = arr.forEach((item) => {
          items.splice(items(closure_1[11]).sortedIndexBy(items, item, (arg0) => items(closure_1_1[16]).sortKey(arg0)), 0, item);
        });
        tmp2 = items;
      }
    }
    return tmp2;
  }, items);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/RTCConnectionDesyncHooks.tsx");

export const useEnsureSyncedChannelVoiceStates = tmp2;
export const useDesyncedChannelParticipants = tmp3;
export const useEnsureSyncedChannelParticipants = tmp4;
export const useIsRTCDisconnectedUIVisible = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(23);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores2];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    const fn = function c() {
      return AuthenticationStore.getId() === closure_1;
    };
    cResult[1] = arg1;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [RTCConnectionStore];
    const fn2 = function _() {
      return channelId.getChannelId();
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp9);
  noop = noop.useRef(null);
  const tmpResult4 = require("initialize");
  [r10054, ChannelRTCStore] = stateFromStores1(noop.useState(false), 2);
  const tmp12 = stateFromStores1(noop.useState(false), 2);
  closure_5 = stateFromStores1(noop.useState(false), 2)[1];
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [RTCConnectionStore, VoiceStateStore];
    cResult[5] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === arg0) {
    if (cResult[7] === arg1) {
      let tmp17 = cResult[8];
    }
    stateFromStores2 = tmp(504).useStateFromStores(tmp14, tmp17);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [RTCConnectionStore, VoiceStateStore];
      cResult[9] = items3;
      let tmp19 = items3;
    } else {
      tmp19 = cResult[9];
    }
    if (cResult[10] === arg0) {
      if (cResult[11] === arg1) {
        let tmp22 = cResult[12];
      }
      const stateFromStores3 = tmp(504).useStateFromStores(tmp19, tmp22);
      if (cResult[13] !== stateFromStores2) {
        const fn4 = function x() {
          if (stateFromStores2) {
            closure_5(true);
          }
        };
        const items4 = [stateFromStores2];
        cResult[13] = stateFromStores2;
        cResult[14] = fn4;
        class M {
          constructor() {
            tmp = closure_1;
            tmp2 = null != closure_1;
            if (tmp2) {
              tmp3 = closure_0;
              tmp2 = null != closure_0;
            }
            if (tmp2) {
              tmp4 = closure_10;
              tmp5 = closure_0;
              tmp2 = closure_10.getChannelId() === closure_0;
            }
            if (tmp2) {
              tmp6 = closure_12;
              tmp7 = closure_0;
              tmp2 = null != closure_12.isInChannel(closure_0, tmp);
            }
            if (tmp2) {
              tmp8 = closure_10;
              tmp2 = !closure_10.isUserConnected(tmp);
            }
            return tmp2;
          }
        }
        let tmp25 = items4;
        let tmp24 = fn4;
      } else {
        tmp24 = cResult[14];
        tmp25 = cResult[15];
      }
      const effect = obj4.useEffect(tmp24, tmp25);
      if (cResult[16] === arg0) {
        if (cResult[17] === stateFromStores1) {
          let tmp27 = cResult[18];
          let tmp28 = cResult[19];
        }
        const effect1 = obj4.useEffect(tmp27, tmp28);
        if (cResult[20] !== stateFromStores3) {
          class G {
            constructor() {
              if (closure_7) {
                tmp2 = null;
                if (null == closure_3.current) {
                  tmp5 = globalThis;
                  _setTimeout = setTimeout;
                  num = 250;
                  tmp.current = setTimeout(() => {
                    ref.current = null;
                    closure_1_4(true);
                  }, 250);
                }
                return () => {
                  clearTimeout(ref.current);
                  ref.current = null;
                };
              }
              clearTimeoutResult = clearTimeout(closure_3.current);
              closure_3.current = null;
              tmp4 = closure_4(false);
              return;
            }
          }
          const items5 = [stateFromStores3];
          cResult[20] = stateFromStores3;
          cResult[21] = G;
          class M {
            constructor() {
              tmp = closure_1;
              tmp2 = null != closure_1;
              if (tmp2) {
                tmp3 = closure_0;
                tmp2 = null != closure_0;
              }
              if (tmp2) {
                tmp4 = closure_10;
                tmp5 = closure_0;
                tmp2 = closure_10.getChannelId() === closure_0;
              }
              if (tmp2) {
                tmp6 = closure_12;
                tmp7 = closure_0;
                tmp2 = null != closure_12.isInChannel(closure_0, tmp);
              }
              if (tmp2) {
                tmp8 = closure_10;
                tmp2 = !closure_10.isUserConnected(tmp);
              }
              return tmp2;
            }
          }
          let tmp32 = items5;
          const tmp31 = G;
        } else {
          class G {
            constructor() {
              if (closure_7) {
                tmp2 = null;
                if (null == closure_3.current) {
                  tmp5 = globalThis;
                  _setTimeout = setTimeout;
                  num = 250;
                  tmp.current = setTimeout(() => {
                    ref.current = null;
                    closure_1_4(true);
                  }, 250);
                }
                return () => {
                  clearTimeout(ref.current);
                  ref.current = null;
                };
              }
              clearTimeoutResult = clearTimeout(closure_3.current);
              closure_3.current = null;
              tmp4 = closure_4(false);
              return;
            }
          }
          tmp32 = cResult[22];
        }
        const effect2 = obj4.useEffect(tmp31, tmp32);
        if (!stateFromStores) {
          class G {
            constructor() {
              if (closure_7) {
                tmp2 = null;
                if (null == closure_3.current) {
                  tmp5 = globalThis;
                  _setTimeout = setTimeout;
                  num = 250;
                  tmp.current = setTimeout(() => {
                    ref.current = null;
                    closure_1_4(true);
                  }, 250);
                }
                return () => {
                  clearTimeout(ref.current);
                  ref.current = null;
                };
              }
              clearTimeoutResult = clearTimeout(closure_3.current);
              closure_3.current = null;
              tmp4 = closure_4(false);
              return;
            }
          }
        }
        if (!stateFromStores) {
          class G {
            constructor() {
              if (closure_7) {
                tmp2 = null;
                if (null == closure_3.current) {
                  tmp5 = globalThis;
                  _setTimeout = setTimeout;
                  num = 250;
                  tmp.current = setTimeout(() => {
                    ref.current = null;
                    closure_1_4(true);
                  }, 250);
                }
                return () => {
                  clearTimeout(ref.current);
                  ref.current = null;
                };
              }
              clearTimeoutResult = clearTimeout(closure_3.current);
              closure_3.current = null;
              tmp4 = closure_4(false);
              return;
            }
          }
        }
        return !stateFromStores;
      }
      const fn5 = function k() {
        if (stateFromStores1 !== closure_0) {
          closure_5(false);
        }
      };
      class M {
        constructor() {
          tmp = closure_1;
          tmp2 = null != closure_1;
          if (tmp2) {
            tmp3 = closure_0;
            tmp2 = null != closure_0;
          }
          if (tmp2) {
            tmp4 = closure_10;
            tmp5 = closure_0;
            tmp2 = closure_10.getChannelId() === closure_0;
          }
          if (tmp2) {
            tmp6 = closure_12;
            tmp7 = closure_0;
            tmp2 = null != closure_12.isInChannel(closure_0, tmp);
          }
          if (tmp2) {
            tmp8 = closure_10;
            tmp2 = !closure_10.isUserConnected(tmp);
          }
          return tmp2;
        }
      }
      tmp29[0] = arg0;
      tmp29[1] = stateFromStores1;
      cResult[16] = arg0;
      cResult[17] = stateFromStores1;
      cResult[18] = fn5;
      cResult[19] = tmp29;
      tmp28 = tmp29;
      tmp27 = fn5;
      const tmpResult6 = tmp(504);
    }
    class M {
      constructor() {
        tmp = closure_1;
        tmp2 = null != closure_1;
        if (tmp2) {
          tmp3 = closure_0;
          tmp2 = null != closure_0;
        }
        if (tmp2) {
          tmp4 = closure_10;
          tmp5 = closure_0;
          tmp2 = closure_10.getChannelId() === closure_0;
        }
        if (tmp2) {
          tmp6 = closure_12;
          tmp7 = closure_0;
          tmp2 = null != closure_12.isInChannel(closure_0, tmp);
        }
        if (tmp2) {
          tmp8 = closure_10;
          tmp2 = !closure_10.isUserConnected(tmp);
        }
        return tmp2;
      }
    }
    cResult[10] = arg0;
    cResult[11] = arg1;
    cResult[12] = M;
    tmp22 = M;
    const tmpResult5 = tmp(504);
  }
  const fn3 = function p() {
    let isUserConnectedResult = null != closure_1;
    if (isUserConnectedResult) {
      isUserConnectedResult = null != closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = RTCConnectionStore.getChannelId() === closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = null != VoiceStateStore.isInChannel(closure_0, tmp);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = RTCConnectionStore.isUserConnected(tmp);
    }
    return isUserConnectedResult;
  };
  cResult[6] = arg0;
  cResult[7] = arg1;
  cResult[8] = fn3;
  tmp17 = fn3;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [stateFromStores2];
  const stateFromStores = require("initialize").useStateFromStores(items, () => AuthenticationStore.getId() === closure_1);
  const obj = require("initialize");
  const items1 = [RTCConnectionStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => channelId.getChannelId());
  noop = noop.useRef(null);
  const obj2 = require("initialize");
  [tmp4, ChannelRTCStore] = stateFromStores1(noop.useState(false), 2);
  const tmp3 = stateFromStores1(noop.useState(false), 2);
  [tmp6, VoiceStateRecord] = stateFromStores1(noop.useState(false), 2);
  const tmp5 = stateFromStores1(noop.useState(false), 2);
  const items2 = [RTCConnectionStore, VoiceStateStore];
  stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    let isUserConnectedResult = null != closure_1;
    if (isUserConnectedResult) {
      isUserConnectedResult = null != closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = RTCConnectionStore.getChannelId() === closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = null != VoiceStateStore.isInChannel(closure_0, tmp);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = RTCConnectionStore.isUserConnected(tmp);
    }
    return isUserConnectedResult;
  });
  const obj3 = require("initialize");
  const items3 = [RTCConnectionStore, VoiceStateStore];
  const stateFromStores3 = require("initialize").useStateFromStores(items3, () => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      tmp2 = RTCConnectionStore.getChannelId() === closure_0;
    }
    if (tmp2) {
      tmp2 = null != VoiceStateStore.isInChannel(closure_0, tmp);
    }
    if (tmp2) {
      tmp2 = !RTCConnectionStore.isUserConnected(tmp);
    }
    return tmp2;
  });
  const items4 = [stateFromStores2];
  const effect = noop.useEffect(() => {
    if (stateFromStores2) {
      VoiceStateRecord(true);
    }
  }, items4);
  const items5 = [arg0, stateFromStores1];
  const effect1 = noop.useEffect(() => {
    if (stateFromStores1 !== closure_0) {
      VoiceStateRecord(false);
    }
  }, items5);
  const items6 = [stateFromStores3];
  const effect2 = noop.useEffect(() => {
    if (stateFromStores3) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        tmp.current = setTimeout(() => {
          ref.current = null;
          closure_1_4(true);
        }, 250);
      }
      return () => {
        clearTimeout(ref.current);
        ref.current = null;
      };
    }
    clearTimeout(ref.current);
    ref.current = null;
    ChannelRTCStore(false);
  }, items6);
  let tmp12 = !stateFromStores;
  if (!stateFromStores) {
    tmp12 = tmp6;
  }
  if (tmp12) {
    tmp12 = tmp4;
  }
  return tmp12;
});
