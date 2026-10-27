// Module ID: 12639
// Function ID: 12640
// Dependencies: [12595, 12625]
// Exports: createClientReportEnvelope

// Module 12639
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12595 */;
import _mod12625 from "module_12625" /* 12625 */;


export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod12625.createEnvelope;
  _mod12625;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
