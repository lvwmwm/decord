// Module ID: 17485
// Function ID: 17486
// Name: triggerIOSHaptic
// Dependencies: [12527, 4724, 2]
// Exports: default

// Module 17485 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4724 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12527 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
