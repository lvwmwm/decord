// Module ID: 854
// Function ID: 9592
// Name: createTransport
// Dependencies: [853, 840, 855, 800, 801]

// Module 854 (createTransport)
const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
arg5.createTransport = function createTransport(bufferSize) {
  const _require = bufferSize;
  let dependencyMap = arg1;
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let promiseBuffer = arguments[2];
    }
    let closure_3 = {};
    let obj = {
      send(arg0) {
          let items = [];
          bufferSize(840).forEachEnvelopeItem(arg0, (arg0, arg1) => {
            const result = items(840).envelopeItemTypeToDataCategory(arg1);
            const obj = items(840);
            if (obj2.isRateLimited(outer1_3, result)) {
              items.recordDroppedEvent("ratelimit_backoff", result);
            } else {
              items.push(arg0);
            }
          });
          if (0 === items.length) {
            return Promise.resolve({});
          } else {
            const dependencyMap = bufferSize(840).createEnvelope(arg0[0], items);
            function recordEnvelopeLoss(arg0) {
              const items = arg0;
              if (obj.envelopeContainsItemType(dependencyMap, ["client_report"])) {
                if (tmp(800).DEBUG_BUILD) {
                  const debug = items(801).debug;
                  const _HermesInternal = HermesInternal;
                  debug.warn("Dropping client report. Will not send outcomes (reason: " + arg0 + ").");
                }
              } else {
                tmp(840).forEachEnvelopeItem(dependencyMap, (arg0, arg1) => {
                  items.recordDroppedEvent(callback, callback(table[1]).envelopeItemTypeToDataCategory(arg1));
                });
                const tmpResult = tmp(840);
              }
            }
            let obj2 = bufferSize(840);
            return recordEnvelopeLoss.add(function requestTask() {
              const obj = { body: items(840).serializeEnvelope(dependencyMap) };
              const obj2 = items(840);
              return dependencyMap(obj).then((statusCode) => {
                let DEBUG_BUILD = undefined !== statusCode.statusCode;
                if (DEBUG_BUILD) {
                  let tmp = statusCode.statusCode < 200;
                  if (!tmp) {
                    tmp = statusCode.statusCode >= 300;
                  }
                  DEBUG_BUILD = tmp;
                }
                if (DEBUG_BUILD) {
                  DEBUG_BUILD = callback(800).DEBUG_BUILD;
                }
                if (DEBUG_BUILD) {
                  const debug = callback(801).debug;
                  const _HermesInternal = HermesInternal;
                  debug.warn("Sentry responded with status code " + statusCode.statusCode + " to sent event.");
                }
                outer2_3 = callback(855).updateRateLimits(outer2_3, statusCode);
                return statusCode;
              }, (arg0) => {
                outer1_2("network_error");
                if (callback(800).DEBUG_BUILD) {
                  const debug = callback(801).debug;
                  debug.error("Encountered error running transport request:", arg0);
                }
                throw arg0;
              });
            }).then((arg0) => arg0, (arg0) => {
              if (arg0 === items(853).SENTRY_BUFFER_FULL_ERROR) {
                if (items(800).DEBUG_BUILD) {
                  const debug = items(801).debug;
                  debug.error("Skipped sending event because buffer is full.");
                }
                recordEnvelopeLoss("queue_overflow");
                return Promise.resolve({});
              } else {
                throw arg0;
              }
            });
          }
          let obj = bufferSize(840);
        },
      flush(arg0) {
          return promiseBuffer.drain(arg0);
        }
    };
    return obj;
  }
  obj = _require(853);
  let num = bufferSize.bufferSize;
  if (!num) {
    num = 64;
  }
  promiseBuffer = obj.makePromiseBuffer(num);
};
