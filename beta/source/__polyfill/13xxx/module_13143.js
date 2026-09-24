// Module ID: 13143
// Function ID: 13144
// Dependencies: [13099, 13129]
// Exports: createClientReportEnvelope

// Module 13143
import _mod13099 from "module_13099" /* 13099 */;
import _mod13129 from "module_13129" /* 13129 */;

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod13099.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod13129.createEnvelope(obj4, items1);
};
