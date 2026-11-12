// Module ID: 9788
// Function ID: 9789
// Dependencies: [9744, 9774]
// Exports: createClientReportEnvelope

// Module 9788
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 9744 */;
import _mod9774 from "module_9774" /* 9774 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod9774.createEnvelope;
  _mod9774;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
