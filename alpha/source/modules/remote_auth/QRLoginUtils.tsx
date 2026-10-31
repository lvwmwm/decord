// Module ID: 15668
// Function ID: 15669
// Name: QRLoginUtils
// Dependencies: [1377, 2]
// Exports: findRemoteAuthFingerprint

// Module 15668 (QRLoginUtils)
import URLUtilsDefault from "URLUtils" /* 1377 */;
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
