// Module ID: 20270
// Function ID: 20271
// Name: externalFingerprint
// Dependencies: [502, 6913, 572, 2]
// Exports: default

// Module 20270 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 572 */;
import _mod6913 from "module_6913" /* 6913 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod6913.parse;
    _mod6913;
    const obj = _mod6913;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
