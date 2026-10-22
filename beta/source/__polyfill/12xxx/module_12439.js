// Module ID: 12439
// Function ID: 12440
// Dependencies: [12395, 12425]
// Exports: createClientReportEnvelope

// Module 12439
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12395 */;
import _mod12425 from "module_12425" /* 12425 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12425.createEnvelope;
  _mod12425;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
