// Module ID: 11312
// Function ID: 11313
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 11312 (createRpcJoiSchemaObject)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  const obj = object.object();
  return obj.unknown(true);
};
