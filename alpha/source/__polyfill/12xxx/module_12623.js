// Module ID: 12623
// Function ID: 12624
// Dependencies: [12579, 12609]
// Exports: createClientReportEnvelope

// Module 12623
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12579 */;
import _mod12609 from "module_12609" /* 12609 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12609.createEnvelope;
  _mod12609;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
