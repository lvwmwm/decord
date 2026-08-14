// Module ID: 9838
// Function ID: 9839
// Name: playInAppMessageSound
// Dependencies: [9814, 9839, 676, 1624, 9840, 2]
// Exports: playInAppMessageSound

// Module 9838 (playInAppMessageSound)
import DesktopNotificationTypes from "DesktopNotificationTypes";
import { isInAppMessageSoundsEnabled as closure_3 } from "isInAppMessageSoundsEnabled";
import { InAppNotificationTypes } from "ME";

const require = arg1;
const message1 = "message1";
let c6 = 0;
const result = require("ME").fileFinishedImporting("modules/notifications/native/playInAppMessageSound.tsx");

export const playInAppMessageSound = function playInAppMessageSound(notification) {
  if (notification.type === InAppNotificationTypes.MESSAGE) {
    if (obj2.isMetaQuest()) {
      if (callback()) {
        if (!soundDisabled.isSoundDisabled(message1)) {
          const _Date = Date;
          const timestamp = Date.now();
          if (timestamp - timestamp >= 1000) {
            tmp8(9840).playSound(tmp3, 0.4);
            const tmp8Result = tmp8(9840);
          }
        }
        tmp3 = message1;
      }
    }
    obj2 = require(1624) /* isMetaQuest */;
    tmp8 = require;
  }
};
