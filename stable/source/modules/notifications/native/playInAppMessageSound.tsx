// Module ID: 13523
// Function ID: 13524
// Name: playInAppMessageSound
// Dependencies: [13507, 13524, 1087, 1630, 11372, 2]
// Exports: playInAppMessageSound

// Module 13523 (playInAppMessageSound)
import Constants from "Constants" /* 1087 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 13524 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 13507 */;
import size from "module_2" /* 2 */;

let closure_3 = InAppMessageSoundsStore.isInAppMessageSoundsEnabled;
const InAppNotificationTypes = Constants.InAppNotificationTypes;
const message1 = "message1";
let timestamp = 0;
const result = size.fileFinishedImporting("modules/notifications/native/playInAppMessageSound.tsx");

export const playInAppMessageSound = function playInAppMessageSound(notification) {
  if (notification.type === InAppNotificationTypes.MESSAGE) {
    const obj2 = MetaQuestUtils;
    const tmp8 = require;
    if (obj2.isMetaQuest()) {
      if (closure_3()) {
        const tmp3 = message1;
        if (!NotificationSettingsStore.isSoundDisabled(message1)) {
          const _Date = Date;
          timestamp = Date.now();
          if (timestamp - timestamp >= 1000) {
            const tmp8Result = tmp8(11372);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
};
