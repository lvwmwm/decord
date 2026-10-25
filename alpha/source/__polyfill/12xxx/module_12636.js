// Module ID: 12636
// Function ID: 12637
// Dependencies: [12592, 12622]
// Exports: createClientReportEnvelope

// Module 12636
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12592 */;
import _mod12622 from "module_12622" /* 12622 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12622.createEnvelope;
  _mod12622;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
