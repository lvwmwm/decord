// Module ID: 18423
// Function ID: 18424
// Name: externalFingerprint
// Dependencies: [502, 5989, 584, 2]
// Exports: default

// Module 18423 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 584 */;
import _mod5989 from "module_5989" /* 5989 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod5989.parse;
    _mod5989;
    const obj = _mod5989;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
