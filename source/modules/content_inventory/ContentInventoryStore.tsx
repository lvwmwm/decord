// Module ID: 8307
// Function ID: 65752
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 8308, 566, 686, 2]

// Module 8307 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
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
  map = new Map(map);
}
let map = new Map();
const map1 = new Map();
const map2 = new Map();
let c11 = false;
let tmp5 = ((Store) => {
  class ContentInventoryStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ContentInventoryStore);
      obj = outer1_5(ContentInventoryStore);
      tmp2 = outer1_4;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ContentInventoryStore, Store);
  let obj = {
    key: "getFeeds",
    value() {
      return outer1_8;
    }
  };
  let items = [obj, , , , , , , ];
  obj = {
    key: "getFeed",
    value(arg0) {
      return outer1_8.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getFeedState",
    value(arg0) {
      return outer1_9.get(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastFeedFetchDate",
    value(arg0) {
      return outer1_10.get(arg0);
    }
  };
  items[4] = {
    key: "getFilters",
    value() {
      return outer1_7;
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
      return outer1_11;
    }
  };
  items[7] = {
    key: "getMatchingInboxEntry",
    value(feedId) {
      let ContentInventoryStore;
      let activity;
      ({ activity, userId: ContentInventoryStore } = feedId);
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
          return ContentInventoryStore(outer1_1[5]).findMatchingEntry(reduced, activity);
        }
      }
    }
  };
  return callback(ContentInventoryStore, items);
})(require("initialize").Store);
tmp5.displayName = "ContentInventoryStore";
tmp5 = new tmp5(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const map = new Map();
  },
  CONTENT_INVENTORY_SET_FEED: function handleSetContentInventoryFeed(feedId) {
    feedId = feedId.feedId;
    const feed = feedId.feed;
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/content_inventory/ContentInventoryStore.tsx");

export default tmp5;
