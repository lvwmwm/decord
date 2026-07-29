// Module ID: 6426
// Function ID: 6427
// Name: createClientReportEnvelope
// Dependencies: [6382, 6412]

// Module 6426 (createClientReportEnvelope)
const require = arg1;
const dependencyMap = arg6;
arg5.createClientReportEnvelope = function createClientReportEnvelope(discarded_events) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    let obj = require(6382) /* dateTimestampInSeconds */;
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
  return require(6412) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};
