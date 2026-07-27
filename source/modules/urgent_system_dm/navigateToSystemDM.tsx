// Module ID: 16256
// Function ID: 126127
// Name: navigateToSystemDM
// Dependencies: [1348, 16255, 4945, 2]
// Exports: default

// Module 16256 (navigateToSystemDM)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_4945").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(4945).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(4945);
  }
};
