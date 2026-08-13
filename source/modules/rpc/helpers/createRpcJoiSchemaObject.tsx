// Module ID: 10714
// Function ID: 10715
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10714 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
