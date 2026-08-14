// Module ID: 16670
// Function ID: 16671
// Name: navigateToSystemDM
// Dependencies: [1391, 16669, 5191, 2]
// Exports: default

// Module 16670 (navigateToSystemDM)
import ensureGuildLoaded from "ensureGuildLoaded";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_5191").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(5191).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(5191);
  }
};
