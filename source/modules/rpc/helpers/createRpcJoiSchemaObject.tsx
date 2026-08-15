// Module ID: 8755
// Function ID: 8756
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 8755 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
