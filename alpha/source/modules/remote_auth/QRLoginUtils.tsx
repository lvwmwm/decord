// Module ID: 15587
// Function ID: 15588
// Name: QRLoginUtils
// Dependencies: [1383, 2]
// Exports: findRemoteAuthFingerprint

// Module 15587 (QRLoginUtils)
import URLUtilsDefault from "URLUtils" /* 1383 */;
import size from "module_2" /* 2 */;

const re2 = /^\/ra\/([\w-]+)$/;
const result = size.fileFinishedImporting("modules/remote_auth/QRLoginUtils.tsx");

export function findRemoteAuthFingerprint(host, pathname) {
  if (null != host) {
    if (null != pathname) {
      const obj = URLUtilsDefault;
      if (obj.isDiscordHostname(host)) {
        const match = pathname.match(re2);
        let tmp6 = null;
        if (null != match) {
          tmp6 = match[1];
        }
        return tmp6;
      }
    }
  }
  return null;
}
