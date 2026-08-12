// Module ID: 14190
// Function ID: 14191
// Name: shareGuardianConnectLink
// Dependencies: [7039, 8968, 1236, 2303, 2]
// Exports: shareGuardianConnectLink

// Module 14190 (shareGuardianConnectLink)
import { FAMILY_CENTER_REQUEST_QR_CODE_URL as closure_3 } from "items";

const result = require("getSystemLocale").fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(globalName, closure_2) {
  let username = globalName.globalName;
  if (username == null) {
    username = globalName.username;
  }
  let obj = require(8968) /* showShareActionSheet */;
  obj = { message: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.formatToPlainString(importDefault(2303).lVD5Nd, { username, url: callback(globalName.id, closure_2) });
  obj.showShareActionSheet(obj, "Family Center Connect Guardian");
};
