// Module ID: 7337
// Function ID: 59173
// Name: instrumentFetch
// Dependencies: []
// Exports: addFetchEndInstrumentationHandler, addFetchInstrumentationHandler

// Module 7337 (instrumentFetch)
function instrumentFetch(arg0) {
  const require = arg0;
  let tmp = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  if (tmp) {
    tmp = !require(dependencyMap[3]).supportsNativeFetch();
    const obj = require(dependencyMap[3]);
  }
  if (!tmp) {
    require(dependencyMap[4]).fill(require(dependencyMap[5]).GLOBAL_OBJ, "fetch", (arg0) => () => {
      const error = new Error();
      const arg0 = error;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const request = callback(array);
      let obj = { args: array, fetchData: obj };
      obj = { method: request.method, url: request.url };
      obj.startTimestamp = 1000 * arg0(obj[6]).timestampInSeconds();
      obj.virtualError = error;
      if (!arg0) {
        const _Object = Object;
        arg0(obj[2]).triggerHandlers("fetch", Object.assign({}, obj));
        const obj4 = arg0(obj[2]);
      }
      const obj3 = arg0(obj[6]);
      return arg0.apply(arg0(obj[5]).GLOBAL_OBJ, array).then(() => {
        let closure_0 = callback(async (arg0) => {
          if (obj) {
            return obj.resume();
          } else {
            if (callback) {
              callback(arg0);
            } else {
              const _Object = Object;
              const obj = {};
              const obj2 = callback(closure_1[2]);
              obj.endTimestamp = 1000 * callback(closure_1[6]).timestampInSeconds();
              obj.response = arg0;
              obj2.triggerHandlers("fetch", Object.assign({}, closure_1, obj));
              const obj4 = callback(closure_1[6]);
            }
            return arg0;
          }
        });
        return function(arg0) {
          return callback(...arguments);
        };
      }(), (error) => {
        let obj = error(obj[2]);
        obj = {};
        obj.endTimestamp = 1000 * error(obj[6]).timestampInSeconds();
        obj.error = error;
        obj.triggerHandlers("fetch", Object.assign({}, obj, obj));
        const obj3 = error(obj[6]);
        const obj4 = error(obj[7]);
        if (tmp2) {
          error.stack = error.stack;
          const result = error(obj[4]).addNonEnumerableProperty(error, "framesToPop", 1);
          const obj5 = error(obj[4]);
        }
        throw error;
      });
    });
    const obj2 = require(dependencyMap[4]);
  }
}
async function _resolveResponse(body, arg1, arg2) {
  body = undefined;
  if (body) {
    if (body.body) {
      body = body.body;
      const reader = body.getReader();
      const _setTimeout = setTimeout;
      let flag = true;
      const _setTimeout2 = setTimeout;
      const timerId = setTimeout(() => {
        body.cancel().then(null, () => {

        });
      }, 90000);
      const timerId1 = setTimeout(() => {
        body.cancel().then(null, () => {

        });
      }, 5000);
      while (true) {
        let _clearTimeout = clearTimeout;
        let tmp5 = timerId1;
        let clearTimeoutResult = clearTimeout(timerId1);
        if (yield reader.read().done) {
          let tmp7 = arg1;
          let tmp8 = arg1();
          flag = false;
        }
        while (true) {
          let _clearTimeout2 = clearTimeout;
          let tmp9 = timerId1;
          let clearTimeoutResult1 = clearTimeout(timerId1);
          let tmp11 = flag;
          if (flag) {
            break;
          } else {
            let _clearTimeout3 = clearTimeout;
            let clearTimeoutResult2 = clearTimeout(timerId);
            let tmp13 = reader;
            let releaseLockResult = reader.releaseLock();
            let cancelResult = body.cancel();
            let tmp15 = null;
            let nextPromise = cancelResult.then(null, () => {

            });
          }
        }
      }
    }
  }
}
function streamHandler(clone) {
  const require = clone;
  !function resolveResponse(cloneResult, arg1) {
    return callback(...arguments);
  }(clone.clone(), () => {
    let obj = arg0(closure_1[2]);
    obj = { endTimestamp: 1000 * arg0(closure_1[6]).timestampInSeconds(), response: arg0 };
    obj.triggerHandlers("fetch-body-resolved", obj);
  });
}
function hasProp(arg0, arg1) {
  let tmp2 = !tmp;
  if (!!arg0) {
    tmp2 = "object" === typeof arg0;
  }
  if (tmp2) {
    tmp2 = arg0[arg1];
  }
  return tmp2;
}
function getUrlFromResource(url) {
  let tmp = url;
  if ("string" !== typeof url) {
    let str = "";
    if (!url) {
      tmp = str;
    } else if (hasProp(url, "url")) {
      str = url.url;
    } else if (url.toString) {
      str = url.toString();
    }
  }
  return tmp;
}
function parseFetchArgs(arg0) {
  if (0 === arg0.length) {
    return { "Bool(true)": "EntitlementTypes", "Bool(true)": "PRODUCTS_AVAILABLE_FOR_PURCHASE" };
  } else if (2 === arg0.length) {
    const tmp6 = callback(arg0, 2);
    let obj = { url: getUrlFromResource(tmp6[0]) };
    let str5 = "GET";
    if (hasProp(tmp6[1], "method")) {
      const _String2 = String;
      str5 = String(tmp7.method).toUpperCase();
      const str6 = String(tmp7.method);
    }
    obj.method = str5;
    return obj;
  } else {
    const first = arg0[0];
    obj = { url: getUrlFromResource(first) };
    let str2 = "GET";
    if (hasProp(first, "method")) {
      const _String = String;
      str2 = String(first.method).toUpperCase();
      const str3 = String(first.method);
    }
    obj.method = str2;
    return obj;
  }
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);

export const addFetchEndInstrumentationHandler = function addFetchEndInstrumentationHandler(arg0) {
  require(dependencyMap[2]).addHandler("fetch-body-resolved", arg0);
  const obj = require(dependencyMap[2]);
  require(dependencyMap[2]).maybeInstrument("fetch-body-resolved", () => {
    callback(closure_6);
  });
};
export const addFetchInstrumentationHandler = function addFetchInstrumentationHandler(arg0, arg1) {
  const require = arg1;
  require(dependencyMap[2]).addHandler("fetch", arg0);
  const obj = require(dependencyMap[2]);
  require(dependencyMap[2]).maybeInstrument("fetch", () => {
    callback(undefined, arg1);
  });
};
export { parseFetchArgs };
