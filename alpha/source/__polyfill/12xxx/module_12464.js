// Module ID: 12464
// Function ID: 12465
// Dependencies: [12420, 12450]
// Exports: createClientReportEnvelope

// Module 12464
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12420 */;
import _mod12450 from "module_12450" /* 12450 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12450.createEnvelope;
  _mod12450;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
