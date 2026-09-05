// Module ID: 13848
// Function ID: 13849
// Name: findRemoteAuthFingerprint
// Dependencies: [1365, 2]
// Exports: findRemoteAuthFingerprint

// Module 13848 (findRemoteAuthFingerprint)
import set from "set" /* 2 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1365 */;

const re2 = /^\/ra\/([\w-]+)$/;
const result = set.fileFinishedImporting("modules/remote_auth/QRLoginUtils.tsx");

export const findRemoteAuthFingerprint = function findRemoteAuthFingerprint(host, pathname) {
  if (null != host) {
    if (null != pathname) {
      if (obj.isDiscordHostname(host)) {
        const match = pathname.match(closure_2);
        let tmp6 = null;
        if (null != match) {
          tmp6 = match[1];
        }
        return tmp6;
      }
      obj = isDiscordProxiedAssetUrlDefault;
    }
  }
  return null;
};
