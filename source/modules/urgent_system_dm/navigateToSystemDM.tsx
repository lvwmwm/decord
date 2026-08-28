// Module ID: 17013
// Function ID: 17014
// Name: navigateToSystemDM
// Dependencies: [1391, 17012, 5320, 2]
// Exports: default

// Module 17013 (navigateToSystemDM)
import _modDef5320 from "module_5320" /* 5320 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 17012 */;

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef5320.selectPrivateChannel(dMFromUserId);
    const obj = _modDef5320;
  }
};
