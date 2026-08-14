// Module ID: 17067
// Function ID: 17068
// Name: externalFingerprint
// Dependencies: [1218, 5234, 709, 2]
// Exports: default

// Module 17067 (externalFingerprint)
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
const result = require("dispatcher").fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!authenticated.isAuthenticated()) {
    let obj = require(5234) /* keysSorter */;
    const fingerprint = obj.parse(require(5234) /* keysSorter */.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      obj = { type: "FINGERPRINT", fingerprint: null };
      obj[1] = fingerprint;
      importDefault(709).dispatch(obj);
      const obj3 = importDefault(709);
    }
    const obj2 = require(5234) /* keysSorter */;
  }
};
