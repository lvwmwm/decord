// Module ID: 12427
// Function ID: 12428
// Dependencies: [12383, 12413]
// Exports: createClientReportEnvelope

// Module 12427
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12383 */;
import _mod12413 from "module_12413" /* 12413 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12413.createEnvelope;
  _mod12413;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
