// Module ID: 873
// Function ID: 9706
// Name: eventFromEnvelope
// Dependencies: [77, 863, 804, 841, 799, 809]
// Exports: makeMultiplexedTransport

// Module 873 (eventFromEnvelope)
import _defineProperty from "_defineProperty";
import setupIntegration from "setupIntegration";
import isBuiltin from "isBuiltin";

function eventFromEnvelope(arg0, arg1) {
  const require = arg1;
  require(dependencyMap[3]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
    if (arg1.includes(arg1)) {
      const _Array = Array;
      let tmp2;
      if (Array.isArray(arg0)) {
        tmp2 = arg0[1];
      }
    }
    return tmp2;
  });
  return dependencyMap;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const MULTIPLEXED_TRANSPORT_EXTRA_KEY = "MULTIPLEXED_TRANSPORT_EXTRA_KEY";
export { eventFromEnvelope };
export function makeMultiplexedTransport(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  return (arg0) => {
    function getTransport(arg0, assign) {
      let combined = arg0;
      if (assign) {
        const _HermesInternal = HermesInternal;
        combined = "" + arg0 + ":" + assign;
      }
      const value = map.get(combined);
      if (value) {
        const items = [arg0, value];
        return items;
      } else {
        let obj = arg0(closure_1[4]);
        const dsnFromStringResult = obj.dsnFromString(arg0);
        if (dsnFromStringResult) {
          let envelopeEndpointWithUrlEncodedAuth = arg0(closure_1[5]).getEnvelopeEndpointWithUrlEncodedAuth(dsnFromStringResult, arg0.tunnel);
          let tmp11 = arg0;
          obj = globalThis;
          if (assign) {
            const _Object2 = obj.Object;
            assign = _Object2.assign;
            tmp11 = arg0;
            obj = { url: envelopeEndpointWithUrlEncodedAuth };
            let tmp11Result = function makeOverrideReleaseTransport(arg0, assign) {
              return (arg0) => {
                const tmp = callback(arg0);
                const arg1 = tmp;
                const obj = {};
                const callback = callback2(/* F9714 */ function*() { ... });
                obj.send = function send() { ... };
                return Object.assign({}, tmp, obj);
              };
            }(tmp11, assign)(assign({}, arg0, obj));
            const tmp14 = function makeOverrideReleaseTransport(arg0, assign) {
              return (arg0) => {
                const tmp = callback(arg0);
                const arg1 = tmp;
                const obj = {};
                const callback = callback2(/* F9714 */ function*() { ... });
                obj.send = function send() { ... };
                return Object.assign({}, tmp, obj);
              };
            }(tmp11, assign);
          } else {
            const _Object = Object;
            obj = { url: envelopeEndpointWithUrlEncodedAuth };
            tmp11Result = tmp11(Object.assign({}, arg0, obj));
          }
          envelopeEndpointWithUrlEncodedAuth = map;
          const result = map.set(combined, tmp11Result);
          const obj2 = arg0(closure_1[5]);
        }
      }
    }
    async function _send2(envelope, arg1) {
      const mapped = callback({
        envelope,
        getEvent(arg0) {
          let items = arg0;
          if (null == arg0) {
            items = [null];
          }
          return callback3(arg0, items);
        }
      }).map((dsn) => {
        if ("string" === typeof dsn) {
          let tmp2 = callback2(dsn, undefined);
        } else {
          tmp2 = callback2(dsn.dsn, dsn.release);
        }
        return tmp2;
      });
      const found = mapped.filter((arg0) => arg0);
      let arr4 = found;
      if (!found.length) {
        const items = [2060509169, closure_1];
        const items1 = [items];
        arr4 = items1;
      }
      return yield Promise.all(arr4.map((arg0) => {
        const tmp = callback(arg0, 2);
        const first = tmp[0];
        let obj = tmp[1];
        if (first) {
          const _Object = Object;
          obj = { dsn: first };
          let merged = Object.assign({}, tmp3[0], obj);
        } else {
          merged = tmp3[0];
        }
        return obj.send(arg0(closure_1[3]).createEnvelope(merged, arg0[1]));
      }))[0];
    }
    async function _flush(arg0, arg1) {
      const items = [];
      const items1 = [closure_1];
      const combined = items.concat(lib(lib.values()), items1);
      return yield Promise.all(combined.map((flush) => flush.flush(flush))).every((arg0) => arg0);
    }
    let closure_1 = arg0(arg0);
    const map = new Map();
    let fn = closure_1;
    if (!closure_1) {
      fn = (getEvent) => {
        const event = getEvent.getEvent();
        if (null != event) {
          const extra = event.extra;
          if (null != extra) {
            if (extra.MULTIPLEXED_TRANSPORT_EXTRA_KEY) {
              const _Array = Array;
              if (Array.isArray(event.extra.MULTIPLEXED_TRANSPORT_EXTRA_KEY)) {
                const MULTIPLEXED_TRANSPORT_EXTRA_KEY = event.extra.MULTIPLEXED_TRANSPORT_EXTRA_KEY;
              }
              return [];
            }
          }
        }
      };
    }
    return {
      send(arg0) {
        return _send2(...arguments);
      },
      flush(arg0) {
        return _flush(...arguments);
      }
    };
  };
}
