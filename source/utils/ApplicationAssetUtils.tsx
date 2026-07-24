// Module ID: 7909
// Function ID: 62711
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 7910, 653, 44, 3, 507, 686, 1426, 2]
// Exports: getAssetIds, getAssetImage

// Module 7909 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import timestamp from "timestamp";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let PlatformTypes;
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
function updateAssets(arg0) {
  return _updateAssets(...arguments);
}
async function _updateAssets(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  let obj = { url: outer2_6.APPLICATION_ASSETS(arg0), oldFormErrors: true, rejectWithError: false };
  obj = { type: "APPLICATION_ASSETS_UPDATE", applicationId: arg0, assets: yield HTTP.get(obj).body };
  outer2_1(outer2_2[7]).dispatch(obj);
  return outer2_5.getApplicationAssets(arg0);
}
function getApplicationAssetsMap(arg0) {
  const applicationAssets = store.getApplicationAssets(arg0);
  if (null != applicationAssets) {
    const _Date = Date;
    if (Date.now() - applicationAssets.lastUpdated <= 3600000) {
      let resolved = Promise.resolve(applicationAssets);
    }
    return resolved;
  }
  resolved = updateAssets(arg0);
}
function getAssetFromImageURL(SPOTIFY, url) {
  const str = dependencyMap[SPOTIFY].serialize(url);
  let combined = null;
  if (str) {
    const _HermesInternal = HermesInternal;
    combined = "" + SPOTIFY + ":" + str.toString();
  }
  return combined;
}
function getAssets(closure_1) {
  return _getAssets(...arguments);
}
async function _getAssets(arg0, arg1) {
  const tmp = yield outer2_16(arg0);
  let assets;
  if (null != tmp) {
    assets = tmp.assets;
  }
  return assets;
}
async function _resolveExternalAssets(arg0, arg1, arg2) {
  let done;
  const found = arg1.filter((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = null == outer3_11.get(arg0);
    }
    return tmp;
  });
  if (0 !== found.length) {
    const HTTP = outer2_0(outer2_2[6]).HTTP;
    let obj = { url: outer2_6.APPLICATION_EXTERNAL_ASSETS(arg0) };
    obj = { urls: found };
    obj.body = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = false;
    let tmp = outer2_12(yield HTTP.post(obj).body);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = outer2_11;
        let result = outer2_11.set(value.url, value.external_asset_path);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    const tmp4 = outer2_12;
  }
}
function updateUrlAssetIds(arr, items) {
  let num = 0;
  if (arr.filter((str) => {
    let startsWithResult;
    if (null != str) {
      startsWithResult = str.startsWith("http:");
    }
    if (!startsWithResult) {
      let startsWithResult1;
      if (null != str) {
        startsWithResult1 = str.startsWith("https:");
      }
      startsWithResult = startsWithResult1;
    }
    return startsWithResult;
  }).length > 0) {
    let num2 = 0;
    let num3 = 0;
    num = 0;
    if (0 < arr.length) {
      do {
        let tmp2 = arr[num3];
        let sum = num2;
        if (null != tmp2) {
          let tmp4 = map;
          let value = map.get(tmp2);
          sum = num2;
          let tmp6 = value;
          if (null != value) {
            let tmp7 = getAssetFromImageURL;
            items[num3] = getAssetFromImageURL("mp", value);
            sum = num2 + 1;
            let tmp8 = value;
          }
        }
        num3 = num3 + 1;
        num2 = sum;
        num = sum;
      } while (num3 < arr.length);
    }
  }
  return num === arr.length;
}
function updateNonUrlAssetIds(closure_10, items, assets) {
  let flag = false;
  let num = 0;
  let flag2 = false;
  if (0 < closure_10.length) {
    do {
      let tmp2 = closure_10[num];
      let tmp3 = flag;
      let tmp4 = tmp;
      if (null != tmp2) {
        tmp3 = flag;
        tmp4 = tmp;
        if (null == items[num]) {
          let _Object = Object;
          let tmp5 = hasOwnProperty.call(assets, tmp2) && assets[tmp2];
          let flag3 = flag;
          if (tmp5) {
            items[num] = tmp5.id;
            tmp3 = flag3;
            tmp4 = tmp5;
          } else if (null == arg3) {
            items[num] = null;
            tmp3 = flag;
            tmp4 = tmp5;
          } else {
            flag3 = true;
          }
        }
      }
      num = num + 1;
      flag = tmp3;
      tmp = tmp4;
      flag2 = tmp3;
    } while (num < closure_10.length);
  }
  return flag2;
}
function fetchAssetIds(id, closure_10) {
  return _fetchAssetIds(...arguments);
}
async function _fetchAssetIds(arg0, arg1, arg2) {
  let iter = (function*(applicationId, arr) {
    let num = arg2;
    let closure_0 = applicationId;
    let closure_1 = arr;
    if (num === undefined) {
      num = 1;
    }
    yield undefined;
    let obj = outer2_1(outer2_2[7]);
    obj = { type: "APPLICATION_ASSETS_FETCH", applicationId };
    obj.dispatch(obj);
    const items = [];
    const found = arr.filter((str) => {
      let startsWithResult;
      if (null != str) {
        startsWithResult = str.startsWith("http:");
      }
      if (!startsWithResult) {
        let startsWithResult1;
        if (null != str) {
          startsWithResult1 = str.startsWith("https:");
        }
        startsWithResult = startsWithResult1;
      }
      return startsWithResult;
    });
    if (found.length > 0) {
      yield (function resolveExternalAssets(applicationId, found) {
        return outer3_20(...arguments);
      })(applicationId, found);
    }
    if (outer2_21(arr, items)) {
      obj = { type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId };
      outer2_1(outer2_2[7]).dispatch(obj);
      return items;
    } else {
      const tmp5 = yield outer2_18(applicationId);
      let obj2 = outer2_1(outer2_2[7]);
      const obj1 = { type: "APPLICATION_ASSETS_UPDATE", applicationId, assets: tmp5 };
      obj2.dispatch(obj1);
      if (outer2_22(arr, items, tmp5, num)) {
        let nextPromise = outer2_14(applicationId).then(() => outer3_23(closure_0, closure_1, num - 1));
        const promise = outer2_14(applicationId);
      } else {
        obj2 = { type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId };
        outer2_1(outer2_2[7]).dispatch(obj2);
        nextPromise = items;
        const obj5 = outer2_1(outer2_2[7]);
      }
      return nextPromise;
    }
  })();
  iter.next();
  return iter;
}
({ Endpoints: closure_6, PlatformTypes } = ME);
const re8 = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/;
const re9 = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/;
let obj = {
  deserialize(arg0) {
    return "" + "https://i.scdn.co/image/" + encodeURIComponent(arg0);
  },
  serialize(arg0) {
    return arg0.split("https://i.scdn.co/image/")[1];
  }
};
obj = {
  deserialize(arg0, arg1) {
    return "https://static-cdn.jtvnw.net/previews-ttv/live_user_" + encodeURIComponent(arg0) + "-" + arg1[0] + "x" + arg1[1] + ".jpg";
  },
  serialize(str) {
    const match = str.match(closure_8);
    let tmp2 = null;
    if (null != match) {
      tmp2 = match[1];
    }
    return tmp2;
  }
};
obj = {
  deserialize(arg0) {
    return "https://i.ytimg.com/vi/" + encodeURIComponent(arg0) + "/hqdefault_live.jpg";
  },
  serialize(str) {
    const match = str.match(closure_9);
    let tmp2 = null;
    if (null != match) {
      tmp2 = match[1];
    }
    return tmp2;
  }
};
let closure_10 = {
  [PlatformTypes.SPOTIFY]: obj,
  [PlatformTypes.TWITCH]: obj,
  [PlatformTypes.YOUTUBE]: obj,
  ["mp"]: {
    deserialize(str) {
      importDefault(44)(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured");
      const uRL = new URL(str, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT);
      const formatted = str.toLowerCase();
      const endsWithResult = formatted.endsWith(".gif");
      const formatted1 = str.toLowerCase();
      const formatted2 = str.toLowerCase();
      const endsWithResult2 = formatted2.endsWith(".avif");
      let tmp6 = endsWithResult;
      if (!endsWithResult) {
        tmp6 = endsWithResult2;
      }
      if (tmp6) {
        const searchParams = str.searchParams;
        const result = searchParams.set("format", "webp");
      }
      let tmp9 = endsWithResult;
      if (!endsWithResult) {
        tmp9 = endsWithResult1;
      }
      let tmp10 = tmp9;
      if (!tmp9) {
        tmp10 = endsWithResult2;
      }
      if (tmp10) {
        const searchParams2 = str.searchParams;
        const result1 = searchParams2.set("animated", "true");
      }
      return uRL.toString();
    },
    serialize(arg0) {
      return arg0;
    }
  }
};
const map = new Map();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/ApplicationAssetUtils.tsx");

export { getAssetFromImageURL };
export const getAssetImage = function getAssetImage(application_id, media_assets_large_image, items, applicationId) {
  let str = applicationId;
  let tmp;
  if (applicationId === undefined) {
    str = "png";
  }
  if (null != media_assets_large_image) {
    if (media_assets_large_image.includes(":")) {
      const tmp23 = callback(media_assets_large_image.split(":"), 2);
      const first = tmp23[0];
      if (first === PlatformTypes.TWITCH) {
        if (null != items) {
          if ("number" !== typeof items) {
            const deserializeResult = dependencyMap[PlatformTypes.TWITCH].deserialize(tmp25, items);
            const obj4 = dependencyMap[PlatformTypes.TWITCH];
          }
        }
        let tmp36 = importDefault(3);
        const prototype = tmp36.prototype;
        tmp36 = new tmp36("ApplicationAssetUtils");
        tmp = tmp36;
        tmp36.warn("getAssetImage: size must === [number, number] for Twitch");
      } else {
        const _Object = Object;
        let deserializeResult1;
        if (hasOwnProperty.call(dependencyMap, first)) {
          deserializeResult1 = dependencyMap[first].deserialize(tmp25);
          const obj3 = dependencyMap[first];
        }
        return deserializeResult1;
      }
    }
  }
  if (null != application_id) {
    if (null != media_assets_large_image) {
      const _Array = Array;
      let applyResult = items;
      if (Array.isArray(items)) {
        const _Math = Math;
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        const _Math2 = Math;
        applyResult = HermesBuiltin.apply(items, Math);
      }
      let str5 = "";
      if ("number" === typeof applyResult) {
        const _HermesInternal = HermesInternal;
        str5 = "?size=" + require(1426) /* isAttachmentLadderEnabled */.getBestMediaProxySize(applyResult);
        const obj = require(1426) /* isAttachmentLadderEnabled */;
      }
      const _window = window;
      if (null != window.GLOBAL_ENV.CDN_HOST) {
        const _location = location;
        const _window2 = window;
        const _HermesInternal3 = HermesInternal;
        let combined = "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/app-assets/" + application_id + "/" + media_assets_large_image + "." + str + str5;
      } else {
        const _HermesInternal2 = HermesInternal;
        combined = "" + require(507) /* _isNativeReflectConstruct */.getAPIBaseURL() + "/applications/" + application_id + "/app-assets/" + media_assets_large_image + "." + str + str5;
        const obj2 = require(507) /* _isNativeReflectConstruct */;
      }
      return combined;
    }
  }
  return tmp;
};
export { getAssets };
export { fetchAssetIds };
export const getAssetIds = function getAssetIds(id, closure_10) {
  const items = [];
  if (updateUrlAssetIds(closure_10, items)) {
    return items;
  } else {
    const applicationAssets = store.getApplicationAssets(id);
    let assets;
    if (null != applicationAssets) {
      assets = applicationAssets.assets;
    }
    if (null != assets) {
      updateNonUrlAssetIds(closure_10, items, assets);
    }
    return items;
  }
};
