// Module ID: 4141
// Function ID: 34463
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1921, 1316, 1905, 587, 3803, 566, 686, 2]

// Module 4141 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "CHANGELOG_MODAL_KEY";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import CHANGELOG_MODAL_KEY from "CHANGELOG_MODAL_KEY";
import set from "_possibleConstructorReturn";

let closure_10;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleUserSettingsProtoStoreChange() {
  const LastReceivedChangelogId = require(3803) /* explicitContentFromProto */.LastReceivedChangelogId;
  const setting = LastReceivedChangelogId.getSetting();
}
({ AssetType: closure_9, ChangelogLoadState: closure_10 } = CHANGELOG_MODAL_KEY);
let closure_11 = {};
let closure_12 = {};
let c13 = null;
let c14 = null;
let c15 = null;
let c16 = null;
let c17 = null;
let set = new Set();
let tmp4 = ((Store) => {
  class ChangelogStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ChangelogStore);
      obj = outer1_5(ChangelogStore);
      tmp2 = outer1_4;
      if (outer1_19()) {
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
  callback2(ChangelogStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8);
      const items = [outer1_7];
      this.syncWith(items, () => true);
      const items1 = [outer1_8];
      this.syncWith(items1, outer1_20);
      const Storage = ChangelogStore(outer1_1[8]).Storage;
      const value = Storage.get("lastChangeLogDate");
      if (null != value) {
        const _Date = Date;
        const date = new Date(tmp5);
        const outer1_17 = date;
      }
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "getChangelog",
    value(arg0, arg1) {
      let tmp2;
      if (null != outer1_11[arg0]) {
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
      return outer1_13;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getChangelogLoadStatus",
    value(arg0, arg1) {
      let NOT_LOADED;
      if (null != outer1_12[arg0]) {
        NOT_LOADED = tmp[arg1];
      }
      if (null == NOT_LOADED) {
        NOT_LOADED = outer1_10.NOT_LOADED;
      }
      return NOT_LOADED;
    }
  };
  items[4] = {
    key: "hasLoadedConfig",
    value() {
      return null != outer1_15;
    }
  };
  items[5] = {
    key: "getConfig",
    value() {
      return outer1_15;
    }
  };
  items[6] = {
    key: "overrideId",
    value() {
      return outer1_14;
    }
  };
  items[7] = {
    key: "lastSeenChangelogId",
    value() {
      return outer1_16;
    }
  };
  items[8] = {
    key: "lastSeenChangelogDate",
    value() {
      return outer1_17;
    }
  };
  items[9] = {
    key: "getStateForDebugging",
    value() {
      return { changelogConfig: outer1_15, loadedChangelogs: outer1_12, lastSeenChangelogId: outer1_16, lastSeenChangelogDate: outer1_17 };
    }
  };
  items[10] = {
    key: "isLocked",
    value() {
      return outer1_18.size > 0;
    }
  };
  return callback(ChangelogStore, items);
})(require("initialize").Store);
tmp4.displayName = "ChangelogStore";
tmp4 = new tmp4(require("dispatcher"), {
  CHANGE_LOG_LOCK: function handleChangeLogLock(key) {
    if (set.has(key.key)) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(set);
      set.add(key);
    }
  },
  CHANGE_LOG_UNLOCK: function handleChangeLogUnlock(key) {
    if (set.has(key.key)) {
      const _Set = Set;
      set = new Set(set);
      set.delete(key);
    } else {
      return false;
    }
  },
  CHANGE_LOG_SET_CONFIG: function handleConfig(arg0) {
    let c13;
    let c15;
    ({ latestChangelogId: c13, config: c15 } = arg0);
  },
  CHANGE_LOG_FETCH_SUCCESS: function handleChangelogFetch(arg0) {
    let changelog;
    let id;
    ({ id, changelog } = arg0);
    if (null == dependencyMap[id]) {
      dependencyMap[id] = {};
    }
    const obj = { id, date: changelog.date, body: changelog.content, revision: 1, locale: changelog.locale };
    let str = "image";
    if (changelog.asset_type === constants.YOUTUBE_VIDEO_ID) {
      str = "youtube_video_id";
    }
    obj[str] = changelog.asset;
    dependencyMap[id][changelog.locale] = obj;
    if (null == dependencyMap2[id]) {
      dependencyMap2[id] = {};
    }
    dependencyMap2[id][changelog.locale] = constants2.LOADED_SUCCESS;
  },
  CHANGE_LOG_FETCH_FAILED: function handleChangelogFetchFailed(arg0) {
    let id;
    let locale;
    ({ id, locale } = arg0);
    if (null != dependencyMap[id]) {
      if (null != dependencyMap[id][locale]) {
        return false;
      }
    }
    if (null == dependencyMap2[id]) {
      dependencyMap2[id] = {};
    }
    dependencyMap2[id][locale] = constants2.LOADED_FAILURE;
  },
  CHANGE_LOG_SET_OVERRIDE: function handleChangelogSetOverride(id) {
    id = id.id;
  },
  CHANGE_LOG_MARK_SEEN: function handleDismiss(changelogDate) {
    changelogDate = changelogDate.changelogDate;
    const date = new Date(changelogDate);
    const Storage = require(587) /* Storage */.Storage;
    const result = Storage.set("lastChangeLogDate", changelogDate);
  }
});
let result = set.fileFinishedImporting("modules/changelog/ChangelogStore.tsx");

export default tmp4;
