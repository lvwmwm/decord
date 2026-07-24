// Module ID: 8939
// Function ID: 70443
// Name: savePersistentCodesEnabled
// Dependencies: [5, 1194, 1348, 4146, 8938, 653, 686, 8936, 4029, 4470, 1212, 8940, 4944, 2]

// Module 8939 (savePersistentCodesEnabled)
import ME from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { SECURE_FRAMES_PUBLIC_KEY_VERSION as closure_7 } from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";
import { ChannelTypes } from "ME";

const require = arg1;
function savePersistentCodesEnabled() {
  return _savePersistentCodesEnabled(...arguments);
}
function _savePersistentCodesEnabled() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _updatePersistentCodesEnabled() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rtc/SecureFramesActionCreators.tsx");

export default {
  clearUploadedKeyVersions() {
    importDefault(686).dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
  },
  updatePersistentCodesEnabled(arg0) {
    return _updatePersistentCodesEnabled(...arguments);
  },
  addUploadedKeyVersion(keyVersion) {
    let obj = importDefault(686);
    obj = { type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD", keyVersion };
    obj.dispatch(obj);
  },
  createSecureFramesVerifiedKey(userId, key) {
    let obj = importDefault(686);
    obj = { type: "SECURE_FRAMES_VERIFIED_KEY_CREATE", userId, key };
    obj.dispatch(obj);
  },
  deleteSecureFramesVerifiedKey(closure_0, closure_1) {
    let obj = importDefault(686);
    obj = { type: "SECURE_FRAMES_VERIFIED_KEY_DELETE", userId: closure_0, serializedKey: closure_1 };
    obj.dispatch(obj);
  },
  deleteSecureFramesUserVerifiedKeys(closure_0) {
    let obj = importDefault(686);
    obj = { type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE", userId: closure_0 };
    obj.dispatch(obj);
  },
  createSecureFramesTransientKey(userId, key) {
    let obj = importDefault(686);
    obj = { type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE", userId, key };
    obj.dispatch(obj);
  },
  deleteSecureFramesTransientKey(userId) {
    let obj = importDefault(686);
    obj = { type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE", userId };
    obj.dispatch(obj);
  }
};
