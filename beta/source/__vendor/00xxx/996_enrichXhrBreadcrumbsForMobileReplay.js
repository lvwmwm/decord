// Module ID: 996
// Function ID: 997
// Name: enrichXhrBreadcrumbsForMobileReplay
// Dependencies: [997, 682]
// Exports: enrichXhrBreadcrumbsForMobileReplay

// Module 996 (enrichXhrBreadcrumbsForMobileReplay)
import _mod682 from "module_682" /* 682 */;
import _mod997 from "module_997" /* 997 */;


export const enrichXhrBreadcrumbsForMobileReplay = function enrichXhrBreadcrumbsForMobileReplay(category, xhr) {
  function _getBodySize(response, responseType) {
    try {
      let json = response;
      if ("json" === responseType) {
        json = response;
        if (json) {
          json = response;
          if (typeof response === "object") {
            const _JSON = JSON;
            json = JSON.stringify(response);
          }
        }
      }
      const obj = _mod997;
      return obj.getBodySize(json);
    } catch (err) {
    }
  }
  if ("xhr" === category.category) {
    const tmp7 = xhr;
    if (tmp7) {
      if (xhr.xhr) {
        let result;
        const _Date = Date;
        const timestamp = Date.now();
        let startTimestamp = xhr.startTimestamp;
        if (undefined === startTimestamp) {
          startTimestamp = timestamp;
        }
        let endTimestamp = xhr.endTimestamp;
        if (undefined === endTimestamp) {
          endTimestamp = timestamp;
        }
        xhr = xhr.xhr;
        const input = xhr.input;
        let obj = _mod997;
        const bodySize = obj.getBodySize(input);
        if (xhr.getResponseHeader("content-length")) {
          const tmp3Result = _mod997;
          result = tmp3Result.parseContentLengthHeader(xhr.getResponseHeader("content-length"));
        } else {
          result = _getBodySize(xhr.response, xhr.responseType);
        }
        const _Object = Object;
        const obj2 = { start_timestamp: startTimestamp, end_timestamp: endTimestamp, request_body_size: bodySize, response_body_size: result };
        const tmp3Result2 = _mod682;
        category.data = tmp3Result2.dropUndefinedKeys(Object.assign(obj2, category.data));
      }
    }
  }
};
