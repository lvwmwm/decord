// Module ID: 1332
// Function ID: 15636
// Name: getProtoFieldClass
// Dependencies: [57, 15]
// Exports: createModifiedProto, getProtoFieldClass

// Module 1332 (getProtoFieldClass)
const result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_settings/UserSettingsProtoUtils.tsx");

export const getProtoFieldClass = function getProtoFieldClass(PreloadedUserSettings, closure_1) {
  const require = closure_1;
  const fields = PreloadedUserSettings.fields;
  const found = fields.find((localName) => localName.localName === arg1);
  if (null == found) {
    const _Error = Error;
    const _String = String;
    const _HermesInternal = HermesInternal;
    throw Error("Unknown proto field name " + String(closure_1));
  } else {
    return found.T();
  }
};
export const createModifiedProto = function createModifiedProto(favoriteGifs, closure_2, protoFieldClass, PreloadedUserSettings, closure_1) {
  if (null != favoriteGifs) {
    let fromBinaryResult = protoFieldClass.fromBinary(protoFieldClass.toBinary(favoriteGifs), require(dependencyMap[0]).BINARY_READ_OPTIONS);
    const toBinaryResult = protoFieldClass.toBinary(favoriteGifs);
  } else {
    fromBinaryResult = protoFieldClass.create();
  }
  if (false === closure_2(fromBinaryResult)) {
    return null;
  } else {
    const obj = PreloadedUserSettings.create();
    obj[closure_1] = fromBinaryResult;
    return obj;
  }
};
