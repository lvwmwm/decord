// Module ID: 17113
// Function ID: 17114
// Name: externalFingerprint
// Dependencies: [1218, 4376, 709, 2]
// Exports: default

// Module 17113 (externalFingerprint)
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
const result = require("dispatcher").fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!authenticated.isAuthenticated()) {
    let obj = require(4376) /* keysSorter */;
    const fingerprint = obj.parse(require(4376) /* keysSorter */.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      obj = { type: "FINGERPRINT", fingerprint: null };
      obj[1] = fingerprint;
      importDefault(709).dispatch(obj);
      const obj3 = importDefault(709);
    }
    const obj2 = require(4376) /* keysSorter */;
  }
};
