// Module ID: 13720
// Function ID: 13721
// Name: playInAppMessageSound
// Dependencies: [13704, 13721, 1087, 1630, 11502, 2]
// Exports: playInAppMessageSound

// Module 13720 (playInAppMessageSound)
import Constants from "Constants" /* 1087 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 13721 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 13704 */;
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
            const tmp8Result = tmp8(11502);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
};
