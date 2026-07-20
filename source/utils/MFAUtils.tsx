// Module ID: 9191
// Function ID: 71996
// Name: encodeTotpSecret
// Dependencies: []
// Exports: captureWebAuthnException, encodeTotpSecretAsUrl, generateTotpSecret

// Module 9191 (encodeTotpSecret)
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
let tmp6 = null != require(dependencyMap[0]).NativeModules.DCDSecurityKeyManager;
if (tmp6) {
  const _module = require(dependencyMap[1]);
  tmp6 = !_module.isMetaQuest();
}
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("utils/MFAUtils.tsx");

export const hasCrypto = tmp5;
export const hasWebAuthn = tmp6;
export const generateTotpSecret = function generateTotpSecret() {
  const uint8Array = new Uint8Array(20);
  const randomValues = _crypto.getRandomValues(uint8Array);
  const obj = importDefault(dependencyMap[2]);
  const str = importDefault(dependencyMap[2]).encode(randomValues);
  const str2 = importDefault(dependencyMap[2]).encode(randomValues).toString("utf8");
  const str3 = importDefault(dependencyMap[2]).encode(randomValues).toString("utf8").replace(/=/g, "");
  const str4 = importDefault(dependencyMap[2]).encode(randomValues).toString("utf8").replace(/=/g, "").toLowerCase();
  return importDefault(dependencyMap[2]).encode(randomValues).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim();
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
  let obj = importDefault(dependencyMap[3]);
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
