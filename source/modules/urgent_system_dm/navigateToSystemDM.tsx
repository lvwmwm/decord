// Module ID: 16597
// Function ID: 16598
// Name: navigateToSystemDM
// Dependencies: [1391, 16596, 5129, 2]
// Exports: default

// Module 16597 (navigateToSystemDM)
import ensureGuildLoaded from "ensureGuildLoaded";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_5129").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(5129).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(5129);
  }
};
