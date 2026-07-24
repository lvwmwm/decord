// Module ID: 10074
// Function ID: 77764
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 10067, 10066, 566, 686, 2]

// Module 10074 (_isNativeReflectConstruct)
import orderByTotalMemberCount from "orderByTotalMemberCount";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { DirectoryEntryCategories } from "DirectoryEntryTypes";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_8 = Object.freeze({});
let c9 = false;
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
let tmp2 = ((Store) => {
  class GuildDirectoryStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildDirectoryStore);
      obj = outer1_5(GuildDirectoryStore);
      tmp2 = outer1_4;
      if (outer1_15()) {
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
  callback2(GuildDirectoryStore, Store);
  let obj = {
    key: "isFetching",
    value() {
      return outer1_9;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getCurrentCategoryId",
    value(arg0) {
      let ALL = outer1_11[arg0];
      if (null == ALL) {
        ALL = outer1_7.ALL;
      }
      return ALL;
    }
  };
  items[1] = obj;
  obj = {
    key: "getDirectoryEntries",
    value(arg0, arg1) {
      if (null != arg1) {
        let tmp5;
        if (null != outer1_12[arg0]) {
          tmp5 = tmp4[arg1];
        }
        let tmp2 = tmp5;
      } else {
        tmp2 = outer1_10[arg0];
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getDirectoryEntry",
    value(arg0, arg1) {
      let tmp2;
      if (null != outer1_10[arg0]) {
        tmp2 = tmp[arg1];
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "getDirectoryAllEntriesCount",
    value(arg0) {
      let obj = outer1_10[arg0];
      if (null == obj) {
        obj = {};
      }
      return Object.keys(obj).length;
    }
  };
  items[5] = {
    key: "getDirectoryCategoryCounts",
    value(arg0) {
      let tmp = outer1_13[arg0];
      if (null == tmp) {
        tmp = outer1_8;
      }
      return tmp;
    }
  };
  items[6] = {
    key: "getAdminGuildEntryIds",
    value(arg0) {
      return outer1_14[arg0];
    }
  };
  return callback(GuildDirectoryStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildDirectoryStore";
tmp2 = new tmp2(require("dispatcher"), {
  GUILD_DIRECTORY_FETCH_START: function handleFetchStart() {
    let c9 = true;
  },
  GUILD_DIRECTORY_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let channelId;
    let entries;
    ({ channelId, entries } = arg0);
    let c9 = false;
    let obj = {};
    obj = {};
    const item = entries.forEach((entry) => {
      obj = obj(obj[6]);
      const result = obj.guildDirectoryEntryFromServer(entry);
      obj[result.guildId] = result;
      if (null != obj[result.primaryCategoryId]) {
        obj[result.primaryCategoryId][result.guildId] = result;
      } else {
        obj = {};
        obj[result.guildId] = result;
        obj[result.primaryCategoryId] = obj;
      }
    });
    closure_10[channelId] = obj;
    closure_12[channelId] = obj;
  },
  GUILD_DIRECTORY_FETCH_FAILURE: function handleFetchFailure() {
    let c9 = false;
  },
  GUILD_DIRECTORY_ENTRY_CREATE: function handleCreateEntry(channelId) {
    channelId = channelId.channelId;
    let obj = require(10066) /* orderByTotalMemberCount */;
    const result = obj.guildDirectoryEntryFromServer(channelId.entry);
    if (null != result) {
      let tmp2;
      if (null != dependencyMap[channelId]) {
        tmp2 = tmp20[result.guildId];
      }
      if (null == tmp2) {
        obj = {};
        const merged = Object.assign(dependencyMap[channelId]);
        obj[result.guildId] = result;
        dependencyMap[channelId] = obj;
        let UNCATEGORIZED = result.primaryCategoryId;
        if (null == UNCATEGORIZED) {
          UNCATEGORIZED = DirectoryEntryCategories.UNCATEGORIZED;
        }
        obj = {};
        const merged1 = Object.assign(dependencyMap2[channelId]);
        const obj1 = {};
        let tmp8;
        if (null != dependencyMap2[channelId]) {
          tmp8 = tmp7[UNCATEGORIZED];
        }
        const merged2 = Object.assign(tmp8);
        obj1[result.guildId] = result;
        obj[UNCATEGORIZED] = obj1;
        dependencyMap2[channelId] = obj;
        if (null != dependencyMap3[channelId]) {
          let tmp15;
          if (null != dependencyMap3[channelId]) {
            tmp15 = tmp14[UNCATEGORIZED];
          }
          let num = 0;
          if (null != tmp15) {
            num = tmp15;
          }
          const obj2 = {};
          const merged3 = Object.assign(dependencyMap3[channelId]);
          obj2[UNCATEGORIZED] = num + 1;
          dependencyMap3[channelId] = obj2;
        }
        const tmp4 = dependencyMap2;
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function handleDeleteEntry(arg0) {
    let channelId;
    let guildId;
    ({ channelId, guildId } = arg0);
    let tmp5;
    if (null != dependencyMap[channelId]) {
      tmp5 = tmp4[guildId];
    }
    if (null != tmp5) {
      const primaryCategoryId = tmp5.primaryCategoryId;
      const _Object2 = Object;
      const merged = Object.assign({}, dependencyMap[channelId]);
      delete tmp3[tmp];
      if (null != dependencyMap4[channelId]) {
        obj3.delete(guildId);
      }
      const _Set = Set;
      const set = new Set(dependencyMap4[channelId]);
      dependencyMap4[channelId] = set;
      dependencyMap[channelId] = merged;
      const _Object = Object;
      const merged1 = Object.assign({}, dependencyMap2[channelId][primaryCategoryId]);
      delete tmp2[tmp];
      let obj = {};
      const merged2 = Object.assign(dependencyMap2[channelId]);
      obj[primaryCategoryId] = merged1;
      dependencyMap2[channelId] = obj;
      if (null != dependencyMap3[channelId]) {
        const diff = dependencyMap3[channelId][primaryCategoryId] - 1;
        obj = {};
        const merged3 = Object.assign(dependencyMap3[channelId]);
        let num2 = 0;
        if (diff >= 0) {
          num2 = diff;
        }
        obj[primaryCategoryId] = num2;
        dependencyMap3[channelId] = obj;
        const tmp18 = dependencyMap3;
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function handleUpdateEntry(channelId) {
    channelId = channelId.channelId;
    let obj = require(10066) /* orderByTotalMemberCount */;
    const result = obj.guildDirectoryEntryFromServer(channelId.entry);
    let tmp5;
    if (null != dependencyMap[channelId]) {
      tmp5 = tmp4[result.guildId];
    }
    obj = {};
    const merged = Object.assign(dependencyMap[channelId]);
    obj = {};
    const merged1 = Object.assign(tmp5);
    const merged2 = Object.assign(result);
    obj[result.guildId] = obj;
    dependencyMap[channelId] = obj;
    let primaryCategoryId;
    if (null != tmp5) {
      primaryCategoryId = tmp5.primaryCategoryId;
    }
    if (null == primaryCategoryId) {
      primaryCategoryId = DirectoryEntryCategories.UNCATEGORIZED;
    }
    let UNCATEGORIZED = result.primaryCategoryId;
    if (null == UNCATEGORIZED) {
      UNCATEGORIZED = DirectoryEntryCategories.UNCATEGORIZED;
    }
    let tmp14;
    if (null != dependencyMap2[channelId]) {
      tmp14 = tmp13[primaryCategoryId];
    }
    let tmp16 = null != tmp5;
    const merged3 = Object.assign({}, tmp14);
    if (tmp16) {
      tmp16 = primaryCategoryId !== UNCATEGORIZED;
    }
    if (tmp16) {
      const guildId = result.guildId;
      delete tmp2[tmp];
    }
    const obj1 = {};
    const merged4 = Object.assign(dependencyMap2[channelId]);
    obj1[primaryCategoryId] = merged3;
    const obj2 = {};
    let tmp20;
    if (null != dependencyMap2[channelId]) {
      tmp20 = tmp19[UNCATEGORIZED];
    }
    const merged5 = Object.assign(tmp20);
    const merged6 = Object.assign(tmp5);
    const merged7 = Object.assign(result);
    obj2[result.guildId] = {};
    obj1[UNCATEGORIZED] = obj2;
    dependencyMap2[channelId] = obj1;
    let tmp24 = UNCATEGORIZED !== primaryCategoryId;
    if (tmp24) {
      tmp24 = null != dependencyMap3[channelId];
    }
    if (tmp24) {
      const obj4 = {};
      const merged8 = Object.assign(dependencyMap3[channelId]);
      let tmp30;
      if (null != dependencyMap3[channelId]) {
        tmp30 = tmp29[primaryCategoryId];
      }
      let num2 = 0;
      if (tmp30 > 0) {
        let tmp33;
        if (null != dependencyMap3[channelId]) {
          tmp33 = tmp32[primaryCategoryId];
        }
        num2 = tmp33 - 1;
      }
      obj4[primaryCategoryId] = num2;
      let tmp36;
      if (null != dependencyMap3[channelId]) {
        tmp36 = tmp35[UNCATEGORIZED];
      }
      let num4 = 0;
      if (null != tmp36) {
        num4 = tmp36;
      }
      obj4[UNCATEGORIZED] = num4 + 1;
      dependencyMap3[channelId] = obj4;
      const tmp26 = dependencyMap3;
    }
  },
  GUILD_DIRECTORY_CATEGORY_SELECT: function handleSelectCategory(channelId) {
    closure_11[channelId.channelId] = channelId.categoryId;
  },
  GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function handleFetchCategoryCounts(channelId) {
    closure_13[channelId.channelId] = channelId.counts;
  },
  GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function handleFetchAdminEntries(channelId) {
    const entries = channelId.entries;
    const set = new Set();
    const item = entries.forEach((entry) => {
      set.add(set(outer1_1[6]).guildDirectoryEntryFromServer(entry).guildId);
    });
    closure_14[channelId.channelId] = set;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/directory_channels/GuildDirectoryStore.tsx");

export default tmp2;
