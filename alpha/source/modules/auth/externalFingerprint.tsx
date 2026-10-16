// Module ID: 19040
// Function ID: 19041
// Name: externalFingerprint
// Dependencies: [502, 6202, 584, 2]
// Exports: default

// Module 19040 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 584 */;
import _mod6202 from "module_6202" /* 6202 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod6202.parse;
    _mod6202;
    const obj = _mod6202;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
