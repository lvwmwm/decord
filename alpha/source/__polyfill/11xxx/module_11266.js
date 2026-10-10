// Module ID: 11266
// Function ID: 11267
// Dependencies: [11222, 11252]
// Exports: createClientReportEnvelope

// Module 11266
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 11222 */;
import _mod11252 from "module_11252" /* 11252 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod11252.createEnvelope;
  _mod11252;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
