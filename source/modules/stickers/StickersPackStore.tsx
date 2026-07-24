// Module ID: 5037
// Function ID: 43421
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 1389, 1839, 664, 4799, 2]

// Module 5037 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import TypeTag from "TypeTag";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { TypeTag } from "TypeTag";

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
function parseServerPackSticker(sticker) {
  return { id: sticker.id, tags: sticker.tags, type: sticker.type, name: sticker.name, description: sticker.description, format_type: sticker.format_type, pack_id: sticker.pack_id, [closure_8]: "PackSticker" };
}
function deriveStickerMetadata(name, name2) {
  const items = [];
  let obj = { type: require(4799) /* StickerFormat */.StickerMetadataTypes.STICKER_NAME };
  const trimmed = name.name.trim();
  obj.value = trimmed.toLocaleLowerCase();
  items.push(obj);
  if (null != name2) {
    obj = { type: require(4799) /* StickerFormat */.StickerMetadataTypes.PACK_NAME, value: name2.name };
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
      let tmp4 = parseServerPackSticker;
      obj[value.id] = parseServerPackSticker(value);
      let iter2 = tmp3();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  packStickersDatabase.setPartition(pack.id, obj);
}
let c9 = false;
let c10 = null;
const HOUR = require("set").Millis.HOUR;
let tmp2 = ((LibdiscoreStore) => {
  class StickersPackStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
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
          continue;
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
              let tmp = outer2_2;
              let tmp2 = outer2_2(entries[num], 2);
              let tmp3 = tmp2Result;
              let packsDatabase = tmp2Result.packsDatabase;
              let tmp4 = outer2_16;
              let result = map.set(tmp2[0], outer2_16(tmp2[1], packsDatabase.get(key10014)));
              num = num + 1;
              let length = entries.length;
            } while (num < length);
            continue;
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
  callback2(StickersPackStore, LibdiscoreStore);
  let obj = {
    key: "stateWrapper",
    value() {
      const self = this;
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
  let items = [obj, , , , , ];
  obj = {
    key: "isFetchingStickerPacks",
    get() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasLoadedStickerPacks",
    get() {
      let tmp = null != outer1_10;
      if (tmp) {
        const _performance = performance;
        const sum = outer1_10 + outer1_11;
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
})(require("_isNativeReflectConstruct").LibdiscoreStore);
tmp2.displayName = "StickersPackStore";
tmp2 = new tmp2({
  LOGOUT(arg0, clearAllDBs) {
    clearAllDBs.clearAllDBs();
  },
  STICKER_PACK_FETCH_SUCCESS(pack, packStickersDatabase) {
    ingestStickerPack(pack.pack, packStickersDatabase.packStickersDatabase, packStickersDatabase.packsDatabase, packStickersDatabase.premiumPacksDatabase, false);
  },
  STICKER_PACKS_FETCH_START(arg0, markDirty) {
    let c9 = true;
    markDirty.markDirty();
  },
  STICKER_PACKS_FETCH_SUCCESS(packs, markDirty) {
    let done;
    let packStickersDatabase;
    let packsDatabase;
    let premiumPacksDatabase;
    ({ packStickersDatabase, packsDatabase, premiumPacksDatabase } = markDirty);
    let c9 = false;
    markDirty.markDirty();
    let closure_10 = performance.now();
    const tmp2 = _createForOfIteratorHelperLoose(packs.packs);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = ingestStickerPack;
        let tmp4 = packStickersDatabase;
        let tmp5 = packsDatabase;
        let tmp6 = premiumPacksDatabase;
        let flag = true;
        let tmp7 = ingestStickerPack(iter.value, packStickersDatabase, packsDatabase, premiumPacksDatabase, true);
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
let result = require("_defineProperties").fileFinishedImporting("modules/stickers/StickersPackStore.tsx");

export default tmp2;
