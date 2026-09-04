// Module ID: 17418
// Function ID: 17419
// Name: navigateToSystemDM
// Dependencies: [1386, 17417, 5372, 2]
// Exports: default

// Module 17418 (navigateToSystemDM)
import _modDef5372 from "module_5372" /* 5372 */;
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 17417 */;

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef5372.selectPrivateChannel(dMFromUserId);
    const obj = _modDef5372;
  }
};
