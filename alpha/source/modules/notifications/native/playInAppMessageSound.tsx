// Module ID: 14228
// Function ID: 14229
// Name: playInAppMessageSound
// Dependencies: [14212, 14229, 1084, 1628, 11620, 2]
// Exports: playInAppMessageSound

// Module 14228 (playInAppMessageSound)
import Constants from "Constants" /* 1084 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 14229 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 14212 */;
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
            const tmp8Result = tmp8(11620);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
}
