// Module ID: 16093
// Function ID: 16094
// Name: shareGuardianConnectLink
// Dependencies: [8217, 9598, 1113, 2723, 2]
// Exports: shareGuardianConnectLink

// Module 16093 (shareGuardianConnectLink)
import intl2 from "intl" /* 1113 */;
import _modDef2723 from "module_2723" /* 2723 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 8217 */;
import showShareActionSheet2 from "showShareActionSheet" /* 9598 */;
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
  const obj = { message: intl.formatToPlainString(_modDef2723.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
}
