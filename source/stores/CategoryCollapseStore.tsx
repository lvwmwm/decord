// Module ID: 5347
// Function ID: 45716
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5347 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  if (null == closure_12[id]) {
    return false;
  } else {
    delete r0[r1];
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
  return type === arg1(dependencyMap[10]).FavoriteChannelType.CATEGORY;
}
function syncFavoriteCategoryCollapse() {
  const tmp2 = getFavoriteChannelsProto();
  if (null == tmp2) {
    return false;
  } else {
    let flag3 = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      let flag = flag3;
      flag2 = flag3;
      while (keys[tmp] !== undefined) {
        let tmp10 = tmp3;
        let tmp11 = tmp2[tmp3];
        let tmp12 = arg1;
        let tmp13 = dependencyMap;
        flag3 = flag;
        if (tmp11.type !== arg1(dependencyMap[10]).FavoriteChannelType.CATEGORY) {
          continue;
        } else {
          let tmp4 = closure_12;
          let tmp5 = closure_12[tmp3];
          if (tmp11.collapsed) {
            if (!tmp5) {
              let tmp7 = closure_12;
              closure_12[tmp3] = true;
              flag = true;
            }
            flag3 = flag;
          } else {
            flag3 = flag;
            if (tmp5) {
              let tmp6 = closure_12;
              delete r15[r14];
              flag3 = true;
            }
          }
          // continue
        }
        continue;
      }
    }
    return flag2;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
const ChannelTypes = arg1(dependencyMap[9]).ChannelTypes;
let closure_12 = {};
let closure_13 = 0;
let tmp2 = (PersistedStore) => {
  class CategoryCollapseStore {
    constructor() {
      self = this;
      tmp = closure_2(this, CategoryCollapseStore);
      obj = closure_5(CategoryCollapseStore);
      tmp2 = closure_4;
      if (closure_14()) {
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
  const arg1 = CategoryCollapseStore;
  callback2(CategoryCollapseStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      const self = this;
      this.waitFor(closure_8, closure_9, closure_10, closure_7);
      this.removeChangeListener(closure_17);
      this.addChangeListener(closure_17);
      if (null == arg0) {
        obj = {};
      }
      const items = [closure_7];
      self.syncWith(items, closure_21);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_12;
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
        tmp = !closure_12[arg0];
      }
      let tmp3 = !tmp;
      if (!tmp) {
        tmp3 = closure_12[arg0];
      }
      return tmp3;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCollapsedCategories",
    value() {
      return closure_12;
    }
  };
  items[4] = {
    key: "version",
    get() {
      return closure_13;
    }
  };
  return callback(CategoryCollapseStore, items);
}(importDefault(dependencyMap[13]).PersistedStore);
tmp2.displayName = "CategoryCollapseStore";
tmp2.persistKey = "collapsedCategories";
tmp2 = new tmp2(importDefault(dependencyMap[14]), {
  CONNECTION_OPEN: function handleConnectionOpen(userGuildSettings) {
    let iter6;
    if (!userGuildSettings.userGuildSettings.partial) {
      let closure_12 = {};
    }
    const tmp = _createForOfIteratorHelperLoose(userGuildSettings.userGuildSettings.entries);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp3 = tmp2;
        if (null != value.channel_overrides) {
          let tmp4 = closure_15;
          let tmp5 = closure_15(value.channel_overrides);
          let iter3 = tmp5();
          let iter4 = iter3;
          let tmp6 = iter3;
          let tmp7 = tmp5;
          tmp3 = tmp2;
          if (!iter3.done) {
            do {
              value = iter4.value;
              if (value.collapsed) {
                closure_12[value.channel_id] = true;
              } else {
                delete r14[r2];
              }
              let iter5 = tmp5();
              iter4 = iter5;
              let tmp8 = iter5;
              let tmp9 = tmp5;
              tmp3 = value;
            } while (!iter5.done);
          }
        }
        iter6 = tmp();
        let tmp2 = tmp3;
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
      let tmp8 = key10024;
      let tmp9 = closure_8;
      let channel = closure_8.getChannel(key10024);
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
        let tmp2 = closure_12;
        let id = channel.id;
        delete r11[r10];
        // continue
      }
      continue;
    }
    const tmp3 = _createForOfIteratorHelperLoose(userGuildSettings);
    const iter = tmp3();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp4 = closure_15;
        let tmp5 = closure_15(iter2.value.channel_overrides);
        let iter3 = tmp5();
        if (!iter3.done) {
          do {
            let value = iter3.value;
            if (value.collapsed) {
              let tmp6 = closure_12;
              closure_12[value.channel_id] = true;
            }
            let iter4 = tmp5();
            iter3 = iter4;
            let tmp7 = value;
          } while (!iter4.done);
        }
        iter5 = tmp3();
        iter2 = iter5;
      } while (!iter5.done);
    }
  },
  CATEGORY_COLLAPSE: function handleCategoryCollapse(id) {
    id = id.id;
    const tmp = isFavoriteCategory(id);
    let tmp2 = !tmp;
    if (!tmp) {
      if (!closure_12[id]) {
        closure_12[id] = true;
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
      const item = store.getChannels(guildId)[closure_11.GUILD_CATEGORY].forEach((channel) => {
        channel = channel.channel;
        if ("null" !== channel.id) {
          closure_12[channel.id] = true;
        }
      });
    }
    const obj = arg1(dependencyMap[12]);
  },
  CATEGORY_EXPAND_ALL: function handleCategoryExpandAll(guildId) {
    guildId = guildId.guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      return false;
    } else {
      const item = store.getChannels(guildId)[closure_11.GUILD_CATEGORY].forEach((arg0) => {
        delete r1[r0];
      });
    }
    const obj = arg1(dependencyMap[12]);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    return deleteCategory(channel.channel.id);
  }
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("stores/CategoryCollapseStore.tsx");

export default tmp2;
