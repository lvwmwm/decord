// Module ID: 13331
// Function ID: 13332
// Dependencies: [13287, 13317]
// Exports: createClientReportEnvelope

// Module 13331
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13287 */;
import _mod13317 from "module_13317" /* 13317 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod13317.createEnvelope;
  _mod13317;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
