// Module ID: 16844
// Function ID: 16845
// Name: navigateToSystemDM
// Dependencies: [1391, 16843, 5236, 2]
// Exports: default

// Module 16844 (navigateToSystemDM)
import _modDef5236 from "module_5236" /* 5236 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 16843 */;

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef5236.selectPrivateChannel(dMFromUserId);
    const obj = _modDef5236;
  }
};
