// Module ID: 17133
// Function ID: 17134
// Name: triggerIOSHaptic
// Dependencies: [12407, 4604, 2]
// Exports: default

// Module 17133 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4604 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12407 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
