// Module ID: 17719
// Function ID: 17720
// Name: externalFingerprint
// Dependencies: [502, 5768, 573, 2]
// Exports: default

// Module 17719 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 573 */;
import keysSorter from "keysSorter" /* 5768 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const obj = keysSorter;
    const fingerprint = obj.parse(keysSorter.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj4 = { type: "FINGERPRINT", fingerprint };
      DispatcherDefault.dispatch(obj4);
    }
  }
};
