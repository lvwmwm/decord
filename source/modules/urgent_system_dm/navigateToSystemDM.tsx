// Module ID: 16655
// Function ID: 16656
// Name: navigateToSystemDM
// Dependencies: [1391, 16654, 5169, 2]
// Exports: default

// Module 16655 (navigateToSystemDM)
import ensureGuildLoaded from "ensureGuildLoaded";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_5169").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(5169).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(5169);
  }
};
