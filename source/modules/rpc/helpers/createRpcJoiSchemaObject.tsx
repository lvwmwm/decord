// Module ID: 10740
// Function ID: 10741
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10740 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
