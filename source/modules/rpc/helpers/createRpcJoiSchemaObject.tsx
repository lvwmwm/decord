// Module ID: 10673
// Function ID: 10674
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10673 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
