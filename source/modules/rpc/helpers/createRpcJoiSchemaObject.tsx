// Module ID: 10489
// Function ID: 81879
// Name: createRpcJoiSchemaObject
// Dependencies: []
// Exports: default

// Module 10489 (createRpcJoiSchemaObject)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  return object.object().unknown(true);
};
