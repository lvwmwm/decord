// Module ID: 12862
// Function ID: 12863
// Name: useSavedMessagesForPage
// Dependencies: [32, 19, 11025, 7289, 558, 576, 12863, 1376, 504, 2]

// Module 12862 (useSavedMessagesForPage)
import GlobalUtils from "GlobalUtils" /* 1376 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7289 */;
import useRefreshSavedMessagesDefault from "useRefreshSavedMessages" /* 12863 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11025 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let addChangeListenerResult, closure_0, dependencyMap, importDefault, map;

const f112874 = (saveData) => saveData.saveData;
function getSavedMessagesForType(arg0) {
  if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === arg0) {
    return SavedMessagesStore.getMessageBookmarks();
  } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === arg0) {
    return SavedMessagesStore.getMessageReminders();
  } else {
    return SavedMessagesStore.getSavedMessages();
  }
}
let _slicedToArray = _slicedToArray_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_2;
  let closure_3;
  let first;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp4;
  let tmp7;
  let ALL = arg0;
  let tmp = ALL;
  let tmp2 = dependencyMap;
  const obj = ALL(576);
  const cResult = obj.c(9);
  if (undefined === arg0) {
    ALL = tmp(7289).SavedMessageSortTypes.ALL;
  }
  if (cResult[0] !== ALL) {
    const fn = function u() {
      let messageBookmarks;
      const tmp = ALL;
      if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
        messageBookmarks = SavedMessagesStore.getMessageBookmarks();
      } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === tmp) {
        messageBookmarks = SavedMessagesStore.getMessageReminders();
      } else {
        messageBookmarks = SavedMessagesStore.getSavedMessages();
      }
      return messageBookmarks.map(f112874);
    };
    cResult[0] = ALL;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  [first, dependencyMap] = react.useState(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const isStale = SavedMessagesStore.getIsStale();
    cResult[2] = isStale;
    tmp7 = isStale;
  } else {
    tmp7 = cResult[2];
  }
  _slicedToArray = obj2.useRef(tmp7);
  if (cResult[3] !== ALL) {
    class M {
      constructor() {
        closure_0 = closure_1_5.getLastChanged();
        handleChange = function handleChange() {
          lastChanged = SavedMessagesStore.getLastChanged();
          if (lastChanged !== lastChanged) {
            if (ref.current) {
              if (!SavedMessagesStore.getIsStale()) {
                let messageBookmarks;
                tmp9.current = false;
                let tmp2 = closure_2;
                let tmp3 = ALL;
                let tmp5 = dependencyMap;
                const tmp4 = require;
                if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
                  messageBookmarks = obj.getMessageBookmarks();
                } else if (tmp4(7289).SavedMessageSortTypes.REMINDER === tmp3) {
                  messageBookmarks = obj.getMessageReminders();
                } else {
                  messageBookmarks = obj.getSavedMessages();
                }
                tmp2(messageBookmarks.map(f112874));
              }
            }
            closure_2(() => { /* body not rendered: F150976 */ });
          }
        };
        addChangeListenerResult = closure_1_5.addChangeListener(handleChange);
        return () => {
          SavedMessagesStore.removeChangeListener(handleChange);
        };
      }
    }
    let items = [ALL];
    cResult[3] = ALL;
    cResult[4] = M;
    cResult[5] = items;
    tmp11 = items;
    tmp10 = M;
  } else {
    class M {
      constructor() {
        closure_0 = closure_1_5.getLastChanged();
        handleChange = function handleChange() {
          lastChanged = SavedMessagesStore.getLastChanged();
          if (lastChanged !== lastChanged) {
            if (ref.current) {
              if (!SavedMessagesStore.getIsStale()) {
                let messageBookmarks;
                tmp9.current = false;
                let tmp2 = closure_2;
                let tmp3 = ALL;
                let tmp5 = dependencyMap;
                const tmp4 = require;
                if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
                  messageBookmarks = obj.getMessageBookmarks();
                } else if (tmp4(7289).SavedMessageSortTypes.REMINDER === tmp3) {
                  messageBookmarks = obj.getMessageReminders();
                } else {
                  messageBookmarks = obj.getSavedMessages();
                }
                tmp2(messageBookmarks.map(f112874));
              }
            }
            closure_2(() => { /* body not rendered: F150976 */ });
          }
        };
        addChangeListenerResult = closure_1_5.addChangeListener(handleChange);
        return () => {
          SavedMessagesStore.removeChangeListener(handleChange);
        };
      }
    }
    tmp11 = cResult[5];
  }
  const effect = obj2.useEffect(tmp10, tmp11);
  first(12863)();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        closure_0 = closure_1_5.getLastChanged();
        handleChange = function handleChange() {
          lastChanged = SavedMessagesStore.getLastChanged();
          if (lastChanged !== lastChanged) {
            if (ref.current) {
              if (!SavedMessagesStore.getIsStale()) {
                let messageBookmarks;
                tmp9.current = false;
                let tmp2 = closure_2;
                let tmp3 = ALL;
                let tmp5 = dependencyMap;
                const tmp4 = require;
                if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
                  messageBookmarks = obj.getMessageBookmarks();
                } else if (tmp4(7289).SavedMessageSortTypes.REMINDER === tmp3) {
                  messageBookmarks = obj.getMessageReminders();
                } else {
                  messageBookmarks = obj.getSavedMessages();
                }
                tmp2(messageBookmarks.map(f112874));
              }
            }
            closure_2(() => { /* body not rendered: F150976 */ });
          }
        };
        addChangeListenerResult = closure_1_5.addChangeListener(handleChange);
        return () => {
          SavedMessagesStore.removeChangeListener(handleChange);
        };
      }
    }
    const items1 = [SavedMessagesStore];
    cResult[6] = items1;
    tmp14 = items1;
  } else {
    class M {
      constructor() {
        closure_0 = closure_1_5.getLastChanged();
        handleChange = function handleChange() {
          lastChanged = SavedMessagesStore.getLastChanged();
          if (lastChanged !== lastChanged) {
            if (ref.current) {
              if (!SavedMessagesStore.getIsStale()) {
                let messageBookmarks;
                tmp9.current = false;
                let tmp2 = closure_2;
                let tmp3 = ALL;
                let tmp5 = dependencyMap;
                const tmp4 = require;
                if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
                  messageBookmarks = obj.getMessageBookmarks();
                } else if (tmp4(7289).SavedMessageSortTypes.REMINDER === tmp3) {
                  messageBookmarks = obj.getMessageReminders();
                } else {
                  messageBookmarks = obj.getSavedMessages();
                }
                tmp2(messageBookmarks.map(f112874));
              }
            }
            closure_2(() => { /* body not rendered: F150976 */ });
          }
        };
        addChangeListenerResult = closure_1_5.addChangeListener(handleChange);
        return () => {
          SavedMessagesStore.removeChangeListener(handleChange);
        };
      }
    }
  }
  if (cResult[7] !== first) {
    class C {
      constructor() {
        mapped = closure_1.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
        return mapped.filter(closure_0(closure_2[7]).isNotNullish);
      }
    }
    cResult[7] = first;
    cResult[8] = C;
    tmp15 = C;
  } else {
    class C {
      constructor() {
        mapped = closure_1.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
        return mapped.filter(closure_0(closure_2[7]).isNotNullish);
      }
    }
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(tmp14, tmp15);
}) : (() => {
  let _undefined;
  let c1;
  let c2;
  let closure_3;
  let ALL = arg0;
  if (arg0 === undefined) {
    let tmp = ALL;
    let tmp2 = dependencyMap;
    ALL = ALL(7289).SavedMessageSortTypes.ALL;
  }
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let tmp3 = _slicedToArray(react.useState(() => {
    let messageBookmarks;
    const tmp = ALL;
    if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
      messageBookmarks = SavedMessagesStore.getMessageBookmarks();
    } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === tmp) {
      messageBookmarks = SavedMessagesStore.getMessageReminders();
    } else {
      messageBookmarks = SavedMessagesStore.getSavedMessages();
    }
    return messageBookmarks.map(f112874);
  }), 2);
  [c1, c2] = tmp3;
  _slicedToArray = react.useRef(SavedMessagesStore.getIsStale());
  let items = [ALL];
  const effect = react.useEffect(() => {
    let ref;
    function handleChange() {
      lastChanged = SavedMessagesStore.getLastChanged();
      if (lastChanged !== lastChanged) {
        if (ref.current) {
          if (!SavedMessagesStore.getIsStale()) {
            let messageBookmarks;
            tmp9.current = false;
            let tmp2 = c2;
            let tmp3 = ALL;
            let tmp5 = dependencyMap;
            const tmp4 = require;
            if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
              messageBookmarks = obj.getMessageBookmarks();
            } else if (tmp4(7289).SavedMessageSortTypes.REMINDER === tmp3) {
              messageBookmarks = obj.getMessageReminders();
            } else {
              messageBookmarks = obj.getSavedMessages();
            }
            tmp2(messageBookmarks.map(f112874));
          }
        }
        c2((arg0) => {
          let items = [...arg0];
          const arr2 = closure_2_6(lastChanged);
          map = new Map(arr2.map((saveData) => {
            const items = [saveData.saveData.messageId, saveData];
            return items;
          }));
          const iter = arg0[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp2 = nextResult;
            if (map.has(nextResult.messageId)) {
              let deleteResult = map.delete(tmp2.messageId);
            } else {
              let spliceResult = items.splice(items.indexOf(tmp2), 1);
            }
            continue;
          }
          const values = map.values();
          for (const item10046 of values) {
            let arr = items.push(item10046.saveData);
            continue;
          }
          return items;
        });
      }
    }
    let lastChanged = SavedMessagesStore.getLastChanged();
    SavedMessagesStore.addChangeListener(handleChange);
    return () => {
      SavedMessagesStore.removeChangeListener(handleChange);
    };
  }, items);
  let tmp5 = useRefreshSavedMessagesDefault();
  const obj = ALL(504);
  const items1 = [SavedMessagesStore];
  return obj.useStateFromStoresArray(items1, () => {
    let savedMessage;
    const mapped = _undefined.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
});
const result = size.fileFinishedImporting("modules/saved_messages/useSavedMessagesForPage.tsx");

export default tmp2;
