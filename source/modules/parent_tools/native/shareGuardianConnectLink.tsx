// Module ID: 13832
// Function ID: 105987
// Name: shareGuardianConnectLink
// Dependencies: [6770, 8376, 1212, 2198, 2]
// Exports: shareGuardianConnectLink

// Module 13832 (shareGuardianConnectLink)
import { FAMILY_CENTER_REQUEST_QR_CODE_URL as closure_3 } from "items";

const result = require("getSystemLocale").fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(stateFromStores, linkCode) {
  let username = stateFromStores.globalName;
  if (null == username) {
    username = stateFromStores.username;
  }
  let obj = require(8376) /* showShareActionSheet */;
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username, url: callback(stateFromStores.id, linkCode) };
  obj.message = intl.formatToPlainString(importDefault(2198).lVD5Nd, obj);
  obj.showShareActionSheet(obj, "Family Center Connect Guardian");
};
