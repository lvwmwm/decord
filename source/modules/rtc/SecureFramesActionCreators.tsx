// Module ID: 8892
// Function ID: 70174
// Name: savePersistentCodesEnabled
// Dependencies: [0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 8892 (savePersistentCodesEnabled)
import closure_3 from "result";
import closure_4 from "result";
import closure_6 from "result";
import { SECURE_FRAMES_PUBLIC_KEY_VERSION as closure_7 } from "result";
import { ChannelTypes } from "result";
import result from "result";

function savePersistentCodesEnabled() {
  return _savePersistentCodesEnabled(...arguments);
}
function _savePersistentCodesEnabled() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _savePersistentCodesEnabled = obj;
  return obj(...arguments);
}
function _updatePersistentCodesEnabled() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _updatePersistentCodesEnabled = obj;
  return obj(...arguments);
}
let closure_5 = importDefault(dependencyMap[2]);
result = result.fileFinishedImporting("modules/rtc/SecureFramesActionCreators.tsx");

export default {
  clearUploadedKeyVersions() {
    importDefault(dependencyMap[6]).dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
  },
  updatePersistentCodesEnabled(arg0) {
    return _updatePersistentCodesEnabled(...arguments);
  },
  addUploadedKeyVersion(keyVersion) {
    let obj = importDefault(dependencyMap[6]);
    obj = { type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD", keyVersion };
    obj.dispatch(obj);
  },
  createSecureFramesVerifiedKey(userId, key) {
    let obj = importDefault(dependencyMap[6]);
    obj = { type: "SECURE_FRAMES_VERIFIED_KEY_CREATE", userId, key };
    obj.dispatch(obj);
  },
  deleteSecureFramesVerifiedKey(userId, serializeKeyResult) {
    let obj = importDefault(dependencyMap[6]);
    obj = { type: "SECURE_FRAMES_VERIFIED_KEY_DELETE", userId, serializedKey: serializeKeyResult };
    obj.dispatch(obj);
  },
  deleteSecureFramesUserVerifiedKeys(userId) {
    let obj = importDefault(dependencyMap[6]);
    obj = { type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE", userId };
    obj.dispatch(obj);
  },
  createSecureFramesTransientKey(userId, key) {
    let obj = importDefault(dependencyMap[6]);
    obj = { type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE", userId, key };
    obj.dispatch(obj);
  },
  deleteSecureFramesTransientKey(userId) {
    let obj = importDefault(dependencyMap[6]);
    obj = { type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE", userId };
    obj.dispatch(obj);
  }
};
