// Module ID: 13651
// Function ID: 103429
// Name: shareGuardianConnectLink
// Dependencies: []
// Exports: shareGuardianConnectLink

// Module 13651 (shareGuardianConnectLink)
let closure_3 = require(dependencyMap[0]).FAMILY_CENTER_REQUEST_QR_CODE_URL;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(stateFromStores, linkCode) {
  let username = stateFromStores.globalName;
  if (null == username) {
    username = stateFromStores.username;
  }
  let obj = require(dependencyMap[1]);
  obj = {};
  const intl = require(dependencyMap[2]).intl;
  obj = { username, url: callback(stateFromStores.id, linkCode) };
  obj.message = intl.formatToPlainString(importDefault(dependencyMap[3]).lVD5Nd, obj);
  obj.showShareActionSheet(obj, "Family Center Connect Guardian");
};
