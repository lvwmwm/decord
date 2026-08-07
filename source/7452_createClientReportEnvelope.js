// Module ID: 7452
// Function ID: 7453
// Name: createClientReportEnvelope
// Dependencies: [7408, 7438]

// Module 7452 (createClientReportEnvelope)
const require = arg1;
const dependencyMap = arg6;
arg5.createClientReportEnvelope = function createClientReportEnvelope(discarded_events) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    let obj = require(7408) /* dateTimestampInSeconds */;
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
  return require(7438) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};
