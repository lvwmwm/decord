// Module ID: 12228
// Function ID: 12229
// Name: playInAppMessageSound
// Dependencies: [12210, 12229, 1086, 1616, 9335, 2]
// Exports: playInAppMessageSound

// Module 12228 (playInAppMessageSound)
import Constants from "Constants" /* 1086 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1616 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 12229 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12210 */;
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
            const tmp8Result = tmp8(9335);
            tmp8Result.playSound(tmp3, 0.4);
          }
        }
      }
    }
  }
};
