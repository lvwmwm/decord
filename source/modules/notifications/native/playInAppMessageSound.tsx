// Module ID: 10038
// Function ID: 10039
// Name: playInAppMessageSound
// Dependencies: [10015, 10039, 676, 1625, 10040, 2]
// Exports: playInAppMessageSound

// Module 10038 (playInAppMessageSound)
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
            tmp8(10040).playSound(tmp3, 0.4);
            const tmp8Result = tmp8(10040);
          }
        }
        tmp3 = message1;
      }
    }
    obj2 = require(1625) /* isMetaQuest */;
    tmp8 = require;
  }
};
