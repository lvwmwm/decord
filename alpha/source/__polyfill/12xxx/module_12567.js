// Module ID: 12567
// Function ID: 12568
// Dependencies: [12523, 12553]
// Exports: createClientReportEnvelope

// Module 12567
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12523 */;
import _mod12553 from "module_12553" /* 12553 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12553.createEnvelope;
  _mod12553;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
