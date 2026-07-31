// Module ID: 16755
// Function ID: 16756
// Name: externalFingerprint
// Dependencies: [1218, 5049, 709, 2]
// Exports: default

// Module 16755 (externalFingerprint)
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
const result = require("dispatcher").fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!authenticated.isAuthenticated()) {
    let obj = require(5049) /* keysSorter */;
    const fingerprint = obj.parse(require(5049) /* keysSorter */.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      obj = { type: "FINGERPRINT", fingerprint: null };
      obj[1] = fingerprint;
      importDefault(709).dispatch(obj);
      const obj3 = importDefault(709);
    }
    const obj2 = require(5049) /* keysSorter */;
  }
};
