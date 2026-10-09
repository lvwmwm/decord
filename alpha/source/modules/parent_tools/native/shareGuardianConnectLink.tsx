// Module ID: 15075
// Function ID: 15076
// Name: shareGuardianConnectLink
// Dependencies: [7253, 8465, 1126, 2565, 2]
// Exports: shareGuardianConnectLink

// Module 15075 (shareGuardianConnectLink)
import intl2 from "intl" /* 1126 */;
import _modDef2565 from "module_2565" /* 2565 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7253 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8465 */;
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
  const obj = { message: intl.formatToPlainString(_modDef2565.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
};
