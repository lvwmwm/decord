// Module ID: 17983
// Function ID: 17984
// Name: externalFingerprint
// Dependencies: [502, 5954, 573, 2]
// Exports: default

// Module 17983 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 573 */;
import keysSorter from "keysSorter" /* 5954 */;
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
