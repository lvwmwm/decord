// Module ID: 16370
// Function ID: 16371
// Name: triggerIOSHaptic
// Dependencies: [11842, 4348, 2]
// Exports: default

// Module 16370 (triggerIOSHaptic)
import set from "set" /* 2 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 4348 */;
import MIN_PAN_GESTURE_MOVE from "MIN_PAN_GESTURE_MOVE" /* 11842 */;

const IS_IOS = MIN_PAN_GESTURE_MOVE.IS_IOS;
let result = set.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticFeedbackTypes.triggerHapticFeedback(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = HapticFeedbackTypes;
  }
};
