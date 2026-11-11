// Module ID: 18885
// Function ID: 18886
// Name: WaterwheelsDiscoverFeedState
// Dependencies: [2]
// Exports: getWaterwheelsDiscoverFeedStatus, selectWaterwheelsDiscoverEntries, shouldRequestWaterwheelsDiscover, toDiscoverAnalyticsItem

// Module 18885 (WaterwheelsDiscoverFeedState)
import size from "module_2" /* 2 */;

let set;

const result = size.fileFinishedImporting("modules/waterwheels/discover/WaterwheelsDiscoverFeedState.tsx");

export function toDiscoverAnalyticsItem(itemId) {
  return { itemId: itemId.itemId, index: itemId.displayIndex, brokerPosition: itemId.brokerPosition, loadId: itemId.loadId, score: itemId.score, cardType: itemId.card.type };
}
export function selectWaterwheelsDiscoverEntries(EMPTY_DISCOVER_SNAPSHOT, fn) {
  let score;
  const loadId = EMPTY_DISCOVER_SNAPSHOT.loadId;
  if (EMPTY_DISCOVER_SNAPSHOT.hasSnapshot) {
    if (null != loadId) {
      const items1 = [];
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      const _Set2 = Set;
      const self3 = this;
      const self4 = this;
      const set1 = new Set();
      const items = EMPTY_DISCOVER_SNAPSHOT.items;
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        let hasItem = set.has(nextResult.id);
        if (!hasItem) {
          hasItem = set1.has(tmp5.card.id);
        }
        if (!hasItem) {
          hasItem = !fn(tmp5.card);
        }
        if (!hasItem) {
          let addResult = set.add(tmp5.id);
          let addResult1 = set1.add(tmp5.card.id);
          let obj = { key: "" + loadId + ":" + tmp5.id, itemId: tmp5.card.id, displayIndex: items1.length, brokerPosition: tmp5.brokerPosition, loadId, score, card: tmp5.card };
          let _HermesInternal = HermesInternal;
          let push = items1.push;
          score = tmp5.score;
          if (score == null) {
            score = null;
          }
          let arr = push(obj);
        }
        continue;
      }
      return items1;
    }
  }
  return [];
}
export function getWaterwheelsDiscoverFeedStatus(EMPTY_DISCOVER_SNAPSHOT, length) {
  if (length > 0) {
    return "cards";
  } else {
    const status = EMPTY_DISCOVER_SNAPSHOT.status;
    if ("success" === status) {
      return "empty";
    } else if ("error" === status) {
      return "error";
    } else {
      return "loading";
    }
  }
}
export function shouldRequestWaterwheelsDiscover(visible) {
  let enabled;
  let hasRequestInFlight;
  let isPickerOpen;
  let snapshot;
  ({ enabled, snapshot, hasRequestInFlight, isPickerOpen } = visible);
  if (enabled) {
    enabled = visible.visible;
  }
  if (enabled) {
    enabled = "idle" === snapshot.status;
  }
  if (enabled) {
    enabled = !hasRequestInFlight;
  }
  if (enabled) {
    enabled = !isPickerOpen;
  }
  return enabled;
}
