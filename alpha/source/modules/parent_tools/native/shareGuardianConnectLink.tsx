// Module ID: 16727
// Function ID: 16728
// Name: shareGuardianConnectLink
// Dependencies: [7709, 8922, 1114, 2537, 2]
// Exports: shareGuardianConnectLink

// Module 16727 (shareGuardianConnectLink)
import intl2 from "intl" /* 1114 */;
import _modDef2537 from "module_2537" /* 2537 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7709 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8922 */;
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
  const obj = { message: intl.formatToPlainString(_modDef2537.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
}
