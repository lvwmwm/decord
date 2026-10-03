// Module ID: 10939
// Function ID: 10940
// Name: IosAttributionSignRequest
// Dependencies: [5, 1085, 1282, 1242, 2]
// Exports: fetchIosAttributionSignedPayloads

// Module 10939 (IosAttributionSignRequest)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_4, impression_id, metadata_sealed, signal, specs;

let obj = function _fetchIosAttributionSignedPayloads() {
  obj = _asyncToGenerator(async (metadata_sealed) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let obj6;
      let tmp5;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              let closure_3 = tmp;
              let closure_2 = tmp5;
              metadata_sealed = undefined;
              impression_id = undefined;
              specs = undefined;
              signal = undefined;
              ({ metadataSealed: c0, impressionId: c1, specs: c2, signal: c3 } = closure_0);
              c6 = 1;
              c7 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 1;
              const HTTP = closure_131_0(closure_131_2[2]).HTTP;
              const request = { url: closure_131_4.ADS_IOS_ATTRIBUTION_SIGN_PAYLOAD, body: obj6, failImmediatelyWhenRateLimited: true, rejectWithError: true, timeout: 5000, signal };
              c6 = 3;
              c7 = 1;
              obj6 = { metadata_sealed, impression_id, specs };
              const obj7 = { value: HTTP.post(request), done: false };
              return obj7;
            }
          } else if (2 === c6) {
            c5 = 0;
            tmp5 = closure_4;
            const obj8 = { tags: { app_context: "ios_attribution" } };
            const obj3 = closure_131_1(closure_131_2[3]);
            obj3.captureException(closure_4, obj8);
            c7 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            const payloads = value.body.payloads;
            impression_id = payloads;
            if (payloads == null) {
              impression_id = null;
            }
            tmp5 = impression_id;
            c5 = 0;
            c7 = 3;
            return { value: tmp5, done: true };
          }
        } catch (tmp14) {
          closure_4 = tmp14;
          if (0 === c5) {
            c7 = 3;
            throw tmp14;
          } else {
            c6 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionSignRequest.tsx");

export const fetchIosAttributionSignedPayloads = function fetchIosAttributionSignedPayloads() {
  return obj(...arguments);
};
