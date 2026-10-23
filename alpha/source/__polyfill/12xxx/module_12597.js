// Module ID: 12597
// Function ID: 12598
// Dependencies: [12553, 12583]
// Exports: createClientReportEnvelope

// Module 12597
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12553 */;
import _mod12583 from "module_12583" /* 12583 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12583.createEnvelope;
  _mod12583;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
