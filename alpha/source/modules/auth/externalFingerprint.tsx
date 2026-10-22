// Module ID: 19347
// Function ID: 19348
// Name: externalFingerprint
// Dependencies: [502, 6707, 584, 2]
// Exports: default

// Module 19347 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 584 */;
import _mod6707 from "module_6707" /* 6707 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod6707.parse;
    _mod6707;
    const obj = _mod6707;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
