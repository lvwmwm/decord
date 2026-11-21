// Module ID: 11119
// Function ID: 11120
// Name: playInAppMessageSound
// Dependencies: [11102, 11120, 1071, 1625, 10883, 2]
// Exports: playInAppMessageSound

// Module 11119 (playInAppMessageSound)
import Constants from "Constants" /* 1071 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 11120 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 11102 */;
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
            const tmp8Result = tmp8(10883);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
}
