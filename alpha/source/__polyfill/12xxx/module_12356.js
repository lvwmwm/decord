// Module ID: 12356
// Function ID: 12357
// Dependencies: [12312, 12342]
// Exports: createClientReportEnvelope

// Module 12356
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12312 */;
import _mod12342 from "module_12342" /* 12342 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12342.createEnvelope;
  _mod12342;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
