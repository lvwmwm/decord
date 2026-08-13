// Module ID: 16657
// Function ID: 16658
// Name: navigateToSystemDM
// Dependencies: [1391, 16656, 5170, 2]
// Exports: default

// Module 16657 (navigateToSystemDM)
import ensureGuildLoaded from "ensureGuildLoaded";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_5170").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(5170).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(5170);
  }
};
