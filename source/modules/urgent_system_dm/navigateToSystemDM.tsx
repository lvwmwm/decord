// Module ID: 16295
// Function ID: 126283
// Name: navigateToSystemDM
// Dependencies: [1348, 16294, 4979, 2]
// Exports: default

// Module 16295 (navigateToSystemDM)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_4979").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(4979).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(4979);
  }
};
