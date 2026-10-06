// Module ID: 12497
// Function ID: 12498
// Name: playInAppMessageSound
// Dependencies: [12481, 12498, 1085, 1615, 9575, 2]
// Exports: playInAppMessageSound

// Module 12497 (playInAppMessageSound)
import Constants from "Constants" /* 1085 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 12498 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12481 */;
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
            const tmp8Result = tmp8(9575);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
};
