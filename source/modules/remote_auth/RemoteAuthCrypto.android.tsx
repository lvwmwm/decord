// Module ID: 14822
// Function ID: 113030
// Name: AndroidRemoteAuthCrypto
// Dependencies: [5, 6, 7, 14823, 2]

// Module 14822 (AndroidRemoteAuthCrypto)
import asyncGeneratorStep from "asyncGeneratorStep";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let closure_5 = {};
let tmp2 = (() => {
  class AndroidRemoteAuthCrypto {
    constructor() {
      tmp = AndroidRemoteAuthCrypto(this, AndroidRemoteAuthCrypto);
      return;
    }
  }
  let obj = { key: "generateRsaKeyPair" };
  // CreateGeneratorClosureLongIndex (0x67)
  callback = callback(tmp);
  obj.value = function generateRsaKeyPair() {
    return callback2(...arguments);
  };
  const items = [obj, , , , , ];
  obj = {
    key: "serializePublicKey",
    value() {
      return callback(14823).getEncodedPublicKey();
    }
  };
  items[1] = obj;
  obj = {
    key: "publicKeyFingerprint",
    value() {
      return callback(14823).getPublicKeyFingerprint();
    }
  };
  items[2] = obj;
  const obj1 = { key: "decryptEncodedCiphertext" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_1 = callback("decryptEncodedCiphertext");
  obj1.value = function decryptEncodedCiphertext(current, encrypted_token) {
    return dependencyMap(...arguments);
  };
  items[3] = obj1;
  const obj2 = { key: "decryptNonce" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback("decryptNonce");
  obj2.value = function decryptNonce(arg0, encrypted_nonce) {
    return callback(...arguments);
  };
  items[4] = obj2;
  items[5] = {
    key: "release",
    value() {
      callback(14823).releaseKeyPair();
    }
  };
  return callback2(AndroidRemoteAuthCrypto, items);
})();
tmp2 = new tmp2();
const result = require("_defineProperties").fileFinishedImporting("modules/remote_auth/RemoteAuthCrypto.android.tsx");

export default tmp2;
