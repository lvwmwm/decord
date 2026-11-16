// Module ID: 9855
// Function ID: 9856
// Dependencies: [9811, 9841]
// Exports: createClientReportEnvelope

// Module 9855
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 9811 */;
import _mod9841 from "module_9841" /* 9841 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod9841.createEnvelope;
  _mod9841;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
