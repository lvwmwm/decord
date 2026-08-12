// Module ID: 10798
// Function ID: 10799
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10798 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
