// Module ID: 6369
// Function ID: 57333
// Name: createClientReportEnvelope
// Dependencies: [6325, 6355]

// Module 6369 (createClientReportEnvelope)
const require = arg1;
const dependencyMap = arg6;
arg5.createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  let obj = {};
  if (!arg2) {
    result = require(6325) /* dateTimestampInSeconds */.dateTimestampInSeconds();
    const obj2 = require(6325) /* dateTimestampInSeconds */;
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
  return require(6355) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};
