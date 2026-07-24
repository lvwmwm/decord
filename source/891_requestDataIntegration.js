// Module ID: 891
// Function ID: 9833
// Name: requestDataIntegration
// Dependencies: [863, 892, 893]

// Module 891 (requestDataIntegration)
import setupIntegration from "setupIntegration";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = { cookies: true, data: true, headers: true, query_string: true, url: true };

export const requestDataIntegration = setupIntegration.defineIntegration(function _requestDataIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let _Object = Object;
    let closure_0 = Object.assign({}, closure_2, {}.include);
    let obj = {
      name: "RequestData",
      processEvent(sdkProcessingMetadata, arg1, getOptions) {
          let prop = sdkProcessingMetadata.sdkProcessingMetadata;
          if (undefined === prop) {
            prop = {};
          }
          const normalizedRequest = prop.normalizedRequest;
          let obj = {};
          let sendDefaultPii = ip.ip;
          if (null == sendDefaultPii) {
            sendDefaultPii = getOptions.getOptions().sendDefaultPii;
          }
          obj.ip = sendDefaultPii;
          let merged = Object.assign({}, ip, obj);
          if (normalizedRequest) {
            obj = { ipAddress: prop.ipAddress };
            (function addNormalizedRequestDataToEvent(request, normalizedRequest, ipAddress, merged) {
              request.request = Object.assign({}, request.request, (function extractNormalizedRequestData(headers, headers2) {
                const obj = {};
                const merged = Object.assign({}, headers.headers);
                if (headers2.headers) {
                  obj.headers = merged;
                  if (!headers2.cookies) {
                    delete tmp.cookie;
                  }
                  if (!headers2.ip) {
                    const ipHeaderNames = callback(outer3_1[1]).ipHeaderNames;
                    const item = ipHeaderNames.forEach((arg0) => {
                      delete tmp2[tmp];
                    });
                  }
                }
                obj.method = headers.method;
                if (headers2.url) {
                  obj.url = headers.url;
                }
                if (headers2.cookies) {
                  let cookies = headers.cookies;
                  if (!cookies) {
                    let parseCookieResult;
                    if (null != merged) {
                      if (merged.cookie) {
                        parseCookieResult = callback(outer3_1[2]).parseCookie(merged.cookie);
                        const obj3 = callback(outer3_1[2]);
                      }
                    }
                    cookies = parseCookieResult;
                  }
                  if (!cookies) {
                    cookies = {};
                  }
                  obj.cookies = cookies;
                }
                if (headers2.query_string) {
                  obj.query_string = headers.query_string;
                }
                if (headers2.data) {
                  obj.data = headers.data;
                }
                return obj;
              })(normalizedRequest, merged));
              if (merged.ip) {
                ipAddress = normalizedRequest.headers;
                if (ipAddress) {
                  let obj = callback(outer2_1[1]);
                  ipAddress = obj.getClientIPAddress(normalizedRequest.headers);
                }
                if (!ipAddress) {
                  ipAddress = ipAddress.ipAddress;
                }
                if (ipAddress) {
                  const _Object = Object;
                  obj = { ip_address: ipAddress };
                  request.user = Object.assign({}, request.user, obj);
                }
              }
            })(sdkProcessingMetadata, normalizedRequest, obj, merged);
          }
          return sdkProcessingMetadata;
        }
    };
    return obj;
  }
});
