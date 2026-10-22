// Module ID: 12578
// Function ID: 12579
// Dependencies: [12534, 12564]
// Exports: createClientReportEnvelope

// Module 12578
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12534 */;
import _mod12564 from "module_12564" /* 12564 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12564.createEnvelope;
  _mod12564;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
