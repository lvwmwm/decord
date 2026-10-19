// Module ID: 12444
// Function ID: 12445
// Dependencies: [12400, 12430]
// Exports: createClientReportEnvelope

// Module 12444
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12400 */;
import _mod12430 from "module_12430" /* 12430 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12430.createEnvelope;
  _mod12430;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
