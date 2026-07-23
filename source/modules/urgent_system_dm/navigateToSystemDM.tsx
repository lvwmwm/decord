// Module ID: 16186
// Function ID: 125588
// Name: navigateToSystemDM
// Dependencies: [1348, 16185, 4944, 2]
// Exports: default

// Module 16186 (navigateToSystemDM)
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
