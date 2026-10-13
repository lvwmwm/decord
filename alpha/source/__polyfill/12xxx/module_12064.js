// Module ID: 12064
// Function ID: 12065
// Dependencies: [12020, 12050]
// Exports: createClientReportEnvelope

// Module 12064
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12020 */;
import _mod12050 from "module_12050" /* 12050 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12050.createEnvelope;
  _mod12050;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
