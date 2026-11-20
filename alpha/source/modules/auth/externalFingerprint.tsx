// Module ID: 20048
// Function ID: 20049
// Name: externalFingerprint
// Dependencies: [502, 6451, 572, 2]
// Exports: default

// Module 20048 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 572 */;
import _mod6451 from "module_6451" /* 6451 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod6451.parse;
    _mod6451;
    const obj = _mod6451;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
