// Module ID: 11167
// Function ID: 11168
// Name: playInAppMessageSound
// Dependencies: [11150, 11168, 1072, 1624, 11169, 2]
// Exports: playInAppMessageSound

// Module 11167 (playInAppMessageSound)
import Constants from "Constants" /* 1072 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 11168 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 11150 */;
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
            const tmp8Result = tmp8(11169);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
}
