// Module ID: 10033
// Function ID: 77517
// Name: _isNativeReflectConstruct
// Dependencies: [4294967295, 4294967295, 0, 4294967295, 0, 0]

// Module 10033 (_isNativeReflectConstruct)
import result from "result";
import closure_6 from "result";
import { DirectoryEntryCategories } from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_8 = Object.freeze({});
let closure_9 = false;
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
let tmp2 = (Store) => {
  class GuildDirectoryStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildDirectoryStore);
      obj = closure_5(GuildDirectoryStore);
      tmp2 = result;
      if (closure_15()) {
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
  const arg1 = GuildDirectoryStore;
  callback2(GuildDirectoryStore, Store);
  let obj = {
    key: "isFetching",
    value() {
      return closure_9;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getCurrentCategoryId",
    value(arg0) {
      let ALL = closure_11[arg0];
      if (null == ALL) {
        ALL = constants.ALL;
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
        if (null != closure_12[arg0]) {
          tmp5 = tmp4[arg1];
        }
        let tmp2 = tmp5;
      } else {
        tmp2 = closure_10[arg0];
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getDirectoryEntry",
    value(arg0, arg1) {
      let tmp2;
      if (null != closure_10[arg0]) {
        tmp2 = tmp[arg1];
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "getDirectoryAllEntriesCount",
    value(arg0) {
      let obj = closure_10[arg0];
      if (null == obj) {
        obj = {};
      }
      return Object.keys(obj).length;
    }
  };
  items[5] = {
    key: "getDirectoryCategoryCounts",
    value(arg0) {
      let tmp = closure_13[arg0];
      if (null == tmp) {
        tmp = closure_8;
      }
      return tmp;
    }
  };
  items[6] = {
    key: "getAdminGuildEntryIds",
    value(arg0) {
      return closure_14[arg0];
    }
  };
  return callback(GuildDirectoryStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "GuildDirectoryStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  GUILD_DIRECTORY_FETCH_START: function handleFetchStart() {
    let closure_9 = true;
  },
  GUILD_DIRECTORY_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let channelId;
    let entries;
    ({ channelId, entries } = arg0);
    let closure_9 = false;
    let obj = {};
    const arg1 = obj;
    obj = {};
    const dependencyMap = obj;
    const item = entries.forEach((entry) => {
      let obj = obj(obj[6]);
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
    let closure_9 = false;
  },
  GUILD_DIRECTORY_ENTRY_CREATE: function handleCreateEntry(channelId) {
    channelId = channelId.channelId;
    let obj = arg1(dependencyMap[6]);
    const result = obj.guildDirectoryEntryFromServer(channelId.entry);
    if (null != result) {
      let tmp2;
      if (null != closure_10[channelId]) {
        tmp2 = tmp20[result.guildId];
      }
      if (null == tmp2) {
        obj = {};
        const merged = Object.assign(closure_10[channelId]);
        obj[result.guildId] = result;
        closure_10[channelId] = obj;
        let UNCATEGORIZED = result.primaryCategoryId;
        if (null == UNCATEGORIZED) {
          UNCATEGORIZED = DirectoryEntryCategories.UNCATEGORIZED;
        }
        obj = {};
        const merged1 = Object.assign(closure_12[channelId]);
        const obj1 = {};
        let tmp8;
        if (null != closure_12[channelId]) {
          tmp8 = tmp7[UNCATEGORIZED];
        }
        const merged2 = Object.assign(tmp8);
        obj1[result.guildId] = result;
        obj[UNCATEGORIZED] = obj1;
        closure_12[channelId] = obj;
        if (null != closure_13[channelId]) {
          let tmp15;
          if (null != closure_13[channelId]) {
            tmp15 = tmp14[UNCATEGORIZED];
          }
          let num = 0;
          if (null != tmp15) {
            num = tmp15;
          }
          const obj2 = {};
          const merged3 = Object.assign(closure_13[channelId]);
          obj2[UNCATEGORIZED] = num + 1;
          closure_13[channelId] = obj2;
        }
        const tmp4 = closure_12;
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function handleDeleteEntry(arg0) {
    let channelId;
    let guildId;
    ({ channelId, guildId } = arg0);
    let tmp2;
    if (null != closure_10[channelId]) {
      tmp2 = tmp[guildId];
    }
    if (null != tmp2) {
      const primaryCategoryId = tmp2.primaryCategoryId;
      const _Object2 = Object;
      const merged = Object.assign({}, closure_10[channelId]);
      delete r8[r2];
      if (null != closure_14[channelId]) {
        obj3.delete(guildId);
      }
      const _Set = Set;
      const set = new Set(closure_14[channelId]);
      closure_14[channelId] = set;
      closure_10[channelId] = merged;
      const _Object = Object;
      const merged1 = Object.assign({}, closure_12[channelId][primaryCategoryId]);
      delete r7[r2];
      let obj = {};
      const merged2 = Object.assign(closure_12[channelId]);
      obj[primaryCategoryId] = merged1;
      closure_12[channelId] = obj;
      if (null != closure_13[channelId]) {
        const diff = closure_13[channelId][primaryCategoryId] - 1;
        obj = {};
        const merged3 = Object.assign(closure_13[channelId]);
        let num2 = 0;
        if (diff >= 0) {
          num2 = diff;
        }
        obj[primaryCategoryId] = num2;
        closure_13[channelId] = obj;
        const tmp15 = closure_13;
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function handleUpdateEntry(channelId) {
    channelId = channelId.channelId;
    let obj = arg1(dependencyMap[6]);
    const result = obj.guildDirectoryEntryFromServer(channelId.entry);
    let tmp3;
    if (null != closure_10[channelId]) {
      tmp3 = tmp2[result.guildId];
    }
    obj = {};
    const merged = Object.assign(closure_10[channelId]);
    obj = {};
    const merged1 = Object.assign(tmp3);
    const merged2 = Object.assign(result);
    obj[result.guildId] = obj;
    closure_10[channelId] = obj;
    let primaryCategoryId;
    if (null != tmp3) {
      primaryCategoryId = tmp3.primaryCategoryId;
    }
    if (null == primaryCategoryId) {
      primaryCategoryId = DirectoryEntryCategories.UNCATEGORIZED;
    }
    let UNCATEGORIZED = result.primaryCategoryId;
    if (null == UNCATEGORIZED) {
      UNCATEGORIZED = DirectoryEntryCategories.UNCATEGORIZED;
    }
    let tmp12;
    if (null != closure_12[channelId]) {
      tmp12 = tmp11[primaryCategoryId];
    }
    let tmp14 = null != tmp3;
    const merged3 = Object.assign({}, tmp12);
    if (tmp14) {
      tmp14 = primaryCategoryId !== UNCATEGORIZED;
    }
    if (tmp14) {
      const guildId = result.guildId;
      delete r6[r1];
    }
    const obj1 = {};
    const merged4 = Object.assign(closure_12[channelId]);
    obj1[primaryCategoryId] = merged3;
    const obj2 = {};
    let tmp18;
    if (null != closure_12[channelId]) {
      tmp18 = tmp17[UNCATEGORIZED];
    }
    const merged5 = Object.assign(tmp18);
    const merged6 = Object.assign(tmp3);
    const merged7 = Object.assign(result);
    obj2[result.guildId] = {};
    obj1[UNCATEGORIZED] = obj2;
    closure_12[channelId] = obj1;
    let tmp22 = UNCATEGORIZED !== primaryCategoryId;
    if (tmp22) {
      tmp22 = null != closure_13[channelId];
    }
    if (tmp22) {
      const obj4 = {};
      const merged8 = Object.assign(closure_13[channelId]);
      let tmp28;
      if (null != closure_13[channelId]) {
        tmp28 = tmp27[primaryCategoryId];
      }
      let num2 = 0;
      if (tmp28 > 0) {
        let tmp31;
        if (null != closure_13[channelId]) {
          tmp31 = tmp30[primaryCategoryId];
        }
        num2 = tmp31 - 1;
      }
      obj4[primaryCategoryId] = num2;
      let tmp34;
      if (null != closure_13[channelId]) {
        tmp34 = tmp33[UNCATEGORIZED];
      }
      let num4 = 0;
      if (null != tmp34) {
        num4 = tmp34;
      }
      obj4[UNCATEGORIZED] = num4 + 1;
      closure_13[channelId] = obj4;
      const tmp24 = closure_13;
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
    const arg1 = set;
    const item = entries.forEach((entry) => {
      set.add(set(closure_1[6]).guildDirectoryEntryFromServer(entry).guildId);
    });
    closure_14[channelId.channelId] = set;
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/directory_channels/GuildDirectoryStore.tsx");

export default tmp2;
