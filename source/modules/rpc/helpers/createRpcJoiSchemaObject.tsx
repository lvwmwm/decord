// Module ID: 10557
// Function ID: 82255
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10557 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
