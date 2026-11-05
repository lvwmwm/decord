// Module ID: 13339
// Function ID: 13340
// Dependencies: [13295, 13325]
// Exports: createClientReportEnvelope

// Module 13339
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13295 */;
import _mod13325 from "module_13325" /* 13325 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod13325.createEnvelope;
  _mod13325;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
