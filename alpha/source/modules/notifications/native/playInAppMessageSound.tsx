// Module ID: 13647
// Function ID: 13648
// Name: playInAppMessageSound
// Dependencies: [13631, 13648, 1087, 1630, 11454, 2]
// Exports: playInAppMessageSound

// Module 13647 (playInAppMessageSound)
import Constants from "Constants" /* 1087 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 13648 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 13631 */;
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
            const tmp8Result = tmp8(11454);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
};
