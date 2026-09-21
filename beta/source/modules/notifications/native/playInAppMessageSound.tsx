// Module ID: 12966
// Function ID: 12967
// Name: playInAppMessageSound
// Dependencies: [12948, 12967, 1078, 1613, 10137, 2]
// Exports: playInAppMessageSound

// Module 12966 (playInAppMessageSound)
import MetaQuestUtils from "MetaQuestUtils" /* 1613 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12948 */;

require = fn;
let closure_3 = fn(12967).isInAppMessageSoundsEnabled;
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
            tmp8(10137).playSound(tmp3, 0.4);
            const tmp8Result = tmp8(10137);
          }
        }
        tmp3 = message1;
      }
    }
    obj2 = MetaQuestUtils;
    tmp8 = require;
  }
};
