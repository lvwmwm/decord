// Module ID: 14515
// Function ID: 109319
// Name: get webauthn
// Dependencies: []

// Module 14515 (get webauthn)
const obj = {};
Object.defineProperty(obj, "webauthn", {
  get: () => {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.gTH4Dp);
  },
  set: undefined
});
Object.defineProperty(obj, "totp", {
  get: () => {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.nXKmyf);
  },
  set: undefined
});
Object.defineProperty(obj, "sms", {
  get: () => {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.ZbVwZW);
  },
  set: undefined
});
Object.defineProperty(obj, "password", {
  get: () => {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.8F6hKS);
  },
  set: undefined
});
Object.defineProperty(obj, "backup", {
  get: () => {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.vhSRKf);
  },
  set: undefined
});
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/mfa/MFAConstants.tsx");

export const SELECT_NAMES = obj;
