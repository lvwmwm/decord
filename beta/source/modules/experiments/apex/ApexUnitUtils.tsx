// Module ID: 1253
// Function ID: 1254
// Name: ApexUnitUtils
// Dependencies: [502, 1254, 1255, 2]
// Exports: getUnitId

// Module 1253 (ApexUnitUtils)
import FingerprintUtils from "FingerprintUtils" /* 1254 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/experiments/apex/ApexUnitUtils.tsx");

export function getUnitId(installation, guildId) {
  if ("guild" === installation) {
    return guildId.guildId;
  } else if ("user" === installation) {
    return AuthenticationStore.getId();
  } else if ("installation" === installation) {
    const obj2 = FingerprintUtils;
    let str2 = obj2.maybeExtractId(AuthenticationStore.getInstallationForTracking());
    if (str2 == null) {
      str2 = "";
    }
    return str2;
  } else {
    const obj = GlobalUtils;
    obj.assertNever(installation);
  }
}
