// Module ID: 16533
// Function ID: 16534
// Name: triggerIOSHaptic
// Dependencies: [11777, 4414, 2]
// Exports: default

// Module 16533 (triggerIOSHaptic)
import set from "set" /* 2 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 4414 */;
import MIN_PAN_GESTURE_MOVE from "MIN_PAN_GESTURE_MOVE" /* 11777 */;

const IS_IOS = MIN_PAN_GESTURE_MOVE.IS_IOS;
let result = set.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticFeedbackTypes.triggerHapticFeedback(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = HapticFeedbackTypes;
  }
};
