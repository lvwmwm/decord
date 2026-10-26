// Module ID: 12637
// Function ID: 12638
// Dependencies: [12593, 12623]
// Exports: createClientReportEnvelope

// Module 12637
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12593 */;
import _mod12623 from "module_12623" /* 12623 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12623.createEnvelope;
  _mod12623;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
