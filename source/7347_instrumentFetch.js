// Module ID: 7347
// Function ID: 59241
// Name: instrumentFetch
// Dependencies: [57, 5, 7234, 7348, 7242, 7237, 7250, 7243]
// Exports: addFetchEndInstrumentationHandler, addFetchInstrumentationHandler

// Module 7347 (instrumentFetch)
import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "getGlobalSingleton";

function instrumentFetch(arg0) {
  const _require = arg0;
  let tmp = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  if (tmp) {
    tmp = !_require(7348).supportsNativeFetch();
    let obj = _require(7348);
  }
  if (!tmp) {
    _require(7242).fill(_require(7237).GLOBAL_OBJ, "fetch", (arg0) => {
      let closure_0 = arg0;
      return () => {
        const error = new Error();
        const length = arguments.length;
        const array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        const request = outer2_9(array);
        obj = { args: array, fetchData: obj };
        obj = { method: request.method, url: request.url, startTimestamp: 1000 * callback(outer2_1[6]).timestampInSeconds(), virtualError: error };
        if (!callback) {
          let _Object = Object;
          callback(outer2_1[2]).triggerHandlers("fetch", Object.assign({}, obj));
          let obj4 = callback(outer2_1[2]);
        }
        let obj3 = callback(outer2_1[6]);
        return error.apply(callback(outer2_1[5]).GLOBAL_OBJ, array).then((() => {
          let closure_0 = outer3_3(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              if (callback) {
                callback(arg0);
              } else {
                const _Object = Object;
                obj = {};
                const obj2 = callback(outer5_1[2]);
                obj.endTimestamp = 1000 * callback(outer5_1[6]).timestampInSeconds();
                obj.response = arg0;
                obj2.triggerHandlers("fetch", Object.assign({}, outer2_1, obj));
                const obj4 = callback(outer5_1[6]);
              }
              return arg0;
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })(), (error) => {
          let obj = error(outer3_1[2]);
          obj = { endTimestamp: 1000 * error(outer3_1[6]).timestampInSeconds(), error };
          obj.triggerHandlers("fetch", Object.assign({}, obj, obj));
          const obj3 = error(outer3_1[6]);
          const obj4 = error(outer3_1[7]);
          if (tmp2) {
            error.stack = error.stack;
            const result = error(outer3_1[4]).addNonEnumerableProperty(error, "framesToPop", 1);
            const obj5 = error(outer3_1[4]);
          }
          throw error;
        });
      };
    });
    let obj2 = _require(7242);
  }
}
async function _resolveResponse(arg0, arg1, arg2) {
  let body;
  if (arg0) {
    if (arg0.body) {
      body = arg0.body;
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
  let closure_0 = clone;
  !(function resolveResponse(cloneResult, arg1) {
    return outer1_5(...arguments);
  })(clone.clone(), () => {
    let obj = clone(outer1_1[2]);
    obj = { endTimestamp: 1000 * clone(outer1_1[6]).timestampInSeconds(), response: clone };
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
    return { method: "GET", url: "" };
  } else if (2 === arg0.length) {
    const tmp6 = _slicedToArray(arg0, 2);
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

export const addFetchEndInstrumentationHandler = function addFetchEndInstrumentationHandler(arg0) {
  require(7234) /* addHandler */.addHandler("fetch-body-resolved", arg0);
  const obj = require(7234) /* addHandler */;
  require(7234) /* addHandler */.maybeInstrument("fetch-body-resolved", () => {
    outer1_4(outer1_6);
  });
};
export const addFetchInstrumentationHandler = function addFetchInstrumentationHandler(arg0, arg1) {
  const _require = arg1;
  _require(7234).addHandler("fetch", arg0);
  const obj = _require(7234);
  _require(7234).maybeInstrument("fetch", () => {
    outer1_4(undefined, closure_0);
  });
};
export { parseFetchArgs };
