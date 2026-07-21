// Module ID: 16453
// Function ID: 127137
// Name: externalFingerprint
// Dependencies: []
// Exports: default

// Module 16453 (externalFingerprint)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!authenticated.isAuthenticated()) {
    let obj = arg1(dependencyMap[1]);
    const fingerprint = obj.parse(arg1(dependencyMap[1]).extract(arg0)).fingerprint;
    if (null != fingerprint) {
      obj = { type: "FINGERPRINT", fingerprint };
      importDefault(dependencyMap[2]).dispatch(obj);
      const obj3 = importDefault(dependencyMap[2]);
    }
    const obj2 = arg1(dependencyMap[1]);
  }
};
