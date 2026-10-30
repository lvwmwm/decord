// Module ID: 14805
// Function ID: 14806
// Name: ContentInventoryActivityStore
// Dependencies: [5756, 8898, 8706, 8710, 8918, 5757, 8903, 8899, 12, 504, 572, 2]

// Module 14805 (ContentInventoryActivityStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ActivityTypes from "ActivityTypes" /* 5757 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 8706 */;
import utils from "utils" /* 8710 */;
import matchUtils from "matchUtils" /* 8899 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 8903 */;
import PresenceStore from "PresenceStore" /* 5756 */;
import ContentInventoryStore from "ContentInventoryStore" /* 8898 */;
import size from "module_2" /* 2 */;

let _require;

function entryToKey(content) {
  return "" + content.author_id + ":" + content.id;
}
function getMatchingActivity(author_type) {
  _require = author_type;
  const tmp = _require;
  let tmp3 = null;
  const obj = require("utils");
  if (!obj.isEntryExpired(author_type)) {
    let tmpResult = tmp(8710);
    let found;
    if (tmpResult.isEntryActive(author_type)) {
      if (author_type.author_type === tmp(8918).ContentInventoryAuthorType.USER) {
        const activities = PresenceStore.getActivities(author_type.author_id);
        found = activities.find((type) => {
          let result;
          if (type.type === ActivityTypes.ActivityTypes.PLAYING) {
            const tmp3 = author_type;
            const tmpResult = ContentInventoryTypes;
            if (tmpResult.isApplicationEntry(author_type)) {
              const tmpResult4 = matchUtils;
              result = tmpResult4.isMatchingApplicationActivity(tmp3, type);
            }
            return result;
          }
          let tmp4 = type.type !== tmp(5757).ActivityTypes.LISTENING;
          if (!tmp4) {
            const tmpResult5 = ContentInventoryTypes;
            tmp4 = !tmpResult5.isListenedSessionEntry(author_type);
          }
          result = !tmp4;
          if (result) {
            const tmpResult6 = matchUtils;
            result = tmpResult6.isMatchingListeningActivity(author_type, type);
          }
        });
      }
    }
    tmp3 = found;
  }
  return tmp3;
}
function detectMatchingActivityForEntries(entries) {
  const updatedKeys = new Set();
  const matchedKeys = new Set();
  const iter = entries[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp4 = getMatchingActivity(nextResult.content);
    let tmp5 = tmp4;
    if (undefined !== tmp4) {
      let tmp8 = entryToKey(tmp2.content);
      let tmp9 = tmp8;
      let addResult = matchedKeys.add(tmp8);
      let obj3 = map;
      if (tmp5 !== map.get(tmp8)) {
        let addResult1 = updatedKeys.add(tmp9);
        let result = obj3.set(tmp9, tmp5);
      }
    }
    continue;
  }
  return { updatedKeys, matchedKeys };
}
function handlePresenceUpdates() {
  let matchedKeys;
  let updatedKeys;
  let flag = false;
  const arr = Array.from(map.keys());
  set = new Set();
  const set1 = new Set();
  const feeds = ContentInventoryStore.getFeeds();
  const values = feeds.values();
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let entries;
    let tmp4 = nextResult;
    let tmp5 = detectMatchingActivityForEntries;
    if (set.size > 0) {
      let entries1 = tmp4.entries;
      entries = entries1.filter((content) => {
        content = content.content;
        return !set.has("" + content.author_id + ":" + content.id);
      });
    } else {
      entries = tmp4.entries;
    }
    let tmp5Result = tmp5(entries);
    ({ updatedKeys, matchedKeys } = tmp5Result);
    let tmp9 = updatedKeys;
    for (const item10049 of updatedKeys) {
      let addResult = set.add(item10049);
      continue;
    }
    for (const item10058 of matchedKeys) {
      let addResult1 = set1.add(item10058);
      continue;
    }
    let tmp16 = flag;
    if (!tmp16) {
      tmp16 = tmp9.size > 0;
    }
    flag = tmp16;
    continue;
  }
  const items = [...set1];
  const obj4 = _modDef12;
  const differenceResult = obj4.difference(arr, items);
  for (const item10081 of differenceResult) {
    let deleteResult = map.delete(item10081);
    flag = true;
    continue;
  }
  return flag;
}
let items = [ContentInventoryEntryType.ContentInventoryEntryType.LISTENED_SESSION];
let set = new Set(items);
const map = new Map();
const Store = get_initializedDefault.Store;
class ContentInventoryActivityStore extends Store {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    applyArgumentsResult.canRenderContent = function canRenderContent(content_type) {
      const obj = utils;
      let tmp2 = !obj.isEntryExpired(content_type);
      obj.isEntryExpired(content_type);
      if (tmp2) {
        const hasItem = set.has(content_type.content_type);
        let tmp5 = !hasItem;
        if (hasItem) {
          tmp5 = null != require.getMatchingActivity(content_type);
        }
        tmp2 = tmp5;
      }
      return tmp2;
    };
    return applyArgumentsResult;
  }
  initialize() {
    this.waitFor(ContentInventoryStore, PresenceStore);
    const items = [PresenceStore];
    this.syncWith(items, handlePresenceUpdates);
  }
  getMatchingActivity(author_id) {
    let value = null;
    const obj = utils;
    if (!obj.isEntryExpired(author_id)) {
      const _HermesInternal = HermesInternal;
      value = map.get("" + author_id.author_id + ":" + author_id.id);
    }
    return value;
  }
}
const prototype = ContentInventoryActivityStore.prototype;
ContentInventoryActivityStore.displayName = "ContentInventoryActivityStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
  },
  CONTENT_INVENTORY_SET_FEED: function handleSetContentInventoryFeed(feed) {
    return detectMatchingActivityForEntries(feed.feed.entries).updatedKeys.size > 0;
  }
};
const contentInventoryActivityStore = new ContentInventoryActivityStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryActivityStore.tsx");

export default contentInventoryActivityStore;
export { entryToKey };
