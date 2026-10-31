// Module ID: 13097
// Function ID: 13098
// Dependencies: [13053, 13083]
// Exports: createClientReportEnvelope

// Module 13097
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13053 */;
import _mod13083 from "module_13083" /* 13083 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod13083.createEnvelope;
  _mod13083;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
