// Module ID: 7814
// Function ID: 62355
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getAssetIds, getAssetImage

// Module 7814 (_createForOfIteratorHelperLoose)
let PlatformTypes;
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
function updateAssets(arg0) {
  return _updateAssets(...arguments);
}
async function _updateAssets(applicationId, arg1) {
  const HTTP = callback(closure_2[6]).HTTP;
  let obj = { y: 1567300603, isArray: 221342020, accessible: 822948183, url: closure_6.APPLICATION_ASSETS(applicationId) };
  obj = { type: "APPLICATION_ASSETS_UPDATE", applicationId, assets: yield HTTP.get(obj).body };
  callback2(closure_2[7]).dispatch(obj);
  return applicationAssets.getApplicationAssets(applicationId);
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
  const str = closure_10[SPOTIFY].serialize(url);
  let combined = null;
  if (str) {
    const _HermesInternal = HermesInternal;
    combined = "" + SPOTIFY + ":" + str.toString();
  }
  return combined;
}
function getAssets(applicationId) {
  return _getAssets(...arguments);
}
async function _getAssets(arg0, arg1) {
  const tmp = yield closure_16(arg0);
  let assets;
  if (null != tmp) {
    assets = tmp.assets;
  }
  return assets;
}
async function _resolveExternalAssets(arg0, arr, arg2) {
  let done;
  const found = arr.filter((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = null == closure_11.get(arg0);
    }
    return tmp;
  });
  if (0 !== found.length) {
    const HTTP = callback(closure_2[6]).HTTP;
    let obj = { url: closure_6.APPLICATION_EXTERNAL_ASSETS(arg0) };
    obj = { urls: found };
    obj.body = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = false;
    const tmp = closure_12(yield HTTP.post(obj).body);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = closure_11;
        let result = closure_11.set(value.url, value.external_asset_path);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    const tmp4 = closure_12;
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
          let tmp4 = closure_11;
          let value = closure_11.get(tmp2);
          sum = num2;
          let tmp6 = value;
          if (null != value) {
            let tmp7 = closure_17;
            items[num3] = closure_17("mp", value);
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
      let tmp = tmp4;
      flag2 = tmp3;
    } while (num < closure_10.length);
  }
  return flag2;
}
function fetchAssetIds(id, closure_10) {
  return _fetchAssetIds(...arguments);
}
async function _fetchAssetIds(arg0, arg1, arg2) {
  const fn = function*(applicationId, arr) {
    let num = arg2;
    if (num === undefined) {
      num = 1;
    }
    yield undefined;
    let obj = arr(num[7]);
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
      yield function resolveExternalAssets(applicationId, found) {
        return callback(...arguments);
      }(applicationId, found);
    }
    if (callback2(arr, items)) {
      obj = { type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId };
      arr(num[7]).dispatch(obj);
      return items;
    } else {
      const tmp5 = yield closure_18(applicationId);
      let obj2 = arr(num[7]);
      const obj1 = { type: "APPLICATION_ASSETS_UPDATE", applicationId, assets: tmp5 };
      obj2.dispatch(obj1);
      if (callback3(arr, items, tmp5, num)) {
        let nextPromise = callback(applicationId).then(() => callback2(arg0, arg1, num - 1));
        const promise = callback(applicationId);
      } else {
        obj2 = { type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId };
        arr(num[7]).dispatch(obj2);
        nextPromise = items;
        const obj5 = arr(num[7]);
      }
      return nextPromise;
    }
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ Endpoints: closure_6, PlatformTypes } = arg1(dependencyMap[3]));
let closure_8 = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/;
let closure_9 = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/;
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
      importDefault(dependencyMap[4])(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured");
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
const obj1 = {
  deserialize(str) {
    importDefault(dependencyMap[4])(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured");
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
};
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("utils/ApplicationAssetUtils.tsx");

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
            const deserializeResult = closure_10[closure_7.TWITCH].deserialize(tmp25, items);
            const obj4 = closure_10[closure_7.TWITCH];
          }
        }
        let tmp36 = importDefault(dependencyMap[5]);
        const prototype = tmp36.prototype;
        tmp36 = new tmp36("ApplicationAssetUtils");
        tmp = tmp36;
        tmp36.warn("getAssetImage: size must === [number, number] for Twitch");
      } else {
        const _Object = Object;
        let deserializeResult1;
        if (hasOwnProperty.call(closure_10, first)) {
          deserializeResult1 = closure_10[first].deserialize(tmp25);
          const obj3 = closure_10[first];
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
        str5 = "?size=" + media_assets_large_image(dependencyMap[8]).getBestMediaProxySize(applyResult);
        const obj = media_assets_large_image(dependencyMap[8]);
      }
      const _window = window;
      if (null != window.GLOBAL_ENV.CDN_HOST) {
        const _location = location;
        const _window2 = window;
        const _HermesInternal3 = HermesInternal;
        let combined = "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/app-assets/" + application_id + "/" + media_assets_large_image + "." + str + str5;
      } else {
        const _HermesInternal2 = HermesInternal;
        combined = "" + media_assets_large_image(dependencyMap[6]).getAPIBaseURL() + "/applications/" + application_id + "/app-assets/" + media_assets_large_image + "." + str + str5;
        const obj2 = media_assets_large_image(dependencyMap[6]);
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
