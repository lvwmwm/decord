// Module ID: 16330
// Function ID: 16331
// Name: navigateToSystemDM
// Dependencies: [1372, 16329, 5001, 2]
// Exports: default

// Module 16330 (navigateToSystemDM)
import ensureGuildLoaded from "ensureGuildLoaded";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_5001").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(5001).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(5001);
  }
};
