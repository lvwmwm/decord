// Module ID: 16233
// Function ID: 125912
// Name: navigateToSystemDM
// Dependencies: [1348, 16232, 4944, 2]
// Exports: default

// Module 16233 (navigateToSystemDM)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_4944").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(4944).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(4944);
  }
};
