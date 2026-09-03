// Module ID: 17338
// Function ID: 17339
// Name: navigateToSystemDM
// Dependencies: [1386, 17337, 5364, 2]
// Exports: default

// Module 17338 (navigateToSystemDM)
import _modDef5364 from "module_5364" /* 5364 */;
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 17337 */;

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef5364.selectPrivateChannel(dMFromUserId);
    const obj = _modDef5364;
  }
};
