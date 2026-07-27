// Module ID: 10208
// Function ID: 78983
// Name: playInAppMessageSound
// Dependencies: [10184, 10209, 653, 1553, 10210, 2]
// Exports: playInAppMessageSound

// Module 10208 (playInAppMessageSound)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isInAppMessageSoundsEnabled as closure_3 } from "isInAppMessageSoundsEnabled";
import { InAppNotificationTypes } from "ME";

const require = arg1;
let c5 = 0;
const result = require("ME").fileFinishedImporting("modules/notifications/native/playInAppMessageSound.tsx");

export const playInAppMessageSound = function playInAppMessageSound(notification) {
  if (notification.type === InAppNotificationTypes.MESSAGE) {
    if (obj2.isMetaQuest()) {
      if (callback()) {
        if (!soundDisabled.isSoundDisabled("message1")) {
          const _Date = Date;
          const timestamp = Date.now();
          if (timestamp - timestamp >= 1000) {
            require(10210) /* createSound */.playSound("message1", 0.4);
            const obj = require(10210) /* createSound */;
          }
        }
      }
    }
    obj2 = require(1553) /* isMetaQuest */;
  }
};
