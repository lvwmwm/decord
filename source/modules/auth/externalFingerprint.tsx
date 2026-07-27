// Module ID: 16656
// Function ID: 129953
// Name: externalFingerprint
// Dependencies: [1194, 4989, 686, 2]
// Exports: default

// Module 16656 (externalFingerprint)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("dispatcher").fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!authenticated.isAuthenticated()) {
    let obj = require(4989) /* encode */;
    const fingerprint = obj.parse(require(4989) /* encode */.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      obj = { type: "FINGERPRINT", fingerprint };
      importDefault(686).dispatch(obj);
      const obj3 = importDefault(686);
    }
    const obj2 = require(4989) /* encode */;
  }
};
