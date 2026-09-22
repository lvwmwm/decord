// Module ID: 17456
// Function ID: 17457
// Name: triggerIOSHaptic
// Dependencies: [12421, 4726, 2]
// Exports: default

// Module 17456 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4726 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12421 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
