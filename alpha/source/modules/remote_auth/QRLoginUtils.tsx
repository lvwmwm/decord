// Module ID: 13394
// Function ID: 13395
// Name: QRLoginUtils
// Dependencies: [1366, 2]
// Exports: findRemoteAuthFingerprint

// Module 13394 (QRLoginUtils)
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
