// Module ID: 12007
// Function ID: 12008
// Name: createRpcJoiSchemaObject
// Dependencies: [2]
// Exports: default

// Module 12007 (createRpcJoiSchemaObject)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/createRpcJoiSchemaObject.tsx");

export default function createRpcJoiSchemaObject(object) {
  const obj = object.object();
  return obj.unknown(true);
};
