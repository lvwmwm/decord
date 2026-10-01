// Module ID: 12860
// Function ID: 12861
// Name: useSavedMessagesForPage
// Dependencies: [32, 19, 11155, 7285, 12861, 504, 1370, 2]
// Exports: default

// Module 12860 (useSavedMessagesForPage)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7285 */;
import useRefreshSavedMessagesDefault from "useRefreshSavedMessages" /* 12861 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11155 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, map;

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
const result = size.fileFinishedImporting("modules/saved_messages/useSavedMessagesForPage.tsx");

export default function useSavedMessagesForPage() {
  let _undefined;
  let c1;
  let c2;
  let closure_3;
  const f97147 = (saveData) => saveData.saveData;
  let ALL = arg0;
  if (arg0 === undefined) {
    let tmp = ALL;
    let tmp2 = dependencyMap;
    ALL = ALL(7285).SavedMessageSortTypes.ALL;
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
    return messageBookmarks.map(f97147);
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
            } else if (tmp4(7285).SavedMessageSortTypes.REMINDER === tmp3) {
              messageBookmarks = obj.getMessageReminders();
            } else {
              messageBookmarks = obj.getSavedMessages();
            }
            tmp2(messageBookmarks.map(f97147));
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
};
