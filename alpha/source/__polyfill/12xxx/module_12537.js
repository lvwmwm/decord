// Module ID: 12537
// Function ID: 12538
// Dependencies: [12493, 12523]
// Exports: createClientReportEnvelope

// Module 12537
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12493 */;
import _mod12523 from "module_12523" /* 12523 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12523.createEnvelope;
  _mod12523;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
