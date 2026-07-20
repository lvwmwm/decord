// Module ID: 891
// Function ID: 9827
// Name: requestDataIntegration
// Dependencies: []

// Module 891 (requestDataIntegration)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = { 9223372036854775807: null, 9223372036854775807: null, -8915290: null, 0: null, 0: null };
const _module = require(dependencyMap[0]);

export const requestDataIntegration = _module.defineIntegration(function _requestDataIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    const _Object = Object;
    let closure_0 = Object.assign({}, closure_2, {}.include);
    const obj = {
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
          const merged = Object.assign({}, ip, obj);
          if (normalizedRequest) {
            obj = { ipAddress: prop.ipAddress };
            function addNormalizedRequestDataToEvent(request, normalizedRequest, ipAddress, merged) {
              request.request = Object.assign({}, request.request, function extractNormalizedRequestData(headers, headers2) {
                const obj = {};
                const merged = Object.assign({}, headers.headers);
                if (headers2.headers) {
                  obj.headers = merged;
                  if (!headers2.cookies) {
                    delete r5.cookie;
                  }
                  if (!headers2.ip) {
                    const ipHeaderNames = merged(closure_1[1]).ipHeaderNames;
                    const item = ipHeaderNames.forEach((arg0) => {
                      delete r1[r0];
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
                        parseCookieResult = merged(closure_1[2]).parseCookie(merged.cookie);
                        const obj3 = merged(closure_1[2]);
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
              }(normalizedRequest, merged));
              if (merged.ip) {
                ipAddress = normalizedRequest.headers;
                if (ipAddress) {
                  let obj = callback(closure_1[1]);
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
            }(sdkProcessingMetadata, normalizedRequest, obj, merged);
          }
          return sdkProcessingMetadata;
        }
    };
    return obj;
  }
});
