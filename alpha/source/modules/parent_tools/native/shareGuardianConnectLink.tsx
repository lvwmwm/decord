// Module ID: 16141
// Function ID: 16142
// Name: shareGuardianConnectLink
// Dependencies: [7644, 8849, 1128, 2536, 2]
// Exports: shareGuardianConnectLink

// Module 16141 (shareGuardianConnectLink)
import intl2 from "intl" /* 1128 */;
import _modDef2536 from "module_2536" /* 2536 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7644 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8849 */;
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
  const obj = { message: intl.formatToPlainString(_modDef2536.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
};
