// Module ID: 10595
// Function ID: 82376
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10595 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
