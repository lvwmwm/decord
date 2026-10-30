// Module ID: 20052
// Function ID: 20053
// Name: externalFingerprint
// Dependencies: [502, 6787, 572, 2]
// Exports: default

// Module 20052 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 572 */;
import _mod6787 from "module_6787" /* 6787 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod6787.parse;
    _mod6787;
    const obj = _mod6787;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
