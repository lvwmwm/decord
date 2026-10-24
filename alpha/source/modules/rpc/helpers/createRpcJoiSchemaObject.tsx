// Module ID: 11472
// Function ID: 11473
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 11472 (createRpcJoiSchemaObject)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  const obj = object.object();
  return obj.unknown(true);
};
