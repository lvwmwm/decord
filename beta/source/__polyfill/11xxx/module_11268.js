// Module ID: 11268
// Function ID: 11269
// Dependencies: [11224, 11254]
// Exports: createClientReportEnvelope

// Module 11268
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 11224 */;
import _mod11254 from "module_11254" /* 11254 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod11254.createEnvelope;
  _mod11254;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
