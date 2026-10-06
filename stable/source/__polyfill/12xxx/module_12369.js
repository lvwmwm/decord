// Module ID: 12369
// Function ID: 12370
// Dependencies: [12325, 12355]
// Exports: createClientReportEnvelope

// Module 12369
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12325 */;
import _mod12355 from "module_12355" /* 12355 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12355.createEnvelope;
  _mod12355;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
