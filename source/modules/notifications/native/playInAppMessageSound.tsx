// Module ID: 10244
// Function ID: 79134
// Name: playInAppMessageSound
// Dependencies: [10220, 10245, 653, 1553, 10246, 2]
// Exports: playInAppMessageSound

// Module 10244 (playInAppMessageSound)
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
            require(10246) /* createSound */.playSound("message1", 0.4);
            const obj = require(10246) /* createSound */;
          }
        }
      }
    }
    obj2 = require(1553) /* isMetaQuest */;
  }
};
