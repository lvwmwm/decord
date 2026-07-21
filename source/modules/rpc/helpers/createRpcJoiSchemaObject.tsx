// Module ID: 10488
// Function ID: 81866
// Name: createRpcJoiSchemaObject
// Dependencies: []
// Exports: default

// Module 10488 (createRpcJoiSchemaObject)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
