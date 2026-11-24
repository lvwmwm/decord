// Module ID: 10077
// Function ID: 10078
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 10077 (createRpcJoiSchemaObject)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  const obj = object.object();
  return obj.unknown(true);
};
