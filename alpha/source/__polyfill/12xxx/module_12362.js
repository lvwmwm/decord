// Module ID: 12362
// Function ID: 12363
// Dependencies: [12318, 12348]
// Exports: createClientReportEnvelope

// Module 12362
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12318 */;
import _mod12348 from "module_12348" /* 12348 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12348.createEnvelope;
  _mod12348;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
