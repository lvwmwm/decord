// Module ID: 15074
// Function ID: 113492
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: areDiscoveryCategoriesEqual

// Module 15074 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ DEFAULT_DISCOVERY_CATEGORY_ID: closure_8, OTHER_DISCOVERY_CATEGORY_ID: closure_9, DISCOVERY_ALL_CATEGORIES_ID: closure_10, DISCOVERY_SIDEBAR_CATEGORIES: closure_11 } = arg1(dependencyMap[5]));
let closure_12 = null;
let closure_13 = [];
let closure_14 = [];
let closure_15 = {};
let tmp3 = (Store) => {
  class GuildDiscoveryCategoryStore {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildDiscoveryCategoryStore);
      obj = closure_6(GuildDiscoveryCategoryStore);
      tmp2 = closure_5;
      if (closure_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildDiscoveryCategoryStore;
  callback2(GuildDiscoveryCategoryStore, Store);
  let obj = {
    key: "getPrimaryCategories",
    value() {
      return closure_13;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getDiscoveryCategories",
    value() {
      const mapped = closure_11.map((arg0) => closure_14.find((categoryId) => categoryId.categoryId === categoryId));
      const obj = { categoryId: closure_10 };
      const found = mapped.filter(GuildDiscoveryCategoryStore(closure_2[7]).isNotNullish);
      const intl = GuildDiscoveryCategoryStore(closure_2[8]).intl;
      obj.name = intl.string(GuildDiscoveryCategoryStore(closure_2[8]).t.Ym2Ri6);
      const items = [obj, ...found];
      return items;
    }
  };
  items[1] = obj;
  obj = {
    key: "getClanDiscoveryCategories",
    value() {
      const mapped = closure_11.map((arg0) => closure_14.find((categoryId) => categoryId.categoryId === categoryId));
      const obj = { categoryId: closure_10 };
      const found = mapped.filter(GuildDiscoveryCategoryStore(closure_2[7]).isNotNullish);
      const intl = GuildDiscoveryCategoryStore(closure_2[8]).intl;
      obj.name = intl.string(GuildDiscoveryCategoryStore(closure_2[8]).t.QToH29);
      const items = [obj, ...found];
      return items;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAllCategories",
    value() {
      return closure_14;
    }
  };
  items[4] = {
    key: "getFetchedLocale",
    value() {
      return closure_12;
    }
  };
  items[5] = {
    key: "getCategoryName",
    value(arg0) {
      if (arg0 === closure_10) {
        const intl = GuildDiscoveryCategoryStore(closure_2[8]).intl;
        let stringResult = intl.string(GuildDiscoveryCategoryStore(closure_2[8]).t.Ym2Ri6);
      } else {
        stringResult = closure_15[arg0];
      }
      return stringResult;
    }
  };
  return callback(GuildDiscoveryCategoryStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp3.displayName = "GuildDiscoveryCategoryStore";
tmp3 = new tmp3(importDefault(dependencyMap[10]), {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function handleCategoryFetchSuccess(categories) {
    let categoryId;
    let name;
    categories = categories.categories;
    let closure_0;
    const items = [];
    const importDefault = items;
    const items1 = [];
    const dependencyMap = items1;
    const sorted = categories.sort((name, name2) => {
      let num = 1;
      if (name.name < name2.name) {
        num = -1;
      }
      return num;
    });
    const item = sorted.forEach((arg0) => {
      let id;
      let name;
      ({ id, name } = arg0);
      if (id !== closure_8) {
        if (id !== closure_9) {
          if (true === tmp) {
            let obj = { categoryId: id, name };
            items.push(obj);
          }
          obj = { categoryId: id, name };
          items1.push(obj);
          closure_15[id] = name;
        } else {
          obj = { categoryId: id, name };
          let closure_0 = obj;
        }
      }
    });
    if (null != closure_0) {
      ({ categoryId, name } = closure_0);
      const obj = { categoryId, name };
      items.push(obj);
      closure_15[categoryId] = name;
    }
    const locale = categories.locale;
    let closure_13 = items;
    let closure_14 = items1;
  }
});
const obj = {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function handleCategoryFetchSuccess(categories) {
    let categoryId;
    let name;
    categories = categories.categories;
    let closure_0;
    const items = [];
    const importDefault = items;
    const items1 = [];
    const dependencyMap = items1;
    const sorted = categories.sort((name, name2) => {
      let num = 1;
      if (name.name < name2.name) {
        num = -1;
      }
      return num;
    });
    const item = sorted.forEach((arg0) => {
      let id;
      let name;
      ({ id, name } = arg0);
      if (id !== closure_8) {
        if (id !== closure_9) {
          if (true === tmp) {
            let obj = { categoryId: id, name };
            items.push(obj);
          }
          obj = { categoryId: id, name };
          items1.push(obj);
          closure_15[id] = name;
        } else {
          obj = { categoryId: id, name };
          let closure_0 = obj;
        }
      }
    });
    if (null != closure_0) {
      ({ categoryId, name } = closure_0);
      const obj = { categoryId, name };
      items.push(obj);
      closure_15[categoryId] = name;
    }
    const locale = categories.locale;
    let closure_13 = items;
    let closure_14 = items1;
  }
};
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx");

export default tmp3;
export const areDiscoveryCategoriesEqual = function areDiscoveryCategoriesEqual(arr, arr2) {
  const mapped = arr.map((arg0) => {
    const items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = arg0);
    return items;
  });
  return importDefault(dependencyMap[6]).isEqual(mapped, arr2.map((arg0) => {
    const items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = arg0);
    return items;
  }));
};
