// Module ID: 16852
// Function ID: 16853
// Name: externalFingerprint
// Dependencies: [1218, 5140, 709, 2]
// Exports: default

// Module 16852 (externalFingerprint)
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
const result = require("dispatcher").fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!authenticated.isAuthenticated()) {
    let obj = require(5140) /* keysSorter */;
    const fingerprint = obj.parse(require(5140) /* keysSorter */.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      obj = { type: "FINGERPRINT", fingerprint: null };
      obj[1] = fingerprint;
      importDefault(709).dispatch(obj);
      const obj3 = importDefault(709);
    }
    const obj2 = require(5140) /* keysSorter */;
  }
};
