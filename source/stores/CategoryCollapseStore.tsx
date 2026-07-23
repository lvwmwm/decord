// Module ID: 5076
// Function ID: 44152
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1316, 1348, 4469, 1907, 653, 1282, 1327, 5077, 566, 686, 2]

// Module 5076 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function incrementVersion() {
  closure_13 = closure_13 + 1;
}
function deleteCategory(id) {
  if (null == dependencyMap[id]) {
    return false;
  } else {
    delete tmp[tmp2];
  }
}
function getFavoriteChannelsProto() {
  const favorites = settings.settings.favorites;
  let favoriteChannels;
  if (null != favorites) {
    favoriteChannels = favorites.favoriteChannels;
  }
  return favoriteChannels;
}
function isFavoriteCategory(id) {
  const tmp = getFavoriteChannelsProto();
  let type;
  if (null != tmp) {
    if (null != tmp[id]) {
      type = tmp4.type;
    }
  }
  return type === require(1282) /* _callSuper */.FavoriteChannelType.CATEGORY;
}
function syncFavoriteCategoryCollapse() {
  const tmp4 = getFavoriteChannelsProto();
  if (null == tmp4) {
    return false;
  } else {
    let flag3 = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      let flag = flag3;
      flag2 = flag3;
      while (keys[tmp] !== undefined) {
        let tmp12 = tmp5;
        let tmp13 = tmp4[tmp5];
        let tmp14 = require;
        let tmp15 = dependencyMap;
        flag3 = flag;
        if (tmp13.type !== require(1282) /* _callSuper */.FavoriteChannelType.CATEGORY) {
          continue;
        } else {
          let tmp6 = dependencyMap;
          let tmp7 = dependencyMap[tmp5];
          if (tmp13.collapsed) {
            if (!tmp7) {
              let tmp9 = dependencyMap;
              dependencyMap[tmp5] = true;
              flag = true;
            }
            flag3 = flag;
          } else {
            flag3 = flag;
            if (tmp7) {
              let tmp8 = dependencyMap;
              delete tmp3[tmp2];
              flag3 = true;
            }
          }
          continue;
        }
        continue;
      }
    }
    return flag2;
  }
}
let closure_12 = {};
let c13 = 0;
let tmp2 = ((PersistedStore) => {
  class CategoryCollapseStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, CategoryCollapseStore);
      obj = outer1_5(CategoryCollapseStore);
      tmp2 = outer1_4;
      if (outer1_14()) {
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
  callback2(CategoryCollapseStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      const self = this;
      this.waitFor(outer1_8, outer1_9, outer1_10, outer1_7);
      this.removeChangeListener(outer1_17);
      this.addChangeListener(outer1_17);
      if (null == arg0) {
        obj = {};
      }
      const outer1_12 = obj;
      const items = [outer1_7];
      self.syncWith(items, outer1_21);
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "isCollapsed",
    value(arg0) {
      let tmp = null == arg0;
      if (!tmp) {
        tmp = "null" === arg0;
      }
      if (!tmp) {
        tmp = !outer1_12[arg0];
      }
      let tmp3 = !tmp;
      if (!tmp) {
        tmp3 = outer1_12[arg0];
      }
      return tmp3;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCollapsedCategories",
    value() {
      return outer1_12;
    }
  };
  items[4] = {
    key: "version",
    get() {
      return outer1_13;
    }
  };
  return callback(CategoryCollapseStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "CategoryCollapseStore";
tmp2.persistKey = "collapsedCategories";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(userGuildSettings) {
    let iter6;
    if (!userGuildSettings.userGuildSettings.partial) {
      let closure_12 = {};
    }
    const tmp3 = _createForOfIteratorHelperLoose(userGuildSettings.userGuildSettings.entries);
    const iter = tmp3();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp5 = tmp4;
        if (null != value.channel_overrides) {
          let tmp6 = _createForOfIteratorHelperLoose;
          let tmp7 = _createForOfIteratorHelperLoose(value.channel_overrides);
          let iter3 = tmp7();
          let iter4 = iter3;
          let tmp8 = iter3;
          let tmp9 = tmp7;
          tmp5 = tmp4;
          if (!iter3.done) {
            do {
              value = iter4.value;
              if (value.collapsed) {
                closure_12[value.channel_id] = true;
              } else {
                delete tmp2[tmp];
              }
              iter5 = tmp7();
              iter4 = iter5;
              let tmp10 = iter5;
              let tmp11 = tmp7;
              tmp5 = value;
            } while (!iter5.done);
          }
        }
        iter6 = tmp3();
        tmp4 = tmp5;
        iter2 = iter6;
      } while (!iter6.done);
    }
    syncFavoriteCategoryCollapse();
  },
  USER_GUILD_SETTINGS_FULL_UPDATE: function handleUserGuildSettingsFullUpdate(userGuildSettings) {
    let iter5;
    userGuildSettings = userGuildSettings.userGuildSettings;
    const mapped = userGuildSettings.map((guild_id) => guild_id.guild_id);
    for (const key10024 in closure_12) {
      let tmp10 = key10024;
      let tmp11 = channel;
      let channel = channel.getChannel(key10024);
      let hasItem = null != channel;
      if (hasItem) {
        hasItem = null != channel.guild_id;
      }
      if (hasItem) {
        hasItem = set.has(channel.guild_id);
      }
      if (!hasItem) {
        continue;
      } else {
        let tmp4 = closure_12;
        let id = channel.id;
        delete tmp2[tmp];
        continue;
      }
      continue;
    }
    const tmp5 = _createForOfIteratorHelperLoose(userGuildSettings);
    const iter = tmp5();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp6 = _createForOfIteratorHelperLoose;
        let tmp7 = _createForOfIteratorHelperLoose(iter2.value.channel_overrides);
        let iter3 = tmp7();
        if (!iter3.done) {
          do {
            let value = iter3.value;
            if (value.collapsed) {
              let tmp8 = closure_12;
              closure_12[value.channel_id] = true;
            }
            iter4 = tmp7();
            iter3 = iter4;
            let tmp9 = value;
          } while (!iter4.done);
        }
        iter5 = tmp5();
        iter2 = iter5;
      } while (!iter5.done);
    }
  },
  CATEGORY_COLLAPSE: function handleCategoryCollapse(id) {
    id = id.id;
    const tmp = isFavoriteCategory(id);
    let tmp2 = !tmp;
    if (!tmp) {
      if (!dependencyMap[id]) {
        dependencyMap[id] = true;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  CATEGORY_EXPAND: function handleCategoryExpand(id) {
    id = id.id;
    const tmp = isFavoriteCategory(id);
    let tmp2 = !tmp;
    if (!tmp) {
      tmp2 = deleteCategory(id);
    }
    return tmp2;
  },
  CATEGORY_COLLAPSE_ALL: function handleCategoryCollapseAll(guildId) {
    guildId = guildId.guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      return false;
    } else {
      const item = store.getChannels(guildId)[ChannelTypes.GUILD_CATEGORY].forEach((channel) => {
        channel = channel.channel;
        if ("null" !== channel.id) {
          outer1_12[channel.id] = true;
        }
      });
    }
    obj = require(5077) /* isFavoritesGuildId */;
  },
  CATEGORY_EXPAND_ALL: function handleCategoryExpandAll(guildId) {
    guildId = guildId.guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      return false;
    } else {
      const item = store.getChannels(guildId)[ChannelTypes.GUILD_CATEGORY].forEach((arg0) => {
        delete tmp2[tmp];
      });
    }
    obj = require(5077) /* isFavoritesGuildId */;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    return deleteCategory(channel.channel.id);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/CategoryCollapseStore.tsx");

export default tmp2;
