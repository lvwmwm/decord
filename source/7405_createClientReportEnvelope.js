// Module ID: 7405
// Function ID: 7406
// Name: createClientReportEnvelope
// Dependencies: [7361, 7391]

// Module 7405 (createClientReportEnvelope)
const require = arg1;
const dependencyMap = arg6;
arg5.createClientReportEnvelope = function createClientReportEnvelope(discarded_events) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    let obj = require(7361) /* dateTimestampInSeconds */;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (arg1) {
    obj = { dsn: null };
    obj[0] = arg1;
  } else {
    obj = {};
  }
  const items1 = [items];
  return require(7391) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};
