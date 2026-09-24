// Module ID: 17589
// Function ID: 17590
// Name: triggerIOSHaptic
// Dependencies: [12616, 4797, 2]
// Exports: default

// Module 17589 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4797 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12616 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
