// Module ID: 17466
// Function ID: 17467
// Name: triggerIOSHaptic
// Dependencies: [12457, 4758, 2]
// Exports: default

// Module 17466 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4758 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12457 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
