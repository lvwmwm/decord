// Module ID: 16244
// Function ID: 126080
// Name: navigateToSystemDM
// Dependencies: [1348, 16243, 4945, 2]
// Exports: default

// Module 16244 (navigateToSystemDM)
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
