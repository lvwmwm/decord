// Module ID: 10482
// Function ID: 81832
// Name: createRpcJoiSchemaObject
// Dependencies: []
// Exports: default

// Module 10482 (createRpcJoiSchemaObject)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
