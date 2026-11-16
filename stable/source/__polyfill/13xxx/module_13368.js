// Module ID: 13368
// Function ID: 13369
// Dependencies: [13324, 13354]
// Exports: createClientReportEnvelope

// Module 13368
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13324 */;
import _mod13354 from "module_13354" /* 13354 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod13354.createEnvelope;
  _mod13354;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
