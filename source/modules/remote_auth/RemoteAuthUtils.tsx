// Module ID: 14777
// Function ID: 112727
// Name: _decodeEncodedUserRecord
// Dependencies: [57, 5, 1857, 14775, 2]
// Exports: base64Decode, base64Encode, decodeEncodedUserRecord

// Module 14777 (_decodeEncodedUserRecord)
import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "asyncGeneratorStep";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _decodeEncodedUserRecord() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/remote_auth/RemoteAuthUtils.tsx");

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
export const base64Decode = function base64Decode(arr) {
  return Uint8Array.from(atob(arr), (str) => str.charCodeAt(0));
};
