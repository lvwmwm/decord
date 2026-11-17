// Module ID: 17445
// Function ID: 17446
// Name: shareGuardianConnectLink
// Dependencies: [8752, 10338, 1113, 2703, 2]
// Exports: shareGuardianConnectLink

// Module 17445 (shareGuardianConnectLink)
import intl2 from "intl" /* 1113 */;
import _modDef2703 from "module_2703" /* 2703 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 8752 */;
import showShareActionSheet2 from "showShareActionSheet" /* 10338 */;
import size from "module_2" /* 2 */;

let closure_3 = FamilyCenterConstants.FAMILY_CENTER_REQUEST_QR_CODE_URL;
const result = size.fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export function shareGuardianConnectLink(stateFromStores, linkCode) {
  let intl;
  let username = stateFromStores.globalName;
  const tmp = closure_3(stateFromStores.id, linkCode);
  if (username == null) {
    username = stateFromStores.username;
  }
  const obj = { message: intl.formatToPlainString(_modDef2703.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
}
