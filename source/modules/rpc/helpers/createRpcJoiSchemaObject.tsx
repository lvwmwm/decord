// Module ID: 10629
// Function ID: 10630
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10629 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
