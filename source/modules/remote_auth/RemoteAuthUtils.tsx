// Module ID: 14654
// Function ID: 110520
// Name: _decodeEncodedUserRecord
// Dependencies: []
// Exports: base64Decode, base64Encode, decodeEncodedUserRecord

// Module 14654 (_decodeEncodedUserRecord)
function _decodeEncodedUserRecord() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _decodeEncodedUserRecord = obj;
  return obj(...arguments);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/remote_auth/RemoteAuthUtils.tsx");

export const decodeEncodedUserRecord = function decodeEncodedUserRecord(arg0, encrypted_user_payload) {
  return _decodeEncodedUserRecord(...arguments);
};
export const base64Encode = function base64Encode(arg0) {
  const uint8Array = new Uint8Array(arg0);
  const items = [...uint8Array];
  const str = btoa(String.fromCharCode.apply(items));
  const str2 = btoa(String.fromCharCode.apply(items)).replace(/\//g, "_");
  return btoa(String.fromCharCode.apply(items)).replace(/\//g, "_").replace(/\+/g, "-").replace(/={1,2}$/, "");
};
export const base64Decode = function base64Decode(placeholder) {
  return Uint8Array.from(atob(placeholder), (str) => str.charCodeAt(0));
};
