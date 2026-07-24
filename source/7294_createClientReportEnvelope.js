// Module ID: 7294
// Function ID: 58881
// Name: createClientReportEnvelope
// Dependencies: [7250, 7280]

// Module 7294 (createClientReportEnvelope)
const require = arg1;
const dependencyMap = arg6;
arg5.createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  let obj = {};
  if (!arg2) {
    result = require(7250) /* dateTimestampInSeconds */.dateTimestampInSeconds();
    const obj2 = require(7250) /* dateTimestampInSeconds */;
  }
  obj.timestamp = result;
  obj.discarded_events = discarded_events;
  items[1] = obj;
  if (dsn) {
    obj = { dsn };
  } else {
    obj = {};
  }
  const items1 = [items];
  return require(7280) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};
