// Module ID: 16674
// Function ID: 16675
// Name: shareGuardianConnectLink
// Dependencies: [7704, 8888, 1125, 2536, 2]
// Exports: shareGuardianConnectLink

// Module 16674 (shareGuardianConnectLink)
import intl2 from "intl" /* 1125 */;
import _modDef2536 from "module_2536" /* 2536 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7704 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8888 */;
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
  const obj = { message: intl.formatToPlainString(_modDef2536.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
}
