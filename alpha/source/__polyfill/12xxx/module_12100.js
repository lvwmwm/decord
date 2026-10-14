// Module ID: 12100
// Function ID: 12101
// Dependencies: [12056, 12086]
// Exports: createClientReportEnvelope

// Module 12100
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12056 */;
import _mod12086 from "module_12086" /* 12086 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12086.createEnvelope;
  _mod12086;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
