// Module ID: 8683
// Function ID: 68814
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8683 (_isNativeReflectConstruct)
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
  let closure_9 = null;
  let closure_10 = false;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const map = new Map();
const set = new Set();
let closure_9 = null;
let closure_10 = false;
let closure_11 = false;
let tmp4 = (Store) => {
  class ContentInventoryOutboxStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ContentInventoryOutboxStore);
      obj = closure_5(ContentInventoryOutboxStore);
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
  const arg1 = ContentInventoryOutboxStore;
  callback2(ContentInventoryOutboxStore, Store);
  let obj = {
    key: "getMatchingOutboxEntry",
    value(activity) {
      activity = activity.activity;
      const value = store.get(activity.userId);
      if (null != value) {
        if (null != activity) {
          return ContentInventoryOutboxStore(closure_1[5]).findMatchingEntry(value.entries, activity);
        }
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getUserOutbox",
    value(arg0) {
      return store.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "isFetchingUserOutbox",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "deleteOutboxEntryError",
    get() {
      return closure_9;
    }
  };
  items[4] = {
    key: "isDeletingEntryHistory",
    get() {
      return closure_10;
    }
  };
  items[5] = {
    key: "hasInitialized",
    get() {
      return closure_11;
    }
  };
  return callback(ContentInventoryOutboxStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp4.displayName = "ContentInventoryOutboxStore";
tmp4 = new tmp4(importDefault(dependencyMap[7]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    resetOutboxes();
    let closure_11 = true;
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
    let closure_9 = null;
    let closure_10 = true;
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: function handleDeleteOutboxEntrySuccess(arg0) {
    let userId;
    ({ entry: closure_0, userId } = arg0);
    let closure_9 = null;
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
      let closure_10 = false;
    }
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: function handleDeleteOutboxEntryFailure(error) {
    error = error.error;
    let closure_10 = false;
  },
  CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: function handleClearError() {
    let closure_9 = null;
    let closure_10 = false;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/content_inventory/ContentInventoryOutboxStore.tsx");

export default tmp4;
