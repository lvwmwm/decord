// Module ID: 17068
// Function ID: 17069
// Name: triggerIOSHaptic
// Dependencies: [11959, 4831, 2]
// Exports: default

// Module 17068 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4831 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11959 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
