// Module ID: 17090
// Function ID: 17091
// Name: triggerIOSHaptic
// Dependencies: [11966, 4810, 2]
// Exports: default

// Module 17090 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4810 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11966 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
