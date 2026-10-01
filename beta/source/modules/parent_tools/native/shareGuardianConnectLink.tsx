// Module ID: 14414
// Function ID: 14415
// Name: shareGuardianConnectLink
// Dependencies: [6958, 7809, 1115, 2487, 2]
// Exports: shareGuardianConnectLink

// Module 14414 (shareGuardianConnectLink)
import intl2 from "intl" /* 1115 */;
import _modDef2487 from "module_2487" /* 2487 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6958 */;
import showShareActionSheet2 from "showShareActionSheet" /* 7809 */;
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
  const obj = { message: intl.formatToPlainString(_modDef2487.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
};
