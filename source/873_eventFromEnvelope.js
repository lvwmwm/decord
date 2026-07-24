// Module ID: 873
// Function ID: 9708
// Name: eventFromEnvelope
// Dependencies: [65, 57, 5, 840, 814, 851]
// Exports: makeMultiplexedTransport

// Module 873 (eventFromEnvelope)
import _toConsumableArray from "_toConsumableArray";
import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "getBaseApiEndpoint";

function eventFromEnvelope(arg0, arg1) {
  const _require = arg1;
  _require(840).forEachEnvelopeItem(arg0, (arg0, arg1) => {
    if (closure_0.includes(arg1)) {
      const _Array = Array;
      let tmp2;
      if (Array.isArray(arg0)) {
        tmp2 = arg0[1];
      }
      let closure_1 = tmp2;
    }
    return closure_1;
  });
  return dependencyMap;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const MULTIPLEXED_TRANSPORT_EXTRA_KEY = "MULTIPLEXED_TRANSPORT_EXTRA_KEY";
export { eventFromEnvelope };
export function makeMultiplexedTransport(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0) => {
    let callback = arg0;
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
        let obj = lib(814);
        const dsnFromStringResult = obj.dsnFromString(arg0);
        if (dsnFromStringResult) {
          let envelopeEndpointWithUrlEncodedAuth = lib(851).getEnvelopeEndpointWithUrlEncodedAuth(dsnFromStringResult, lib.tunnel);
          let tmp11 = lib;
          obj = globalThis;
          if (assign) {
            const _Object2 = obj.Object;
            assign = _Object2.assign;
            tmp11 = lib;
            obj = { url: envelopeEndpointWithUrlEncodedAuth };
            let tmp11Result = (function makeOverrideReleaseTransport(arg0, assign) {
              let closure_0 = arg0;
              let closure_1 = assign;
              return (arg0) => {
                const tmp = callback(arg0);
                let closure_1 = tmp;
                const obj = {};
                callback = outer4_4(/* F9716 */ function*() { ... });
                obj.send = function send() { ... };
                return Object.assign({}, tmp, obj);
              };
            })(tmp11, assign)(assign({}, lib, obj));
            const tmp14 = (function makeOverrideReleaseTransport(arg0, assign) {
              let closure_0 = arg0;
              let closure_1 = assign;
              return (arg0) => {
                const tmp = callback(arg0);
                let closure_1 = tmp;
                const obj = {};
                callback = outer4_4(/* F9716 */ function*() { ... });
                obj.send = function send() { ... };
                return Object.assign({}, tmp, obj);
              };
            })(tmp11, assign);
          } else {
            const _Object = Object;
            obj = { url: envelopeEndpointWithUrlEncodedAuth };
            tmp11Result = tmp11(Object.assign({}, lib, obj));
          }
          envelopeEndpointWithUrlEncodedAuth = map;
          const result = map.set(combined, tmp11Result);
          const obj2 = lib(851);
        }
      }
    }
    async function _send2(arg0, arg1) {
      let closure_0 = arg0;
      const mapped = outer2_3({
        envelope: arg0,
        getEvent(arg0) {
          let items = arg0;
          if (null == arg0) {
            items = ["event"];
          }
          return outer5_5(closure_0, items);
        }
      }).map((dsn) => {
        if ("string" === typeof dsn) {
          let tmp2 = outer3_4(dsn, undefined);
        } else {
          tmp2 = outer3_4(dsn.dsn, dsn.release);
        }
        return tmp2;
      });
      const found = mapped.filter((arg0) => arg0);
      let arr4 = found;
      if (!found.length) {
        let items = ["", outer2_1];
        const items1 = [items];
        arr4 = items1;
      }
      return yield Promise.all(arr4.map((arg0) => {
        const tmp = outer5_3(arg0, 2);
        const first = tmp[0];
        let obj = tmp[1];
        if (first) {
          const _Object = Object;
          obj = { dsn: first };
          let merged = Object.assign({}, tmp3[0], obj);
        } else {
          merged = tmp3[0];
        }
        return obj.send(envelope(table[3]).createEnvelope(merged, envelope[1]));
      }))[0];
    }
    async function _flush(arg0, arg1) {
      let closure_0 = arg0;
      const items = [];
      const items1 = [outer2_1];
      const combined = items.concat(outer4_2(outer2_2.values()), items1);
      return yield Promise.all(combined.map((flush) => flush.flush(closure_0))).every((arg0) => arg0);
    }
    let closure_1 = callback(arg0);
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
