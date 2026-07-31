// Module ID: 16353
// Function ID: 16354
// Name: navigateToSystemDM
// Dependencies: [1372, 16352, 5005, 2]
// Exports: default

// Module 16353 (navigateToSystemDM)
import ensureGuildLoaded from "ensureGuildLoaded";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_5005").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(5005).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(5005);
  }
};
