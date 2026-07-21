// Module ID: 12734
// Function ID: 97679
// Name: findRemoteAuthFingerprint
// Dependencies: []
// Exports: findRemoteAuthFingerprint

// Module 12734 (findRemoteAuthFingerprint)
let closure_2 = /^\/ra\/([\w-]+)$/;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/remote_auth/QRLoginUtils.tsx");

export const findRemoteAuthFingerprint = function findRemoteAuthFingerprint(host, pathname) {
  if (null != host) {
    if (null != pathname) {
      if (obj.isDiscordHostname(host)) {
        const match = pathname.match(closure_2);
        let tmp5 = null;
        if (null != match) {
          tmp5 = match[1];
        }
        return tmp5;
      }
      const obj = importDefault(dependencyMap[0]);
    }
  }
  return null;
};
