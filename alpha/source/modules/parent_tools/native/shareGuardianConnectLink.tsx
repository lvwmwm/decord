// Module ID: 17053
// Function ID: 17054
// Name: shareGuardianConnectLink
// Dependencies: [7861, 9082, 1113, 2667, 2]
// Exports: shareGuardianConnectLink

// Module 17053 (shareGuardianConnectLink)
import intl2 from "intl" /* 1113 */;
import _modDef2667 from "module_2667" /* 2667 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7861 */;
import showShareActionSheet2 from "showShareActionSheet" /* 9082 */;
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
  const obj = { message: intl.formatToPlainString(_modDef2667.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
}
