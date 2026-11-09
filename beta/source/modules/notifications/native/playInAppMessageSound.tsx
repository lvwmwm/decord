// Module ID: 11158
// Function ID: 11159
// Name: playInAppMessageSound
// Dependencies: [11141, 11159, 1072, 1624, 11160, 2]
// Exports: playInAppMessageSound

// Module 11158 (playInAppMessageSound)
import Constants from "Constants" /* 1072 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 11159 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 11141 */;
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
            const tmp8Result = tmp8(11160);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
}
