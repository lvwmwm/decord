// Module ID: 14642
// Function ID: 110448
// Name: AndroidRemoteAuthCrypto
// Dependencies: []

// Module 14642 (AndroidRemoteAuthCrypto)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = {};
let tmp2 = () => {
  class AndroidRemoteAuthCrypto {
    constructor() {
      tmp = AndroidRemoteAuthCrypto(this, AndroidRemoteAuthCrypto);
      return;
    }
  }
  let closure_3 = AndroidRemoteAuthCrypto;
  let obj = { key: "generateRsaKeyPair" };
  // CreateGeneratorClosureLongIndex (0x67)
  const callback = callback(tmp);
  obj.value = function generateRsaKeyPair() {
    return callback3(...arguments);
  };
  const items = [obj, , , , , ];
  obj = {
    key: "serializePublicKey",
    value() {
      return callback(closure_1[3]).getEncodedPublicKey();
    }
  };
  items[1] = obj;
  obj = {
    key: "publicKeyFingerprint",
    value() {
      return callback(closure_1[3]).getPublicKeyFingerprint();
    }
  };
  items[2] = obj;
  const obj1 = { key: "decryptEncodedCiphertext" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_1 = callback("decryptEncodedCiphertext");
  obj1.value = function decryptEncodedCiphertext(current, encrypted_token) {
    return callback2(...arguments);
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
      callback(closure_1[3]).releaseKeyPair();
    }
  };
  return callback2(AndroidRemoteAuthCrypto, items);
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/remote_auth/RemoteAuthCrypto.android.tsx");

export default tmp2;
