// Module ID: 10499
// Function ID: 81929
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10499 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
