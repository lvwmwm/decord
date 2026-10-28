// Module ID: 12414
// Function ID: 12415
// Name: conjureSettingsAsks
// Dependencies: [32, 19, 4856, 10734, 10751, 558, 576, 10735, 12410, 12347, 504, 12415, 2]
// Exports: conjureSettingsRequestDone, hasOtherOpenSetupAsk

// Module 12414 (conjureSettingsAsks)
import react2 from "react" /* 576 */;
import conjureChatTurns from "conjureChatTurns" /* 10735 */;
import conjureSettingsRequest from "conjureSettingsRequest" /* 12410 */;
import conjureSettingsSummary from "conjureSettingsSummary" /* 12415 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import ConjureChatStore from "ConjureChatStore" /* 10734 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10751 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel, dependencyMap, set2, tmp3;

function subscribe(arg0) {
  let closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set1.delete(closure_0);
  };
}
function markSettingsRequestSaved(arg0) {
  if (!set.has(arg0)) {
    const _Set = Set;
    const items = [];
    items[HermesBuiltin.arraySpread(items, set, 0)] = arg0;
    const self = this;
    const self2 = this;
    set = new Set(items);
    for (const item10021 of set1) {
      let item10021Result = item10021();
      continue;
    }
  }
}
function supersededSettingsRequests(messages) {
  set = new Set();
  set1 = new Set();
  let diff = messages.length - 1;
  let flag = false;
  let flag2 = false;
  if (0 <= diff) {
    do {
      let tmp2 = messages[diff];
      let someResult = flag2;
      let tmp6 = flag;
      let flag3 = flag2;
      if (null != tmp2) {
        tmp6 = flag;
        flag3 = someResult;
        if ("assistant" === tmp2.role) {
          tmp6 = flag;
          flag3 = someResult;
          if (null != tmp2.settingsRequest) {
            let obj3 = conjureChatTurns;
            tmp6 = flag;
            flag3 = someResult;
            if (obj3.turnSettled(tmp2)) {
              let keys = tmp2.settingsRequest.keys;
              if (keys == null) {
                keys = [];
              }
              let tmp7 = flag;
              if (!tmp7) {
                if (0 !== keys.length) {
                  someResult = keys.some((item) => set1.has(item));
                }
                tmp7 = someResult;
              }
              if (tmp7) {
                let addResult = set.add(tmp2.id);
              }
              for (const item10039 of keys) {
                let addResult1 = set1.add(item10039);
                continue;
              }
              let tmp12 = flag || 0 === keys.length;
              tmp6 = tmp12;
              flag3 = true;
            }
          }
        }
      }
      diff = diff - 1;
      flag = tmp6;
      flag2 = flag3;
    } while (0 <= diff);
  }
  return set;
}
let _slicedToArray = _slicedToArray_mod;
let set = new Set();
let set1 = new Set();
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSavedSettingsRequests() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return set;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return react.useSyncExternalStore(subscribe, first);
}) : (function useSavedSettingsRequests() {
  return react.useSyncExternalStore(subscribe, () => set);
});
let closure_11 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureSettingsAsk(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let closure_2;
  let tmp5;
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(27);
  let obj2 = closure_11();
  let tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp5, react] = tmp4;
  if (cResult[0] === arg2) {
    if (cResult[1] === obj2) {
      let tmp6;
      let tmp8;
      let tmp10;
      if (cResult[2] === tmp5) {
        tmp6 = cResult[3];
      }
      let closure_4 = tmp6;
      if (cResult[4] !== arg2) {
        const fn = function y() {
          if (null != closure_2) {
            markSettingsRequestSaved(tmp);
          } else {
            react(true);
          }
        };
        cResult[4] = arg2;
        cResult[5] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureSettingsStore];
        cResult[6] = items;
        tmp10 = items;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === arg0) {
        if (cResult[8] === arg1) {
          let tmp12;
          let tmp13;
          let tmp15;
          if (cResult[9] === tmp6) {
            tmp12 = cResult[10];
            tmp13 = cResult[11];
          }
          const tmpResult = tmp(504);
          const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12, tmp13);
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [ConjureChatStore];
            cResult[12] = items1;
            tmp15 = items1;
          } else {
            tmp15 = cResult[12];
          }
          if (cResult[13] === arg2) {
            let tmp17;
            let tmp18;
            let tmp21;
            if (cResult[14] === arg0) {
              tmp17 = cResult[15];
              tmp18 = cResult[16];
            }
            const tmpResult3 = tmp(504);
            const stateFromStores1 = tmpResult3.useStateFromStores(tmp15, tmp17, tmp18);
            const _Symbol3 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [ConjureSettingsStore, closure_4];
              cResult[17] = items2;
              class B {
                constructor() {
                  settings = closure_6.getSettings(closure_0);
                  if (null == settings) {
                    items = [];
                  } else {
                    tmp2 = closure_0;
                    tmp3 = closure_1;
                    obj = closure_0(closure_1[11]);
                    tmp4 = closure_1;
                    result = obj.conjureSettingsSummary(closure_1, settings, (arg0) => {
                      channel = channel.getChannel(arg0);
                      let name;
                      if (channel != null) {
                        name = channel.name;
                      }
                      if (name == null) {
                        name = null;
                      }
                      return name;
                    });
                    items = result.map((text) => text.text);
                  }
                  return items;
                }
              }
            } else {
              tmp21 = cResult[17];
            }
            if (cResult[18] === arg0) {
              let tmp24;
              let tmp25;
              if (cResult[19] === arg1) {
                tmp24 = cResult[20];
                tmp25 = cResult[21];
              }
              const tmpResult4 = tmp(504);
              const stateFromStoresArray = tmpResult4.useStateFromStoresArray(tmp21, tmp25, tmp24);
              if (cResult[22] === stateFromStores) {
                if (cResult[23] === tmp8) {
                  if (cResult[24] === stateFromStoresArray) {
                    let tmp27;
                    if (cResult[25] === stateFromStores1) {
                      tmp27 = cResult[26];
                    }
                    return tmp27;
                  }
                }
              }
              const obj3 = { done: stateFromStores, superseded: stateFromStores1, summary: null, markSaved: tmp8 };
              class B {
                constructor() {
                  settings = closure_6.getSettings(closure_0);
                  if (null == settings) {
                    items = [];
                  } else {
                    tmp2 = closure_0;
                    tmp3 = closure_1;
                    obj = closure_0(closure_1[11]);
                    tmp4 = closure_1;
                    result = obj.conjureSettingsSummary(closure_1, settings, (arg0) => {
                      channel = channel.getChannel(arg0);
                      let name;
                      if (channel != null) {
                        name = channel.name;
                      }
                      if (name == null) {
                        name = null;
                      }
                      return name;
                    });
                    items = result.map((text) => text.text);
                  }
                  return items;
                }
              }
              class A {
                constructor() {
                  const settings = ConjureSettingsStore.getSettings(closure_0);
                  let flag = false;
                  const tmp = closure_1;
                  if (closure_4) {
                    flag = false;
                    if (null != settings) {
                      const obj = conjureSettingsRequest;
                      const result = obj.conjureSettingsRequestKeys(tmp, settings);
                      let tmp6 = result.length > 0;
                      const tmp4 = require;
                      if (tmp6) {
                        const obj2 = { keys: result };
                        const tmp4Result = tmp4(12410);
                        tmp6 = !tmp4Result.conjureSettingsRequestBlocks(obj2, settings);
                      }
                      flag = tmp6;
                    }
                  }
                  return flag;
                }
              }
              cResult[22] = stateFromStores;
              cResult[23] = tmp8;
              cResult[24] = stateFromStoresArray;
              cResult[25] = stateFromStores1;
              cResult[26] = obj3;
              tmp27 = obj3;
            }
            class B {
              constructor() {
                settings = closure_6.getSettings(closure_0);
                if (null == settings) {
                  items = [];
                } else {
                  tmp2 = closure_0;
                  tmp3 = closure_1;
                  obj = closure_0(closure_1[11]);
                  tmp4 = closure_1;
                  result = obj.conjureSettingsSummary(closure_1, settings, (arg0) => {
                    channel = channel.getChannel(arg0);
                    let name;
                    if (channel != null) {
                      name = channel.name;
                    }
                    if (name == null) {
                      name = null;
                    }
                    return name;
                  });
                  items = result.map((text) => text.text);
                }
                return items;
              }
            }
            const items3 = [, ];
            class A {
              constructor() {
                const settings = ConjureSettingsStore.getSettings(closure_0);
                let flag = false;
                const tmp = closure_1;
                if (closure_4) {
                  flag = false;
                  if (null != settings) {
                    const obj = conjureSettingsRequest;
                    const result = obj.conjureSettingsRequestKeys(tmp, settings);
                    let tmp6 = result.length > 0;
                    const tmp4 = require;
                    if (tmp6) {
                      const obj2 = { keys: result };
                      const tmp4Result = tmp4(12410);
                      tmp6 = !tmp4Result.conjureSettingsRequestBlocks(obj2, settings);
                    }
                    flag = tmp6;
                  }
                }
                return flag;
              }
            }
            items3[1] = arg1;
            cResult[18] = arg0;
            cResult[19] = arg1;
            cResult[20] = items3;
            cResult[21] = B;
            tmp25 = B;
            tmp24 = items3;
          }
          const items4 = [, ];
          class A {
            constructor() {
              const settings = ConjureSettingsStore.getSettings(closure_0);
              let flag = false;
              const tmp = closure_1;
              if (closure_4) {
                flag = false;
                if (null != settings) {
                  const obj = conjureSettingsRequest;
                  const result = obj.conjureSettingsRequestKeys(tmp, settings);
                  let tmp6 = result.length > 0;
                  const tmp4 = require;
                  if (tmp6) {
                    const obj2 = { keys: result };
                    const tmp4Result = tmp4(12410);
                    tmp6 = !tmp4Result.conjureSettingsRequestBlocks(obj2, settings);
                  }
                  flag = tmp6;
                }
              }
              return flag;
            }
          }
          items4[1] = arg2;
          cResult[13] = arg2;
          cResult[14] = arg0;
          cResult[15] = tmp19;
          cResult[16] = items4;
          tmp18 = items4;
          tmp17 = tmp19;
        }
      }
      class A {
        constructor() {
          const settings = ConjureSettingsStore.getSettings(closure_0);
          let flag = false;
          const tmp = closure_1;
          if (closure_4) {
            flag = false;
            if (null != settings) {
              const obj = conjureSettingsRequest;
              const result = obj.conjureSettingsRequestKeys(tmp, settings);
              let tmp6 = result.length > 0;
              const tmp4 = require;
              if (tmp6) {
                const obj2 = { keys: result };
                const tmp4Result = tmp4(12410);
                tmp6 = !tmp4Result.conjureSettingsRequestBlocks(obj2, settings);
              }
              flag = tmp6;
            }
          }
          return flag;
        }
      }
      const items5 = [arg0, arg1, tmp6];
      cResult[7] = arg0;
      cResult[8] = arg1;
      cResult[9] = tmp6;
      cResult[10] = A;
      cResult[11] = items5;
      tmp13 = items5;
      tmp12 = A;
    }
  }
  let hasItem = tmp5;
  if (null != arg2) {
    hasItem = obj2.has(arg2);
  }
  cResult[0] = arg2;
  cResult[1] = obj2;
  cResult[2] = tmp5;
  cResult[3] = hasItem;
  tmp6 = hasItem;
}) : (function useConjureSettingsAsk(arg0, arg1, arg2) {
  let callback;
  let closure_0;
  let closure_1;
  let closure_2;
  let hasItem;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj4;
  let obj5;
  let obj6;
  let tmp2;
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
  let obj = closure_11();
  let obj2 = react;
  let tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, react] = tmp;
  if (null != arg2) {
    hasItem = obj.has(arg2);
  }
  let items = [arg2];
  const obj3 = {
    done: obj4.useStateFromStores(items1, () => {
      const settings = ConjureSettingsStore.getSettings(closure_0);
      let flag = false;
      const tmp = closure_1;
      if (hasItem) {
        flag = false;
        if (null != settings) {
          const obj = conjureSettingsRequest;
          const result = obj.conjureSettingsRequestKeys(tmp, settings);
          let tmp6 = result.length > 0;
          const tmp4 = require;
          if (tmp6) {
            const obj2 = { keys: result };
            const tmp4Result = tmp4(12410);
            tmp6 = !tmp4Result.conjureSettingsRequestBlocks(obj2, settings);
          }
          flag = tmp6;
        }
      }
      return flag;
    }, items2),
    superseded: obj5.useStateFromStores(items3, () => {
      hasItem = null != closure_2;
      if (hasItem) {
        const obj = supersededSettingsRequests(ConjureChatStore.getMessages(closure_0));
        hasItem = obj.has(tmp);
      }
      return hasItem;
    }, items4),
    summary: obj6.useStateFromStoresArray(items5, () => {
      let items;
      const settings = ConjureSettingsStore.getSettings(closure_0);
      if (null == settings) {
        items = [];
      } else {
        const obj = conjureSettingsSummary;
        const result = obj.conjureSettingsSummary(closure_1, settings, (arg0) => {
          channel = channel.getChannel(arg0);
          let name;
          if (channel != null) {
            name = channel.name;
          }
          if (name == null) {
            name = null;
          }
          return name;
        });
        items = result.map((text) => text.text);
      }
      return items;
    }, items6),
    markSaved: callback
  };
  callback = obj2.useCallback(() => {
    if (null != closure_2) {
      markSettingsRequestSaved(tmp);
    } else {
      react(true);
    }
  }, items);
  items1 = [ConjureSettingsStore];
  items2 = [arg0, arg1, hasItem];
  items3 = [ConjureChatStore];
  items4 = [arg0, arg2];
  obj4 = require("get initialized");
  items5 = [ConjureSettingsStore, hasItem];
  items6 = [arg0, arg1];
  obj5 = require("get initialized");
  obj6 = require("get initialized");
  return obj3;
});
function conjureSettingsRequestDone(settingsRequest, settings, arg2) {
  const tmp = arg2;
  if (tmp) {
    if (null != settings) {
      const obj = conjureSettingsRequest;
      const result = obj.conjureSettingsRequestKeys(settingsRequest, settings);
      let tmp7 = result.length > 0;
      const tmp5 = require;
      if (tmp7) {
        const obj2 = { keys: result };
        const tmp5Result = tmp5(12410);
        tmp7 = !tmp5Result.conjureSettingsRequestBlocks(obj2, settings);
      }
      return tmp7;
    }
  }
  return false;
}
let result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsAsks.tsx");

export { markSettingsRequestSaved };
export const useSavedSettingsRequests = tmp4;
export { supersededSettingsRequests };
export { conjureSettingsRequestDone };
export const hasOtherOpenSetupAsk = function hasOtherOpenSetupAsk(arr, arg1, secrets, arg3) {
  let closure_0;
  _require = arg1;
  dependencyMap = secrets;
  set = arg3;
  let tmp = require("ConjureSecretRequestState");
  secrets = undefined;
  const secretRequestStatuses = tmp.secretRequestStatuses;
  if (secrets != null) {
    secrets = secrets.secrets;
  }
  let closure_3 = secretRequestStatuses(arr, secrets);
  set2 = supersededSettingsRequests(arr);
  return arr.some((role) => {
    let tmp = "assistant" !== role.role || role.id === closure_0;
    if (!tmp) {
      const obj = conjureChatTurns;
      tmp = !obj.turnSettled(role);
    }
    let tmp5 = !tmp;
    if (tmp5) {
      let tmp7 = null != role.secretRequest && "open" === closure_3.get(role.render_id);
      if (!tmp7) {
        let tmp9 = null != role.settingsRequest && !set2.has(role.id);
        if (tmp9) {
          const settingsRequest = role.settingsRequest;
          let flag = false;
          if (set.has(role.id)) {
            flag = false;
            if (null != secrets) {
              const obj2 = conjureSettingsRequest;
              const result = obj2.conjureSettingsRequestKeys(settingsRequest, tmp11);
              let tmp15 = result.length > 0;
              const tmp13 = require;
              if (tmp15) {
                const obj3 = { keys: result };
                const tmp13Result = tmp13(12410);
                tmp15 = !tmp13Result.conjureSettingsRequestBlocks(obj3, tmp11);
              }
              flag = tmp15;
            }
          }
          tmp9 = !flag;
        }
        tmp7 = tmp9;
      }
      tmp5 = tmp7;
    }
    return tmp5;
  });
};
export const useConjureSettingsAsk = tmp5;
