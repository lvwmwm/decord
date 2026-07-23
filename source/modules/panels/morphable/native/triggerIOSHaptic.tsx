// Module ID: 15704
// Function ID: 121102
// Name: triggerIOSHaptic
// Dependencies: [10016, 4099, 2]
// Exports: default

// Module 15704 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4099) /* getAndroidLightImpactEffect */.triggerHapticFeedback(require(4099) /* getAndroidLightImpactEffect */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4099) /* getAndroidLightImpactEffect */;
  }
};
