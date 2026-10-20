// Module ID: 15972
// Function ID: 15973
// Name: shareGuardianConnectLink
// Dependencies: [7595, 8783, 1128, 2526, 2]
// Exports: shareGuardianConnectLink

// Module 15972 (shareGuardianConnectLink)
import intl2 from "intl" /* 1128 */;
import _modDef2526 from "module_2526" /* 2526 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7595 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8783 */;
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
  const obj = { message: intl.formatToPlainString(_modDef2526.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
};
