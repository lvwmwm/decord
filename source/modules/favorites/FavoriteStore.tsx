// Module ID: 1351
// Function ID: 16095
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1351 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function initializeFromUserSettings() {
  let channelType;
  const favorites = settings.settings.favorites;
  let muted;
  if (null != favorites) {
    muted = favorites.muted;
  }
  let obj = {};
  let favoriteChannels;
  if (null != favorites) {
    favoriteChannels = favorites.favoriteChannels;
  }
  if (null != favoriteChannels) {
    for (const key10011 in favoriteChannels) {
      let tmp16 = key10011;
      let tmp17 = favoriteChannels[key10011];
      obj = { id: key10011 };
      let nickname = null;
      if ("" !== tmp17.nickname) {
        nickname = tmp17.nickname;
      }
      obj.nickname = nickname;
      ({ type: obj4.type, channelType } = tmp17);
      let value;
      if (null != channelType) {
        value = channelType.value;
      }
      obj.channelType = value;
      obj.order = tmp17.position;
      let tmp6 = closure_9;
      let parentId = null;
      if (tmp17.parentId !== closure_9) {
        parentId = tmp17.parentId;
      }
      obj.parentId = parentId;
      obj[key10011] = obj;
    }
  }
  value = undefined;
  if (null != favorites) {
    if (null != favorites.guildVisible) {
      value = iter.value;
    }
  }
  if (null == value) {
    value = !arg1(dependencyMap[9]).isEmpty(obj);
    const obj2 = arg1(dependencyMap[9]);
  }
  let flag = closure_13 !== tmp2;
  if (!flag) {
    flag = closure_14 !== value;
  }
  if (!flag) {
    flag = !arg1(dependencyMap[9]).isEqual(closure_12, obj);
    const obj3 = arg1(dependencyMap[9]);
  }
  if (flag) {
    closure_13 = tmp2;
    closure_14 = value;
    closure_12 = obj;
    flag = true;
  }
  return flag;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const createChannelRecord = arg1(dependencyMap[6]).createChannelRecord;
let closure_9 = arg1(dependencyMap[7]).FAVORITES_UNCATEGORIZED_PARENT_ID;
({ ChannelTypes: closure_10, FAVORITES: closure_11 } = arg1(dependencyMap[8]));
let closure_12 = {};
let closure_13 = false;
let closure_14 = false;
let tmp3 = (Store) => {
  class FavoriteStore {
    constructor() {
      self = this;
      tmp = closure_2(this, FavoriteStore);
      obj = closure_5(FavoriteStore);
      tmp2 = closure_4;
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
  const arg1 = FavoriteStore;
  callback2(FavoriteStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
      callback4();
      const items = [closure_7];
      this.syncWith(items, callback4);
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getFavoriteChannels",
    value() {
      return closure_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "favoriteGuildMuted",
    get() {
      return closure_13;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "favoriteGuildEnabled",
    get() {
      return closure_14;
    }
  };
  items[4] = {
    key: "isFavorite",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        tmp = null != closure_12[arg0];
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getFavorite",
    value(arg0) {
      if (null != arg0) {
        return closure_12[arg0];
      }
    }
  };
  items[6] = {
    key: "getCategoryRecord",
    value(arg0) {
      let nickname;
      let tmp = null;
      if (arg0 in closure_12) {
        tmp = null;
        if (closure_12[arg0].type === FavoriteStore(closure_1[10]).FavoriteChannelType.CATEGORY) {
          const obj = {};
          ({ id: obj.id, nickname } = closure_12[arg0]);
          let str = "";
          if (null != nickname) {
            str = nickname;
          }
          obj.name = str;
          obj.type = constants.GUILD_CATEGORY;
          obj.position = closure_12[arg0].order;
          obj.guild_id = closure_11;
          tmp = closure_8(obj);
          const tmp7 = closure_8;
        }
      }
      return tmp;
    }
  };
  items[7] = {
    key: "getNickname",
    value(arg0) {
      const favorite = this.getFavorite(arg0);
      let nickname;
      if (null != favorite) {
        nickname = favorite.nickname;
      }
      let tmp3;
      if (null != nickname) {
        tmp3 = nickname;
      }
      return tmp3;
    }
  };
  items[8] = {
    key: "getFavoritesCount",
    value() {
      return Object.keys(this.getFavoriteChannels()).length;
    }
  };
  items[9] = {
    key: "hasStoredFavorites",
    value() {
      return !FavoriteStore(closure_1[9]).isEmpty(this.getFavoriteChannels());
    }
  };
  return callback(FavoriteStore, items);
}(importDefault(dependencyMap[11]).Store);
tmp3.displayName = "FavoriteStore";
tmp3 = new tmp3(importDefault(dependencyMap[12]), {});
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/favorites/FavoriteStore.tsx");

export default tmp3;
