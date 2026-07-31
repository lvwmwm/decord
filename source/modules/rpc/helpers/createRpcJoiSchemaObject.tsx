// Module ID: 10643
// Function ID: 10644
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10643 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
