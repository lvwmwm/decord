// Module ID: 9551
// Function ID: 9552
// Name: playInAppMessageSound
// Dependencies: [9530, 9552, 1074, 1609, 9346, 2]
// Exports: playInAppMessageSound

// Module 9551 (playInAppMessageSound)
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 9530 */;

require = fn;
let closure_3 = fn(9552).isInAppMessageSoundsEnabled;
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
            tmp8(9346).playSound(tmp3, 0.4);
            const tmp8Result = tmp8(9346);
          }
        }
        tmp3 = message1;
      }
    }
    obj2 = MetaQuestUtils;
    tmp8 = require;
  }
};
