// Module ID: 12631
// Function ID: 12632
// Dependencies: [12587, 12617]
// Exports: createClientReportEnvelope

// Module 12631
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12587 */;
import _mod12617 from "module_12617" /* 12617 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12617.createEnvelope;
  _mod12617;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
