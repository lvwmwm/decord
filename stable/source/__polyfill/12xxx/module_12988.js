// Module ID: 12988
// Function ID: 12989
// Dependencies: [12944, 12974]
// Exports: createClientReportEnvelope

// Module 12988
import _mod12944 from "module_12944" /* 12944 */;
import _mod12974 from "module_12974" /* 12974 */;

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod12944.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod12974.createEnvelope(obj4, items1);
};
