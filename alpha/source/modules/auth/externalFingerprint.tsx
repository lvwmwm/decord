// Module ID: 19503
// Function ID: 19504
// Name: externalFingerprint
// Dependencies: [502, 6723, 584, 2]
// Exports: default

// Module 19503 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 584 */;
import _mod6723 from "module_6723" /* 6723 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod6723.parse;
    _mod6723;
    const obj = _mod6723;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
