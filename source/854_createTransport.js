// Module ID: 854
// Function ID: 9590
// Name: createTransport
// Dependencies: []

// Module 854 (createTransport)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
arg5.createTransport = function createTransport(bufferSize) {
  const arg1 = bufferSize;
  const arg6 = arg1;
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let promiseBuffer = arguments[2];
    }
    let closure_3 = {};
    let obj = {
      send(arg0) {
          const items = [];
          arg0 = items;
          arg0(closure_1[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
            const result = items(closure_1[1]).envelopeItemTypeToDataCategory(arg1);
            const obj = items(closure_1[1]);
            if (obj2.isRateLimited(closure_3, result)) {
              items.recordDroppedEvent("ratelimit_backoff", result);
            } else {
              items.push(arg0);
            }
          });
          if (0 === items.length) {
            return Promise.resolve({});
          } else {
            closure_1 = arg0(closure_1[1]).createEnvelope(arg0[0], items);
            function recordEnvelopeLoss(arg0) {
              const items = arg0;
              if (obj.envelopeContainsItemType(closure_1, [null])) {
                if (tmp(tmp2[3]).DEBUG_BUILD) {
                  const debug = items(closure_1[4]).debug;
                  const _HermesInternal = HermesInternal;
                  debug.warn("Dropping client report. Will not send outcomes (reason: " + arg0 + ").");
                }
              } else {
                tmp(tmp2[1]).forEachEnvelopeItem(closure_1, (arg0, arg1) => {
                  arg0.recordDroppedEvent(arg0, arg0(closure_1[1]).envelopeItemTypeToDataCategory(arg1));
                });
                const tmpResult = tmp(tmp2[1]);
              }
            }
            const obj2 = arg0(closure_1[1]);
            return recordEnvelopeLoss.add(function requestTask() {
              const obj = { body: items(callback[1]).serializeEnvelope(callback) };
              const obj2 = items(callback[1]);
              return callback(obj).then((statusCode) => {
                let DEBUG_BUILD = undefined !== statusCode.statusCode;
                if (DEBUG_BUILD) {
                  let tmp = statusCode.statusCode < 200;
                  if (!tmp) {
                    tmp = statusCode.statusCode >= 300;
                  }
                  DEBUG_BUILD = tmp;
                }
                if (DEBUG_BUILD) {
                  DEBUG_BUILD = callback(closure_1[3]).DEBUG_BUILD;
                }
                if (DEBUG_BUILD) {
                  const debug = callback(closure_1[4]).debug;
                  const _HermesInternal = HermesInternal;
                  debug.warn("Sentry responded with status code " + statusCode.statusCode + " to sent event.");
                }
                closure_3 = callback(closure_1[2]).updateRateLimits(closure_3, statusCode);
                return statusCode;
              }, (arg0) => {
                callback2("network_error");
                if (callback(closure_1[3]).DEBUG_BUILD) {
                  const debug = callback(closure_1[4]).debug;
                  debug.error("Encountered error running transport request:", arg0);
                }
                throw arg0;
              });
            }).then((arg0) => arg0, (arg0) => {
              if (arg0 === items(closure_1[0]).SENTRY_BUFFER_FULL_ERROR) {
                if (items(closure_1[3]).DEBUG_BUILD) {
                  const debug = items(closure_1[4]).debug;
                  debug.error("Skipped sending event because buffer is full.");
                }
                recordEnvelopeLoss("queue_overflow");
                return Promise.resolve({});
              } else {
                throw arg0;
              }
            });
          }
          const obj = arg0(closure_1[1]);
        },
      flush(arg0) {
          return promiseBuffer.drain(arg0);
        }
    };
    return obj;
  }
  obj = arg1(arg6[0]);
  let num = bufferSize.bufferSize;
  if (!num) {
    num = 64;
  }
  promiseBuffer = obj.makePromiseBuffer(num);
};
