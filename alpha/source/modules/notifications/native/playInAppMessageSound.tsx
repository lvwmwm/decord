// Module ID: 12593
// Function ID: 12594
// Name: playInAppMessageSound
// Dependencies: [12577, 12594, 1085, 1627, 10770, 2]
// Exports: playInAppMessageSound

// Module 12593 (playInAppMessageSound)
import Constants from "Constants" /* 1085 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 12594 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12577 */;
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
            const tmp8Result = tmp8(10770);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
};
