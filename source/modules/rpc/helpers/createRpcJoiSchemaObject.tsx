// Module ID: 10528
// Function ID: 82121
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10528 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
