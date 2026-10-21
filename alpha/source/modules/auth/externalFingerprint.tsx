// Module ID: 19259
// Function ID: 19260
// Name: externalFingerprint
// Dependencies: [502, 6701, 584, 2]
// Exports: default

// Module 19259 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 584 */;
import _mod6701 from "module_6701" /* 6701 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod6701.parse;
    _mod6701;
    const obj = _mod6701;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
