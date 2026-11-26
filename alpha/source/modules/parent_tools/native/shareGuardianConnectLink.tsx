// Module ID: 16385
// Function ID: 16386
// Name: shareGuardianConnectLink
// Dependencies: [8213, 8690, 1112, 2847, 2]
// Exports: shareGuardianConnectLink

// Module 16385 (shareGuardianConnectLink)
import intl2 from "intl" /* 1112 */;
import _modDef2847 from "module_2847" /* 2847 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 8213 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8690 */;
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
  const obj = { message: intl.formatToPlainString(_modDef2847.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
}
