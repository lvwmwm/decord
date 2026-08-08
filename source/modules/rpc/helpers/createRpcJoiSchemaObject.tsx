// Module ID: 10739
// Function ID: 10740
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10739 (createRpcJoiSchemaObject)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
