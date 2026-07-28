// Module ID: 6405
// Function ID: 57423
// Name: createClientReportEnvelope
// Dependencies: [6361, 6391]

// Module 6405 (createClientReportEnvelope)
const require = arg1;
const dependencyMap = arg6;
arg5.createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  let obj = {};
  if (!arg2) {
    result = require(6361) /* dateTimestampInSeconds */.dateTimestampInSeconds();
    const obj2 = require(6361) /* dateTimestampInSeconds */;
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
  return require(6391) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};
