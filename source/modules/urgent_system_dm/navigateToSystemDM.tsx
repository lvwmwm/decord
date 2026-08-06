// Module ID: 16472
// Function ID: 16473
// Name: navigateToSystemDM
// Dependencies: [1372, 16471, 5111, 2]
// Exports: default

// Module 16472 (navigateToSystemDM)
import ensureGuildLoaded from "ensureGuildLoaded";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_5111").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(5111).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(5111);
  }
};
