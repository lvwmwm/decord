// Module ID: 17490
// Function ID: 17491
// Name: triggerIOSHaptic
// Dependencies: [12556, 4756, 2]
// Exports: default

// Module 17490 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4756 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12556 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
