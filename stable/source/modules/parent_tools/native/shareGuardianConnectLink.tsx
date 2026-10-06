// Module ID: 14402
// Function ID: 14403
// Name: shareGuardianConnectLink
// Dependencies: [6962, 7813, 1127, 2490, 2]
// Exports: shareGuardianConnectLink

// Module 14402 (shareGuardianConnectLink)
import intl2 from "intl" /* 1127 */;
import _modDef2490 from "module_2490" /* 2490 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6962 */;
import showShareActionSheet2 from "showShareActionSheet" /* 7813 */;
import size from "module_2" /* 2 */;

let closure_3 = FamilyCenterConstants.FAMILY_CENTER_REQUEST_QR_CODE_URL;
const result = size.fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(stateFromStores, linkCode) {
  let intl;
  let username = stateFromStores.globalName;
  const tmp = closure_3(stateFromStores.id, linkCode);
  if (username == null) {
    username = stateFromStores.username;
  }
  const obj = { message: intl.formatToPlainString(_modDef2490.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
};
