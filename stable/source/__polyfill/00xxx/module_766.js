// Module ID: 766
// Function ID: 767
// Dependencies: [715, 741]
// Exports: createClientReportEnvelope

// Module 766
import browserPerformanceTimeOrigin from "browserPerformanceTimeOrigin" /* 715 */;
import _mod741 from "module_741" /* 741 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = browserPerformanceTimeOrigin;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod741.createEnvelope;
  _mod741;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
