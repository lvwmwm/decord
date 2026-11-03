// Module ID: 13248
// Function ID: 13249
// Dependencies: [13204, 13234]
// Exports: createClientReportEnvelope

// Module 13248
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13204 */;
import _mod13234 from "module_13234" /* 13234 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod13234.createEnvelope;
  _mod13234;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
