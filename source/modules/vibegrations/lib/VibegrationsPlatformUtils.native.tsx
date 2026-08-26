// Module ID: 16024
// Function ID: 16025
// Dependencies: [7085, 13256, 10933, 2]

// Module 16024
import NativeModulesDefault from "NativeModules" /* 10933 */;
import closure_2 from "getState" /* 7085 */;
import { LocalNotificationTypes } from "LocalNotificationTypes" /* 13256 */;

let result = require("set").fileFinishedImporting("modules/vibegrations/lib/VibegrationsPlatformUtils.native.tsx");

export default {
  openVibegrationsAppInstallModal() {
    return Promise.resolve();
  },
  isWindowFocused() {
    return "active" === state.getState();
  },
  areTurnNotificationsDisabled() {
    return false;
  },
  presentTurnNotification(arg0) {
    ({ projectId, guildId } = arg0);
    ({ title, body } = arg0);
    let obj = NativeModulesDefault;
    obj = { category: "local", alertTitle: title, alertBody: body, userInfo: null };
    obj = { type: LocalNotificationTypes.VIBEGRATIONS, projectId, channel_id: projectId };
    if (null != guildId) {
      obj1 = { guildId: null };
      obj1[0] = guildId;
      let obj2 = obj1;
    } else {
      obj2 = {};
    }
    const merged = Object.assign(obj2);
    obj[3] = obj;
    const result = obj.presentLocalNotification(obj);
  },
  relayPreviewCapture(closure_0, id, arg2) {
    return Promise.resolve({ status: "unavailable" });
  },
  relayPreviewControl(closure_0, id, request, arg3) {
    return Promise.resolve({ status: "unavailable" });
  },
  releasePreviewControl(closure_0) {

  },
  beginPreviewOperation(projectId) {

  },
  endPreviewOperation(projectId) {

  }
};
