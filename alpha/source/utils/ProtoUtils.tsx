// Module ID: 1234
// Function ID: 1235
// Name: ProtoUtils
// Dependencies: [1197, 2]
// Exports: b64ToProto, protoToB64

// Module 1234 (ProtoUtils)
import _mod1197 from "module_1197" /* 1197 */;
import size from "module_2" /* 2 */;

const BINARY_READ_OPTIONS = {
  readerFactory(buf) {
    const BinaryReader = _mod1197.BinaryReader;
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new BinaryReader(buf, textDecoder);
    return binaryReader;
  }
};
const result = size.fileFinishedImporting("utils/ProtoUtils.tsx");

export { BINARY_READ_OPTIONS };
export function b64ToProto(fromBinary, actionData) {
  let fromBinaryResult = null;
  if (null != actionData) {
    fromBinary = fromBinary.fromBinary;
    const obj = _mod1197;
    fromBinaryResult = fromBinary(obj.base64decode(actionData), obj);
  }
  return fromBinaryResult;
}
export function protoToB64(toBinary, favoriteGifs) {
  const obj = _mod1197;
  return obj.base64encode(toBinary.toBinary(favoriteGifs));
}
