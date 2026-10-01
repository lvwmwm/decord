// Module ID: 12371
// Function ID: 12372
// Dependencies: [12327, 12357]
// Exports: createClientReportEnvelope

// Module 12371
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12327 */;
import _mod12357 from "module_12357" /* 12357 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12357.createEnvelope;
  _mod12357;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
