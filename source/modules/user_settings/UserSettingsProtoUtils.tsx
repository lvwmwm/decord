// Module ID: 1332
// Function ID: 15643
// Name: getProtoFieldClass
// Dependencies: [1318, 2]
// Exports: createModifiedProto, getProtoFieldClass

// Module 1332 (getProtoFieldClass)
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingsProtoUtils.tsx");

export const getProtoFieldClass = function getProtoFieldClass(PreloadedUserSettings, outer1_1) {
  let closure_0 = outer1_1;
  const fields = PreloadedUserSettings.fields;
  const found = fields.find((localName) => localName.localName === closure_0);
  if (null == found) {
    const _Error = Error;
    const _String = String;
    const _HermesInternal = HermesInternal;
    throw Error("Unknown proto field name " + String(outer1_1));
  } else {
    return found.T();
  }
};
export const createModifiedProto = function createModifiedProto(favoriteGifs, outer1_2, protoFieldClass, PreloadedUserSettings, outer1_1) {
  if (null != favoriteGifs) {
    let fromBinaryResult = protoFieldClass.fromBinary(protoFieldClass.toBinary(favoriteGifs), require(1318) /* _createForOfIteratorHelperLoose */.BINARY_READ_OPTIONS);
    const toBinaryResult = protoFieldClass.toBinary(favoriteGifs);
  } else {
    fromBinaryResult = protoFieldClass.create();
  }
  if (false === outer1_2(fromBinaryResult)) {
    return null;
  } else {
    const obj = PreloadedUserSettings.create();
    obj[outer1_1] = fromBinaryResult;
    return obj;
  }
};
