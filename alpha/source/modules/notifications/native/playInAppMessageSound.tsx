// Module ID: 10488
// Function ID: 10489
// Name: playInAppMessageSound
// Dependencies: [10455, 10489, 1071, 1625, 10157, 2]
// Exports: playInAppMessageSound

// Module 10488 (playInAppMessageSound)
import Constants from "Constants" /* 1071 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 10489 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 10455 */;
import size from "module_2" /* 2 */;

let closure_3 = InAppMessageSoundsStore.isInAppMessageSoundsEnabled;
const InAppNotificationTypes = Constants.InAppNotificationTypes;
const message1 = "message1";
let timestamp = 0;
const result = size.fileFinishedImporting("modules/notifications/native/playInAppMessageSound.tsx");

export function playInAppMessageSound(notification) {
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
            const tmp8Result = tmp8(10157);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
}
