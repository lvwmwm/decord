// Module ID: 18656
// Function ID: 18657
// Name: conjureSettingsAsks
// Dependencies: [19, 4892, 7659, 7710, 18657, 7660, 1112, 4245, 18529, 504, 18658, 2]
// Exports: conjureSettingsRequestDone, conjureSettingsRequestSaved, markSettingsRequestSaved, useConjureSettingsAskSource, useSavedSettingsRequests

// Module 18656 (conjureSettingsAsks)
import intl2 from "intl" /* 1112 */;
import conjureSettingsRequest from "conjureSettingsRequest" /* 18529 */;
import conjureRemixSettingsRequest from "conjureRemixSettingsRequest" /* 18657 */;
import conjureSettingsSummary from "conjureSettingsSummary" /* 18658 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import ConjureChatStore from "ConjureChatStore" /* 7659 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 7710 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel, dependencyMap;

const f116158 = () => set;
function subscribe(arg0) {
  let closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set1.delete(closure_0);
  };
}
function messageSettingsRequest(role) {
  if ("assistant" !== role.role) {
    return null;
  } else {
    const obj = conjureRemixSettingsRequest;
    let result = obj.conjureRemixSettingsRequest(role.projectEvent);
    const tmp = require;
    if (null == result) {
      let tmp5 = null;
      const tmpResult = tmp(7660);
      if (tmpResult.turnSettled(role)) {
        let settingsRequest = role.settingsRequest;
        if (settingsRequest == null) {
          settingsRequest = null;
        }
        tmp5 = settingsRequest;
      }
      result = tmp5;
    }
    return result;
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
      let tmp6 = null;
      if (null != tmp2) {
        tmp6 = messageSettingsRequest(tmp2);
      }
      let tmp8 = flag;
      let flag3 = someResult;
      if (null != tmp2) {
        tmp8 = flag;
        flag3 = someResult;
        if (null != tmp6) {
          let keys = tmp6.keys;
          if (keys == null) {
            keys = [];
          }
          let tmp9 = flag;
          if (!tmp9) {
            if (0 !== keys.length) {
              someResult = keys.some((item) => set1.has(item));
            }
            tmp9 = someResult;
          }
          if (tmp9) {
            let addResult = set.add(tmp2.id);
          }
          for (const item10040 of keys) {
            let addResult1 = set1.add(item10040);
            continue;
          }
          let tmp14 = flag || 0 === keys.length;
          tmp8 = tmp14;
          flag3 = true;
        }
      }
      diff = diff - 1;
      flag = tmp8;
      flag2 = flag3;
    } while (0 <= diff);
  }
  return set;
}
function confirmedSettingsRequests(messages) {
  set = new Set();
  const intl = intl2.intl;
  let diff = messages.length - 1;
  let flag = false;
  if (0 <= diff) {
    do {
      let tmp3 = messages[diff];
      let tmp6 = flag;
      if (null != tmp3) {
        let tmp14;
        if ("user" === tmp3.role) {
          let tmp16 = flag;
          if (!tmp16) {
            let str = tmp3.content;
            tmp16 = str.trim() === tmp;
          }
          tmp14 = tmp16;
        } else {
          let tmp13 = flag;
          if (tmp13) {
            let tmp7 = null;
            if ("assistant" === tmp3.role) {
              let tmp8 = require;
              let obj2 = conjureRemixSettingsRequest;
              let result = obj2.conjureRemixSettingsRequest(tmp3.projectEvent);
              if (null == result) {
                let tmp8Result = tmp8(7660);
                let tmp11 = null;
                if (tmp8Result.turnSettled(tmp3)) {
                  let settingsRequest = tmp3.settingsRequest;
                  if (settingsRequest == null) {
                    settingsRequest = null;
                  }
                  tmp11 = settingsRequest;
                }
                result = tmp11;
              }
              tmp7 = result;
            }
            tmp13 = null != tmp7;
          }
          tmp14 = flag;
          if (tmp13) {
            let addResult = set.add(tmp3.id);
            tmp14 = flag;
          }
        }
        tmp6 = tmp14;
      }
      diff = diff - 1;
      flag = tmp6;
    } while (0 <= diff);
  }
  return set;
}
let set = new Set();
let set1 = new Set();
let closure_13 = [];
let result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsAsks.tsx");

export function markSettingsRequestSaved(askId) {
  if (!set.has(askId)) {
    const _Set = Set;
    const items = [];
    items[HermesBuiltin.arraySpread(items, set, 0)] = askId;
    const self = this;
    const self2 = this;
    set = new Set(items);
    for (const item10021 of set1) {
      let item10021Result = item10021();
      continue;
    }
  }
}
export function useSavedSettingsRequests() {
  return react.useSyncExternalStore(subscribe, f116158);
}
export { messageSettingsRequest };
export { supersededSettingsRequests };
export { confirmedSettingsRequests };
export function conjureSettingsRequestDone(request2, settings, saved) {
  const tmp = saved;
  if (tmp) {
    if (null != settings) {
      const obj = conjureSettingsRequest;
      const result = obj.conjureSettingsRequestKeys(request2, settings);
      let tmp7 = result.length > 0;
      const tmp5 = require;
      if (tmp7) {
        const obj2 = { keys: result };
        const tmp5Result = tmp5(18529);
        tmp7 = 0 === tmp5Result.conjureSettingsRequestNeeded(obj2, settings, true);
      }
      return tmp7;
    }
  }
  return false;
}
export function conjureSettingsRequestSaved(id, messages, set) {
  let hasItem = set.has(id);
  if (!hasItem) {
    const obj = confirmedSettingsRequests(messages);
    hasItem = obj.has(id);
  }
  return hasItem;
}
export function useConjureSettingsAskSource(projectId, memo, askId) {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj2;
  let obj3;
  let obj4;
  let syncExternalStore;
  _require = projectId;
  let closure_1 = memo;
  dependencyMap = askId;
  syncExternalStore = syncExternalStore.useSyncExternalStore(subscribe, f116158);
  let obj = {
    saved: obj2.useStateFromStores(items, () => {
      let tmp2 = null != askId;
      if (tmp2) {
        const messages = ConjureChatStore.getMessages(projectId);
        let hasItem = syncExternalStore.has(tmp);
        if (!hasItem) {
          const obj = confirmedSettingsRequests(messages);
          hasItem = obj.has(tmp);
        }
        tmp2 = hasItem;
      }
      return tmp2;
    }, items1),
    superseded: obj3.useStateFromStores(items2, () => {
      let hasItem = null != askId;
      if (hasItem) {
        const obj = supersededSettingsRequests(ConjureChatStore.getMessages(projectId));
        hasItem = obj.has(tmp);
      }
      return hasItem;
    }, items3),
    summary: obj4.useStateFromStoresArray(items4, () => {
      const settings = ConjureSettingsStore.getSettings(projectId);
      if (null != memo) {
        let mapped;
        if (null != settings) {
          const obj = conjureSettingsSummary;
          const result = obj.conjureSettingsSummary(tmp2, settings, (arg0) => {
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
          mapped = result.map((text) => text.text);
        }
        return mapped;
      }
      mapped = closure_13;
    }, items5)
  };
  items = [ConjureChatStore];
  items1 = [projectId, askId, syncExternalStore];
  items2 = [ConjureChatStore];
  items3 = [projectId, askId];
  obj2 = require("get initialized");
  items4 = [ConjureSettingsStore, ChannelStore];
  items5 = [projectId, memo];
  obj3 = require("get initialized");
  obj4 = require("get initialized");
  return obj;
}
