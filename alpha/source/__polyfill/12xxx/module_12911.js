// Module ID: 12911
// Function ID: 12912
// Dependencies: [12867, 12897]
// Exports: createClientReportEnvelope

// Module 12911
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12867 */;
import _mod12897 from "module_12897" /* 12897 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12897.createEnvelope;
  _mod12897;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
