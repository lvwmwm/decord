// Module ID: 10231
// Function ID: 79049
// Name: playInAppMessageSound
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: playInAppMessageSound

// Module 10231 (playInAppMessageSound)
import closure_2 from "result";
import { isInAppMessageSoundsEnabled as closure_3 } from "result";
import { InAppNotificationTypes } from "result";
import result from "result";

let closure_5 = 0;
result = result.fileFinishedImporting("modules/notifications/native/playInAppMessageSound.tsx");

export const playInAppMessageSound = function playInAppMessageSound(notification) {
  if (notification.type === InAppNotificationTypes.MESSAGE) {
    if (obj2.isMetaQuest()) {
      if (callback()) {
        if (!soundDisabled.isSoundDisabled("message1")) {
          const _Date = Date;
          const timestamp = Date.now();
          if (timestamp - closure_5 >= 1000) {
            closure_5 = timestamp;
            arg1(dependencyMap[4]).playSound("message1", 0.4);
            const obj = arg1(dependencyMap[4]);
          }
        }
      }
    }
    const obj2 = arg1(dependencyMap[3]);
  }
};
