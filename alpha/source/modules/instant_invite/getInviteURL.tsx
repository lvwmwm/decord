// Module ID: 8004
// Function ID: 8005
// Name: getInviteURL
// Dependencies: [2]
// Exports: default

// Module 8004 (getInviteURL)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/instant_invite/getInviteURL.tsx");

export default function getInviteURL() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "";
  }
  let flag = arg1;
  if (arg1 === undefined) {
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
