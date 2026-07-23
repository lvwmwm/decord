// Module ID: 7299
// Function ID: 58885
// Name: getEventForEnvelopeItem
// Dependencies: [7300, 7280, 7301, 7260, 7264, 7236, 7293]

// Module 7299 (getEventForEnvelopeItem)
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
          bufferSize(7280).forEachEnvelopeItem(arg0, (arg0, arg1) => {
            const result = items(7280).envelopeItemTypeToDataCategory(arg1);
            const obj = items(7280);
            if (obj2.isRateLimited(outer1_3, result)) {
              items.recordDroppedEvent("ratelimit_backoff", result, promiseBuffer(arg0, arg1));
            } else {
              items.push(arg0);
            }
          });
          if (0 === items.length) {
            return bufferSize(7260).resolvedSyncPromise({});
          } else {
            const dependencyMap = bufferSize(7280).createEnvelope(arg0[0], items);
            function recordEnvelopeLoss(arg0) {
              const items = arg0;
              items(7280).forEachEnvelopeItem(dependencyMap, (arg0, arg1) => {
                const tmp = promiseBuffer(arg0, arg1);
                items.recordDroppedEvent(callback, callback(table[1]).envelopeItemTypeToDataCategory(arg1), tmp);
              });
            }
            let obj2 = bufferSize(7280);
            return recordEnvelopeLoss.add(function requestTask() {
              const obj = { body: items(7280).serializeEnvelope(dependencyMap) };
              const obj2 = items(7280);
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
                  DEBUG_BUILD = callback(7264).DEBUG_BUILD;
                }
                if (DEBUG_BUILD) {
                  const logger = callback(7236).logger;
                  const _HermesInternal = HermesInternal;
                  logger.warn("Sentry responded with status code " + statusCode.statusCode + " to sent event.");
                }
                outer2_3 = callback(7301).updateRateLimits(outer2_3, statusCode);
                return statusCode;
              }, (arg0) => {
                outer1_2("network_error");
                throw arg0;
              });
            }).then((arg0) => arg0, (arg0) => {
              if (arg0 instanceof items(7293).SentryError) {
                if (items(7264).DEBUG_BUILD) {
                  const logger = items(7236).logger;
                  logger.error("Skipped sending event because buffer is full.");
                }
                recordEnvelopeLoss("queue_overflow");
                return items(7260).resolvedSyncPromise({});
              } else {
                throw arg0;
              }
            });
          }
          let obj = bufferSize(7280);
        },
      flush(arg0) {
          return promiseBuffer.drain(arg0);
        }
    };
    return obj;
  }
  obj = _require(7300);
  let num = bufferSize.bufferSize;
  if (!num) {
    num = 64;
  }
  promiseBuffer = obj.makePromiseBuffer(num);
};
