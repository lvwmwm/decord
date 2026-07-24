// Module ID: 15244
// Function ID: 116026
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 8484, 22, 1327, 1212, 566, 686, 2]
// Exports: areDiscoveryCategoriesEqual

// Module 15244 (_isNativeReflectConstruct)
import apply from "apply";
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import DEFAULT_DISCOVERY_CATEGORY_ID from "DEFAULT_DISCOVERY_CATEGORY_ID";

let closure_10;
let closure_11;
let closure_8;
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
({ DEFAULT_DISCOVERY_CATEGORY_ID: closure_8, OTHER_DISCOVERY_CATEGORY_ID: closure_9, DISCOVERY_ALL_CATEGORIES_ID: closure_10, DISCOVERY_SIDEBAR_CATEGORIES: closure_11 } = DEFAULT_DISCOVERY_CATEGORY_ID);
let c12 = null;
let closure_13 = [];
let closure_14 = [];
let closure_15 = {};
let tmp3 = ((Store) => {
  class GuildDiscoveryCategoryStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, GuildDiscoveryCategoryStore);
      obj = outer1_6(GuildDiscoveryCategoryStore);
      tmp2 = outer1_5;
      if (outer1_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildDiscoveryCategoryStore, Store);
  let obj = {
    key: "getPrimaryCategories",
    value() {
      return outer1_13;
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "getDiscoveryCategories",
    value() {
      const mapped = outer1_11.map((arg0) => {
        let closure_0 = arg0;
        return outer2_14.find((categoryId) => categoryId.categoryId === closure_0);
      });
      const obj = { categoryId: outer1_10 };
      const found = mapped.filter(GuildDiscoveryCategoryStore(outer1_2[7]).isNotNullish);
      const intl = GuildDiscoveryCategoryStore(outer1_2[8]).intl;
      obj.name = intl.string(GuildDiscoveryCategoryStore(outer1_2[8]).t.Ym2Ri6);
      const items = [obj, ...found];
      return items;
    }
  };
  items[1] = obj;
  obj = {
    key: "getClanDiscoveryCategories",
    value() {
      const mapped = outer1_11.map((arg0) => {
        let closure_0 = arg0;
        return outer2_14.find((categoryId) => categoryId.categoryId === closure_0);
      });
      const obj = { categoryId: outer1_10 };
      const found = mapped.filter(GuildDiscoveryCategoryStore(outer1_2[7]).isNotNullish);
      const intl = GuildDiscoveryCategoryStore(outer1_2[8]).intl;
      obj.name = intl.string(GuildDiscoveryCategoryStore(outer1_2[8]).t.QToH29);
      const items = [obj, ...found];
      return items;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAllCategories",
    value() {
      return outer1_14;
    }
  };
  items[4] = {
    key: "getFetchedLocale",
    value() {
      return outer1_12;
    }
  };
  items[5] = {
    key: "getCategoryName",
    value(arg0) {
      if (arg0 === outer1_10) {
        const intl = GuildDiscoveryCategoryStore(outer1_2[8]).intl;
        let stringResult = intl.string(GuildDiscoveryCategoryStore(outer1_2[8]).t.Ym2Ri6);
      } else {
        stringResult = outer1_15[arg0];
      }
      return stringResult;
    }
  };
  return callback(GuildDiscoveryCategoryStore, items);
})(require("initialize").Store);
tmp3.displayName = "GuildDiscoveryCategoryStore";
tmp3 = new tmp3(require("dispatcher"), {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function handleCategoryFetchSuccess(categories) {
    let categoryId;
    let name;
    categories = categories.categories;
    let c0;
    const items = [];
    const items1 = [];
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
      if (id !== outer1_8) {
        if (id !== outer1_9) {
          if (true === tmp) {
            let obj = { categoryId: id, name };
            items.push(obj);
          }
          obj = { categoryId: id, name };
          items1.push(obj);
          outer1_15[id] = name;
        } else {
          obj = { categoryId: id, name };
        }
      }
    });
    if (null != c0) {
      ({ categoryId, name } = c0);
      let obj = { categoryId, name };
      items.push(obj);
      closure_15[categoryId] = name;
    }
    const locale = categories.locale;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx");

export default tmp3;
export const areDiscoveryCategoriesEqual = function areDiscoveryCategoriesEqual(arr, arr2) {
  const mapped = arr.map((arg0) => {
    const items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = arg0);
    return items;
  });
  return importDefault(22).isEqual(mapped, arr2.map((arg0) => {
    const items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = arg0);
    return items;
  }));
};
