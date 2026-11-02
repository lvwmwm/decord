// Module ID: 13112
// Function ID: 13113
// Dependencies: [13068, 13098]
// Exports: createClientReportEnvelope

// Module 13112
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13068 */;
import _mod13098 from "module_13098" /* 13098 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod13098.createEnvelope;
  _mod13098;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
