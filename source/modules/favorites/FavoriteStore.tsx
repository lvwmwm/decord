// Module ID: 1351
// Function ID: 16103
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1316, 1352, 1386, 653, 22, 1282, 566, 686, 2]

// Module 1351 (_isNativeReflectConstruct)
import _callSuper from "_callSuper";
import date from "date";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { createChannelRecord } from "_callSuper";
import { FAVORITES_UNCATEGORIZED_PARENT_ID as closure_9 } from "date";
import ME from "ME";

let closure_10;
let closure_11;
const require = arg1;
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
      let tmp19 = key10011;
      let tmp20 = favoriteChannels[key10011];
      obj = { id: key10011 };
      let nickname = null;
      if ("" !== tmp20.nickname) {
        nickname = tmp20.nickname;
      }
      obj.nickname = nickname;
      ({ type: obj4.type, channelType } = tmp20);
      let value;
      if (null != channelType) {
        value = channelType.value;
      }
      obj.channelType = value;
      obj.order = tmp20.position;
      let tmp6 = closure_9;
      let parentId = null;
      if (tmp20.parentId !== closure_9) {
        parentId = tmp20.parentId;
      }
      obj.parentId = parentId;
      obj[key10011] = obj;
      continue;
    }
  }
  value = undefined;
  if (null != favorites) {
    if (null != favorites.guildVisible) {
      value = iter.value;
    }
  }
  let tmp9 = value;
  if (null == value) {
    tmp9 = !require(22) /* apply */.isEmpty(obj);
    const obj2 = require(22) /* apply */;
  }
  let flag = c13 !== tmp2;
  if (!flag) {
    flag = c14 !== tmp9;
  }
  if (!flag) {
    flag = c15 !== tmp12;
  }
  if (!flag) {
    flag = !require(22) /* apply */.isEqual(obj, obj);
    const obj3 = require(22) /* apply */;
  }
  if (flag) {
    c13 = tmp2;
    c14 = tmp9;
    c15 = tmp12;
    flag = true;
  }
  return flag;
}
({ ChannelTypes: closure_10, FAVORITES: closure_11 } = ME);
let closure_12 = {};
let c13 = false;
let c14 = false;
let c15 = false;
let tmp3 = ((Store) => {
  class FavoriteStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, FavoriteStore);
      obj = outer1_5(FavoriteStore);
      tmp2 = outer1_4;
      if (outer1_16()) {
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
  callback2(FavoriteStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7);
      outer1_17();
      const items = [outer1_7];
      this.syncWith(items, outer1_17);
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "getFavoriteChannels",
    value() {
      return outer1_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "favoriteGuildMuted",
    get() {
      return outer1_13;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "favoriteGuildEnabled",
    get() {
      return outer1_14;
    }
  };
  items[4] = {
    key: "favoriteGuildExplicitlyHidden",
    get() {
      return outer1_15;
    }
  };
  items[5] = {
    key: "isFavorite",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        tmp = null != outer1_12[arg0];
      }
      return tmp;
    }
  };
  items[6] = {
    key: "getFavorite",
    value(arg0) {
      if (null != arg0) {
        return outer1_12[arg0];
      }
    }
  };
  items[7] = {
    key: "getCategoryRecord",
    value(arg0) {
      let nickname;
      let tmp = null;
      if (arg0 in outer1_12) {
        tmp = null;
        if (outer1_12[arg0].type === FavoriteStore(outer1_1[10]).FavoriteChannelType.CATEGORY) {
          const obj = {};
          ({ id: obj.id, nickname } = outer1_12[arg0]);
          let str = "";
          if (null != nickname) {
            str = nickname;
          }
          obj.name = str;
          obj.type = outer1_10.GUILD_CATEGORY;
          obj.position = outer1_12[arg0].order;
          obj.guild_id = outer1_11;
          tmp = outer1_8(obj);
          const tmp7 = outer1_8;
        }
      }
      return tmp;
    }
  };
  items[8] = {
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
  items[9] = {
    key: "getFavoritesCount",
    value() {
      return Object.keys(this.getFavoriteChannels()).length;
    }
  };
  items[10] = {
    key: "hasStoredFavorites",
    value() {
      return !FavoriteStore(outer1_1[9]).isEmpty(this.getFavoriteChannels());
    }
  };
  return callback(FavoriteStore, items);
})(require("initialize").Store);
tmp3.displayName = "FavoriteStore";
tmp3 = new tmp3(require("dispatcher"), {});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/favorites/FavoriteStore.tsx");

export default tmp3;
