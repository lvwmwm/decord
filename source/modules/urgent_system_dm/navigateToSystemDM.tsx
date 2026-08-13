// Module ID: 16666
// Function ID: 16667
// Name: navigateToSystemDM
// Dependencies: [1391, 16665, 5170, 2]
// Exports: default

// Module 16666 (navigateToSystemDM)
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
