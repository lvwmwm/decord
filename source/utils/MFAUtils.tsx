// Module ID: 9203
// Function ID: 72073
// Name: encodeTotpSecret
// Dependencies: [27, 1553, 9204, 1184, 2]
// Exports: captureWebAuthnException, encodeTotpSecretAsUrl, generateTotpSecret

// Module 9203 (encodeTotpSecret)
function encodeTotpSecret(totpSecret) {
  return totpSecret.replace(/[\s._-]+/g, "").toUpperCase();
}
let _crypto;
if (null != window) {
  _crypto = window.crypto;
}
if (null == _crypto) {
  let msCrypto;
  if (null != window) {
    msCrypto = window.msCrypto;
  }
  _crypto = msCrypto;
}
let tmp5 = null != _crypto;
if (tmp5) {
  tmp5 = "getRandomValues" in _crypto;
}
if (tmp5) {
  tmp5 = tmp4;
}
let tmp6 = null != require("get ActivityIndicator").NativeModules.DCDSecurityKeyManager;
if (tmp6) {
  const _module = require("isMetaQuest");
  tmp6 = !_module.isMetaQuest();
}
const result = require("encode").fileFinishedImporting("utils/MFAUtils.tsx");

export const hasCrypto = tmp5;
export const hasWebAuthn = tmp6;
export const generateTotpSecret = function generateTotpSecret() {
  const uint8Array = new Uint8Array(20);
  const randomValues = _crypto.getRandomValues(uint8Array);
  const obj = importDefault(9204);
  const str = importDefault(9204).encode(randomValues);
  const str2 = importDefault(9204).encode(randomValues).toString("utf8");
  const str3 = importDefault(9204).encode(randomValues).toString("utf8").replace(/=/g, "");
  const str4 = importDefault(9204).encode(randomValues).toString("utf8").replace(/=/g, "").toLowerCase();
  return importDefault(9204).encode(randomValues).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim();
};
export { encodeTotpSecret };
export const encodeTotpSecretAsUrl = function encodeTotpSecretAsUrl(arg0, totpSecret) {
  let str = arg2;
  if (arg2 === undefined) {
    str = "Discord";
  }
  const encodeURIResult = encodeURI(str);
  const encodeURIResult1 = encodeURI(arg0);
  return "otpauth://totp/" + encodeURIResult + ":" + encodeURIResult1 + "?secret=" + encodeTotpSecret(totpSecret) + "&issuer=" + encodeURIComponent(str);
};
export const captureWebAuthnException = function captureWebAuthnException(message, tags) {
  let obj = importDefault(1184);
  obj = {};
  const merged = Object.assign(tags);
  obj = {};
  tags = undefined;
  if (null != tags) {
    tags = tags.tags;
  }
  const merged1 = Object.assign(tags);
  obj["app_context"] = "webauthn";
  obj["tags"] = obj;
  obj.captureException(message, obj);
};
