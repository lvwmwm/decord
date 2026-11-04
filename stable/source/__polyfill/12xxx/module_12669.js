// Module ID: 12669
// Function ID: 12670
// Dependencies: [12625, 12655]
// Exports: createClientReportEnvelope

// Module 12669
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12625 */;
import _mod12655 from "module_12655" /* 12655 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12655.createEnvelope;
  _mod12655;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
