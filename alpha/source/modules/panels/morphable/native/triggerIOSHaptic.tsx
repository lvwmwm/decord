// Module ID: 17033
// Function ID: 17034
// Name: triggerIOSHaptic
// Dependencies: [11925, 4801, 2]
// Exports: default

// Module 17033 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4801 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11925 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
