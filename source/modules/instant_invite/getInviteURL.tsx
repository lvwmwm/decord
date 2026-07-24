// Module ID: 7000
// Function ID: 55988
// Name: getInviteURL
// Dependencies: [2]
// Exports: default

// Module 7000 (getInviteURL)
const result = require("set").fileFinishedImporting("modules/instant_invite/getInviteURL.tsx");

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
