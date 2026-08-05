// Module ID: 16432
// Function ID: 16433
// Name: navigateToSystemDM
// Dependencies: [1372, 16431, 5081, 2]
// Exports: default

// Module 16432 (navigateToSystemDM)
import ensureGuildLoaded from "ensureGuildLoaded";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_5081").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(5081).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(5081);
  }
};
