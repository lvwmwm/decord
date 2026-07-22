// Module ID: 7311
// Function ID: 58975
// Name: requestDataIntegration
// Dependencies: []

// Module 7311 (requestDataIntegration)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = [null, null];
let closure_5 = { include: { user: {} }, transactionNamingScheme: "methodPath" };
const _module = require(dependencyMap[3]);

export const requestDataIntegration = _module.defineIntegration(function _requestDataIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const _Object = Object;
    let obj = {};
    const _Object2 = Object;
    let include = closure_5.include;
    const include2 = first.include;
    obj = {};
    if (first.include) {
      if ("boolean" === typeof first.include.user) {
        let user = first.include.user;
      }
      obj.user = user;
      obj.include = tmp4({}, include, include2, obj);
      let closure_0 = tmp2({}, tmp3, first, obj);
      const obj1 = {
        name: "RequestData",
        processEvent(sdkProcessingMetadata) {
              let normalizedRequest;
              let request;
              let prop = sdkProcessingMetadata.sdkProcessingMetadata;
              if (undefined === prop) {
                prop = {};
              }
              ({ request, normalizedRequest } = prop);
              const include = lib.include;
              let user = include.user;
              const items = [-144637948];
              const entries = Object.entries(callback2(include, closure_4));
              while (tmp2 !== undefined) {
                let tmp4 = callback;
                let tmp5 = callback(tmp3, 2);
                let first = tmp5[0];
                if (tmp5[1]) {
                  let tmp7 = items;
                  let tmp8 = first;
                  let arr = items.push(first);
                }
                // continue
              }
              let flag = true;
              if (undefined !== user) {
                flag = user;
                if ("boolean" !== typeof user) {
                  const items1 = [];
                  const _Object = Object;
                  const entries1 = Object.entries(user);
                  for (const item10047 of entries1) {
                    let tmp12 = closure_2;
                    let tmp13 = closure_2(item10047, 2);
                    let first1 = tmp13[0];
                    if (tmp13[1]) {
                      let tmp15 = items1;
                      let tmp16 = first1;
                      arr = items1.push(first1);
                    }
                  }
                  flag = items1;
                }
              }
              let obj = {};
              obj = { ip: include.ip, user: flag };
              let tmp18;
              if (0 !== items.length) {
                tmp18 = items;
              }
              obj.request = tmp18;
              obj.transaction = lib.transactionNamingScheme;
              obj.include = obj;
              if (normalizedRequest) {
                let tmp22;
                if (request) {
                  let ip = request.ip;
                  if (!ip) {
                    ip = request.socket && request.socket.remoteAddress;
                    const tmp23 = request.socket && request.socket.remoteAddress;
                  }
                  tmp22 = ip;
                }
                user = undefined;
                if (request) {
                  user = request.user;
                }
                const obj5 = lib(closure_1[2]);
                const obj1 = { ipAddress: tmp22, user };
                const result = obj5.addNormalizedRequestDataToEvent(sdkProcessingMetadata, normalizedRequest, obj1, obj);
                return sdkProcessingMetadata;
              } else {
                let result1 = sdkProcessingMetadata;
                if (request) {
                  result1 = lib(closure_1[2]).addRequestDataToEvent(sdkProcessingMetadata, request, obj);
                  const obj4 = lib(closure_1[2]);
                }
                return result1;
              }
              const tmp2 = entries[Symbol.iterator]();
            }
      };
      return obj1;
    }
    include = first.include;
    if (!include) {
      include = {};
    }
    user = Object.assign({}, closure_5.include.user, include.user);
  }
  first = {};
});
