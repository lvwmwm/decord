// Module ID: 9789
// Function ID: 9790
// Dependencies: [9745, 9775]
// Exports: createClientReportEnvelope

// Module 9789
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 9745 */;
import _mod9775 from "module_9775" /* 9775 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod9775.createEnvelope;
  _mod9775;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
