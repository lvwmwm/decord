// Module ID: 19182
// Function ID: 19183
// Name: externalFingerprint
// Dependencies: [502, 6673, 584, 2]
// Exports: default

// Module 19182 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 584 */;
import _mod6673 from "module_6673" /* 6673 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod6673.parse;
    _mod6673;
    const obj = _mod6673;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
