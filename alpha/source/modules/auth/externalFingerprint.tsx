// Module ID: 20322
// Function ID: 20323
// Name: externalFingerprint
// Dependencies: [502, 5751, 572, 2]
// Exports: default

// Module 20322 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 572 */;
import _mod5751 from "module_5751" /* 5751 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod5751.parse;
    _mod5751;
    const obj = _mod5751;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
