// Module ID: 12333
// Function ID: 12334
// Dependencies: [12289, 12319]
// Exports: createClientReportEnvelope

// Module 12333
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12289 */;
import _mod12319 from "module_12319" /* 12319 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12319.createEnvelope;
  _mod12319;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
