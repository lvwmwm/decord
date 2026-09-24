// Module ID: 13002
// Function ID: 13003
// Name: playInAppMessageSound
// Dependencies: [12984, 13003, 1078, 1613, 10176, 2]
// Exports: playInAppMessageSound

// Module 13002 (playInAppMessageSound)
import MetaQuestUtils from "MetaQuestUtils" /* 1613 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12984 */;

require = fn;
let closure_3 = fn(13003).isInAppMessageSoundsEnabled;
const InAppNotificationTypes = fn(1078).InAppNotificationTypes;
const message1 = "message1";
let timestamp = 0;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/native/playInAppMessageSound.tsx");

export const playInAppMessageSound = function playInAppMessageSound(notification) {
  if (notification.type === InAppNotificationTypes.MESSAGE) {
    if (obj2.isMetaQuest()) {
      if (closure_3()) {
        if (!NotificationSettingsStore.isSoundDisabled(message1)) {
          const _Date = Date;
          timestamp = Date.now();
          if (timestamp - timestamp >= 1000) {
            tmp8(10176).playSound(tmp3, 0.4);
            const tmp8Result = tmp8(10176);
          }
        }
        tmp3 = message1;
      }
    }
    obj2 = MetaQuestUtils;
    tmp8 = require;
  }
};
