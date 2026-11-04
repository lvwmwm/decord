// Module ID: 779
// Function ID: 780
// Name: requestDataIntegration
// Dependencies: [751, 780, 781]

// Module 779 (requestDataIntegration)
import _mod780 from "module_780" /* 780 */;
import _mod781 from "module_781" /* 781 */;
import module_751 from "module_751" /* 751 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = { cookies: true, data: true, headers: true, query_string: true, url: true };

export const requestDataIntegration = module_751.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = {};
  let merged = Object.assign(closure_2);
  let merged1 = Object.assign(obj.include);
  let obj3 = {
    name: "RequestData",
    processEvent(sdkProcessingMetadata, arg1, getOptions) {
      let sendDefaultPii;
      let prop = sdkProcessingMetadata.sdkProcessingMetadata;
      if (undefined === prop) {
        prop = {};
      }
      const normalizedRequest = prop.normalizedRequest;
      const obj = { ip: sendDefaultPii };
      const ipAddress = prop.ipAddress;
      const merged = Object.assign(obj2);
      sendDefaultPii = obj2.ip;
      if (sendDefaultPii == null) {
        sendDefaultPii = getOptions.getOptions().sendDefaultPii;
      }
      if (normalizedRequest) {
        obj2 = {};
        const merged1 = Object.assign(sdkProcessingMetadata.request);
        const obj3 = { method: normalizedRequest.method };
        const obj4 = {};
        const merged2 = Object.assign(normalizedRequest.headers);
        if (obj.headers) {
          obj3.headers = obj4;
          if (!obj.cookies) {
            delete obj5["cookie"];
          }
          if (!obj.ip) {
            const ipHeaderNames = _mod780.ipHeaderNames;
            const item = ipHeaderNames.forEach((item) => {
              delete obj4[item];
            });
          }
        }
        if (obj.url) {
          obj3.url = normalizedRequest.url;
        }
        if (obj.cookies) {
          let cookies = normalizedRequest.cookies;
          if (!cookies) {
            let parseCookieResult;
            if (obj4.cookie) {
              const obj7 = _mod781;
              parseCookieResult = obj7.parseCookie(obj4.cookie);
            }
            cookies = parseCookieResult;
          }
          if (!cookies) {
            cookies = {};
          }
          obj3.cookies = cookies;
        }
        if (obj.query_string) {
          obj3.query_string = normalizedRequest.query_string;
        }
        if (obj.data) {
          obj3.data = normalizedRequest.data;
        }
        const merged3 = Object.assign(obj3);
        sdkProcessingMetadata.request = obj2;
        if (obj.ip) {
          let headers = normalizedRequest.headers;
          if (headers) {
            const obj8 = _mod780;
            headers = obj8.getClientIPAddress(normalizedRequest.headers);
          }
          if (!headers) {
            headers = ipAddress;
          }
          if (headers) {
            const obj6 = { ip_address: headers };
            const merged4 = Object.assign(sdkProcessingMetadata.user);
            sdkProcessingMetadata.user = obj6;
          }
        }
      }
      return sdkProcessingMetadata;
    }
  };
  return obj3;
});
