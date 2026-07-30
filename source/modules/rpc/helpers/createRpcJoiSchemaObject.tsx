// Module ID: 10625
// Function ID: 10626
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10625 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
