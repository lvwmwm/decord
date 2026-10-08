// Module ID: 1246
// Function ID: 1247
// Name: ProtoUtils
// Dependencies: [1210, 2]
// Exports: b64ToProto, protoToB64

// Module 1246 (ProtoUtils)
import _mod1210 from "module_1210" /* 1210 */;
import size from "module_2" /* 2 */;

const BINARY_READ_OPTIONS = {
  readerFactory(buf) {
    const BinaryReader = _mod1210.BinaryReader;
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new BinaryReader(buf, textDecoder);
    return binaryReader;
  }
};
const result = size.fileFinishedImporting("utils/ProtoUtils.tsx");

export { BINARY_READ_OPTIONS };
export const b64ToProto = function b64ToProto(fromBinary, actionData) {
  let fromBinaryResult = null;
  if (null != actionData) {
    fromBinary = fromBinary.fromBinary;
    const obj = _mod1210;
    fromBinaryResult = fromBinary(obj.base64decode(actionData), obj);
  }
  return fromBinaryResult;
};
export const protoToB64 = function protoToB64(toBinary, favoriteGifs) {
  const obj = _mod1210;
  return obj.base64encode(toBinary.toBinary(favoriteGifs));
};
