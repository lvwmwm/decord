// Module ID: 1252
// Function ID: 1253
// Name: ApexUnitUtils
// Dependencies: [502, 1253, 1254, 2]
// Exports: getUnitId

// Module 1252 (ApexUnitUtils)
import FingerprintUtils from "FingerprintUtils" /* 1253 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
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
