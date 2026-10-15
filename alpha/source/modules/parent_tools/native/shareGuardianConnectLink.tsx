// Module ID: 15811
// Function ID: 15812
// Name: shareGuardianConnectLink
// Dependencies: [7476, 8700, 1126, 2568, 2]
// Exports: shareGuardianConnectLink

// Module 15811 (shareGuardianConnectLink)
import intl2 from "intl" /* 1126 */;
import _modDef2568 from "module_2568" /* 2568 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7476 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8700 */;
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
  const obj = { message: intl.formatToPlainString(_modDef2568.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
};
