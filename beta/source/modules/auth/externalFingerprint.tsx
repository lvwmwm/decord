// Module ID: 17723
// Function ID: 17724
// Name: externalFingerprint
// Dependencies: [502, 5768, 573, 2]
// Exports: default

// Module 17723 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 573 */;
import _mod5768 from "module_5768" /* 5768 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod5768.parse;
    _mod5768;
    const obj = _mod5768;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
