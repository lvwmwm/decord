// Module ID: 11190
// Function ID: 11191
// Name: playInAppMessageSound
// Dependencies: [11173, 11191, 1072, 1624, 11192, 2]
// Exports: playInAppMessageSound

// Module 11190 (playInAppMessageSound)
import Constants from "Constants" /* 1072 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 11191 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 11173 */;
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
            const tmp8Result = tmp8(11192);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
}
