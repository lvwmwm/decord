// Module ID: 15762
// Function ID: 121593
// Name: triggerIOSHaptic
// Dependencies: [9977, 4100, 2]
// Exports: default

// Module 15762 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4100) /* getAndroidLightImpactEffect */.triggerHapticFeedback(require(4100) /* getAndroidLightImpactEffect */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4100) /* getAndroidLightImpactEffect */;
  }
};
