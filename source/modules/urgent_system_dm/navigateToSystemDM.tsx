// Module ID: 16929
// Function ID: 16930
// Name: navigateToSystemDM
// Dependencies: [1391, 16928, 5302, 2]
// Exports: default

// Module 16929 (navigateToSystemDM)
import _modDef5302 from "module_5302" /* 5302 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 16928 */;

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef5302.selectPrivateChannel(dMFromUserId);
    const obj = _modDef5302;
  }
};
