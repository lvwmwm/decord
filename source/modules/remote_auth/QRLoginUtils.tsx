// Module ID: 12855
// Function ID: 99868
// Name: findRemoteAuthFingerprint
// Dependencies: [1443, 2]
// Exports: findRemoteAuthFingerprint

// Module 12855 (findRemoteAuthFingerprint)
const re2 = /^\/ra\/([\w-]+)$/;
const result = require("set").fileFinishedImporting("modules/remote_auth/QRLoginUtils.tsx");

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
      obj = importDefault(1443);
    }
  }
  return null;
};
