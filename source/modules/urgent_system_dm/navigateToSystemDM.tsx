// Module ID: 16451
// Function ID: 16452
// Name: navigateToSystemDM
// Dependencies: [1372, 16450, 5096, 2]
// Exports: default

// Module 16451 (navigateToSystemDM)
import ensureGuildLoaded from "ensureGuildLoaded";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_5096").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(5096).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(5096);
  }
};
