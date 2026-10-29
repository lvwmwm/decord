// Module ID: 12466
// Function ID: 12467
// Name: useConjureVoiceChannelPin
// Dependencies: [5, 32, 19, 4857, 4935, 4937, 4947, 1389, 6831, 10828, 1084, 558, 576, 504, 5641, 10917, 2]

// Module 12466 (useConjureVoiceChannelPin)
import GuildChannelStore2 from "GuildChannelStore" /* 4935 */;
import useChannelName from "useChannelName" /* 5641 */;
import conjureVoiceChannelPin from "conjureVoiceChannelPin" /* 10917 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import PermissionStore from "PermissionStore" /* 4937 */;
import RelationshipStore from "RelationshipStore" /* 4947 */;
import UserStore from "UserStore" /* 1389 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
import ConjureVoiceChannelPinStore from "ConjureVoiceChannelPinStore" /* 10828 */;
import Constants from "Constants" /* 1084 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, c2, c3;

let closure_14;
let map1;
let react = react_mod;
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
({ ChannelTypes: map1, Permissions: closure_14 } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePinnableVoiceChannels(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildChannelStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let constants2;
      let items;
      if (null == closure_0) {
        items = [];
      } else {
        const arr = GuildChannelStore.getChannels(tmp)[GUILD_VOCAL_CHANNELS_KEY];
        const mapped = arr.map((channel) => channel.channel);
        items = mapped.filter((type) => {
          const canResult = type.type === constants.GUILD_VOICE && closure_1_8.can(constants2.MANAGE_CHANNELS, type);
          return canResult;
        });
      }
      return items;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useConjurePinnableVoiceChannels(arg0) {
  let closure_0;
  _require = arg0;
  let items = [GuildChannelStore, PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    let constants2;
    let items;
    if (null == closure_0) {
      items = [];
    } else {
      const arr = GuildChannelStore.getChannels(tmp)[GUILD_VOCAL_CHANNELS_KEY];
      const mapped = arr.map((channel) => channel.channel);
      items = mapped.filter((type) => {
        const canResult = type.type === constants.GUILD_VOICE && closure_1_8.can(constants2.MANAGE_CHANNELS, type);
        return canResult;
      });
    }
    return items;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureVoiceChannelPinOutcome(arg0) {
  let closure_0;
  let first;
  let stateFromStores;
  let tmp12;
  let tmp13;
  let tmp6;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureVoiceChannelPinStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return ConjureVoiceChannelPinStore.getOutcome(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(stateFromStores[13]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore, UserStore, RelationshipStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn2 = function c() {
      let status;
      if (stateFromStores != null) {
        status = tmp.status;
      }
      let channel = null;
      if ("pinned" === status) {
        channel = ChannelStore.getChannel(tmp.channelId);
      }
      let channelName = null;
      if (null != channel) {
        const obj = useChannelName;
        channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
      }
      return channelName;
    };
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp13 = items2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const tmpResult2 = tmp(stateFromStores[13]);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp12, tmp13);
  if (cResult[7] === stateFromStores) {
    let tmp15;
    if (cResult[8] === stateFromStores1) {
      tmp15 = cResult[9];
    }
    return tmp15;
  }
  const obj2 = { outcome: stateFromStores, pinnedName: stateFromStores1 };
  cResult[7] = stateFromStores;
  cResult[8] = stateFromStores1;
  cResult[9] = obj2;
  tmp15 = obj2;
}) : (function useConjureVoiceChannelPinOutcome(arg0) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureVoiceChannelPinStore];
  stateFromStores = obj.useStateFromStores(items, () => ConjureVoiceChannelPinStore.getOutcome(closure_0));
  const items1 = [ChannelStore, UserStore, RelationshipStore];
  const items2 = [stateFromStores];
  const obj2 = require("get initialized");
  const obj3 = {
    outcome: stateFromStores,
    pinnedName: obj2.useStateFromStores(items1, () => {
      let status;
      if (stateFromStores != null) {
        status = tmp.status;
      }
      let channel = null;
      if ("pinned" === status) {
        channel = ChannelStore.getChannel(tmp.channelId);
      }
      let channelName = null;
      if (null != channel) {
        const obj = useChannelName;
        channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
      }
      return channelName;
    }, items2)
  };
  return obj3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureVoiceChannelPinForm(arg0) {
  let closure_0;
  let closure_4;
  let first;
  let first1;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(21);
  const tmp2 = first1;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return ConjureProjectStore.getProject(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(tmp2[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  let guild_id;
  const tmp9 = closure_15;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  const tmp9Result = tmp9(guild_id);
  [first1, tmp13] = react.useState(null);
  [tmp15, _asyncToGenerator] = _slicedToArray(react.useState(false), 2);
  const tmp14 = _slicedToArray(react.useState(false), 2);
  const tmp16 = _slicedToArray(react.useState(false), 2);
  [tmp17, _slicedToArray] = tmp16;
  if (cResult[4] === tmp9Result) {
    let tmp18;
    if (cResult[5] === first1) {
      tmp18 = cResult[6];
    }
    react = tmp18;
    let application_id;
    if (stateFromStores != null) {
      application_id = stateFromStores.application_id;
    }
    if (cResult[7] === application_id) {
      if (cResult[8] === arg0) {
        let tmp21;
        if (cResult[9] === tmp18) {
          tmp21 = cResult[10];
        }
        if (cResult[11] !== arg0) {
          class D {
            constructor() {
              const obj = conjureVoiceChannelPin;
              return obj.resolveVoiceChannelPin(closure_0, { status: "skipped" });
            }
          }
          cResult[11] = arg0;
          cResult[12] = D;
        } else {
          class D {
            constructor() {
              const obj = conjureVoiceChannelPin;
              return obj.resolveVoiceChannelPin(closure_0, { status: "skipped" });
            }
          }
        }
        if (stateFromStores != null) {
          class D {
            constructor() {
              const obj = conjureVoiceChannelPin;
              return obj.resolveVoiceChannelPin(closure_0, { status: "skipped" });
            }
          }
        }
        if (undefined == null) {
          class D {
            constructor() {
              const obj = conjureVoiceChannelPin;
              return obj.resolveVoiceChannelPin(closure_0, { status: "skipped" });
            }
          }
        }
        if (cResult[13] === tmp9Result) {
          class D {
            constructor() {
              const obj = conjureVoiceChannelPin;
              return obj.resolveVoiceChannelPin(closure_0, { status: "skipped" });
            }
          }
        }
        let obj2 = { guildId: tmp24, channels: tmp9Result, selected: tmp18, setPicked: tmp13, pinning: tmp15, failed: tmp17, pin: tmp21, skip: tmp23 };
        cResult[13] = tmp9Result;
        cResult[14] = tmp17;
        cResult[15] = tmp21;
        cResult[16] = tmp15;
        cResult[17] = tmp18;
        cResult[18] = tmp23;
        cResult[19] = undefined;
        cResult[20] = obj2;
      }
    }
    _require = _asyncToGenerator(async (arg0, value) => {
      let obj4;
      let v1;
      let v3;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let tmp4;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              tmp4 = undefined;
              if (null != user) {
                if (null != application_id) {
                  c2(true);
                  c3(false);
                  c2 = 1;
                  c3 = 1;
                  const obj5 = { value: obj4.pinVoiceChannel(user.id, tmp12), done: false };
                  obj4 = tmp4(first1[15]);
                  return obj5;
                }
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp4 = value;
            c2(false);
            if (tmp4) {
              const obj7 = { status: "pinned", channelId: user.id };
              const obj = tmp4(first1[15]);
              const voiceChannelPin = obj.resolveVoiceChannelPin(tmp4, obj7);
            } else {
              c3(true);
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        } catch (tmp20) {
          c3 = 3;
          throw tmp20;
        }
      }
    });
    function t4() {
      return closure_0(...arguments);
    }
    cResult[7] = application_id;
    cResult[8] = arg0;
    cResult[9] = tmp18;
    cResult[10] = t4;
    tmp21 = t4;
  }
  const found = tmp9Result.find((id) => id.id === first1);
  if (found == null) {
    class D {
      constructor() {
        const obj = conjureVoiceChannelPin;
        return obj.resolveVoiceChannelPin(closure_0, { status: "skipped" });
      }
    }
  }
  cResult[4] = tmp9Result;
  cResult[5] = first1;
  cResult[6] = found;
  tmp18 = found;
}) : (function useConjureVoiceChannelPinForm(arg0) {
  let closure_0;
  let selected;
  let setPicked;
  let tmp7;
  let tmp9;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let guild_id;
  const tmp2 = closure_15;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  const channels = tmp2(guild_id);
  let obj2 = selected;
  [dependencyMap, setPicked] = selected.useState(null);
  [tmp7, _asyncToGenerator] = _slicedToArray(selected.useState(false), 2);
  const tmp6 = _slicedToArray(selected.useState(false), 2);
  const tmp8 = _slicedToArray(selected.useState(false), 2);
  [tmp9, _slicedToArray] = tmp8;
  selected = channels.find((id) => id.id === closure_1);
  if (selected == null) {
    selected = null;
  }
  let application_id;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  const items2 = [application_id, arg0, selected];
  const items3 = [arg0];
  const pin = obj2.useCallback(_asyncToGenerator(async (arg0, value) => {
    let obj4;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp4;
            tmp = undefined;
            if (null != selected) {
              if (null != application_id) {
                _asyncToGenerator(true);
                _slicedToArray(false);
                c2 = 1;
                c3 = 1;
                const obj5 = { value: obj4.pinVoiceChannel(selected.id, tmp18), done: false };
                obj4 = tmp(closure_1[15]);
                return obj5;
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          tmp = value;
          closure_129_2(false);
          if (tmp) {
            const obj7 = { status: "pinned", channelId: closure_129_4.id };
            const obj = tmp(closure_1[15]);
            const voiceChannelPin = obj.resolveVoiceChannelPin(closure_129_0, obj7);
          } else {
            closure_129_3(true);
          }
        }
        c3 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      } catch (tmp26) {
        c3 = 3;
        throw tmp26;
      }
    }
  }), items2);
  let guildId;
  const skip = obj2.useCallback(() => {
    const obj = conjureVoiceChannelPin;
    return obj.resolveVoiceChannelPin(closure_0, { status: "skipped" });
  }, items3);
  if (stateFromStores != null) {
    guildId = stateFromStores.guild_id;
  }
  if (guildId == null) {
    guildId = null;
  }
  return { guildId, channels, selected, setPicked, pinning, failed, pin, skip };
});
const result = size.fileFinishedImporting("modules/conjure/voice_channel_pin/useConjureVoiceChannelPin.tsx");

export const useConjureVoiceChannelPinOutcome = tmp3;
export const useConjureVoiceChannelPinForm = tmp4;
