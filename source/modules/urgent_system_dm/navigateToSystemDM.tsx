// Module ID: 17082
// Function ID: 17083
// Name: navigateToSystemDM
// Dependencies: [1387, 17081, 5355, 2]
// Exports: default

// Module 17082 (navigateToSystemDM)
import _modDef5355 from "module_5355" /* 5355 */;
import closure_2 from "ensureGuildLoaded" /* 1387 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 17081 */;

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef5355.selectPrivateChannel(dMFromUserId);
    const obj = _modDef5355;
  }
};
