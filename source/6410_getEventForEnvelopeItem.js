// Module ID: 6410
// Function ID: 57456
// Name: getEventForEnvelopeItem
// Dependencies: [6411, 6391, 6412, 6371, 6375, 6347, 6404]

// Module 6410 (getEventForEnvelopeItem)
const require = arg1;
let dependencyMap = arg6;
function getEventForEnvelopeItem(arg0, arg1) {
  let tmp;
  if (Array.isArray(arg0)) {
    tmp = arg0[1];
  }
  return tmp;
}
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
          bufferSize(6391).forEachEnvelopeItem(arg0, (arg0, arg1) => {
            const result = items(6391).envelopeItemTypeToDataCategory(arg1);
            const obj = items(6391);
            if (obj2.isRateLimited(outer1_3, result)) {
              items.recordDroppedEvent("ratelimit_backoff", result, promiseBuffer(arg0, arg1));
            } else {
              items.push(arg0);
            }
          });
          if (0 === items.length) {
            return bufferSize(6371).resolvedSyncPromise({});
          } else {
            const dependencyMap = bufferSize(6391).createEnvelope(arg0[0], items);
            function recordEnvelopeLoss(arg0) {
              const items = arg0;
              items(6391).forEachEnvelopeItem(dependencyMap, (arg0, arg1) => {
                const tmp = promiseBuffer(arg0, arg1);
                items.recordDroppedEvent(callback, callback(table[1]).envelopeItemTypeToDataCategory(arg1), tmp);
              });
            }
            let obj2 = bufferSize(6391);
            return recordEnvelopeLoss.add(function requestTask() {
              const obj = { body: items(6391).serializeEnvelope(dependencyMap) };
              const obj2 = items(6391);
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
                  DEBUG_BUILD = callback(6375).DEBUG_BUILD;
                }
                if (DEBUG_BUILD) {
                  const logger = callback(6347).logger;
                  const _HermesInternal = HermesInternal;
                  logger.warn("Sentry responded with status code " + statusCode.statusCode + " to sent event.");
                }
                outer2_3 = callback(6412).updateRateLimits(outer2_3, statusCode);
                return statusCode;
              }, (arg0) => {
                outer1_2("network_error");
                throw arg0;
              });
            }).then((arg0) => arg0, (arg0) => {
              if (arg0 instanceof items(6404).SentryError) {
                if (items(6375).DEBUG_BUILD) {
                  const logger = items(6347).logger;
                  logger.error("Skipped sending event because buffer is full.");
                }
                recordEnvelopeLoss("queue_overflow");
                return items(6371).resolvedSyncPromise({});
              } else {
                throw arg0;
              }
            });
          }
          let obj = bufferSize(6391);
        },
      flush(arg0) {
          return promiseBuffer.drain(arg0);
        }
    };
    return obj;
  }
  obj = _require(6411);
  let num = bufferSize.bufferSize;
  if (!num) {
    num = 64;
  }
  promiseBuffer = obj.makePromiseBuffer(num);
};
