// Module ID: 13449
// Function ID: 13450
// Name: playInAppMessageSound
// Dependencies: [13433, 13450, 1087, 1630, 11298, 2]
// Exports: playInAppMessageSound

// Module 13449 (playInAppMessageSound)
import Constants from "Constants" /* 1087 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 13450 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 13433 */;
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
            const tmp8Result = tmp8(11298);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
};
