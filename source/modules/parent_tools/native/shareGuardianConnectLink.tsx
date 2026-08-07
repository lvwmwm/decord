// Module ID: 14053
// Function ID: 14054
// Name: shareGuardianConnectLink
// Dependencies: [6937, 8863, 1236, 2284, 2]
// Exports: shareGuardianConnectLink

// Module 14053 (shareGuardianConnectLink)
import { FAMILY_CENTER_REQUEST_QR_CODE_URL as closure_3 } from "items";

const result = require("getSystemLocale").fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(globalName, closure_2) {
  let username = globalName.globalName;
  if (username == null) {
    username = globalName.username;
  }
  let obj = require(8863) /* showShareActionSheet */;
  obj = { message: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.formatToPlainString(importDefault(2284).lVD5Nd, { username, url: callback(globalName.id, closure_2) });
  obj.showShareActionSheet(obj, "Family Center Connect Guardian");
};
