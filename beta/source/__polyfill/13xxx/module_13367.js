// Module ID: 13367
// Function ID: 13368
// Dependencies: [13323, 13353]
// Exports: createClientReportEnvelope

// Module 13367
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13323 */;
import _mod13353 from "module_13353" /* 13353 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod13353.createEnvelope;
  _mod13353;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
