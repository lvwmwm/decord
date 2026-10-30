// Module ID: 12619
// Function ID: 12620
// Name: conjureSettingsAsks
// Dependencies: [32, 19, 4858, 10831, 10849, 10832, 12580, 12553, 504, 12620, 2]
// Exports: conjureSettingsRequestDone, hasOtherOpenSetupAsk, useConjureSettingsAsk, useSavedSettingsRequests

// Module 12619 (conjureSettingsAsks)
import conjureChatTurns from "conjureChatTurns" /* 10832 */;
import conjureSettingsRequest from "conjureSettingsRequest" /* 12580 */;
import conjureSettingsSummary from "conjureSettingsSummary" /* 12620 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10849 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel, dependencyMap, set2;

const f102478 = () => set;
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
let result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsAsks.tsx");

export { markSettingsRequestSaved };
export function useSavedSettingsRequests() {
  return react.useSyncExternalStore(subscribe, f102478);
}
export { supersededSettingsRequests };
export function conjureSettingsRequestDone(settingsRequest, settings, arg2) {
  const tmp = arg2;
  if (tmp) {
    if (null != settings) {
      const obj = conjureSettingsRequest;
      const result = obj.conjureSettingsRequestKeys(settingsRequest, settings);
      let tmp7 = result.length > 0;
      const tmp5 = require;
      if (tmp7) {
        const obj2 = { keys: result };
        const tmp5Result = tmp5(12580);
        tmp7 = !tmp5Result.conjureSettingsRequestBlocks(obj2, settings);
      }
      return tmp7;
    }
  }
  return false;
}
export function hasOtherOpenSetupAsk(arr, arg1, secrets, arg3) {
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
                const tmp13Result = tmp13(12580);
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
}
export function useConjureSettingsAsk(projectId, request, askId) {
  let callback;
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
  _require = projectId;
  dependencyMap = request;
  _slicedToArray = askId;
  let obj = react;
  const syncExternalStore = react.useSyncExternalStore(subscribe, f102478);
  let tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, react] = tmp;
  if (null != askId) {
    hasItem = syncExternalStore.has(askId);
  }
  let items = [askId];
  let obj2 = {
    done: obj4.useStateFromStores(items1, () => {
      const settings = ConjureSettingsStore.getSettings(projectId);
      let flag = false;
      const tmp = request;
      if (hasItem) {
        flag = false;
        if (null != settings) {
          const obj = conjureSettingsRequest;
          const result = obj.conjureSettingsRequestKeys(tmp, settings);
          let tmp6 = result.length > 0;
          const tmp4 = require;
          if (tmp6) {
            const obj2 = { keys: result };
            const tmp4Result = tmp4(12580);
            tmp6 = !tmp4Result.conjureSettingsRequestBlocks(obj2, settings);
          }
          flag = tmp6;
        }
      }
      return flag;
    }, items2),
    superseded: obj5.useStateFromStores(items3, () => {
      hasItem = null != askId;
      if (hasItem) {
        const obj = supersededSettingsRequests(ConjureChatStore.getMessages(projectId));
        hasItem = obj.has(tmp);
      }
      return hasItem;
    }, items4),
    summary: obj6.useStateFromStoresArray(items5, () => {
      let items;
      const settings = ConjureSettingsStore.getSettings(projectId);
      if (null == settings) {
        items = [];
      } else {
        const obj = conjureSettingsSummary;
        const result = obj.conjureSettingsSummary(request, settings, (arg0) => {
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
  callback = obj.useCallback(() => {
    if (null != askId) {
      markSettingsRequestSaved(tmp);
    } else {
      react(true);
    }
  }, items);
  items1 = [ConjureSettingsStore];
  items2 = [projectId, request, hasItem];
  items3 = [ConjureChatStore];
  items4 = [projectId, askId];
  obj4 = require("get initialized");
  items5 = [ConjureSettingsStore, hasItem];
  items6 = [projectId, request];
  obj5 = require("get initialized");
  obj6 = require("get initialized");
  return obj2;
}
