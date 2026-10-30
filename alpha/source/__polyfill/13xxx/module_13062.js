// Module ID: 13062
// Function ID: 13063
// Dependencies: [13018, 13048]
// Exports: createClientReportEnvelope

// Module 13062
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13018 */;
import _mod13048 from "module_13048" /* 13048 */;


export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = _browserPerformanceTimeOriginMode;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod13048.createEnvelope;
  _mod13048;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
