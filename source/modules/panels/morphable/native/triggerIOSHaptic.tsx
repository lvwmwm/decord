// Module ID: 15813
// Function ID: 121796
// Name: triggerIOSHaptic
// Dependencies: [10017, 4134, 2]
// Exports: default

// Module 15813 (triggerIOSHaptic)
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4134) /* getAndroidLightImpactEffect */.triggerHapticFeedback(require(4134) /* getAndroidLightImpactEffect */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4134) /* getAndroidLightImpactEffect */;
  }
};
