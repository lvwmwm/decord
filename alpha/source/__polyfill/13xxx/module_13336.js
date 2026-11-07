// Module ID: 13336
// Function ID: 13337
// Dependencies: [13292, 13322]
// Exports: createClientReportEnvelope

// Module 13336
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13292 */;
import _mod13322 from "module_13322" /* 13322 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod13322.createEnvelope;
  _mod13322;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
