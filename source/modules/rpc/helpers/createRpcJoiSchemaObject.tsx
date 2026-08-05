// Module ID: 10518
// Function ID: 10519
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10518 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
