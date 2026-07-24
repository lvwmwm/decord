// Module ID: 8287
// Function ID: 65299
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 27, 8288, 3, 8289, 1247, 8290, 8294, 621, 2]

// Module 8287 (_createForOfIteratorHelperLoose)
import enforcing from "enforcing";
import { Image } from "get ActivityIndicator";
import OVERRIDE_DIR from "OVERRIDE_DIR";
import importDefaultResult from "timestamp";
import keys from "keys";

let closure_5;
let closure_6;
const require = arg1;
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
function measure(arg0) {
  let closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const size = outer1_4.getSize(closure_0, (width, height) => callback({ width, height }), (arg0) => {
      let error = arg0;
      if (!(arg0 instanceof Error)) {
        const _Error = Error;
        const _String = String;
        error = new Error(String(arg0));
      }
      return closure_1(error);
    });
  });
}
async function _readManifest() {
  const tmp = yield outer2_0(outer2_2[4]).readFile("documents", "" + outer2_6 + "/" + outer2_5, "utf8");
  let parsed = null;
  if (null != tmp) {
    const _JSON = JSON;
    parsed = JSON.parse(tmp);
  }
  return parsed;
}
async function _buildOverride(arg0, arg1) {
  let errorType;
  let filename;
  let folder;
  let parsed;
  if (Array.isArray(arg0.layers)) {
    let obj = outer2_1(outer2_2[5]);
    const _HermesInternal = HermesInternal;
    const combined = "file://" + obj.getConstants().DocumentsDirPath + "/" + outer2_6;
    const items = [];
    obj = {};
    const items1 = [];
    const tmp10 = outer2_9(arg0.layers);
    const iter = tmp10();
    let iter2 = iter;
    if (!iter.done) {
      ({ folder, filename } = iter2.value);
      let obj2 = outer2_0(outer2_2[6]);
      ({ parsed, errorType } = obj2.parseLayerFilename(filename));
      while (null != parsed) {
        let tmp34 = outer2_0;
        let tmp35 = outer2_2;
        let tmp36 = outer2_0(outer2_2[6]).FOLDER_ORDER_MAP[folder];
        let _HermesInternal4 = HermesInternal;
        let combined1 = "override-" + tmp36 + "-" + parsed.index;
        let _HermesInternal5 = HermesInternal;
        let str12 = "";
        let tmp38 = combined;
        let str13 = "/";
        let tmp39 = folder;
        let str14 = "/";
        let tmp40 = filename;
        let combined2 = "" + combined + "/" + folder + "/" + filename;
        obj = { id: combined1, type: parsed.type, order: tmp36 };
        ({ anchor: obj7.anchor, responsive: obj7.responsive } = parsed);
        let tmp42 = outer2_11;
        let size = yield outer2_11(combined2);
        let obj1 = { layer: obj, order: tmp36, index: parsed.index };
        let arr = items.push(obj1);
        obj2 = { uri: combined2 };
        let num4 = 0;
        if (size.width > 0) {
          num4 = size.height / size.width;
        }
        obj2.ratio = num4;
        obj[combined1] = obj2;
        let obj3 = { layer: obj, dims: size };
        arr = items1.push(obj3);
        let iter3 = tmp10();
        iter2 = iter3;
      }
      let str7 = "invalid";
      if (null != errorType) {
        str7 = outer2_0(outer2_2[6]).PARSE_ERROR_LABELS[errorType];
      }
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const error = new Error("Bad layer file \"" + folder + "/" + filename + "\": " + str7);
      throw error;
    }
    if (0 === items.length) {
      const _Error3 = Error;
      const error1 = new Error("Frame has no valid layers.");
      throw error1;
    } else {
      const sorted = items.sort(outer2_0(outer2_2[6]).compareLayerFiles);
      const profileFrameDimensions = outer2_0(outer2_2[7]).computeProfileFrameDimensions(items1);
      const obj4 = { frameKey: arg0.frameKey };
      let combined3 = null;
      if (null != arg0.preview) {
        const _HermesInternal3 = HermesInternal;
        combined3 = "" + combined + "/" + arg0.preview;
      }
      obj4.previewUri = combined3;
      obj4.layers = items.map((layer) => layer.layer);
      obj4.layerAssetById = obj;
      const merged = Object.assign(profileFrameDimensions);
      return obj4;
    }
  } else {
    const _Error = Error;
    const error2 = new Error("Malformed manifest (no layers). Re-push the frame.");
    throw error2;
  }
}
({ MANIFEST_NAME: closure_5, OVERRIDE_DIR: closure_6 } = OVERRIDE_DIR);
importDefaultResult = new importDefaultResult("FramePreviewOverrideStore");
let c8 = 0;
keys = keys.create((arg0) => {
  let closure_0 = arg0;
  let obj = { override: null, status: "idle", error: null };
  let closure_1 = callback(async () => {
    function isStale() {
      return closure_0 !== outer3_8;
    }
    const sum = outer2_8 + 1;
    outer2_8 = sum;
    let closure_0 = sum;
    outer1_0({ status: "loading", error: null });
    const tmp3 = yield (function readManifest() {
      return outer3_12(...arguments);
    })();
    if (!isStale()) {
      if (null == tmp3) {
        outer1_0({ status: "error", error: "No frame on device. Ask Cap to push one (or run pushFrameOverride.mjs)." });
      } else {
        const tmp5 = yield (function buildOverride(arg0) {
          return outer3_13(...arguments);
        })(tmp3);
        if (!isStale()) {
          const obj = { override: tmp5, status: "idle", error: null };
          outer1_0(obj);
        }
      }
    }
  });
  obj.loadFromDevice = function() {
    return callback2(...arguments);
  };
  obj.clear = function clear() {
    outer1_8 = outer1_8 + 1;
    callback({ override: null, status: "idle", error: null });
  };
  return obj;
});
const result = require("OVERRIDE_DIR").fileFinishedImporting("modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideStore.tsx");

export const useFramePreviewOverrideStore = keys;
