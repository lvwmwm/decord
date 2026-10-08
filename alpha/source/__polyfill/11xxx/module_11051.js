// Module ID: 11051
// Function ID: 11052
// Dependencies: [11007, 11037]
// Exports: createClientReportEnvelope

// Module 11051
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 11007 */;
import _mod11037 from "module_11037" /* 11037 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod11037.createEnvelope;
  _mod11037;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
