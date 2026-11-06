// Module ID: 20442
// Function ID: 20443
// Name: externalFingerprint
// Dependencies: [502, 6873, 572, 2]
// Exports: default

// Module 20442 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 572 */;
import _mod6873 from "module_6873" /* 6873 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod6873.parse;
    _mod6873;
    const obj = _mod6873;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
