// Module ID: 865
// Function ID: 9656
// Name: createClientReportEnvelope
// Dependencies: [815, 840]

// Module 865 (createClientReportEnvelope)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  let obj = {};
  if (!arg2) {
    result = require(815) /* dateTimestampInSeconds */.dateTimestampInSeconds();
    const obj2 = require(815) /* dateTimestampInSeconds */;
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
  return require(840) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};
