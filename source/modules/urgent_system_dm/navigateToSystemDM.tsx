// Module ID: 16419
// Function ID: 16420
// Name: navigateToSystemDM
// Dependencies: [1372, 16418, 5067, 2]
// Exports: default

// Module 16419 (navigateToSystemDM)
import ensureGuildLoaded from "ensureGuildLoaded";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_5067").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(5067).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(5067);
  }
};
