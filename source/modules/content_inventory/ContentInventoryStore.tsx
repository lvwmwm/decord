// Module ID: 8299
// Function ID: 65690
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8299 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateFeeds(arg0) {
  arg0(map);
  const map = new Map(map);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let closure_11 = false;
let tmp5 = (Store) => {
  class ContentInventoryStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ContentInventoryStore);
      obj = closure_5(ContentInventoryStore);
      tmp2 = closure_4;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ContentInventoryStore;
  callback2(ContentInventoryStore, Store);
  let obj = {
    key: "getFeeds",
    value() {
      return closure_8;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getFeed",
    value(arg0) {
      return closure_8.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getFeedState",
    value(arg0) {
      return closure_9.get(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastFeedFetchDate",
    value(arg0) {
      return closure_10.get(arg0);
    }
  };
  items[4] = {
    key: "getFilters",
    value() {
      return closure_7;
    }
  };
  items[5] = {
    key: "getFeedRequestId",
    value(arg0) {
      const feed = this.getFeed(arg0);
      let request_id;
      if (null != feed) {
        request_id = feed.request_id;
      }
      return request_id;
    }
  };
  items[6] = {
    key: "getDebugImpressionCappingDisabled",
    value() {
      return closure_11;
    }
  };
  items[7] = {
    key: "getMatchingInboxEntry",
    value(feedId) {
      let activity;
      ({ activity, userId: closure_0 } = feedId);
      const feed = this.getFeed(feedId.feedId);
      if (null != feed) {
        if (null != activity) {
          const entries = feed.entries;
          const reduced = entries.reduce((arg0, content) => {
            if (content.content.author_id === closure_0) {
              const items = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(arg0, 0);
              items[arraySpreadResult] = content.content;
              const sum = arraySpreadResult + 1;
              let items1 = items;
            } else {
              items1 = [];
              arraySpreadResult = HermesBuiltin.arraySpread(arg0, 0);
            }
            return items1;
          }, []);
          return ContentInventoryStore(closure_1[5]).findMatchingEntry(reduced, activity);
        }
      }
    }
  };
  return callback(ContentInventoryStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp5.displayName = "ContentInventoryStore";
tmp5 = new tmp5(importDefault(dependencyMap[7]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const map = new Map();
  },
  CONTENT_INVENTORY_SET_FEED: function handleSetContentInventoryFeed(feedId) {
    feedId = feedId.feedId;
    const arg1 = feedId;
    const dependencyMap = feedId.feed;
    updateFeeds((set) => set.set(feedId, feed));
    const result = map2.set(feedId, new Date());
  },
  CONTENT_INVENTORY_SET_FEED_STATE: function handleSetContentInventoryFeedState(feedId) {
    const result = map1.set(feedId.feedId, feedId.state);
  },
  CONTENT_INVENTORY_SET_FILTERS: function handleSetFilters(filters) {
    filters = filters.filters;
  },
  CONTENT_INVENTORY_CLEAR_FEED: function handleClearContentInventoryFeed(feedId) {
    feedId = feedId.feedId;
    const arg1 = feedId;
    if (map.has(feedId)) {
      updateFeeds((arg0) => arg0.delete(feedId));
    } else {
      return false;
    }
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function handleDebugToggleImpressionCapping() {
    closure_11 = !closure_11;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/content_inventory/ContentInventoryStore.tsx");

export default tmp5;
