// Module ID: 14215
// Function ID: 14216
// Name: QRLoginUtils
// Dependencies: [1366, 2]
// Exports: findRemoteAuthFingerprint

// Module 14215 (QRLoginUtils)
import URLUtilsDefault from "URLUtils" /* 1366 */;
import size from "module_2" /* 2 */;

const re2 = /^\/ra\/([\w-]+)$/;
const result = size.fileFinishedImporting("modules/remote_auth/QRLoginUtils.tsx");

export const findRemoteAuthFingerprint = function findRemoteAuthFingerprint(host, pathname) {
  if (null != host) {
    if (null != pathname) {
      if (obj.isDiscordHostname(host)) {
        const match = pathname.match(re2);
        let tmp6 = null;
        if (null != match) {
          tmp6 = match[1];
        }
        return tmp6;
      }
      obj = URLUtilsDefault;
    }
  }
  return null;
};
