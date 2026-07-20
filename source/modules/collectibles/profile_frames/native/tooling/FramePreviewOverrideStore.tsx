// Module ID: 8231
// Function ID: 64997
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 8231 (_createForOfIteratorHelperLoose)
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
function measure(arg0) {
  const arg1 = arg0;
  return new Promise((arg0, arg1) => {
    const size = size.getSize(arg0, (width, height) => width({ width, height }), (arg0) => {
      let error = arg0;
      if (!(arg0 instanceof Error)) {
        const _Error = Error;
        const _String = String;
        error = new Error(String(arg0));
      }
      return arg1(error);
    });
  });
}
async function _readManifest() {
  const tmp = yield callback(closure_2[4]).readFile("documents", "" + closure_6 + "/" + closure_5, "utf8");
  let parsed = null;
  if (null != tmp) {
    const _JSON = JSON;
    parsed = JSON.parse(tmp);
  }
  return parsed;
}
async function _buildOverride(layers, arg1) {
  let errorType;
  let filename;
  let folder;
  let parsed;
  if (Array.isArray(layers.layers)) {
    let obj = callback2(closure_2[5]);
    const _HermesInternal = HermesInternal;
    const combined = "file://" + obj.getConstants().DocumentsDirPath + "/" + closure_6;
    const items = [];
    obj = {};
    const items1 = [];
    const tmp10 = callback3(layers.layers);
    const iter = tmp10();
    let iter2 = iter;
    if (!iter.done) {
      ({ folder, filename } = iter2.value);
      let obj2 = callback(closure_2[6]);
      ({ parsed, errorType } = obj2.parseLayerFilename(filename));
      while (null != parsed) {
        let tmp34 = callback;
        let tmp35 = closure_2;
        let tmp36 = callback(closure_2[6]).FOLDER_ORDER_MAP[folder];
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
        let tmp42 = closure_11;
        let size = yield closure_11(combined2);
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
        str7 = callback(closure_2[6]).PARSE_ERROR_LABELS[errorType];
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
      const sorted = items.sort(callback(closure_2[6]).compareLayerFiles);
      const profileFrameDimensions = callback(closure_2[7]).computeProfileFrameDimensions(items1);
      const obj4 = { frameKey: layers.frameKey };
      let combined3 = null;
      if (null != layers.preview) {
        const _HermesInternal3 = HermesInternal;
        combined3 = "" + combined + "/" + layers.preview;
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
let closure_3 = importDefault(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
({ MANIFEST_NAME: closure_5, OVERRIDE_DIR: closure_6 } = arg1(dependencyMap[2]));
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("FramePreviewOverrideStore");
let closure_8 = 0;
let obj = arg1(dependencyMap[8]);
obj = obj.create((arg0) => {
  const arg1 = arg0;
  const obj = { 1650464076: true, -1504638872: true, -500542868: true };
  let closure_1 = callback(async () => {
    function isStale() {
      return sum !== sum;
    }
    const sum = sum + 1;
    sum({});
    const tmp3 = yield function readManifest() {
      return callback(...arguments);
    }();
    if (!isStale()) {
      if (null == tmp3) {
        sum({});
      } else {
        const tmp5 = yield function buildOverride(arg0) {
          return callback2(...arguments);
        }(tmp3);
        if (!isStale()) {
          const obj = { 1650464076: true, -1504638872: true, -500542868: true, override: tmp5 };
          sum(obj);
        }
      }
    }
  });
  obj.loadFromDevice = function() {
    return callback(...arguments);
  };
  obj.clear = function clear() {
    closure_8 = closure_8 + 1;
    arg0({ 1650464076: true, -1504638872: true, -500542868: true });
  };
  return obj;
});
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideStore.tsx");

export const useFramePreviewOverrideStore = obj;
