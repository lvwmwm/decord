// Module ID: 10365
// Function ID: 10366
// Name: playInAppMessageSound
// Dependencies: [10344, 10366, 1074, 1609, 10164, 2]
// Exports: playInAppMessageSound

// Module 10365 (playInAppMessageSound)
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 10344 */;

require = fn;
let closure_3 = fn(10366).isInAppMessageSoundsEnabled;
const InAppNotificationTypes = fn(1074).InAppNotificationTypes;
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
            tmp8(10164).playSound(tmp3, 0.4);
            const tmp8Result = tmp8(10164);
          }
        }
        tmp3 = message1;
      }
    }
    obj2 = MetaQuestUtils;
    tmp8 = require;
  }
};
