// Module ID: 753
// Function ID: 754
// Dependencies: [702, 728]
// Exports: createClientReportEnvelope

// Module 753
import browserPerformanceTimeOrigin from "browserPerformanceTimeOrigin" /* 702 */;
import _mod728 from "module_728" /* 728 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function createClientReportEnvelope(_clearOutcomesResult, tunnel, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = browserPerformanceTimeOrigin;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events: _clearOutcomesResult };
  const createEnvelope = _mod728.createEnvelope;
  _mod728;
  if (tunnel) {
    obj3 = { dsn: tunnel };
    const obj2 = { dsn: tunnel };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
}
