// Module ID: 4840
// Function ID: 4841
// Name: UserSettingsProtoUtils
// Dependencies: [1235, 2]
// Exports: createModifiedProto, getProtoFieldClass

// Module 4840 (UserSettingsProtoUtils)
import ProtoUtils from "ProtoUtils" /* 1235 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/UserSettingsProtoUtils.tsx");

export function getProtoFieldClass(PreloadedUserSettings, field) {
  let closure_0 = field;
  const fields = PreloadedUserSettings.fields;
  const found = fields.find((localName) => localName.localName === field);
  if (null == found) {
    const _Error = Error;
    const _String = String;
    const _HermesInternal = HermesInternal;
    throw Error("Unknown proto field name " + String(field));
  } else {
    return found.T();
  }
}
export function createModifiedProto(favoriteGifs, fn, protoFieldClass, PreloadedUserSettings, arg4) {
  let fromBinaryResult;
  if (null != favoriteGifs) {
    const fromBinary = protoFieldClass.fromBinary;
    const toBinaryResult = protoFieldClass.toBinary(favoriteGifs);
    fromBinaryResult = fromBinary(toBinaryResult, ProtoUtils.BINARY_READ_OPTIONS);
  } else {
    fromBinaryResult = protoFieldClass.create();
  }
  if (false === fn(fromBinaryResult)) {
    return null;
  } else {
    const obj = PreloadedUserSettings.create();
    obj[arg4] = fromBinaryResult;
    return obj;
  }
}
