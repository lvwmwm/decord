// Module ID: 16716
// Function ID: 16717
// Name: navigateToSystemDM
// Dependencies: [1391, 16715, 4975, 2]
// Exports: default

// Module 16716 (navigateToSystemDM)
import ensureGuildLoaded from "ensureGuildLoaded";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_4975").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(4975).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(4975);
  }
};
