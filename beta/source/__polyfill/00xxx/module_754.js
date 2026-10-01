// Module ID: 754
// Function ID: 755
// Dependencies: [703, 729]
// Exports: createClientReportEnvelope

// Module 754
import browserPerformanceTimeOrigin from "browserPerformanceTimeOrigin" /* 703 */;
import _mod729 from "module_729" /* 729 */;

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
  const createEnvelope = _mod729.createEnvelope;
  _mod729;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};
