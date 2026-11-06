// Module ID: 13313
// Function ID: 13314
// Dependencies: [13269, 13299]
// Exports: createClientReportEnvelope

// Module 13313
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13269 */;
import _mod13299 from "module_13299" /* 13299 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod13299.createEnvelope;
  _mod13299;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
