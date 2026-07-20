// Module ID: 865
// Function ID: 9650
// Name: createClientReportEnvelope
// Dependencies: []

// Module 865 (createClientReportEnvelope)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  let obj = {};
  if (!arg2) {
    result = dsn(arg6[0]).dateTimestampInSeconds();
    const obj2 = dsn(arg6[0]);
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
  return dsn(arg6[1]).createEnvelope(obj, items1);
};
