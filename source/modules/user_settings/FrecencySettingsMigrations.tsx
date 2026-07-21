// Module ID: 13265
// Function ID: 100700
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 13265 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
function readFavoriteGIFs(arg0) {
  let closure_0 = 1;
  const importDefault = { IMAGE: "IMAGE", VIDEO: "VIDEO" };
  const PersistedStore = importDefault(dependencyMap[2]).PersistedStore;
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
  const state = PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", items).state;
  const dependencyMap = state;
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
const _module = require(dependencyMap[0]);
({ MAX_FAVORITES: closure_3, MAX_FAVORITE_GIFS_SIZE: closure_4 } = _module);
const ID_REGEX = require(dependencyMap[1]).ID_REGEX;
let obj = {
  version: 2,
  run(favoriteGifs) {
    let done;
    const arr = readFavoriteGIFs(1);
    if (0 === arr.length) {
      return false;
    } else {
      if (null == favoriteGifs.favoriteGifs) {
        const FavoriteGIFs = require(dependencyMap[3]).FavoriteGIFs;
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
const items = [obj, , , , , , , , ];
obj = {
  version: 3,
  run(favoriteStickers) {
    const PersistedStore = importDefault(dependencyMap[2]).PersistedStore;
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
        const FavoriteStickers = require(dependencyMap[3]).FavoriteStickers;
        favoriteStickers.favoriteStickers = FavoriteStickers.create();
        const obj = importDefault(dependencyMap[4]);
        favoriteStickers.favoriteStickers.stickerIds = importDefault(dependencyMap[4]).uniq(state.favorites).slice(0, closure_3);
        flag = true;
        const uniqResult = importDefault(dependencyMap[4]).uniq(state.favorites);
      }
      if (obj2.size(state.usageHistory) > 0) {
        const StickerFrecency = require(dependencyMap[3]).StickerFrecency;
        favoriteStickers.stickerFrecency = StickerFrecency.create();
        favoriteStickers.stickerFrecency.stickers = require(dependencyMap[5]).serializeUsageHistory(state.usageHistory, 100);
        flag = true;
        const obj3 = require(dependencyMap[5]);
      }
      return flag;
    }
  },
  cleanup() {
    const Storage = require(dependencyMap[6]).Storage;
    Storage.remove("StickersPersistedStore");
  }
};
items[1] = obj;
obj = {
  version: 4,
  run(favoriteEmojis) {
    const PersistedStore = importDefault(dependencyMap[2]).PersistedStore;
    const items = [
      () => {
        const obj = {};
        const Storage = callback(closure_2[6]).Storage;
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
        const FavoriteEmojis = require(dependencyMap[3]).FavoriteEmojis;
        favoriteEmojis.favoriteEmojis = FavoriteEmojis.create();
        const obj = importDefault(dependencyMap[4]);
        favoriteEmojis.favoriteEmojis.emojis = importDefault(dependencyMap[4]).uniq(state.favorites).slice(0, closure_3);
        flag = true;
        const uniqResult = importDefault(dependencyMap[4]).uniq(state.favorites);
      }
      if (obj2.size(state.usageHistory) > 0) {
        const EmojiFrecency = require(dependencyMap[3]).EmojiFrecency;
        favoriteEmojis.emojiFrecency = EmojiFrecency.create();
        favoriteEmojis.emojiFrecency.emojis = require(dependencyMap[5]).serializeUsageHistory(state.usageHistory, 100);
        flag = true;
        const obj3 = require(dependencyMap[5]);
      }
      return flag;
    }
  },
  cleanup() {
    const Storage = require(dependencyMap[6]).Storage;
    Storage.remove("EmojiStore");
    const Storage2 = require(dependencyMap[6]).Storage;
    Storage2.remove("EmojiUsageHistory");
    const Storage3 = require(dependencyMap[6]).Storage;
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
      const FavoriteGIFs = require(dependencyMap[3]).FavoriteGIFs;
      favoriteGifs.favoriteGifs = FavoriteGIFs.create();
    }
    if (null == favoriteGifs.favoriteGifs.gifs) {
      favoriteGifs.favoriteGifs.gifs = {};
    }
    const arr = readFavoriteGIFs(1);
    const require = arr;
    if (0 === arr.length) {
      return false;
    } else {
      const values = importDefault(dependencyMap[4])(favoriteGifs.favoriteGifs.gifs).values();
      const obj = importDefault(dependencyMap[4])(favoriteGifs.favoriteGifs.gifs);
      const item = values.sortBy("order").forEach((arg0, arg1) => {
        const sum = arr.length + 1 + arg1;
        arg0.order = sum;
        return sum;
      });
      const FavoriteGIFs4 = require(dependencyMap[3]).FavoriteGIFs;
      let length = FavoriteGIFs4.toBinary(favoriteGifs.favoriteGifs).length;
      const tmp23 = _createForOfIteratorHelperLoose(arr);
      const iter3 = tmp23();
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
            let tmp8 = tmp9;
          } else {
            let tmp3 = closure_0;
            let tmp4 = closure_2;
            let FavoriteGIF = closure_0(closure_2[3]).FavoriteGIF;
            let sum = FavoriteGIF.toBinary(favorite).length + url.length + 7;
            let tmp6 = closure_4;
            sum1 = length;
            tmp8 = sum;
            if (length + sum <= closure_4) {
              sum1 = length + sum;
              favoriteGifs.favoriteGifs.gifs[url] = favorite;
              tmp8 = sum;
            }
          }
          iter = tmp23();
          length = sum1;
          let tmp9 = tmp8;
          iter2 = iter;
        } while (!iter.done);
      }
      const FavoriteGIFs2 = require(dependencyMap[3]).FavoriteGIFs;
      if (FavoriteGIFs2.toBinary(favoriteGifs.favoriteGifs).length > closure_4) {
        do {
          let num4 = 0;
          let keys = Object.keys();
          if (keys !== undefined) {
            let tmp14 = keys[7];
            while (tmp14 !== undefined) {
              let tmp24 = tmp14;
              let gifs = favoriteGifs.favoriteGifs.gifs;
              delete r12[r13];
              num4 = num4 + 1;
              if (num4 >= 10) {
                break;
              }
            }
          }
          let tmp15 = closure_0;
          let tmp16 = closure_2;
          FavoriteGIFs3 = closure_0(closure_2[3]).FavoriteGIFs;
          let tmp17 = closure_4;
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
    const PersistedStore = importDefault(dependencyMap[2]).PersistedStore;
    const state = PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []).state;
    if (null == state) {
      return false;
    } else {
      let flag = false;
      if (obj2.size(state.usageHistory) > 0) {
        const ApplicationCommandFrecency = require(dependencyMap[3]).ApplicationCommandFrecency;
        applicationCommandFrecency.applicationCommandFrecency = ApplicationCommandFrecency.create();
        applicationCommandFrecency.applicationCommandFrecency.applicationCommands = require(dependencyMap[5]).serializeUsageHistory(state.usageHistory, 500);
        flag = true;
        const obj = require(dependencyMap[5]);
      }
      return flag;
    }
  },
  cleanup() {
    const Storage = require(dependencyMap[6]).Storage;
    Storage.remove("ApplicationCommandFrecency");
  }
};
items[5] = {
  version: 8,
  run(arg0) {
    const require = arg0;
    const PersistedStore = importDefault(dependencyMap[2]).PersistedStore;
    const state = PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []).state;
    const importDefault = state;
    if (null == state) {
      return false;
    } else {
      let flag = false;
      if (obj2.size(state.favoriteSounds) > 0) {
        const FavoriteSoundboardSounds = require(dependencyMap[3]).FavoriteSoundboardSounds;
        arg0.favoriteSoundboardSounds = FavoriteSoundboardSounds.create();
        const keys = importDefault(dependencyMap[7]).keys(state.favoriteSounds);
        const item = keys.forEach((arg0) => {
          const item = new Set(state.favoriteSounds[arg0]).forEach((arg0) => {
            const favoriteSoundboardSounds = obj.favoriteSoundboardSounds;
            if (null != favoriteSoundboardSounds) {
              const soundIds = favoriteSoundboardSounds.soundIds;
              soundIds.push(arg0);
            }
          });
        });
        flag = true;
        const obj = importDefault(dependencyMap[7]);
      }
      return flag;
    }
  },
  cleanup() {
    const Storage = require(dependencyMap[6]).Storage;
    Storage.remove("SoundboardFavoriteStore");
  }
};
items[6] = {
  version: 9,
  run(guildAndChannelFrecency) {
    const Storage = require(dependencyMap[6]).Storage;
    const value = Storage.get("selectedChannelGuildFrecency");
    if (null == value) {
      return false;
    } else {
      for (const key10012 in value) {
        let tmp5 = key10012;
        let tmp6 = closure_5;
        if (closure_5.test(key10012)) {
          continue;
        } else {
          delete r4[r9];
          // continue
        }
        continue;
      }
      const GuildAndChannelFrecency = require(dependencyMap[3]).GuildAndChannelFrecency;
      guildAndChannelFrecency.guildAndChannelFrecency = GuildAndChannelFrecency.create();
      guildAndChannelFrecency.guildAndChannelFrecency.guildAndChannels = require(dependencyMap[5]).serializeUsageHistory(value, 100);
      return true;
    }
  },
  cleanup() {
    const Storage = require(dependencyMap[6]).Storage;
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
        const EmojiFrecency = require(dependencyMap[3]).EmojiFrecency;
        const obj = EmojiFrecency.create();
        const EmojiFrecency2 = require(dependencyMap[3]).EmojiFrecency;
        EmojiFrecency2.mergePartial(obj, emojiFrecency.emojiFrecency);
        if (null != emojiFrecency.emojiReactionFrecency) {
          const EmojiFrecency3 = require(dependencyMap[3]).EmojiFrecency;
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
              let isMatch = tmp11.format !== require(dependencyMap[3]).GIFType.IMAGE;
              if (isMatch) {
                let obj = /\.(webp|avif|gif)(\?|$)/i;
                isMatch = obj.test(tmp11.src);
              }
              if (isMatch) {
                let tmp6 = require;
                let tmp7 = dependencyMap;
                tmp11.format = require(dependencyMap[3]).GIFType.IMAGE;
                flag = true;
              }
              flag3 = flag;
              // continue
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
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/user_settings/FrecencySettingsMigrations.tsx");

export default items;
