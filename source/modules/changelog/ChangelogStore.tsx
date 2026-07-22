// Module ID: 4137
// Function ID: 34433
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4137 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleUserSettingsProtoStoreChange() {
  const LastReceivedChangelogId = arg1(dependencyMap[9]).LastReceivedChangelogId;
  const setting = LastReceivedChangelogId.getSetting();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
({ AssetType: closure_9, ChangelogLoadState: closure_10 } = arg1(dependencyMap[7]));
let closure_11 = {};
let closure_12 = {};
let closure_13 = null;
let closure_14 = null;
let closure_15 = null;
let closure_16 = null;
let closure_17 = null;
const set = new Set();
let tmp4 = (Store) => {
  class ChangelogStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ChangelogStore);
      obj = closure_5(ChangelogStore);
      tmp2 = closure_4;
      if (closure_19()) {
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
  const arg1 = ChangelogStore;
  callback2(ChangelogStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_8);
      const items = [closure_7];
      this.syncWith(items, () => true);
      const items1 = [closure_8];
      this.syncWith(items1, closure_20);
      const Storage = ChangelogStore(closure_1[8]).Storage;
      const value = Storage.get("lastChangeLogDate");
      if (null != value) {
        const _Date = Date;
        const date = new Date(tmp5);
      }
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "getChangelog",
    value(arg0, arg1) {
      let tmp2;
      if (null != closure_11[arg0]) {
        tmp2 = tmp[arg1];
      }
      let tmp4 = null;
      if (null != tmp2) {
        tmp4 = tmp2;
      }
      return tmp4;
    }
  };
  items[1] = obj;
  obj = {
    key: "latestChangelogId",
    value() {
      return closure_13;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getChangelogLoadStatus",
    value(arg0, arg1) {
      let NOT_LOADED;
      if (null != closure_12[arg0]) {
        NOT_LOADED = tmp[arg1];
      }
      if (null == NOT_LOADED) {
        NOT_LOADED = constants.NOT_LOADED;
      }
      return NOT_LOADED;
    }
  };
  items[4] = {
    key: "hasLoadedConfig",
    value() {
      return null != closure_15;
    }
  };
  items[5] = {
    key: "getConfig",
    value() {
      return closure_15;
    }
  };
  items[6] = {
    key: "overrideId",
    value() {
      return closure_14;
    }
  };
  items[7] = {
    key: "lastSeenChangelogId",
    value() {
      return closure_16;
    }
  };
  items[8] = {
    key: "lastSeenChangelogDate",
    value() {
      return closure_17;
    }
  };
  items[9] = {
    key: "getStateForDebugging",
    value() {
      return { changelogConfig: closure_15, loadedChangelogs: closure_12, lastSeenChangelogId: closure_16, lastSeenChangelogDate: closure_17 };
    }
  };
  items[10] = {
    key: "isLocked",
    value() {
      return size.size > 0;
    }
  };
  return callback(ChangelogStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp4.displayName = "ChangelogStore";
tmp4 = new tmp4(importDefault(dependencyMap[11]), {
  CHANGE_LOG_LOCK: function handleChangeLogLock(key) {
    if (set.has(key.key)) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(set);
      set.add(key);
    }
  },
  CHANGE_LOG_UNLOCK: function handleChangeLogUnlock(key) {
    if (set.has(key.key)) {
      const _Set = Set;
      const set = new Set(set);
      set.delete(key);
    } else {
      return false;
    }
  },
  CHANGE_LOG_SET_CONFIG: function handleConfig(arg0) {
    ({ latestChangelogId: closure_13, config: closure_15 } = arg0);
  },
  CHANGE_LOG_FETCH_SUCCESS: function handleChangelogFetch(arg0) {
    let changelog;
    let id;
    ({ id, changelog } = arg0);
    if (null == closure_11[id]) {
      closure_11[id] = {};
    }
    const obj = { id, date: changelog.date, body: changelog.content, revision: 1, locale: changelog.locale };
    let str = "image";
    if (changelog.asset_type === constants.YOUTUBE_VIDEO_ID) {
      str = "youtube_video_id";
    }
    obj[str] = changelog.asset;
    closure_11[id][changelog.locale] = obj;
    if (null == closure_12[id]) {
      closure_12[id] = {};
    }
    closure_12[id][changelog.locale] = constants2.LOADED_SUCCESS;
  },
  CHANGE_LOG_FETCH_FAILED: function handleChangelogFetchFailed(arg0) {
    let id;
    let locale;
    ({ id, locale } = arg0);
    if (null != closure_11[id]) {
      if (null != closure_11[id][locale]) {
        return false;
      }
    }
    if (null == closure_12[id]) {
      closure_12[id] = {};
    }
    closure_12[id][locale] = constants2.LOADED_FAILURE;
  },
  CHANGE_LOG_SET_OVERRIDE: function handleChangelogSetOverride(id) {
    id = id.id;
  },
  CHANGE_LOG_MARK_SEEN: function handleDismiss(changelogDate) {
    changelogDate = changelogDate.changelogDate;
    let closure_17 = new Date(changelogDate);
    const Storage = arg1(dependencyMap[8]).Storage;
    const result = Storage.set("lastChangeLogDate", changelogDate);
  }
});
const obj = {
  CHANGE_LOG_LOCK: function handleChangeLogLock(key) {
    if (set.has(key.key)) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(set);
      set.add(key);
    }
  },
  CHANGE_LOG_UNLOCK: function handleChangeLogUnlock(key) {
    if (set.has(key.key)) {
      const _Set = Set;
      const set = new Set(set);
      set.delete(key);
    } else {
      return false;
    }
  },
  CHANGE_LOG_SET_CONFIG: function handleConfig(arg0) {
    ({ latestChangelogId: closure_13, config: closure_15 } = arg0);
  },
  CHANGE_LOG_FETCH_SUCCESS: function handleChangelogFetch(arg0) {
    let changelog;
    let id;
    ({ id, changelog } = arg0);
    if (null == closure_11[id]) {
      closure_11[id] = {};
    }
    const obj = { id, date: changelog.date, body: changelog.content, revision: 1, locale: changelog.locale };
    let str = "image";
    if (changelog.asset_type === constants.YOUTUBE_VIDEO_ID) {
      str = "youtube_video_id";
    }
    obj[str] = changelog.asset;
    closure_11[id][changelog.locale] = obj;
    if (null == closure_12[id]) {
      closure_12[id] = {};
    }
    closure_12[id][changelog.locale] = constants2.LOADED_SUCCESS;
  },
  CHANGE_LOG_FETCH_FAILED: function handleChangelogFetchFailed(arg0) {
    let id;
    let locale;
    ({ id, locale } = arg0);
    if (null != closure_11[id]) {
      if (null != closure_11[id][locale]) {
        return false;
      }
    }
    if (null == closure_12[id]) {
      closure_12[id] = {};
    }
    closure_12[id][locale] = constants2.LOADED_FAILURE;
  },
  CHANGE_LOG_SET_OVERRIDE: function handleChangelogSetOverride(id) {
    id = id.id;
  },
  CHANGE_LOG_MARK_SEEN: function handleDismiss(changelogDate) {
    changelogDate = changelogDate.changelogDate;
    let closure_17 = new Date(changelogDate);
    const Storage = arg1(dependencyMap[8]).Storage;
    const result = Storage.set("lastChangeLogDate", changelogDate);
  }
};
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/changelog/ChangelogStore.tsx");

export default tmp4;
