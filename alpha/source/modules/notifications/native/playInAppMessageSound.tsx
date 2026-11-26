// Module ID: 10632
// Function ID: 10633
// Name: playInAppMessageSound
// Dependencies: [10599, 10633, 1071, 1626, 10298, 2]
// Exports: playInAppMessageSound

// Module 10632 (playInAppMessageSound)
import Constants from "Constants" /* 1071 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1626 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 10633 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 10599 */;
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
            const tmp8Result = tmp8(10298);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
}
