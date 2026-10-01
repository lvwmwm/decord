// Module ID: 9562
// Function ID: 9563
// Name: playInAppMessageSound
// Dependencies: [9541, 9563, 1074, 1610, 9357, 2]
// Exports: playInAppMessageSound

// Module 9562 (playInAppMessageSound)
import Constants from "Constants" /* 1074 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 9563 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 9541 */;
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
            const tmp8Result = tmp8(9357);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
};
