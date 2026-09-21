// Module ID: 13107
// Function ID: 13108
// Dependencies: [13063, 13093]
// Exports: createClientReportEnvelope

// Module 13107
import _mod13063 from "module_13063" /* 13063 */;
import _mod13093 from "module_13093" /* 13093 */;

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod13063.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod13093.createEnvelope(obj4, items1);
};
