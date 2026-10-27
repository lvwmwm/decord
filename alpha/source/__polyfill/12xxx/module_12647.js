// Module ID: 12647
// Function ID: 12648
// Dependencies: [12603, 12633]
// Exports: createClientReportEnvelope

// Module 12647
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12603 */;
import _mod12633 from "module_12633" /* 12633 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12633.createEnvelope;
  _mod12633;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
