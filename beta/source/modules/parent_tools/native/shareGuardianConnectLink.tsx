// Module ID: 16192
// Function ID: 16193
// Name: shareGuardianConnectLink
// Dependencies: [8336, 9718, 1112, 2824, 2]
// Exports: shareGuardianConnectLink

// Module 16192 (shareGuardianConnectLink)
import intl2 from "intl" /* 1112 */;
import _modDef2824 from "module_2824" /* 2824 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 8336 */;
import showShareActionSheet2 from "showShareActionSheet" /* 9718 */;
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
  const obj = { message: intl.formatToPlainString(_modDef2824.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
}
