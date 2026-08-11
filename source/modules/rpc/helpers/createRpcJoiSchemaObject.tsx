// Module ID: 10745
// Function ID: 10746
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10745 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
