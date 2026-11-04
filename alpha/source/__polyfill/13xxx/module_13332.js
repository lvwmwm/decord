// Module ID: 13332
// Function ID: 13333
// Dependencies: [13288, 13318]
// Exports: createClientReportEnvelope

// Module 13332
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13288 */;
import _mod13318 from "module_13318" /* 13318 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod13318.createEnvelope;
  _mod13318;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
