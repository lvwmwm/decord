// Module ID: 1107
// Function ID: 12640
// Name: enrichXhrBreadcrumbsForMobileReplay
// Dependencies: [1108, 794]

// Module 1107 (enrichXhrBreadcrumbsForMobileReplay)
const require = arg1;
const dependencyMap = arg6;
arg5.enrichXhrBreadcrumbsForMobileReplay = function enrichXhrBreadcrumbsForMobileReplay(category, xhr) {
  let response;
  let responseType;
  if ("xhr" === category.category) {
    if (xhr) {
      if (xhr.xhr) {
        let obj = globalThis;
        const _Date = Date;
        const timestamp = Date.now();
        let startTimestamp = xhr.startTimestamp;
        let assign;
        if (undefined === startTimestamp) {
          startTimestamp = timestamp;
        }
        let endTimestamp = xhr.endTimestamp;
        if (assign === endTimestamp) {
          endTimestamp = timestamp;
        }
        xhr = xhr.xhr;
        let num = 0;
        const bodySize = require(1108) /* parseContentLengthHeader */.getBodySize(xhr.input);
        if (xhr.getResponseHeader("content-length")) {
          num = require(dependencyMap[num]);
          let result = num.parseContentLengthHeader(xhr.getResponseHeader("content-length"));
        } else {
          ({ response, responseType } = xhr);
          if ("json" === responseType) {
            if (tmp6) {
              if ("object" === typeof tmp6) {
                const _JSON = JSON;
                let json = JSON.stringify(response);
              }
              result = require(dependencyMap[num]).getBodySize(json);
              const obj3 = require(dependencyMap[num]);
            }
          }
          json = response;
        }
        const obj2 = require(1108) /* parseContentLengthHeader */;
        const _Object = obj.Object;
        assign = _Object.assign;
        obj = { start_timestamp: startTimestamp, end_timestamp: endTimestamp, request_body_size: bodySize, response_body_size: result };
        category.data = require(794) /* registerSpanErrorInstrumentation */.dropUndefinedKeys(assign(obj, category.data));
        const obj4 = require(794) /* registerSpanErrorInstrumentation */;
      }
    }
  }
};
