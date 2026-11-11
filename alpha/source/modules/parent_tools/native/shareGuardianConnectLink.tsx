// Module ID: 17290
// Function ID: 17291
// Name: shareGuardianConnectLink
// Dependencies: [8674, 10163, 1113, 2685, 2]
// Exports: shareGuardianConnectLink

// Module 17290 (shareGuardianConnectLink)
import intl2 from "intl" /* 1113 */;
import _modDef2685 from "module_2685" /* 2685 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 8674 */;
import showShareActionSheet2 from "showShareActionSheet" /* 10163 */;
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
  const obj = { message: intl.formatToPlainString(_modDef2685.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
}
