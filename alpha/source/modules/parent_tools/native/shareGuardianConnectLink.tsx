// Module ID: 15854
// Function ID: 15855
// Name: shareGuardianConnectLink
// Dependencies: [7480, 8709, 1128, 2571, 2]
// Exports: shareGuardianConnectLink

// Module 15854 (shareGuardianConnectLink)
import intl2 from "intl" /* 1128 */;
import _modDef2571 from "module_2571" /* 2571 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7480 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8709 */;
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
  const obj = { message: intl.formatToPlainString(_modDef2571.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
};
