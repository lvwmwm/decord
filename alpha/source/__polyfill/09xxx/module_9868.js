// Module ID: 9868
// Function ID: 9869
// Dependencies: [9824, 9854]
// Exports: createClientReportEnvelope

// Module 9868
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 9824 */;
import _mod9854 from "module_9854" /* 9854 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod9854.createEnvelope;
  _mod9854;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
