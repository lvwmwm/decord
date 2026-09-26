// Module ID: 13137
// Function ID: 13138
// Dependencies: [13093, 13123]
// Exports: createClientReportEnvelope

// Module 13137
import _mod13093 from "module_13093" /* 13093 */;
import _mod13123 from "module_13123" /* 13123 */;

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod13093.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod13123.createEnvelope(obj4, items1);
};
