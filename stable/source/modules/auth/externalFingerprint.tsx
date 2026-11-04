// Module ID: 19493
// Function ID: 19494
// Name: externalFingerprint
// Dependencies: [502, 6754, 584, 2]
// Exports: default

// Module 19493 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 584 */;
import _mod6754 from "module_6754" /* 6754 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod6754.parse;
    _mod6754;
    const obj = _mod6754;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
