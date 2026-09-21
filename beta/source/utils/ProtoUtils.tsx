// Module ID: 1227
// Function ID: 1228
// Name: ProtoUtils
// Dependencies: [1191, 2]
// Exports: b64ToProto, protoToB64

// Module 1227 (ProtoUtils)
import _mod1191 from "module_1191" /* 1191 */;
import size from "module_2" /* 2 */;

const BINARY_READ_OPTIONS = {
  readerFactory(dependencyMap) {
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new _mod1191.BinaryReader(dependencyMap, textDecoder);
    return binaryReader;
  }
};
const result = size.fileFinishedImporting("utils/ProtoUtils.tsx");

export { BINARY_READ_OPTIONS };
export const b64ToProto = function b64ToProto(fromBinary, actionData) {
  let fromBinaryResult = null;
  if (null != actionData) {
    const obj = _mod1191;
    fromBinaryResult = fromBinary.fromBinary(obj.base64decode(actionData), obj);
  }
  return fromBinaryResult;
};
export const protoToB64 = function protoToB64(toBinary, favoriteGifs) {
  return _mod1191.base64encode(toBinary.toBinary(favoriteGifs));
};
