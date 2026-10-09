// Module ID: 12533
// Function ID: 12534
// Name: playInAppMessageSound
// Dependencies: [12517, 12534, 1085, 1628, 10940, 2]
// Exports: playInAppMessageSound

// Module 12533 (playInAppMessageSound)
import Constants from "Constants" /* 1085 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 12534 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12517 */;
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
            const tmp8Result = tmp8(10940);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
};
