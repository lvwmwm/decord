// Module ID: 13388
// Function ID: 102911
// Name: _createForOfIteratorHelperLoose
// Dependencies: [662, 653, 566, 1317, 22, 1318, 587, 21, 2]

// Module 13388 (_createForOfIteratorHelperLoose)
import MAX_FAVORITES from "MAX_FAVORITES";
import { ID_REGEX } from "ME";

let closure_3;
let closure_4;
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
function readFavoriteGIFs(arg0) {
  let c0 = 1;
  const importDefault = { IMAGE: "IMAGE", VIDEO: "VIDEO" };
  const PersistedStore = importDefault(state[2]).PersistedStore;
  const items = [
    (favorites) => {
      if (null == favorites) {
        let obj = { favorites: [], timesFavorited: 0 };
        let tmp2 = obj;
      } else {
        const _Array = Array;
        tmp2 = favorites;
        if (Array.isArray(favorites)) {
          obj = { favorites, timesFavorited: 0 };
          tmp2 = obj;
        }
      }
      return tmp2;
    },
    (favorites) => {
      let tmp = favorites;
      if (!Array.isArray(favorites.favorites)) {
        const obj = { favorites: [], timesFavorited: 0 };
        tmp = obj;
      }
      return tmp;
    }
  ];
  state = PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", items).state;
  if (null != state) {
    if (0 !== state.favorites.length) {
      const favorites = state.favorites;
      const mapped = favorites.map((format) => {
        const FavoriteGIF = v1(state[3]).FavoriteGIF;
        let obj = FavoriteGIF.create();
        format = format.format;
        if (constants.IMAGE === format) {
          let NONE = v1(state[3]).GIFType.IMAGE;
        } else if (constants.VIDEO === format) {
          NONE = v1(state[3]).GIFType.VIDEO;
        } else {
          const format2 = format.format;
          NONE = v1(state[3]).GIFType.NONE;
        }
        obj.format = NONE;
        ({ src: tmp.src, width: tmp.width, height: tmp.height } = format);
        obj.order = state.favorites.length - arg1 + v1;
        obj = { url: format.url, favorite: obj };
        return obj;
      });
    }
    return [];
  }
}
({ MAX_FAVORITES: closure_3, MAX_FAVORITE_GIFS_SIZE: closure_4 } = MAX_FAVORITES);
let obj = {
  version: 2,
  run(favoriteGifs) {
    let done;
    const arr = readFavoriteGIFs(1);
    if (0 === arr.length) {
      return false;
    } else {
      if (null == favoriteGifs.favoriteGifs) {
        const FavoriteGIFs = require(1317) /* _callSuper */.FavoriteGIFs;
        favoriteGifs.favoriteGifs = FavoriteGIFs.create();
      }
      favoriteGifs.favoriteGifs.gifs = {};
      const tmp4 = _createForOfIteratorHelperLoose(arr);
      let iter = tmp4();
      if (!iter.done) {
        do {
          let value = iter.value;
          favoriteGifs.favoriteGifs.gifs[value.url] = value.favorite;
          let iter2 = tmp4();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      favoriteGifs.favoriteGifs.hideTooltip = arr.length > 2;
      return true;
    }
  },
  cleanup() {

  }
};
let items = [obj, , , , , , , , ];
obj = {
  version: 3,
  run(favoriteStickers) {
    const PersistedStore = importDefault(566).PersistedStore;
    const items = [
      (arg0) => {
        let tmp = arg0;
        if (null == arg0) {
          const obj = { usageHistory: {}, favorites: [] };
          tmp = obj;
        } else {
          const _Object = Object;
        }
        return tmp;
      },
      (favorites) => {
        if (null != favorites) {
          const _Object = Object;
          if (0 !== Object.keys(favorites).length) {
            if (null == favorites.favorites) {
              favorites.favorites = [];
            }
          }
          return { usageHistory: {}, favorites: [] };
        }
      }
    ];
    const state = PersistedStore.migrateAndReadStoreState("StickersPersistedStore", items).state;
    if (null == state) {
      return false;
    } else {
      let flag = false;
      if (state.favorites.length > 0) {
        const FavoriteStickers = require(1317) /* _callSuper */.FavoriteStickers;
        favoriteStickers.favoriteStickers = FavoriteStickers.create();
        let obj = importDefault(22);
        favoriteStickers.favoriteStickers.stickerIds = importDefault(22).uniq(state.favorites).slice(0, closure_3);
        flag = true;
        const uniqResult = importDefault(22).uniq(state.favorites);
      }
      if (obj2.size(state.usageHistory) > 0) {
        const StickerFrecency = require(1317) /* _callSuper */.StickerFrecency;
        favoriteStickers.stickerFrecency = StickerFrecency.create();
        favoriteStickers.stickerFrecency.stickers = require(1318) /* _createForOfIteratorHelperLoose */.serializeUsageHistory(state.usageHistory, 100);
        flag = true;
        const obj3 = require(1318) /* _createForOfIteratorHelperLoose */;
      }
      return flag;
    }
  },
  cleanup() {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove("StickersPersistedStore");
  }
};
items[1] = obj;
obj = {
  version: 4,
  run(favoriteEmojis) {
    const PersistedStore = importDefault(566).PersistedStore;
    const items = [
      () => {
        const obj = {};
        const Storage = outer1_0(outer1_2[6]).Storage;
        obj.usageHistory = Storage.get("EmojiUsageHistory") || {};
        return obj;
      }
    ];
    const state = PersistedStore.migrateAndReadStoreState("EmojiStore", items).state;
    if (null == state) {
      return false;
    } else {
      let tmp = null != state.favorites;
      if (tmp) {
        tmp = state.favorites.length > 0;
      }
      let flag = false;
      if (tmp) {
        const FavoriteEmojis = require(1317) /* _callSuper */.FavoriteEmojis;
        favoriteEmojis.favoriteEmojis = FavoriteEmojis.create();
        let obj = importDefault(22);
        favoriteEmojis.favoriteEmojis.emojis = importDefault(22).uniq(state.favorites).slice(0, closure_3);
        flag = true;
        const uniqResult = importDefault(22).uniq(state.favorites);
      }
      if (obj2.size(state.usageHistory) > 0) {
        const EmojiFrecency = require(1317) /* _callSuper */.EmojiFrecency;
        favoriteEmojis.emojiFrecency = EmojiFrecency.create();
        favoriteEmojis.emojiFrecency.emojis = require(1318) /* _createForOfIteratorHelperLoose */.serializeUsageHistory(state.usageHistory, 100);
        flag = true;
        const obj3 = require(1318) /* _createForOfIteratorHelperLoose */;
      }
      return flag;
    }
  },
  cleanup() {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove("EmojiStore");
    const Storage2 = require(587) /* Storage */.Storage;
    Storage2.remove("EmojiUsageHistory");
    const Storage3 = require(587) /* Storage */.Storage;
    Storage3.remove("EmojiDiversitySurrogate");
  }
};
items[2] = obj;
items[3] = {
  version: 6,
  run(favoriteGifs) {
    let FavoriteGIFs3;
    let favorite;
    let iter;
    let url;
    if (null == favoriteGifs.favoriteGifs) {
      const FavoriteGIFs = arr(1317).FavoriteGIFs;
      favoriteGifs.favoriteGifs = FavoriteGIFs.create();
    }
    if (null == favoriteGifs.favoriteGifs.gifs) {
      favoriteGifs.favoriteGifs.gifs = {};
    }
    arr = readFavoriteGIFs(1);
    if (0 === arr.length) {
      return false;
    } else {
      const values = importDefault(22)(favoriteGifs.favoriteGifs.gifs).values();
      const obj = importDefault(22)(favoriteGifs.favoriteGifs.gifs);
      const item = values.sortBy("order").forEach((arg0, arg1) => {
        const sum = arr.length + 1 + arg1;
        arg0.order = sum;
        return sum;
      });
      const FavoriteGIFs4 = arr(1317).FavoriteGIFs;
      let length = FavoriteGIFs4.toBinary(favoriteGifs.favoriteGifs).length;
      const tmp25 = _createForOfIteratorHelperLoose(arr);
      const iter3 = tmp25();
      let iter2 = iter3;
      let num2 = 0;
      if (!iter3.done) {
        do {
          ({ url, favorite } = iter2.value);
          favorite.order = arr.length - num2;
          num2 = num2 + 1;
          if (url in favoriteGifs.favoriteGifs.gifs) {
            favoriteGifs.favoriteGifs.gifs[url].order = favorite.order;
            let sum1 = length;
            let tmp10 = tmp11;
          } else {
            let tmp5 = arr;
            let tmp6 = dependencyMap;
            let FavoriteGIF = arr(1317).FavoriteGIF;
            let sum = FavoriteGIF.toBinary(favorite).length + url.length + 7;
            let tmp8 = closure_4;
            sum1 = length;
            tmp10 = sum;
            if (length + sum <= closure_4) {
              sum1 = length + sum;
              favoriteGifs.favoriteGifs.gifs[url] = favorite;
              tmp10 = sum;
            }
          }
          iter = tmp25();
          length = sum1;
          tmp11 = tmp10;
          iter2 = iter;
        } while (!iter.done);
      }
      const FavoriteGIFs2 = arr(1317).FavoriteGIFs;
      if (FavoriteGIFs2.toBinary(favoriteGifs.favoriteGifs).length > closure_4) {
        do {
          let num4 = 0;
          let keys = Object.keys();
          if (keys !== undefined) {
            let tmp16 = keys[7];
            while (tmp16 !== undefined) {
              let tmp26 = tmp16;
              let gifs = favoriteGifs.favoriteGifs.gifs;
              delete tmp[tmp2];
              num4 = num4 + 1;
              if (num4 >= 10) {
                break;
              }
            }
          }
          let tmp17 = arr;
          let tmp18 = dependencyMap;
          FavoriteGIFs3 = arr(1317).FavoriteGIFs;
          let tmp19 = closure_4;
        } while (FavoriteGIFs3.toBinary(favoriteGifs.favoriteGifs).length > closure_4);
      }
      return true;
    }
  },
  cleanup() {

  }
};
items[4] = {
  version: 7,
  run(applicationCommandFrecency) {
    const PersistedStore = importDefault(566).PersistedStore;
    const state = PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []).state;
    if (null == state) {
      return false;
    } else {
      let flag = false;
      if (obj2.size(state.usageHistory) > 0) {
        const ApplicationCommandFrecency = require(1317) /* _callSuper */.ApplicationCommandFrecency;
        applicationCommandFrecency.applicationCommandFrecency = ApplicationCommandFrecency.create();
        applicationCommandFrecency.applicationCommandFrecency.applicationCommands = require(1318) /* _createForOfIteratorHelperLoose */.serializeUsageHistory(state.usageHistory, 500);
        flag = true;
        const obj = require(1318) /* _createForOfIteratorHelperLoose */;
      }
      return flag;
    }
  },
  cleanup() {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove("ApplicationCommandFrecency");
  }
};
items[5] = {
  version: 8,
  run(arg0) {
    const _require = arg0;
    const PersistedStore = state(566).PersistedStore;
    state = PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []).state;
    if (null == state) {
      return false;
    } else {
      let flag = false;
      if (obj2.size(state.favoriteSounds) > 0) {
        const FavoriteSoundboardSounds = _require(1317).FavoriteSoundboardSounds;
        arg0.favoriteSoundboardSounds = FavoriteSoundboardSounds.create();
        const keys = state(21).keys(state.favoriteSounds);
        let item = keys.forEach((arg0) => {
          const item = new Set(state.favoriteSounds[arg0]).forEach((arg0) => {
            const favoriteSoundboardSounds = outer1_0.favoriteSoundboardSounds;
            if (null != favoriteSoundboardSounds) {
              const soundIds = favoriteSoundboardSounds.soundIds;
              soundIds.push(arg0);
            }
          });
        });
        flag = true;
        const obj = state(21);
      }
      return flag;
    }
  },
  cleanup() {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove("SoundboardFavoriteStore");
  }
};
items[6] = {
  version: 9,
  run(guildAndChannelFrecency) {
    const Storage = require(587) /* Storage */.Storage;
    const value = Storage.get("selectedChannelGuildFrecency");
    if (null == value) {
      return false;
    } else {
      for (const key10012 in value) {
        let tmp7 = key10012;
        let tmp8 = ID_REGEX;
        if (ID_REGEX.test(key10012)) {
          continue;
        } else {
          delete tmp[tmp2];
          continue;
        }
        continue;
      }
      const GuildAndChannelFrecency = require(1317) /* _callSuper */.GuildAndChannelFrecency;
      guildAndChannelFrecency.guildAndChannelFrecency = GuildAndChannelFrecency.create();
      guildAndChannelFrecency.guildAndChannelFrecency.guildAndChannels = require(1318) /* _createForOfIteratorHelperLoose */.serializeUsageHistory(value, 100);
      return true;
    }
  },
  cleanup() {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove("selectedChannelGuildFrecency");
  }
};
items[7] = {
  version: 10,
  run(emojiFrecency) {
    if (null == emojiFrecency.emojiFrecency) {
      return false;
    } else {
      let emojis = emojiFrecency.emojiFrecency.emojis;
      if (null == emojis) {
        emojis = {};
      }
      let flag = false;
      if (obj2.size(emojis) > 0) {
        const EmojiFrecency = require(1317) /* _callSuper */.EmojiFrecency;
        const obj = EmojiFrecency.create();
        const EmojiFrecency2 = require(1317) /* _callSuper */.EmojiFrecency;
        EmojiFrecency2.mergePartial(obj, emojiFrecency.emojiFrecency);
        if (null != emojiFrecency.emojiReactionFrecency) {
          const EmojiFrecency3 = require(1317) /* _callSuper */.EmojiFrecency;
          EmojiFrecency3.mergePartial(obj, emojiFrecency.emojiReactionFrecency);
        }
        emojiFrecency.emojiReactionFrecency = obj;
        flag = true;
      }
      return flag;
    }
  },
  cleanup() {

  }
};
items[8] = {
  version: 11,
  run(favoriteGifs) {
    if (null != favoriteGifs.favoriteGifs) {
      if (null != favoriteGifs.favoriteGifs.gifs) {
        let flag3 = false;
        let flag2 = false;
        const keys = Object.keys();
        if (keys !== undefined) {
          let flag = flag3;
          flag2 = flag3;
          while (keys[tmp] !== undefined) {
            let tmp10 = tmp2;
            let tmp11 = favoriteGifs.favoriteGifs.gifs[tmp2];
            flag3 = flag;
            if (null == tmp11) {
              continue;
            } else {
              let src = tmp11.src;
              if (src.startsWith("//")) {
                let _HermesInternal = HermesInternal;
                tmp11.src = "https:" + tmp11.src;
                flag = true;
              }
              let tmp3 = require;
              let tmp4 = dependencyMap;
              let isMatch = tmp11.format !== require(1317) /* _callSuper */.GIFType.IMAGE;
              if (isMatch) {
                let obj = /\.(webp|avif|gif)(\?|$)/i;
                isMatch = obj.test(tmp11.src);
              }
              if (isMatch) {
                let tmp6 = require;
                let tmp7 = dependencyMap;
                tmp11.format = require(1317) /* _callSuper */.GIFType.IMAGE;
                flag = true;
              }
              flag3 = flag;
              continue;
            }
            continue;
          }
        }
        return flag2;
      }
    }
    return false;
  },
  cleanup() {

  }
};
const result = require("initialize").fileFinishedImporting("modules/user_settings/FrecencySettingsMigrations.tsx");

export default items;
