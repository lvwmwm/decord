// Module ID: 1107
// Function ID: 12635
// Name: enrichXhrBreadcrumbsForMobileReplay
// Dependencies: []

// Module 1107 (enrichXhrBreadcrumbsForMobileReplay)
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
        const bodySize = xhr(arg6[0]).getBodySize(xhr.input);
        if (xhr.getResponseHeader("content-length")) {
          num = xhr(arg6[num]);
          let result = num.parseContentLengthHeader(xhr.getResponseHeader("content-length"));
        } else {
          ({ response, responseType } = xhr);
          if ("json" === responseType) {
            if (tmp6) {
              if ("object" === typeof tmp6) {
                const _JSON = JSON;
                let json = JSON.stringify(response);
              }
              result = xhr(arg6[num]).getBodySize(json);
              const obj3 = xhr(arg6[num]);
            }
          }
          json = response;
        }
        const obj2 = xhr(arg6[0]);
        const _Object = obj.Object;
        assign = _Object.assign;
        obj = { start_timestamp: startTimestamp, end_timestamp: endTimestamp, request_body_size: bodySize, response_body_size: result };
        category.data = xhr(arg6[1]).dropUndefinedKeys(assign(obj, category.data));
        const obj4 = xhr(arg6[1]);
      }
    }
  }
};
