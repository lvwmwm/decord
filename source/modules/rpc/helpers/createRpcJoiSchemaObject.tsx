// Module ID: 10730
// Function ID: 10731
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10730 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
