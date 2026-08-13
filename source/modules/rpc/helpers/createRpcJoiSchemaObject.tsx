// Module ID: 10712
// Function ID: 10713
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10712 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
