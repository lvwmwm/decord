// Module ID: 12600
// Function ID: 12601
// Name: useSavedMessagesForPage
// Dependencies: [32, 19, 9651, 9652, 558, 576, 12601, 12603, 1388, 504, 2]

// Module 12600 (useSavedMessagesForPage)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9652 */;
import useRefreshSavedMessagesDefault from "useRefreshSavedMessages" /* 12601 */;
import useBookmarksPaginationDefault from "useBookmarksPagination" /* 12603 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9651 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, map;

const f112669 = (saveData) => saveData.saveData;
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
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSavedMessagesForPage(arg0) {
  let closure_2;
  let closure_3;
  let first;
  let obj3;
  let tmp10;
  let tmp11;
  let tmp16;
  let tmp18;
  let tmp4;
  let tmp7;
  let ALL = arg0;
  let tmp = ALL;
  let tmp2 = dependencyMap;
  const obj = ALL(576);
  const cResult = obj.c(12);
  if (undefined === arg0) {
    ALL = tmp(9652).SavedMessageSortTypes.ALL;
  }
  if (cResult[0] !== ALL) {
    const fn = function v() {
      let messageBookmarks;
      const tmp = ALL;
      if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
        messageBookmarks = SavedMessagesStore.getMessageBookmarks();
      } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === tmp) {
        messageBookmarks = SavedMessagesStore.getMessageReminders();
      } else {
        messageBookmarks = SavedMessagesStore.getSavedMessages();
      }
      return messageBookmarks.map(f112669);
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
    const fn2 = function p() {
      let ref;
      let lastChanged = SavedMessagesStore.getLastChanged();
      function handleChange() {
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
              } else if (tmp4(9652).SavedMessageSortTypes.REMINDER === tmp3) {
                messageBookmarks = obj.getMessageReminders();
              } else {
                messageBookmarks = obj.getSavedMessages();
              }
              tmp2(messageBookmarks.map(f112669));
            }
          }
          closure_2((arg0) => {
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
      SavedMessagesStore.addChangeListener(handleChange);
      return () => {
        SavedMessagesStore.removeChangeListener(handleChange);
      };
    };
    let items = [ALL];
    cResult[3] = ALL;
    cResult[4] = fn2;
    cResult[5] = items;
    tmp11 = items;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const effect = obj2.useEffect(tmp10, tmp11);
  first(12601)();
  const tmp14 = first(12603);
  const tmp14Result = tmp14(ALL !== tmp(9652).SavedMessageSortTypes.REMINDER);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SavedMessagesStore];
    cResult[6] = items1;
    tmp16 = items1;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] !== first) {
    class L {
      constructor() {
        let savedMessage;
        const mapped = first.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
    cResult[7] = first;
    cResult[8] = L;
    tmp18 = L;
  } else {
    class L {
      constructor() {
        let savedMessage;
        const mapped = first.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp16, tmp18);
  if (cResult[9] === tmp14Result) {
    class L {
      constructor() {
        let savedMessage;
        const mapped = first.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
    return obj3;
  }
  obj3 = { savedMessages: stateFromStoresArray };
  const merged = Object.assign(tmp14Result);
  cResult[9] = tmp14Result;
  cResult[10] = stateFromStoresArray;
  cResult[11] = obj3;
}) : (function useSavedMessagesForPage() {
  let _undefined;
  let c1;
  let c2;
  let closure_3;
  let items1;
  let obj2;
  let ALL = arg0;
  if (arg0 === undefined) {
    let tmp = ALL;
    let tmp2 = dependencyMap;
    ALL = ALL(9652).SavedMessageSortTypes.ALL;
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
    return messageBookmarks.map(f112669);
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
            } else if (tmp4(9652).SavedMessageSortTypes.REMINDER === tmp3) {
              messageBookmarks = obj.getMessageReminders();
            } else {
              messageBookmarks = obj.getSavedMessages();
            }
            tmp2(messageBookmarks.map(f112669));
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
  const tmp6 = useBookmarksPaginationDefault;
  const obj = {
    savedMessages: obj2.useStateFromStoresArray(items1, () => {
      let savedMessage;
      const mapped = _undefined.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
      return mapped.filter(GlobalUtils.isNotNullish);
    })
  };
  items1 = [SavedMessagesStore];
  const tmp6Result = tmp6(ALL !== ALL(9652).SavedMessageSortTypes.REMINDER);
  obj2 = ALL(504);
  const merged = Object.assign(tmp6Result);
  return obj;
});
const result = size.fileFinishedImporting("modules/saved_messages/useSavedMessagesForPage.tsx");

export default tmp2;
