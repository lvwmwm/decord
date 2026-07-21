// Module ID: 6996
// Function ID: 55934
// Name: getInviteURL
// Dependencies: []
// Exports: default

// Module 6996 (getInviteURL)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/instant_invite/getInviteURL.tsx");

export default function getInviteURL() {
  let str = arg0;
  let flag = arg1;
  if (arg0 === undefined) {
    str = "";
  }
  if (flag === undefined) {
    flag = true;
  }
  let str2 = "";
  const combined = "/" + str;
  if (flag) {
    const _location = location;
    const _HermesInternal = HermesInternal;
    str2 = "" + location.protocol + "//";
  }
  return "" + str2 + window.GLOBAL_ENV.INVITE_HOST + combined;
};
