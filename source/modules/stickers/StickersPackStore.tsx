// Module ID: 5307
// Function ID: 44989
// Name: _isNativeReflectConstruct
// Dependencies: [1838, 1849, 1362, 664, 5318, 3967, 1212, 2, 29, 5, 5319]

// Module 5307 (_isNativeReflectConstruct)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_3 from "_isNativeReflectConstruct";
import priv from "priv";
import module_664 from "module_664";
import showTooManyUserGuildsAlert from "showTooManyUserGuildsAlert";
import conceal from "conceal";
import { TypeTag } from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

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
function parseServerPackSticker(sticker) {
  return { id: sticker.id, tags: sticker.tags, type: sticker.type, name: sticker.name, description: sticker.description, format_type: sticker.format_type, pack_id: sticker.pack_id, [closure_8]: "PackSticker" };
}
function deriveStickerMetadata(name, name2) {
  const items = [];
  let obj = { type: name2(dependencyMap[9]).StickerMetadataTypes.STICKER_NAME };
  const trimmed = name.name.trim();
  obj.value = trimmed.toLocaleLowerCase();
  items.push(obj);
  if (null != name2) {
    obj = { type: name2(dependencyMap[9]).StickerMetadataTypes.PACK_NAME, value: name2.name };
    items.push(obj);
  }
  return items;
}
function ingestStickerPack(pack, packStickersDatabase, packsDatabase, premiumPacksDatabase, arg4) {
  let done;
  const result = packsDatabase.set(pack.id, pack);
  if (arg4) {
    const result1 = premiumPacksDatabase.set(pack.id, pack);
  }
  const obj = {};
  const tmp3 = _createForOfIteratorHelperLoose(pack.stickers);
  let iter = tmp3();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp4 = closure_15;
      obj[value.id] = closure_15(value);
      let iter2 = tmp3();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  packStickersDatabase.setPartition(pack.id, obj);
}
let closure_9 = false;
let closure_10 = null;
const HOUR = require("_objectWithoutProperties").Millis.HOUR;
let tmp2 = (LibdiscoreStore) => {
  class StickersPackStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, StickersPackStore);
      items1 = [...items];
      obj = showTooManyUserGuildsAlert(StickersPackStore);
      tmp2 = module_664;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = showTooManyUserGuildsAlert;
        constructResult = Reflect.construct(obj, items1, showTooManyUserGuildsAlert(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      StickersPackStore = tmp2Result;
      tmp2Result.packsDatabase = tmp2Result.addKVDatabase("stickerPacks");
      tmp2Result.packStickersDatabase = tmp2Result.addKKVDatabase("packStickers");
      packStickersDatabase = tmp2Result.packStickersDatabase;
      tmp2Result.packStickerByIdIndex = packStickersDatabase.addSecondaryKVIndex("id");
      tmp2Result.premiumPacksDatabase = tmp2Result.addKVDatabase("premiumPacks");
      packStickersDatabase2 = tmp2Result.packStickersDatabase;
      tmp2Result.getAllPackStickers = packStickersDatabase2.memoized((obj) => {
        const map = new Map();
        for (const key10010 in arg0) {
          let tmp = key10010;
          let _Object = Object;
          let result = map.set(key10010, Object.values(arg0[key10010].root));
        }
        return map;
      });
      packStickersDatabase3 = tmp2Result.packStickersDatabase;
      tmp2Result.getStickerMetadataMap = packStickersDatabase3.memoized((obj) => {
        const map = new Map();
        for (const key10014 in arg0) {
          let tmp6 = key10014;
          let _Object = Object;
          let entries = Object.entries(arg0[key10014].root);
          let num = 0;
          if (0 >= entries.length) {
            continue;
          } else {
            do {
              let tmp = _createForOfIteratorHelperLoose;
              let tmp2 = _createForOfIteratorHelperLoose(entries[num], 2);
              let tmp3 = closure_0;
              let packsDatabase = closure_0.packsDatabase;
              let tmp4 = closure_16;
              let result = map.set(tmp2[0], closure_16(tmp2[1], packsDatabase.get(key10014)));
              num = num + 1;
              let length = entries.length;
            } while (num < length);
            // continue
          }
          continue;
        }
        return map;
      });
      premiumPacksDatabase = tmp2Result.premiumPacksDatabase;
      tmp2Result.getPremiumPacks = premiumPacksDatabase.memoized((arg0) => Object.values(arg0));
      return tmp2Result;
    }
  }
  const arg1 = StickersPackStore;
  callback2(StickersPackStore, LibdiscoreStore);
  let obj = {
    key: "stateWrapper",
    value() {
      const StickersPackStore = this;
      return {
        packsDatabase: this.packsDatabase,
        packStickersDatabase: this.packStickersDatabase,
        premiumPacksDatabase: this.premiumPacksDatabase,
        markDirty() {
          return self.markDirty();
        },
        clearAllDBs() {
          return self.clearAllDatabases();
        }
      };
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "isFetchingStickerPacks",
    get() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasLoadedStickerPacks",
    get() {
      let tmp = null != closure_10;
      if (tmp) {
        const _performance = performance;
        const sum = closure_10 + closure_11;
        tmp = sum > performance.now();
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getStickerById",
    value(arg0) {
      const packStickerByIdIndex = this.packStickerByIdIndex;
      return packStickerByIdIndex.get(arg0);
    }
  };
  items[4] = {
    key: "isPremiumPack",
    value(arg0) {
      const premiumPacksDatabase = this.premiumPacksDatabase;
      return null != premiumPacksDatabase.get(arg0);
    }
  };
  items[5] = {
    key: "getStickerPack",
    value(arg0) {
      const packsDatabase = this.packsDatabase;
      return packsDatabase.get(arg0);
    }
  };
  return callback(StickersPackStore, items);
}(require("result2").LibdiscoreStore);
tmp2.displayName = "StickersPackStore";
tmp2 = new tmp2({
  LOGOUT(arg0, clearAllDBs) {
    clearAllDBs.clearAllDBs();
  },
  STICKER_PACK_FETCH_SUCCESS(pack, packStickersDatabase) {
    ingestStickerPack(pack.pack, packStickersDatabase.packStickersDatabase, packStickersDatabase.packsDatabase, packStickersDatabase.premiumPacksDatabase, false);
  },
  STICKER_PACKS_FETCH_START(arg0, markDirty) {
    let closure_9 = true;
    markDirty.markDirty();
  },
  STICKER_PACKS_FETCH_SUCCESS(packs, markDirty) {
    let done;
    let packStickersDatabase;
    let packsDatabase;
    let premiumPacksDatabase;
    ({ packStickersDatabase, packsDatabase, premiumPacksDatabase } = markDirty);
    let closure_9 = false;
    markDirty.markDirty();
    let closure_10 = performance.now();
    const tmp2 = _createForOfIteratorHelperLoose(packs.packs);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = closure_17;
        let tmp4 = packStickersDatabase;
        let tmp5 = packsDatabase;
        let tmp6 = premiumPacksDatabase;
        let flag = true;
        let tmp7 = closure_17(iter.value, packStickersDatabase, packsDatabase, premiumPacksDatabase, true);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  PACK_STICKER_FETCH_SUCCESS(sticker, packStickersDatabase) {
    let id;
    let pack_id;
    sticker = sticker.sticker;
    packStickersDatabase = packStickersDatabase.packStickersDatabase;
    ({ pack_id, id } = sticker);
    packStickersDatabase.setRecord(pack_id, id, parseServerPackSticker(sticker));
  }
});
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/stickers/StickersPackStore.tsx");

export default tmp2;
