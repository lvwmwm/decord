// Module ID: 8690
// Function ID: 68854
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 8308, 566, 686, 2]

// Module 8690 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function resetOutboxes() {
  const map = new Map();
  const set = new Set();
  let c9 = null;
  let c10 = false;
}
let map = new Map();
let set = new Set();
let c9 = null;
let c10 = false;
let c11 = false;
let tmp4 = ((Store) => {
  class ContentInventoryOutboxStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ContentInventoryOutboxStore);
      obj = outer1_5(ContentInventoryOutboxStore);
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
  callback2(ContentInventoryOutboxStore, Store);
  let obj = {
    key: "getMatchingOutboxEntry",
    value(activity) {
      activity = activity.activity;
      const value = outer1_7.get(activity.userId);
      if (null != value) {
        if (null != activity) {
          return ContentInventoryOutboxStore(outer1_1[5]).findMatchingEntry(value.entries, activity);
        }
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getUserOutbox",
    value(arg0) {
      return outer1_7.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "isFetchingUserOutbox",
    value(arg0) {
      return outer1_8.has(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "deleteOutboxEntryError",
    get() {
      return outer1_9;
    }
  };
  items[4] = {
    key: "isDeletingEntryHistory",
    get() {
      return outer1_10;
    }
  };
  items[5] = {
    key: "hasInitialized",
    get() {
      return outer1_11;
    }
  };
  return callback(ContentInventoryOutboxStore, items);
})(require("initialize").Store);
tmp4.displayName = "ContentInventoryOutboxStore";
tmp4 = new tmp4(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    resetOutboxes();
    let c11 = true;
  },
  LOGOUT: function handleLogOut() {
    resetOutboxes();
  },
  CONTENT_INVENTORY_FETCH_OUTBOX_START: function handleFetchOutboxStart(userId) {
    set.add(userId.userId);
  },
  CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: function handleFetchOutboxSuccess(userId) {
    userId = userId.userId;
    const obj = {};
    const merged = Object.assign(userId.outbox);
    obj["lastFetched"] = Date.now();
    const result = map.set(userId, obj);
    set.delete(userId);
  },
  CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE: function handleFetchOutboxFailure(userId) {
    set.delete(userId.userId);
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: function handleDeleteOutboxEntryStart() {
    let c9 = null;
    let c10 = true;
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: function handleDeleteOutboxEntrySuccess(arg0) {
    let require;
    let userId;
    ({ entry: require, userId } = arg0);
    let c9 = null;
    const value = map.get(userId);
    if (null == value) {
      return false;
    } else {
      const entries = value.entries;
      const obj = {};
      const found = entries.filter((id) => id.id !== id.id);
      const merged = Object.assign(value);
      obj["entries"] = found;
      const result = map.set(userId, obj);
      let c10 = false;
    }
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: function handleDeleteOutboxEntryFailure(error) {
    error = error.error;
    let c10 = false;
  },
  CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: function handleClearError() {
    let c9 = null;
    let c10 = false;
  }
});
let result = set.fileFinishedImporting("modules/content_inventory/ContentInventoryOutboxStore.tsx");

export default tmp4;
